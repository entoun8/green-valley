import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  subtext?: string;
  surface?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  heading,
  subtext,
  surface = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", className)}>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight",
          surface === "light"
            ? "text-(--colour-green-starbucks)"
            : "text-white"
        )}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={cn(
            "mt-3 text-lg max-w-[60ch]",
            surface === "light" ? "text-(--color-text-secondary)" : "text-white/80"
          )}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
