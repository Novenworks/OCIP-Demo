import { PROCESS } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="border-y border-line bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-clay uppercase">
          Process
        </p>
        <h2 className="font-display mt-3 text-3xl md:text-4xl">A straight path to a finished yard.</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {PROCESS.map((item) => (
            <li key={item.step} className="rounded-xl border border-line bg-paper p-5">
              <span className="text-xs font-semibold tracking-[0.16em] text-clay">
                {item.step}
              </span>
              <h3 className="font-display mt-2 text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
