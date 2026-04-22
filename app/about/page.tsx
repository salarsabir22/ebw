import type { Metadata } from "next";
import { AboutBlock } from "@/components/blocks/about-block";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { images } from "@/content/images";
import { homePage } from "@/content/home";
import { site } from "@/content/site";

const title = "About Verda | Licensed pediatric speech therapist in Northwest Houston";
const description =
  "Meet Verda Butt, M.S., CCC-SLP—ASHA certified, Baylor-trained, and focused on early intervention, play-based therapy, and family collaboration.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: `${site.url}/about` },
};

const aboutHero = {
  eyebrow: "About",
  title: "Meet Verda Butt, M.S., CCC-SLP",
  subtitle:
    "ASHA certified, Baylor-trained, and passionate about early intervention—supporting toddlers through school-aged children with speech, language, fluency, and autism-related communication needs.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <Hero hero={aboutHero} image={images.siteSessionA} />
      <AboutBlock about={homePage.about} image={images.siteSessionB} />
      {homePage.bilingual ? (
        <Section
          eyebrow="Bilingual care"
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
    </SiteShell>
  );
}
