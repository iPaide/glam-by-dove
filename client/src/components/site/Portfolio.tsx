/**
 * GLAM BY DOVE — Portfolio
 * Style: "Gilded Owambe" — filterable masonry-feel grid with arch-topped tiles
 * over a champagne cream surface. Filter chips use thin gold borders.
 */
import { useMemo, useState } from "react";
import { GALLERY } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

type Filter = "all" | "bridal" | "owambe" | "gele" | "graduation" | "details";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All Looks" },
  { id: "bridal", label: "Bridal" },
  { id: "owambe", label: "Owambe" },
  { id: "gele", label: "Gele" },
  { id: "graduation", label: "Convocation" },
  { id: "details", label: "Details" },
];

export function Portfolio() {
  const ref = useReveal<HTMLElement>();
  const [filter, setFilter] = useState<Filter>("all");

  const items = useMemo(() => {
    if (filter === "all") return GALLERY;
    return GALLERY.filter((g) => g.category === filter);
  }, [filter]);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-24 md:py-32 bg-[color:var(--cream)]"
    >
      <div
        aria-hidden
        className="aso-pattern pointer-events-none absolute inset-0 opacity-[0.18]"
      />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="reveal eyebrow">The Portfolio</span>
            <h2 className="reveal mt-3 font-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] text-[color:var(--cocoa)] max-w-[20ch]">
              Real clients,{" "}
              <span className="font-italic-serif italic text-[color:var(--aubergine)]">
                real moments
              </span>
              .
            </h2>
          </div>
          <p
            className="reveal max-w-[42ch] text-[14.5px] leading-[1.75] text-[color:var(--cocoa)]/70"
            style={{ transitionDelay: "100ms" }}
          >
            A selection of recent bridal, Owambe, gele, and convocation work —
            shot in natural and studio light. Filter to see your moment.
          </p>
        </div>

        <div className="reveal flex flex-wrap gap-2 md:gap-3 mb-10">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "h-10 px-4 text-[11.5px] font-semibold tracking-[0.22em] uppercase border transition-all duration-200 active:scale-[0.97]",
                  active
                    ? "bg-[color:var(--aubergine)] border-[color:var(--aubergine)] text-[color:var(--cream)]"
                    : "border-[color:var(--gold)]/40 text-[color:var(--cocoa)]/80 hover:border-[color:var(--aubergine)] hover:text-[color:var(--aubergine)]",
                )}
                aria-pressed={active}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {items.map((g, i) => (
            <figure
              key={g.id}
              className="reveal group relative overflow-hidden bg-[color:var(--aubergine)]/5"
              style={{ transitionDelay: `${(i % 8) * 50}ms` }}
            >
              <div
                className={cn(
                  "relative aspect-square overflow-hidden",
                  i % 5 === 0 && "arch-frame",
                )}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[rgba(20,10,15,0.55)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] text-[color:var(--cream)]">
                  <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--gold-soft)] font-semibold">
                    {g.category === "details" ? "Details" : g.category}
                  </div>
                  <div className="mt-0.5 font-italic-serif italic text-[14px] md:text-[15px]">
                    {g.alt}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/itz_dovesglam/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.24em] uppercase text-[color:var(--aubergine)]"
          >
            <span className="relative">
              See more on Instagram @itz_dovesglam
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-[color:var(--gold)]/70" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
