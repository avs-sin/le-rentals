# Codex Build: Lakeside Equipment & Carl's Rentals Website

## Overview
Build a complete Next.js 15 + shadcn/ui website for an equipment and party rental company in San Diego, CA. Use the provided `site-blueprint.json` as the single source of truth for all pages, content, and structure. Use the provided product images in `images/`.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Static site generation (SSG) with `generateStaticParams`

## Brand
- **Name**: Lakeside Equipment & Carl's Rentals
- **Tagline**: Equipment and Party Rental Experts in San Diego and Lakeside CA
- **USP**: No sales tax on any rental. Local and Independent. 40 years of service.
- **Primary color**: #00449E (blue)
- **Secondary color**: #FF7F00 (orange)
- **Accent**: #F0F4F8
- **Text**: #333333
- **Fonts**: Roboto (headings), Open Sans (body) — use Google Fonts
- **Logos**: `/images/lakeside-equipment-logo.png` and `/images/carls-rentals-logo.png`
- **2 Locations**:
  - Lakeside Equipment: 11925 Woodside Ave, Lakeside, CA 92040 — 619-561-7845
  - Carl's Rentals: 3704 University Ave, San Diego, CA 92105 — 619-282-5995

## Project Structure
```
src/
  app/
    layout.tsx          # Root layout with nav, footer, fonts, metadata
    page.tsx            # Home page
    about-us/page.tsx
    contact-us/page.tsx
    concrete-sales/page.tsx
    locations/page.tsx
    resources/page.tsx
    supplies-sales/page.tsx
    new-equipment-sales/page.tsx
    equipment-rentals/page.tsx    # Hub page listing equipment categories
    party-rentals/page.tsx        # Hub page listing party categories
    rentals/
      [category]/
        page.tsx        # Category page with item grid
  components/
    header.tsx          # Logo, nav, phone CTA
    footer.tsx          # Locations, hours, links
    hero.tsx            # Home hero with CTA
    category-card.tsx   # Card for hub pages
    item-card.tsx       # Product card with image, name, pricing
    pricing-table.tsx   # Daily/weekly/monthly rates
    cta-banner.tsx      # "Call now" or "Request quote" banner
    contact-form.tsx    # Simple contact/quote request form
    location-card.tsx   # Location with map embed, address, phone
  lib/
    data.ts             # Import and expose blueprint data
    types.ts            # TypeScript types for blueprint schema
  data/
    site-blueprint.json # Copy of the blueprint (source of truth)
public/
  images/
    lakeside-equipment-logo.png
    carls-rentals-logo.png
    equipment/          # All 53 product images (already named by ID.jpg)
```

## Data Model (from site-blueprint.json)

### Page types:
- `home` — hero, featured categories, USP section, CTA
- `static` — content page (about, contact, concrete, locations, resources, supplies, new-equipment)
- `hub` — grid of category cards linking to `/rentals/[category]`
- `category` — grid of item cards with pricing

### Item shape:
```typescript
interface RentalItem {
  name: string
  originalImageUrl?: string
  localImagePath?: string  // e.g. "/images/equipment/12189.jpg"
  pricing?: {
    daily?: string
    weekly?: string
    monthly?: string
  }
  description?: string
}
```

### Category page shape:
```typescript
interface CategoryPage {
  slug: string          // e.g. "/rentals/miscellaneous-equipment"
  title: string         // Full SEO title
  metaDescription: string
  h1: string
  type: "category"
  items: RentalItem[]   // May be empty (30 categories have 0 items — show "Call for availability")
}
```

## Page Requirements

### Home (`/`)
- Hero section with tagline, CTA buttons ("Browse Equipment" → /equipment-rentals, "Browse Party Rentals" → /party-rentals)
- "No Sales Tax" badge/banner prominently displayed
- 6 featured category cards (pick from populated categories)
- USP section: 40 years, 2 locations, no tax, local & independent
- Testimonial/trust section (placeholder)
- Both locations with phone numbers
- CTA banner at bottom

### Hub Pages (`/equipment-rentals`, `/party-rentals`)
- Grid of category cards with name and representative image (if available)
- Equipment hub shows construction/tool categories
- Party hub shows event/party categories
- Each card links to `/rentals/[category-slug]`

### Category Pages (`/rentals/[category]`)
- H1 from blueprint
- Grid of item cards (image, name, daily/weekly/monthly pricing)
- If category has 0 items: show "Call for Availability" message with phone numbers
- Breadcrumb: Home > Equipment Rentals > [Category]
- CTA section at bottom

### Static Pages
- **About Us**: Company story, 40 years, family-owned, 2 locations
- **Contact Us**: Contact form + both location addresses/phones/map embeds
- **Concrete Sales**: Cart-Away concrete mixer info, CTA to call
- **Locations**: Both locations with Google Maps embeds, hours, phones
- **Resources**: FAQ section for rental policies (delivery, deposits, ID requirements)
- **Supplies Sales**: Contractor supplies available for purchase
- **New Equipment Sales**: Authorized Stihl dealer, new equipment for sale

### Navigation
- Logo (left)
- Links: Equipment Rentals, Party Rentals, Concrete, About, Contact
- Phone number CTA button (right): "Call 619-561-7845"
- Mobile: hamburger menu

### Footer
- Both locations with addresses and phones
- Quick links: About, Contact, Resources, Locations
- Hours: Mon-Fri 7AM-5PM, Sat 7AM-4PM (placeholder — verify with Robert)
- Copyright

## SEO Requirements
- Unique `<title>` and `<meta description>` per page (from blueprint)
- Proper heading hierarchy (single H1 per page)
- JSON-LD structured data: LocalBusiness schema on home, Product schema on item cards
- `generateMetadata` in each page
- `sitemap.ts` generating all 45 pages
- `robots.ts` allowing all
- Semantic HTML (nav, main, article, section)
- Image alt text = item name

## Design Guidelines
- Clean, professional, trustworthy (not flashy)
- Blue (#00449E) for headers, nav, buttons
- Orange (#FF7F00) for CTAs, accents, highlights
- White background, light gray sections for contrast
- Card-based layouts with subtle shadows
- Responsive: mobile-first, looks great on phone
- Use shadcn/ui: Card, Button, Badge, Sheet (mobile menu), Separator, Input, Textarea

## Important Notes
- All data comes from `site-blueprint.json` — import it in `lib/data.ts`
- Images are local in `/public/images/equipment/` — use Next.js `<Image>` component
- Empty categories are valid — show them with "Call for availability"
- This is a STATIC site (no API calls at build time from external services)
- Do NOT use any placeholder image services — use actual local images or hide the image
- Phone numbers should be `tel:` links
- "No Sales Tax" messaging should be prominent throughout
