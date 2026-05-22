import { useEffect, useRef } from "react";

/**
 * useReveal — adds `is-visible` class to elements with `.reveal` once they
 * enter the viewport. Stagger child elements via inline `transition-delay`.
 * Respects prefers-reduced-motion via the CSS class itself.
 */
export function useReveal<T extends HTMLElement>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (targets.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.12 },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [rootMargin]);

  return ref;
}
