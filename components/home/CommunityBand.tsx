import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { buttonVariants } from "@/components/ui/Button";
import FadeInView from "@/components/motion/FadeInView";
import { communityBandData } from "@/lib/data";

export default function CommunityBand() {
  return (
    <section className="bg-(--colour-green-house) py-20 md:py-28">
      <Container>
        <FadeInView>
          <div className="max-w-[64ch] mx-auto text-center">
            <SectionHeading
              heading={communityBandData.heading}
              subtext={communityBandData.body}
              surface="dark"
            />
            <Link href={communityBandData.cta.href} className={buttonVariants({ variant: "dark-outlined", size: "lg" })}>
              {communityBandData.cta.label}
            </Link>
          </div>
        </FadeInView>
      </Container>
    </section>
  );
}
