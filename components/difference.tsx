import { OWNER_QUOTE, SITE } from "@/lib/site";

export function Difference() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-clay uppercase">
        Why OCIP
      </p>
      <div className="mt-4 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">
            Owner-led hardscape, judged by the yard you walk into.
          </h2>
          <p className="mt-4 max-w-xl text-muted leading-relaxed">
            Tyler Watkins started The OCIP Co. in Orange County. The live site
            still carries leftover template copy; the business itself is a
            licensed contractor with recent backyard work and reviews that name
            the crew.
          </p>
          <blockquote className="mt-8 border-l-2 border-clay pl-5">
            <p className="font-display text-xl leading-snug">{OWNER_QUOTE.text}</p>
            <footer className="mt-3 text-sm text-muted">{OWNER_QUOTE.attribution}</footer>
          </blockquote>
        </div>
        <ul className="space-y-4 text-sm leading-relaxed">
          <li className="rounded-xl border border-line bg-cream p-4">
            <strong>Licensed.</strong> CSLB #{SITE.licenseNumber},{" "}
            {SITE.licenseClass}, {SITE.licenseStatus.toLowerCase()}
            {" "}({SITE.licenseChecked}).
          </li>
          <li className="rounded-xl border border-line bg-cream p-4">
            <strong>Stated promise.</strong> The first-party homepage currently
            leads with “100% Customer Satisfaction Or You Don’t Pay.”
          </li>
          <li className="rounded-xl border border-line bg-cream p-4">
            <strong>Reviews that name the work.</strong> Patios, fire pits,
            walkways, and communication — published on the site and attributed to
            Yelp.
          </li>
        </ul>
      </div>
    </section>
  );
}
