import blueprint from "@/data/site-blueprint.json";
import type { SiteBlueprint, CategoryPage, HubPage, StaticPage, BlueprintPage } from "./types";

const data = blueprint as unknown as SiteBlueprint;

export const siteConfig = data.siteConfig;
export const pages = data.pages;

export function getPage(slug: string): BlueprintPage | undefined {
  return pages.find((p) => p.slug === slug);
}

export function getCategoryPages(): CategoryPage[] {
  return pages.filter((p): p is CategoryPage => p.type === "category");
}

export function getHubPages(): HubPage[] {
  return pages.filter((p): p is HubPage => p.type === "hub");
}

export function getStaticPages(): StaticPage[] {
  return pages.filter((p): p is StaticPage => p.type === "static");
}

// Equipment categories are construction/tool related
const partySlugs = new Set([
  "/rentals/audio-equipment",
  "/rentals/chair",
  "/rentals/concession-equipment",
  "/rentals/game",
  "/rentals/linen",
  "/rentals/table",
  "/rentals/tent",
  "/rentals/wedding-accessories",
]);

export function getEquipmentCategories(): CategoryPage[] {
  return getCategoryPages().filter((p) => !partySlugs.has(p.slug));
}

export function getPartyCategories(): CategoryPage[] {
  return getCategoryPages().filter((p) => partySlugs.has(p.slug));
}

export function getFeaturedCategories(): CategoryPage[] {
  // Pick categories that have items for the featured section
  const withItems = getCategoryPages().filter((p) => p.items.length > 0);
  return withItems.slice(0, 6);
}
