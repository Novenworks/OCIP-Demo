import Image from "next/image";
import { NAV, SITE } from "@/lib/site";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="relative z-30 bg-char text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex min-h-11 items-center">
          <Image
            src="/images/logo-ocip.png"
            alt="The OCIP Co."
            width={220}
            height={91}
            className="h-10 w-auto"
            priority
          />
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-cream/85 hover:text-cream">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${SITE.phoneTel}`} className="text-sm text-sand">
            {SITE.phoneDisplay}
          </a>
          <a
            href="#estimate"
            className="inline-flex min-h-11 items-center rounded-md bg-clay px-4 text-sm font-semibold text-white hover:bg-clay-dark"
          >
            Request an estimate
          </a>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
