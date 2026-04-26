import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/Button";
import { heroData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-(--colour-canvas) py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
          {/* Text column */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-(--colour-green-house) leading-tight">
              {heroData.heading}
            </h1>
            <p className="mt-6 text-lg text-(--color-text-secondary) max-w-[52ch] leading-relaxed">
              {heroData.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {heroData.ctas.map((cta, i) => (
                <Link
                  key={cta.href + i}
                  href={cta.href}
                  className={buttonVariants({ variant: i === 0 ? "filled" : "outlined", size: "lg" })}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="relative w-full aspect-[4/3] rounded-(--radius-card) overflow-hidden order-first lg:order-last">
            <Image
              src="/images/hero.png"
              alt="Fresh produce display at Green Valley Wholesale Supermarket"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
