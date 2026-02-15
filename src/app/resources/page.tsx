import type { Metadata } from "next";
import { getPage } from "@/lib/data";
import { CtaBanner } from "@/components/cta-banner";

const page = getPage("/resources")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
};

const faqs = [
  {
    q: "What do I need to rent equipment?",
    a: "You'll need a valid government-issued photo ID and a credit card for the security deposit. Some larger equipment may require additional documentation.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes! We offer delivery and pickup for most equipment and party rental items. Delivery fees vary based on your location. Call us for a quote.",
  },
  {
    q: "Is there a security deposit?",
    a: "Yes, most rentals require a security deposit which is held on your credit card and returned when the equipment comes back in good condition.",
  },
  {
    q: "What are your rental periods?",
    a: "We offer daily, weekly, and monthly rental rates. Daily rentals are based on a 24-hour period. Weekly rates apply for 7 days, and monthly rates for 28 days.",
  },
  {
    q: "Do you charge sales tax on rentals?",
    a: "No! We do not charge sales tax on any rental. This is one of the biggest advantages of renting from Lakeside Equipment & Carl's Rentals.",
  },
  {
    q: "What happens if equipment breaks down?",
    a: "Contact us immediately. We'll work to get you a replacement or repair the equipment as quickly as possible. You are not charged for mechanical failures due to normal use.",
  },
  {
    q: "Can I extend my rental period?",
    a: "Absolutely. Just give us a call before your rental period ends and we'll extend it for you at the applicable rate.",
  },
  {
    q: "Do you rent to homeowners or just contractors?",
    a: "We rent to everyone! Homeowners, contractors, event planners — anyone who needs equipment or party supplies.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand-text">{page.h1}</h1>
          <p className="mt-4 text-brand-text/80">
            Everything you need to know about renting equipment and party supplies from us.
          </p>

          <div className="mt-10 space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-lg border p-6">
                <h2 className="text-lg font-semibold text-brand-text">{faq.q}</h2>
                <p className="mt-2 text-brand-text/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
