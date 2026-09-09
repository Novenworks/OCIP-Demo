import Header from "@/components/Header";
import ConsultForm from "@/components/ConsultForm";
import { AREAS, SERVICES, SITE, TESTIMONIALS, WORK } from "@/lib/site";

export default function HomePage() {
  return (
    <div id="top">
      <Header />

      <section className="relative min-h-[92vh] pt-16">
        <img
          src="https://web.archive.org/web/20240911125224id_/https://theocip.com/wp-content/uploads/2024/04/Copy-of-20-Laguna-1-scaled.jpg"
          alt="Laguna-area pool and outdoor living published on theocip.com"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/25" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:justify-center sm:pb-24">
          <p className="section-label mb-4">Orange County hardscape</p>
          <h1 className="font-display max-w-3xl text-4xl leading-[1.05] text-cream sm:text-6xl">
            Transform the Hardscape.
            <span className="block text-sand">Change the Entire Property.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            The OCIP Co. designs and builds interlocking paver driveways, patios,
            pool decks, and outdoor living spaces for Orange County homes — then
            stands behind the work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#consult" className="rounded-full bg-clay px-6 py-3 text-sm font-medium text-white hover:bg-[#9a4a28]">
              Request a Consultation
            </a>
            <a href="#work" className="rounded-full border border-white/25 px-6 py-3 text-sm text-cream hover:bg-white/10">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-soil">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-6 sm:grid-cols-3">
          <div>
            <p className="section-label">Trade</p>
            <p className="mt-1 text-sm text-cream">Pavers, pool decks, outdoor living</p>
          </div>
          <div>
            <p className="section-label">License</p>
            <p className="mt-1 text-sm text-cream">{SITE.license}</p>
          </div>
          <div>
            <p className="section-label">Talk to the shop</p>
            <p className="mt-1 text-sm text-cream">
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-sand">{SITE.phoneDisplay}</a>
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-label">What we build</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl sm:text-4xl">
          Hardscape that has to work in Southern California, not just photograph well.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-2xl border border-white/10 bg-soil">
              <div className="h-52 overflow-hidden">
                <img src={s.image} alt={s.title} className="img-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="bg-soil py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-label">Published work</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            Real photography from the OCIP site — not stock filler.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WORK.map((w) => (
              <figure key={w.src} className="overflow-hidden rounded-2xl border border-white/10 bg-ink">
                <div className="h-56 overflow-hidden sm:h-64">
                  <img src={w.src} alt={w.title} className="img-cover" />
                </div>
                <figcaption className="p-4">
                  <p className="font-medium">{w.title}</p>
                  <p className="mt-1 text-xs text-stone">{w.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <div>
          <p className="section-label">Why this crew</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            A local hardscape shop that still answers the phone.
          </h2>
          <p className="mt-4 text-mist leading-relaxed">
            Tyler Watkins built The OCIP Co. around pavers and outdoor remodels in Orange County.
            This page puts the real offer in front of the buyer.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-cream">
            <li className="border-l-2 border-clay pl-4">First-party satisfaction guarantee language already published on theocip.com</li>
            <li className="border-l-2 border-clay pl-4">Licensed California contractor {SITE.license}</li>
            <li className="border-l-2 border-clay pl-4">Direct line {SITE.phoneDisplay} · {SITE.email}</li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img
            src="https://web.archive.org/web/20241123162302id_/https://theocip.com/wp-content/uploads/2024/04/Copy-of-98c32a55-a6aa-4a04-a39a-17bf99f3189b.jpeg"
            alt="Night pool with stone coping published by OCIP"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <section id="process" className="bg-soil py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-label">How a job starts</p>
          <h2 className="font-display mt-3 text-3xl">A short, honest path.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Walk the property", d: "Call or request a consultation. Talk through the yard and what you want the space to do." },
              { n: "02", t: "Lock the plan", d: "Layout, material direction, and scope before anyone tears anything out." },
              { n: "03", t: "Build it clean", d: "Demo, base, install, and a walkthrough." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl border border-white/10 bg-ink p-6">
                <p className="font-display text-3xl text-sand">{step.n}</p>
                <h3 className="mt-3 text-xl">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-5 py-20">
        <p className="section-label">From the current site</p>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl">Customer words already published by OCIP.</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-white/10 bg-soil p-6">
              <p className="text-sm leading-relaxed text-cream">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-sand">{t.name} · {t.place}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="areas" className="bg-soil py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="section-label">Orange County</p>
          <h2 className="font-display mt-3 text-3xl">Cities the first-party site already names.</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {AREAS.map((city) => (
              <span key={city} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-mist">{city}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="consult" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-ink/90" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <p className="section-label">Next step</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">Request a consultation.</h2>
            <p className="mt-4 text-mist">This form opens an email to {SITE.email}.</p>
            <p className="mt-6 text-lg">
              <a href={`tel:${SITE.phoneTel}`} className="text-sand hover:underline">{SITE.phoneDisplay}</a>
            </p>
          </div>
          <ConsultForm />
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl">OCIP Co.</p>
            <p className="mt-3 text-sm text-mist">{SITE.legal}</p>
            <p className="text-sm text-mist">Newport Beach / Orange County, CA</p>
            <p className="text-sm text-mist">{SITE.license}</p>
          </div>
          <div className="text-sm text-mist">
            <p><a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></p>
            <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p className="mt-3 max-w-sm text-xs text-stone">
              Speculative redesign by Novenworks. OCIP is not a Novenworks client.
              Marks and photography remain property of their owners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
