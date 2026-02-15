import type { MetadataRoute } from "next";
import { pages } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.le-rentals.com";

  return pages.map((page) => ({
    url: `${baseUrl}${page.slug === "/" ? "" : page.slug}`,
    lastModified: new Date(),
    changeFrequency: page.type === "home" ? "weekly" : "monthly",
    priority: page.type === "home" ? 1 : page.type === "hub" ? 0.9 : 0.7,
  }));
}
