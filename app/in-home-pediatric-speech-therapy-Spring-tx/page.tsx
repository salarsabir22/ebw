import type { Metadata } from "next";
import Link from "next/link";
import { AboutBlock } from "@/components/blocks/about-block";
import { ContentListSection } from "@/components/blocks/content-list-section";
import {
  CollaboratorsSection,
  PlayApproachSection,
  WhyChooseSection,
} from "@/components/blocks/therapy-stack";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ServicesPricing } from "@/components/services-pricing";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { images } from "@/content/images";
import {
  springBundlePricing,
  springEvaluationSection,
  springPage,
  springPrivateTherapySection,
  springServicesPricing,
  springSpeechDelaySection,
} from "@/content/spring";
import { site } from "@/content/site";
import { TextBlockContent } from "@/components/text-segments";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: springPage.seo.title,
  description: springPage.seo.description,
  openGraph: {
    title: springPage.seo.title,
    description: springPage.seo.description,
    url: `${site.url}${springPage.seo.path}`,
  },
};

export default function SpringTxPage() {
  const story = springPage.bilingual;
  const finalPrimary = springPage.finalCta.primaryCta;
  const finalSecondary = springPage.finalCta.secondaryCta;

  return (
    <SiteShell>
      <Hero hero={springPage.hero} image={images.homeHero} />
      <AboutBlock about={springPage.about} image={images.siteSessionB} />
      {story ? (
        <Section
          eyebrow="Spring, TX"
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
      <ServicesPricing
        sectionId="spring-services"
        eyebrow={springServicesPricing.sectionEyebrow}
        title={springServicesPricing.sectionTitle}
        intro={springServicesPricing.intro}
        servicesList={springServicesPricing.servicesList}
        evaluationLabel={springServicesPricing.evaluationLabel}
        evaluationDetail={springServicesPricing.evaluationDetail}
        therapySessionsHeading={springServicesPricing.therapySessionsHeading}
        bundles={springBundlePricing}
        bundlesAreaTitle={springServicesPricing.bundlesAreaTitle}
        travelCustom={springServicesPricing.travel}
      />
      <ContentListSection
        {...springEvaluationSection}
        className="bg-[var(--surface-container-low)]"
      />
      <ContentListSection {...springSpeechDelaySection} />
      <PlayApproachSection playBased={springPage.playBased} showOutro={false} />
      <ContentListSection
        {...springPrivateTherapySection}
        className="bg-[var(--surface-container-low)]"
      />
      <CollaboratorsSection collaborators={springPage.collaborators} />
      <WhyChooseSection why={springPage.why} />
      <Section
        eyebrow="Get started"
        title={springPage.finalCta.title}
        className="bg-muted/50"
      >
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          <TextBlockContent block={springPage.finalCta.body} />
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
