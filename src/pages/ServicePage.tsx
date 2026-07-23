import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExperienceCard } from "@/components/ExperienceCard";
import { GoldParticles } from "@/components/GoldParticles";
import { ServiceHeroSplit } from "@/components/service-page/ServiceHeroSplit";
import { ServiceVideoSection } from "@/components/service-page/ServiceVideoSection";
import { ServiceVideoCarousel } from "@/components/service-page/ServiceVideoCarousel";
import { ServiceOverviewNew } from "@/components/service-page/ServiceOverviewNew";
import { ServiceExperienceJourney } from "@/components/service-page/ServiceExperienceJourney";
import { ServiceCTANew } from "@/components/service-page/ServiceCTANew";
import { ServiceFinalCTA } from "@/components/service-page/ServiceFinalCTA";
import { ServiceFlowSection } from "@/components/service-page/ServiceFlowSection";
import { ServiceTransitionStrip } from "@/components/service-page/ServiceTransitionStrip";
import { ServicePlanningBrief } from "@/components/service-page/ServicePlanningBrief";
import { ServicePackageSelector } from "@/components/service-page/ServicePackageSelector";
import { servicesData } from "@/data/servicesData";
import { serviceContentQuality } from "@/data/serviceContentQuality";
import {
  allInScopeServiceSlugs,
} from "@/data/siteScope";
import { getServicePageBlueprint } from "@/data/servicePageBlueprints";
import { SEO } from "@/components/SEO";
import { ServiceMiniGallery } from "@/components/service-page/ServiceMiniGallery";
import { ServiceDestinationsGrid } from "@/components/service-page/ServiceDestinationsGrid";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { ServiceFAQAccordion } from "@/components/service-page/ServiceFAQAccordion";
import { getRouteSeo } from "@/data/seoRoutes";
import { getServiceCommercialProfile } from "@/data/serviceCommercialProfiles";
import { ServiceWorldFrame } from "@/components/service-worlds/ServiceWorldFrame";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;
  const blueprint = slug ? getServicePageBlueprint(slug) : null;

  if (!service || !slug || !blueprint || !allInScopeServiceSlugs.has(slug)) {
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

  const serviceSEO: Record<string, { title: string; description: string; canonical: string }> = {
    "team-building": {
      title: "Corporate Team Building Singapore | Elluminate",
      description: "Plan corporate physical team building in Singapore with facilitated indoor and outdoor activities, trusted event support, and a fast Plan My Event enquiry form.",
      canonical: "https://elluminate.sg/services/team-building",
    },
    "amazing-race": { title: "Amazing Race Team Building Singapore | Elluminate", description: "Plan a facilitated Amazing Race team-building experience in Singapore with customised routes, clues and checkpoint challenges shaped around your group.", canonical: "https://elluminate.sg/services/amazing-race" },
    "archery-tag": { title: "Archery Tag Singapore | Team Building Activity | Elluminate", description: "Action-packed Archery Tag battles for corporate teams. Safe, thrilling, and fully facilitated. Perfect for groups of 20–300 pax in Singapore.", canonical: "https://elluminate.sg/services/archery-tag" },
    "gel-blitz": { title: "GelBlitz Singapore | Gel Blaster Team Building | Elluminate", description: "GelBlitz gel ball blaster battles for corporate teams in Singapore. High-energy, safe, and unforgettable. Perfect for groups who want real adrenaline.", canonical: "https://elluminate.sg/services/gel-blitz" },
    "nerfwar": { title: "Nerfwar Team Building Singapore | Elluminate", description: "Nerfwar foam blaster team battles for corporate groups in Singapore. Competitive, safe, and energetic. Ideal for 20–500 pax. Book with Elluminate.", canonical: "https://elluminate.sg/services/nerfwar" },
    "tag-tical-laser-teambuilding": { title: "Laser Tag Team Building Singapore | Elluminate", description: "Laser tag team building in Singapore. Fast-paced tactical battles that build teamwork, strategy, and communication. Fully facilitated by Elluminate.", canonical: "https://elluminate.sg/services/tag-tical-laser-teambuilding" },
    "csi-bones": { title: "CSI Team Building Singapore | Elluminate", description: "Immersive CSI investigation team building in Singapore. Teams solve forensic mysteries using clues and deduction. Unique, engaging, and memorable.", canonical: "https://elluminate.sg/services/csi-bones" },
    "monopoly-dash": { title: "Monopoly Dash Team Building Singapore | Elluminate", description: "A live Monopoly-inspired team building experience in Singapore. Strategic, competitive, and perfect for corporate groups of all sizes. Book now.", canonical: "https://elluminate.sg/services/monopoly-dash" },
    "running-man": { title: "Running Man Team Building Singapore | Elluminate", description: "Korean Running Man-inspired team building in Singapore. Name tag ripping, missions, and hilarious challenges. Facilitated by Elluminate's expert team.", canonical: "https://elluminate.sg/services/running-man" },
    "builder-cross": { title: "Builder Cross Team Building Singapore | Elluminate", description: "Builder Cross, a construction and collaboration team challenge for corporate groups in Singapore. Builds communication and creative problem-solving.", canonical: "https://elluminate.sg/services/builder-cross" },
    "cultural-race": { title: "Cultural Race Singapore | Heritage Race | Elluminate", description: "Explore Singapore's heritage through an interactive Cultural Race. Challenges across Chinatown, Little India, and Kampong Glam. Book for your team.", canonical: "https://elluminate.sg/services/cultural-race" },
    "minute-to-win-it": { title: "Minute to Win It Singapore | Team Building Game | Elluminate", description: "Fast-paced Minute to Win It team challenges for corporate groups. One-minute games that bring out competitive spirit and laughter. Book in Singapore.", canonical: "https://elluminate.sg/services/minute-to-win-it" },
    "sotong-game": { title: "Sotong Game Singapore | Team Building Activity | Elluminate", description: "The Sotong Game, Singapore's most entertaining team building format. High energy, hilarious, and great for all group sizes. Enquire with Elluminate.", canonical: "https://elluminate.sg/services/sotong-game" },
    "treasure-heist": { title: "Treasure Heist Team Building Singapore | Elluminate", description: "A thrilling heist-themed team building activity in Singapore. Teams compete in strategy, speed, and collaboration. Fully facilitated by Elluminate.", canonical: "https://elluminate.sg/services/treasure-heist" },
    "amongst-us": { title: "Amongst Us Team Building Singapore | Elluminate", description: "A live social-deduction team building experience in Singapore. Find the impostors before the room turns on itself. Unique, engaging, and unforgettable.", canonical: "https://elluminate.sg/services/amongst-us" },
    "alice-in-motherland": { title: "Alice in Motherland Team Building Singapore | Elluminate", description: "A whimsical story-led team building journey in Singapore. Themed stations, puzzles, and immersive team moments. Fully facilitated by Elluminate.", canonical: "https://elluminate.sg/services/alice-in-motherland" },
    "battle-of-the-olympians": { title: "Battle of the Olympians Singapore | Elluminate", description: "Epic Olympian-themed team competition in Singapore. Athletic rounds, mental games, and all-out team pride. Book for your corporate group with Elluminate.", canonical: "https://elluminate.sg/services/battle-of-the-olympians" },
    // Virtual
    "amazing-race-virtual": { title: "Virtual Amazing Race Singapore | Elluminate", description: "Keep remote and hybrid teams engaged with a Virtual Amazing Race. Live digital challenges, real competition, facilitated by Elluminate from Singapore.", canonical: "https://elluminate.sg/services/amazing-race-virtual" },
    "the-gameshow-experience-virtual": { title: "Virtual Gameshow Team Building Singapore | Elluminate", description: "An interactive online game show for remote corporate teams. Fast laughs, high engagement, and easy participation. Book Singapore's top virtual host.", canonical: "https://elluminate.sg/services/the-gameshow-experience-virtual" },
    "the-nuclear-fallout-escape-room-virtual": { title: "Virtual Escape Room Singapore | Nuclear Fallout | Elluminate", description: "An immersive virtual escape room team building experience. Race to stop the nuclear fallout before time runs out. Book this online activity in Singapore.", canonical: "https://elluminate.sg/services/the-nuclear-fallout-escape-room-virtual" },
    "tomb-raider-king-treasure-hunt-virtual": { title: "Tomb Raider Virtual Team Building | Elluminate", description: "A thrilling virtual adventure team building game. Solve puzzles, beat challenges, and escape the tomb together. Book this online activity with Elluminate.", canonical: "https://elluminate.sg/services/tomb-raider-king-treasure-hunt-virtual" },
    "fit-in-your-team-virtual": { title: "Fit In Your Team Virtual Activity Singapore | Elluminate", description: "A fun and energising virtual fitness team building experience for remote corporate teams in Singapore. Boosts morale, energy, and team connection.", canonical: "https://elluminate.sg/services/fit-in-your-team-virtual" },
    "the-great-zodiac-hunt-virtual": { title: "Virtual Zodiac Hunt Team Building | Elluminate", description: "A zodiac-themed virtual team challenge for corporate groups. Engaging, culturally rich, and perfect for diverse Singapore teams. Book with Elluminate.", canonical: "https://elluminate.sg/services/the-great-zodiac-hunt-virtual" },
    "the-patriot-act-virtual": { title: "The Patriot Act Virtual Team Building Singapore | Elluminate", description: "A Singapore-themed virtual team building game full of national pride challenges and local knowledge. Perfect for National Day and cohort events.", canonical: "https://elluminate.sg/services/the-patriot-act-virtual" },
    "grand-christmas-delivery": { title: "Christmas Virtual Team Building | Elluminate", description: "A festive virtual team building experience themed around Christmas. Perfect for year-end corporate events and remote holiday celebrations in Singapore.", canonical: "https://elluminate.sg/services/grand-christmas-delivery" },
    // Retreats
    "overseas-retreats": { title: "Overseas Corporate Retreat Singapore | Elluminate", description: "End-to-end overseas corporate retreat planning from Singapore. Bali, Bangkok, Tokyo, and beyond. Elluminate handles everything from flights to facilitation.", canonical: "https://elluminate.sg/services/overseas-retreats" },
    "local-retreats": { title: "Local Corporate Retreat Singapore | Elluminate", description: "Singapore corporate retreats in 3 tiers: Staycation, Heritage, and Luxury. Fully planned, hotel-based retreats for teams of all sizes. Book now.", canonical: "https://elluminate.sg/services/local-retreats" },
    "incentive-travel": { title: "Incentive Travel Singapore | Elluminate", description: "Reward your top performers with a fully managed incentive travel programme. Elluminate plans everything from criteria design to on-ground execution.", canonical: "https://elluminate.sg/services/incentive-travel" },
    // Training
    "mbti": { title: "MBTI Workshop Singapore | Elluminate", description: "MBTI personality profiling workshops for corporate teams in Singapore. Understand how your team thinks, communicates, and works best together.", canonical: "https://elluminate.sg/services/mbti" },
    "disc": { title: "DISC Workshop Singapore | Elluminate", description: "DISC behavioural profiling sessions for Singapore corporate teams. Improve communication, reduce conflict, and build stronger working relationships.", canonical: "https://elluminate.sg/services/disc" },
    "ocean": { title: "OCEAN Profiling Singapore | Elluminate", description: "OCEAN personality model training for corporate teams in Singapore. Understand the Big Five traits and build a more self-aware, high-performing team.", canonical: "https://elluminate.sg/services/ocean" },
    "mass-talks": { title: "Corporate Mass Talks Singapore | Elluminate", description: "Engaging mass talks and keynote sessions for large corporate groups in Singapore. Motivational, insightful, and tailored to your team's goals.", canonical: "https://elluminate.sg/services/mass-talks" },
    "workshops": { title: "Corporate Workshops Singapore | Elluminate", description: "Interactive corporate workshops in Singapore covering communication, leadership, collaboration, and team development. Customised for your team's goals.", canonical: "https://elluminate.sg/services/workshops" },
    "corporate-days": { title: "Corporate & Family Day Singapore | Elluminate", description: "Full-day corporate event planning for company days and family days in Singapore. Activities, logistics, catering, and facilitation, all by Elluminate.", canonical: "https://elluminate.sg/services/corporate-days" },
    "youth-camps": { title: "Youth Camps Singapore | School Programmes | Elluminate", description: "High-energy youth camps and school programmes in Singapore. Designed for student bonding, leadership development, and cohort-building experiences.", canonical: "https://elluminate.sg/services/youth-camps" },
    "wellness-events": { title: "Corporate Wellness Events Singapore | Elluminate", description: "Wellness days for corporate teams in Singapore. Yoga, mindfulness, nutrition, and team reset experiences. Fully facilitated by Elluminate.", canonical: "https://elluminate.sg/services/wellness-events" },
    "leadership-offsites": { title: "Leadership Offsite Singapore | Elluminate", description: "Strategy-focused leadership offsites for senior teams in Singapore. Premium venues, expert facilitation, structured alignment. Book with Elluminate.", canonical: "https://elluminate.sg/services/leadership-offsites" },
  };

  // Kept temporarily for migration traceability; live metadata now comes only
  // from SeoRouteManifest so crawler and React output cannot drift.
  void serviceSEO;
  const seoData = getRouteSeo(`/services/${slug || ""}`);
  const contentQuality = slug ? serviceContentQuality[slug] : undefined;
  const commercialProfile = getServiceCommercialProfile(slug);
  const displayHeroTitle = contentQuality?.heroTitle ?? service.hero.title;
  const displayHeroSubtitle = contentQuality?.heroSubtitle ?? service.hero.subtitle;
  const displayHeroTagline = contentQuality?.heroSubline ?? service.hero.tagline;
  const displayOverviewDescription = contentQuality?.overviewDescription ?? service.overview.description;
  const displayFaqs = blueprint.faqs;
  const relatedServices = blueprint.relatedSlugs;
  const isActivityV2 = blueprint.layoutVersion === "activity-v2";
  // Determine service category for breadcrumbs
  const category = blueprint.family === "retreat"
    ? { label: "Retreats", href: "/services/retreats" }
    : blueprint.family === "training"
      ? { label: "Training", href: "/services/training" }
      : { label: "Team Building", href: "/services/team-building" };

  return (
    <ServiceWorldFrame slug={slug}>
    <div className="service-world-page min-h-screen bg-background">
      <SEO 
        title={seoData?.title ?? `${service.hero.title} | Elluminate`}
        description={seoData?.description ?? `${displayOverviewDescription.slice(0, 145)}... Singapore`}
        canonical={seoData?.canonical ?? `https://elluminate.sg/services/${slug}`}
      />
      <ServiceSchema 
        name={displayHeroTitle}
        description={displayOverviewDescription.slice(0, 200)}
        slug={slug || ""}
        price={commercialProfile?.publicPrice?.amount}
        priceUnit={commercialProfile?.publicPrice?.unit}
      />
      {displayFaqs && displayFaqs.length > 0 && (
        <FAQSchema faqs={displayFaqs} />
      )}
      <GoldParticles />
      <Navbar />

      {/* Breadcrumb schema for SEO — no visible bar on page */}
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://elluminate.sg/" },
        { name: category.label, url: `https://elluminate.sg${category.href}` },
        { name: displayHeroTitle, url: `https://elluminate.sg/services/${slug}` },
      ]} />

      {/* 1. Hero Section */}
      <ServiceHeroSplit
        title={displayHeroTitle}
        subtitle={displayHeroSubtitle}
        tagline={displayHeroTagline}
        backgroundImage={blueprint.assets.hero}
        accentColor={service.accentColor}
        accentColorSecondary={service.accentColorSecondary}
        slug={slug}
      />

      {/* Accent gradient bar under hero */}
      <div className="h-1" style={{ background: `linear-gradient(90deg, transparent, ${service.accentColor}, ${service.accentColorSecondary || service.accentColor}, transparent)` }} />

      <ServiceTransitionStrip
        slug={slug}
        family={blueprint.family}
        accentColor={service.accentColor}
        stages={isActivityV2 ? blueprint.transitionMoments : blueprint.journey.stages}
        stageIcons={isActivityV2 ? blueprint.transitionMoments.map((moment) => moment.icon) : undefined}
        variant={isActivityV2 ? "activity-v2" : "legacy"}
      />

      {/* 2. Video Section */}
      {blueprint.video?.videos && blueprint.video.videos.length > 0 ? (
        <ServiceVideoCarousel
          title={blueprint.video.title}
          subtitle={blueprint.video.subtitle}
          videos={blueprint.video.videos}
          accentColor={service.accentColor}
        />
      ) : blueprint.video ? (
        <ServiceVideoSection
          title={blueprint.video.title}
          subtitle={blueprint.video.subtitle}
          videoUrl={blueprint.video.videoUrl}
          thumbnailImage={blueprint.video.thumbnailImage}
          accentColor={service.accentColor}
        />
      ) : null}

      {/* 4. What Is This Service? (Overview) */}
      <ServiceOverviewNew
        description={blueprint.overviewParagraphs.join("\n\n")}
        accentColor={service.accentColor}
        accentColorSecondary={service.accentColorSecondary}
        eyebrow={isActivityV2 ? blueprint.overviewPresentation.eyebrow : undefined}
        title={isActivityV2 ? blueprint.overviewPresentation.title : undefined}
        backgroundImage={isActivityV2 ? blueprint.assets.overviewBackground : undefined}
        variant={isActivityV2 ? "immersive" : "light"}
      />

      {/* Optional specialist extension: destinations and retreat programme worlds. */}
      {blueprint.specialistExtension?.kind === "destinations" && (
        <ServiceDestinationsGrid
          sectionTitle={blueprint.specialistExtension.data.sectionTitle}
          sectionSubtitle={blueprint.specialistExtension.data.sectionSubtitle}
          destinations={blueprint.specialistExtension.data.destinations}
          accentColor={service.accentColor}
        />
      )}

      <ServiceExperienceJourney
        slug={slug}
        content={blueprint.journey}
        serviceTitle={displayHeroTitle}
        accentColor={service.accentColor}
        accentColorSecondary={service.accentColorSecondary}
        journeyMedia={blueprint.journeyMedia}
        variant={isActivityV2 ? "activity-v2" : "legacy"}
        actorLeftSrc={blueprint.assets.journeyActorLeft}
        actorRightSrc={blueprint.assets.journeyActorRight}
      />

      <ServicePlanningBrief
        slug={slug}
        family={blueprint.family}
        title={blueprint.card.shortTitle}
        accentColor={service.accentColor}
        facts={blueprint.facts}
        variant={isActivityV2 ? "activity-v2" : "legacy"}
        packages={isActivityV2 ? blueprint.packages : undefined}
        addOns={isActivityV2 ? blueprint.addOns : undefined}
        actorSrc={blueprint.assets.plannerActor}
        plannerGuidance={blueprint.plannerGuidance}
      />

      {!isActivityV2 ? (
        <ServicePackageSelector
          serviceSlug={slug}
          serviceTitle={blueprint.card.shortTitle}
          accentColor={service.accentColor}
          packages={blueprint.packages}
          addOns={blueprint.addOns}
        />
      ) : null}

      {/* 8. Mid-Page CTA */}
      <ServiceCTANew
        headline={blueprint.midCta.headline}
        subtext={blueprint.midCta.subtext}
        buttonLabel={blueprint.midCta.buttonLabel}
        serviceSlug={slug}
        accentColor={service.accentColor}
        accentColorSecondary={service.accentColorSecondary}
        backgroundImage={blueprint.assets.ctaBackground}
      />

      {/* 9. Perfect For Section */}
      <ServiceFlowSection
        sectionTitle="Perfect For"
        sectionSubtitle={`Groups that get the most from ${blueprint.card.shortTitle}`}
        items={[...blueprint.perfectFor]}
        accentColor={service.accentColor}
        itemsPerRow={isActivityV2 ? 4 : 3}
        showNumbers={false}
        variant={isActivityV2 ? "activity-v2" : "legacy"}
      />

      {/* FAQ */}
      {displayFaqs && displayFaqs.length > 0 && (
        <ServiceFAQAccordion
          title={`${displayHeroTitle} FAQ`}
          subtitle={
            slug === "amazing-race"
              ? "Everything organisers usually ask before race day."
              : `Frequently asked questions about planning ${displayHeroTitle} with Elluminate.`
          }
          accentColor={service.accentColor}
          faqs={displayFaqs}
        />
      )}

      {/* Mini gallery (data-driven) */}
      <ServiceMiniGallery
        title={blueprint.galleryTitle}
        images={blueprint.gallery.map(({ src, alt }) => ({ src, alt }))}
      />

      {/* Related experiences */}
      {relatedServices.length > 0 && (
        <section className="bg-background px-4 py-16 sm:py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {isActivityV2 ? "Keep the Adventure Going" : "Related Experiences"}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {isActivityV2
                  ? "Want a different twist? Explore another Elluminate experience built for your group."
                  : "Compare this with other live Elluminate formats that may fit the same brief."}
              </p>
              <Link
                to={category.href}
                className="mt-4 inline-flex text-sm font-bold text-primary underline-offset-4 hover:underline"
              >
                Explore all {category.label.toLowerCase()} options
              </Link>
            </div>
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
              {relatedServices.map((relatedSlug) => (
                <div
                  key={relatedSlug}
                  className="w-[82vw] max-w-[19rem] shrink-0 snap-start sm:w-auto sm:max-w-none"
                >
                  <ExperienceCard slug={relatedSlug} variant="compact" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. Final CTA */}
      <ServiceFinalCTA
        headline={blueprint.closingCta.headline}
        subtext={blueprint.closingCta.subtext}
        buttonLabel={blueprint.closingCta.buttonLabel}
        serviceSlug={slug}
        accentColor={service.accentColor}
      />

      <Footer />
    </div>
    </ServiceWorldFrame>
  );
};

export default ServicePage;
