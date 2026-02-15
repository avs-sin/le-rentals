import type { Metadata } from "next";
import { getPage, siteConfig } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";
import { LocationCard } from "@/components/location-card";

const page = getPage("/contact-us")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
};

export default function ContactUsPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-text">{page.h1}</h1>
        <p className="mt-4 text-brand-text/80">
          Have questions about our equipment or party rentals? Need a quote? Reach out to us
          using the form below or give us a call at either location.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-6">
            {siteConfig.locations.map((loc) => (
              <LocationCard key={loc.name} location={loc} showMap />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
