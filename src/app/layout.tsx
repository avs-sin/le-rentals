import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import { Phone } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Equipment & Party Rentals in San Diego & Lakeside, CA | Lakeside Equipment",
    template: "%s | Lakeside Equipment",
  },
  description:
    "Your local, independent source for equipment and party rentals in San Diego. No sales tax on any rental. 40 years of service. Two locations in Lakeside and San Diego.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${openSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Floating call button for mobile */}
        <a
          href="tel:6195617845"
          className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-brand-orange text-white shadow-lg hover:bg-brand-orange/90 lg:hidden"
          aria-label="Call us"
        >
          <Phone className="size-6" />
        </a>
      </body>
    </html>
  );
}
