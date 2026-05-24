import { BookingFlow } from "@/components/site/BookingFlow";
import { Contact } from "@/components/site/Contact";
import { DocumentMeta } from "@/components/site/DocumentMeta";
import { PageIntro } from "@/components/site/PageIntro";
import { Services } from "@/components/site/Services";
import { SiteLayout } from "@/components/site/SiteLayout";

export default function ServicesPage() {
  return (
    <SiteLayout>
      <DocumentMeta
        title="Services & Rates — Glam By Dove"
        description="Explore Glam By Dove bridal makeup, Owambe glam, birthday glam, gele artistry, convocation looks, and makeup lesson rates."
        path="/services"
      />
      <PageIntro
        eyebrow="Services"
        title="Glam for"
        italic="every moment"
        body="Explore bridal, Owambe, birthday, gele, convocation, and makeup lesson bookings with rates, inclusions, and a simple booking flow."
      />
      <Services />
      <BookingFlow />
      <Contact />
    </SiteLayout>
  );
}
