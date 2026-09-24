import Image from "next/image";
import { SITE } from "@/lib/site";

const OBSERVATIONS = [
  "About and Services still ship BusinessLounge Lorem Ipsum, fake staff names, and invented stats (2300 clients, 47M visitors, 150B USD profit).",
  "Contact surfaces leftover placeholders: info@company.com and +12 (0) 345 678 9 next to the real number and contact@ocip.biz.",
  "The WordPress stack is BusinessLounge + Elementor + Slider Revolution + WPForms. Footer/history copy still mentions “Joined the BusinessLounge Family.”",
  "A real gallery exists, but several 2021 “project” images are manufacturer-catalog scenes (northeast forests, colonial estates), and some homepage stills carry CRMLS watermarks.",
  "Meanwhile the homepage does have recent OC backyard photography (2024–2025 Laguna/pool work, drone, video stills) and named Yelp reviews.",
];

const IMPROVEMENTS = [
  "Homepage led by verified OC job photography instead of template slider + catalog filler.",
  "Contact paths limited to the first-party phone (714) 627-5543 and contact@ocip.biz; placeholders removed.",
  "Services grouped around buyer decisions (driveway, patio, pool deck, outdoor living) instead of a leftover consulting-theme service grid.",
  "License #1071389 shown from CSLB as current/active B General Building — no fake awards or revenue.",
  "Operator /outreach route with before/after captures, talking points, and what not to say.",
];

const TALKING_POINTS = [
  "The gap is communication, not capability: real work and reviews are already public; the template is still showing.",
  "We rebuilt around the photographs that are actually Orange County jobs, and left catalog/listing images out of the ‘our work’ story.",
  "This is a speculative Novenworks demo — not a claim that we were hired, and not a claim that we own the photography.",
];

const HOOKS = [
  "Tyler is named in multiple first-party Yelp excerpts (Derrick, David, Shanice) — the site can sound like the same person the reviews describe.",
  "The About page still has ‘Partnership with ABC Bank’ and fake portraits; that’s a concrete, non-insulting observation.",
  "The live H1 is a satisfaction promise; the rest of the page doesn’t visually support it.",
];

export default function OutreachPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 text-ink">
      <p className="text-xs font-semibold tracking-[0.16em] text-clay uppercase">
        Operator only · noindex
      </p>
      <h1 className="font-display mt-2 text-4xl">OCIP outreach</h1>
      <p className="mt-3 text-sm text-muted">
        Speculative redesign packet. Not linked from the prospect-facing site.
      </p>

      <section className="mt-10 space-y-2 text-sm leading-relaxed">
        <h2 className="font-display text-2xl">Snapshot</h2>
        <p>
          <strong>Business:</strong> {SITE.displayName} ({SITE.shortName})
        </p>
        <p>
          <strong>Original:</strong>{" "}
          <a className="underline" href={SITE.urlOriginal}>
            {SITE.urlOriginal}
          </a>
        </p>
        <p>
          <strong>Demo:</strong> production URL after Vercel deploy (see README)
        </p>
        <p>
          <strong>Phone:</strong> {SITE.phoneDisplay}
        </p>
        <p>
          <strong>Email:</strong> {SITE.email}
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a className="underline" href={SITE.githubRepo}>
            {SITE.githubRepo}
          </a>
        </p>
        <p>
          <strong>License:</strong> CSLB #{SITE.licenseNumber}, {SITE.licenseClass},{" "}
          {SITE.licenseStatus} ({SITE.licenseChecked})
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Original-site observations</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          {OBSERVATIONS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Redesign improvements</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          {IMPROVEMENTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Talking points</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
          {TALKING_POINTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Personalization hooks</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          {HOOKS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">What not to say</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          <li>Do not insult the existing site, designer, or implied agency.</li>
          <li>Do not claim Novenworks was hired or that OCIP is a client.</li>
          <li>Do not claim ownership of prospect photography or the OCIP mark.</li>
          <li>Do not invent ROI, SEO rankings, lead volume, or performance lifts.</li>
          <li>
            Do not quote Yelp as “100% five-star” or other totals unless independently
            verified that day.
          </li>
          <li>
            Do not present manufacturer catalog images or CRMLS listing photos as
            completed OCIP jobs.
          </li>
          <li>Do not invent warranties, prices, staff size, or founding dates.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Subject lines</h2>
<ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>Tyler, I made something for OCIP</li>
          <li>Had an idea for the OCIP site</li>
          <li>Tried something with OCIP</li>
        </ol>
</section>

      <section className="mt-10 text-sm leading-relaxed">
        <h2 className="font-display text-2xl">Cold email</h2>
<pre className="mt-3 whitespace-pre-wrap text-sm leading-relaxed">{\`Hi Tyler,

I came across Orange County Interlocking Paving Co. (OCIP) and ended up spending some time looking through the site.

The real work is already the strongest part of the story.

I had an idea for how I'd present it, so I built a version instead of sending you a bunch of suggestions.

https://ocip-demo.vercel.app

Thought you might be curious to see it.

If you like the direction, I can show you what I changed.

Vincent
Novenworks\`}</pre>
</section>

      <section className="mt-10 text-sm leading-relaxed">
        <h2 className="font-display text-2xl">Follow-up</h2>
<pre className="mt-3 whitespace-pre-wrap text-sm leading-relaxed">{\`Hi Tyler,

Just bumping this once in case it got buried. I put together that Orange County Interlocking Paving Co. (OCIP) concept and wanted to make sure you saw it.

https://ocip-demo.vercel.app

All good if it's not something you're looking at right now.

Vincent\`}</pre>
</section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Captures</h2>
        <div className="mt-4 grid gap-6">
          {[
            ["before-original-desktop.png", "Before · original desktop"],
            ["after-desktop.png", "After · demo desktop"],
            ["after-mobile.png", "After · demo mobile"],
            ["after-scroll.gif", "After · scroll GIF"],
            ["after-scroll.mp4", "After · scroll MP4"],
          ].map(([file, label]) => (
            <figure key={file} className="border border-line bg-cream p-3">
              <figcaption className="mb-2 text-sm font-semibold">{label}</figcaption>
              {file.endsWith(".mp4") ? (
                <video
                  controls
                  src={`/outreach/${file}`}
                  className="w-full"
                />
              ) : (
                <Image
                  src={`/outreach/${file}`}
                  alt={label}
                  width={file.includes("mobile") ? 390 : 1440}
                  height={file.includes("mobile") ? 844 : 900}
                  className="h-auto w-full"
                  unoptimized={file.endsWith(".gif")}
                />
              )}
              <p className="mt-2 text-xs">
                <a className="underline" href={`/outreach/${file}`}>
                  Direct file
                </a>
              </p>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
