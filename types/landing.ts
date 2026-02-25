export type Locale = "id" | "en";

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  imageAlt: string;
  overlayTopLabel: string;
  overlayTopTitle: string;
  overlayBottomLabel: string;
  overlayBottomTitle: string;
}

export interface ProgramCardItem {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  eyebrow?: string;
  variant?: "blue" | "green" | "deep";
}

export interface CoverageItem {
  text: string;
}

export interface CriteriaGroup {
  badge: string;
  title: string;
  items: string[];
  variant?: "blue" | "green";
}

export interface PartnerItem {
  name: string;
  category: string;
  note?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface LandingContent {
  nav: {
    brandText: string;
    menuLabel: string;
    languageLabel: string;
    links: Array<{ href: string; label: string }>;
    ctaLabel: string;
  };
  hero: HeroContent;
  statsLabels: {
    levels: string;
    coveragePoints: string;
    criteriaPoints: string;
    languages: string;
  };
  program: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ProgramCardItem[];
  };
  coverage: {
    eyebrow: string;
    title: string;
    items: CoverageItem[];
    asideTag: string;
    asideTitle: string;
    asideDescription: string;
    asideCta: string;
  };
  criteria: {
    eyebrow: string;
    title: string;
    description?: string;
    groups: CriteriaGroup[];
  };
  partners: {
    eyebrow: string;
    title: string;
    description: string;
    items: PartnerItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    label: string;
    placeholder: string;
    buttonText: string;
    helperText: string;
    invalidEmailMessage: string;
    successMessage: string;
  };
  footer: {
    mission: string;
    columns: Array<{
      title: string;
      links: FooterLink[];
    }>;
    copyrightLabel: string;
  };
}
