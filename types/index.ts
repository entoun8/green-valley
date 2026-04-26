export interface NavLink {
  label: string;
  href: string;
}

export interface Department {
  name: string;
  image: string;
  alt: string;
}

export interface WhyUsItem {
  icon: string;
  heading: string;
  body: string;
}

export interface OpeningDay {
  day: string;
  hours: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface HeroData {
  heading: string;
  body: string;
  ctas: { label: string; href: string }[];
}

export interface StoreAddress {
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  phone: string;
  email: string;
}

export interface FeatureBandData {
  heading: string;
  body: string;
  cta: { label: string; href: string };
}

export interface BusinessCtaItem {
  heading: string;
  body: string;
  cta: { label: string; href: string };
}
