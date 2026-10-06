import { SITE } from "@/lib/site";

const ITEMS = [
  {
    label: "CSLB license",
    value: `#${SITE.licenseNumber}`,
    detail: `${SITE.licenseClass}. ${SITE.licenseStatus}.`,
  },
  {
    label: "Based in",
    value: "Orange, CA",
    detail: "Serving Orange County homes.",
  },
  {
    label: "Estimate",
    value: "Free estimate",
    detail: "Request one below or give us a call.",
  },
  {
    label: "Call",
    value: SITE.phoneDisplay,
    detail: "Talk to Tyler and the crew.",
  },
] as const;

export function ProofStrip() {
  return (
    <section className="border-b border-line bg-cream" aria-label="Key facts">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <p key={item.label} className="text-sm">
            <span className="block text-[0.7rem] font-semibold tracking-[0.16em] text-clay uppercase">
              {item.label}
            </span>
            <span className="mt-1 block font-semibold text-ink">{item.value}</span>
            <span className="mt-1 block text-muted">{item.detail}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
