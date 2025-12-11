import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { JourneySection } from "@/components/JourneySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Elluminate | Illuminate Your Teams | Corporate Team Building Singapore"
        description="Transform your workforce with engaging team building experiences. Physical & virtual activities, retreats, and training programs. 500+ events delivered in Singapore."
        keywords="team building Singapore, corporate team building, virtual team building, amazing race, company retreats, corporate training"
        canonical="https://elluminate.sg"
      />
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <WhyUsSection />
        <ServicesSection />
        <JourneySection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;