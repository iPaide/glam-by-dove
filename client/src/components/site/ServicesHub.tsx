/**
 * GLAM BY DOVE — ServicesHub
 * Style: "Gilded Owambe" — arched service cards sitting on a deep aubergine
 * band with gold rule and aso-pattern watermark.
 */
import { ArrowUpRight } from "lucide-react";
import { SERVICE_IMAGES } from "@/lib/brand";
import { useReveal } from "@/hooks/useReveal";

const HUB = [
  {
    eyebrow: "N° 01",
    title: "Bridal",
    italic: "for the aisle",
    href: "/services#service-bridal",
    image: SERVICE_IMAGES.bridal,
  },
  {
    eyebrow: "N° 02",
    title: "Owambe",
    italic: "for the celebration",
    href: "/services#service-owambe",
    image: SERVICE_IMAGES.owambe,
  },
  {
    eyebrow: "N° 03",
    title: "Birthday",
    italic: "for your spotlight",
    href: "/services#service-birthday",
    image: SERVICE_IMAGES.birthday,
  },
  {
    eyebrow: "N° 04",
    title: "Gele",
    italic: "for the crown",
    href: "/services#service-gele",
    image: SERVICE_IMAGES.gele,
  },
  {
    eyebrow: "N° 05",
    title: "Convocation",
    italic: "for the milestone",
    href: "/services#service-graduation",
    image: SERVICE_IMAGES.graduation,
  },
  {
    eyebrow: "N° 06",
    title: "Lessons",
    italic: "for your skill",
    href: "/lessons",
    image: SERVICE_IMAGES.lessons,
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
            Signature{" "}
            <span className="font-italic-serif italic text-[color:var(--gold-soft)]">
              services
            </span>
            , one artist.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {HUB.map((card, i) => (
            <a
              key={card.title}
              href={card.href}
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
