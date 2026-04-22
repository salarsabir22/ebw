import { site } from "./site";
import type { PageConfig } from "./types";

export const woodlandsPage: PageConfig = {
  seo: {
    title: "In-Home Pediatric Speech Therapy in The Woodlands, TX | Expression Beyond Words",
    description:
      "Mobile pediatric speech therapy in The Woodlands and nearby Montgomery County communities. Play-based, relationship-focused care with Verda Butt, M.S., CCC-SLP.",
    path: "/in-home-pediatric-speech-therapy-the-woodlands",
  },
  hero: {
    eyebrow: "The Woodlands & Montgomery County",
    title: "In-home pediatric speech therapy in The Woodlands, TX",
    subtitle:
      "Helping children build strong communication skills through personalized, play-based therapy delivered at home—with a focus on early intervention and lasting progress.",
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
    title: "Licensed pediatric speech therapist serving The Woodlands, TX",
    paragraphs: [
      `Hi, I’m Verda, ${site.credentials} I provide in-home pediatric speech therapy in The Woodlands, supporting children with a strong focus on early intervention and functional communication skills.`,
      "My approach is child-centered, play-based, and relationship-focused. I collaborate closely with parents, teachers, and other therapists to ensure consistent progress across all environments.",
    ],
    specialtiesTitle: "I specialize in working with children who experience:",
    specialties: [
      "Speech sound disorders",
      "Language delays and disorders",
      "Fluency challenges (stuttering)",
      "Autism-related communication difficulties",
      "AAC and gestalt language processing needs",
    ],
    closing:
      "Whether your child has a speech delay, language difficulty, or autism-related communication challenges, we provide structured support designed to meet their individual needs.",
  },
  bilingual: null,
  playBased: {
    title: "Play-based speech therapy that builds real communication skills",
    intro:
      "Children learn best through meaningful interaction. Our sessions combine structured, evidence-based strategies with play to encourage natural communication development.",
    outcomes: [
      "Improve speech clarity",
      "Develop language comprehension and expression",
      "Build confidence in communication",
    ],
    checklist: [
      "Individualized treatment goals",
      "Functional, real-life communication focus",
      "Strong early intervention support",
    ],
    outro:
      "Our mobile therapy model removes travel barriers and allows therapy to happen where your child feels most comfortable.",
  },
  collaborators: {
    title: "We collaborate with:",
    intro: "Team-based care helps skills carry over faster—and last longer.",
    list: [
      "Parents and caregivers",
      "Teachers",
      "ABA therapists",
      "Occupational therapists",
      "Medical specialists",
    ],
    closing:
      "This team-based approach ensures consistency and better long-term progress.",
  },
  why: {
    title: "Why families in The Woodlands choose us",
    intro:
      "In-home therapy should feel organized, transparent, and truly individualized.",
    points: [
      "In-home convenience and comfort",
      "Strong focus on early intervention",
      "Individualized therapy plans",
      "Evidence-based clinical practices",
      "Family-centered collaboration",
      "Specialized support for autism and speech delays",
    ],
    closing:
      "We don’t just provide therapy—we support your child’s communication journey from every angle.",
  },
  finalCta: {
    title: "Book in-home pediatric speech therapy in The Woodlands",
    body: "If your child is experiencing speech or language challenges, early intervention can make a significant difference. We’re here to guide you, answer your questions, and create a personalized therapy plan for your child.",
  },
  faqIntro: {
    title: "Frequently asked questions",
    subtitle: "In-home pediatric speech therapy in The Woodlands",
  },
};
