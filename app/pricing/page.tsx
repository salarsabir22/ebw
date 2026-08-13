import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { SectionCta } from "@/components/section-cta";
import { ServicesPricing } from "@/components/services-pricing";
import { SiteShell } from "@/components/site-shell";
import { images } from "@/content/images";
import { site } from "@/content/site";

const title = "Speech therapy pricing & travel | Expression Beyond Words";
const description =
  "Evaluation and session rates, pre-paid bundles, and travel policy for in-home pediatric speech therapy in Northwest Houston.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${site.url}/pricing` },
};

const hero = {
  eyebrow: "Transparent rates",
  title: "Pricing for evaluations, sessions, and bundles",
  subtitle:
    "Every child is unique—these numbers are a starting point. We’ll recommend session length and frequency after we understand your goals.",
};

export default function PricingPage() {
  return (
    <SiteShell>
      <Hero hero={hero} image={images.pricingHero} primaryCtaHref="/contact" />
      <ServicesPricing sectionId="pricing" eyebrow="" title="" intro="" />
      <SectionCta heading="Ready to book an evaluation or bundle?" />
    </SiteShell>
  );
}
