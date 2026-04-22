import type { Metadata } from "next";
import Image from "next/image";
import { ContactSidebar } from "@/components/blocks/contact-sidebar";
import { InquiryForm } from "@/components/inquiry-form";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { images } from "@/content/images";
import { site } from "@/content/site";

const title = "Contact | Book pediatric speech therapy in Northwest Houston";
const description =
  "Send an inquiry or call Expression Beyond Words—mobile pediatric speech therapy for Spring, The Woodlands, Tomball, Conroe, and Magnolia.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="border-b border-[var(--ebw-border)] bg-[var(--ebw-cream)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--ebw-sage)]">
              Contact
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[var(--ebw-ink)] sm:text-5xl">
              Tell us a little about your child
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--ebw-muted)]">
              Share your questions and the best way to reach you. We’ll follow up
              with next steps for scheduling a consultation or evaluation.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-[var(--shadow-soft-strong)]">
            <Image
              src={images.contactSupport.src}
              alt={images.contactSupport.alt}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <Section
        className="bg-[color-mix(in_srgb,var(--primary)_6%,var(--surface))]"
        title="Send a message"
      >
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <InquiryForm pagePath="/contact" />
          <ContactSidebar />
        </div>
      </Section>
    </SiteShell>
  );
}
