import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoldParticles } from "@/components/GoldParticles";
import { ServiceHeroSplit } from "@/components/service-page/ServiceHeroSplit";
import { ServiceVideoSection } from "@/components/service-page/ServiceVideoSection";
import { ServiceOverviewNew } from "@/components/service-page/ServiceOverviewNew";
import { ServiceFeaturesNew } from "@/components/service-page/ServiceFeaturesNew";
import { ServiceActivities } from "@/components/service-page/ServiceActivities";
import { ServiceAlternatingSection } from "@/components/service-page/ServiceAlternatingSection";
import { ServiceCTANew } from "@/components/service-page/ServiceCTANew";
import { ServiceTestimonialNew } from "@/components/service-page/ServiceTestimonialNew";
import { ServiceFAQ } from "@/components/service-page/ServiceFAQ";
import { ServiceGalleryNew } from "@/components/service-page/ServiceGalleryNew";
import { ServiceFinalCTA } from "@/components/service-page/ServiceFinalCTA";
import { ServiceProcessFlow } from "@/components/service-page/ServiceProcessFlow";
import { servicesData } from "@/data/servicesData";
import { SEO } from "@/components/SEO";

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

  const serviceKeywords: Record<string, string> = {
    "team-building": "team building Singapore, corporate team building, team bonding activities",
    "dinner-and-dance": "dinner and dance Singapore, D&D event, corporate gala dinner",
    "awards-ceremonies": "awards ceremony Singapore, corporate awards event, recognition ceremony",
    "overseas-retreats": "overseas retreat Singapore, corporate retreat, company trip planning",
    "corporate-anniversaries": "corporate anniversary event, company milestone celebration",
    "leadership-offsites": "leadership offsite Singapore, executive retreat, strategic planning event",
    "product-launch": "product launch event Singapore, brand launch, new product reveal",
    "brand-activations": "brand activation Singapore, experiential marketing, consumer engagement",
    "client-appreciation": "client appreciation event, VIP event Singapore, customer appreciation",
    "town-halls": "town hall event Singapore, corporate conference, company meeting",
    "immersive-experiences": "immersive event Singapore, themed experience, interactive event",
    "wellness-events": "corporate wellness event, team wellness day, employee wellbeing",
    "event-concept": "event concept development, creative event design, event planning",
    "stage-production": "stage production Singapore, AV production, event lighting and sound",
    "custom-themes": "custom theme event, themed party, venue transformation",
    "emcee-media": "event emcee Singapore, event photography, corporate videography"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${service.hero.title} | Team Elevate`}
        description={service.overview.description.slice(0, 155) + "..."}
        keywords={serviceKeywords[slug || ""] || "corporate events Singapore, event planning"}
        canonical={`https://teamelevate.sg/services/${slug}`}
      />
      <GoldParticles />
      <Navbar />

      <ServiceHeroSplit
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        tagline={service.hero.tagline}
        backgroundImage={service.hero.backgroundImage}
        accentColor={service.accentColor}
      />

      {service.videoSection && (
        <ServiceVideoSection
          title={service.videoSection.title}
          subtitle={service.videoSection.subtitle}
          videoUrl={service.videoSection.videoUrl}
          thumbnailImage={service.videoSection.thumbnailImage}
          accentColor={service.accentColor}
        />
      )}

      <ServiceOverviewNew
        description={service.overview.description}
        accentColor={service.accentColor}
      />

      {service.processFlow && (
        <ServiceProcessFlow
          steps={service.processFlow}
          accentColor={service.accentColor}
        />
      )}

      <ServiceFeaturesNew 
        features={service.features} 
        accentColor={service.accentColor}
        image={service.gallery[0]}
      />

      {service.activities && (
        <ServiceActivities
          activities={service.activities.items}
          accentColor={service.accentColor}
          sectionTitle={service.activities.sectionTitle}
        />
      )}

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