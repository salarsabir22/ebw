import nodemailer from "nodemailer";
import { Resend } from "resend";
import { inquiryRecipients, site } from "@/content/site";

export type InquiryEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  newsletter: boolean;
  pagePath: string;
};

function inquiryTextBody(payload: InquiryEmailPayload): string {
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone ?? "(not provided)"}`,
    `Page: ${payload.pagePath}`,
    `Occasional updates: ${payload.newsletter ? "yes" : "no"}`,
    "",
    "Message:",
    payload.message,
  ];
  return lines.join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Resend’s documented trial sender — works without verifying your own domain. */
const RESEND_TRIAL_FROM = "onboarding@resend.dev";

function inquiryHtmlBody(payload: InquiryEmailPayload): string {
  const text = escapeHtml(inquiryTextBody(payload)).replace(/\r\n|\r|\n/g, "<br />");
  return `<p><strong>New website inquiry</strong> — ${escapeHtml(payload.name)}</p><p style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5">${text}</p>`;
}

function recipientList(): string[] {
  return [...new Set(inquiryRecipients.map((a) => a.trim()).filter(Boolean))];
}

async function sendViaSmtp(payload: InquiryEmailPayload): Promise<void> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  if (!host?.trim() || !user?.trim() || !pass) {
    throw new Error("SMTP_HOST, SMTP_USER, and SMTP_PASSWORD must be set.");
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure =
    process.env.SMTP_SECURE === "true" || process.env.SMTP_SECURE === "1" || port === 465;

  const from =
    process.env.INQUIRY_FROM_EMAIL?.trim() || `${site.name} <${user.trim()}>`;
  const to = recipientList();

  const transporter = nodemailer.createTransport({
    host: host.trim(),
    port: Number.isFinite(port) ? port : 587,
    secure,
    auth: { user: user.trim(), pass },
  });

  const subject = `Website inquiry - ${payload.name}`;
  const text = inquiryTextBody(payload);
  for (const address of to) {
    await transporter.sendMail({
      from,
      to: address,
      replyTo: payload.email,
      subject,
      text,
    });
  }
}

async function sendViaResend(payload: InquiryEmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is required for Resend.");
  }

  const from = process.env.INQUIRY_FROM_EMAIL?.trim() || RESEND_TRIAL_FROM;
  const recipients = recipientList();
  const resend = new Resend(apiKey);
  const subject = `Website inquiry - ${payload.name}`;
  const text = inquiryTextBody(payload);
  const html = inquiryHtmlBody(payload);

  /** One send per inbox — Resend’s trial `onboarding@resend.dev` often rejects multiple `to` in a single request. */
  for (const to of recipients) {
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: payload.email,
      subject,
      text,
      html,
    });

    if (error) {
      const detail =
        typeof error === "object" && error !== null && "message" in error
          ? String((error as { message: unknown }).message)
          : JSON.stringify(error);
      console.error("[sendViaResend] Resend error", { to, from, detail, data });
      throw new Error(detail || "Resend returned an error.");
    }
  }
}

/**
 * Delivers the inquiry to your inbox using either:
 *
 * **SMTP (no Resend account)** — set `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`
 * (optional: `SMTP_PORT`, `SMTP_SECURE`, `INQUIRY_FROM_EMAIL`).
 *
 * **Resend** — if SMTP is not configured, uses `RESEND_API_KEY`. `INQUIRY_FROM_EMAIL`
 * defaults to Resend’s trial sender `onboarding@resend.dev` when unset (trial limits apply).
 *
 * Recipients: {@link inquiryRecipients} in `content/site.ts` (one hardcoded address).
 */
export async function sendInquiryEmail(payload: InquiryEmailPayload): Promise<void> {
  const useSmtp =
    Boolean(process.env.SMTP_HOST?.trim()) &&
    Boolean(process.env.SMTP_USER?.trim()) &&
    Boolean(process.env.SMTP_PASSWORD);

  if (useSmtp) {
    await sendViaSmtp(payload);
    return;
  }

  if (process.env.RESEND_API_KEY?.trim()) {
    await sendViaResend(payload);
    return;
  }

  throw new Error(
    "Email is not configured. Set RESEND_API_KEY (Resend — optional INQUIRY_FROM_EMAIL, defaults to onboarding@resend.dev), or SMTP_HOST, SMTP_USER, and SMTP_PASSWORD for SMTP.",
  );
}
