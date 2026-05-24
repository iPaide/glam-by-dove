/**
 * GLAM BY DOVE — About / Meet the Artist
 * Style: "Gilded Owambe" — split layout with arched portrait on the left,
 * editorial copy on the right, gold rule and signature quote.
 */
import { ARTIST_IMAGE, BRAND } from "@/lib/brand";
import { useReveal } from "@/hooks/useReveal";

export function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-[color:var(--aubergine)] text-[color:var(--cream)] overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 size-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,75,0.22),transparent_60%)]"
      />
      <div
        aria-hidden
        className="aso-pattern pointer-events-none absolute inset-0 opacity-[0.18]"
      />

      <div className="container relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Portrait */}
        <div className="reveal lg:col-span-5">
          <div className="relative max-w-[440px] mx-auto">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-t-[260px] border border-[color:var(--gold)]/40"
            />
            <div className="arch-frame relative aspect-[3/4] bg-[color:var(--aubergine-deep)] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] overflow-hidden">
              <img
                src={ARTIST_IMAGE}
                alt="Dove, founder and lead artist of Glam By Dove"
                className="absolute inset-0 size-full object-cover object-[center_42%]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-3 sm:-right-6 bg-[color:var(--cream)] text-[color:var(--cocoa)] px-5 py-3 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.5)]">
              <div className="text-[10.5px] tracking-[0.28em] uppercase text-[color:var(--gold)] font-semibold">
                Lead Makeup Artist
              </div>
              <div className="mt-1 font-display italic text-[15px]">Dove</div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <div className="reveal">
            <span
              className="eyebrow"
              style={{ color: "var(--gold-soft)" }}
            >
              Meet Dove
            </span>
          </div>
          <h2
            className="reveal mt-3 font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.06] text-[color:var(--cream)]"
            style={{ transitionDelay: "60ms" }}
          >
            The artist behind{" "}
            <span className="font-italic-serif italic text-[color:var(--gold-soft)]">
              the glow
            </span>
            .
          </h2>

          <div
            className="reveal mt-7 space-y-5 max-w-[58ch] text-[15px] md:text-[15.5px] leading-[1.8] text-[color:var(--cream)]/85"
            style={{ transitionDelay: "120ms" }}
          >
            <p>
              Dove is the founder and lead makeup artist behind {BRAND.name}{" "}
              <span className="font-italic-serif italic text-[color:var(--gold-soft)]">
                ({BRAND.handle})
              </span>
              . With 5+ years of hands-on beauty experience, she creates calm,
              polished glam for Nigerian brides, Owambe guests, birthdays,
              shoots, convocation days, and women who want to learn their own
              face with confidence.
            </p>
            <p>
              Based in {BRAND.baseCity}, she is close to Akure and Ibadan and
              available to travel when timing and logistics are agreed. Every
              booking is handled with attention to skin prep, long wear,
              photography, ready-by time, and the little details that make a
              look feel finished in person and on camera.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Bridal, Owambe, gele, birthday, and lessons",
                "Ado-Ekiti based, available to travel by agreement",
                "Skin-first prep with soft or full glam finishes",
                "Instant WhatsApp response for date checks",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 border border-[color:var(--gold)]/20 bg-[color:var(--cream)]/[0.04] px-4 py-3"
                >
                  <span className="mt-2 inline-block size-1.5 rotate-45 bg-[color:var(--gold-soft)]" />
                  <span className="text-[13.5px] leading-[1.6] text-[color:var(--cream)]/82">
                    {point}
                  </span>
                </div>
              ))}
            </div>
            <p>
              Whether you are walking down the aisle, stepping out for a grand
              Owambe, or preparing for a milestone shoot, Dove's work is built
              around one promise: your glam should feel comfortable, elegant,
              and unforgettable.
            </p>
            <p className="font-italic-serif italic text-[18px] md:text-[19px] text-[color:var(--gold-soft)]">
              "Beauty should feel personal. My job is to listen, refine the
              details, and give you a look you can carry with confidence."
            </p>
          </div>

          <div
            className="reveal mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-[color:var(--gold)]/30 pt-6"
            style={{ transitionDelay: "180ms" }}
          >
            {[
              { k: "5+", v: "Years of beauty work" },
              { k: "Ado", v: "Based in Ekiti" },
              { k: "NG", v: "Travel by agreement" },
            ].map((stat) => (
              <div key={stat.v}>
                <div className="font-display text-[28px] md:text-[32px] text-[color:var(--gold-soft)] leading-none">
                  {stat.k}
                </div>
                <div className="mt-2 text-[11px] tracking-[0.18em] uppercase text-[color:var(--cream)]/70">
                  {stat.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
