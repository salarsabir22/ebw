import type { Metadata } from "next";
import Link from "next/link";
import { AboutBlock } from "@/components/blocks/about-block";
import { ContentListSection } from "@/components/blocks/content-list-section";
import { CollaboratorsSection, WhyChooseSection } from "@/components/blocks/therapy-stack";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { images } from "@/content/images";
import {
  magnoliaEvaluationSection,
  magnoliaInHomeTherapySection,
  magnoliaKidsTherapySection,
  magnoliaPage,
  magnoliaPediatricTherapySection,
  magnoliaPrivateTherapySection,
  magnoliaSpeechDelaySection,
} from "@/content/magnolia";
import { site } from "@/content/site";
import { TextBlockContent } from "@/components/text-segments";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: magnoliaPage.seo.title,
  description: magnoliaPage.seo.description,
  openGraph: {
    title: magnoliaPage.seo.title,
    description: magnoliaPage.seo.description,
    url: `${site.url}${magnoliaPage.seo.path}`,
  },
};

export default function MagnoliaTxPage() {
  const story = magnoliaPage.bilingual;
  const finalPrimary = magnoliaPage.finalCta.primaryCta;
  const finalSecondary = magnoliaPage.finalCta.secondaryCta;

  return (
    <SiteShell>
      <Hero hero={magnoliaPage.hero} image={images.therapyPlay} />
      <AboutBlock about={magnoliaPage.about} image={images.pricingHero} />
      {story ? (
        <Section
          eyebrow="Magnolia, TX"
          title={story.title}
          className="bg-[var(--surface-container-low)]"
        >
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--ebw-muted)]">
            {story.paragraphs.map((p, i) => (
              <p key={i}>
                <TextBlockContent block={p} />
              </p>
            ))}
          </div>
        </Section>
      ) : null}
      <ContentListSection {...magnoliaInHomeTherapySection} />
      <ContentListSection
        {...magnoliaPediatricTherapySection}
        className="bg-[var(--surface-container-low)]"
      />
      <ContentListSection {...magnoliaKidsTherapySection} />
      <ContentListSection
        {...magnoliaSpeechDelaySection}
        className="bg-[var(--surface-container-low)]"
      />
      <CollaboratorsSection collaborators={magnoliaPage.collaborators} />
      <ContentListSection {...magnoliaPrivateTherapySection} />
      <ContentListSection
        {...magnoliaEvaluationSection}
        className="bg-[var(--surface-container-low)]"
      />
      <WhyChooseSection why={magnoliaPage.why} />
      <Section
        eyebrow="Get started"
        title={magnoliaPage.finalCta.title}
        className="bg-muted/50"
      >
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          <TextBlockContent block={magnoliaPage.finalCta.body} />
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {finalPrimary ? (
            <Link
              href={finalPrimary.href}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "min-h-11 px-6 text-base shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft-strong)]",
              )}
            >
              {finalPrimary.label}
            </Link>
          ) : null}
          {finalSecondary ? (
            <Link
              href={finalSecondary.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "min-h-11 border-primary px-6 text-base text-primary shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-muted",
              )}
            >
              {finalSecondary.label}
            </Link>
          ) : null}
        </div>
      </Section>
    </SiteShell>
  );
}
