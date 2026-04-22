import { Resend } from "resend";

export type InquiryEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  newsletter: boolean;
  pagePath: string;
};

/**
 * Sends inquiry email via Resend. Requires env:
 * - RESEND_API_KEY
 * - INQUIRY_TO_EMAIL (recipient inbox)
 * - INQUIRY_FROM_EMAIL (verified sender, e.g. EBW <hello@yourdomain.com>)
 */
export async function sendInquiryEmail(payload: InquiryEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error("Missing RESEND_API_KEY, INQUIRY_TO_EMAIL, or INQUIRY_FROM_EMAIL.");
  }

  const resend = new Resend(apiKey);

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

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `Website inquiry — ${payload.name}`,
    text: lines.join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}
