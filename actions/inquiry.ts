"use server";

import { z } from "zod";
import { sendInquiryEmail } from "@/lib/resend";

export type InquiryState = {
  ok: boolean;
  message: string;
};

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .preprocess((v) => {
      if (v == null) return undefined;
      const s = String(v).trim();
      return s.length ? s : undefined;
    }, z.string().max(40).optional()),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more detail (at least 10 characters).")
    .max(5000),
  newsletter: z.preprocess((v) => v === "on", z.boolean()),
  pagePath: z.preprocess(
    (v) => (typeof v === "string" && v.trim()) || "/",
    z.string().max(200),
  ),
});

export async function submitInquiry(
  _prevState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const honeypot = String(formData.get("website") ?? "");
  if (honeypot.length > 0) {
    return { ok: true, message: "Thanks — your message has been received." };
  }

  const parsed = inquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    newsletter: formData.get("newsletter"),
    pagePath: formData.get("pagePath"),
  });

  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return {
      ok: false,
      message: first?.message ?? "Please check the form and try again.",
    };
  }

  const data = parsed.data;

  try {
    await sendInquiryEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      newsletter: data.newsletter,
      pagePath: data.pagePath || "/",
    });
  } catch {
    return {
      ok: false,
      message:
        "We couldn’t send your message right now. Please try again in a few minutes, or email us directly.",
    };
  }

  return {
    ok: true,
    message: "Thanks — we received your inquiry and will be in touch soon.",
  };
}
