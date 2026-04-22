/**
 * Imagery: Unsplash (stock) + originals from expressionbeyondwords.com (Hostinger / Zyrosite assets).
 * Zyrosite paths verified as direct JPEGs under assets.zyrosite.com.
 */
const zy = "https://assets.zyrosite.com/m6L2D4JRl7ioV6BG";

export type PageImage = {
  src: string;
  alt: string;
};

export const images = {
  /** Home hero — warm pediatric context (Unsplash; stable photo id) */
  homeHero: {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=82",
    alt: "Child and caregiver in a bright, calm moment at home",
  } satisfies PageImage,
  /** Services page — family connection (Unsplash) */
  servicesHero: {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=82",
    alt: "Parent and child reading together on the floor at home",
  } satisfies PageImage,
  /** Therapy / approach — play-based learning (Unsplash) */
  therapyPlay: {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=82",
    alt: "Children playing together with blocks and smiles",
  } satisfies PageImage,
  /** Contact / reassurance (Unsplash) */
  contactSupport: {
    src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1400&q=82",
    alt: "Adult and child sitting together in a supportive moment",
  } satisfies PageImage,
  /** From current EBW site — in-home session context */
  siteSessionA: {
    src: `${zy}/2149110208-nT8YdFCxY4Fhg8rW.jpg`,
    alt: "In-home pediatric speech therapy session in a comfortable setting",
  } satisfies PageImage,
  siteSessionB: {
    src: `${zy}/2149110223-05ko74ZY6cuBKAsT.jpg`,
    alt: "Therapist and family focused on communication during a home visit",
  } satisfies PageImage,
  siteBanner: {
    src: `${zy}/2148452158-XKXdOvauhqfqcDcy.jpg`,
    alt: "Expression Beyond Words — welcoming care environment",
  } satisfies PageImage,
  siteVertical: {
    src: `${zy}/2148026250-FBL4HiqZbQqoSMR3.jpg`,
    alt: "Pediatric speech therapy materials and supportive session",
  } satisfies PageImage,
} as const;
