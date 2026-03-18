import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoldParticles } from "@/components/GoldParticles";
import { ServiceHeroSplit } from "@/components/service-page/ServiceHeroSplit";
import { ServiceVideoSection } from "@/components/service-page/ServiceVideoSection";
import { ServiceVideoCarousel } from "@/components/service-page/ServiceVideoCarousel";
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
import { allInScopeServiceSlugs, serviceCategoryLabels } from "@/data/siteScope";
import { SEO } from "@/components/SEO";
import { ServiceMiniGallery } from "@/components/service-page/ServiceMiniGallery";
import { ServiceDestinationsGrid } from "@/components/service-page/ServiceDestinationsGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service || !slug || !allInScopeServiceSlugs.has(slug)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-primary mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const serviceKeywords: Record<string, string> = {
    // Physical Team Building
    "amazing-race": "amazing race Singapore, corporate amazing race, team building race, outdoor race challenge",
    "csi-bones": "CSI team building Singapore, murder mystery event, detective team building, investigation game",
    "cultural-race": "cultural race Singapore, heritage team building, cultural exploration activity",
    "amongst-us": "amongst us team building Singapore, social deduction game corporate, imposter team game Singapore",
    "alice-in-motherland": "alice in motherland team building Singapore, immersive story adventure, themed team experience Singapore",
    "battle-of-the-olympians": "battle of the olympians team building Singapore, tournament team competition, school sports day corporate",
    "archery-tag": "archery tag Singapore, combat archery, archery team building, foam arrow tag",
    "builder-cross": "builder cross Singapore, construction team building, building challenge corporate",
    "gel-blitz": "gel blitz Singapore, gel ball team building, outdoor combat game corporate",
    "minute-to-win-it": "minute to win it Singapore, quick challenge games, corporate game show team building",
    "monopoly-dash": "monopoly dash Singapore, board game team building, strategy race corporate",
    "nerfwar": "nerf war Singapore, nerf gun team building, foam dart battle corporate",
    "running-man": "running man Singapore, Korean variety game, outdoor chase team building",
    "sotong-game": "squid game Singapore, sotong game team building, survival challenge corporate",
    "tag-tical-laser-teambuilding": "laser tag Singapore, tactical laser team building, combat laser game corporate",
    "treasure-heist": "treasure heist Singapore, heist team building, escape room outdoor corporate",
    // Virtual Team Building
    "amazing-race-virtual": "virtual amazing race Singapore, online team building, remote amazing race",
    "fit-in-your-team-virtual": "virtual fitness team building, online wellness activity, remote team fitness",
    "the-gameshow-experience-virtual": "virtual game show Singapore, online corporate game show, remote trivia team building",
    "the-great-zodiac-hunt-virtual": "virtual zodiac hunt, online treasure hunt team building, remote team challenge",
    "the-nuclear-fallout-escape-room-virtual": "virtual escape room Singapore, online escape room team building, remote puzzle challenge",
    "the-patriot-act-virtual": "virtual Singapore games, patriot act team building, national day virtual event",
    "tomb-raider-king-treasure-hunt-virtual": "virtual treasure hunt Singapore, online adventure team building, tomb raider team event",
    "grand-christmas-delivery": "virtual Christmas party Singapore, online Christmas team building, remote holiday event",
    // Retreats
    "overseas-retreats": "overseas retreat Singapore, corporate retreat, company trip planning, team retreat overseas",
    "local-retreats": "local retreat Singapore, staycation team building, Singapore hotel retreat corporate",
    "incentive-travel": "incentive travel Singapore, corporate incentive trip, top performer reward trip, MICE Singapore, company trip planning",
    // Training
    "mbti": "MBTI Singapore, Myers-Briggs team building, personality profiling corporate, MBTI workshop",
    "disc": "DISC assessment Singapore, DISC profiling corporate, communication training team building",
    "ocean": "OCEAN profiling Singapore, Big Five personality test, personality assessment corporate",
    "mass-talks": "corporate talk Singapore, keynote speaker, mass briefing, team presentation",
    "workshops": "corporate workshop Singapore, skill building workshop, training workshop team",
    "youth-camps": "youth camp Singapore, school camp, student leadership camp, CCA bonding camp",
    "corporate-days": "corporate day Singapore, company fun day, team day out, corporate event day",
  };

  // Check if this service has the new enhanced structure
  const hasEnhancedStructure = service.clientLogos || service.recentEvents || service.pricing;

  // Determine service category for breadcrumbs
  const getCategory = () => ({
    label: serviceCategoryLabels[slug] ?? "Services",
    href: "/",
  });

  const category = getCategory();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${service.hero.title} | Elluminate`}
        description={`${service.overview.description.slice(0, 145)}... Singapore`}
        keywords={serviceKeywords[slug || ""] || "corporate events Singapore, event planning"}
        canonical={`https://elluminate.sg/services/${slug}`}
      />
      <ServiceSchema 
        name={service.hero.title}
        description={service.overview.description.slice(0, 200)}
        slug={slug || ""}
        price={service.pricing?.startingPrice}
      />
      {service.faqs && service.faqs.length > 0 && (
        <FAQSchema faqs={service.faqs} />
      )}
      <GoldParticles />
      <Navbar />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: category.label, href: category.href },
        { label: service.hero.title },
      ]} />

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
        <section className="py-8 px-4 bg-background">
          <ServiceRecentEventsTicker events={service.recentEvents} accentColor={service.accentColor} />
        </section>
      )}

      {/* 4. What Is This Service? (Overview) */}
      <ServiceOverviewNew description={service.overview.description} accentColor={service.accentColor} accentColorSecondary={service.accentColorSecondary} />

      {/* 4.5 Destinations Grid (for retreat/travel services) */}
      {service.destinationsGrid && (
        <ServiceDestinationsGrid
          sectionTitle={service.destinationsGrid.sectionTitle}
          sectionSubtitle={service.destinationsGrid.sectionSubtitle}
          destinations={service.destinationsGrid.destinations}
          accentColor={service.accentColor}
        />
      )}

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
