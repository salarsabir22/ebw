import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FocusCardsSection } from "@/components/blocks/focus-cards";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { images } from "@/content/images";
import { homePage } from "@/content/home";
import { servicesOffered, site } from "@/content/site";
import { cn } from "@/lib/utils";

const title = "Pediatric speech therapy services | Expression Beyond Words";
const description =
  "Screenings, evaluations, in-home therapy, parent coaching, and IEP consultation for families in Northwest Houston and The Woodlands.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${site.url}/services` },
};

const hero = {
  eyebrow: "What we offer",
  title: "Services built around your child’s goals",
  subtitle:
    "From first screening to ongoing sessions, we keep care structured, transparent, and grounded in evidence—delivered where your child is most comfortable.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <Hero hero={hero} image={images.servicesHero} />
      <Section
        eyebrow="Care options"
        title="Pediatric speech & language services"
      >
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <ul className="space-y-4 text-lg text-[var(--ebw-muted)]">
            {servicesOffered.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ebw-sage)]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-soft-strong)]">
            <Image
              src={images.siteVertical.src}
              alt={images.siteVertical.alt}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/pricing"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "shadow-[var(--shadow-soft)] hover:-translate-y-0.5",
            )}
          >
            View pricing
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "border-primary text-primary hover:bg-muted",
            )}
          >
            Request information
          </Link>
        </div>
      </Section>
      <FocusCardsSection cards={homePage.focusCards} />
    </SiteShell>
  );
}
