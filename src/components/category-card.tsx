import Link from "next/link";
import Image from "next/image";
import { Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { CategoryPage } from "@/lib/types";

export function CategoryCard({ category, imageUrl }: { category: CategoryPage; imageUrl?: string }) {
  const slug = category.slug;
  const image = imageUrl || category.items.find((item) => item.localImagePath)?.localImagePath;

  return (
    <Link href={slug}>
      <Card className="group overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md py-0 gap-0">
        <div className="relative aspect-[4/3] bg-brand-accent overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={category.h1}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-brand-blue/40">
              <Package className="size-16" />
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
