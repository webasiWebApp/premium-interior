# Build Prompt: Platinum Interiors Landing Page

You are building a production-quality marketing landing page for **Platinum Interiors**, a Sri Lankan interiors and construction company. Follow every spec below precisely. Do not invent sections or content that isn't described here.

---

## 1. Tech Stack

- **Next.js 14+** (App Router, TypeScript)
- **Tailwind CSS** for all styling — no CSS modules, no styled-components
- **Framer Motion** for reveal animations, hover micro-interactions, and hero text transitions
- **Lenis** (`@studio-freight/lenis` or `lenis`) for smooth/inertia scrolling across the whole page — wrap the app in a `SmoothScrollProvider` client component that initializes Lenis and syncs its `requestAnimationFrame` loop with Framer Motion's `useScroll`
- Use Framer Motion's `useScroll` + `useTransform` (driven by Lenis-synced scroll) for all parallax effects
- All images optimized via `next/image`
- Fully responsive: mobile (< 640px), tablet (640–1024px), desktop (> 1024px)

## 2. Project Structure

Organize with a clear component-first architecture. Every visually repeated or logically distinct UI piece must be its own component:

```
/app
  layout.tsx          -> loads Montserrat font, SmoothScrollProvider, Navbar, Footer
  page.tsx             -> composes all sections in order
  globals.css

/components
  /ui
    Button.tsx          -> variant="primary" | "secondary"
    StatItem.tsx         -> single animated stat (number + label)
    RevealOnScroll.tsx    -> generic wrapper: fade+slide up on scroll into view
    SectionHeading.tsx     -> reusable {heading, paragraph} block (size/color props)
  Navbar.tsx
  Footer.tsx
  /sections
    Hero.tsx
    HeroCarousel.tsx        -> carousel logic, slide indicators/nav
    HeroSlide.tsx            -> single slide (bg image + 3 text layers + buttons + stats)
    About.tsx
    WhyChooseUs.tsx
    WhyChooseUsCard.tsx
    Portfolio.tsx
    PortfolioGrid.tsx
    Quote.tsx

/lib
  useCountUp.ts          -> custom hook for the stat counting animation
  smoothScroll.tsx        -> Lenis provider + hook to scroll to a section by id

/public
  logo.jpg, logoW.jpg
  herobg1.png, herobg2.png, herobg3.png
  aboutImg1.png, aboutImg2.png, aboutImg3.png, aboutImg4.png
  whychooseus.png
  quote.png
  /portfolio
    p1.JPG ... p25.JPG
```

All images referenced below already exist in `/public` (I will drop them in) — reference them by these exact filenames, do not use placeholders.

## 3. Design System

- **Font:** Montserrat (all weights used: light, regular, medium, semibold, bold) — load via `next/font/google`
- **Colors:**
  - Primary: `#186172` (deep teal)
  - Secondary: `#C1E700` (lime)
  - Add both to `tailwind.config.ts` as `primary` and `secondary` so they can be used as `bg-primary`, `text-secondary`, etc.

### Button Component (`components/ui/Button.tsx`)

Props: `variant: "primary" | "secondary"`, `href` or `onClick`, `children`.

- **Primary:** `bg-primary text-secondary`, 14px, medium weight
- **Secondary:** `bg-secondary text-primary`, 14px, medium weight
- Base: padding ~`px-6 py-3`, rounded corners (small radius, not full pill), uppercase or letter-spaced text to match the reference screenshots
- **Hover animation (be creative, using Framer Motion):** implement a magnetic/shine effect — e.g. a diagonal light-sweep gradient that slides across the button on hover, combined with a subtle scale-up (`scale: 1.03`) and the text/icon nudging slightly. Use `whileHover` and a pseudo-element or motion-animated gradient overlay clipped to the button shape. Keep it snappy (~300–400ms ease).

## 4. Navigation (`components/Navbar.tsx`)

