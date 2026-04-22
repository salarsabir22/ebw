import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { AboutBlock } from "@/components/blocks/about-block";
import { AreasSection } from "@/components/blocks/areas-section";
import { FocusCardsSection } from "@/components/blocks/focus-cards";
import { TherapyStack } from "@/components/blocks/therapy-stack";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { woodlandsPage } from "@/content/woodlands";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: woodlandsPage.seo.title,
  description: woodlandsPage.seo.description,
  alternates: { canonical: woodlandsPage.seo.path },
  openGraph: {
    title: woodlandsPage.seo.title,
    description: woodlandsPage.seo.description,
    url: `${site.url}${woodlandsPage.seo.path}`,
  },
};

export default function WoodlandsPage() {
  return (
    <SiteShell>
      <Hero
        hero={woodlandsPage.hero}
        image={images.siteBanner}
        primaryCtaHref="/contact"
      />
      <AreasSection areas={woodlandsPage.areas} linkWoodlandsPage={false} />
      <FocusCardsSection cards={woodlandsPage.focusCards} />
      <AboutBlock about={woodlandsPage.about} image={images.siteSessionA} />
      <TherapyStack config={woodlandsPage} />
      <Section
        eyebrow="Scheduling"
        title={woodlandsPage.finalCta.title}
        className="bg-muted/50"
      >
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {woodlandsPage.finalCta.body}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "min-h-11 px-6 text-base shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft-strong)]",
            )}
          >
            Send an inquiry
          </Link>
          <Link
            href="/pricing"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "min-h-11 border-primary px-6 text-base text-primary shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-muted",
            )}
          >
            View pricing
          </Link>
        </div>
      </Section>
    </SiteShell>
  );
}
