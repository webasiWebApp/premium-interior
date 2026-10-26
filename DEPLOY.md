# Deployment guide

This project is a Next.js 16 application. It currently has a contact API route at
`src/app/api/contact/route.ts`, which sends email through Resend. There is no
separate backend service, PostgreSQL client, database schema, or migration in the
repository. In other words, deploying PostgreSQL does not by itself make this
application use or save data in the database.

## Option 1: Deploy the current application (no code changes)

For the code as it exists today, deploy the complete Next.js application to
Vercel. Vercel will host both the website and its `/api/contact` route. Railway
PostgreSQL can be created now for future use, but it will remain unused until
database integration is added.

### 1. Prepare the repository

1. Push the project to a GitHub repository.
2. From the project root, confirm the app builds locally:

   ```bash
   npm ci
   npm run build
   ```

3. Do not commit `.env.local` or other environment files. They are ignored by
   `.gitignore`.

### 2. Create the Railway PostgreSQL database (optional for the current code)

1. Sign in to [Railway](https://railway.com/) and create a project.
2. In the project, select **New** → **Database** → **PostgreSQL**.
3. Wait for the database deployment to become healthy.
4. Open the PostgreSQL service's **Variables** tab and note that Railway provides
   `DATABASE_URL` and the individual `PG*` connection variables.
5. Keep the database private. Do not enable public networking just to connect
   services within Railway.

The current application does not read `DATABASE_URL`; do not expect contact
submissions to appear in PostgreSQL. When database support is implemented, add
the appropriate PostgreSQL client/schema/migrations and configure the backend
service to use Railway's private `DATABASE_URL`.

### 3. Deploy the website and contact route to Vercel

1. Sign in to [Vercel](https://vercel.com/) and select **Add New** → **Project**.
2. Import the GitHub repository containing this project.
3. Keep the project root as the repository root. Vercel should detect Next.js.
   Use the standard Next.js build settings (`npm run build`) and do not configure
   a static export; the contact route needs a server runtime.
4. Before deploying, add these values under **Project Settings** → **Environment
   Variables**:

   | Name | Value |
   | --- | --- |
   | `RESEND_API_KEY` | Your Resend API key |
   | `RECIPIENT_EMAIL` | Email address that should receive inquiries |
   | `SENDER_EMAIL` | Verified sender, for example `Premium Interior <inquiries@your-domain.com>` |

   Add them to **Production** and to **Preview** only if preview deployments
   should be able to send real inquiries. These are server-side variables; do
   not prefix them with `NEXT_PUBLIC_`. Never commit their values to Git.
5. Select **Deploy** and wait for the build to finish.
6. Open the assigned Vercel URL, submit a test inquiry, and confirm it arrives
   at `RECIPIENT_EMAIL`. The sender domain must be configured/verified in Resend
   for production email delivery.
7. To use a custom domain, add it in Vercel under **Project Settings** →
   **Domains**, then follow Vercel's DNS instructions.

If you change an environment variable, redeploy the Vercel project so the new
value is applied.

## Option 2: Vercel frontend + Railway backend + Railway PostgreSQL

This is a separate architecture and is **not deployable from the current
repository without a code change**. The contact route is currently part of the
Next.js app and the form calls the same-origin `/api/contact` path. There is no
standalone backend service for Railway to deploy, and the route currently sends
email rather than using PostgreSQL.

To use this split setup:

1. **Create a standalone backend first.** Move/implement the API in a backend
   service that can be started independently. Add PostgreSQL integration and
   schema/migrations if the backend needs to save inquiries. Keep the Resend
   key and database connection string on the backend only.
2. **Connect the backend to Railway PostgreSQL.** In Railway, create the
   PostgreSQL service as in Option 1. Add the backend service to the same
   Railway project, then set its `DATABASE_URL` to a Railway service-variable
   reference such as `${{Postgres.DATABASE_URL}}` (replace `Postgres` with the
   actual database service name). Use the private/internal database connection,
   not a public TCP proxy URL.
3. **Deploy the backend service to Railway.** Connect its source repository,
   set the root directory to the backend's actual directory, configure its
   build and start commands to match that backend's package scripts, and add
   its server-side variables (for example `RESEND_API_KEY` and `DATABASE_URL`).
   Generate a Railway public domain for the HTTP API and verify its health/API
   endpoint using that URL.
4. **Allow requests from the Vercel website.** Configure the backend's CORS
   policy to allow the production Vercel domain and any explicitly needed
   preview domains. Do not allow every origin in production.
5. **Point the frontend to the Railway API.** Update the contact form to call
   the backend's HTTPS URL instead of the current relative `/api/contact` path.
   If the browser needs a configurable API base URL, add a `NEXT_PUBLIC_*`
   frontend variable in Vercel and set it to the Railway API URL. This URL is
   public; never put API keys or database credentials in a `NEXT_PUBLIC_*`
   variable.
6. **Deploy the frontend to Vercel** using the steps in Option 1. Set the
   frontend API URL for Production (and Preview if applicable), then redeploy.
7. **Verify the complete flow.** Submit a test inquiry from the deployed
   Vercel domain, confirm the Railway API accepts it, check that it is saved in
   PostgreSQL if persistence was implemented, and confirm any expected email
   arrives.

Do not deploy the same unmodified Next.js app as both the Vercel frontend and a
Railway backend expecting the services to connect automatically: the current
form still calls Vercel's own `/api/contact` route, and Railway's database is
not automatically connected to either deployment.

## Useful links

- [Vercel: Deploying a Next.js application](https://vercel.com/docs/frameworks/full-stack/nextjs)
- [Railway: PostgreSQL](https://docs.railway.com/databases/postgresql)
- [Next.js: Deploying](https://nextjs.org/docs/app/getting-started/deploying)