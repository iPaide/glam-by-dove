/**
 * GLAM BY DOVE — FAQ
 * Style: "Gilded Owambe" — editorial accordion with gold hairlines and
 * Playfair questions, italic accents on key phrases.
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/brand";
import { useReveal } from "@/hooks/useReveal";

export function FAQ() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="relative py-24 md:py-28 bg-[color:var(--cream)] border-t border-[color:var(--gold)]/15"
    >
      <div className="container max-w-[920px]">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="reveal eyebrow">Good to know</span>
          <h2 className="reveal mt-3 font-display text-[clamp(1.85rem,3vw,2.5rem)] leading-[1.05] text-[color:var(--cocoa)]">
            Frequently{" "}
            <span className="font-italic-serif italic text-[color:var(--aubergine)]">
              asked
            </span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="reveal w-full">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-b border-[color:var(--gold)]/30"
            >
              <AccordionTrigger className="font-display text-[18px] md:text-[19px] text-[color:var(--cocoa)] hover:no-underline py-5 [&[data-state=open]]:text-[color:var(--aubergine)]">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14.5px] leading-[1.75] text-[color:var(--cocoa)]/75 pb-6 max-w-[68ch]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
