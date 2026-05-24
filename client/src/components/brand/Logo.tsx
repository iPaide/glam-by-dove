/**
 * GLAM BY DOVE — Logo / Wordmark
 * Style: "Gilded Owambe" — Playfair display in aubergine with a small gold lozenge.
 * Always pair the wordmark with the lozenge mark for brand cohesion.
 */
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  showLozenge?: boolean;
}

export function Logo({
  variant = "dark",
  size = "md",
  className,
  showLozenge = true,
}: LogoProps) {
  const text =
    variant === "dark" ? "text-[var(--aubergine)]" : "text-[var(--cream)]";
  const sizes = {
    sm: "text-[15px] tracking-[0.22em]",
    md: "text-[17px] tracking-[0.24em]",
    lg: "text-[22px] tracking-[0.26em]",
  };
  return (
    <a
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 select-none transition-opacity",
        text,
        className,
      )}
      aria-label="Glam By Dove — home"
    >
      {showLozenge && (
        <span
          aria-hidden
          className="inline-block size-2 rotate-45 bg-[var(--gold)]"
        />
      )}
      <span
        className={cn("font-display uppercase font-medium", sizes[size])}
      >
        Glam <span className="font-italic-serif normal-case tracking-normal italic font-normal">by</span> Dove
      </span>
    </a>
  );
}
