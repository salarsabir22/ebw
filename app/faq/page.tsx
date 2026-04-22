import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { SiteShell } from "@/components/site-shell";
import { homePage } from "@/content/home";
import { faqs, site } from "@/content/site";

const title = "FAQ | In-home pediatric speech therapy in Northwest Houston";
const description =
  "Answers about ages served, booking, travel, evaluations, parent involvement, and more—Expression Beyond Words.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title, description, url: `${site.url}/faq` },
};

export default function FaqPage() {
  return (
    <SiteShell>
      <FaqList
        introTitle={homePage.faqIntro.title}
        introSubtitle={homePage.faqIntro.subtitle}
        items={faqs}
      />
    </SiteShell>
  );
}
