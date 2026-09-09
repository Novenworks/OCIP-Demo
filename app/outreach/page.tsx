import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outreach — OCIP Demo (operator only)",
  robots: { index: false, follow: false },
};

export default function OutreachPage() {
  return (
    <main className="bg-[#f6f1ea] text-[#1b1713]">
      <div className="mx-auto max-w-3xl px-5 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b45a32]">
          Operator only · noindex · unlinked
        </p>
        <h1 className="mt-3 font-display text-4xl">OCIP outreach brief</h1>
        <p className="mt-2 text-sm text-[#5c534b]">
          Speculative Novenworks redesign. Prospect is not a client.
        </p>
        <section className="mt-8 space-y-2 text-sm">
          <p><strong>Business:</strong> {SITE.legal}</p>
          <p><strong>Original:</strong> {SITE.originalUrl}</p>
          <p><strong>Demo:</strong> {SITE.demoUrl}</p>
          <p><strong>GitHub:</strong> {SITE.github}</p>
          <p><strong>Phone:</strong> {SITE.phoneDisplay}</p>
          <p><strong>Email:</strong> {SITE.email}</p>
        </section>
        <section className="mt-8 text-sm space-y-2">
          <h2 className="text-xl font-semibold">Observations</h2>
          <p>Footer still ships Lorem Ipsum address copy and placeholder phone/email next to a real tel:7146275543 button.</p>
          <p>WordPress + Elementor. No agency credit.</p>
          <p>Unrelated blog posts on the same domain.</p>
        </section>
        <section className="mt-8 text-sm space-y-2">
          <h2 className="text-xl font-semibold">What not to say</h2>
          <p>Do not insult the existing site. Do not imply Novenworks was hired. Do not claim ownership of photography. Do not invent ROI or review totals.</p>
        </section>
      </div>
    </main>
  );
}
