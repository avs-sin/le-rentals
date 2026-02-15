import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="bg-brand-orange py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold md:text-3xl">
          Ready to Rent? Call Us Today!
        </h2>
        <p className="mt-2 text-white/90">
          No sales tax on any rental. Two convenient locations in San Diego.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-orange hover:bg-white/90 text-base px-8"
          >
            <a href="tel:619-561-7845">
              <Phone className="size-4" />
              Lakeside: 619-561-7845
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-orange hover:bg-white/90 text-base px-8"
          >
            <a href="tel:619-282-5995">
              <Phone className="size-4" />
              San Diego: 619-282-5995
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
