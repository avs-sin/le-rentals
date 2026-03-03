import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact" },
  { href: "/resources", label: "Resources" },
  { href: "/locations", label: "Locations" },
  { href: "/new-equipment-sales", label: "New Equipment Sales" },
  { href: "/supplies-sales", label: "Supplies" },
];

const locations = [
  {
    name: "Lakeside Equipment",
    address: "11925 Woodside Ave, Lakeside, CA 92040",
    phone: "619-561-7845",
  },
  {
    name: "Carl's Rentals",
    address: "3704 University Ave, San Diego, CA 92105",
    phone: "619-282-5995",
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Locations</h3>
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.name} className="space-y-1">
                  <p className="font-medium">{loc.name}</p>
                  <p className="flex items-start gap-2 text-sm text-white/80">
                    <MapPin className="mt-0.5 size-4 shrink-0" />
                    {loc.address}
                  </p>
                  <a
                    href={`tel:${loc.phone}`}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
                  >
                    <Phone className="size-4 shrink-0" />
                    {loc.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Hours</h3>
            <div className="space-y-1 text-sm text-white/80">
              <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
              <p>Saturday: 7:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium text-brand-orange">
                No Sales Tax on Any Rental!
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <p className="text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} Lakeside Equipment &amp; Carl&apos;s
          Rentals. All rights reserved.
        </p>
        <p className="mt-2 text-center text-xs text-white/40">
          Website by{" "}
          <a
            href="https://vegasops.com?ref=lexiesbistro"
            target="_blank"
            rel="noopener"
            className="hover:text-white/70 transition-colors"
          >
            VegasOps
          </a>
        </p>
      </div>
    </footer>
  );
}
