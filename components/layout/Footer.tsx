import Link from "next/link";
import { footerLinks, openingHours, storeAddress } from "@/lib/data";
import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-(--colour-green-house) text-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Col 1: Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold text-white leading-tight">{SITE_NAME}</p>
            <p className="mt-1 text-sm text-white/60 uppercase tracking-widest font-medium">
              Wholesale Supermarket
            </p>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-[24ch]">
              Feeding Melbourne families with quality and value since 1998.
            </p>
          </div>

          {/* Col 2: Links */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-(--colour-gold) mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Hours */}
          <div id="hours">
            <p className="text-xs font-semibold uppercase tracking-widest text-(--colour-gold) mb-4">
              Store Hours
            </p>
            <ul className="flex flex-col gap-2">
              {openingHours.map((entry) => (
                <li key={entry.day} className="text-sm text-white/70">
                  <span className="text-white/90 font-medium">{entry.day}</span>
                  <br />
                  {entry.hours}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Address */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-(--colour-gold) mb-4">
              Find Us
            </p>
            <address className="not-italic text-sm text-white/70 leading-relaxed">
              <p className="text-white/90 font-medium">{storeAddress.street}</p>
              <p>
                {storeAddress.suburb} {storeAddress.state} {storeAddress.postcode}
              </p>
              <p className="mt-3">
                <Link
                  href={`tel:${storeAddress.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {storeAddress.phone}
                </Link>
              </p>
              <p>
                <Link
                  href={`mailto:${storeAddress.email}`}
                  className="hover:text-white transition-colors"
                >
                  {storeAddress.email}
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Melbourne, Victoria, Australia</p>
        </div>
      </div>
    </footer>
  );
}
