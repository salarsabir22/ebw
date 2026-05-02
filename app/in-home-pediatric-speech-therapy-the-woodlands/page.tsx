import type { Metadata } from "next";
import Link from "next/link";
import { AboutBlock } from "@/components/blocks/about-block";
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
  woodlandsBundlePricing,
  woodlandsPage,
  woodlandsServicesPricing,
} from "@/content/woodlands";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: woodlandsPage.seo.title,
  description: woodlandsPage.seo.description,
  openGraph: {
    title: woodlandsPage.seo.title,
    description: woodlandsPage.seo.description,
    url: `${site.url}${woodlandsPage.seo.path}`,
  },
};

export default function WoodlandsPage() {
  const story = woodlandsPage.bilingual;
  const finalPrimary = woodlandsPage.finalCta.primaryCta;
  const finalSecondary = woodlandsPage.finalCta.secondaryCta;

  return (
    <SiteShell>
      <Hero hero={woodlandsPage.hero} image={images.siteBanner} />
      <AboutBlock about={woodlandsPage.about} image={images.siteSessionA} />
      {story ? (
        <Section
          eyebrow="The Woodlands"
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
      <ServicesPricing
        sectionId="woodlands-services"
        eyebrow={woodlandsServicesPricing.sectionEyebrow}
        title={woodlandsServicesPricing.sectionTitle}
        intro={woodlandsServicesPricing.intro}
        servicesList={woodlandsServicesPricing.servicesList}
        evaluationLabel={woodlandsServicesPricing.evaluationLabel}
        evaluationDetail={woodlandsServicesPricing.evaluationDetail}
        therapySessionsHeading={woodlandsServicesPricing.therapySessionsHeading}
        bundles={woodlandsBundlePricing}
        bundlesAreaTitle={woodlandsServicesPricing.bundlesAreaTitle}
        travelCustom={woodlandsServicesPricing.travel}
      />
      <PlayApproachSection playBased={woodlandsPage.playBased} showOutro={false} />
      <CollaboratorsSection collaborators={woodlandsPage.collaborators} />
      <WhyChooseSection why={woodlandsPage.why} />
      <Section
        eyebrow="Get started"
        title={woodlandsPage.finalCta.title}
        className="bg-muted/50"
      >
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {woodlandsPage.finalCta.body}
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
