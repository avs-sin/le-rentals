import type { Metadata } from "next";
import { getPage } from "@/lib/data";
import { CtaBanner } from "@/components/cta-banner";
import {
  buildMetadata,
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

const page = getPage("/supplies-sales")!;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.metaDescription,
  path: "/supplies-sales",
});

export default function SuppliesSalesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationJsonLd(),
      buildWebSiteJsonLd(),
      buildWebPageJsonLd({
        title: page.title,
        description: page.metaDescription,
        path: "/supplies-sales",
        type: "WebPage",
      }),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand-text">{page.h1}</h1>

          <div className="mt-8 space-y-6 text-brand-text/80 leading-relaxed">
            <p>
              In addition to our extensive rental inventory, we stock a variety of
              contractor supplies and accessories available for purchase. Stop by either
              location to browse our selection.
            </p>

            <h2 className="text-2xl font-bold text-brand-text pt-4">What We Carry</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Diamond blades and cutting accessories</li>
              <li>Concrete finishing tools</li>
              <li>Safety equipment and PPE</li>
              <li>Fasteners and hardware</li>
              <li>Extension cords and power adapters</li>
              <li>Hoses and fittings</li>
              <li>Tapes, tarps, and general supplies</li>
              <li>Stihl chains, bars, and accessories</li>
            </ul>

            <p>
              Inventory varies by location. If you&apos;re looking for something specific,
              give us a call and we&apos;ll let you know what we have in stock.
            </p>

            <div className="mt-8 rounded-lg bg-brand-accent p-6">
              <p className="text-lg font-semibold text-brand-blue">
                Call Lakeside at{" "}
                <a href="tel:619-561-7845" className="underline">619-561-7845</a> or
                San Diego at{" "}
                <a href="tel:619-282-5995" className="underline">619-282-5995</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
