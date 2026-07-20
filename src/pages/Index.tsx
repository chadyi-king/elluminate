import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { PopularExperiencesSection, ServicesSection } from "@/components/ServicesSection";
import { TrafficLightSection } from "@/components/TrafficLightSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { GallerySection } from "@/components/GallerySection";
import { CTASection } from "@/components/CTASection";
import { HomeFAQSection } from "@/components/HomeFAQSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import { getRouteSeo } from "@/data/seoRoutes";

const homeSeo = getRouteSeo("/");

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        {...homeSeo}
        keywords="team building Singapore, corporate team building, virtual team building, amazing race, company retreats, corporate training"
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
        <PopularExperiencesSection />
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
