"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { href: "/equipment-rentals", label: "Equipment Rentals" },
  { href: "/party-rentals", label: "Party Rentals" },
  { href: "/concrete-sales", label: "Concrete" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/lakeside-equipment-logo.png"
            alt="Lakeside Equipment"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-brand-text transition-colors hover:bg-brand-accent hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden bg-brand-orange text-white hover:bg-brand-orange/90 sm:inline-flex"
          >
            <a href="tel:619-561-7845">
              <Phone className="size-4" />
              619-561-7845
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="px-4 pt-2">Menu</SheetTitle>
              <nav className="flex flex-col gap-1 px-4 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-brand-text transition-colors hover:bg-brand-accent hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:619-561-7845"
                  className="mt-4 flex items-center gap-2 rounded-md bg-brand-orange px-3 py-2.5 text-sm font-medium text-white"
                >
                  <Phone className="size-4" />
                  619-561-7845
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
