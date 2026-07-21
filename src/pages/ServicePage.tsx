import { useMemo } from "react";
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
import { ServiceQuickFacts } from "@/components/service-page/ServiceQuickFacts";
import { ServiceCTANew } from "@/components/service-page/ServiceCTANew";
import { ServiceTestimonialNew } from "@/components/service-page/ServiceTestimonialNew";
import { ServiceFinalCTA } from "@/components/service-page/ServiceFinalCTA";
import { ServiceFlowSection } from "@/components/service-page/ServiceFlowSection";
import { ServiceRecentEventsTicker } from "@/components/service-page/ServiceRecentEventsTicker";
import { ServiceHowItWorksWithPricing } from "@/components/service-page/ServiceHowItWorksWithPricing";
import { ServiceOutcomes } from "@/components/service-page/ServiceOutcomes";
import { ServicePillsSection } from "@/components/service-page/ServicePillsSection";
import { servicesData } from "@/data/servicesData";
import { serviceContentQuality } from "@/data/serviceContentQuality";
import { getVerifiedLocalServiceGalleryPaths } from "@/data/serviceGalleryMedia";
import {
  allInScopeServiceSlugs,
  equipmentActivityServices,
  physicalTeamBuildingServices,
  retreatServices,
  serviceCategoryLabels,
  trainingServices,
  virtualTeamBuildingServices,
} from "@/data/siteScope";
import { SEO } from "@/components/SEO";
import { ServiceMiniGallery } from "@/components/service-page/ServiceMiniGallery";
import { ServiceDestinationsGrid } from "@/components/service-page/ServiceDestinationsGrid";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { ServiceFAQAccordion } from "@/components/service-page/ServiceFAQAccordion";
import { getRouteSeo } from "@/data/seoRoutes";
import {
  ServiceWorldBriefing,
  ServiceWorldFrame,
} from "@/components/service-worlds/ServiceWorldFrame";

const recommendationGroups = [
  { items: physicalTeamBuildingServices, count: 2 },
  { items: equipmentActivityServices, count: 1 },
  { items: virtualTeamBuildingServices, count: 2 },
  { items: retreatServices, count: 1 },
  { items: trainingServices, count: 2 },
];

const shuffle = <T,>(items: T[]) => {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
};

const buildRelatedServices = (currentSlug: string) =>
  shuffle(
    recommendationGroups.flatMap(({ items, count }) =>
      shuffle(items.filter((item) => item.slug !== currentSlug && servicesData[item.slug]))
        .slice(0, count)
        .map((item) => item.slug),
    ),
  );

const overseasRetreatsFaqs = [
  {
    question: "What is a corporate retreat?",
    answer:
      "A corporate retreat is an off-site event that combines team bonding, strategic planning, leadership development, and employee engagement activities. Retreats help teams strengthen relationships while focusing on business objectives.",
  },
  {
    question: "Do you organise overseas corporate retreats?",
    answer:
      "Yes. We organise corporate retreats in destinations such as Bali, Batam, Bintan, Phuket, Bangkok, Johor Bahru, and other regional locations.",
  },
  {
    question: "What activities can be included in a corporate retreat?",
    answer:
      "Activities may include team building games, Amazing Race challenges, workshops, leadership development sessions, personality profiling, CSR activities, cultural experiences, and gala dinners.",
  },
  {
    question: "How long should a corporate retreat be?",
    answer:
      "Most corporate retreats range from one to four days depending on objectives, travel requirements, and budget.",
  },
  {
    question: "Can you handle retreat logistics and planning?",
    answer:
      "Yes. We can assist with programme design, activities, venue sourcing, accommodation, transport, meals, facilitators, and event management.",
  },
];

const amazingRaceFaqs = [
  {
    question: "What is an Amazing Race team building activity?",
    answer:
      "Amazing Race is a team building experience where participants solve clues, complete challenges, and navigate checkpoints while working together toward a common goal.",
  },
  {
    question: "Is Amazing Race suitable for all fitness levels?",
    answer:
      "Yes. We design routes and challenges to suit different age groups, fitness levels, and participant profiles.",
  },
  {
    question: "What happens if it rains during the Amazing Race?",
    answer:
      "We provide wet-weather contingency plans and can incorporate sheltered checkpoints, indoor venues, or alternative game formats.",
  },
  {
    question: "Can the Amazing Race be customised?",
    answer:
      "Yes. We can customise challenges, routes, branding, company messages, and learning outcomes.",
  },
  {
    question: "Where can Amazing Race team building activities be conducted?",
    answer:
      "Popular locations include Sentosa, Marina Bay, Gardens by the Bay, Chinatown, Civic District, Jewel Changi Airport, and custom locations across Singapore.",
  },
];

