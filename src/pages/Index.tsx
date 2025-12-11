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
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Team Elevate | Singapore's Premier Corporate Event Specialists"
        description="Where Moments Become Masterpieces. Premium corporate events, galas, team building, dinner & dance, and brand activations in Singapore. 1000+ events executed."
        keywords="corporate events Singapore, team building Singapore, dinner and dance, awards ceremony, brand activation, event planner Singapore"
        canonical="https://teamelevate.sg"
      />
      <GoldParticles />
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
