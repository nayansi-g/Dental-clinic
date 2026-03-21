"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileNav({ items, ctaHref }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-md p-2 text-[#17305E] transition hover:bg-slate-100"
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? (
          <X className="h-6 w-6 sm:h-7 sm:w-7" />
        ) : (
          <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
        )}
      </button>

      {mobileOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-200 bg-white shadow-lg">
          <nav className="mx-auto flex w-full max-w-[1440px] flex-col px-4 py-4 sm:px-6 md:px-8">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-b border-gray-100 py-3 text-[15px] font-semibold text-[#17305E] transition hover:text-[#2E6BE6] sm:text-base"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href={ctaHref}
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-[#19A0E8] to-[#3B63E6] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(59,99,230,0.25)]"
              onClick={() => setMobileOpen(false)}
            >
              BOOK APPOINTMENT
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
