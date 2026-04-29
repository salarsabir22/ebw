export type SeoConfig = {
  title: string;
  description: string;
  path: string;
};

export type HeroCta =
  | { label: string; href: string }
  | { label: string; tel: true };

export type HeroConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Optional emotional tagline from the brand guide (e.g. homepage). */
  brandQuote?: string;
  /** Extra paragraph below the subtitle (e.g. populations served). */
  supportingParagraph?: string;
  /** Highlight line (e.g. bilingual availability). */
  bilingualLine?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  /** e.g. “Serving: Spring, …” shown under CTAs */
  servingLine?: string;
};

export type FocusCard = {
  title: string;
  body: string;
};

export type ServicesPricingBundle = {
  name: string;
  lines: readonly string[];
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
    /** Paragraphs after the specialties list (e.g. approach + collaboration). */
    closingParagraphs: string[];
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
    /** Optional; shown in the approach card (e.g. on /therapy). Omitted on homepage when covered by the mobile section. */
    outro?: string;
    /** Defaults: “We focus on helping children:” / “What you can expect”. */
    outcomesHeading?: string;
    /** Set to "" to hide the checklist column heading. */
    checklistHeading?: string;
    /** Default true; set false for plain bullets on outcomes (e.g. Woodlands). */
    outcomesUseCheckmarks?: boolean;
  };
  collaborators: {
    title: string;
    intro: string;
    /** Shown above the partner list when set (e.g. “We collaborate with:”). */
    listHeading?: string;
    list: string[];
    closing: string;
  };
  why: {
    title: string;
    /** Optional lead paragraph; omit or leave empty to skip. */
    intro?: string;
    pointsHeading?: string;
    points: string[];
    closing: string;
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  faqIntro: {
    title: string;
    subtitle: string;
  };
};
