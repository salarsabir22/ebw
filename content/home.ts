import { brand, site } from "./site";
import type { PageConfig } from "./types";

export const homePage: PageConfig = {
  seo: {
    title:
      "Best Home Speech Therapy Services In Northwest Houston | Expression Beyond Words",
    description:
      "In-home pediatric speech therapy in Northwest Houston with Verda Butt, M.S., CCC-SLP: play-based sessions, bilingual support, evaluations, and parent coaching—serving Spring, The Woodlands, Tomball, Conroe, and Magnolia.",
    path: "/",
  },
  hero: {
    eyebrow: brand.taglinePrimary,
    title: "In-home pediatric speech therapy in Northwest Houston",
    subtitle:
      "Helping children build strong communication skills through personalized, play-based therapy in the comfort of home—with a focus on early intervention.",
    brandQuote: brand.taglineSecondary,
  },
  areas: {
    title: "Serving Northwest Houston families",
    intro: "We bring therapy to the places your child already feels safest.",
    bullets: ["Spring", "The Woodlands", "Tomball", "Conroe", "Magnolia"],
    woodlandsHref: "/in-home-pediatric-speech-therapy-the-woodlands",
  },
  focusCards: [
    {
      title: "Articulation skills",
      body: "Enhancing speech clarity for effective communication.",
    },
    {
      title: "Fluency support",
      body: "Supporting children who stutter with evidence-based techniques.",
    },
    {
      title: "Language development",
      body: "Building receptive and expressive language through play and connection.",
    },
  ],
  about: {
    title: "Licensed pediatric speech therapist in Northwest Houston",
    paragraphs: [
      `Hi, I’m Verda, ${site.credentials} I have experience supporting toddlers through school-aged children with a wide range of communication needs, with a strong emphasis on early intervention.`,
      "My approach is child-centered, play-based, and relationship-focused—because meaningful progress begins with trust and connection. I believe in collaborating closely with parents, teachers, occupational therapists, and ABA providers to support your child’s communication development across all environments.",
    ],
    specialtiesTitle: "I specialize in:",
    specialties: [
      "Speech sound disorders",
      "Language delays and disorders",
      "Fluency challenges (stuttering)",
      "Autism-related communication difficulties",
      "AAC & gestalt language processing",
    ],
    closing:
      "Supporting children in expressing themselves with confidence and ease through different modes of communication.",
  },
  bilingual: {
    title:
      "Looking for a bilingual pediatric speech therapist in Northwest Houston who comes to you?",
    paragraphs: [
      "Finding the right support for your child shouldn’t be stressful. We provide mobile pediatric speech therapy for children in Northwest Houston, bringing care directly to your home, school, or daycare—so your child can learn in a space where they feel comfortable and confident.",
      "At Expression Beyond Words, our bilingual and multicultural approach supports families who want their child to maintain their home language while building strong communication skills in English. Early intervention in a familiar environment can significantly improve outcomes and long-term progress.",
    ],
  },
  playBased: {
    title: "Play-based in-home speech therapy for children",
    intro:
      "Children learn best when they are engaged in meaningful and enjoyable interactions. Our therapy sessions integrate evidence-based strategies within play to support natural communication development.",
    outcomes: [
      "Improve speech clarity",
      "Develop expressive and receptive language skills",
      "Build confidence in communication",
    ],
    checklist: [
      "Individualized, goal-oriented sessions",
      "Functional, real-life communication focus",
      "Support for early intervention and developmental milestones",
    ],
    outro:
      "Our mobile therapy model eliminates the need for travel and allows therapy to take place in your child’s natural environment—supporting better generalization of skills.",
  },
  collaborators: {
    title: "We collaborate with:",
    intro: "A coordinated, team-based approach helps progress carry over everywhere.",
    list: [
      "Parents and caregivers",
      "Teachers and school staff",
      "ABA providers",
      "Occupational therapists",
      "ENT specialists",
    ],
    closing:
      "This coordinated, team-based approach ensures consistent progress across all settings.",
  },
  why: {
    title: "Why families choose Expression Beyond Words",
    intro:
      "Choosing the right speech therapist is an important decision. Our goal is to provide structured, transparent, and individualized care that supports both the child and their family.",
    points: [
      "Child-centered, play-based therapy",
      "Bilingual support for multilingual families",
      "Focus on early intervention and long-term outcomes",
      "Personalized care plans",
      "Collaborative, family-focused approach",
      "Evidence-informed practices",
    ],
    closing:
      "We don’t just provide therapy—we partner with families to support lasting communication success.",
  },
  finalCta: {
    title: "Book pediatric speech therapy in Northwest Houston today",
    body: "If you’re noticing delays or challenges in your child’s communication, early intervention can make a meaningful difference. We’re here to answer your questions, guide you through the process, and create a personalized plan that supports your child’s needs.",
  },
  faqIntro: {
    title: "Frequently asked questions",
    subtitle: "Mobile speech therapy services in Northwest Houston",
  },
};
