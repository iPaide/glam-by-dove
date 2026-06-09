import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { DocumentMeta } from "@/components/site/DocumentMeta";

const launchNotes = [
  "Bridal makeup",
  "Gele artistry",
  "Owambe glam",
  "Birthday looks",
  "Makeup lessons",
];

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[color:var(--aubergine)] text-[color:var(--cream)]">
      <DocumentMeta
        title="Glam By Dove — Website Coming Soon | Ado-Ekiti Makeup Artist"
        description="Glam By Dove is preparing a new website for bridal makeup, gele styling, Owambe glam, birthday looks, and makeup lessons in Ado-Ekiti. Bookings are open via WhatsApp."
        path="/"
      />

      <div
        aria-hidden
        className="aso-pattern pointer-events-none absolute -left-24 top-8 size-[540px] opacity-20"
      />
      <div
        aria-hidden
        className="aso-pattern pointer-events-none absolute -bottom-32 right-0 size-[620px] opacity-16"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(201,162,75,0.28),transparent_34%),linear-gradient(135deg,rgba(36,16,26,0.88),rgba(92,44,61,0.7))]"
      />

      <main className="relative z-10 flex min-h-screen items-center px-5 py-10">
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div>
            <div className="inline-flex items-center gap-3 border border-[color:var(--gold)]/42 bg-[color:var(--cream)]/7 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">
              <span className="inline-block size-1.5 rotate-45 bg-[color:var(--gold)]" />
              Launch preview
            </div>

            <h1 className="mt-7 max-w-[10ch] font-display text-[clamp(3.35rem,10vw,7.65rem)] leading-[0.88] text-[color:var(--cream)]">
              Website
              <span className="block font-italic-serif italic text-[color:var(--gold)]">
                coming soon
              </span>
            </h1>

            <p className="mt-7 max-w-[58ch] text-[15.5px] leading-[1.85] text-[color:var(--cream)]/78 md:text-lg">
              Glam By Dove is preparing a refined online experience for beauty bookings in
              Ado-Ekiti. Until the full reveal, bookings are open directly via WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {launchNotes.map((note) => (
                <span
                  key={note}
                  className="border border-[color:var(--gold)]/32 bg-[color:var(--cream)]/6 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--cream)]/78"
                >
                  {note}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={BRAND.whatsappUrl}
                className="inline-flex h-12 items-center justify-center gap-2 bg-[color:var(--cream)] px-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-[color:var(--aubergine)] transition-transform active:scale-[0.98]"
              >
                <MessageCircle className="size-4" />
                Book on WhatsApp
              </a>
              <a
                href={BRAND.instagramUrl}
                className="inline-flex h-12 items-center justify-center gap-2 border border-[color:var(--gold)]/45 px-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-[color:var(--cream)] transition-colors hover:bg-[color:var(--cream)]/8"
              >
                <Instagram className="size-4" />
                Follow Instagram
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute inset-8 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
            <div className="relative border border-[color:var(--gold)]/42 bg-[color:var(--cream)]/[0.07] p-8 shadow-[0_38px_100px_-42px_rgba(0,0,0,0.72)] backdrop-blur">
              <div className="mx-auto flex aspect-square max-w-[300px] items-center justify-center rounded-full border border-[color:var(--gold)]/24 bg-[color:var(--aubergine-deep)]/72 p-10">
                <img
                  src="/glam-by-dove-icon.svg"
                  alt="Glam By Dove logo"
                  className="size-full object-contain"
                />
              </div>
              <div className="mt-8 text-center">
                <p className="font-display text-[44px] leading-none text-[color:var(--cream)]">
                  GLAM
                  <span className="ml-2 font-italic-serif text-[28px] italic text-[color:var(--gold)]">
                    by Dove
                  </span>
                </p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-[color:var(--cream)]/62">
                  Makeup Studio & Academy
                </p>
              </div>
              <div className="mt-8 border-t border-[color:var(--gold)]/24 pt-6 text-center text-[13px] leading-relaxed text-[color:var(--cream)]/72">
                <p>Based in {BRAND.baseCity}</p>
                <p className="mt-1">WhatsApp: {BRAND.phoneDisplay}</p>
                <a
                  href={BRAND.whatsappUrl}
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]"
                >
                  Start booking
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
