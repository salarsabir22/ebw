import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { AreasSection } from "@/components/blocks/areas-section";
import { FocusCardsSection } from "@/components/blocks/focus-cards";
import { Hero } from "@/components/hero";
import { HomeNextSteps } from "@/components/home-next-steps";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { images } from "@/content/images";
import { homePage } from "@/content/home";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: homePage.seo.title,
  description: homePage.seo.description,
  alternates: { canonical: homePage.seo.path },
  openGraph: {
    title: homePage.seo.title,
    description: homePage.seo.description,
    url: `${site.url}${homePage.seo.path}`,
  },
};

export default function Home() {
  return (
    <SiteShell>
      <Hero hero={homePage.hero} image={images.homeHero} />
      <AreasSection areas={homePage.areas} linkWoodlandsPage />
      <FocusCardsSection cards={homePage.focusCards} />
      <HomeNextSteps />
      <Section
        eyebrow="Scheduling"
        title={homePage.finalCta.title}
        className="bg-muted/50"
      >
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {homePage.finalCta.body}
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
            href="/faq"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "min-h-11 border-primary px-6 text-base text-primary shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-muted",
            )}
          >
            Read FAQs
          </Link>
        </div>
      </Section>
    </SiteShell>
  );
}
