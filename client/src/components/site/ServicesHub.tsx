/**
 * GLAM BY DOVE — ServicesHub
 * Style: "Gilded Owambe" — three arched "ceremony cards" (Bridal, Owambe, Gele)
 * sitting on a deep aubergine band with gold rule and aso-pattern watermark.
 */
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const HUB = [
  {
    eyebrow: "N° 01",
    title: "Bridal",
    italic: "for the aisle",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-card-bridal-WP3b4sC7am2fAzRtzV3Efh.webp",
  },
  {
    eyebrow: "N° 02",
    title: "Owambe & Gele",
    italic: "for the celebration",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-card-gele-Hxkh9oWGk2WsV3utxLnN8t.webp",
  },
  {
    eyebrow: "N° 03",
    title: "Convocation",
    italic: "for the milestone",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-card-graduation-264cx4JLgzssMpcAwETHqt.webp",
  },
];

export function ServicesHub() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="relative bg-[color:var(--aubergine)] text-[color:var(--cream)] py-20 md:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="aso-pattern pointer-events-none absolute inset-0 opacity-25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/60 to-transparent"
      />

      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-14 md:mb-16">
          <span
            className="reveal eyebrow text-[color:var(--gold-soft)]"
            style={{ color: "var(--gold-soft)" }}
          >
            The Hub
          </span>
          <h2 className="reveal mt-3 font-display text-[clamp(2rem,3.4vw,2.85rem)] text-[color:var(--cream)]">
            Three signature{" "}
            <span className="font-italic-serif italic text-[color:var(--gold-soft)]">
              ceremonies
            </span>
            , one artist.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {HUB.map((card, i) => (
            <a
              key={card.title}
              href="#services"
              className="reveal group relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--aubergine)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden arch-frame border border-[color:var(--gold)]/40 bg-[color:var(--aubergine-deep)]">
                <img
                  src={card.image}
                  alt={`${card.title} reference`}
                  className="absolute inset-0 size-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[rgba(20,10,15,0.78)] via-[rgba(20,10,15,0.15)] to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-[10.5px] tracking-[0.28em] uppercase text-[color:var(--gold-soft)] font-semibold">
                      {card.eyebrow}
                    </div>
                    <div className="mt-1.5 font-display text-[22px] md:text-[26px] leading-tight text-[color:var(--cream)]">
                      {card.title}{" "}
                      <span className="font-italic-serif italic text-[color:var(--gold-soft)]/95 text-[18px] md:text-[20px]">
                        {card.italic}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center justify-center size-10 border border-[color:var(--gold)]/60 text-[color:var(--gold-soft)] transition-all duration-300 group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--aubergine)]">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
