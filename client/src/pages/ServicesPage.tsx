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
        title="Makeup Services in Ado-Ekiti — Glam By Dove Rates"
        description="Explore Glam By Dove rates for bridal makeup, Owambe glam, birthday makeup, gele artistry, convocation looks, and makeup lessons in Ado-Ekiti."
        path="/services"
      />
      <PageIntro
        eyebrow="Services"
        title="Glam for"
        italic="every moment"
        body="Explore bridal makeup, Owambe glam, birthday makeup, gele styling, convocation looks, and makeup lesson bookings in Ado-Ekiti, with travel available to Akure, Ibadan, and beyond by agreement."
      />
      <Services />
      <BookingFlow />
      <Contact />
    </SiteLayout>
  );
}
