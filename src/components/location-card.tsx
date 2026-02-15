import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";
import type { Location } from "@/lib/types";

export function LocationCard({
  location,
  showMap = false,
}: {
  location: Location;
  showMap?: boolean;
}) {
  const mapQuery = encodeURIComponent(location.address);

  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-brand-blue">{location.name}</h3>
        <div className="space-y-2 text-sm">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand-orange" />
            {location.address}
          </p>
          <a
            href={`tel:${location.phone}`}
            className="flex items-center gap-2 font-medium text-brand-blue hover:underline"
          >
            <Phone className="size-4 shrink-0 text-brand-orange" />
            {location.phone}
          </a>
          <p className="flex items-start gap-2 text-muted-foreground">
            <Clock className="mt-0.5 size-4 shrink-0 text-brand-orange" />
            Mon-Fri 7AM-5PM, Sat 7AM-4PM
          </p>
        </div>
        {showMap && (
          <div className="overflow-hidden rounded-lg">
            <iframe
              title={`Map of ${location.name}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="250"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
