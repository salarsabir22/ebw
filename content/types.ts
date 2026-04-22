export type SeoConfig = {
  title: string;
  description: string;
  path: string;
};

export type HeroConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Optional emotional tagline from the brand guide (e.g. homepage). */
  brandQuote?: string;
};

export type FocusCard = {
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageConfig = {
  seo: SeoConfig;
  hero: HeroConfig;
  areas: {
    title: string;
    intro: string;
    bullets: string[];
    woodlandsHref: string;
  };
  focusCards: FocusCard[];
  about: {
    title: string;
    paragraphs: string[];
    specialtiesTitle: string;
    specialties: string[];
    closing: string;
  };
  bilingual: {
    title: string;
    paragraphs: string[];
  } | null;
  playBased: {
    title: string;
    intro: string;
    outcomes: string[];
    checklist: string[];
    outro: string;
  };
  collaborators: {
    title: string;
    intro: string;
    list: string[];
    closing: string;
  };
  why: {
    title: string;
    intro: string;
    points: string[];
    closing: string;
  };
  finalCta: {
    title: string;
    body: string;
  };
  faqIntro: {
    title: string;
    subtitle: string;
  };
};
