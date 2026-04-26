import Link from "next/link";
import Container from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/Button";
import { businessCtaData } from "@/lib/data";

export default function BusinessCTA() {
  return (
    <section id="business" className="bg-(--colour-canvas) py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessCtaData.map((item) => (
            <div
              key={item.heading}
              className="bg-white rounded-(--radius-card) p-8 md:p-10 shadow-card"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-(--colour-green-house)">
                {item.heading}
              </h2>
              <p className="mt-4 text-base text-(--color-text-secondary) leading-relaxed">
                {item.body}
              </p>
              <div className="mt-8">
                <Link href={item.cta.href} className={buttonVariants({ variant: "filled", size: "md" })}>
                  {item.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
