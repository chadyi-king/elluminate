import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { RealEventPortfolio } from "@/components/portfolio/RealEventPortfolio";
import { BehindTheScenes } from "@/components/portfolio/BehindTheScenes";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OrganizationSchema } from "@/components/StructuredData";
import { useContactModal } from "@/contexts/ContactModalContext";
import { getRouteSeo } from "@/data/seoRoutes";

const PortfolioPage = () => {
  const { openContactModal } = useContactModal();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        {...getRouteSeo("/portfolio")}
      />
      <OrganizationSchema />
      <Navbar />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Portfolio" },
      ]} />
      <main>
        <PortfolioHero />
        <RealEventPortfolio />
        <BehindTheScenes />
        <PortfolioCTA onOpenContact={openContactModal} />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
