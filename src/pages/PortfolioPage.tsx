import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioFilters } from "@/components/portfolio/PortfolioFilters";
import { FeaturedCaseStudies } from "@/components/portfolio/FeaturedCaseStudies";
import { PhotoGallery } from "@/components/portfolio/PhotoGallery";
import { VideoHighlights } from "@/components/portfolio/VideoHighlights";
import { MiniCaseStudies } from "@/components/portfolio/MiniCaseStudies";
import { TestimonialWall } from "@/components/portfolio/TestimonialWall";
import { ClientLogosGrid } from "@/components/portfolio/ClientLogosGrid";
import { BehindTheScenes } from "@/components/portfolio/BehindTheScenes";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";
import { ContactModal } from "@/components/portfolio/ContactModal";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OrganizationSchema } from "@/components/StructuredData";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Portfolio | Elluminate"
        description="Explore our portfolio of 1000+ successful corporate events in Singapore. View case studies, photos, and videos of team building, dinner & dance, awards ceremonies, and more."
        keywords="event portfolio Singapore, corporate event gallery, team building photos, event case studies, Elluminate portfolio"
        canonical="https://elluminate.sg/portfolio"
      />
      <OrganizationSchema />
      <Navbar />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Portfolio" },
      ]} />
      <main>
        <PortfolioHero />
        <PortfolioFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <FeaturedCaseStudies filter={activeFilter} />
        <PhotoGallery filter={activeFilter} />
        <VideoHighlights />
        <MiniCaseStudies filter={activeFilter} />
        <TestimonialWall />
        <ClientLogosGrid />
        <BehindTheScenes />
        <PortfolioCTA onOpenContact={() => setIsContactModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default PortfolioPage;
