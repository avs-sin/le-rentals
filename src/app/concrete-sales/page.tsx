import type { Metadata } from "next";
import { getPage } from "@/lib/data";
import { CtaBanner } from "@/components/cta-banner";
import { Badge } from "@/components/ui/badge";

const page = getPage("/concrete-sales")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
};

export default function ConcreteSalesPage() {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20">
            Available at Lakeside Location
          </Badge>
          <h1 className="text-4xl font-bold text-brand-text">{page.h1}</h1>

          <div className="mt-8 space-y-6 text-brand-text/80 leading-relaxed">
            <p>
              Need concrete for a small to medium-sized project? Our <strong>Cart-Away concrete
              trailers</strong> are the perfect solution. We fill it, you pour it — it&apos;s that
              simple.
            </p>

            <h2 className="text-2xl font-bold text-brand-text pt-4">How It Works</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Come to our Lakeside location at 11925 Woodside Ave</li>
              <li>We mix and load fresh concrete into a 1-yard trailer</li>
              <li>Tow the trailer to your job site with your vehicle</li>
              <li>Pour the concrete right where you need it</li>
              <li>Return the trailer when you&apos;re done</li>
            </ol>

            <h2 className="text-2xl font-bold text-brand-text pt-4">Perfect For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fence post foundations</li>
              <li>Small slabs and patios</li>
              <li>Sidewalk repairs</li>
              <li>Mailbox and sign post installations</li>
              <li>Small retaining walls</li>
              <li>Any project needing 1 yard of concrete or less</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-text pt-4">Why Cart-Away?</h2>
            <p>
              Cart-Away concrete eliminates the need for large concrete trucks on small jobs. No
              minimum order, no short-load fees, and no waiting for a delivery truck. You control
              when and where the concrete goes.
            </p>

            <div className="mt-8 rounded-lg bg-brand-accent p-6">
              <p className="text-lg font-semibold text-brand-blue">
                Call us at <a href="tel:619-561-7845" className="underline">619-561-7845</a> to
                schedule your Cart-Away concrete pickup.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
