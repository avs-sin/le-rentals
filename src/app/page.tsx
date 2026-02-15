import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CategoryCard } from "@/components/category-card";
import { CtaBanner } from "@/components/cta-banner";
import { LocationCard } from "@/components/location-card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedCategories, siteConfig, getPage } from "@/lib/data";
import { ShieldCheck, MapPin, Clock, DollarSign } from "lucide-react";

const page = getPage("/")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: "/" },
};

const usps = [
  { icon: DollarSign, title: "No Sales Tax", desc: "Save money on every rental — no sales tax charged." },
  { icon: Clock, title: "40+ Years of Service", desc: "Trusted by San Diego since 1985." },
  { icon: MapPin, title: "2 Convenient Locations", desc: "Lakeside and San Diego stores to serve you." },
  { icon: ShieldCheck, title: "Local & Independent", desc: "Family-owned, personalized service." },
];

export default function HomePage() {
  const featured = getFeaturedCategories();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brandName,
    description: page.metaDescription,
    url: "https://www.le-rentals.com",
    telephone: siteConfig.locations[0].phone,
    address: siteConfig.locations.map((loc) => ({
      "@type": "PostalAddress",
      streetAddress: loc.address.split(",")[0],
      addressLocality: loc.address.includes("Lakeside") ? "Lakeside" : "San Diego",
      addressRegion: "CA",
      postalCode: loc.address.match(/\d{5}/)?.[0],
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      {/* Featured Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20">
              Popular Rentals
            </Badge>
            <h2 className="text-3xl font-bold text-brand-text">
              Featured Rental Categories
            </h2>
            <p className="mt-2 text-muted-foreground">
              Browse our most popular equipment and party rental categories
            </p>
          </div>
          <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3">
            {featured.map((cat) => {
              const firstImage = cat.items.find((item) => item.localImagePath)?.localImagePath;
              return (
                <CategoryCard key={cat.slug} category={cat} imageUrl={firstImage} />
              );
            })}
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/equipment-rentals"
              className="rounded-md bg-brand-blue px-6 py-3 text-sm font-medium text-white hover:bg-brand-blue/90"
            >
              All Equipment Rentals
            </Link>
            <Link
              href="/party-rentals"
              className="rounded-md border border-brand-blue px-6 py-3 text-sm font-medium text-brand-blue hover:bg-brand-accent"
            >
              All Party Rentals
            </Link>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="bg-brand-accent py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-brand-text">
            Why Choose Lakeside Equipment?
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((usp) => (
              <div key={usp.title} className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-blue text-white">
                  <usp.icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-text">{usp.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-brand-text">
            Our Locations
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {siteConfig.locations.map((loc) => (
              <LocationCard key={loc.name} location={loc} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
