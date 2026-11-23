import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { contact, site } from "@/content/site";
import { cn } from "@/lib/utils";

const title = "Thank you | Expression Beyond Words";
const description =
  "Your inquiry was received. We review every message personally and follow up about scheduling a free consultation or a comprehensive evaluation.";

export const metadata: Metadata = {
  title,
  description,
  // Confirmation page — reachable by refresh, but not worth indexing.
  robots: { index: false, follow: true },
  openGraph: { title, description, url: `${site.url}/thank-you` },
};

const nextSteps = [
  "We read your note and match it to the right next step — usually the same day.",
  "You get a reply by email (or a call, if you left a number) within one business day.",
  "If it looks like a fit, we schedule a free 15-minute consult or a full evaluation.",
];

export default function ThankYouPage() {
  return (
    <SiteShell>
      <Section className="bg-[color-mix(in_srgb,var(--primary)_6%,var(--surface))]">
        <div className="mx-auto max-w-3xl">
          <span
            aria-hidden
            className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary"
          >
            <CheckIcon className="size-6" />
          </span>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-[var(--ebw-sage)]">
            Inquiry received
          </p>
          <h1 className="mt-2 text-balance font-display text-4xl font-semibold tracking-tight text-[var(--ebw-ink)] sm:text-5xl">
            Thank you — we have your message
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-[var(--ebw-muted)]">
            Nothing else is needed from you right now. We’ll follow up at the
            email address you shared.
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold tracking-tight text-[var(--ebw-ink)]">
            What happens next
          </h2>
          <ol className="mt-4 space-y-3">
            {nextSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-base leading-relaxed">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary"
                >
                  {index + 1}
                </span>
                <span className="text-[var(--ebw-muted)]">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "min-h-11 px-5 text-base",
              )}
            >
              Explore services
            </Link>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "min-h-11 px-5 text-base",
              )}
            >
              Back to home
            </Link>
          </div>

          <p className="mt-8 break-words text-sm text-[var(--ebw-muted)]">
            Need us sooner? Call{" "}
            <a
              href={`tel:${contact.phoneE164}`}
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              {contact.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              {contact.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </SiteShell>
  );
}
