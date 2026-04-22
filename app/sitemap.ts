import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const paths = [
  "/",
  "/about",
  "/services",
  "/pricing",
  "/therapy",
  "/faq",
  "/contact",
  "/in-home-pediatric-speech-therapy-the-woodlands",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : path.includes("woodlands") ? 0.85 : 0.75,
  }));
}
