/**
 * GLAM BY DOVE — Home
 * Style: "Gilded Owambe" — luxury Nigerian beauty editorial.
 * Order: Hero → Hub → About → Testimonials → Contact
 */
import { Hero } from "@/components/site/Hero";
import { ServicesHub } from "@/components/site/ServicesHub";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { DocumentMeta } from "@/components/site/DocumentMeta";
import { SiteLayout } from "@/components/site/SiteLayout";

export default function Home() {
  return (
    <SiteLayout>
      <DocumentMeta
        title="Glam By Dove — Bridal, Gele & Owambe Glam | Ado-Ekiti"
        description="Nigerian bridal makeup, gele artistry, Owambe, birthday glam, convocation looks, and makeup lessons based in Ado-Ekiti."
        path="/"
      />
      <Hero />
      <ServicesHub />
      <About />
      <Testimonials />
      <Contact />
    </SiteLayout>
  );
}
