import { CAPABILITIES } from "@/lib/site";

export function Capabilities() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-clay uppercase">
        Also on the truck
      </p>
      <h2 className="font-display mt-3 text-3xl md:text-4xl">Secondary work, listed without noise.</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((group) => (
          <div key={group.title}>
            <h3 className="font-semibold">{group.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
