import Image from "next/image";
import { SITE } from "@/lib/site";
import { EstimateForm } from "@/components/estimate-form";

export function FinalCta() {
  return (
    <section id="estimate" className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="relative min-h-72">
          <Image
            src="/images/work-snap-patio.jpg"
            alt="Paver driveway and entry at dusk from an OCIP project published on theocip.com"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="px-5 py-12 md:px-10 md:py-16">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-clay uppercase">
            Next step
          </p>
          <h2 className="font-display mt-3 text-3xl">Request an estimate</h2>
          <p className="mt-3 text-sm text-muted">
            Same invitation as the live site: get a free estimate, or call{" "}
            <a className="underline" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
            .
          </p>
          <div className="mt-8">
            <EstimateForm />
          </div>
        </div>
      </div>
    </section>
  );
}
