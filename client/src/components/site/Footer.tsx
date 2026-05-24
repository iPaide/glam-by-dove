/**
 * GLAM BY DOVE — Footer
 * Style: "Gilded Owambe" — deep aubergine ground, gold hairline rules,
 * Playfair brand mark, eyebrow uppercase nav, Cormorant italic sign-off.
 */
import { Logo } from "@/components/brand/Logo";
import { BRAND } from "@/lib/brand";
import { Instagram, Music2, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--aubergine-deep)] text-[color:var(--cream)] pt-16 pb-8 overflow-hidden">
      <div
        aria-hidden
        className="aso-pattern pointer-events-none absolute inset-0 opacity-[0.10]"
      />
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo variant="light" size="lg" />
            <p className="mt-5 max-w-[40ch] text-[14.5px] leading-[1.75] text-[color:var(--cream)]/70">
              Luxury bridal makeup, Owambe glam, birthday glam, gele artistry,
              graduation looks, and makeup lessons — for your most memorable
              moments.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center size-10 border border-[color:var(--gold)]/40 text-[color:var(--gold-soft)] hover:bg-[color:var(--gold)] hover:text-[color:var(--aubergine)] transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={BRAND.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex items-center justify-center size-10 border border-[color:var(--gold)]/40 text-[color:var(--gold-soft)] hover:bg-[color:var(--gold)] hover:text-[color:var(--aubergine)] transition-colors"
              >
                <Music2 className="size-4" />
              </a>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center size-10 border border-[color:var(--gold)]/40 text-[color:var(--gold-soft)] hover:bg-[color:var(--gold)] hover:text-[color:var(--aubergine)] transition-colors"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                aria-label="Call"
                className="inline-flex items-center justify-center size-10 border border-[color:var(--gold)]/40 text-[color:var(--gold-soft)] hover:bg-[color:var(--gold)] hover:text-[color:var(--aubergine)] transition-colors"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10.5px] tracking-[0.28em] uppercase text-[color:var(--gold-soft)] font-semibold">
              Explore
            </div>
            <ul className="mt-5 space-y-3 text-[14px]">
              {[
                ["Services", "/services"],
                ["Portfolio", "/portfolio"],
                ["Lessons", "/lessons"],
                ["Reviews", "/#testimonials"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[color:var(--cream)]/75 hover:text-[color:var(--gold-soft)] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10.5px] tracking-[0.28em] uppercase text-[color:var(--gold-soft)] font-semibold">
              Contact
            </div>
            <ul className="mt-5 space-y-3 text-[14px] text-[color:var(--cream)]/80">
              <li>
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-[color:var(--gold-soft)] transition-colors">
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-[color:var(--gold-soft)] transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--gold-soft)] transition-colors"
                >
                  Instagram · {BRAND.handle}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--gold-soft)] transition-colors"
                >
                  TikTok · {BRAND.tiktokHandle}
                </a>
              </li>
              <li className="font-italic-serif italic text-[color:var(--cream)]/70 pt-2">
                Based in {BRAND.baseCity}; available to travel by agreement.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[color:var(--gold)]/25 flex flex-col md:flex-row items-center justify-between gap-3 text-[11.5px] tracking-[0.18em] uppercase text-[color:var(--cream)]/55">
          <span>© {new Date().getFullYear()} Glam By Dove. All rights reserved.</span>
          <span className="font-italic-serif italic normal-case tracking-normal text-[color:var(--gold-soft)]/85">
            Crafted with care · GBD
          </span>
        </div>
      </div>
    </footer>
  );
}
