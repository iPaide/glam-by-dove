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
        title="Book a Makeup Artist in Ado-Ekiti — Glam By Dove"
        description="Contact Glam By Dove to book bridal makeup, Owambe glam, birthday makeup, gele styling, convocation makeup, or lessons in Ado-Ekiti."
        path="/contact"
      />
      <PageIntro
        eyebrow="Contact"
        title="Check your"
        italic="date"
        body="Send your event date, location, and service details to book Glam By Dove in Ado-Ekiti or arrange travel for Akure, Ibadan, Ekiti events, and destination bookings."
      />
      <BookingFlow />
      <Contact />
      <FAQ />
    </SiteLayout>
  );
}
