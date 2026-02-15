import type { Metadata } from "next";
import { getPage, siteConfig } from "@/lib/data";
import { LocationCard } from "@/components/location-card";
import { CtaBanner } from "@/components/cta-banner";

const page = getPage("/locations")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
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
