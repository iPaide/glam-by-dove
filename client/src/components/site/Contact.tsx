/**
 * GLAM BY DOVE — Contact / Booking
 * Style: "Gilded Owambe" — split form on cream paper with aubergine sidebar
 * containing phone, WhatsApp, Instagram, and the cities list.
 */
import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Instagram, MapPin, Send, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { toast } from "sonner";
import { useReveal } from "@/hooks/useReveal";

const SERVICE_OPTIONS = [
  "The Royal Bridal",
  "Owambe / Birthday Glam",
  "Signature Turban Gele",
  "Convocation / Graduation",
  "Editorial / Photoshoot",
  "Not sure yet",
];

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function buildWhatsAppUrl(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const date = String(data.get("date") || "").trim();
    const location = String(data.get("location") || "").trim();
    const service = String(data.get("service") || "").trim();
    const notes = String(data.get("notes") || "").trim();

    const lines = [
      `Hi Dove! I'd love to book a glam session with Glam By Dove.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Event date: ${date || "(flexible)"}`,
      `Location: ${location || "(to confirm)"}`,
      `Service: ${service}`,
      notes ? `Notes: ${notes}` : ``,
    ].filter(Boolean);
    return `https://wa.me/2348030616727?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const url = buildWhatsAppUrl(form);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Inquiry ready — opening WhatsApp", {
        description: "Your details have been pre-filled in a WhatsApp message to Dove.",
      });
      window.open(url, "_blank", "noopener");
    }, 600);
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 bg-[color:var(--cream)]"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Sidebar */}
          <aside className="reveal lg:col-span-5 relative bg-[color:var(--aubergine)] text-[color:var(--cream)] p-8 md:p-10 overflow-hidden">
            <div
              aria-hidden
              className="aso-pattern pointer-events-none absolute inset-0 opacity-[0.18]"
            />
            <div className="relative">
              <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
                Reach Out
              </span>
              <h2 className="mt-3 font-display text-[clamp(1.85rem,3vw,2.4rem)] leading-[1.05] text-[color:var(--cream)]">
                Let's plan your{" "}
                <span className="font-italic-serif italic text-[color:var(--gold-soft)]">
                  moment
                </span>
                .
              </h2>
              <p className="mt-5 max-w-[40ch] text-[14.5px] leading-[1.75] text-[color:var(--cream)]/80">
                Share your event details and I'll respond personally with
                availability and a tailored quote — usually within 24 hours.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border-t border-[color:var(--gold)]/30 pt-5"
                >
                  <span className="inline-flex items-center justify-center size-11 border border-[color:var(--gold)]/50 text-[color:var(--gold-soft)] group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--aubergine)] transition-colors">
                    <MessageCircle className="size-4" />
                  </span>
                  <div>
                    <div className="text-[10.5px] tracking-[0.24em] uppercase text-[color:var(--cream)]/60 font-semibold">
                      WhatsApp
                    </div>
                    <div className="font-display text-[17px] text-[color:var(--cream)]">
                      Message Dove directly
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="group flex items-center gap-4 border-t border-[color:var(--gold)]/30 pt-5"
                >
                  <span className="inline-flex items-center justify-center size-11 border border-[color:var(--gold)]/50 text-[color:var(--gold-soft)] group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--aubergine)] transition-colors">
                    <Phone className="size-4" />
                  </span>
                  <div>
                    <div className="text-[10.5px] tracking-[0.24em] uppercase text-[color:var(--cream)]/60 font-semibold">
                      Phone
                    </div>
                    <div className="font-display text-[17px] text-[color:var(--cream)]">
                      {BRAND.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border-t border-[color:var(--gold)]/30 pt-5"
                >
                  <span className="inline-flex items-center justify-center size-11 border border-[color:var(--gold)]/50 text-[color:var(--gold-soft)] group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--aubergine)] transition-colors">
                    <Instagram className="size-4" />
                  </span>
                  <div>
                    <div className="text-[10.5px] tracking-[0.24em] uppercase text-[color:var(--cream)]/60 font-semibold">
                      Instagram
                    </div>
                    <div className="font-display text-[17px] text-[color:var(--cream)]">
                      {BRAND.handle}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 border-t border-[color:var(--gold)]/30 pt-5">
                  <span className="inline-flex items-center justify-center size-11 border border-[color:var(--gold)]/50 text-[color:var(--gold-soft)]">
                    <MapPin className="size-4" />
                  </span>
                  <div>
                    <div className="text-[10.5px] tracking-[0.24em] uppercase text-[color:var(--cream)]/60 font-semibold">
                      Service Areas
                    </div>
                    <div className="font-display text-[17px] text-[color:var(--cream)]">
                      {BRAND.cities.join(" · ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="reveal lg:col-span-7 bg-[color:var(--card)] border border-[color:var(--gold)]/25 p-8 md:p-10 shadow-[0_18px_50px_-30px_rgba(59,31,43,0.4)]"
            style={{ transitionDelay: "100ms" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center text-center py-14">
                <span className="inline-flex items-center justify-center size-14 rounded-full bg-[color:var(--aubergine)] text-[color:var(--gold-soft)]">
                  <CheckCircle2 className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-[26px] text-[color:var(--cocoa)]">
                  Inquiry sent.
                </h3>
                <p className="mt-3 max-w-[42ch] text-[14.5px] leading-[1.7] text-[color:var(--cocoa)]/70">
                  Your details have been pre-filled in WhatsApp. If the chat
                  didn't open automatically, you can also send the message
                  again or call directly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[12px] font-semibold tracking-[0.22em] uppercase text-[color:var(--aubergine)] underline-offset-4 underline decoration-[color:var(--gold)]/70"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
                <div className="md:col-span-2">
                  <span className="eyebrow">Booking Form</span>
                  <h3 className="mt-2 font-display text-[clamp(1.6rem,2.2vw,2rem)] text-[color:var(--cocoa)] leading-[1.1]">
                    Tell me about{" "}
                    <span className="font-italic-serif italic text-[color:var(--aubergine)]">
                      your event
                    </span>
                    .
                  </h3>
                </div>

                <Field label="Full name" name="name" required placeholder="Adesewa Olusola" />
                <Field
                  label="Phone / WhatsApp"
                  name="phone"
                  required
                  type="tel"
                  placeholder="0803 000 0000"
                />
                <Field label="Event date" name="date" type="date" />
                <Field
                  label="Event location"
                  name="location"
                  placeholder="Ado-Ekiti, Akure, Ibadan…"
                />

                <div className="md:col-span-2">
                  <label className="block text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--cocoa)]/65 mb-2">
                    Service needed
                  </label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full h-12 px-4 bg-[color:var(--cream)] border border-[color:var(--gold)]/35 text-[14.5px] text-[color:var(--cocoa)] focus:outline-none focus:border-[color:var(--aubergine)] focus:ring-1 focus:ring-[color:var(--gold)]/40 transition-colors"
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--cocoa)]/65 mb-2">
                    Notes (optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Tell me about your vision, group size, dress code, or any inspiration."
                    className="w-full px-4 py-3 bg-[color:var(--cream)] border border-[color:var(--gold)]/35 text-[14.5px] text-[color:var(--cocoa)] focus:outline-none focus:border-[color:var(--aubergine)] focus:ring-1 focus:ring-[color:var(--gold)]/40 transition-colors resize-none"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-[12.5px] text-[color:var(--cocoa)]/60 leading-[1.6]">
                    Submitting opens a pre-filled WhatsApp message to Dove. You
                    stay in control of when to send it.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="foil-cta inline-flex items-center justify-center gap-2 h-12 px-7 bg-[color:var(--aubergine)] text-[color:var(--cream)] text-[12px] font-semibold tracking-[0.22em] uppercase transition-transform active:scale-[0.97] hover:bg-[color:var(--aubergine-deep)] disabled:opacity-70"
                  >
                    {submitting ? "Preparing…" : "Send Inquiry"}
                    {!submitting && <Send className="size-4" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--cocoa)]/65 mb-2">
        {label}
        {required && <span className="text-[color:var(--gold)]"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full h-12 px-4 bg-[color:var(--cream)] border border-[color:var(--gold)]/35 text-[14.5px] text-[color:var(--cocoa)] placeholder:text-[color:var(--cocoa)]/35 focus:outline-none focus:border-[color:var(--aubergine)] focus:ring-1 focus:ring-[color:var(--gold)]/40 transition-colors"
      />
    </div>
  );
}
