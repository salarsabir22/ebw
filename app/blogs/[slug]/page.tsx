import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog-article";
import { SiteShell } from "@/components/site-shell";
import { getAllBlogSlugs, getBlogPost } from "@/content/blogs";
import { site } from "@/content/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const title = `${post.title} - Expression Beyond Words`;
  const description = post.description;
  const url = `${site.url}/blogs/${post.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: post.featuredImage.src, alt: post.featuredImage.alt }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <SiteShell>
      <BlogArticle post={post} />
    </SiteShell>
  );
}
