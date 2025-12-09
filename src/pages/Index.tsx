import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { JourneySection } from "@/components/JourneySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { GoldParticles } from "@/components/GoldParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GoldParticles />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyUsSection />
        <JourneySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
