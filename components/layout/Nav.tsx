import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { SITE_NAME } from "@/lib/constants";
import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-nav">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--colour-green-starbucks) rounded"
        >
          <Image
            src="/images/logo.svg"
            alt={`${SITE_NAME} Wholesale Supermarket`}
            width={160}
            height={48}
            priority
            unoptimized
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-(--colour-green-house) hover:text-(--colour-green-starbucks) transition-colors rounded-full hover:bg-(--colour-canvas)"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <MobileNav />
      </div>
    </header>
  );
}
