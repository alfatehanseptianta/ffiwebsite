import type { Locale } from "@/types/landing";

export type SitePageKey =
  | "tentang"
  | "program"
  | "berita"
  | "kemitraan"
  | "kontak"
  | "produk";

export interface PageHeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface PageHero {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  badges?: string[];
  actions?: PageHeroAction[];
}

export interface PageMetric {
  value: string;
  label: string;
}

export interface PageGridCard {
  eyebrow?: string;
  badge?: string;
  title: string;
  description: string;
  meta?: string;
  tag?: string;
  linkLabel?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface PageProseBlock {
  type: "prose";
  id?: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  quote?: {
    text: string;
    author: string;
    role?: string;
  };
}

export interface PageGridBlock {
  type: "grid";
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  columns?: 2 | 3 | 4;
  style?: "default" | "news" | "product" | "sector";
  items: PageGridCard[];
}

export interface PageSplitBlock {
  type: "split";
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  sideTag?: string;
  sideTitle: string;
  sideParagraphs?: string[];
  sideBullets?: string[];
}

export interface PageTimelineBlock {
  type: "timeline";
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: Array<{
    step: string;
    title: string;
    description: string;
  }>;
}

export interface PageContactBlock {
  type: "contact";
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  infoCards: Array<{
    label: string;
    value: string;
    href?: string;
    note?: string;
  }>;
  form: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    aboutLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    aboutPlaceholder: string;
    submitLabel: string;
    invalidEmailMessage: string;
    successMessage: string;
  };
}

export interface PageCtaBlock {
  type: "cta";
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export type SitePageBlock =
  | PageProseBlock
  | PageGridBlock
  | PageSplitBlock
  | PageTimelineBlock
  | PageContactBlock
  | PageCtaBlock;

export interface SitePageContent {
  hero: PageHero;
  metrics?: PageMetric[];
  blocks: SitePageBlock[];
}

export type LocalizedSitePageContent = Record<Locale, SitePageContent>;
