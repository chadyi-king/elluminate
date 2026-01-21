import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrafficLightSection } from "@/components/TrafficLightSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { GallerySection } from "@/components/GallerySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Elluminate | Ignite the Spark in Your Teams | Corporate Team Building Singapore"
        description="Transform your workforce with engaging team building experiences. Physical & virtual activities, retreats, and training programs. 1,000+ events delivered in Singapore."
        keywords="team building Singapore, corporate team building, virtual team building, amazing race, company retreats, corporate training"
        canonical="https://elluminate.sg"
      />
      
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <SocialProofSection />
        <ServicesSection />
        <TrafficLightSection />
        <CaseStudiesSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
