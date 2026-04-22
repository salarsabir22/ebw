import type { FaqItem } from "./types";

export const site = {
  name: "Expression Beyond Words",
  url: "https://expressionbeyondwords.com",
  owner: "Verda Butt",
  credentials:
    "ASHA certified Speech Language Pathologist with a Master’s degree in Communication Sciences and Disorders from Baylor University.",
} as const;

export const contact = {
  email: "info@expressionbeyondwords.com",
  phoneE164: "+12818262986",
  phoneDisplay: "+1 (281) 826-2986",
} as const;

export const servicesOffered = [
  "Speech & language screenings (early identification)",
  "Comprehensive evaluations with detailed reports",
  "Individualized in-home therapy sessions",
  "Parent coaching & ongoing support",
  "IEP consultation & meeting representation",
] as const;

export const iepNote =
  "Expression Beyond Words provides consultation and representation for IEP meetings. These services are billed at standard session rates based on time spent in preparation and attendance.";

export const pricing = {
  evaluation: {
    label: "Comprehensive evaluation",
    price: "$200",
    detail:
      "Includes formal testing, parent interview, and written report.",
  },
  sessions: [
    { minutes: 30, price: "$80" },
    { minutes: 45, price: "$90" },
    { minutes: 60, price: "$110" },
  ],
  bundles: [
    {
      name: "“Double-Up” bundle",
      lines: [
        "2 × 30-minute sessions: $140 (save $20)",
        "2 × 45-minute sessions: $162 (save $18)",
      ],
    },
    {
      name: "“Monthly Progress” bundle",
      lines: [
        "4 × 30-minute sessions: $290 (save $30)",
        "4 × 45-minute sessions: $324 (save $36)",
      ],
    },
  ],
  travel: {
    title: "Travel policy",
    freeRadiusMiles: 10,
    zips: [
      "77380",
      "77382",
      "77384",
      "77385",
      "77386",
      "77389",
      "77354",
    ],
    feeNote:
      "For locations beyond this area, a travel fee of $10–$20 may apply. Services are available up to 25 miles, with virtual therapy options offered beyond that range.",
  },
} as const;

export const faqs: FaqItem[] = [
  {
    question: "Do you offer in-home pediatric speech therapy in Northwest Houston?",
    answer:
      "Yes, we provide in-home pediatric speech therapy in Northwest Houston, serving Spring, The Woodlands, Tomball, Conroe, and Magnolia. Travel is free within a 10-mile radius of select zip codes (77380, 77382, 77384, 77385, 77386, 77389, 77354). A small travel fee may apply outside this area.",
  },
  {
    question: "How do I book pediatric speech therapy?",
    answer:
      "You can book by contacting us through this website or phone. We will guide you through scheduling a consultation or comprehensive evaluation.",
  },
  {
    question: "What ages do you work with?",
    answer:
      "We work with children ages 12 months to 18 years, providing individualized therapy based on developmental needs.",
  },
  {
    question: "What does a speech and language evaluation include?",
    answer:
      "Evaluations include standardized assessments, clinical observations, and parent input, along with a detailed written report and recommendations.",
  },
  {
    question: "Do you provide mobile speech therapy services?",
    answer:
      "Yes, we offer therapy at home, school, or daycare for maximum convenience and consistency.",
  },
  {
    question: "How often will my child need therapy sessions?",
    answer:
      "Most children are recommended 1–2 sessions per week, with session durations of 30, 45, or 60 minutes depending on individual needs.",
  },
  {
    question: "Can parents be involved in therapy sessions?",
    answer:
      "Yes, parent involvement is strongly encouraged. We provide strategies and guidance to support communication at home.",
  },
  {
    question: "What types of speech and language challenges do you treat?",
    answer:
      "We support children with speech sound disorders, language delays and disorders, fluency (stuttering), autism-related communication difficulties, severe articulation and phonological disorders, and AAC (alternative & augmentative communication) needs.",
  },
  {
    question: "Is in-home speech therapy effective?",
    answer:
      "Yes, therapy in a familiar environment often improves engagement, comfort, and real-life application of communication skills.",
  },
  {
    question: "How do I know if my child needs a speech therapist?",
    answer:
      "If your child has difficulty speaking, understanding language, or expressing themselves, an evaluation is recommended. Early intervention can significantly improve long-term outcomes.",
  },
];
