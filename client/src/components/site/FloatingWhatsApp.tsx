/**
 * GLAM BY DOVE — Floating WhatsApp button
 * Style: "Gilded Owambe" — bottom-right floating action with a soft pulse
 * (like a celebration bell), gold ring on hover.
 */
import { BRAND } from "@/lib/brand";
import { useEffect, useState } from "react";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Glam By Dove on WhatsApp"
      className={`fixed bottom-5 right-5 z-50 hidden md:block transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="pulse-soft inline-flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-15px_rgba(37,211,102,0.55)] ring-1 ring-[color:var(--gold)]/40 hover:ring-2">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className="size-6"
        >
          <path d="M19.11 17.27c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.61.13-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.15-1.32-.79-.7-1.32-1.57-1.48-1.84-.16-.27-.02-.41.12-.55.13-.13.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.06-.13-.61-1.46-.83-2-.22-.53-.44-.46-.61-.47-.16 0-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.13.18 1.93 2.94 4.67 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.81-1.27.22-.62.22-1.16.16-1.27-.06-.11-.25-.18-.52-.31zM12.04 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.49 1.34 5.01L2 22l5.13-1.34c1.46.79 3.1 1.21 4.78 1.21h.01c5.5 0 9.96-4.46 9.96-9.96-.01-2.66-1.04-5.16-2.92-7.04-1.88-1.88-4.38-2.91-7.02-2.92zm0 18.05c-1.51 0-2.99-.4-4.28-1.17l-.31-.18-3.04.79.81-2.96-.2-.31c-.85-1.34-1.3-2.89-1.3-4.48 0-4.62 3.76-8.39 8.39-8.39 2.24 0 4.34.87 5.92 2.46 1.58 1.58 2.46 3.69 2.46 5.93-.01 4.62-3.78 8.31-8.45 8.31z" />
        </svg>
      </span>
    </a>
  );
}
