/**
 * Imagery: Unsplash (stock) + originals from expressionbeyondwords.com (Hostinger / Zyrosite assets).
 * Zyrosite paths verified as direct JPEGs under assets.zyrosite.com.
 */
const zy = "https://assets.zyrosite.com/m6L2D4JRl7ioV6BG";

/** In-home session photo from expressionbeyondwords.com (Zyrosite CDN) */
const zySessionInHome = `${zy}/2149110208-nT8YdFCxY4Fhg8rW.jpg`;

export type PageImage = {
  src: string;
  alt: string;
  /** Tailwind aspect class; default landscape 4/3 in Hero */
  aspect?: "aspect-[4/3]" | "aspect-[3/4]" | "aspect-[4/5]" | "aspect-[5/4]" | "aspect-square";
  /** CSS object-position so portrait subjects aren’t clipped */
  objectPosition?: string;
};

export const images = {
  /** Home hero — play-based therapy materials and flashcards */
  homeHero: {
    src: "/images/home-hero.png",
    alt: "Play-based pediatric speech therapy materials, flashcards, and toys arranged on the floor",
    aspect: "aspect-[4/3]",
    objectPosition: "center",
  } satisfies PageImage,
  /** Services page hero */
  servicesHero: {
    src: "/images/services-hero.png",
    alt: "Verda with play-based therapy toys, supporting pediatric speech and language care",
    aspect: "aspect-[3/4]",
    objectPosition: "center 62%",
  } satisfies PageImage,
  /** Therapy / approach page hero */
  therapyPlay: {
    src: "/images/therapy-hero.png",
    alt: "Verda with play-based therapy toys, reflecting a joyful, child-centered approach",
    aspect: "aspect-[3/4]",
    objectPosition: "center 62%",
  } satisfies PageImage,
  /** Contact page */
  contactSupport: {
    src: "/images/contact-hero.png",
    alt: "Verda holding an Expression Beyond Words business card",
    aspect: "aspect-[4/5]",
    objectPosition: "center 35%",
  } satisfies PageImage,
  /** From current EBW site — in-home session context */
  siteSessionA: {
    src: zySessionInHome,
    alt: "In-home pediatric speech therapy session in a comfortable setting",
  } satisfies PageImage,
  /** About page hero — professional portrait */
  aboutHero: {
    src: "/images/about-hero.png",
    alt: "Verda Butt, M.S., CCC-SLP, licensed pediatric speech-language pathologist",
    aspect: "aspect-[3/4]",
    objectPosition: "center 22%",
  } satisfies PageImage,
  siteSessionB: {
    src: "/images/about-portrait.png",
    alt: "Verda demonstrating speech sounds with a flashcard during pediatric therapy",
    aspect: "aspect-[3/4]",
    objectPosition: "center 30%",
  } satisfies PageImage,
  siteBanner: {
    src: `${zy}/2148452158-XKXdOvauhqfqcDcy.jpg`,
    alt: "Expression Beyond Words — welcoming care environment",
  } satisfies PageImage,
  /** Pricing page hero — business card with play materials */
  pricingHero: {
    src: "/images/pricing-hero.png",
    alt: "Expression Beyond Words business card with pediatric therapy play materials",
    aspect: "aspect-[4/3]",
    objectPosition: "center",
  } satisfies PageImage,
  siteVertical: {
    src: "/images/services-care.png",
    alt: "Verda with flashcards and play materials used in pediatric speech therapy",
    aspect: "aspect-[3/4]",
    objectPosition: "center 55%",
  } satisfies PageImage,
} as const;
