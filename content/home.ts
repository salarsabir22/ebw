import { brand } from "./site";
import type { PageConfig } from "./types";

export const homePage: PageConfig = {
  seo: {
    title:
      "In-Home Pediatric Speech Therapy in Northwest Houston | Expression Beyond Words",
    description:
      "In-home pediatric speech therapy in Northwest Houston with Verda Butt, M.S., CCC-SLP: play-based sessions, bilingual support (Urdu, Hindi, English), evaluations, and parent coaching—serving Spring, The Woodlands, Tomball, Conroe, and Magnolia.",
    path: "/",
  },
  hero: {
    eyebrow: brand.taglinePrimary,
    title: "In-Home Pediatric Speech Therapy in Northwest Houston",
    subtitle:
      "Helping children build strong communication skills through personalized, play-based therapy in the comfort of your home, with a focus on early intervention.",
    supportingParagraph:
      "Supporting toddlers and school-aged children with speech, language, fluency, and autism-related communication needs.",
    bilingualLine:
      "Bilingual speech therapy available in Urdu, Hindi, and English to support multilingual families.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: { label: "Schedule an Evaluation", href: "/contact" },
    servingLine:
      "📍 Serving: Spring, The Woodlands, Tomball, Conroe & Magnolia",
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
    title: "Licensed Pediatric Speech Therapist in Northwest Houston",
    paragraphs: [
      "Hi, I’m Verda, an ASHA-certified Speech Language Pathologist with a Master’s degree in Communication Sciences and Disorders from Baylor University. I have experience supporting toddlers through school-aged children with a wide range of communication needs, with a strong emphasis on early intervention.",
    ],
    specialtiesTitle: "I specialize in:",
    specialties: [
      "Speech sound disorders",
      "Language delays and disorders",
      "Fluency challenges (stuttering)",
      "Autism-related communication difficulties",
      "AAC & Gestalt Language Processing",
    ],
    closingParagraphs: [
      "My approach is child-centered, play-based, and relationship-focused, because meaningful progress begins with trust and connection.",
      "I believe in collaborating closely with parents, teachers, occupational therapists, and ABA providers to support your child’s communication development across all environments.",
    ],
  },
  bilingual: {
    title:
      "Looking for a Bilingual Pediatric Speech Therapist in Northwest Houston Who Comes to You?",
    paragraphs: [
      "Finding the right support for your child shouldn’t be stressful. We provide mobile pediatric speech therapy for children in Northwest Houston, bringing care directly to your home, school, or daycare, so your child can learn in a space where they feel comfortable and confident.",
      "At Expression Beyond Words, our bilingual and multicultural approach supports families who want their child to maintain their home language while building strong communication skills in English. Early intervention in a familiar environment can significantly improve outcomes and long-term progress.",
    ],
  },
  playBased: {
    title: "Play-Based In-Home Speech Therapy for Children",
    intro:
      "Children learn best when they are engaged in meaningful and enjoyable interactions. Our therapy sessions are designed to integrate evidence-based strategies within play to support natural communication development.",
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
  },
  collaborators: {
    title: "Mobile Speech Therapy Services in Northwest Houston",
    intro:
      "Our mobile therapy model eliminates the need for travel and allows therapy to take place in your child’s natural environment, supporting better generalization of skills.",
    listHeading: "We collaborate with:",
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
    title: "Why Choose Our In-Home Pediatric Speech Therapy?",
    intro:
      "Choosing the right speech therapist is an important decision. Our goal is to provide structured, transparent, and individualized care that supports both the child and their family.",
    pointsHeading: "What sets us apart:",
    points: [
      "Child-centered, play-based therapy",
      "Bilingual support for multilingual families",
      "Focus on early intervention and long-term outcomes",
      "Personalized care plans",
      "Collaborative, family-focused approach",
      "Evidence-informed practices",
    ],
    closing:
      "We don’t just provide therapy, we partner with families to support lasting communication success.",
  },
  finalCta: {
    title: "Book Pediatric Speech Therapy in Northwest Houston Today",
    body: "If you’re noticing delays or challenges in your child’s communication, early intervention can make a meaningful difference in their development. We are here to answer your questions, guide you through the process, and create a personalized plan that supports your child’s needs.",
    primaryCta: { label: "Schedule Evaluation", href: "/contact" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
  },
  faqIntro: {
    title: "Frequently asked questions",
    subtitle: "In-home pediatric speech therapy in Northwest Houston",
  },
};
