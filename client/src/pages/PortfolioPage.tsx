import { Contact } from "@/components/site/Contact";
import { DocumentMeta } from "@/components/site/DocumentMeta";
import { PageIntro } from "@/components/site/PageIntro";
import { Portfolio } from "@/components/site/Portfolio";
import { SiteLayout } from "@/components/site/SiteLayout";

export default function PortfolioPage() {
  return (
    <SiteLayout>
      <DocumentMeta
        title="Ado-Ekiti Makeup Portfolio — Glam By Dove Client Looks"
        description="Browse Glam By Dove bridal makeup, Owambe glam, birthday makeup, gele styling, and convocation looks from Ado-Ekiti and nearby bookings."
        path="/portfolio"
      />
      <PageIntro
        eyebrow="Portfolio"
        title="Real clients"
        italic="real moments"
        body="Browse selected bridal makeup, Owambe glam, birthday looks, gele styling, and convocation makeup by Glam By Dove, then open the matching Instagram post or reel for a closer view."
      />
      <Portfolio />
      <Contact />
    </SiteLayout>
  );
}
