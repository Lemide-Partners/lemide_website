import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

const ADMIN_EMAIL = process.env.CONTACT_ADMIN_EMAIL || "contact@lemide.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Lemide Partners <noreply@lemide.com>";

const serviceLabels: Record<string, string> = {
  compliance: "Compliance & Filings",
  financial: "Financial Operations",
  access: "Access Governance",
  workflow: "Workflow Automation",
  visibility: "Operations Visibility",
  general: "General Inquiry",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, interest, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 },
      );
    }

    const serviceName = serviceLabels[interest] || interest || "Not specified";
    const fullName = `${firstName} ${lastName}`;

    const resend = getResend();

    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission from ${fullName}`,
        html: adminEmailHtml({ fullName, email, company, serviceName, message }),
      }),

      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "We received your message - Lemide Partners",
        html: confirmationEmailHtml({ firstName }),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}

function adminEmailHtml({
  fullName,
  email,
  company,
  serviceName,
  message,
}: {
  fullName: string;
  email: string;
  company?: string;
  serviceName: string;
  message?: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:12px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color:#0B1D4B; padding:32px 40px;">
              <h1 style="margin:0; color:#ffffff; font-size:20px; font-weight:600;">New Contact Form Submission</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px; font-size:12px; color:#71717a; text-transform:uppercase; letter-spacing:0.5px;">Name</p>
                    <p style="margin:0; font-size:16px; color:#18181b;">${fullName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px; font-size:12px; color:#71717a; text-transform:uppercase; letter-spacing:0.5px;">Email</p>
                    <p style="margin:0; font-size:16px;"><a href="mailto:${email}" style="color:#CC9E49; text-decoration:none;">${email}</a></p>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px; font-size:12px; color:#71717a; text-transform:uppercase; letter-spacing:0.5px;">Company</p>
                    <p style="margin:0; font-size:16px; color:#18181b;">${company}</p>
                  </td>
                </tr>
                ` : ""}
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e4e4e7;">
                    <p style="margin:0 0 4px; font-size:12px; color:#71717a; text-transform:uppercase; letter-spacing:0.5px;">Service Interest</p>
                    <p style="margin:0; font-size:16px; color:#18181b;">${serviceName}</p>
                  </td>
                </tr>
                ${message ? `
                <tr>
                  <td style="padding:12px 0;">
                    <p style="margin:0 0 4px; font-size:12px; color:#71717a; text-transform:uppercase; letter-spacing:0.5px;">Message</p>
                    <p style="margin:0; font-size:16px; color:#18181b; line-height:1.6; white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
                ` : ""}
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px; background-color:#f9fafb; border-top:1px solid #e4e4e7;">
              <p style="margin:0; font-size:13px; color:#71717a;">You can reply directly to this email to respond to ${fullName}.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function confirmationEmailHtml({ firstName }: { firstName: string }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:12px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color:#0B1D4B; padding:32px 40px; text-align:center;">
              <h1 style="margin:0; color:#CC9E49; font-size:22px; font-weight:700; letter-spacing:0.5px;">Lemide Partners</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px; font-size:20px; color:#18181b;">Thank you, ${firstName}.</h2>
              <p style="margin:0 0 16px; font-size:16px; color:#3f3f46; line-height:1.6;">
                We have received your message and a member of our team will be in touch within one business day.
              </p>
              <p style="margin:0 0 24px; font-size:16px; color:#3f3f46; line-height:1.6;">
                If your request is urgent, you can book a call with us directly:
              </p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#CC9E49; border-radius:8px;">
                    <a href="https://calendly.com/lemide/30min?month=2026-09" target="_blank" style="display:inline-block; padding:12px 28px; color:#ffffff; font-size:15px; font-weight:600; text-decoration:none;">
                      Book a Call
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px; background-color:#f9fafb; border-top:1px solid #e4e4e7; text-align:center;">
              <p style="margin:0 0 8px; font-size:13px; color:#71717a;">Lemide Partners</p>
              <p style="margin:0; font-size:13px; color:#a1a1aa;">
                <a href="https://lemide.com" style="color:#CC9E49; text-decoration:none;">lemide.com</a>
                &nbsp;&middot;&nbsp;
                <a href="https://www.linkedin.com/company/lemide-partners" style="color:#CC9E49; text-decoration:none;">LinkedIn</a>
                &nbsp;&middot;&nbsp;
                <a href="https://www.instagram.com/lemidepartners/" style="color:#CC9E49; text-decoration:none;">Instagram</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
