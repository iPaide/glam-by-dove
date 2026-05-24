import { BookingFlow } from "@/components/site/BookingFlow";
import { Contact } from "@/components/site/Contact";
import { DocumentMeta } from "@/components/site/DocumentMeta";
import { FAQ } from "@/components/site/FAQ";
import { PageIntro } from "@/components/site/PageIntro";
import { SiteLayout } from "@/components/site/SiteLayout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <DocumentMeta
        title="Contact & Booking — Glam By Dove"
        description="Check Glam By Dove availability, send your event details, and book bridal, Owambe, birthday, gele, convocation, or makeup lesson services."
        path="/contact"
      />
      <PageIntro
        eyebrow="Contact"
        title="Check your"
        italic="date"
        body="Send your event details, confirm availability, agree timing and logistics, then secure your Glam By Dove booking through WhatsApp."
      />
      <BookingFlow />
      <Contact />
      <FAQ />
    </SiteLayout>
  );
}