const runningManFaqs = [
  {
    question: "What is a Running Man team building event?",
    answer:
      "Running Man is a fast-paced team building programme inspired by the popular Korean variety show. Teams compete in a series of interactive missions, games, and challenges to earn points.",
  },
  {
    question: "Is Name Tag Elimination included?",
    answer:
      "Name Tag Elimination can be included as an optional finale activity depending on venue suitability and participant preferences.",
  },
  {
    question: "Is Running Man suitable for corporate teams?",
    answer:
      "Yes. Running Man activities are designed for corporate team bonding and focus on teamwork, communication, strategy, and engagement.",
  },
  {
    question: "Can Running Man be conducted indoors?",
    answer:
      "Yes. Indoor and outdoor versions are available depending on venue availability and weather conditions.",
  },
  {
    question: "How many participants can join a Running Man event?",
    answer:
      "We can facilitate Running Man programmes for small teams of 20 participants to large-scale corporate events with several hundred participants.",
  },
];

const workshopsFaqs = [
  {
    question: "What corporate workshops do you offer?",
    answer:
      "We offer workshops covering communication, teamwork, leadership, personality profiling, employee engagement, workplace collaboration, and personal effectiveness.",
  },
  {
    question: "Can workshops be combined with team building activities?",
    answer:
      "Yes. Many organisations combine workshops with experiential team building activities to reinforce learning outcomes.",
  },
  {
    question: "Do you provide personality profiling workshops?",
    answer:
      "Yes. We offer DISC, MBTI, and other personality assessment-based programmes to improve self-awareness and team dynamics.",
  },
  {
    question: "How long are your workshops?",
    answer:
      "Workshops can range from one-hour sessions to full-day programmes depending on objectives and learning outcomes.",
  },
  {
    question: "Are your workshops suitable for hybrid teams?",
    answer:
      "Yes. Selected workshops can be conducted in-person, virtually, or in a hybrid format.",
  },
];

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;
  const relatedServices = useMemo(() => buildRelatedServices(slug || "services"), [slug]);

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
    "team-building": "corporate team building Singapore, physical team building Singapore, team bonding activities Singapore, company team bonding Singapore, indoor team building Singapore, outdoor team building Singapore, HR team building Singapore",
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
    "wellness-events": "corporate wellness Singapore, wellness day team building, mindfulness corporate event, employee wellbeing programme",
    "leadership-offsites": "leadership offsite Singapore, executive retreat, strategy offsite corporate, management team retreat Singapore",
  };

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

  const seoData = getRouteSeo(`/services/${slug || ""}`) ?? serviceSEO[slug || ""];
  const contentQuality = slug ? serviceContentQuality[slug] : undefined;
  const displayHeroTitle = contentQuality?.heroTitle ?? service.hero.title;
  const displayHeroSubtitle = contentQuality?.heroSubtitle ?? service.hero.subtitle;
  const displayHeroTagline = contentQuality?.heroSubline ?? service.hero.tagline;
  const displayOverviewDescription = contentQuality?.overviewDescription ?? service.overview.description;
  const legacyFaqsBySlug: Record<string, typeof service.faqs> = {
    "running-man": runningManFaqs,
    "workshops": workshopsFaqs,
    "overseas-retreats": overseasRetreatsFaqs,
    "amazing-race": amazingRaceFaqs,
  };
  const displayFaqs = contentQuality?.faqs?.length
    ? contentQuality.faqs
    : legacyFaqsBySlug[slug || ""] ?? service.faqs;
  const journeyImages = Array.from(
    new Set(
      [
        ...getVerifiedLocalServiceGalleryPaths(slug || "", 6),
        service.overview.backgroundImage,
        service.howItWorksImage,
        service.addOnsImage,
        service.ctaBackgroundImage,
        service.testimonialBackgroundImage,
        ...(service.miniGallery?.images.map((image) => image.src) ?? []),
        ...service.gallery,
        service.hero.backgroundImage,
      ].filter((image): image is string => Boolean(image)),
    ),
  );

  // Check if this service has the new enhanced structure
  const hasEnhancedStructure = service.clientLogos || service.recentEvents || service.pricing;
  const showLegacyEnhancedStructure = hasEnhancedStructure && !contentQuality?.hideLegacyPricing;

  // Determine service category for breadcrumbs
  const getCategory = () => ({
    label: serviceCategoryLabels[slug] ?? "Services",
    href: "/",
  });

  const category = getCategory();

  return (
    <ServiceWorldFrame slug={slug}>
    <div className="service-world-page min-h-screen bg-background">
      <SEO 
        title={seoData?.title ?? `${service.hero.title} | Elluminate`}
        description={seoData?.description ?? `${displayOverviewDescription.slice(0, 145)}... Singapore`}
        keywords={serviceKeywords[slug || ""] || "corporate events Singapore, event planning"}
        canonical={seoData?.canonical ?? `https://elluminate.sg/services/${slug}`}
      />
      <ServiceSchema 
        name={displayHeroTitle}
        description={displayOverviewDescription.slice(0, 200)}
        slug={slug || ""}
        price={contentQuality?.hideLegacyPricing ? undefined : service.pricing?.startingPrice}
      />
      {displayFaqs && displayFaqs.length > 0 && (
        <FAQSchema faqs={displayFaqs} />
      )}
      <GoldParticles />
      <Navbar />

      {/* Breadcrumb schema for SEO — no visible bar on page */}
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://elluminate.sg/" },
        { name: category.label, url: "https://elluminate.sg/" },
        { name: displayHeroTitle, url: `https://elluminate.sg/services/${slug}` },
      ]} />

      {/* 1. Hero Section */}
      <ServiceHeroSplit
        title={displayHeroTitle}
        subtitle={displayHeroSubtitle}
        tagline={displayHeroTagline}
        backgroundImage={service.hero.backgroundImage}
        accentColor={service.accentColor}
        accentColorSecondary={service.accentColorSecondary}
        slug={slug}
      />

      {/* Accent gradient bar under hero */}
      <div className="h-1" style={{ background: `linear-gradient(90deg, transparent, ${service.accentColor}, ${service.accentColorSecondary || service.accentColor}, transparent)` }} />

      <ServiceWorldBriefing slug={slug} accentColor={service.accentColor} />

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
      {service.recentEvents && !contentQuality?.hideRecentEvents && (
        <section className="py-8 px-4 bg-background">
          <ServiceRecentEventsTicker events={service.recentEvents} accentColor={service.accentColor} />
        </section>
      )}

      {/* 4. What Is This Service? (Overview) */}
      <ServiceOverviewNew
        description={displayOverviewDescription}
        accentColor={service.accentColor}
        accentColorSecondary={service.accentColorSecondary}
        eyebrow={slug === "amazing-race" ? "The Adventure" : undefined}
        title={slug === "amazing-race" ? "Your Race Day, From First Clue to Final Flag" : undefined}
        backgroundImage={slug === "amazing-race" ? service.overview.backgroundImage : undefined}
      />

      <ServiceExperienceJourney
        slug={slug}
        serviceTitle={displayHeroTitle}
        accentColor={service.accentColor}
        accentColorSecondary={service.accentColorSecondary}
        fallbackImages={journeyImages}
      />

      <ServiceQuickFacts slug={slug} accentColor={service.accentColor} />

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
      {showLegacyEnhancedStructure && service.howItWorksFlow && service.pricing && service.addOns && (
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
      {!hasEnhancedStructure && !contentQuality?.planningPoints && service.howItWorksFlow && (
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
      {service.outcomes && !service.hideOutcomes && !contentQuality?.hideOutcomes && (
        <ServiceOutcomes
          outcomes={service.outcomes}
          accentColor={service.accentColor}
        />
      )}

      {/* Other Flow Sections (for services without enhanced structure) */}
      {!hasEnhancedStructure && !contentQuality?.planningPoints && service.whatToExpectFlow && (
        <ServiceFlowSection
          sectionTitle={service.whatToExpectFlow.sectionTitle}
          sectionSubtitle={service.whatToExpectFlow.sectionSubtitle}
          items={service.whatToExpectFlow.items}
          accentColor={service.accentColor}
          itemsPerRow={service.whatToExpectFlow.itemsPerRow}
          showNumbers={service.whatToExpectFlow.showNumbers}
        />
      )}

      {!hasEnhancedStructure && !contentQuality?.planningPoints && service.raceFormatsFlow && (
        <ServiceFlowSection
          sectionTitle={service.raceFormatsFlow.sectionTitle}
          sectionSubtitle={service.raceFormatsFlow.sectionSubtitle}
          items={service.raceFormatsFlow.items}
          accentColor={service.accentColor}
          itemsPerRow={service.raceFormatsFlow.itemsPerRow}
          showNumbers={service.raceFormatsFlow.showNumbers}
        />
      )}

      {!hasEnhancedStructure && !contentQuality?.planningPoints && service.challengeTypesFlow && (
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
          headline={contentQuality?.ctaHeadline ?? service.cta.headline}
          subtext={contentQuality?.ctaSubtext ?? service.cta.subtext}
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
      {service.miniGallery && (
        <ServiceMiniGallery title={service.miniGallery.title} images={service.miniGallery.images} />
      )}

      {/* Related experiences */}
      {relatedServices.length > 0 && (
        <section className="bg-background px-4 py-16 sm:py-20">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {slug === "amazing-race" ? "Keep the Adventure Going" : "Related Experiences"}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {slug === "amazing-race"
                  ? "Want the same energy with a different twist? Try one of these team adventures."
                  : "Compare this with other live Elluminate formats that may fit the same brief."}
              </p>
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

      {/* Accent gradient bar above testimonials */}
      <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${service.accentColor}80, transparent)` }} />

      {/* 10. Testimonials */}
      {!contentQuality?.hideTestimonials && (
        <ServiceTestimonialNew
          testimonials={service.testimonials}
          accentColor={service.accentColor}
          backgroundImage={service.testimonialBackgroundImage}
        />
      )}

      {/* 11. Final CTA */}
      <ServiceFinalCTA accentColor={service.accentColor} />

      <Footer />
    </div>
    </ServiceWorldFrame>
  );
};

export default ServicePage;
