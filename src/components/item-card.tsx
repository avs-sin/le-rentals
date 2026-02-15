import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { RentalItem } from "@/lib/types";

export function ItemCard({ item }: { item: RentalItem }) {
  const hasPricing = item.pricing?.daily || item.pricing?.weekly || item.pricing?.monthly;

  return (
    <Card className="overflow-hidden py-0 gap-0">
      <div className="relative aspect-square bg-brand-accent">
        {item.localImagePath ? (
          <Image
            src={item.localImagePath}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-brand-blue/30">
            <svg className="size-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-brand-text">{item.name}</h3>
        {hasPricing ? (
          <div className="mt-2 space-y-0.5 text-sm">
            {item.pricing?.daily && (
              <p>
                <span className="text-muted-foreground">Daily:</span>{" "}
                <span className="font-medium text-brand-blue">${item.pricing.daily}</span>
              </p>
            )}
            {item.pricing?.weekly && (
              <p>
                <span className="text-muted-foreground">Weekly:</span>{" "}
                <span className="font-medium">${item.pricing.weekly}</span>
              </p>
            )}
            {item.pricing?.monthly && (
              <p>
                <span className="text-muted-foreground">Monthly:</span>{" "}
                <span className="font-medium">${item.pricing.monthly}</span>
              </p>
            )}
          </div>
        ) : (
          <p className="mt-2 text-sm text-brand-orange">Call for pricing</p>
        )}
      </CardContent>
    </Card>
  );
}
