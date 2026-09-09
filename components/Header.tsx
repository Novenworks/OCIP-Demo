"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/images/logo-ocip-2024.png"
            alt="OCIP Co."
            className="h-8 w-auto sm:h-9"
          />
          <span className="hidden text-[11px] uppercase tracking-[0.16em] text-mist/80 sm:block">
            Orange County
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-mist lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-cream">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm text-cream sm:flex"
          >
            <Phone className="h-4 w-4 text-sand" />
            {SITE.phoneDisplay}
          </a>
          <a
            href="#consult"
            className="rounded-full bg-clay px-4 py-2 text-sm font-medium text-white hover:bg-[#9a4a28]"
          >
            Request a Consultation
          </a>
          <button
            type="button"
            className="rounded-md p-2 lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {item.label}
              </a>
            ))}
            <a href={`tel:${SITE.phoneTel}`} className="py-1 text-sand">
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
