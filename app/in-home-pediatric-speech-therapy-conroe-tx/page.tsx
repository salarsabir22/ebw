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
  conroeEvaluationSection,
  conroeInHomeTherapySection,
  conroeKidsTherapySection,
  conroePage,
  conroePediatricTherapySection,
  conroePrivateTherapySection,
  conroeSpeechDelaySection,
} from "@/content/conroe";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: conroePage.seo.title,
  description: conroePage.seo.description,
  openGraph: {
    title: conroePage.seo.title,
    description: conroePage.seo.description,
    url: `${site.url}${conroePage.seo.path}`,
  },
};

export default function ConroeTxPage() {
  const story = conroePage.bilingual;
  const finalPrimary = conroePage.finalCta.primaryCta;
  const finalSecondary = conroePage.finalCta.secondaryCta;

  return (
    <SiteShell>
      <Hero hero={conroePage.hero} image={images.siteBanner} />
      <AboutBlock about={conroePage.about} image={images.siteSessionA} />
      {story ? (
        <Section
          eyebrow="Conroe, TX"
          title={story.title}
          className="bg-[var(--surface-container-low)]"
        >
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--ebw-muted)]">
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>
      ) : null}
      <ContentListSection {...conroeInHomeTherapySection} />
      <ContentListSection
        {...conroePediatricTherapySection}
        className="bg-[var(--surface-container-low)]"
      />
      <ContentListSection {...conroeKidsTherapySection} />
      <ContentListSection
        {...conroeSpeechDelaySection}
        className="bg-[var(--surface-container-low)]"
      />
      <CollaboratorsSection collaborators={conroePage.collaborators} />
      <ContentListSection {...conroePrivateTherapySection} />
      <ContentListSection
        {...conroeEvaluationSection}
        className="bg-[var(--surface-container-low)]"
      />
      <WhyChooseSection why={conroePage.why} />
      <Section
        eyebrow="Get started"
        title={conroePage.finalCta.title}
        className="bg-muted/50"
      >
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {conroePage.finalCta.body}
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
