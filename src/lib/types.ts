export interface RentalItem {
  name: string;
  originalImageUrl?: string | null;
  localImagePath?: string;
  pricing?: {
    daily?: string | null;
    weekly?: string | null;
    monthly?: string | null;
  };
  description?: string;
}

export interface CategoryPage {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  type: "category";
  items: RentalItem[];
}

export interface HubPage {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  type: "hub";
}

export interface StaticPage {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  type: "static";
}

export interface HomePage {
  slug: "/";
  title: string;
  metaDescription: string;
  h1: string;
  type: "home";
}

export type BlueprintPage = HomePage | StaticPage | HubPage | CategoryPage;

export interface Location {
  name: string;
  address: string;
  phone: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  usp: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
  fonts: {
    headings: string;
    body: string;
  };
  locations: Location[];
  images: {
    logoLakeside: string;
    logoCarls: string;
    itemImagesDir: string;
  };
}

export interface SiteBlueprint {
  siteConfig: SiteConfig;
  pages: BlueprintPage[];
}
