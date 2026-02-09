import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoldParticles } from "@/components/GoldParticles";
import { ServiceHeroSplit } from "@/components/service-page/ServiceHeroSplit";
import { ServiceVideoSection } from "@/components/service-page/ServiceVideoSection";
import { ServiceOverviewNew } from "@/components/service-page/ServiceOverviewNew";
import { ServiceCTANew } from "@/components/service-page/ServiceCTANew";
import { ServiceTestimonialNew } from "@/components/service-page/ServiceTestimonialNew";
import { ServiceFinalCTA } from "@/components/service-page/ServiceFinalCTA";
import { ServiceFlowSection } from "@/components/service-page/ServiceFlowSection";
import { ServiceRecentEventsTicker } from "@/components/service-page/ServiceRecentEventsTicker";
import { ServiceHowItWorksWithPricing } from "@/components/service-page/ServiceHowItWorksWithPricing";
import { ServiceOutcomes } from "@/components/service-page/ServiceOutcomes";
import { ServicePillsSection } from "@/components/service-page/ServicePillsSection";
import { servicesData } from "@/data/servicesData";
import { SEO } from "@/components/SEO";
import { ServiceMiniGallery } from "@/components/service-page/ServiceMiniGallery";

// Note: mini galleries are now provided via servicesData (service.miniGallery)

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
    "emcee-media": "event emcee Singapore, event photography, corporate videography",
    "amazing-race": "amazing race Singapore, corporate amazing race, team building race"
  };

  // Check if this service has the new enhanced structure
  const hasEnhancedStructure = service.clientLogos || service.recentEvents || service.pricing;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${service.hero.title} | Elluminate`}
        description={service.overview.description.slice(0, 155) + "..."}
        keywords={serviceKeywords[slug || ""] || "corporate events Singapore, event planning"}
        canonical={`https://elluminate.sg/services/${slug}`}
      />
      <GoldParticles />
      <Navbar />

      {/* 1. Hero Section */}
      <ServiceHeroSplit
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        tagline={service.hero.tagline}
        backgroundImage={service.hero.backgroundImage}
        accentColor={service.accentColor}
        accentColorSecondary={service.accentColorSecondary}
        slug={slug}
      />

      {/* 2. Video Section */}
      {service.videoSection && (
        <ServiceVideoSection
          title={service.videoSection.title}
          subtitle={service.videoSection.subtitle}
          videoUrl={service.videoSection.videoUrl}
          thumbnailImage={service.videoSection.thumbnailImage}
          accentColor={service.accentColor}
        />
      )}

      {/* 3. Recent Events Ticker */}
      {service.recentEvents && (
        <section className="py-10 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-sm font-medium tracking-wide mb-6 text-muted-foreground">
              {service.recentEventsHeadline || `Companies who've experienced our ${service.hero.title}`}
            </p>
          </div>
          <ServiceRecentEventsTicker events={service.recentEvents} accentColor={service.accentColor} />
        </section>
      )}

      {/* 4. What Is This Service? (Overview) */}
      <ServiceOverviewNew description={service.overview.description} accentColor={service.accentColor} accentColorSecondary={service.accentColorSecondary} />

      {/* 6. How It Works with Pricing & Add-ons (NEW - for enhanced structure) */}
      {hasEnhancedStructure && service.howItWorksFlow && service.pricing && service.addOns && (
        <ServiceHowItWorksWithPricing
          sectionTitle={service.howItWorksFlow.sectionTitle}
          sectionSubtitle={service.howItWorksFlow.sectionSubtitle}
          steps={service.howItWorksFlow.items}
          pricing={service.pricing}
          packages={service.packages}
          addOns={service.addOns}
          accentColor={service.accentColor}
          accentColorSecondary={service.accentColorSecondary}
          dividerVariant={service.dividerVariant}
          howItWorksImage={service.howItWorksImage}
          addOnsImage={service.addOnsImage}
        />
      )}

      {/* Fallback: Original How It Works Flow (for services without enhanced structure) */}
      {!hasEnhancedStructure && service.howItWorksFlow && (
        <ServiceFlowSection
          sectionTitle={service.howItWorksFlow.sectionTitle}
          sectionSubtitle={service.howItWorksFlow.sectionSubtitle}
          items={service.howItWorksFlow.items}
          accentColor={service.accentColor}
          itemsPerRow={service.howItWorksFlow.itemsPerRow}
          showNumbers={service.howItWorksFlow.showNumbers}
        />
      )}

      {/* 7. Benefits/Outcomes (NEW - for enhanced structure) */}
      {service.outcomes && !service.hideOutcomes && (
        <ServiceOutcomes
          outcomes={service.outcomes}
          accentColor={service.accentColor}
        />
      )}

      {/* Other Flow Sections (for services without enhanced structure) */}
      {!hasEnhancedStructure && service.whatToExpectFlow && (
        <ServiceFlowSection
          sectionTitle={service.whatToExpectFlow.sectionTitle}
          sectionSubtitle={service.whatToExpectFlow.sectionSubtitle}
          items={service.whatToExpectFlow.items}
          accentColor={service.accentColor}
          itemsPerRow={service.whatToExpectFlow.itemsPerRow}
          showNumbers={service.whatToExpectFlow.showNumbers}
        />
      )}

      {!hasEnhancedStructure && service.raceFormatsFlow && (
        <ServiceFlowSection
          sectionTitle={service.raceFormatsFlow.sectionTitle}
          sectionSubtitle={service.raceFormatsFlow.sectionSubtitle}
          items={service.raceFormatsFlow.items}
          accentColor={service.accentColor}
          itemsPerRow={service.raceFormatsFlow.itemsPerRow}
          showNumbers={service.raceFormatsFlow.showNumbers}
        />
      )}

      {!hasEnhancedStructure && service.challengeTypesFlow && (
        <ServiceFlowSection
          sectionTitle={service.challengeTypesFlow.sectionTitle}
          sectionSubtitle={service.challengeTypesFlow.sectionSubtitle}
          items={service.challengeTypesFlow.items}
          accentColor={service.accentColor}
          itemsPerRow={service.challengeTypesFlow.itemsPerRow}
          showNumbers={service.challengeTypesFlow.showNumbers}
        />
      )}

      {/* 8. Mid-Page CTA */}
      {!service.hideMidCta && (
        <ServiceCTANew
          headline={service.cta.headline}
          subtext={service.cta.subtext}
          accentColor={service.accentColor}
          accentColorSecondary={service.accentColorSecondary}
        />
      )}

      {/* 9. Perfect For Section */}
      {service.perfectForFlow && (
        <>
          {service.perfectForVariant === "pills" ? (
            <ServicePillsSection
              sectionTitle={service.perfectForFlow.sectionTitle}
              sectionSubtitle={service.perfectForFlow.sectionSubtitle}
              items={service.perfectForFlow.items}
              accentColor={service.accentColor}
            />
          ) : (
            <ServiceFlowSection
              sectionTitle={service.perfectForFlow.sectionTitle}
              sectionSubtitle={service.perfectForFlow.sectionSubtitle}
              items={service.perfectForFlow.items}
              accentColor={service.accentColor}
              itemsPerRow={service.perfectForFlow.itemsPerRow}
              showNumbers={service.perfectForFlow.showNumbers}
            />
          )}
        </>
      )}

      {/* Mini gallery (data-driven) */}
      {service.miniGallery && (
        <ServiceMiniGallery title={service.miniGallery.title} images={service.miniGallery.images} />
      )}

      {/* 10. Testimonials */}
      <ServiceTestimonialNew 
        testimonials={service.testimonials} 
        accentColor={service.accentColor}
      />

      {/* 11. Final CTA */}
      <ServiceFinalCTA accentColor={service.accentColor} />

      <Footer />
    </div>
  );
};

export default ServicePage;
