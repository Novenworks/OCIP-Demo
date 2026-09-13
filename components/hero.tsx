import Image from "next/image";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[34rem] overflow-hidden bg-char md:min-h-[40rem]">
      <Image
        src="/images/hero-laguna-patio.jpg"
        alt="Twilight pool, spa, and patio lighting from a recent OCIP project published on theocip.com"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-char/90 via-char/55 to-char/15" />
      <div className="relative mx-auto flex min-h-[34rem] max-w-6xl items-end px-5 py-16 md:min-h-[40rem] md:items-center md:py-24">
        <div className="max-w-xl text-cream">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-sand uppercase">
            Orange County hardscape
          </p>
          <h1 className="font-display mt-4 text-4xl leading-[1.1] md:text-5xl">
            Transform the Hardscape. Change the Entire Property.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/85">
            The OCIP Co. builds interlocking paver driveways, patios, pool decks,
            and outdoor living spaces for Orange County homes. Licensed California
            contractor. Real recent work — shown clearly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#estimate"
              className="inline-flex min-h-11 items-center rounded-md bg-clay px-5 text-sm font-semibold text-white hover:bg-clay-dark"
            >
              Request an estimate
            </a>
            <a
              href="#work"
              className="inline-flex min-h-11 items-center rounded-md border border-cream/40 px-5 text-sm font-semibold text-cream hover:bg-white/10"
            >
              View our work
            </a>
          </div>
          <p className="mt-6 text-sm text-cream/70">
            Or call{" "}
            <a className="underline decoration-sand" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
