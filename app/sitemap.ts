import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blogs";
import { site } from "@/content/site";

const paths = [
  "/",
  "/about",
  "/services",
  "/pricing",
  // "/therapy",
  "/faq",
  "/blogs",
  "/contact",
  "/in-home-pediatric-speech-therapy-the-woodlands",
  "/in-home-pediatric-speech-therapy-Spring-tx",
  "/in-home-pediatric-speech-therapy-tomball-tx",
  "/in-home-pediatric-speech-therapy-conroe-tx",
  "/in-home-pediatric-speech-therapy-magnolia-tx",
  ...blogPosts.map((post) => `/blogs/${post.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority:
      path === "/"
        ? 1
        : path.includes("woodlands") ||
            path.includes("Spring-tx") ||
            path.includes("tomball-tx") ||
            path.includes("conroe-tx") ||
            path.includes("magnolia-tx")
          ? 0.85
          : path.startsWith("/blogs/")
            ? 0.7
            : 0.75,
  }));
}
