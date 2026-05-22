/**
 * GLAM BY DOVE — Site Header
 * Style: "Gilded Owambe" — translucent cream blur over warm content,
 * thin gold underline indicator on hover, Playfair wordmark + gold lozenge.
 */
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-[280ms]",
        scrolled
          ? "bg-[color:var(--cream)]/85 backdrop-blur-md border-b border-[color:var(--gold)]/20 shadow-[0_8px_30px_-20px_rgba(59,31,43,0.35)]"
          : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-[68px] md:h-[80px]">
        <Logo size="md" />

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[13px] font-medium tracking-[0.18em] uppercase text-[color:var(--cocoa)]/80 hover:text-[color:var(--aubergine)] transition-colors duration-200"
            >
              {item.label}
              <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-[color:var(--gold)] transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="foil-cta hidden sm:inline-flex items-center justify-center px-5 h-11 bg-[color:var(--aubergine)] text-[color:var(--cream)] text-[12px] font-semibold tracking-[0.22em] uppercase transition-transform active:scale-[0.97] hover:bg-[color:var(--aubergine-deep)]"
          >
            Book Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center size-11 -mr-2 text-[color:var(--cocoa)]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] bg-[color:var(--cream)]/98 backdrop-blur-md border-t border-[color:var(--gold)]/20",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container py-6 flex flex-col gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-[color:var(--gold)]/15 text-[15px] font-medium tracking-[0.16em] uppercase text-[color:var(--cocoa)]/85 hover:text-[color:var(--aubergine)] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center h-12 bg-[color:var(--aubergine)] text-[color:var(--cream)] text-[12px] font-semibold tracking-[0.22em] uppercase"
          >
            Book Your Session
          </a>
        </nav>
      </div>
    </header>
  );
}
