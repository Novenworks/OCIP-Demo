import { REVIEWS, SITE } from "@/lib/site";

export function Reviews() {
  return (
    <section id="reviews" className="bg-char py-16 text-cream md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-sand uppercase">
          From the live site
        </p>
        <h2 className="font-display mt-3 text-3xl md:text-4xl">Reviews already on theocip.com</h2>
        <p className="mt-4 max-w-2xl text-sm text-cream/70">
          Quoted from the first-party homepage and attributed to Yelp. No rating
          totals invented here.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.name}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm leading-relaxed text-cream/90">“{review.quote}”</p>
              <footer className="mt-4 text-sm">
                <cite className="not-italic font-semibold">{review.name}</cite>
                <span className="text-cream/60"> · {review.place}</span>
                <a
                  href={review.href}
                  className="mt-1 block text-xs text-sand underline"
                >
                  Read on Yelp
                </a>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-6 text-sm">
          <a href={SITE.yelpUrl} className="text-sand underline">
            The Orange County Interlocking Paver Co. on Yelp
          </a>
        </p>
      </div>
    </section>
  );
}
