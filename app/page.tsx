import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ValueMarquee from "@/components/home/ValueMarquee";
import DepartmentsGrid from "@/components/home/DepartmentsGrid";
import WhyUs from "@/components/home/WhyUs";
import CommunityBand from "@/components/home/CommunityBand";
import HoursLocation from "@/components/home/HoursLocation";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Melbourne's Fresh Food Hub`,
  description:
    "Shop fresh produce, premium meats, bakery, and thousands of products at wholesale prices. Open 7 days in Bundoora, Melbourne.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValueMarquee />
      <DepartmentsGrid />
      <WhyUs />
      <CommunityBand />
      <HoursLocation />
    </main>
  );
}
