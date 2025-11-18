import ApprovedRepairSection from "@/components/ApprovedRepairSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TrustedProfessionalsSection from "@/components/TrustedProfessionalsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ApprovedRepairSection />
        <ServicesSection />
        <TrustedProfessionalsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
