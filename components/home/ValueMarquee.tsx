"use client";

import { useRef } from "react";
import { uspList } from "@/lib/data";

export default function ValueMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    trackRef.current?.classList.add("paused");
  };

  const handleMouseLeave = () => {
    trackRef.current?.classList.remove("paused");
  };

  return (
    <section
      className="bg-(--colour-green-house) py-5 overflow-hidden"
      aria-label="Store highlights"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="marquee-track flex whitespace-nowrap"
      >
        <ul className="flex items-center" aria-label="Store highlights list">
          {uspList.map((usp, i) => (
            <li key={i} className="flex items-center">
              <span className="text-sm md:text-base font-semibold text-white px-8 tracking-wide">
                {usp}
              </span>
              <span className="text-(--colour-gold) text-lg" aria-hidden="true">
                ✦
              </span>
            </li>
          ))}
        </ul>
        <ul className="flex items-center" aria-hidden="true">
          {uspList.map((usp, i) => (
            <li key={i} className="flex items-center">
              <span className="text-sm md:text-base font-semibold text-white px-8 tracking-wide">
                {usp}
              </span>
              <span className="text-(--colour-gold) text-lg" aria-hidden="true">
                ✦
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
