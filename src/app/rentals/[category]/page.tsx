import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryPages, getPage, siteConfig, getEquipmentCategories, getPartyCategories } from "@/lib/data";
import { ItemCard } from "@/components/item-card";
import { CategoryCard } from "@/components/category-card";
import { CtaBanner } from "@/components/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import type { CategoryPage } from "@/lib/types";

export function generateStaticParams() {
  return getCategoryPages().map((p) => ({
    category: p.slug.replace("/rentals/", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const page = getPage(`/rentals/${category}`);
  if (!page) return { title: "Not Found" };
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `/rentals/${category}` },
  };
}

export default async function CategoryPageRoute({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const page = getPage(`/rentals/${category}`) as CategoryPage | undefined;
  if (!page) notFound();

  const partySlugs = new Set([
    "audio-equipment", "chair", "concession-equipment", "game",
    "linen", "table", "tent", "wedding-accessories",
  ]);

  const isParty = partySlugs.has(category);
  const hubLink = isParty ? "/party-rentals" : "/equipment-rentals";
  const hubLabel = isParty ? "Party Rentals" : "Equipment Rentals";

  // Related categories (same hub, excluding current, max 4)
  const siblingCategories = isParty ? getPartyCategories() : getEquipmentCategories();
  const related = siblingCategories
    .filter((c) => c.slug !== page.slug)
    .slice(0, 4);

  // JSON-LD: BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.le-rentals.com" },
      { "@type": "ListItem", position: 2, name: hubLabel, item: `https://www.le-rentals.com${hubLink}` },
      { "@type": "ListItem", position: 3, name: page.h1 },
    ],
  };

  // JSON-LD: ItemList with Product schema
  const itemListJsonLd = page.items.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: page.h1,
    numberOfItems: page.items.length,
    itemListElement: page.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: item.name,
        ...(item.localImagePath ? { image: `https://www.le-rentals.com${item.localImagePath}` } : {}),
        ...(item.pricing?.daily ? {
          offers: {
            "@type": "Offer",
            price: item.pricing.daily,
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: item.pricing.daily,
              priceCurrency: "USD",
              unitText: "DAY",
            },
            availability: "https://schema.org/InStock",
          },
        } : {}),
      },
    })),
  } : null;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {itemListJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      )}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5">
              <li><Link href="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
              <li className="text-muted-foreground/50">/</li>
              <li><Link href={hubLink} className="hover:text-brand-blue transition-colors">{hubLabel}</Link></li>
              <li className="text-muted-foreground/50">/</li>
              <li className="text-brand-text font-medium">{page.h1}</li>
            </ol>
          </nav>

          <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20">
            No Sales Tax
          </Badge>
          <h1 className="text-4xl font-bold text-brand-text">{page.h1}</h1>
          <p className="mt-2 text-muted-foreground">
            {page.items.length > 0
              ? `${page.items.length} items available for rent`
              : "Contact us for current inventory"}
          </p>

          {page.items.length > 0 ? (
            <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {page.items.map((item, i) => (
                <ItemCard key={i} item={item} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-xl bg-brand-accent p-8 text-center">
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
                    href={`tel:${loc.phone.replace(/-/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-white hover:bg-brand-blue/90 transition-colors"
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

      {/* Related Categories */}
      {related.length > 0 && (
        <section className="border-t bg-brand-accent/50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-text">Related Categories</h2>
            <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-4">
              {related.map((cat) => (
                <CategoryCard
                  key={cat.slug}
                  category={cat}
                  imageUrl={cat.items[0]?.localImagePath}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
