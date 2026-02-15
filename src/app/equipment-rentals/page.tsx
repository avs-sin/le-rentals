import type { Metadata } from "next";
import { getPage, getEquipmentCategories } from "@/lib/data";
import { CategoryCard } from "@/components/category-card";
import { CtaBanner } from "@/components/cta-banner";
import { Badge } from "@/components/ui/badge";

const page = getPage("/equipment-rentals")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
};

export default function EquipmentRentalsPage() {
  const categories = getEquipmentCategories();

  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20">
            No Sales Tax
          </Badge>
          <h1 className="text-4xl font-bold text-brand-text">{page.h1}</h1>
          <p className="mt-4 text-brand-text/80">
            Browse our full inventory of construction and landscaping equipment for rent.
            All rentals are tax-free.
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
