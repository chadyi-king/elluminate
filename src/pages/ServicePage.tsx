import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoldParticles } from "@/components/GoldParticles";
import { ServiceHeroSplit } from "@/components/service-page/ServiceHeroSplit";
import { ServiceOverviewNew } from "@/components/service-page/ServiceOverviewNew";
import { ServiceFeaturesNew } from "@/components/service-page/ServiceFeaturesNew";
import { ServiceAlternatingSection } from "@/components/service-page/ServiceAlternatingSection";
import { ServiceCTANew } from "@/components/service-page/ServiceCTANew";
import { ServiceTestimonialNew } from "@/components/service-page/ServiceTestimonialNew";
import { ServiceFAQ } from "@/components/service-page/ServiceFAQ";
import { ServiceGalleryNew } from "@/components/service-page/ServiceGalleryNew";
import { ServiceFinalCTA } from "@/components/service-page/ServiceFinalCTA";
import { servicesData } from "@/data/servicesData";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-metallic-gold mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <GoldParticles />
      <Navbar />

      <ServiceHeroSplit
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        tagline={service.hero.tagline}
        backgroundImage={service.hero.backgroundImage}
        accentColor={service.accentColor}
      />

      <ServiceOverviewNew
        description={service.overview.description}
        accentColor={service.accentColor}
      />

      <ServiceFeaturesNew 
        features={service.features} 
        accentColor={service.accentColor}
        image={service.gallery[0]}
      />

      <ServiceAlternatingSection
        sections={service.alternatingSections}
        accentColor={service.accentColor}
      />

      <ServiceCTANew
        headline={service.cta.headline}
        subtext={service.cta.subtext}
        accentColor={service.accentColor}
      />

      <ServiceTestimonialNew 
        testimonials={service.testimonials} 
        accentColor={service.accentColor}
      />

      <ServiceFAQ
        faqs={service.faqs}
        accentColor={service.accentColor}
      />

      <ServiceGalleryNew 
        images={service.gallery} 
        accentColor={service.accentColor}
      />

      <ServiceFinalCTA accentColor={service.accentColor} />

      <Footer />
    </div>
  );
};

export default ServicePage;