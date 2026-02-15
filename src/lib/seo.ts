import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import type { Location } from "@/lib/types";

export const SITE_URL = "https://www.le-rentals.com";

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return SITE_URL;
  return `${SITE_URL}${normalized}`;
}

export function resolveOgImage(imagePath?: string): string {
  const path = imagePath || siteConfig.images.logoLakeside;
  return absoluteUrl(path);
}

export function buildMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = resolveOgImage(image);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brandName,
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function buildPostalAddress(address: string) {
  const parts = address.split(",").map((part) => part.trim());
  const streetAddress = parts[0] || address;
  const addressLocality = parts[1] || "";
  let addressRegion = "CA";
  let postalCode: string | undefined;

  if (parts[2]) {
    const regionZip = parts[2].split(/\s+/).filter(Boolean);
    if (regionZip[0]) addressRegion = regionZip[0];
    if (regionZip[1]) postalCode = regionZip[1];
  }

  return {
    "@type": "PostalAddress",
    streetAddress,
    addressLocality,
    addressRegion,
    ...(postalCode ? { postalCode } : {}),
    addressCountry: "US",
  };
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function buildOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: siteConfig.brandName,
    url: SITE_URL,
    logo: resolveOgImage(siteConfig.images.logoLakeside),
    contactPoint: siteConfig.locations.map((loc) => ({
      "@type": "ContactPoint",
      telephone: loc.phone,
      contactType: "customer service",
      areaServed: "US-CA",
    })),
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: siteConfig.brandName,
    publisher: {
      "@id": `${SITE_URL}#organization`,
    },
  };
}

export function buildWebPageJsonLd({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  return {
    "@type": type,
    "@id": absoluteUrl(path),
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@id": `${SITE_URL}#website`,
    },
  };
}

export function buildLocalBusinessJsonLd(location: Location) {
  const isCarls = location.name.toLowerCase().includes("carl");
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#${slugify(location.name)}`,
    name: location.name,
    url: SITE_URL,
    telephone: location.phone,
    image: resolveOgImage(isCarls ? siteConfig.images.logoCarls : siteConfig.images.logoLakeside),
    address: buildPostalAddress(location.address),
    areaServed: "San Diego County, CA",
    parentOrganization: {
      "@id": `${SITE_URL}#organization`,
    },
  };
}
