import nodemailer from "nodemailer";
import { Resend } from "resend";
import { contact, site } from "@/content/site";

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

function recipientTo(): string {
  return process.env.INQUIRY_TO_EMAIL?.trim() || contact.email;
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
  const to = recipientTo();

  const transporter = nodemailer.createTransport({
    host: host.trim(),
    port: Number.isFinite(port) ? port : 587,
    secure,
    auth: { user: user.trim(), pass },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `Website inquiry — ${payload.name}`,
    text: inquiryTextBody(payload),
  });
}

async function sendViaResend(payload: InquiryEmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !from?.trim()) {
    throw new Error("RESEND_API_KEY and INQUIRY_FROM_EMAIL are required for Resend.");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: from.trim(),
    to: [recipientTo()],
    replyTo: payload.email,
    subject: `Website inquiry — ${payload.name}`,
    text: inquiryTextBody(payload),
  });

  if (error) {
    throw new Error(error.message);
  }
}

/**
 * Delivers the inquiry to your inbox using either:
 *
 * **SMTP (no Resend account)** — set `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`
 * (optional: `SMTP_PORT`, `SMTP_SECURE`, `INQUIRY_FROM_EMAIL`, `INQUIRY_TO_EMAIL`).
 *
 * **Resend** — if SMTP is not configured, uses `RESEND_API_KEY` + `INQUIRY_FROM_EMAIL`
 * when those are set.
 *
 * Recipient defaults to {@link contact.email} when `INQUIRY_TO_EMAIL` is unset.
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

  if (process.env.RESEND_API_KEY && process.env.INQUIRY_FROM_EMAIL?.trim()) {
    await sendViaResend(payload);
    return;
  }

  throw new Error(
    "Email is not configured. Set RESEND_API_KEY and INQUIRY_FROM_EMAIL (Resend — no SMTP required), or SMTP_HOST, SMTP_USER, and SMTP_PASSWORD if you use SMTP.",
  );
}