- Fixed/sticky top navbar, transparent over hero, background fades in on scroll (use scroll-position state or Framer's `useScroll`)
- Logo: `logo.jpg` normally; swap to `logoW.jpg` (white variant) when navbar is transparent over the dark hero image — toggle based on scroll position/section theme
- Nav items: `Our Work`, `Why Us`, `Kitchens`, `Team`, `FAQ` — 14px, regular weight, white text. Since Kitchens/Team/FAQ sections don't exist yet, make these plain inert links (`href="#"`, no scroll behavior) — I'll wire them up later. `Our Work` and `Why Us` should smooth-scroll to the Portfolio and Why-Choose-Us sections respectively.
- Right side: `Button` (primary variant) labeled **"Book Free Home Visit"**
- Mobile: collapse nav items into a hamburger menu with a slide-in drawer (animate with Framer Motion)

## 5. Hero Section (`sections/Hero.tsx`, `HeroCarousel.tsx`, `HeroSlide.tsx`)

A full-viewport-height auto-playing carousel with 3 slides, matching the 3 reference screenshots. Build a reusable `HeroSlide` component driven by a data array so slides are easy to edit later.

**Slide data (use this exact copy):**

```ts
const slides = [
  {
    bg: "/herobg1.png",
    eyebrow: "28 YEARS · SRI LANKA'S TRUSTED INTERIORS TEAM",
    headline: [
      { text: "FEEL PROUD ", color: "primary" },
      { text: "EVERY TIME " , color: "white" },
      { text: "YOU WALK IN", color: "white" },
    ],
    // Note: render as wrapping lines matching the screenshot's 3-line layout
    body: "Platinum Interiors Designs, Builds And Installs Premium Windows, Doors, Glass Panels And Kitchens With A Full 3D Preview Before We Start, And Your Complete Dream Kitchen Delivered In As Little As 14 Days.",
  },
  {
    bg: "/herobg2.png",
    eyebrow: "TRUSTED BY FAMILIES IN DUBAI, AUSTRALIA & THE UK",
    headline: [
      { text: "HOME IS WHERE ", color: "white" },
      { text: "WE'RE ", color: "secondary" },
      { text: "BUILDING ", color: "white" },
      { text: "FOR YOU", color: "white" },
    ],
    body: "Living Overseas Doesn't Mean Compromising On Your Dream Home. Get Daily WhatsApp Video Updates, Video-Call Design Consultations, And A Final Walkthrough — All While We Handle Everything Back In Sri Lanka.",
  },
  {
    bg: "/herobg3.png",
    eyebrow: "1,000+ PROJECTS · 10-YEAR OFFICIAL WARRANTY",
    headline: [
      { text: "YOUR DREAM ", color: "white" },
      { text: "KITCHEN, ", color: "secondary" },
      { text: "BUILT IN ", color: "white" },
      { text: "JUST 14 DAYS.", color: "white" },
    ],
    body: "From Free Measurement To Final Handover, We Design, Build And Install Your Complete Kitchen Transformation Backed By A 10-Year Warranty Nobody Else In Sri Lanka Offers.",
  },
];
```

**Text spec (applies to every slide):**
1. Eyebrow line — white, 16px, medium weight
2. Headline — 96px, semibold, wraps across ~3 lines; each headline is an array of colored fragments (mix of `#186172` and `#FFFFFF` as specified per slide above) so words can be individually colored like the reference screenshots. On mobile, scale down responsively (e.g. `text-4xl sm:text-6xl lg:text-8xl`).
3. Body paragraph — white, 14px, regular weight, max-width ~600px

**Buttons (every slide):** `Button` primary = "Book Free Home Visit" (no scroll target — leave as a placeholder link/anchor for now, since there's no booking section defined), `Button` secondary = "Our Works" — both use the smooth-scroll hook to scroll to the Portfolio section (secondary explicitly per spec; keep primary as a plain link for now unless you want it to also scroll — default it to scroll to Portfolio too, since no booking flow exists yet).

**Stats row (`components/ui/StatItem.tsx`, reused 4x):**
- `28` "Years In Business"
- `1000+` "Projects Completed"
- `10 Yr` "Official Warranty"
- `14 Day` "Project Delivery"
- Number: 32px, white, light weight, with **count-up animation** (use `lib/useCountUp.ts`) triggered once the hero mounts/enters view. Handle `+` and non-numeric suffixes like `Yr`/`Day` gracefully (count the numeric part, append the suffix).
- Label: 12px, white, light weight
- Divider lines between stat items like the reference screenshots

**Carousel behavior:**
- Auto-advance every ~6s, pausable on hover/interaction
- Slide indicator dots on the left side (as shown in reference: small dot / pill-shaped active dot / small dot), clickable to jump to a slide
- On slide change: background image cross-fades with a brief flash/whiteout transition (quick opacity pulse), text layers animate out/in with staggered fade+slide (eyebrow → headline words staggered → body → buttons), matching a premium editorial feel
- Add a subtle **parallax** on the background image (scale/translate slightly slower than scroll as user scrolls past hero)

## 6. About Section (`sections/About.tsx`)

- Use the reusable `SectionHeading` component: heading "What Is Platinum Interiors" — 64px, `#186172`, semibold; paragraph — 14px, black, regular (use the "Platinum Interiors Is A Sri Lankan Interiors And Construction Company..." copy from the reference screenshot)
- Image gallery layout matching the reference: `aboutImg1.png` and `aboutImg3.png` as a top row (two images), `aboutImg2.png` as a larger vertical image, `aboutImg4.png` as a horizontal wide image — replicate the asymmetric grid shown in the screenshot (one wide horizontal image on the left, two stacked/smaller images on the right, or as close a match as the 4 images allow)
- Wrap each image in `RevealOnScroll` with staggered delays
- Add gentle parallax (images translate at slightly different scroll speeds for depth)

## 7. Why Choose Platinum Interiors (`sections/WhyChooseUs.tsx`, `WhyChooseUsCard.tsx`)

Two-column layout:

**Left column (pinned/sticky):**
- Use `position: sticky` (with `top` offset) so it stays in view while the right column's cards scroll past — pin should release once the last card has scrolled through
- `SectionHeading`: "Why Choose Platinum Interiors?" — 64px, `#186172`, semibold; paragraph 14px black regular ("In A Market Full Of Choices...")
- Image: `whychooseus.png`

**Right column — 6 cards (`WhyChooseUsCard`, data-driven array, placeholder content for cards 2–6):**

```ts
const reasons = [
  {
    num: "01",
    title: "Built On Construction Expertise",
    body: "We Don't Just Design We Build. Our Roots In Aluminium Construction Give Us A Technical Advantage No Pure Design Company Can Match. Every Detail Is Precise, Every Finish Is Engineered To Last.",
  },
  { num: "02", title: "Placeholder Title Two", body: "Placeholder description text for reason two — replace with real copy." },
  { num: "03", title: "Placeholder Title Three", body: "Placeholder description text for reason three — replace with real copy." },
  { num: "04", title: "Placeholder Title Four", body: "Placeholder description text for reason four — replace with real copy." },
  { num: "05", title: "Placeholder Title Five", body: "Placeholder description text for reason five — replace with real copy." },
  { num: "06", title: "Placeholder Title Six", body: "Placeholder description text for reason six — replace with real copy." },
];
```

**Card spec:**
- Background: `#C1E700` at 5% opacity
- Contains: big number (300px, black, bold — bleed it large/behind or beside the text like a watermark number), title (32px, `#186172`, medium), body paragraph (14px, black, regular)
- On hover: background transitions to full `#C1E700`
- On scroll into view: reveal animation (fade + slide up, staggered per card) via `RevealOnScroll`

## 8. Portfolio Section (`sections/Portfolio.tsx`, `PortfolioGrid.tsx`)

- `SectionHeading`: "Featured Project Highlights" — 64px `#186172` semibold; paragraph 14px black regular
- Grid of all 25 images `p1.JPG` through `p25.JPG` from `/public/portfolio` — replicate a masonry/asymmetric grid similar to the reference screenshot (one large hero image + smaller grid tiles), or a clean responsive masonry grid if a fixed asymmetric layout doesn't scale to 25 images. Use your judgement for the most visually appealing responsive layout for 25 images.
- **Lazy-load** every image (`next/image` with default lazy loading; do NOT set `priority` on portfolio images)
- Each tile: `RevealOnScroll` fade-up on entering viewport, subtle scale-on-hover
- Responsive: fewer columns on tablet/mobile

## 9. Quote Section (`sections/Quote.tsx`)

Two-column, full-bleed:
- **Left:** `quote.png` image, full height of section
- **Right:** background `#186172`
  - Large decorative quotation marks (as in reference)
  - Quote text: `#C1E700`, 64px, semibold — "We Shape Our Buildings, Thereafter They Shape Us"
  - Author: white, 24px, light — "— Winston Churchill"
  - Fade/slide reveal animation as section enters viewport
- Stack vertically on mobile (image on top, text block below)

## 10. Footer (`components/Footer.tsx`)

No design spec was given, so design a clean modern footer consistent with the brand:
- Dark `#186172` background
- Columns: Logo + short tagline, Quick Links (Our Work, Why Us, Kitchens, Team, FAQ — same inert placeholder links as navbar), Contact info (placeholder phone/email/address), Social icons (placeholder links)
- Secondary-color (`#C1E700`) accent divider or heading underline
- Bottom bar: copyright line, 12–14px, muted white
- Fully responsive (stack columns on mobile)

## 11. Animation Guidelines (global)

- Use `RevealOnScroll` (Framer Motion `whileInView`, `viewport={{ once: true, amount: 0.2 }}`) consistently for section headings, images, and cards — fade + translateY(20–40px) → 0, duration ~0.6–0.8s, slight stagger for grouped elements
- Parallax: use `useScroll({ target: ref, offset: [...] })` + `useTransform` to move background images/decorative elements at a different rate than foreground content, on Hero, About, and Portfolio sections
- Keep animations smooth and premium — not bouncy; use `ease: [0.16, 1, 0.3, 1]` (easeOutExpo-style) or Framer's `easeOut`
- Respect `prefers-reduced-motion`: disable/simplify parallax and large motion for users who have this set

## 12. Responsiveness

- Test and adapt every section for mobile and tablet: stack multi-column layouts, scale down the 96px/64px headings appropriately, collapse the Why-Choose-Us sticky-pin behavior gracefully on mobile (just stack normally, no sticky pin below `lg` breakpoint), and ensure the hero carousel text remains readable over the background image at all sizes (add a dark gradient overlay on the hero image if needed for contrast).

## 13. Build Order (recommended)

1. Tailwind config (colors, font) + Montserrat setup in `layout.tsx`
2. `SmoothScrollProvider` (Lenis) wired into `layout.tsx`
3. `Button`, `StatItem`, `RevealOnScroll`, `SectionHeading` (core reusable components)
4. `Navbar`
5. `Hero` + `HeroCarousel` + `HeroSlide`
6. `About`
7. `WhyChooseUs` + `WhyChooseUsCard`
8. `Portfolio` + `PortfolioGrid`
9. `Quote`
10. `Footer`
11. Wire `page.tsx`, test responsiveness, polish animation timing

---

Build this now, starting with project setup and the core reusable components before moving to sections.