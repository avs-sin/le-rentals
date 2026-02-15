import Image from "next/image";
import { Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { RentalItem } from "@/lib/types";

export function ItemCard({ item }: { item: RentalItem }) {
  const hasPricing = item.pricing?.daily || item.pricing?.weekly || item.pricing?.monthly;

  return (
    <Card className="overflow-hidden py-0 gap-0 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-square bg-brand-accent">
        {item.localImagePath ? (
          <Image
            src={item.localImagePath}
            alt={item.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-brand-blue/30">
            <Package className="size-12" />
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-brand-text">{item.name}</h3>
        {hasPricing ? (
          <div className="mt-2">
            {item.pricing?.daily && (
              <p className="text-lg font-bold text-brand-blue">
                ${item.pricing.daily}<span className="text-sm font-normal text-muted-foreground">/day</span>
              </p>
            )}
            <div className="mt-0.5 flex gap-3 text-xs text-muted-foreground">
              {item.pricing?.weekly && (
                <span>${item.pricing.weekly}/wk</span>
              )}
              {item.pricing?.monthly && (
                <span>${item.pricing.monthly}/mo</span>
              )}
            </div>
          </div>
        ) : (
          <p className="mt-2 text-sm text-brand-orange">Call for pricing</p>
        )}
      </CardContent>
    </Card>
  );
}
