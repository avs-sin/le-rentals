import type { Metadata } from "next";
import { getPage, getPartyCategories } from "@/lib/data";
import { CategoryCard } from "@/components/category-card";
import { CtaBanner } from "@/components/cta-banner";
import { Badge } from "@/components/ui/badge";
import {
  absoluteUrl,
  buildMetadata,
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

const page = getPage("/party-rentals")!;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.metaDescription,
  path: "/party-rentals",
});

export default function PartyRentalsPage() {
  const categories = getPartyCategories();
  const itemList = {
    "@type": "ItemList",
    name: page.h1,
    itemListElement: categories.map((cat, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: cat.h1,
        url: absoluteUrl(cat.slug),
      },
    })),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationJsonLd(),
      buildWebSiteJsonLd(),
      {
        ...buildWebPageJsonLd({
          title: page.title,
          description: page.metaDescription,
          path: "/party-rentals",
          type: "CollectionPage",
        }),
        mainEntity: itemList,
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20">
            No Sales Tax
          </Badge>
          <h1 className="text-4xl font-bold text-brand-text">{page.h1}</h1>
          <p className="mt-4 text-brand-text/80">
            Everything you need for your next event — tables, chairs, tents, linens, and more.
            All rentals are tax-free. Delivery available.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
