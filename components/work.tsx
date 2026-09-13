import Image from "next/image";
import { WORK } from "@/lib/site";

export function Work() {
  return (
    <section id="work" className="bg-char py-16 text-cream md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-sand uppercase">
          Recent work
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl md:text-4xl">
          The pictures already exist. They just needed a homepage that lets them
          lead.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-cream/70">
          Photography below is from the first-party site and shows completed
          Orange County properties. Manufacturer catalog shots and listing photos
          that appear elsewhere on the live site are not used here as OCIP jobs.
        </p>
        <div className="mt-10 grid gap-3 md:grid-cols-4">
          {WORK.map((item) => (
            <figure
              key={item.src}
              className={`relative overflow-hidden ${item.className} min-h-56`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  item.className.includes("col-span-2")
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 100vw, 25vw"
                }
                className="object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 bg-char/75 px-3 py-2 text-xs tracking-wide uppercase">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
