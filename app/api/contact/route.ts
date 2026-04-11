// NOTE: The from address uses the Resend sandbox (onboarding@resend.dev).
// IMPORTANT — sandbox limitation: onboarding@resend.dev only delivers to the
// email address associated with the Resend account. For production sending to
// other recipients, verify a sending domain (e.g. app.crawlspacesolutionsmo.com
// or a subdomain) in Resend and use a matching from address.

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, message } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable")
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      )
    }

    const toEmail = process.env.CONTACT_TO_EMAIL
    if (!toEmail) {
      console.error("Missing CONTACT_TO_EMAIL environment variable")
      return NextResponse.json(
        { error: "Contact recipient is not configured" },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "long",
      timeStyle: "short",
    })

    const referer = request.headers.get("referer") || "Unknown page"
    const sourcePage = referer.includes("/contact")
      ? "Contact Page"
      : referer.includes("/services")
      ? "Services Page"
      : referer.includes("/reviews")
      ? "Reviews Page"
      : referer.includes("/faq")
      ? "FAQ Page"
      : referer

    const { error } = await resend.emails.send({
      from: "Crawl Space Solutions <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email || undefined,
      subject: `New Lead: ${name} — Crawl Space Inspection Request`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1a472a; color: white; padding: 16px 20px; border-radius: 6px 6px 0 0;">
            <h1 style="margin: 0; font-size: 22px;">🕷️ New Lead — Crawl Space Solutions</h1>
          </div>

          <div style="padding: 24px 20px; background: #f8f9fa;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057; width: 100px;">Name:</td>
                <td style="padding: 8px 0; color: #212529;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057;">Phone:</td>
                <td style="padding: 8px 0;">
                  <a href="tel:${phone.replace(/\D/g, "")}" style="color: #1a472a; font-weight: bold;">${phone}</a>
                </td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057;">Email:</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${email}" style="color: #1a472a;">${email}</a>
                </td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057; vertical-align: top;">Message:</td>
                <td style="padding: 8px 0; color: #212529; line-height: 1.5;">
                  ${message || "<em>No message provided</em>"}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057;">Source Page:</td>
                <td style="padding: 8px 0; color: #212529;">${sourcePage}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057;">Received:</td>
                <td style="padding: 8px 0; color: #6c757d; font-size: 13px;">${timestamp} CT</td>
              </tr>
            </table>
          </div>

          <div style="background: #e9ecef; padding: 14px 20px; border-radius: 0 0 6px 6px; text-align: center;">
            <p style="margin: 0; color: #495057; font-size: 13px;">
              Crawl Space Solutions | Lake of the Ozarks Area |
              <a href="tel:+15736075910" style="color: #1a472a;">(573) 607-5910</a>
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
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    )
  }
}