import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustedProfessionalsSection from "@/components/TrustedProfessionalsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustedProfessionalsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
