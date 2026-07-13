import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { BehindTheScenes } from "@/components/portfolio/BehindTheScenes";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";
import { EventShowcase } from "@/components/portfolio/EventShowcase";
import { VideoHighlights } from "@/components/portfolio/VideoHighlights";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OrganizationSchema } from "@/components/StructuredData";
import { useContactModal } from "@/contexts/ContactModalContext";

const PortfolioPage = () => {
  const { openContactModal } = useContactModal();
  const openPortfolioEnquiry = () =>
    openContactModal({
      additionalDetails: "I would like to plan an event inspired by the Elluminate portfolio.",
    });

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Team Building & Retreat Portfolio Singapore | Elluminate"
        description="See real team-building activities, facilitated challenges and company retreat moments delivered by the Elluminate and Team Elevate team."
        keywords="team building portfolio Singapore, corporate retreat photos, real team building events, Elluminate portfolio"
        canonical="https://elluminate.sg/portfolio"
      />
      <OrganizationSchema />
      <Navbar />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Portfolio" },
      ]} />
      <main>
        <PortfolioHero onOpenContact={openPortfolioEnquiry} />
        <EventShowcase />
        <VideoHighlights />
        <BehindTheScenes />
        <PortfolioCTA onOpenContact={openPortfolioEnquiry} />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
