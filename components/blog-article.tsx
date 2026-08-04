import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { BlogBlock, BlogPost } from "@/content/blogs";
import { cn } from "@/lib/utils";

function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${isoDate}T12:00:00`));
}

function BlogBlockView({ block }: { block: BlogBlock }) {
  if (block.type === "heading") {
    return (
      <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight text-[var(--ebw-ink)] sm:text-3xl">
        {block.heading}
      </h2>
    );
  }

  if (block.type === "numbered") {
    return (
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--ebw-ink)] sm:text-2xl">
          <span className="text-[var(--ebw-sage)]">{block.number}. </span>
          {block.title}
        </h2>
        <div className="mt-4 space-y-4 text-lg leading-relaxed text-[var(--ebw-muted)]">
          {block.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "list") {
    return (
      <div className="mt-6">
        {block.intro ? (
          <p className="text-lg leading-relaxed text-[var(--ebw-muted)]">
            {block.intro}
          </p>
        ) : null}
        <ul className="mt-4 space-y-3 text-lg text-[var(--ebw-muted)]">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ebw-sage)]"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--ebw-muted)] first:mt-0">
      {block.paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
}

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--ebw-sage)]">
        Blog
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--ebw-ink)] sm:text-4xl sm:leading-[1.2]">
        {post.title}
      </h1>
      <p className="mt-4 text-sm font-medium text-[var(--ebw-muted)]">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </p>
      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl shadow-[var(--shadow-soft-strong)]">
        <Image
          src={post.featuredImage.src}
          alt={post.featuredImage.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>
      <div className="mt-10 border-t border-[var(--ebw-border)] pt-10">
        {post.blocks.map((block, index) => (
          <BlogBlockView key={`${block.type}-${index}`} block={block} />
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3 border-t border-[var(--ebw-border)] pt-10">
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "shadow-[var(--shadow-soft)] hover:-translate-y-0.5",
          )}
        >
          Request information
        </Link>
        <Link
          href="/blogs"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "border-primary text-primary hover:bg-muted",
          )}
        >
          Back to blogs
        </Link>
      </div>
    </article>
  );
}
