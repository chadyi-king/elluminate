import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/CredibilitySection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { JourneySection } from "@/components/JourneySection";
import { CTASection } from "@/components/CTASection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { Footer } from "@/components/Footer";
import { GoldParticles } from "@/components/GoldParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GoldParticles />
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <SocialProofSection />
        <ServicesSection />
        <CaseStudiesSection />
        <WhyUsSection />
        <JourneySection />
        <CTASection />
        <CredibilitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
