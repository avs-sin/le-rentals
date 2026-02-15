import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryPages, getPage, siteConfig } from "@/lib/data";
import { ItemCard } from "@/components/item-card";
import { CtaBanner } from "@/components/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import type { CategoryPage } from "@/lib/types";

export function generateStaticParams() {
  return getCategoryPages().map((p) => ({
    category: p.slug.replace("/rentals/", ""),
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  return params.then(({ category }) => {
    const page = getPage(`/rentals/${category}`);
    if (!page) return { title: "Not Found" };
    return {
      title: page.title,
      description: page.metaDescription,
    };
  });
}

export default async function CategoryPageRoute({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const page = getPage(`/rentals/${category}`) as CategoryPage | undefined;
  if (!page) notFound();

  const isParty = [
    "audio-equipment", "chair", "concession-equipment", "game",
    "linen", "table", "tent", "wedding-accessories",
  ].includes(category);

  const hubLink = isParty ? "/party-rentals" : "/equipment-rentals";
  const hubLabel = isParty ? "Party Rentals" : "Equipment Rentals";

  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5">
              <li><Link href="/" className="hover:text-brand-blue">Home</Link></li>
              <li>/</li>
              <li><Link href={hubLink} className="hover:text-brand-blue">{hubLabel}</Link></li>
              <li>/</li>
              <li className="text-brand-text font-medium">{page.h1}</li>
            </ol>
          </nav>

          <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20">
            No Sales Tax
          </Badge>
          <h1 className="text-4xl font-bold text-brand-text">{page.h1}</h1>

          {page.items.length > 0 ? (
            <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {page.items.map((item, i) => (
                <ItemCard key={i} item={item} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-lg bg-brand-accent p-8 text-center">
              <h2 className="text-2xl font-bold text-brand-text">
                Call for Availability
              </h2>
              <p className="mt-2 text-brand-text/80">
                We have {page.h1.toLowerCase()} available. Contact us for current inventory and pricing.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                {siteConfig.locations.map((loc) => (
                  <a
                    key={loc.phone}
                    href={`tel:${loc.phone}`}
                    className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3 text-white hover:bg-brand-blue/90"
                  >
                    <Phone className="size-4" />
                    {loc.name}: {loc.phone}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <CtaBanner />

      {/* Floating call button on mobile */}
      <a
        href="tel:6195617845"
        className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-brand-orange text-white shadow-lg hover:bg-brand-orange/90 lg:hidden"
        aria-label="Call us"
      >
        <Phone className="size-6" />
      </a>
    </>
  );
}
