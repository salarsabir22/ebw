import type { PageConfig, ServicesPricingBundle } from "./types";

/** Bundles + line copy for The Woodlands services section. */
export const woodlandsBundlePricing: readonly ServicesPricingBundle[] = [
  {
    name: "Double Up Bundle",
    lines: [
      "2 × 30 min: $140 (Save $20)",
      "2 × 45 min: $162 (Save $18)",
    ],
  },
  {
    name: "Monthly Progress Bundle",
    lines: [
      "4 × 30 min: $290 (Save $30)",
      "4 × 45 min: $324 (Save $36)",
    ],
  },
];

export const woodlandsPage: PageConfig = {
  seo: {
    title: "Best In Home Pediatric Speech Therapist In The Woodlands - EBW",
    description:
      "Get expert in home pediatric speech therapy in The Woodlands. Personalized speech sessions for toddlers and kids in the comfort of your home. Book today",
    path: "/in-home-pediatric-speech-therapy-the-woodlands",
  },
  hero: {
    eyebrow: "The Woodlands & Montgomery County",
    title: "In Home Pediatric Speech Therapy in The Woodlands, TX",
    subtitle:
      "Helping children build strong communication skills through personalized, play based therapy delivered in the comfort of your home, with a focus on early intervention and lasting progress.",
    supportingParagraph:
      "We support toddlers and school aged children with speech, language, fluency, and autism related communication needs.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: { label: "Schedule an Evaluation", href: "/contact" },
    servingLine:
      "📍 Serving: The Woodlands & nearby Montgomery County communities",
  },
  areas: {
    title: "Serving The Woodlands families",
    intro:
      "We support toddlers and school-aged children with speech, language, fluency, and autism-related communication needs.",
    bullets: ["The Woodlands", "Nearby Montgomery County communities"],
    woodlandsHref: "/in-home-pediatric-speech-therapy-the-woodlands",
  },
  focusCards: [
    {
      title: "Articulation & speech sounds",
      body: "Clearer speech for everyday confidence and connection.",
    },
    {
      title: "Fluency (stuttering) support",
      body: "Evidence-based strategies that meet your child where they are.",
    },
    {
      title: "Language & social communication",
      body: "Stronger understanding and expression through meaningful play.",
    },
  ],
  about: {
    title: "Licensed Pediatric Speech Therapist Serving The Woodlands, TX",
    paragraphs: [
      "Hi, I’m Verda, an ASHA certified Speech Language Pathologist with a Master’s degree in Communication Sciences and Disorders from Baylor University. I provide in home pediatric speech therapy in The Woodlands, supporting children with a strong focus on early intervention and functional communication skills.",
    ],
    specialtiesTitle: "I specialize in working with children who experience:",
    specialties: [
      "Speech sound disorders",
      "Language delays and disorders",
      "Fluency challenges (stuttering)",
      "Autism related communication difficulties",
      "AAC and gestalt language processing needs",
    ],
    closingParagraphs: [
      "My approach is child centered, play based, and relationship focused. I also collaborate closely with parents, teachers, and other therapists to ensure consistent progress across all environments.",
    ],
  },
  bilingual: {
    title: "In Home Pediatric Speech Therapy in The Woodlands That Comes to You",
    paragraphs: [
      "Finding the right support for your child should not be stressful. We provide mobile speech therapy in The Woodlands, bringing professional care directly to your home so your child can learn in a comfortable and familiar environment.",
      "Early intervention in a natural setting often leads to stronger communication outcomes, improved engagement, and faster progress.",
      "Whether your child has a speech delay, language difficulty, or autism-related communication challenges, we provide structured support designed to meet their individual needs.",
    ],
  },
  playBased: {
    title: "Play Based Speech Therapy That Builds Real Communication Skills",
    intro:
      "Children learn best through meaningful interaction. Our sessions combine structured, evidence based strategies with play to encourage natural communication development.",
    outcomes: [
      "Improve speech clarity",
      "Develop language comprehension and expression",
      "Build confidence in communication",
    ],
    checklist: [
      "Individualized treatment goals",
      "Functional, real life communication focus",
      "Strong early intervention support",
    ],
    outcomesHeading: "We help children:",
    checklistHeading: "",
    outcomesUseCheckmarks: false,
  },
  collaborators: {
    title: "Convenient In Home Speech Therapy in The Woodlands",
    intro:
      "Our mobile therapy model removes travel barriers and allows therapy to happen where your child feels most comfortable.",
    listHeading: "We collaborate with:",
    list: [
      "Parents and caregivers",
      "Teachers",
      "ABA therapists",
      "Occupational therapists",
      "Medical specialists",
    ],
    closing:
      "This team based approach ensures consistency and better long term progress.",
  },
  why: {
    title: "Why Families in The Woodlands Choose Us",
    points: [
      "In home convenience and comfort",
      "Strong focus on early intervention",
      "Individualized therapy plans",
      "Evidence-based clinical practices",
      "Family centered collaboration",
      "Specialized support for autism and speech delays",
    ],
    closing:
      "We don’t just provide therapy we support your child’s communication journey from every angle.",
  },
  finalCta: {
    title: "Book In-Home Pediatric Speech Therapy in The Woodlands",
    body: "If your child is experiencing speech or language challenges, early intervention can make a significant difference. We are here to guide you, answer your questions, and create a personalized therapy plan for your child.",
    primaryCta: { label: "Schedule Evaluation", href: "/contact" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
  faqIntro: {
    title: "Frequently asked questions",
    subtitle: "In-home pediatric speech therapy in The Woodlands",
  },
};

export const woodlandsServicesPricing = {
  sectionEyebrow: "Services & pricing",
  sectionTitle: "Pediatric Speech Therapy Services in The Woodlands, TX",
  intro:
    "We provide individualized, evidence based speech therapy services designed to support your child’s communication development at home.",
  servicesList: [
    "Speech & Language Screenings (early identification)",
    "Comprehensive Speech & Language Evaluations",
    "In Home Individual Therapy Sessions",
    "Parent Coaching & Support",
    "IEP Consultation & Meeting Representation",
  ],
  evaluationLabel: "Comprehensive Evaluation",
  evaluationDetail:
    "Includes assessment, parent interview, and detailed written report.",
  therapySessionsHeading: "Therapy Sessions",
  bundlesAreaTitle: "Bundled Options",
  travel: {
    title: "Travel Policy",
    paragraphs: [
      "We provide in home speech therapy throughout The Woodlands and nearby areas.",
      "Free travel within a 10-mile radius of: 77380, 77382, 77384, 77385, 77386, 77389, 77354",
      "$10-$20 travel fee beyond this area",
      "Services available up to 25 miles",
      "Virtual sessions are also available if appropriate for your child’s needs.",
    ],
  },
} as const;
