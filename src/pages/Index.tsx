import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrafficLightSection } from "@/components/TrafficLightSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { GallerySection } from "@/components/GallerySection";
import { CTASection } from "@/components/CTASection";
import { HomeFAQSection } from "@/components/HomeFAQSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Corporate Team Building & Company Experiences | Elluminate"
        description="Plan corporate team building, retreats and company experiences in Singapore around your people, objective, venue and timing. Tell Elluminate about your event."
        keywords="team building Singapore, corporate team building, company experiences, corporate retreats, team bonding activities, corporate training"
        canonical="https://elluminate.sg/"
      />
      <OrganizationSchema type="LocalBusiness" />
      <WebSiteSchema />
      
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <VideoSection />
        <ServicesSection />
        <TrafficLightSection />
        <CaseStudiesSection />
        <GallerySection />
        <HomeFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
