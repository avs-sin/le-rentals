import type { Metadata } from "next";
import { getPage } from "@/lib/data";
import { CtaBanner } from "@/components/cta-banner";
import { Badge } from "@/components/ui/badge";

const page = getPage("/new-equipment-sales")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
};

export default function NewEquipmentSalesPage() {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20">
            Authorized Dealer
          </Badge>
          <h1 className="text-4xl font-bold text-brand-text">{page.h1}</h1>

          <div className="mt-8 space-y-6 text-brand-text/80 leading-relaxed">
            <p>
              Lakeside Equipment is an <strong>authorized Stihl dealer</strong>. We carry a
              selection of new Stihl outdoor power equipment, including chainsaws, trimmers,
              blowers, and more.
            </p>

            <h2 className="text-2xl font-bold text-brand-text pt-4">Stihl Products We Carry</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chainsaws — from homeowner to professional grade</li>
              <li>String trimmers and brushcutters</li>
              <li>Leaf blowers — handheld and backpack</li>
              <li>Hedge trimmers</li>
              <li>Cut-off machines</li>
              <li>Stihl accessories, chains, bars, and oils</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-text pt-4">Why Buy Stihl?</h2>
            <p>
              Stihl is the #1 selling brand of outdoor power equipment in America. Known for
              durability, power, and reliability, Stihl products are built to last. As an
              authorized dealer, we can help you find the right tool for your needs and provide
              ongoing support.
            </p>

            <div className="mt-8 rounded-lg bg-brand-accent p-6">
              <p className="text-lg font-semibold text-brand-blue">
                Visit our Lakeside store or call{" "}
                <a href="tel:619-561-7845" className="underline">619-561-7845</a> to see our
                Stihl inventory.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
