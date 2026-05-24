/**
 * GLAM BY DOVE — Booking flow
 * Style: "Gilded Owambe" — practical client confidence in a ceremonial frame.
 */
import { CalendarCheck, Gem, MessageCircle, WalletCards } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { useReveal } from "@/hooks/useReveal";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Send your details",
    body: "Share your event date, city, service, outfit color, aso-ebi shade, and any inspiration.",
  },
  {
    icon: CalendarCheck,
    title: "Confirm availability",
    body: "Dove confirms timing, travel needs, party size, and the exact package for your day.",
  },
  {
    icon: WalletCards,
    title: "Secure the date",
    body: "Full upfront payment secures your slot once the quote is agreed. Payments are non-refundable.",
  },
  {
    icon: Gem,
    title: "Arrive and glow",
    body: "Skin prep, long-wear glam, lashes, and gele styling are handled before the celebration begins.",
  },
];

const BRIDAL_POINTS = [
  "Traditional, introduction, and white wedding looks",
  "Optional bridal trial and touch-up planning",
  "Gele, lashes, skin prep, and aso-ebi coordination",
  "Travel available for bridal prep locations",
];

export function BookingFlow() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 bg-[color:var(--cream)] border-b border-[color:var(--gold)]/15 overflow-hidden"
    >
      <div
        aria-hidden
        className="aso-pattern pointer-events-none absolute right-[-120px] top-[-80px] size-[360px] opacity-[0.20]"
      />

      <div className="container relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <span className="reveal eyebrow">How Booking Works</span>
          <h2 className="reveal mt-3 font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] text-[color:var(--cocoa)]">
            Your date,{" "}
            <span className="font-italic-serif italic text-[color:var(--aubergine)]">
              beautifully handled
            </span>
            .
          </h2>
          <p
            className="reveal mt-5 max-w-[50ch] text-[15px] leading-[1.75] text-[color:var(--cocoa)]/72"
            style={{ transitionDelay: "80ms" }}
          >
            From the first WhatsApp message to the final lip touch-up, the
            process stays clear, personal, and ready for a proper celebration.
          </p>

          <div
            className="reveal mt-8 bg-[color:var(--aubergine)] text-[color:var(--cream)] p-6 md:p-7 relative overflow-hidden"
            style={{ transitionDelay: "140ms" }}
          >
            <div
              aria-hidden
              className="aso-pattern pointer-events-none absolute inset-0 opacity-[0.16]"
            />
            <div className="relative">
              <div className="text-[10.5px] tracking-[0.28em] uppercase text-[color:var(--gold-soft)] font-semibold">
                Bridal Priority
              </div>
              <h3 className="mt-2 font-display text-[26px] leading-tight text-[color:var(--cream)]">
                Custom bridal{" "}
                <span className="font-italic-serif italic text-[color:var(--gold-soft)]">
                  quotes
                </span>
              </h3>
              <ul className="mt-5 grid gap-3">
                {BRIDAL_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[14px] leading-[1.55] text-[color:var(--cream)]/82"
                  >
                    <span className="mt-2 inline-block size-1.5 rotate-45 bg-[color:var(--gold-soft)] flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="foil-cta mt-6 inline-flex h-11 items-center justify-center px-5 bg-[color:var(--gold)] text-[color:var(--aubergine)] text-[11.5px] font-bold tracking-[0.2em] uppercase active:scale-[0.97] transition-transform"
              >
                Check Bridal Availability
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="reveal bg-[color:var(--card)] border border-[color:var(--gold)]/25 p-5 md:p-6 shadow-[0_16px_42px_-34px_rgba(59,31,43,0.45)]"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex size-11 items-center justify-center border border-[color:var(--gold)]/45 text-[color:var(--aubergine)]">
                    <Icon className="size-4" />
                  </span>
                  <span className="font-display text-[22px] text-[color:var(--gold)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[22px] leading-tight text-[color:var(--cocoa)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-[color:var(--cocoa)]/70">
                  {step.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
