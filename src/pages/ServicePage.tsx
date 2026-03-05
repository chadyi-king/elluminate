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
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
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
    "team-building": "team building Singapore, corporate team building, team bonding activities, outdoor team building",
    "dinner-and-dance": "dinner and dance Singapore, D&D event, corporate gala dinner, company dinner dance",
    "awards-ceremonies": "awards ceremony Singapore, corporate awards event, recognition ceremony, annual awards night",
    "overseas-retreats": "overseas retreat Singapore, corporate retreat, company trip planning, team retreat overseas",
    "corporate-anniversaries": "corporate anniversary event Singapore, company milestone celebration, anniversary dinner",
    "leadership-offsites": "leadership offsite Singapore, executive retreat, strategic planning event, leadership development",
    "product-launch": "product launch event Singapore, brand launch, new product reveal, launch party",
    "brand-activations": "brand activation Singapore, experiential marketing, consumer engagement event",
    "client-appreciation": "client appreciation event Singapore, VIP event, customer appreciation dinner",
    "town-halls": "town hall event Singapore, corporate conference, company meeting, all-hands meeting",
    "immersive-experiences": "immersive event Singapore, themed experience, interactive event, experiential event",
    "wellness-events": "corporate wellness event Singapore, team wellness day, employee wellbeing program",
    "event-concept": "event concept development Singapore, creative event design, event planning consultancy",
    "stage-production": "stage production Singapore, AV production, event lighting sound, technical production",
    "custom-themes": "custom theme event Singapore, themed party, venue transformation, event theming",
    "emcee-media": "event emcee Singapore, event photography, corporate videography, MC services",
    "amazing-race": "amazing race Singapore, corporate amazing race, team building race, outdoor race challenge",
    "csi-bones": "CSI team building Singapore, murder mystery event, detective team building, investigation game",
    "cultural-race": "cultural race Singapore, heritage team building, cultural exploration activity",
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
    "amazing-race-virtual": "virtual amazing race Singapore, online team building, remote amazing race",
    "fit-in-your-team-virtual": "virtual fitness team building, online wellness activity, remote team fitness",
    "the-gameshow-experience-virtual": "virtual game show Singapore, online corporate game show, remote trivia team building",
    "the-great-zodiac-hunt-virtual": "virtual zodiac hunt, online treasure hunt team building, remote team challenge",
    "the-nuclear-fallout-escape-room-virtual": "virtual escape room Singapore, online escape room team building, remote puzzle challenge",
    "the-patriot-act-virtual": "virtual Singapore games, patriot act team building, national day virtual event",
    "tomb-raider-king-treasure-hunt-virtual": "virtual treasure hunt Singapore, online adventure team building, tomb raider team event",
    "grand-christmas-delivery": "virtual Christmas party Singapore, online Christmas team building, remote holiday event",
    "local-retreats": "local retreat Singapore, staycation team building, Singapore hotel retreat corporate",
    "mbti": "MBTI Singapore, Myers-Briggs team building, personality profiling corporate, MBTI workshop",
    "disc": "DISC assessment Singapore, DISC profiling corporate, communication training team building",
    "ocean": "OCEAN profiling Singapore, Big Five personality test, personality assessment corporate",
    "mass-talks": "mass talk Singapore, corporate keynote speaker, large-scale presentation event",
    "workshops": "corporate workshop Singapore, skill building workshop, training workshop team",
    "youth-camps": "youth camp Singapore, school camp, student leadership camp, CCA bonding camp",
    "corporate-days": "corporate day Singapore, company fun day, team day out, corporate event day",
    "summits": "corporate summit Singapore, conference event, business summit planning",
    "government-events": "government event Singapore, public sector event, government conference",
    "private-events": "private event Singapore, exclusive event, intimate celebration",
    "family-fun-days": "family fun day Singapore, corporate family event, family day company",
    "corporate-carnivals": "corporate carnival Singapore, company carnival, fun fair corporate",
    "vip-gala": "VIP gala Singapore, exclusive gala dinner, luxury corporate event",
    "grand-opening": "grand opening Singapore, store opening event, launch ceremony",
  };

  // Check if this service has the new enhanced structure
  const hasEnhancedStructure = service.clientLogos || service.recentEvents || service.pricing;

  // Determine service category for breadcrumbs
  const getCategory = () => {
    if (slug?.includes("virtual") || slug === "grand-christmas-delivery") return { label: "Virtual Team Building", href: "/" };
    if (["mbti", "disc", "ocean", "mass-talks", "workshops", "youth-camps", "corporate-days"].includes(slug || "")) return { label: "Training", href: "/" };
    if (["overseas-retreats", "local-retreats"].includes(slug || "")) return { label: "Retreats", href: "/" };
    if (["amazing-race", "csi-bones", "cultural-race", "archery-tag", "builder-cross", "gel-blitz", "minute-to-win-it", "monopoly-dash", "nerfwar", "running-man", "sotong-game", "tag-tical-laser-teambuilding", "treasure-heist"].includes(slug || "")) return { label: "Team Building", href: "/" };
    return { label: "Services", href: "/" };
  };

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
