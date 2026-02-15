import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { CategoryPage } from "@/lib/types";

export function CategoryCard({ category }: { category: CategoryPage }) {
  const slug = category.slug;
  const firstImage = category.items.find((item) => item.localImagePath)?.localImagePath;

  return (
    <Link href={slug}>
      <Card className="group overflow-hidden transition-shadow hover:shadow-md py-0 gap-0">
        <div className="relative aspect-[4/3] bg-brand-accent">
          {firstImage ? (
            <Image
              src={firstImage}
              alt={category.h1}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-brand-blue/40">
              <svg className="size-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-brand-text group-hover:text-brand-blue">
            {category.h1}
          </h3>
          {category.items.length > 0 && (
            <p className="mt-1 text-sm text-muted-foreground">
              {category.items.length} item{category.items.length !== 1 ? "s" : ""} available
            </p>
          )}
          {category.items.length === 0 && (
            <p className="mt-1 text-sm text-brand-orange">Call for availability</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
