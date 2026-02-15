import type { Metadata } from "next";
import { getPage, siteConfig } from "@/lib/data";
import { CtaBanner } from "@/components/cta-banner";

const page = getPage("/about-us")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand-text">{page.h1}</h1>

          <div className="mt-8 space-y-6 text-brand-text/80 leading-relaxed">
            <p>
              <strong className="text-brand-text">Lakeside Equipment &amp; Carl&apos;s Rentals</strong> has
              been serving the San Diego community for over 40 years. What started as a small,
              family-owned rental shop in Lakeside has grown into a trusted name across the region,
              with two convenient locations.
            </p>

            <p>
              We are locally owned and independently operated — not part of a national chain. That
              means you get personalized service from people who know their equipment and care about
              your project. Whether you&apos;re a contractor working a major build, a homeowner
              tackling a weekend project, or planning a backyard celebration, we have the tools and
              party supplies you need.
            </p>

            <h2 className="text-2xl font-bold text-brand-text pt-4">Our Story</h2>
            <p>
              Founded in the early 1980s, Lakeside Equipment started with a simple mission: provide
              quality rental equipment at fair prices with honest, helpful service. Over four decades
              later, that mission hasn&apos;t changed. We&apos;ve expanded our inventory to include
              everything from excavators and compactors to tables, chairs, and tents for events.
            </p>

            <h2 className="text-2xl font-bold text-brand-text pt-4">Two Locations to Serve You</h2>
            <p>
              Our <strong>Lakeside</strong> location at {siteConfig.locations[0].address} is our
              flagship store, offering the full range of construction equipment, tools, and party
              supplies. Our <strong>San Diego</strong> location at {siteConfig.locations[1].address}{" "}
              (Carl&apos;s Rentals) brings that same great service to central San Diego.
            </p>

            <h2 className="text-2xl font-bold text-brand-text pt-4">No Sales Tax on Rentals</h2>
            <p>
              One of the biggest advantages of renting from us: <strong>no sales tax on any rental</strong>.
              That&apos;s money back in your pocket on every job and every event.
            </p>

            <h2 className="text-2xl font-bold text-brand-text pt-4">Why Customers Choose Us</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>40+ years of experience in the rental industry</li>
              <li>Locally owned and operated — not a national chain</li>
              <li>No sales tax on any rental</li>
              <li>Two convenient locations in San Diego County</li>
              <li>Knowledgeable, friendly staff</li>
              <li>Well-maintained, reliable equipment</li>
              <li>Competitive daily, weekly, and monthly rates</li>
            </ul>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
