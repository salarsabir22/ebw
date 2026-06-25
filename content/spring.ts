import type { PageConfig, ServicesPricingBundle } from "./types";

export const springBundlePricing: readonly ServicesPricingBundle[] = [
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

export const springPage: PageConfig = {
  seo: {
    title: "In Home Pediatric Speech Therapy Services in Spring TX - Verda Butt",
    description:
      "Need a pediatric speech therapist in Spring TX? Expression Beyond Words offers in home speech therapy, evaluations, and speech delay support for children.",
    path: "/in-home-pediatric-speech-therapy-Spring-tx",
  },
  hero: {
    eyebrow: "Spring & Northwest Houston",
    title: "In Home Pediatric Speech Therapy in Spring TX",
    subtitle:
      "Helping children build strong communication skills through personalized, play-based therapy delivered in the comfort of your home, with a focus on early intervention and meaningful progress.",
    supportingParagraph:
      "We support toddlers and school-aged children with speech, language, fluency, and autism-related communication needs.",
    primaryCta: { label: "Book a FREE 15-Minute Consultation", href: "/contact" },
    secondaryCta: {
      label: "Schedule a Pediatric Speech Evaluation",
      href: "/contact",
    },
    servingLine:
      "Serving Spring, TX and surrounding Northwest Houston communities.",
  },
  areas: {
    title: "Serving Spring families",
    intro:
      "We support toddlers and school-aged children with speech, language, fluency, and autism-related communication needs.",
    bullets: ["Spring", "Northwest Houston communities"],
    woodlandsHref: "/in-home-pediatric-speech-therapy-the-woodlands",
    springHref: "/in-home-pediatric-speech-therapy-Spring-tx",
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
    title: "Licensed Pediatric Speech Therapist Serving Spring, TX",
    paragraphs: [
      "Hi, I'm Verda, an ASHA-certified Speech Language Pathologist with a Master's degree in Communication Sciences and Disorders from Baylor University. I provide in-home pediatric speech therapy in Spring TX, helping children strengthen communication skills through individualized, evidence-based care delivered in their natural environment.",
    ],
    specialtiesTitle: "I am passionate about supporting children with:",
    specialties: [
      "Speech sound disorders",
      "Language delays and language disorders",
      "Speech delay in toddlers",
      "Fluency challenges (stuttering)",
      "Autism-related communication needs",
      "AAC and gestalt language processing",
      "Social communication difficulties",
    ],
    closingParagraphs: [
      "My approach is child-centered, play-based, and family-focused. I collaborate closely with parents, caregivers, teachers, and other professionals to help children make consistent progress across all environments.",
    ],
  },
  bilingual: {
    title: "Mobile Pediatric Speech Therapy Services in Spring TX",
    paragraphs: [
      "Finding the right support for your child should feel simple and stress-free. Our mobile pediatric speech therapy services in Spring TX bring professional speech therapy directly to your home, allowing your child to learn and grow in a familiar and comfortable setting.",
      "By providing therapy in a natural environment, we can focus on real-life communication opportunities that encourage stronger engagement and long-term success.",
      "Whether your child is experiencing speech delays, language difficulties, articulation concerns, or autism-related communication challenges, we create individualized treatment plans tailored to their specific needs.",
    ],
  },
  playBased: {
    title: "Speech Therapy for Kids in Spring TX",
    intro:
      "Our speech therapy for kids in Spring TX is designed to make learning enjoyable while targeting meaningful communication goals. Children learn best through interaction and play, which is why our therapy sessions combine evidence-based techniques with engaging activities that motivate participation and progress.",
    outcomes: [
      "Improve speech clarity",
      "Expand vocabulary and language skills",
      "Build confidence in communication",
      "Develop social interaction skills",
      "Strengthen listening and comprehension abilities",
    ],
    checklist: [
      "Individualized treatment plans",
      "Functional communication goals",
      "Family-centered support",
      "Evidence-based therapy methods",
    ],
    outcomesHeading: "We help children:",
    checklistHeading: "",
    outcomesUseCheckmarks: false,
  },
  collaborators: {
    title: "Home-Based Speech Therapy for Children in Spring TX",
    intro:
      "Our home based speech therapy for children in Spring TX allows children to practice communication skills in the environment where they feel most comfortable.",
    listHeading: "This approach supports:",
    list: [
      "Increased participation",
      "Better engagement during sessions",
      "Real-world communication practice",
      "Stronger parent involvement",
      "Consistent skill development",
    ],
    closing:
      "By incorporating everyday routines and familiar activities into therapy, children can apply new skills more naturally and confidently.",
  },
  why: {
    title: "Why Families Choose Expression Beyond Words",
    intro:
      "Families trust Expression Beyond Words because we provide compassionate, individualized care that focuses on meaningful progress and real-world communication success.",
    pointsHeading: "What makes us different:",
    points: [
      "Convenient in-home therapy services",
      "Strong focus on early intervention",
      "Individualized therapy plans",
      "Evidence-based treatment approaches",
      "Family-centered collaboration",
      "Specialized support for speech delays and autism-related communication needs",
      "Flexible scheduling options",
    ],
    closing:
      "We believe every child deserves the opportunity to communicate confidently and connect with the world around them.",
  },
  finalCta: {
    title: "Book Pediatric Speech Therapy in Spring TX",
    body: "If your child is experiencing speech or language challenges, early support can make a lasting difference. At Expression Beyond Words, we proudly provide mobile pediatric speech therapy services in Spring TX designed to help children build confidence, strengthen communication skills, and reach their full potential. Contact us today to book pediatric speech therapy in Spring TX, schedule a consultation, or arrange a comprehensive speech evaluation.",
    primaryCta: { label: "Schedule Evaluation", href: "/contact" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
  faqIntro: {
    title: "Frequently asked questions",
    subtitle: "In-home pediatric speech therapy in Spring, TX",
  },
};

export const springServicesPricing = {
  sectionEyebrow: "Services & pricing",
  sectionTitle: "Pediatric Speech Therapy Services in Spring TX",
  intro:
    "We provide comprehensive pediatric speech therapy in Spring TX designed to support communication development from early childhood through school age. Every therapy plan is customized to help children build practical communication skills that improve everyday interactions.",
  servicesList: [
    "Speech & Language Screenings",
    "Comprehensive Pediatric Speech Evaluations",
    "Individual In-Home Therapy Sessions",
    "Parent Coaching & Education",
    "Early Intervention Services",
    "IEP Consultation & Support",
    "Speech Delay Therapy for Toddlers",
    "Autism Communication Support",
  ],
  evaluationLabel: "Comprehensive Pediatric Speech Evaluation",
  evaluationDetail:
    "Includes assessment, parent interview, and detailed written report with personalized recommendations.",
  therapySessionsHeading: "Therapy Sessions",
  bundlesAreaTitle: "Bundled Options",
  travel: {
    title: "Travel Policy",
    paragraphs: [
      "We provide in-home speech therapy throughout Spring, TX and surrounding Northwest Houston communities.",
      "Free travel within a 10-mile radius of: 77380, 77382, 77384, 77385, 77386, 77389, 77354",
      "$10-$20 travel fee beyond this area",
      "Services available up to 25 miles",
      "Virtual sessions are also available if appropriate for your child's needs.",
    ],
  },
} as const;

export const springEvaluationSection = {
  title: "Pediatric Speech Evaluation in Spring TX",
  intro:
    "A professional pediatric speech evaluation in Spring TX is often the first step toward understanding your child's communication strengths and challenges.",
  listHeading: "Our evaluations assess:",
  list: [
    "Speech sound production",
    "Receptive language skills",
    "Expressive language development",
    "Social communication abilities",
    "Fluency and stuttering concerns",
    "Functional communication skills",
  ],
  closing:
    "Following the evaluation, families receive personalized recommendations and a therapy plan designed specifically for their child's goals.",
} as const;

export const springSpeechDelaySection = {
  title: "Speech Delay Therapy for Toddlers in Spring TX",
  intro:
    "Early intervention can make a significant difference in a child's communication development. Our speech delay therapy for toddlers in Spring TX focuses on helping young children build foundational language and communication skills during critical developmental years.",
  listHeading: "We help toddlers who may struggle with:",
  list: [
    "Saying words clearly",
    "Combining words into phrases",
    "Following directions",
    "Understanding language",
    "Expressing wants and needs",
    "Social interaction and engagement",
  ],
  closing:
    "Through play-based activities and parent involvement, we create engaging therapy experiences that encourage communication growth.",
} as const;

export const springPrivateTherapySection = {
  title: "Private Pediatric Speech Therapy in Spring TX",
  intro:
    "Families looking for personalized care often choose our private pediatric speech therapy in Spring TX because of the individualized attention each child receives.",
  listHeading: "Private therapy allows us to:",
  list: [
    "Focus on your child's unique needs",
    "Create customized treatment goals",
    "Provide flexible scheduling options",
    "Deliver one-on-one support",
    "Track measurable progress",
  ],
  closing:
    "Our goal is to provide effective therapy that supports lasting communication success.",
} as const;
