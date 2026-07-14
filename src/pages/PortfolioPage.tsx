import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { BehindTheScenes } from "@/components/portfolio/BehindTheScenes";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OrganizationSchema } from "@/components/StructuredData";
import { useContactModal } from "@/contexts/ContactModalContext";

const PortfolioPage = () => {
  const { openContactModal } = useContactModal();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Portfolio | Elluminate"
        description="1,000+ corporate events in Singapore. Case studies, photos and videos of team building, dinner & dance, and awards ceremonies."
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
        {/* TODO(content): Restore portfolio case studies, gallery, videos, testimonials, and client proof only after client names, pax counts, media, and permissions are verified. */}
        <BehindTheScenes />
        <PortfolioCTA onOpenContact={openContactModal} />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
