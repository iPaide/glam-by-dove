/**
 * GLAM BY DOVE — Hero
 * Style: "Gilded Owambe" — left text column with display serif headline,
 * right column with an arched (gele-shaped) portrait over an aubergine plinth
 * and a soft aso-pattern watermark. Asymmetric, magazine-cover energy.
 */
import { ArrowRight } from "lucide-react";
import { BRAND, HERO, HERO_IMAGE } from "@/lib/brand";
import { useReveal } from "@/hooks/useReveal";

export function Hero() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="top"
      ref={ref}
      className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Soft aso-pattern watermark on the bottom-left */}
      <div
        aria-hidden
        className="aso-pattern pointer-events-none absolute -left-20 -bottom-20 w-[460px] h-[460px] opacity-40 blur-[0.3px]"
      />
      {/* Gold glow on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 size-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,75,0.25),transparent_60%)]"
      />

      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Text column */}
        <div className="lg:col-span-6 xl:col-span-7 relative z-10 order-2 lg:order-1">
          <div className="reveal">
            <span className="eyebrow">{HERO.eyebrow}</span>
          </div>

          <h1 className="reveal mt-5 font-display text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.02] text-[color:var(--cocoa)]">
            {HERO.headline}{" "}
            <span className="font-italic-serif italic text-[color:var(--aubergine)]">
              {HERO.headlineItalic}
            </span>
            <span className="text-[color:var(--gold)]">.</span>
          </h1>

          <p
            className="reveal mt-6 max-w-[54ch] text-[15.5px] md:text-base leading-[1.75] text-[color:var(--cocoa)]/75"
            style={{ transitionDelay: "80ms" }}
          >
            {HERO.body}
          </p>

          <div
            className="reveal mt-8 flex flex-wrap items-center gap-4"
            style={{ transitionDelay: "160ms" }}
          >
            <a
              href="#contact"
              className="foil-cta inline-flex items-center justify-center gap-2 h-12 px-7 bg-[color:var(--aubergine)] text-[color:var(--cream)] text-[12.5px] font-semibold tracking-[0.22em] uppercase transition-transform active:scale-[0.97] hover:bg-[color:var(--aubergine-deep)]"
            >
              Book Your Session
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 h-12 px-1 text-[12.5px] font-semibold tracking-[0.22em] uppercase text-[color:var(--cocoa)] hover:text-[color:var(--aubergine)] transition-colors"
            >
              <span className="relative">
                View the Portfolio
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 bg-[color:var(--gold)]/70 transition-transform duration-300 group-hover:scale-x-110" />
              </span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Cities ribbon */}
          <div
            className="reveal mt-12 flex items-center gap-4 text-[11px] tracking-[0.28em] uppercase text-[color:var(--cocoa)]/60"
            style={{ transitionDelay: "240ms" }}
          >
            <span className="inline-block size-1.5 rotate-45 bg-[color:var(--gold)]" />
            Proudly serving {BRAND.cities.join(" · ")} & destination events
          </div>
        </div>

        {/* Image column — arched gele portrait */}
        <div className="lg:col-span-6 xl:col-span-5 relative order-1 lg:order-2">
          <div className="reveal relative mx-auto max-w-[460px]" style={{ transitionDelay: "120ms" }}>
            {/* Aubergine plinth behind the arch */}
            <div
              aria-hidden
              className="absolute inset-x-6 -bottom-6 h-32 bg-[color:var(--aubergine)]/95"
            />
            {/* Gold halo */}
            <div
              aria-hidden
              className="absolute -inset-3 rounded-t-[300px] border border-[color:var(--gold)]/40"
            />
            {/* Arched portrait */}
            <div className="arch-frame relative aspect-[3/4] bg-[color:var(--aubergine)] shadow-[0_30px_80px_-30px_rgba(59,31,43,0.55)]">
              <img
                src={HERO_IMAGE}
                alt="Glam By Dove bridal model wearing a gold aso-oke gele"
                className="absolute inset-0 size-full object-cover object-top"
                loading="eager"
                fetchPriority="high"
              />
              {/* Warm vignette to deepen the aubergine background */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_50%,rgba(59,31,43,0.45)_100%)]"
              />
            </div>

            {/* Floating caption card */}
            <div
              className="absolute -bottom-6 left-4 sm:-left-6 bg-[color:var(--cream)] border border-[color:var(--gold)]/35 px-5 py-3.5 shadow-[0_18px_40px_-20px_rgba(59,31,43,0.45)]"
            >
              <div className="text-[10.5px] tracking-[0.28em] uppercase text-[color:var(--gold)] font-semibold">
                Featured · Bridal
              </div>
              <div className="mt-1 font-display italic text-[15px] text-[color:var(--cocoa)]">
                "The Royal Bridal"
              </div>
            </div>

            {/* Top-right monogram */}
            <div className="absolute -top-3 right-2 text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold)] font-semibold">
              GBD · Est.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
