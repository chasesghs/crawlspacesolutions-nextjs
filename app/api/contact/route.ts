// Resend contact form — production-ready configuration.
// Required env vars (set in Vercel):
//   RESEND_API_KEY       — your Resend API key (re_...)
//   CONTACT_FROM_EMAIL   — verified sending address, e.g. contact@crawlspacesolutionsmo.com
//   CONTACT_TO_EMAIL     — recipient for lead notifications
//
// Resend/DNS setup required before production use:
//   1. Verify your sending domain in Resend (resend.com → Domains → Add)
//   2. Add the DKIM/SPF/MX records Resend provides to your DNS
//   3. Set CONTACT_FROM_EMAIL to an address on that verified domain
//   4. Set CONTACT_TO_EMAIL to your preferred lead inbox
//
// Sandbox mode: if CONTACT_FROM_EMAIL is not set, the route falls back
// to onboarding@resend.dev (sandbox — only delivers to Resend account email)

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

function detectSourcePage(req: NextRequest, fallback: string): string {
  // Prefer the explicit source field from the form (most reliable)
  const url = req.headers.get("x-nextjs-matched-path")
    || req.headers.get("referer")
    || fallback

  if (url.includes("/contact")) return "Contact Page"
  if (url.includes("/services")) return "Services Page"
  if (url.includes("/reviews")) return "Reviews Page"
  if (url.includes("/faq")) return "FAQ Page"
  if (url.includes("/process")) return "Process Page"
  if (url.includes("/")) return "Homepage"
  return url || "Unknown"
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, message, source, website } = body

    // Honeypot: if the hidden website field is filled, it's a bot
    if (website) {
      // Silently reject — do not give the bot any signal
      return NextResponse.json({ success: true })
    }

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable")
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      )
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL
    const toEmail = process.env.CONTACT_TO_EMAIL

    if (!toEmail) {
      console.error("Missing CONTACT_TO_EMAIL environment variable")
      return NextResponse.json(
        { error: "Contact recipient is not configured." },
        { status: 500 }
      )
    }

    // Sandbox fallback: use Resend sandbox sender only if CONTACT_FROM_EMAIL is unset
    const fromAddress = fromEmail
      ? `Crawl Space Solutions <${fromEmail}>`
      : "Crawl Space Solutions <onboarding@resend.dev>"

    const resend = new Resend(apiKey)

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "long",
      timeStyle: "short",
    })

    const sourcePage = detectSourcePage(request, source || "")

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [toEmail],
      replyTo: email || undefined,
      subject: `New Lead: ${name} — Crawl Space Inspection Request`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1a472a; color: white; padding: 16px 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 22px; font-weight: bold;">🕷️ New Lead — Crawl Space Solutions</h1>
          </div>

          <div style="padding: 24px 20px; background: #f8f9fa; border-left: 1px solid #dee2e6; border-right: 1px solid #dee2e6;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057; width: 110px;">Name</td>
                <td style="padding: 8px 0; color: #212529;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057;">Phone</td>
                <td style="padding: 8px 0;">
                  <a href="tel:${phone.replace(/\D/g, "")}" style="color: #1a472a; font-weight: bold; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057;">Email</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${email}" style="color: #1a472a;">${email}</a>
                </td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057; vertical-align: top;">Message</td>
                <td style="padding: 8px 0; color: #212529; line-height: 1.6;">
                  ${message || "<em style=\"color:#999\">No message provided</em>"}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057;">Source Page</td>
                <td style="padding: 8px 0; color: #212529;">${sourcePage}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057;">Received</td>
                <td style="padding: 8px 0; color: #6c757d; font-size: 13px;">${timestamp} CT</td>
              </tr>
            </table>
          </div>

          <div style="background: #e9ecef; padding: 14px 20px; border-radius: 0 0 8px 8px; border-left: 1px solid #dee2e6; border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6; text-align: center;">
            <p style="margin: 0; color: #495057; font-size: 13px;">
              Crawl Space Solutions | Lake of the Ozarks Area &nbsp;|&nbsp;
              <a href="tel:+15736075910" style="color: #1a472a; text-decoration: none;">(573) 607-5910</a>
            </p>
          </div>
        </div>
      `,
      text: `New Lead — Crawl Space Solutions
=============================

Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ""}
Message: ${message || "No message provided"}
Source Page: ${sourcePage}
Received: ${timestamp} CT

---
Crawl Space Solutions | Lake of the Ozarks Area
(573) 607-5910`,
    })

    if (error) {
      console.error("Resend send failed:", JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: "Failed to send email. Please try again or call us directly." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    )
  }
}