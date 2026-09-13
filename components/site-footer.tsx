import Image from "next/image";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-char text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo-ocip.png"
            alt=""
            width={180}
            height={75}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
            {SITE.displayName}. Pavers, hardscape, and pool decking for Orange
            County homes.
          </p>
        </div>
        <div className="text-sm leading-relaxed">
          <p className="font-semibold">Contact</p>
          <p className="mt-2">
            <a className="hover:underline" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
          </p>
          <p>
            <a className="hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
          <p className="mt-2 text-cream/75">
            {SITE.addressLine}
            <br />
            {SITE.cityStateZip}
          </p>
        </div>
        <div className="text-sm leading-relaxed">
          <p className="font-semibold">License</p>
          <p className="mt-2 text-cream/75">
            CSLB #{SITE.licenseNumber} · {SITE.licenseClass}
            <br />
            {SITE.licenseStatus} as of {SITE.licenseChecked}
          </p>
          <p className="mt-4 text-cream/60">
            <a className="hover:underline" href={SITE.facebookUrl}>
              Facebook
            </a>
            {" · "}
            <a className="hover:underline" href={SITE.instagramUrl}>
              Instagram
            </a>
            {" · "}
            <a className="hover:underline" href={SITE.youtubeUrl}>
              YouTube
            </a>
          </p>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-4 text-center text-xs text-cream/50">
        Speculative redesign by Novenworks. {SITE.shortName} is not a Novenworks
        client. Marks and photography remain property of their owners.
      </p>
    </footer>
  );
}
