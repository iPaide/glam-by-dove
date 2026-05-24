/**
 * GLAM BY DOVE — Mobile booking bar
 * Keeps the two highest-intent actions reachable after the hero.
 */
import { CalendarCheck, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/brand";

export function MobileBookingBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 md:hidden border-t border-[color:var(--gold)]/25 bg-[color:var(--cream)]/95 px-4 py-3 shadow-[0_-18px_42px_-30px_rgba(59,31,43,0.55)] backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="grid grid-cols-2 gap-3">
        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 border border-[color:var(--aubergine)] bg-[color:var(--aubergine)] px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--cream)] active:scale-[0.97] transition-transform"
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </a>
        <a
          href="/contact"
          className="inline-flex h-11 items-center justify-center gap-2 border border-[color:var(--gold)]/55 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--aubergine)] active:scale-[0.97] transition-transform"
        >
          <CalendarCheck className="size-4" />
          Check Date
        </a>
      </div>
    </div>
  );
}
