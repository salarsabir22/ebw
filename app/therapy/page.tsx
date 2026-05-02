import type { Metadata } from "next";
import { TherapyStack } from "@/components/blocks/therapy-stack";
import { Hero } from "@/components/hero";
import { SiteShell } from "@/components/site-shell";
import { images } from "@/content/images";
import { homePage } from "@/content/home";
import { site } from "@/content/site";

const title = "Play-based in-home therapy | Expression Beyond Words";
const description =
  "How we use play, collaboration, and evidence-informed practices to support communication at home, school, and daycare.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${site.url}/therapy` },
};

const hero = {
  eyebrow: "Our approach",
  title: "Play-based care in natural environments",
  subtitle:
    "Structured, evidence-informed therapy that still feels like childhood—not a clinic. Below is how we plan sessions, collaborate, and measure what matters for your family.",
};

export default function TherapyPage() {
  return (
    <SiteShell>
      <Hero hero={hero} image={images.therapyPlay} primaryCtaHref="/contact" />
      <TherapyStack config={homePage} />
    </SiteShell>
  );
}
