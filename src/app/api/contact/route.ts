import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Basic in-memory rate limiting map (IP -> timestamps[])
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function jsonResponse(data: { success: boolean; message?: string; error?: string }, status: number) {
  return new NextResponse(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}

// Handle GET requests gracefully with clear JSON
export async function GET() {
  return jsonResponse(
    {
      success: false,
      error: "Method not allowed. Please submit contact messages via POST.",
    },
    405
  );
}

// Handle OPTIONS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: "POST, GET, OPTIONS",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    // 1. Client IP tracking for rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return jsonResponse(
        {
          success: false,
          error: "Too many messages sent. Please wait a few minutes before trying again.",
        },
        429
      );
    }

    // 2. Safe request body parsing (avoid req.json() to prevent Unexpected end of JSON input)
    let rawText = "";
    try {
      rawText = await req.text();
    } catch {
      return jsonResponse(
        {
          success: false,
          error: "Could not read incoming request stream.",
        },
        400
      );
    }

    if (!rawText || !rawText.trim()) {
      return jsonResponse(
        {
          success: false,
          error: "Request body cannot be empty.",
        },
        400
      );
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawText);
    } catch {
      return jsonResponse(
        {
          success: false,
          error: "Invalid JSON payload in request.",
        },
        400
      );
    }

    if (!body || typeof body !== "object") {
      return jsonResponse(
        {
          success: false,
          error: "Expected JSON object in request body.",
        },
        400
      );
    }

    const { name, email, subject, message, website } = body;

    // 3. Honeypot check (anti-spam)
    // If the invisible 'website' field has any text, it is an automated spam bot
    if (website && typeof website === "string" && website.trim() !== "") {
      return jsonResponse(
        {
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        },
        200
      );
    }

    // 4. Server-side validation
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedSubject = typeof subject === "string" ? subject.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
      return jsonResponse(
        {
          success: false,
          error: "Please enter your name (between 2 and 100 characters).",
        },
        400
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail) || trimmedEmail.length > 100) {
      return jsonResponse(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        400
      );
    }

    if (!trimmedSubject || trimmedSubject.length < 2 || trimmedSubject.length > 150) {
      return jsonResponse(
        {
          success: false,
          error: "Please enter a subject (between 2 and 150 characters).",
        },
        400
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
      return jsonResponse(
        {
          success: false,
          error: "Please enter a message (minimum 10 characters).",
        },
        400
      );
    }

    // 5. Environment variable checks
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const recipientEmail = (process.env.CONTACT_EMAIL || "sabihamashruha74@gmail.com").trim();
    const senderEmail = (process.env.SENDER_EMAIL || "Portfolio Contact <onboarding@resend.dev>").trim();

    if (!apiKey) {
      return jsonResponse(
        {
          success: false,
          error:
            "The contact form service is currently being configured with the email provider (RESEND_API_KEY missing). Please contact sabihamashruha74@gmail.com directly or set RESEND_API_KEY in .env.local.",
        },
        503
      );
    }

    // 6. Deliver email securely via Resend SDK
    try {
      const resend = new Resend(apiKey);

      const { error: resendError } = await resend.emails.send({
        from: senderEmail,
        to: [recipientEmail],
        replyTo: trimmedEmail,
        subject: `[Portfolio Contact] ${trimmedSubject} - from ${trimmedName}`,
        text: `You have received a new contact message from your portfolio website:\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}\n\n---\nSent from Sabiha Mashruha Dipita's Portfolio\nReply to this email directly to contact ${trimmedName} (${trimmedEmail}).`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #0f172a; margin: 0; font-size: 20px; font-weight: 700;">New Contact Form Message</h2>
              <p style="color: #64748b; font-size: 13px; margin: 4px 0 0 0;">Received from Sabiha-Portfolio</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #64748b; width: 90px; font-weight: 600;">From:</td>
                <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${escapeHtml(trimmedName)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Email:</td>
                <td style="padding: 6px 0; color: #2563eb;">
                  <a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #2563eb; text-decoration: underline;">${escapeHtml(trimmedEmail)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Subject:</td>
                <td style="padding: 6px 0; color: #0f172a;">${escapeHtml(trimmedSubject)}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
              <p style="color: #334155; white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6;">${escapeHtml(trimmedMessage)}</p>
            </div>

            <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center;">
              <p style="font-size: 12px; color: #94a3b8; margin: 0;">
                You can reply directly to this email to get in touch with <strong>${escapeHtml(trimmedName)}</strong> (${escapeHtml(trimmedEmail)}).
              </p>
            </div>
          </div>
        `,
      });

      if (resendError) {
        console.error("Resend API returned error:", resendError);
        return jsonResponse(
          {
            success: false,
            error: resendError.message || "Failed to deliver email through provider. Please email sabihamashruha74@gmail.com directly.",
          },
          500
        );
      }

      return jsonResponse(
        {
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        },
        200
      );
    } catch (sendError: unknown) {
      console.error("Error connecting to Resend SDK:", sendError);
      return jsonResponse(
        {
          success: false,
          error: "Failed to connect to email service provider. Please reach out to sabihamashruha74@gmail.com directly.",
        },
        500
      );
    }
  } catch (err: unknown) {
    console.error("Contact API uncaught handler error:", err);
    return jsonResponse(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again or email sabihamashruha74@gmail.com directly.",
      },
      500
    );
  }
}
