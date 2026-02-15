import type { Metadata } from "next";
import { getPage, siteConfig } from "@/lib/data";
import { LocationCard } from "@/components/location-card";
import { CtaBanner } from "@/components/cta-banner";
import {
  buildLocalBusinessJsonLd,
  buildMetadata,
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

const page = getPage("/locations")!;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.metaDescription,
  path: "/locations",
});

export default function LocationsPage() {
  const locationsJsonLd = siteConfig.locations.map((location) => buildLocalBusinessJsonLd(location));
  const itemList = {
    "@type": "ItemList",
    name: "Locations",
    itemListElement: locationsJsonLd.map((location, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": location["@id"],
        name: location.name,
        url: location.url,
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
          path: "/locations",
          type: "CollectionPage",
        }),
        mainEntity: itemList,
      },
      ...locationsJsonLd,
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand-text">{page.h1}</h1>
          <p className="mt-4 text-brand-text/80">
            Visit us at either of our two convenient locations in San Diego County. Both
            locations are stocked with equipment and party rental supplies.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {siteConfig.locations.map((loc) => (
              <LocationCard key={loc.name} location={loc} showMap />
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-brand-accent p-6">
            <h2 className="text-xl font-bold text-brand-text">Store Hours</h2>
            <div className="mt-3 space-y-1 text-sm text-brand-text/80">
              <p><strong>Monday - Friday:</strong> 7:00 AM - 5:00 PM</p>
              <p><strong>Saturday:</strong> 7:00 AM - 4:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
