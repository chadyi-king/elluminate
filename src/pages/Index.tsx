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
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Team Building Singapore | Corporate Events & Retreats | Elluminate"
        description="Singapore's trusted team building company. 1,000+ events delivered for Fortune 500 companies, schools, and government teams. Get a free quote today."
        keywords="team building Singapore, corporate team building, virtual team building, amazing race, company retreats, corporate training"
        canonical="https://elluminate.sg/"
      />
      <OrganizationSchema type="LocalBusiness" />
      <WebSiteSchema />
      
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
