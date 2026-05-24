import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { MobileBookingBar } from "@/components/site/MobileBookingBar";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--cocoa)]">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBookingBar />
    </div>
  );
}
