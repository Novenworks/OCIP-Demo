import Image from "next/image";
import { SERVICES } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-clay uppercase">
        What we build
      </p>
      <h2 className="font-display mt-3 max-w-2xl text-3xl md:text-4xl">
        Hardscape that changes how the property lives.
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        Jobs are grouped the way homeowners actually decide — drive, gather, swim
        — not a dump of every trade in the first screen.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className="overflow-hidden rounded-xl border border-line bg-cream"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-2xl">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
