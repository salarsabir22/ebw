import type { Metadata } from "next";
import Link from "next/link";
import { AboutBlock } from "@/components/blocks/about-block";
import {
  CollaboratorsSection,
  PlayApproachSection,
  WhyChooseSection,
} from "@/components/blocks/therapy-stack";
import { FaqList } from "@/components/faq-list";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ServicesPricing } from "@/components/services-pricing";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { images } from "@/content/images";
import { homePage } from "@/content/home";
import { faqs, site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: homePage.seo.title,
  description: homePage.seo.description,
  openGraph: {
    title: homePage.seo.title,
    description: homePage.seo.description,
    url: `${site.url}${homePage.seo.path}`,
  },
};

export default function Home() {
  const finalPrimary = homePage.finalCta.primaryCta;
  const finalSecondary = homePage.finalCta.secondaryCta;

  return (
    <SiteShell>
      <Hero hero={homePage.hero} image={images.homeHero} />
      <AboutBlock about={homePage.about} image={images.siteSessionB} />
      {homePage.bilingual ? (
        <Section
          eyebrow="Northwest Houston"
          title={homePage.bilingual.title}
          className="bg-[var(--surface-container-low)]"
        >
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--ebw-muted)]">
            {homePage.bilingual.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>
      ) : null}
      <ServicesPricing
        eyebrow="Services & pricing"
        title="Pediatric Speech Therapy Services & Pricing in Northwest Houston"
      />
      <PlayApproachSection playBased={homePage.playBased} showOutro={false} />
      <CollaboratorsSection collaborators={homePage.collaborators} />
      <WhyChooseSection why={homePage.why} />
      <Section
        eyebrow="Get started"
        title={homePage.finalCta.title}
        className="bg-muted/50"
      >
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {homePage.finalCta.body}
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
      <FaqList
        introTitle={homePage.faqIntro.title}
        introSubtitle={homePage.faqIntro.subtitle}
        items={faqs}
      />
    </SiteShell>
  );
}
