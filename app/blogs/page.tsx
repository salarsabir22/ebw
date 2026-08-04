import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { blogPosts } from "@/content/blogs";
import { site } from "@/content/site";

const title = "Blog - Expression Beyond Words";
const description =
  "Articles and guidance on pediatric speech therapy, early intervention, and supporting your child's communication at home.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: `${site.url}/blogs` },
};

function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${isoDate}T12:00:00`));
}

export default function BlogsPage() {
  return (
    <SiteShell>
      <Section eyebrow="Resources" title="Blog">
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--ebw-muted)]">
          Practical guidance for families navigating speech and language
          development, early signs of delay, and pediatric speech therapy.
        </p>
        <ul className="mt-10 space-y-6">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blogs/${post.slug}`}
                className="group block overflow-hidden rounded-2xl border border-[var(--ebw-border)] bg-[var(--surface-container-low)] shadow-[var(--shadow-soft)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft-strong)]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={post.featuredImage.src}
                    alt={post.featuredImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-medium text-[var(--ebw-muted)]">
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[var(--ebw-ink)] group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-[var(--ebw-muted)]">
                    {post.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-primary">
                    Read article
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </SiteShell>
  );
}
