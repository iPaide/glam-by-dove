import { Contact } from "@/components/site/Contact";
import { DocumentMeta } from "@/components/site/DocumentMeta";
import { PageIntro } from "@/components/site/PageIntro";
import { Portfolio } from "@/components/site/Portfolio";
import { SiteLayout } from "@/components/site/SiteLayout";

export default function PortfolioPage() {
  return (
    <SiteLayout>
      <DocumentMeta
        title="Portfolio — Glam By Dove Client Looks"
        description="Browse selected Glam By Dove bridal, Owambe, birthday, gele, and convocation looks with direct Instagram reel links."
        path="/portfolio"
      />
      <PageIntro
        eyebrow="Portfolio"
        title="Real clients"
        italic="real moments"
        body="Browse selected bridal, Owambe, birthday, gele, and convocation looks, then open the matching Instagram post or reel for a closer view."
      />
      <Portfolio />
      <Contact />
    </SiteLayout>
  );
}
