/**
 * GLAM BY DOVE — Services menu
 * Style: "Gilded Owambe" — alternating editorial rows: image on one side
 * (arched on top), descriptive copy on the other, separated by gold hairline rules.
 */
import { Check } from "lucide-react";
import { SERVICES, type ServiceCategory } from "@/lib/brand";
import { useReveal } from "@/hooks/useReveal";

interface ServicesProps {
  initialService?: ServiceCategory;
  onlyService?: ServiceCategory;
  eyebrow?: string;
  title?: string;
  italic?: string;
  body?: string;
}

export function Services({
  initialService,
  onlyService,
  eyebrow = "The Menu",
  title = "Services &",
  italic = "rates",
  body = "Every booking begins with your event details: date, city, outfit, aso-ebi shade, and ready-by time. Travel and on-site styling are available across Southwestern Nigeria and beyond.",
}: ServicesProps) {
  const ref = useReveal<HTMLElement>();
  const availableServices = onlyService
    ? SERVICES.filter((service) => service.id === onlyService)
    : SERVICES;
  const services = initialService
    ? [
        ...availableServices.filter((service) => service.id === initialService),
        ...availableServices.filter((service) => service.id !== initialService),
      ]
    : availableServices;

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32 bg-[color:var(--cream)]"
    >
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="reveal eyebrow">{eyebrow}</span>
          <h2 className="reveal mt-3 font-display text-[clamp(2.1rem,4vw,3.25rem)] leading-[1.05] text-[color:var(--cocoa)]">
            {title}{" "}
            <span className="font-italic-serif italic text-[color:var(--aubergine)]">
              {italic}
            </span>
          </h2>
          <p
            className="reveal mt-5 max-w-[58ch] text-[15px] md:text-[15.5px] leading-[1.75] text-[color:var(--cocoa)]/70"
            style={{ transitionDelay: "100ms" }}
          >
            {body}
          </p>
          <div
            className="reveal mt-7 gold-rule w-full max-w-[420px]"
            style={{ transitionDelay: "160ms" }}
            aria-hidden
          >
            <span className="lozenge" />
          </div>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.id}
                id={`service-${s.id}`}
                className="scroll-mt-24 md:scroll-mt-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Image */}
                <div
                  className={`reveal md:col-span-6 ${reverse ? "md:order-2" : ""}`}
                >
                  <div className="relative max-w-[520px] mx-auto">
                    <div
                      aria-hidden
                      className="absolute -inset-3 rounded-t-[260px] border border-[color:var(--gold)]/35"
                    />
                    <div className="arch-frame relative aspect-[4/5] bg-[color:var(--aubergine)] shadow-[0_30px_70px_-30px_rgba(59,31,43,0.45)] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="absolute inset-0 size-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-4 left-3 bg-[color:var(--cream)] border border-[color:var(--gold)]/30 px-4 py-2 shadow-[0_14px_30px_-18px_rgba(59,31,43,0.4)]">
                      <div className="text-[10.5px] tracking-[0.28em] uppercase text-[color:var(--gold)] font-semibold">
                        {s.number}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div
                  className={`reveal md:col-span-6 ${reverse ? "md:order-1" : ""}`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <div className="text-[10.5px] tracking-[0.28em] uppercase text-[color:var(--gold)] font-semibold">
                    {s.number}
                  </div>
                  <h3 className="mt-2 font-display text-[clamp(1.7rem,2.6vw,2.4rem)] leading-[1.05] text-[color:var(--cocoa)]">
                    {s.name}{" "}
                    <span className="block font-italic-serif italic text-[color:var(--aubergine)] text-[0.7em] mt-1">
                      {s.italic}
                    </span>
                  </h3>
                  <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.75] text-[color:var(--cocoa)]/75">
                    {s.blurb}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {s.inclusions.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-start gap-3 text-[14.5px] text-[color:var(--cocoa)]/80"
                      >
                        <span className="mt-[7px] inline-block size-1.5 rotate-45 bg-[color:var(--gold)] flex-shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-end justify-between gap-6 border-t border-[color:var(--gold)]/30 pt-5">
                    <div>
                      <div className="text-[10.5px] tracking-[0.28em] uppercase text-[color:var(--cocoa)]/55 font-semibold">
                        Starting Rate
                      </div>
                      <div className="mt-1 font-display text-[22px] md:text-[26px] text-[color:var(--aubergine)]">
                        {s.price}
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center h-11 px-5 border border-[color:var(--aubergine)] text-[color:var(--aubergine)] text-[11.5px] font-semibold tracking-[0.22em] uppercase hover:bg-[color:var(--aubergine)] hover:text-[color:var(--cream)] transition-all duration-200 active:scale-[0.97]"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
