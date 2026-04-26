import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/motion/FadeInView";
import { whyUsItems } from "@/lib/data";
import { BadgeCheck, Tag, Users, Phone } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BadgeCheck,
  Tag,
  Users,
  Phone,
};

export default function WhyUs() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-(--radius-card) overflow-hidden">
            <Image
              src="/images/why-us.png"
              alt="Green Valley store interior showing fresh produce aisles"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Value props */}
          <div>
            <SectionHeading
              heading="Why Green Valley?"
              subtext="More than a supermarket — a community hub built on quality and trust."
            />
            <div className="flex flex-col gap-8">
              {whyUsItems.map((item, index) => {
                const Icon = iconMap[item.icon] ?? BadgeCheck;
                return (
                  <FadeInView key={item.heading} delay={index * 0.1}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-(--colour-canvas) flex items-center justify-center">
                        <Icon
                          size={22}
                          className="text-(--colour-green-starbucks)"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-(--colour-green-house)">
                          {item.heading}
                        </h3>
                        <p className="mt-1 text-base text-(--color-text-secondary) leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </FadeInView>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
