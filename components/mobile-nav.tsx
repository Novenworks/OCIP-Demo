"use client";

import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/20 text-cream"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-4 bg-current" />
        </span>
      </button>
      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-char px-5 py-4 shadow-lg"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-11 py-2 text-sm text-cream"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="min-h-11 py-2 text-sm text-sand"
            >
              {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
