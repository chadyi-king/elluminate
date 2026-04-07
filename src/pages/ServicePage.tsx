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
    "amazing-race": "amazing race team building Singapore, corporate amazing race Singapore, outdoor team building Singapore, amazing race corporate event, team building race activity, amazing race school camp Singapore, corporate treasure hunt Singapore, team building adventure Singapore",
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

  const serviceSEO: Record<string, { title: string; description: string; canonical: string }> = {
    // Physical
    "amazing-race": { title: "Amazing Race Team Building Singapore | Elluminate", description: "Singapore's most popular team building activity. City-wide Amazing Race with custom challenges, live leaderboards, and full facilitation. Book now.", canonical: "https://elluminate.sg/services/amazing-race" },
    "archery-tag": { title: "Archery Tag Singapore | Team Building Activity | Elluminate", description: "Action-packed Archery Tag battles for corporate teams. Safe, thrilling, and fully facilitated. Perfect for groups of 20–300 pax in Singapore.", canonical: "https://elluminate.sg/services/archery-tag" },
    "gel-blitz": { title: "GelBlitz Singapore | Gel Blaster Team Building | Elluminate", description: "GelBlitz gel ball blaster battles for corporate teams in Singapore. High-energy, safe, and unforgettable. Perfect for groups who want real adrenaline.", canonical: "https://elluminate.sg/services/gel-blitz" },
    "nerfwar": { title: "Nerfwar Team Building Singapore | Elluminate", description: "Nerfwar foam blaster team battles for corporate groups in Singapore. Competitive, safe, and energetic. Ideal for 20–500 pax. Book with Elluminate.", canonical: "https://elluminate.sg/services/nerfwar" },
    "tag-tical-laser-teambuilding": { title: "Tag-tical Laser Tag Singapore | Team Building Activity | Elluminate", description: "Laser tag team building in Singapore. Fast-paced tactical battles that build teamwork, strategy, and communication. Fully facilitated by Elluminate.", canonical: "https://elluminate.sg/services/tag-tical-laser-teambuilding" },
    "csi-bones": { title: "CSI Team Building Singapore | Forensic Mystery Activity | Elluminate", description: "Immersive CSI investigation team building in Singapore. Teams solve forensic mysteries using clues and deduction. Unique, engaging, and memorable.", canonical: "https://elluminate.sg/services/csi-bones" },
    "monopoly-dash": { title: "Monopoly Dash Team Building Singapore | Elluminate", description: "A live Monopoly-inspired team building experience in Singapore. Strategic, competitive, and perfect for corporate groups of all sizes. Book now.", canonical: "https://elluminate.sg/services/monopoly-dash" },
    "running-man": { title: "Running Man Team Building Singapore | Elluminate", description: "Korean Running Man-inspired team building in Singapore. Name tag ripping, missions, and hilarious challenges. Facilitated by Elluminate's expert team.", canonical: "https://elluminate.sg/services/running-man" },
    "builder-cross": { title: "Builder Cross Team Building Singapore | Elluminate", description: "Builder Cross — a construction and collaboration team challenge for corporate groups in Singapore. Builds communication and creative problem-solving.", canonical: "https://elluminate.sg/services/builder-cross" },
    "cultural-race": { title: "Cultural Race Singapore | Heritage Team Building | Elluminate", description: "Explore Singapore's heritage through an interactive Cultural Race. Challenges across Chinatown, Little India, and Kampong Glam. Book for your team.", canonical: "https://elluminate.sg/services/cultural-race" },
    "minute-to-win-it": { title: "Minute to Win It Singapore | Team Building Game | Elluminate", description: "Fast-paced Minute to Win It team challenges for corporate groups. One-minute games that bring out competitive spirit and laughter. Book in Singapore.", canonical: "https://elluminate.sg/services/minute-to-win-it" },
    "sotong-game": { title: "Sotong Game Singapore | Team Building Activity | Elluminate", description: "The Sotong Game — Singapore's most entertaining team building format. High energy, hilarious, and great for all group sizes. Enquire with Elluminate.", canonical: "https://elluminate.sg/services/sotong-game" },
    "treasure-heist": { title: "Treasure Heist Team Building Singapore | Elluminate", description: "A thrilling heist-themed team building activity in Singapore. Teams compete in strategy, speed, and collaboration. Fully facilitated by Elluminate.", canonical: "https://elluminate.sg/services/treasure-heist" },
    "amongst-us": { title: "Amongst Us Team Building Singapore | Social Deduction Game | Elluminate", description: "A live social-deduction team building experience in Singapore. Find the impostors before the room turns on itself. Unique, engaging, and unforgettable.", canonical: "https://elluminate.sg/services/amongst-us" },
    "alice-in-motherland": { title: "Alice in Motherland Team Building Singapore | Elluminate", description: "A whimsical story-led team building journey in Singapore. Themed stations, puzzles, and immersive team moments. Fully facilitated by Elluminate.", canonical: "https://elluminate.sg/services/alice-in-motherland" },
    "battle-of-the-olympians": { title: "Battle of the Olympians Singapore | Team Building Event | Elluminate", description: "Epic Olympian-themed team competition in Singapore. Athletic rounds, mental games, and all-out team pride. Book for your corporate group with Elluminate.", canonical: "https://elluminate.sg/services/battle-of-the-olympians" },
    // Virtual
    "amazing-race-virtual": { title: "Virtual Amazing Race Singapore | Remote Team Building | Elluminate", description: "Keep remote and hybrid teams engaged with a Virtual Amazing Race. Live digital challenges, real competition, facilitated by Elluminate from Singapore.", canonical: "https://elluminate.sg/services/amazing-race-virtual" },
    "the-gameshow-experience-virtual": { title: "Virtual Gameshow Team Building Singapore | Elluminate", description: "An interactive online game show for remote corporate teams. Fast laughs, high engagement, and easy participation. Book Singapore's top virtual host.", canonical: "https://elluminate.sg/services/the-gameshow-experience-virtual" },
    "the-nuclear-fallout-escape-room-virtual": { title: "Virtual Escape Room Singapore | Nuclear Fallout | Elluminate", description: "An immersive virtual escape room team building experience. Race to stop the nuclear fallout before time runs out. Book this online activity in Singapore.", canonical: "https://elluminate.sg/services/the-nuclear-fallout-escape-room-virtual" },
    "tomb-raider-king-treasure-hunt-virtual": { title: "Tomb Raider King Virtual Team Building Singapore | Elluminate", description: "A thrilling virtual adventure team building game. Solve puzzles, beat challenges, and escape the tomb together. Book this online activity with Elluminate.", canonical: "https://elluminate.sg/services/tomb-raider-king-treasure-hunt-virtual" },
    "fit-in-your-team-virtual": { title: "Fit In Your Team Virtual Activity Singapore | Elluminate", description: "A fun and energising virtual fitness team building experience for remote corporate teams in Singapore. Boosts morale, energy, and team connection.", canonical: "https://elluminate.sg/services/fit-in-your-team-virtual" },
    "the-great-zodiac-hunt-virtual": { title: "Great Zodiac Hunt Virtual Team Building Singapore | Elluminate", description: "A zodiac-themed virtual team challenge for corporate groups. Engaging, culturally rich, and perfect for diverse Singapore teams. Book with Elluminate.", canonical: "https://elluminate.sg/services/the-great-zodiac-hunt-virtual" },
    "the-patriot-act-virtual": { title: "The Patriot Act Virtual Team Building Singapore | Elluminate", description: "A Singapore-themed virtual team building game full of national pride challenges and local knowledge. Perfect for National Day and cohort events.", canonical: "https://elluminate.sg/services/the-patriot-act-virtual" },
    "grand-christmas-delivery": { title: "Grand Christmas Delivery Virtual Team Building Singapore | Elluminate", description: "A festive virtual team building experience themed around Christmas. Perfect for year-end corporate events and remote holiday celebrations in Singapore.", canonical: "https://elluminate.sg/services/grand-christmas-delivery" },
    // Retreats
    "overseas-retreats": { title: "Overseas Corporate Retreat Singapore | Team Retreat Planning | Elluminate", description: "End-to-end overseas corporate retreat planning from Singapore. Bali, Bangkok, Tokyo, and beyond. Elluminate handles everything from flights to facilitation.", canonical: "https://elluminate.sg/services/overseas-retreats" },
    "local-retreats": { title: "Local Corporate Retreat Singapore | Hotel Staycation Packages | Elluminate", description: "Singapore corporate retreats in 3 tiers — Staycation, Heritage, and Luxury. Fully planned, hotel-based retreats for teams of all sizes. Book now.", canonical: "https://elluminate.sg/services/local-retreats" },
    "incentive-travel": { title: "Incentive Travel Singapore | Corporate Reward Trips | Elluminate", description: "Reward your top performers with a fully managed incentive travel programme. Elluminate plans everything from criteria design to on-ground execution.", canonical: "https://elluminate.sg/services/incentive-travel" },
    // Training
    "mbti": { title: "MBTI Workshop Singapore | Corporate Profiling Training | Elluminate", description: "MBTI personality profiling workshops for corporate teams in Singapore. Understand how your team thinks, communicates, and works best together.", canonical: "https://elluminate.sg/services/mbti" },
    "disc": { title: "DISC Assessment Singapore | Corporate Training Workshop | Elluminate", description: "DISC behavioural profiling sessions for Singapore corporate teams. Improve communication, reduce conflict, and build stronger working relationships.", canonical: "https://elluminate.sg/services/disc" },
    "ocean": { title: "OCEAN Profiling Workshop Singapore | Corporate Training | Elluminate", description: "OCEAN personality model training for corporate teams in Singapore. Understand the Big Five traits and build a more self-aware, high-performing team.", canonical: "https://elluminate.sg/services/ocean" },
    "mass-talks": { title: "Corporate Mass Talks Singapore | Keynote & Seminar | Elluminate", description: "Engaging mass talks and keynote sessions for large corporate groups in Singapore. Motivational, insightful, and tailored to your team's goals.", canonical: "https://elluminate.sg/services/mass-talks" },
    "workshops": { title: "Corporate Workshops Singapore | Team Development Training | Elluminate", description: "Interactive corporate workshops in Singapore covering communication, leadership, collaboration, and team development. Customised for your team's goals.", canonical: "https://elluminate.sg/services/workshops" },
    "corporate-days": { title: "Corporate Day Singapore | Company Family Day Planning | Elluminate", description: "Full-day corporate event planning for company days and family days in Singapore. Activities, logistics, catering, and facilitation — all handled by Elluminate.", canonical: "https://elluminate.sg/services/corporate-days" },
    "youth-camps": { title: "Youth Camp Singapore | School Team Building Programme | Elluminate", description: "High-energy youth camps and school programmes in Singapore. Designed for student bonding, leadership development, and cohort-building experiences.", canonical: "https://elluminate.sg/services/youth-camps" },
  };

  const seoData = serviceSEO[slug || ""];

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
        title={seoData?.title ?? `${service.hero.title} | Elluminate`}
        description={seoData?.description ?? `${service.overview.description.slice(0, 145)}... Singapore`}
        keywords={serviceKeywords[slug || ""] || "corporate events Singapore, event planning"}
        canonical={seoData?.canonical ?? `https://elluminate.sg/services/${slug}`}
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

      {/* Breadcrumb schema for SEO — no visible bar on page */}
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://elluminate.sg/" },
        { name: category.label, url: "https://elluminate.sg/" },
        { name: service.hero.title, url: `https://elluminate.sg/services/${slug}` },
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

      {/* Accent gradient bar under hero */}
      <div className="h-1" style={{ background: `linear-gradient(90deg, transparent, ${service.accentColor}, ${service.accentColorSecondary || service.accentColor}, transparent)` }} />

      {/* 2. Video Section */}
      {service.videoSection && service.videoSection.videos && service.videoSection.videos.length > 0 ? (
        <ServiceVideoCarousel
          title={service.videoSection.title}
          subtitle={service.videoSection.subtitle}
          videos={service.videoSection.videos}
          accentColor={service.accentColor}
        />
      ) : service.videoSection ? (
        <ServiceVideoSection
          title={service.videoSection.title}
          subtitle={service.videoSection.subtitle}
          videoUrl={service.videoSection.videoUrl}
          thumbnailImage={service.videoSection.thumbnailImage}
          accentColor={service.accentColor}
        />
      ) : null}

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
          backgroundImage={service.ctaBackgroundImage}
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

      {/* Accent gradient bar above testimonials */}
      <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${service.accentColor}80, transparent)` }} />

      {/* 10. Testimonials */}
      <ServiceTestimonialNew 
        testimonials={service.testimonials} 
        accentColor={service.accentColor}
        backgroundImage={service.testimonialBackgroundImage}
      />

      {/* 11. Final CTA */}
      <ServiceFinalCTA accentColor={service.accentColor} />

      <Footer />
    </div>
  );
};

export default ServicePage;
