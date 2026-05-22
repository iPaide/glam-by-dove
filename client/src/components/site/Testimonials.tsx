/**
 * GLAM BY DOVE — Testimonials
 * Style: "Gilded Owambe" — three editorial quote cards on cream paper,
 * gold quotation glyph, hairline gold rules, italic serif quotes.
 */
import { TESTIMONIALS } from "@/lib/brand";
import { useReveal } from "@/hooks/useReveal";

export function Testimonials() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 md:py-32 bg-[color:var(--cream)]"
    >
      <div className="container">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="reveal eyebrow">Kind Words</span>
          <h2 className="reveal mt-3 font-display text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.05] text-[color:var(--cocoa)] max-w-[22ch]">
            What clients{" "}
            <span className="font-italic-serif italic text-[color:var(--aubergine)]">
              say
            </span>
            .
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal relative bg-[color:var(--card)] border border-[color:var(--gold)]/25 p-7 md:p-8 shadow-[0_18px_40px_-30px_rgba(59,31,43,0.35)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                aria-hidden
                className="absolute -top-3 left-6 font-display text-[60px] leading-none text-[color:var(--gold)]/70 select-none"
              >
                &ldquo;
              </span>
              <blockquote className="font-italic-serif italic text-[17px] md:text-[18px] leading-[1.6] text-[color:var(--cocoa)]">
                {t.quote}
              </blockquote>
              <div className="mt-6 gold-rule" aria-hidden>
                <span className="lozenge" />
              </div>
              <figcaption className="mt-5">
                <div className="font-display text-[16px] text-[color:var(--aubergine)]">
                  {t.name}
                </div>
                <div className="mt-1 text-[11px] tracking-[0.18em] uppercase text-[color:var(--cocoa)]/65">
                  {t.role} · {t.city}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
