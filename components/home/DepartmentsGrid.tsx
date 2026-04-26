import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/motion/FadeInView";
import { departments } from "@/lib/data";

export default function DepartmentsGrid() {
  return (
    <section id="departments" className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading
          heading="Shop by Department"
          subtext="Everything you need under one roof — from farm-fresh produce to household essentials."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {departments.map((dept, index) => (
            <FadeInView key={dept.name} delay={index * 0.08}>
              <article className="group">
                <div className="relative aspect-square w-full overflow-hidden rounded-(--radius-card) bg-(--colour-canvas)">
                  <Image
                    src={dept.image}
                    alt={dept.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <p className="mt-3 text-sm md:text-base font-semibold text-(--colour-green-house) text-center">
                  {dept.name}
                </p>
              </article>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
