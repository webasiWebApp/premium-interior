import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectPlace, message } = body;

    if (!name || !email || !phone || !projectPlace || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || "shamalweerasiri76@gmail.com";
    const senderEmail = process.env.SENDER_EMAIL || "Premium Interior Inquiry <onboarding@resend.dev>";

    // Send email notification via Resend
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `✨ New Inquiry from ${name} (${projectPlace})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px; background-color: #ffffff;">
          <h2 style="color: #1a1a1a; margin-top: 0; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            New Project Inquiry Received
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px; font-weight: bold;">Full Name:</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #1a1a1a;"><a href="mailto:${email}" style="color: #0066cc;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; color: #1a1a1a;"><a href="tel:${phone}" style="color: #0066cc;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Project Location:</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${projectPlace}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background-color: #f9f9f9; border-left: 4px solid #d4af37; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; color: #666; font-weight: bold;">Message Details:</p>
            <p style="margin: 0; color: #333; line-height: 1.6; whitespace: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 16px;">
            Sent automatically from Premium Interior Website Contact Form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Contact API Server Error:", err);
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
