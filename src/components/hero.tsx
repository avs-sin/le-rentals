import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue to-blue-900 py-20 text-white md:py-28 animate-gradient-shift bg-[length:200%_200%]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-6 bg-brand-orange text-white text-sm px-4 py-1.5 hover:bg-brand-orange/90">
            No Sales Tax on Any Rental!
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Equipment and Party Rental Experts in San Diego
          </h1>
          <p className="mt-6 text-lg text-white/80 md:text-xl">
            Your local, independent source for equipment and party rentals.
            Serving San Diego and Lakeside for over 40 years.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-brand-orange text-white hover:bg-brand-orange/90 text-base px-8 py-6"
            >
              <Link href="/equipment-rentals">Browse Equipment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-brand-blue hover:bg-white/90 text-base px-8 py-6"
            >
              <Link href="/party-rentals">Browse Party Rentals</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
