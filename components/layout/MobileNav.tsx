"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { SITE_NAME } from "@/lib/constants";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden p-2 text-(--colour-green-house) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--colour-green-starbucks)"
      >
        <Menu size={24} aria-hidden="true" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <aside
            id="mobile-nav-drawer"
            className="absolute top-0 left-0 h-full w-[28rem] max-w-[85vw] bg-white flex flex-col shadow-xl"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-xl font-bold text-(--colour-green-house)">
                {SITE_NAME}
              </span>
              <button
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
                className="p-2 text-(--colour-green-house) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--colour-green-starbucks)"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <nav className="flex-1 px-6 py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-lg font-medium text-(--colour-green-house) hover:text-(--colour-green-starbucks) transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
