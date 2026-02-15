import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://www.le-rentals.com"),
  title: "Equipment & Party Rentals in San Diego & Lakeside, CA | Lakeside Equipment",
  description:
    "Your local, independent source for equipment and party rentals in San Diego. No sales tax on any rental. 40 years of service. Two locations in Lakeside and San Diego.",
  openGraph: {
    title: "Equipment & Party Rentals in San Diego & Lakeside, CA | Lakeside Equipment",
    description:
      "Your local, independent source for equipment and party rentals in San Diego. No sales tax on any rental. 40 years of service. Two locations in Lakeside and San Diego.",
    url: "https://www.le-rentals.com",
    siteName: "Lakeside Equipment",
    locale: "en_US",
    type: "website",
    images: ["/images/lakeside-equipment-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipment & Party Rentals in San Diego & Lakeside, CA | Lakeside Equipment",
    description:
      "Your local, independent source for equipment and party rentals in San Diego. No sales tax on any rental. 40 years of service.",
    images: ["/images/lakeside-equipment-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
