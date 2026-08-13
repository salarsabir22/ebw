import type { Metadata } from "next";
import Link from "next/link";
import { AboutBlock } from "@/components/blocks/about-block";
import { ContentListSection } from "@/components/blocks/content-list-section";
import { CollaboratorsSection, WhyChooseSection } from "@/components/blocks/therapy-stack";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SectionCta } from "@/components/section-cta";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { images } from "@/content/images";
import { site } from "@/content/site";
import {
  tomballEvaluationSection,
  tomballInHomeTherapySection,
  tomballPage,
  tomballPediatricTherapySection,
  tomballPrivateTherapySection,
  tomballSpeechDelaySection,
} from "@/content/tomball";
import { TextBlockContent } from "@/components/text-segments";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: tomballPage.seo.title,
  description: tomballPage.seo.description,
  openGraph: {
    title: tomballPage.seo.title,
    description: tomballPage.seo.description,
    url: `${site.url}${tomballPage.seo.path}`,
  },
};

export default function TomballTxPage() {
  const story = tomballPage.bilingual;
  const kidsTherapy = tomballPage.playBased;
  const finalPrimary = tomballPage.finalCta.primaryCta;
  const finalSecondary = tomballPage.finalCta.secondaryCta;

  return (
    <SiteShell>
      <Hero hero={tomballPage.hero} image={images.servicesHero} />
      <AboutBlock about={tomballPage.about} image={images.siteVertical} />
      {story ? (
        <Section
          eyebrow="Tomball, TX"
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
      <SectionCta heading="Ready to book in-home therapy in Tomball?" />
      <ContentListSection {...tomballInHomeTherapySection} />
      <ContentListSection
        {...tomballPediatricTherapySection}
        className="bg-[var(--surface-container-low)]"
      />
      <SectionCta heading="Want to talk about your child's goals?" />
      <Section title={kidsTherapy.title}>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
          {kidsTherapy.intro}
        </p>
        {kidsTherapy.outro ? (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
            {kidsTherapy.outro}
          </p>
        ) : null}
      </Section>
      <ContentListSection {...tomballSpeechDelaySection} />
      <SectionCta heading="Let's build a plan that fits your family." />
      <CollaboratorsSection collaborators={tomballPage.collaborators} />
      <ContentListSection
        {...tomballPrivateTherapySection}
        className="bg-[var(--surface-container-low)]"
      />
      <ContentListSection {...tomballEvaluationSection} />
      <SectionCta heading="Ready to get started?" />
      <WhyChooseSection why={tomballPage.why} />
      <Section
        eyebrow="Get started"
        title={tomballPage.finalCta.title}
        className="bg-muted/50"
      >
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          <TextBlockContent block={tomballPage.finalCta.body} />
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
