/**
 * GLAM BY DOVE — Home (single-page experience)
 * Style: "Gilded Owambe" — luxury Nigerian beauty editorial.
 * Order: Header → Hero → Hub → Services → Portfolio → About → Testimonials → FAQ → Contact → Footer
 */
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ServicesHub } from "@/components/site/ServicesHub";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--cocoa)]">
      <Header />
      <main>
        <Hero />
        <ServicesHub />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
