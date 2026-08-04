export type BlogBlock =
  | { type: "paragraphs"; paragraphs: readonly string[] }
  | { type: "heading"; heading: string }
  | {
      type: "numbered";
      number: number;
      title: string;
      paragraphs: readonly string[];
    }
  | { type: "list"; intro?: string; items: readonly string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  featuredImage: {
    src: string;
    alt: string;
  };
  blocks: readonly BlogBlock[];
};

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "10-signs-your-child-may-need-speech-therapy",
    title: "10 Signs Your Child May Need Speech Therapy",
    description:
      "Learn ten common signs of speech or language delays in children, why early intervention matters, and when to seek a pediatric speech therapy evaluation.",
    publishedAt: "2026-08-04",
    featuredImage: {
      src: "/images/blog-10-signs-speech-therapy.png",
      alt: "A young boy leaning his head against a classroom chalkboard, reflecting the frustration a child may feel when communication challenges go unsupported",
    },
    blocks: [
      {
        type: "paragraphs",
        paragraphs: [
          "Every child develops communication skills at their own pace. Some begin talking earlier, while others take a little more time. However, when speech or language development falls significantly behind expected milestones, it may be a sign that professional support is needed.",
          "Recognizing the early signs of a communication delay can make a meaningful difference in your child's development. Early intervention helps children build stronger speech, language, and social communication skills, giving them greater confidence at home, in school, and in everyday life.",
          "If you're wondering whether your family could benefit from pediatric speech therapy, here are ten common signs to watch for.",
        ],
      },
      {
        type: "numbered",
        number: 1,
        title: "Your Child Isn't Meeting Speech Milestones",
        paragraphs: [
          "Children typically reach important speech and language milestones as they grow. For example, most babies begin babbling around six months, say their first words near their first birthday, and start combining words into short phrases by age two.",
          "If your child is consistently missing these milestones, it may indicate a speech or language delay. A speech-language pathologist can assess your child's communication skills and determine whether therapy is appropriate.",
        ],
      },
      {
        type: "numbered",
        number: 2,
        title: "Difficulty Pronouncing Words Clearly",
        paragraphs: [
          "Many young children mispronounce words while learning to speak, but persistent pronunciation difficulties beyond three to four years of age may signal a speech sound disorder.",
          "If family members frequently struggle to understand them, or your child replaces, omits, or distorts sounds, speech therapy can help improve clarity and build confidence in communication.",
        ],
      },
      {
        type: "numbered",
        number: 3,
        title: "Limited Vocabulary for Their Age",
        paragraphs: [
          "Children naturally expand their vocabulary as they grow. If your child uses very few words compared to other children of the same age or has difficulty learning new words, they may benefit from a professional evaluation.",
          "Strong vocabulary development is essential for successful communication, reading, and academic achievement.",
        ],
      },
      {
        type: "numbered",
        number: 4,
        title: "Trouble Understanding Simple Instructions",
        paragraphs: [
          'Speech and language involve both expressing thoughts and understanding language. If your child has difficulty following simple directions such as "Bring me your shoes" or "Put the toy in the box," it could indicate a receptive language delay.',
          "Early speech therapy helps children improve listening skills and better understand spoken language.",
        ],
      },
      {
        type: "numbered",
        number: 5,
        title: "Frustration When Trying to Communicate",
        paragraphs: [
          "Children who struggle to express themselves often become frustrated because others cannot understand them. This frustration may appear as crying, tantrums, or withdrawing from conversations.",
          "Speech therapy provides children with effective communication strategies, reducing frustration and helping them express their thoughts more confidently.",
        ],
      },
      {
        type: "numbered",
        number: 6,
        title: "Stuttering or Frequent Repetition of Words",
        paragraphs: [
          "Many children experience temporary periods of disfluency while learning language. However, frequent repetitions, prolonged sounds, or noticeable pauses may indicate stuttering.",
          "Early intervention can improve speech fluency and prevent communication challenges from affecting a child's confidence or participation in everyday activities.",
        ],
      },
      {
        type: "numbered",
        number: 7,
        title: "Difficulty Interacting with Others",
        paragraphs: [
          "Communication is about more than speaking. It also includes taking turns in conversation, making eye contact, understanding social cues, and expressing emotions appropriately.",
          "If your child has difficulty interacting with family members, teachers, or peers, speech therapy can strengthen both communication and social language skills.",
        ],
      },
      {
        type: "numbered",
        number: 8,
        title: "Your Child Relies Mostly on Gestures Instead Of Words",
        paragraphs: [
          "Using gestures is a normal part of early development, but as children grow, if your child mainly points, nods, leads, or uses gestures instead of speaking, signing, or using any other symbolic forms of communication, it may be time to seek a speech and language evaluation.",
        ],
      },
      {
        type: "numbered",
        number: 9,
        title: "Speech Difficulties Are Affecting School Performance",
        paragraphs: [
          "Speech and language skills are closely connected to reading, writing, learning, and classroom participation.",
          "Children who struggle to communicate may have difficulty answering questions, following classroom instructions, or interacting with classmates. Addressing these challenges early can support both academic success and self-confidence.",
        ],
      },
      {
        type: "numbered",
        number: 10,
        title: "You Have Concerns About Your Child's Communication",
        paragraphs: [
          "Parents know their children better than anyone else. If you feel your child's speech or language development seems different from other children of the same age, trust your instincts.",
          "A professional evaluation provides valuable insight into your child's communication abilities and helps determine whether speech therapy would be beneficial. Even if therapy isn't needed, an evaluation can offer reassurance and practical guidance.",
        ],
      },
      {
        type: "heading",
        heading: "Why Early Speech Therapy Matters",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Research consistently shows that early intervention leads to better communication outcomes. The earlier speech or language challenges are identified, the easier they are to address while children are developing critical communication skills.",
        ],
      },
      {
        type: "list",
        intro: "Speech therapy helps children improve:",
        items: [
          "Speech clarity and pronunciation",
          "Vocabulary development",
          "Language comprehension",
          "Sentence formation",
          "Social communication skills",
          "Confidence when speaking",
        ],
      },
      {
        type: "paragraphs",
        paragraphs: [
          "For many families, in home pediatric speech therapy offers additional benefits by allowing children to learn in a familiar, comfortable environment where they feel safe and engaged.",
        ],
      },
      {
        type: "heading",
        heading: "Supporting Your Child Every Step of the Way",
      },
      {
        type: "paragraphs",
        paragraphs: [
          "Every child deserves the opportunity to communicate with confidence. If you've noticed one or more of these signs, seeking guidance from a qualified speech-language pathologist is an important first step.",
          "At Expression Beyond Words PLLC, we provide compassionate, play-based in home speech therapy for children throughout Northwest Houston, including Spring, The Woodlands, Tomball, Humble, Conroe, Magnolia, Cypress, and Willis. Our personalized therapy sessions are designed to meet each child's unique needs while partnering closely with families to support long-term success.",
          "Early support can make a lasting difference. If you have concerns about your child's speech or language development, don't wait—an evaluation today can help set the foundation for stronger communication tomorrow.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
