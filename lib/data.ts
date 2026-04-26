import type {
  NavLink,
  Department,
  WhyUsItem,
  OpeningDay,
  FooterLink,
  HeroData,
  StoreAddress,
  FeatureBandData,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Departments", href: "#departments" },
  { label: "About", href: "#about" },
  { label: "Hours & Location", href: "#hours" },
];

export const heroData: HeroData = {
  heading: "Melbourne's Fresh Food Hub",
  body: "Quality groceries at wholesale prices. Fresh produce, premium meats, and thousands of products for families, restaurants, and small businesses.",
  ctas: [
    { label: "Explore Departments", href: "#departments" },
    { label: "Hours & Location", href: "#hours" },
  ],
};

export const uspList: string[] = [
  "Fresh daily deliveries",
  "Wholesale pricing for all",
  "Quality you can trust",
  "Melbourne's fresh food hub",
  "Family owned since 1998",
  "Over 15,000 products",
  "Proudly serving our community",
  "Australian & imported goods",
  "Open 7 days a week",
  "Trusted by 500+ businesses",
];

export const departments: Department[] = [
  { name: "Fresh Produce", image: "/images/dept-produce.png", alt: "Fresh fruit and vegetables" },
  { name: "Bakery & Pastries", image: "/images/dept-bakery.png", alt: "Freshly baked bread and pastries" },
  { name: "Deli & Charcuterie", image: "/images/dept-deli.png", alt: "Deli meats and cheeses" },
  { name: "Meat & Seafood", image: "/images/dept-meat.png", alt: "Fresh meat and seafood" },
  { name: "Dairy & Eggs", image: "/images/dept-dairy.png", alt: "Dairy products and eggs" },
  { name: "Frozen Foods", image: "/images/dept-frozen.png", alt: "Frozen food selection" },
  { name: "Beverages", image: "/images/dept-beverages.png", alt: "Drinks and beverages aisle" },
  { name: "Pantry & Dry Goods", image: "/images/dept-pantry.png", alt: "Pantry staples and dry goods" },
  { name: "Health & Beauty", image: "/images/dept-health.png", alt: "Health and beauty products" },
  { name: "Household", image: "/images/dept-household.png", alt: "Household and cleaning supplies" },
];

export const whyUsItems: WhyUsItem[] = [
  {
    icon: "BadgeCheck",
    heading: "Premium Quality",
    body: "Hand-selected produce and products sourced from trusted suppliers across Victoria and beyond.",
  },
  {
    icon: "Tag",
    heading: "Wholesale Value",
    body: "Bulk pricing available for families and small businesses — savings that make a real difference.",
  },
  {
    icon: "Users",
    heading: "Community First",
    body: "Proudly serving Melbourne's multicultural community since 1998 with products from around the world.",
  },
  {
    icon: "Phone",
    heading: "Expert Service",
    body: "Our knowledgeable team is always on hand to help you find exactly what you need.",
  },
];

export const communityBandData: FeatureBandData = {
  heading: "Heart of Our Community",
  body: "Green Valley has been feeding Melbourne families for over 25 years. We believe everyone deserves access to fresh, quality food at fair prices — no matter where you come from.",
  cta: { label: "Our Story", href: "#about" },
};


export const openingHours: OpeningDay[] = [
  { day: "Monday – Friday", hours: "7:00am – 9:00pm" },
  { day: "Saturday", hours: "7:00am – 9:00pm" },
  { day: "Sunday", hours: "8:00am – 8:00pm" },
  { day: "Public Holidays", hours: "9:00am – 6:00pm" },
];

export const storeAddress: StoreAddress = {
  street: "123 Plenty Road",
  suburb: "Bundoora",
  state: "VIC",
  postcode: "3083",
  phone: "(03) 9404 0000",
  email: "hello@greenvalley.com.au",
};

export const footerLinks: FooterLink[] = [
  { label: "Departments", href: "#departments" },
  { label: "About Us", href: "#about" },
  { label: "Hours & Location", href: "#hours" },
  { label: "Contact", href: "mailto:hello@greenvalley.com.au" },
];
