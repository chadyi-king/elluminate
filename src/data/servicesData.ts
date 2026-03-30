import { LucideIcon, Mic, Palette, Monitor, Gamepad2, Trophy, Music, Camera, Sparkles, Users, Heart, Star, Zap, PartyPopper, Wine, Lightbulb, Target, Clock, Gift, Crown, MapPin, Gem, Rocket, Building, Award, CalendarDays, Plane, Flag, Lock, Home, Theater, Dumbbell, Video, PenTool, Volume2, Megaphone, Handshake, GraduationCap, Globe, Briefcase, Navigation, Timer, Brain, Compass, Route, Phone, CheckCircle, ClipboardList, Send, Activity, UserPlus, Puzzle, Building2, Trees, Mountain, ShoppingBag, Palmtree, Moon, Map, Search, Shield, Crosshair, Swords, Footprints, Ghost, Rabbit } from "lucide-react";

// Service hero images
import teamBuildingHero from "@/assets/services/team-building-hero.jpg";
import dinnerDanceHero from "@/assets/services/dinner-dance-hero.jpg";
import awardsCeremonyHero from "@/assets/services/awards-ceremony-hero.jpg";
import overseasRetreatHero from "@/assets/services/overseas-retreat-hero.jpg";
import productLaunchHero from "@/assets/services/product-launch-hero.jpg";
import townHallHero from "@/assets/services/town-hall-hero.jpg";
import immersiveExperienceHero from "@/assets/services/immersive-experience-hero.jpg";
import brandActivationHero from "@/assets/services/brand-activation-hero.jpg";
import wellnessEventHero from "@/assets/services/wellness-event-hero.jpg";
import clientAppreciationHero from "@/assets/services/client-appreciation-hero.jpg";
import familyFunDayHero from "@/assets/services/family-fun-day-hero.jpg";
import leadershipOffsiteHero from "@/assets/services/leadership-offsite-hero.jpg";
import corporateAnniversaryHero from "@/assets/services/corporate-anniversary-hero.jpg";
import stageProductionHero from "@/assets/services/stage-production-hero.jpg";
import customThemesHero from "@/assets/services/custom-themes-hero.jpg";
import emceeMediaHero from "@/assets/services/emcee-media-hero.jpg";
import eventConceptHero from "@/assets/services/event-concept-hero.jpg";
import grandOpeningHero from "@/assets/services/grand-opening-hero.jpg";
import summitsHero from "@/assets/services/summits-hero.jpg";
import vipGalaHero from "@/assets/services/vip-gala-hero.jpg";
import corporateCarnivalHero from "@/assets/services/corporate-carnival-hero.jpg";
import governmentEventHero from "@/assets/services/government-event-hero.jpg";
import privateEventHero from "@/assets/services/private-event-hero.jpg";
import amazingRaceHero from "@/assets/services/amazing-race-hero.jpg";

// Physical service heroes
import treasureHeistHero from "@/assets/services/physical/treasure-heist-hero.jpg";
import treasureHeistMask from "@/assets/services/physical/treasure-heist-mask.png";
import treasureHeistGallery1 from "@/assets/services/physical/treasure-heist-gallery-1.jpg";

// Activity / gallery images (used for mini galleries)
import heroCsiInvestigation from "@/assets/hero/csi-investigation.jpg";
import heroCulturalRace from "@/assets/hero/cultural-race.jpg";
import heroAmazingRaceAlt from "@/assets/hero/amazing-race.jpg";
import heroAdventureChallenge from "@/assets/hero/adventure-challenge.jpg";
import heroTeamCelebration from "@/assets/hero/team-celebration.jpg";
import teamBuildingOutdoor1 from "@/assets/events/team-building-outdoor-1.jpg";
import heroCreativeWorkshop from "@/assets/hero/creative-workshop.jpg";

export interface AlternatingSection {
  title: string;
  description: string;
  image: string;
  points?: { text: string }[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FlowSectionItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

export interface FlowSection {
  sectionTitle: string;
  sectionSubtitle?: string;
  items: FlowSectionItem[];
  itemsPerRow?: number;
  showNumbers?: boolean;
}

// New interfaces for enhanced service pages
export interface RecentEvent {
  client: string;
  event: string;
  pax: number;
}

export interface PricingInfo {
  startingPrice: string;
  unit: string;
  minimumPax: number;
  duration: string;
  activityType: "outdoor" | "indoor" | "hybrid";
}

export interface PackageTier {
  color: string;
  title: string;
  description: string;
  price?: string;
  features: string[];
}

export interface AddOn {
  icon: string;
  title: string;
  description: string;
}

export interface Outcome {
  icon: string;
  title: string;
  description: string;
}

export interface MiniGallery {
  title: string;
  images: { src: string; alt: string }[];
}

export interface ServiceData {
  accentColor: string;
  accentColorSecondary?: string; // For two-tone gradient support
  howItWorksImage?: string; // Image for What to Expect section
  addOnsImage?: string; // Image for Add-ons section
  dividerVariant?:
    | "raceTrack"
    | "policeTape"
    | "arrow"
    | "money"
    | "vault"
    | "timer"
    | "foamDart"
    | "blueprint"
    | "route"
    | "gelBeads"
    | "squid"
    | "laser"
    | "confetti"
    | "spotlight"
    | "ribbon"
    | "wave";
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    backgroundImage: string;
  };
  overview: {
    description: string;
    backgroundImage: string;
  };
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  benefits: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  activities?: {
    sectionTitle?: string;
    items: string[];
  };
  alternatingSections: AlternatingSection[];
  timeline?: {
    title: string;
    steps: {
      icon: LucideIcon;
      title: string;
      description: string;
    }[];
  };
  themes?: {
    name: string;
    image: string;
  }[];
  moments?: {
    title: string;
    items: {
      icon: LucideIcon;
      title: string;
    }[];
  };
  behindScenes?: {
    content: string;
    backgroundImage: string;
  };
  gallery: string[];
  testimonials: {
    quote: string;
    author: string;
    company: string;
  }[];
  testimonialBackgroundImage?: string;
  faqs: FAQ[];
  processFlow?: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  videoSection?: {
    title: string;
    subtitle?: string;
    videoUrl?: string;
    thumbnailImage?: string;
    videos?: {
      title: string;
      thumbnailImage?: string;
      videoUrl?: string;
    }[];
  };
  cta: {
    headline: string;
    subtext: string;
  };
  // New flow sections
  howItWorksFlow?: FlowSection;
  whatToExpectFlow?: FlowSection;
  raceFormatsFlow?: FlowSection;
  challengeTypesFlow?: FlowSection;
  perfectForFlow?: FlowSection;
  // New enhanced sections
  clientLogos?: string[];
  recentEvents?: RecentEvent[];
  pricing?: PricingInfo;
  packages?: PackageTier[];
  addOns?: AddOn[];
  outcomes?: Outcome[];

  // Optional mini gallery shown under "Perfect For"
  miniGallery?: MiniGallery;

  // Destinations photo grid (for retreat pages)
  destinationsGrid?: {
    sectionTitle: string;
    sectionSubtitle: string;
    destinations: {
      country: string;
      image: string;
      tagline: string;
      priceFrom?: string;
      duration?: string;
      region?: string;
      activities: string[];
    }[];
  };

  ctaBackgroundImage?: string;
  // Page-level presentation controls (optional)
  hideOutcomes?: boolean;
  hideMidCta?: boolean;
  perfectForVariant?: "flow" | "pills";
  recentEventsHeadline?: string;
}

const defaultAddOns: AddOn[] = [
  { icon: "Bus", title: "Transport", description: "Bus/van transfers for your team" },
  { icon: "Medal", title: "Medals & Prizes", description: "Custom medals, trophies, gift bags" },
  { icon: "UtensilsCrossed", title: "Food & Catering", description: "Lunch, snacks, refreshments" },
  { icon: "MapPin", title: "Venue Booking", description: "Indoor/outdoor location arrangements" },
  { icon: "Shirt", title: "Team T-shirts", description: "Custom printed team jerseys" },
  { icon: "Camera", title: "Photo & Video", description: "Professional event coverage" },
  { icon: "BarChart3", title: "Live Leaderboard", description: "Real-time team rankings on display" },
  { icon: "Palette", title: "Custom Themes", description: "Branded materials and props" },
];

const trafficLightPackages = (minimumPriceLabel: string, shortName: string, accentColor: string): PackageTier[] => [
  {
    color: "#26D07C",
    title: "Minimum Package",
    description: `Simply play ${shortName} at one of our set locations. We handle everything — you just show up and have fun.`,
    price: minimumPriceLabel,
    features: ["Pre-set location", "Standard format", "Basic facilitation"],
  },
  {
    // Always Amber for the "Enhanced" tier (traffic light system)
    color: "#FFC400",
    title: "Enhanced Package",
    description: "Add venue selection, catering, prizes, and logistics. Your event, your preferences.",
    features: ["Custom venue", "Add-ons available", "Flexible timing"],
  },
  {
    color: "#FF4F4F",
    title: "Premium Package",
    description: "A fully bespoke experience designed around your goals, brand, and vision.",
    features: ["Custom experience design", "Branded materials", "Full event management"],
  },
];

const defaultPerfectForFlow: FlowSection = {
  sectionTitle: "PERFECT FOR",
  sectionSubtitle: "Every Occasion",
  itemsPerRow: 4,
  items: [
  { icon: UserPlus, title: "New Team Integration", description: "Break the ice and build bonds with new hires, classmates, or fresh cohorts." },
  { icon: Building, title: "Department Off-sites", description: "Strengthen collaboration within departments, houses, or student groups." },
  { icon: PartyPopper, title: "Celebration Days", description: "Milestones, cohort celebrations, and high-energy appreciation events." },
  { icon: GraduationCap, title: "Student Leadership", description: "Build confidence, decision-making, and communication through shared challenge." },
  { icon: Handshake, title: "Orientation Programmes", description: "Create faster connection and familiarity across new groups." },
  { icon: Rocket, title: "Kickoffs & Cohorts", description: "Start the term, programme, or project with momentum and shared energy." },
  { icon: Briefcase, title: "Cross-Team Alignment", description: "Connect functions, classes, or committees that do not usually work together." },
  { icon: Target, title: "Training Days", description: "Pair learning objectives with a format people actually stay engaged in." },
  ],
};

// Virtual-specific defaults
const defaultVirtualAddOns: AddOn[] = [
  { icon: "UtensilsCrossed", title: "Food Delivery", description: "$20/pax (delivered to homes)" },
  { icon: "Medal", title: "Prizes", description: "Delivered individually" },
];

const defaultVirtualPerfectFor: FlowSection = {
  sectionTitle: "PERFECT FOR",
  sectionSubtitle: "Virtual Events",
  itemsPerRow: 4,
  items: [
    { icon: Monitor, title: "Remote Teams", description: "Connect distributed team members across locations." },
    { icon: Home, title: "Work From Home", description: "Bring the office energy to home-based teams." },
    { icon: Globe, title: "Cross-Country Teams", description: "Unite international teams in one virtual space." },
    { icon: Users, title: "Hybrid Workplaces", description: "Bridge the gap between in-office and remote staff." },
    { icon: UserPlus, title: "Virtual Onboarding", description: "Welcome new hires with interactive team experiences." },
    { icon: Building, title: "Town Hall Add-ons", description: "Add engagement activities to virtual all-hands meetings." },
    { icon: Sparkles, title: "Year-End Celebrations", description: "Celebrate milestones with online team bonding." },
    { icon: Target, title: "Sales Kickoffs", description: "Energize sales teams with competitive virtual challenges." },
  ],
};

// Placeholder hero for virtual services
const virtualPlaceholderHero = "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1920";

export const servicesData: Record<string, ServiceData> = {
  "team-building": {
    accentColor: "#3EA0FF",
    hero: {
      title: "Corporate Team Building",
      subtitle: "Team Building",
      tagline: "Where collaboration becomes an adventure and teams discover their true potential.",
      backgroundImage: teamBuildingHero
    },
    overview: {
      description: "Transform your team dynamics with expertly crafted team building experiences designed to deliver measurable improvements in collaboration, communication, and trust. Our programmes range from high-energy outdoor adventures like the Amazing Race and Archery Tag to creative indoor challenges such as BuilderCross and Minute To Win It. Every session is facilitated by experienced game masters who adapt the format, difficulty, and debrief to match your team's size, goals, and energy level. Whether you need to break the ice with new hires, re-energise a veteran department, or align a cross-functional task force before a major project, we design an activity mix that fits. Groups of 20 to 2,000 are welcome. We handle venue sourcing, logistics, catering coordination, live scoring, photography, and post-event highlight reels so your HR or admin team can simply show up and enjoy the day alongside everyone else. With over 600 events delivered across Singapore, our track record speaks for itself: stronger teams, happier employees, and companies that keep coming back year after year.",
      backgroundImage: teamBuildingHero
    },
    features: [
      { icon: Users, title: "Custom Team Activities", description: "Tailored experiences designed specifically for your team's dynamics and goals." },
      { icon: Target, title: "Goal-Oriented Challenges", description: "Strategic activities that align with your corporate objectives." },
      { icon: Lightbulb, title: "Creative Problem Solving", description: "Innovative challenges that spark creativity and collaboration." },
      { icon: Heart, title: "Trust Building Exercises", description: "Activities designed to strengthen interpersonal bonds." },
      { icon: Trophy, title: "Friendly Competition", description: "Engaging games that bring out healthy competitive spirit." },
      { icon: Sparkles, title: "Professional Facilitation", description: "Expert facilitators who guide and energize your team." }
    ],
    benefits: [
      { icon: Users, title: "Enhanced Collaboration", description: "Break silos and foster cross-team connections." },
      { icon: Zap, title: "Boosted Morale", description: "Energize your team with fun, engaging experiences." },
      { icon: Target, title: "Improved Communication", description: "Build stronger communication channels." },
      { icon: Heart, title: "Stronger Relationships", description: "Create lasting bonds beyond the workplace." },
      { icon: Lightbulb, title: "Creative Thinking", description: "Unlock innovative problem-solving skills." }
    ],
    activities: {
      sectionTitle: "ACTIVITY TYPES",
      items: ["Amazing Race", "CSI: Bones", "Cultural Race", "Laser Tag", "Archery Tag", "Escape Room Challenge", "Masterchef Challenge", "Drumming Circle", "Dragon Boat Racing", "Bubble Soccer", "Treasure Hunt", "Survivor Challenge"]
    },
    alternatingSections: [
      {
        title: "Key Highlights",
        description: "Our team building programs are designed to deliver measurable results while ensuring everyone has an incredible time.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920",
        points: [
          { text: "Customized activities for groups of 20 to 2000+" },
          { text: "Indoor and outdoor venue options" },
          { text: "Professional facilitation and equipment" },
          { text: "Real-time scoring and gamification" }
        ]
      },
      {
        title: "Why Clients Love This",
        description: "Teams leave our sessions energized, connected, and ready to tackle challenges together with renewed purpose.",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920",
        points: [
          { text: "Lasting impact on team dynamics" },
          { text: "Memorable shared experiences" },
          { text: "Skills that transfer to the workplace" }
        ]
      },
      {
        title: "Perfect For",
        description: "Whether you're onboarding new hires, celebrating milestones, or simply investing in your team's wellbeing.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920",
        points: [
          { text: "New team formation and integration" },
          { text: "Department off-sites and retreats" },
          { text: "Leadership development programs" },
          { text: "Annual company celebrations" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800"
    ],
    testimonials: [
      { quote: "Our team came back energized and more connected than ever. Amazing experience!", author: "David Chen", company: "Google Singapore" },
      { quote: "The activities were perfectly tailored to our team's needs. Highly recommended!", author: "Amanda Lee", company: "Grab Holdings" },
      { quote: "Professional, engaging, and truly transformative for our team dynamics.", author: "Robert Tan", company: "Shopee" },
      { quote: "Best team building we've ever done. Everyone is still talking about it!", author: "Michelle Goh", company: "Microsoft Singapore" },
      { quote: "The facilitation was world-class. Our team bonded like never before.", author: "James Lim", company: "Amazon Singapore" },
      { quote: "Exceeded all expectations. Will definitely book again for next year!", author: "Sarah Wong", company: "Meta Singapore" }
    ],
    faqs: [
      { question: "How many participants can you accommodate?", answer: "We can accommodate groups from 20 to 2000+ participants. Our activities are scalable and we have experience managing large corporate events." },
      { question: "Do you provide indoor and outdoor options?", answer: "Yes! We offer both indoor and outdoor team building activities. We'll recommend the best option based on your objectives, group size, and preferences." },
      { question: "How far in advance should we book?", answer: "We recommend booking at least 4-6 weeks in advance for the best availability. However, we can sometimes accommodate shorter timelines." },
      { question: "Can activities be customized to our company values?", answer: "Absolutely! We specialize in customizing activities to align with your company values, objectives, and team dynamics." },
      { question: "What's included in the package?", answer: "Our packages typically include professional facilitation, all equipment and materials, prizes, photography, and full event coordination." }
    ],
    cta: {
      headline: "Ready to Transform Your Team?",
      subtext: "Let's design an unforgettable team building experience that brings your people together."
    },
    dividerVariant: "confetti",
    recentEvents: [
      { client: "Google Singapore", event: "Innovation Team Day", pax: 200 },
      { client: "DBS Bank", event: "Department Off-site", pax: 350 },
      { client: "Shopee", event: "Cross-Team Challenge", pax: 280 },
      { client: "Grab Holdings", event: "Team Building Day", pax: 180 },
      { client: "Microsoft Singapore", event: "Quarterly Bonding", pax: 150 },
      { client: "Amazon Singapore", event: "Operations Team Day", pax: 250 },
      { client: "Singtel", event: "Annual Team Building", pax: 400 },
      { client: "OCBC Bank", event: "Branch Team Building", pax: 300 },
      { client: "Unilever Singapore", event: "Sales Kickoff", pax: 180 },
      { client: "Standard Chartered", event: "New Hire Bonding", pax: 90 },
      { client: "ST Engineering", event: "Engineering Team Day", pax: 220 },
      { client: "CapitaLand", event: "Leadership Team Building", pax: 120 },
    ],
    recentEventsHeadline: "Companies who've experienced our Team Building",
  },
  "overseas-retreats": {
    accentColor: "#5AB7AE",
    dividerVariant: "route",
    howItWorksImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579572/Overseas_11_droxvw.jpg",
    addOnsImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579587/Overseas_6_d3fry4.jpg",
    testimonialBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579575/Overseas_12_gvbqfw.jpg",
    hero: {
      title: "OVERSEAS RETREATS",
      subtitle: "Retreat",
      tagline: "The world is your company's oyster! Time to open it up and enjoy!",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579581/Overseas_5_o60d5r.jpg"
    },
    videoSection: {
      title: "See Our Retreats in Action",
      subtitle: "From Bali villas to Japanese onsens, watch how we bring teams together across the globe.",
      videos: [
        { title: "Bali Team Retreat Highlights" },
        { title: "Japan Cultural Experience" },
        { title: "Thailand Beach Getaway" },
        { title: "Vietnam Adventure Recap", videoUrl: "https://res.cloudinary.com/dw1q8nz8z/video/upload/v1774588080/Straits_Construction_1_rhyeyo.mp4", thumbnailImage: "https://res.cloudinary.com/dw1q8nz8z/video/upload/so_0,w_800,h_450,c_fill,f_auto,q_auto/v1774588080/Straits_Construction_1_rhyeyo.jpg" },
        { title: "Bintan Island Escape" },
      ],
    },
    overview: {
      description: "Good interactions at corporate retreats and rewarding travel packages can help improve an employee's relationship with their company! Corporate retreats are the perfect place to start conversations with workers and imagine a better direction for influence and organization. We handle every detail from flights to activities, ensuring your team enjoys a seamless, unforgettable journey.",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579581/Overseas_5_o60d5r.jpg"
    },
    features: [
      { icon: Plane, title: "Full Travel Management", description: "Flights, transfers, and logistics handled end-to-end." },
      { icon: MapPin, title: "Curated Destinations", description: "Handpicked locations that inspire and energize." },
      { icon: Users, title: "Team Activities", description: "Bonding experiences unique to each destination." },
      { icon: Wine, title: "Premium Accommodation", description: "Luxury stays that pamper your team." },
      { icon: Globe, title: "Cultural Experiences", description: "Authentic local encounters that broaden perspectives." },
      { icon: Lock, title: "Safety & Security", description: "Comprehensive planning for peace of mind." }
    ],
    benefits: [
      { icon: Sparkles, title: "Fresh Perspectives", description: "New environments spark new ideas." },
      { icon: Heart, title: "Deep Bonding", description: "Extended time together builds lasting connections." },
      { icon: Star, title: "Memorable Experiences", description: "Adventures your team will never forget." },
      { icon: Zap, title: "Renewed Energy", description: "Return refreshed and motivated." },
      { icon: Users, title: "Cultural Growth", description: "Expand horizons together as a team." }
    ],
    alternatingSections: [],
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
    ],
    testimonials: [
      { quote: "The Bali retreat was absolutely magical. Every detail was perfect!", author: "Jennifer Tan", company: "Deloitte Singapore" },
      { quote: "Our team came back more united than ever. Worth every investment.", author: "Marcus Lee", company: "PwC Singapore" },
      { quote: "Seamless planning, incredible experiences. Highly recommend!", author: "Rachel Goh", company: "KPMG Singapore" },
      { quote: "Best company trip we've ever had. Elluminate handled everything.", author: "Daniel Wong", company: "EY Singapore" },
      { quote: "The cultural experiences added so much depth to our retreat.", author: "Priya Sharma", company: "Accenture Singapore" },
      { quote: "From start to finish, absolutely flawless execution.", author: "Kevin Tan", company: "McKinsey Singapore" }
    ],
    faqs: [
      { question: "How far in advance should we book an overseas retreat?", answer: "We recommend booking 3-6 months in advance for optimal destination and accommodation availability." },
      { question: "What destinations do you recommend?", answer: "Popular choices include Bali, Phuket, Vietnam, and Japan. We'll recommend based on your budget, group size, and objectives." },
      { question: "Do you handle all travel logistics?", answer: "Yes, we manage everything from flights, accommodation, transfers, activities, and on-ground support." },
      { question: "What's the typical group size?", answer: "We typically handle groups from 10 to 100+ participants for overseas retreats." },
      { question: "Can you incorporate work sessions into the retreat?", answer: "Absolutely! We can arrange meeting spaces and blend strategic sessions with leisure activities." }
    ],
    cta: {
      headline: "Ready for Your Team's Adventure?",
      subtext: "Let's plan an overseas retreat that inspires, connects, and transforms."
    },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Retreat Journey, Start to Finish",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Phone, title: "Discovery Call", description: "Tell us your team size, budget, objectives, and preferred dates. We map the right destination and experience level." },
        { icon: MapPin, title: "Destination & Itinerary", description: "We shortlist 2–3 destinations with day-by-day itineraries, accommodation options, and curated activity ideas." },
        { icon: ClipboardList, title: "Proposal & Sign-off", description: "Review a detailed proposal with full costings and inclusions. Approve and we lock everything in." },
        { icon: Plane, title: "Travel & Logistics", description: "We manage all flights, hotel bookings, airport transfers, and on-ground arrangements end to end." },
        { icon: Star, title: "On-Trip Experience", description: "Your team enjoys a seamlessly executed retreat — we are present on the ground to ensure every moment flows." },
        { icon: Trophy, title: "Post-Trip Package", description: "Receive a highlight reel, team photo album, and optional post-trip engagement report." },
      ],
    },
    destinationsGrid: {
      sectionTitle: "DESTINATIONS",
      sectionSubtitle: "Where Will Your Team Go Next?",
      destinations: [
        {
          country: "Bali, Indonesia",
          image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
          tagline: "Jungle villas, rice terraces, and a spiritual reset in Asia's most beloved escape.",
          activities: ["Jungle Trekking", "Temple Tour", "Rafting", "Cooking Class"],
        },
        {
          country: "Thailand",
          image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
          tagline: "Golden temples, turquoise beaches, and world-class cuisine at unbeatable value.",
          activities: ["Island Hopping", "Thai Cooking", "Elephant Sanctuary", "Night Market"],
        },
        {
          country: "Vietnam",
          image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
          tagline: "Ha Long Bay cruises, lantern-lit old towns, and vibrant street food at every turn.",
          activities: ["Ha Long Bay Cruise", "Lantern Making", "Cyclo Tour", "Cooking Class"],
        },
        {
          country: "Japan",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
          tagline: "Ancient temples, futuristic cities, and a level of hospitality that sets the bar.",
          activities: ["Tea Ceremony", "Onsen", "TeamLab", "City Tour"],
        },
        {
          country: "Hong Kong",
          image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
          tagline: "Sky-high harbour views, relentless dining, and a city that never loses its charge.",
          activities: ["Harbour Cruise", "Dim Sum Trail", "Peak Hike", "Night Market"],
        },
        {
          country: "Malaysia",
          image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
          tagline: "Heritage cities, rainforest canopies, and luxury at Southeast Asia's best value.",
          activities: ["Rainforest Walk", "Heritage Tour", "Zipline", "Seafood Dinner"],
        },
        {
          country: "Philippines",
          image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
          tagline: "Crystal-clear waters, island hopping, and a warmth that bonds any group.",
          activities: ["Island Hopping", "Snorkelling", "Kayaking", "Beach BBQ"],
        },
        {
          country: "Cambodia",
          image: "/images/destinations/cambodia-angkor-wat.jpg",
          tagline: "Angkor Wat at sunrise, rich history, and an experience that recalibrates perspective.",
          activities: ["Angkor Wat", "Village Tour", "Cooking Class", "Sunset Cruise"],
        },
        {
          country: "Bintan, Indonesia",
          image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
          tagline: "A 45-minute ferry from Singapore and a world away — beaches, golf, and real switch-off.",
          activities: ["Beach Golf", "Water Sports", "Spa", "Sunset Walk"],
        },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Every Team",
      itemsPerRow: 4,
      items: [
        { icon: Trophy, title: "Top Performer Rewards", description: "Celebrate your best achievers." },
        { icon: Users, title: "Team Bonding", description: "Strengthen connections in a new environment." },
        { icon: Target, title: "Strategy Retreats", description: "Plan the year ahead together." },
        { icon: PartyPopper, title: "Milestone Celebrations", description: "Mark company achievements." },
        { icon: Handshake, title: "Leadership Off-sites", description: "Executive planning sessions." },
        { icon: GraduationCap, title: "Training Programs", description: "Combine learning with adventure." },
        { icon: Heart, title: "Wellness Retreats", description: "Focus on team wellbeing." },
        { icon: Sparkles, title: "Year-End Celebrations", description: "End the year on a high note." },
      ],
    },
    recentEvents: [
      { client: "Deloitte", event: "Bali Retreat", pax: 80 },
      { client: "PwC", event: "Thailand Trip", pax: 60 },
      { client: "KPMG", event: "Vietnam Adventure", pax: 50 },
      { client: "EY", event: "Bintan Getaway", pax: 40 },
    ],
    pricing: { startingPrice: "From $650", unit: "per pax", minimumPax: 10, duration: "3-5 days", activityType: "outdoor" },
    packages: [
      {
        color: "#26D07C",
        title: "Essential Package",
        description: "A well-rounded retreat to a regional destination. Includes economy flights, four-star accommodation, airport transfers, guided team activity, and group meals.",
        price: "From $650/pax",
        features: ["Economy flights included", "4-star accommodation", "Airport transfers", "Team activity", "Group meals"],
      },
      {
        color: "#FFC400",
        title: "Enhanced Package",
        description: "Elevated destinations and experiences — premium economy flights, five-star accommodation, two curated activities, and a group recognition dinner.",
        price: "From $1,200/pax",
        features: ["Premium economy flights", "5-star accommodation", "2 curated activities", "Recognition dinner", "Full itinerary management"],
      },
      {
        color: "#FF4F4F",
        title: "Luxury Package",
        description: "No ceiling, no compromise. Business class flights, private villa or luxury resort, exclusive local experiences, and white-glove end-to-end service.",
        price: "Custom quote",
        features: ["Business class flights", "Luxury villa / resort", "Private experiences", "Concierge service", "Custom programme design"],
      },
    ],
    addOns: [
      { icon: "UtensilsCrossed", title: "Enhanced Dining", description: "Private restaurant buyouts, themed dinners, beachside barbecues, and welcome cocktail receptions." },
      { icon: "Camera", title: "Photo & Video", description: "Dedicated photographer and videographer on the ground, plus a post-retreat highlight reel delivered within 5 days." },
      { icon: "Gamepad2", title: "Team Building Activity", description: "Add an Elluminate-facilitated session — Amazing Race, cultural challenge, or custom outdoor programme — anywhere in the itinerary." },
      { icon: "Dumbbell", title: "Spa & Wellness", description: "Group spa packages, resort yoga sessions, or curated wellness experiences for teams that need genuine rest." },
      { icon: "Gift", title: "Branded Welcome Kits", description: "Custom luggage tags, branded notebooks, destination-specific snacks, and a welcome letter from leadership in every room." },
      { icon: "Plane", title: "Flight Management", description: "Full group flight booking, travel insurance coordination, visa assistance, and airport transfer management." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced Overseas Retreats",
  },
  "dinner-and-dance": {
    accentColor: "#E8D18A",
    hero: {
      title: "Dinner & Dance",
      subtitle: "D&D",
      tagline: "Tonight, the spotlight belongs to you. Dress sharp, shine bright — the stage is yours.",
      backgroundImage: dinnerDanceHero
    },
    overview: {
      description: "A premium, fully hosted Dinner and Dance experience crafted to celebrate your people with elegance, laughter, and unforgettable moments. Whether you are hosting a formal awards gala, a high-energy dance party, or a themed extravaganza, Elluminate brings cinematic production value, professional hosting, and crowd-driven engagement to make your night legendary. Our team manages every detail from concept to execution: event storyline, stage and AV production, music programming, interactive games, lucky draws, and seamless run-sheet management so the night flows effortlessly. Choose from our library of signature themes like Great Gatsby Glamour, Hollywood Black and Gold, Masquerade Royale, or Futuristic Neon, or let us create a completely bespoke concept tailored to your brand. We work with Singapore's top venues, caterers, and entertainment acts to deliver a night your team will talk about for years. With over 200 D&D events produced, we have refined the art of balancing formality with fun, ensuring every guest from the CEO to the newest intern feels celebrated.",
      backgroundImage: dinnerDanceHero
    },
    features: [
      { icon: Mic, title: "Professional Emcee & Show Host", description: "Charismatic hosts who command the room and keep the energy high throughout the night." },
      { icon: Palette, title: "Event Concept & Storyline Design", description: "Custom narratives that transform your event into an immersive experience." },
      { icon: Monitor, title: "Stage & AV Production", description: "State-of-the-art sound, lighting, and visuals for a cinematic atmosphere." },
      { icon: Gamepad2, title: "Interactive Games & Engagement", description: "Fun activities that get everyone involved and create lasting memories." },
      { icon: Trophy, title: "Awards & Recognition Moments", description: "Spotlight celebrations that honor your team's achievements." },
      { icon: Music, title: "Dance, Party & Music Flow", description: "Curated playlists and performances that keep the dance floor alive." }
    ],
    benefits: [
      { icon: Camera, title: "Cinematic Experiences", description: "Your event feels like stepping into a show." },
      { icon: Sparkles, title: "Engaging, Not Awkward", description: "Only high energy, no dull moments." },
      { icon: Users, title: "Crowd-Interactive Hosting", description: "Professional emcees who activate your audience." },
      { icon: Star, title: "High-Impact Moments", description: "Grand entrances, big reveals, spotlight celebrations." },
      { icon: Heart, title: "Designed for Celebration", description: "Perfect for appreciation nights, awards, and milestones." }
    ],
    activities: {
      sectionTitle: "THEME OPTIONS",
      items: ["Great Gatsby Glamour", "Hollywood Black & Gold", "Masquerade Royale", "Futuristic Neon", "Retro Disco Fever", "White & Gold Elegance", "Casino Royale", "Hawaiian Luau", "Space Odyssey", "Enchanted Forest", "Red Carpet Premiere", "Carnival Fiesta"]
    },
    alternatingSections: [
      {
        title: "A Night to Remember",
        description: "From red carpet arrivals to the final dance, every moment is choreographed for maximum impact.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920",
        points: [
          { text: "Red Carpet Welcome & VIP Arrivals" },
          { text: "Grand Opening Sequence" },
          { text: "Gourmet Dinner & Live Performances" },
          { text: "Interactive Games & Lucky Draws" }
        ]
      },
      {
        title: "Theme Options",
        description: "Choose from our signature themes or let us create a custom concept just for you.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Great Gatsby Glamour" },
          { text: "Hollywood Black & Gold" },
          { text: "Masquerade Royale" },
          { text: "Futuristic Neon Gold" }
        ]
      },
      {
        title: "Signature Moments",
        description: "We create show-stopping moments that become the talk of the office for years to come.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920",
        points: [
          { text: "Confetti Blast Entrance" },
          { text: "CEO Grand Reveal Moment" },
          { text: "Lucky Draw Showdown" },
          { text: "Awards Spotlight Walk" }
        ]
      }
    ],
    timeline: {
      title: "A Night to Remember",
      steps: [
        { icon: Crown, title: "Red Carpet Welcome", description: "VIP arrivals" },
        { icon: Sparkles, title: "Grand Opening", description: "Spectacular reveal" },
        { icon: Wine, title: "Dinner & Shows", description: "Fine dining" },
        { icon: Gamepad2, title: "Interactive Games", description: "Team fun" },
        { icon: Trophy, title: "Awards Ceremony", description: "Recognition" },
        { icon: Music, title: "Dance Party", description: "Celebration" }
      ]
    },
    themes: [
      { name: "Great Gatsby Glam", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800" },
      { name: "Hollywood Black & Gold", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800" },
      { name: "Masquerade Royale", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800" },
      { name: "Futuristic Neon Gold", image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800" },
      { name: "Retro Disco Fever", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" },
      { name: "Elegant White & Gold Ball", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800" }
    ],
    moments: {
      title: "Signature Moments",
      items: [
        { icon: PartyPopper, title: "Confetti Blast Entrance" },
        { icon: Crown, title: "CEO Grand Reveal Moment" },
        { icon: Gift, title: "Lucky Draw Showdown" },
        { icon: Music, title: "Dance-Off Challenge" },
        { icon: Trophy, title: "Awards Spotlight Walk" }
      ]
    },
    behindScenes: {
      content: "We craft every Dinner & Dance like a live production — storyboards, lighting cues, sound design, timing flow, and emotional pacing. Nothing is accidental. Everything is designed for impact.",
      backgroundImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920"
    },
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800"
    ],
    testimonials: [
      { quote: "The best Dinner & Dance we've ever experienced. The energy, hosting, and atmosphere were perfect.", author: "Sarah Lim", company: "SP Group Singapore" },
      { quote: "Elluminate transformed our annual gala into an unforgettable Hollywood experience.", author: "Michael Tan", company: "DBS Bank" },
      { quote: "Every detail was perfect. Our team is still talking about that night!", author: "Jennifer Wong", company: "Singtel" },
      { quote: "The production value was incredible. Felt like a real TV show!", author: "David Lee", company: "OCBC Bank" },
      { quote: "Our employees rated it the best company event ever.", author: "Amanda Goh", company: "Standard Chartered" },
      { quote: "The hosting was top-notch. Everyone was engaged from start to finish.", author: "Kevin Tan", company: "UBS Singapore" }
    ],
    faqs: [
      { question: "What's included in your D&D packages?", answer: "Our packages include professional hosting, event concept design, stage & AV production, interactive games, music & entertainment coordination, and full event management." },
      { question: "Can you accommodate dietary requirements?", answer: "We work with venue caterers to accommodate all dietary requirements including halal, vegetarian, and allergy-specific needs." },
      { question: "How long does a typical D&D last?", answer: "Most Dinner & Dance events run 4-5 hours, from cocktail reception through the finale dance party." },
      { question: "Do you provide photography and videography?", answer: "Yes, we can arrange professional photography and videography to capture all the memorable moments." },
      { question: "Can we have a custom theme?", answer: "Absolutely! We love creating custom themes. Share your vision and we'll bring it to life." }
    ],
    cta: {
      headline: "Ready to Create a Night Your Team Will Never Forget?",
      subtext: "Let's bring your Dinner & Dance vision to life with cinematic precision and unforgettable moments."
    },
    dividerVariant: "confetti",
    recentEvents: [
      { client: "SP Group", event: "Annual D&D Gala", pax: 500 },
      { client: "DBS Bank", event: "Year-End D&D", pax: 800 },
      { client: "Singtel", event: "Dinner & Dance", pax: 600 },
      { client: "OCBC Bank", event: "Black Tie Gala", pax: 450 },
      { client: "Standard Chartered", event: "Awards Night D&D", pax: 350 },
      { client: "UBS Singapore", event: "Annual Dinner", pax: 300 },
      { client: "CapitaLand", event: "Masquerade D&D", pax: 400 },
      { client: "Keppel Corporation", event: "Golden Gala", pax: 550 },
      { client: "Singapore Airlines", event: "Crew D&D Night", pax: 700 },
      { client: "StarHub", event: "Neon Theme D&D", pax: 380 },
      { client: "GIC", event: "Annual Dinner & Dance", pax: 200 },
      { client: "Temasek Holdings", event: "Hollywood D&D", pax: 250 },
    ],
    recentEventsHeadline: "Companies who've celebrated with our Dinner & Dance",
  },
  "awards-ceremonies": {
    accentColor: "#D4AF37",
    hero: {
      title: "Awards Ceremonies",
      subtitle: "Awards",
      tagline: "Where achievements shine and excellence takes center stage.",
      backgroundImage: awardsCeremonyHero
    },
    overview: {
      description: "Honor your achievers with prestigious award ceremonies that leave lasting impressions on every attendee. We design and execute ceremonies that spotlight excellence, inspire teams, and create moments of genuine recognition and pride. Our end-to-end service covers award category development, nominee video production, trophy and plaque design, stage scripting, professional hosting, and full AV production including dramatic lighting reveals and cinematic walk-up sequences. Whether you are recognising Employee of the Year, Long Service milestones, Innovation Champions, or department-level achievements, we ensure every honouree feels like a superstar. Our ceremonies blend formality with entertainment, featuring red carpet arrivals, live audience voting, surprise musical acts, and confetti finales that make the night truly unforgettable. We have produced award ceremonies for groups ranging from 50 to 2,000 across Singapore's finest hotels and convention centres.",
      backgroundImage: awardsCeremonyHero
    },
    features: [
      { icon: Trophy, title: "Award Category Development", description: "Strategic categories that recognize diverse achievements." },
      { icon: Mic, title: "Professional Hosting", description: "Charismatic emcees who elevate every moment." },
      { icon: Crown, title: "Red Carpet Experience", description: "VIP arrivals that make everyone feel like a star." },
      { icon: Camera, title: "Cinematic Production", description: "Stunning visuals and lighting for dramatic impact." },
      { icon: Gift, title: "Custom Trophy Design", description: "Unique awards that symbolize excellence." },
      { icon: Music, title: "Celebratory Entertainment", description: "Music and performances that enhance the mood." }
    ],
    benefits: [
      { icon: Star, title: "Employee Motivation", description: "Recognition that inspires continued excellence." },
      { icon: Heart, title: "Cultural Reinforcement", description: "Celebrate and strengthen company values." },
      { icon: Users, title: "Team Pride", description: "Create shared moments of achievement." },
      { icon: Sparkles, title: "Memorable Moments", description: "Unforgettable experiences for honorees." },
      { icon: Camera, title: "Documentation", description: "Professional capture of milestone moments." }
    ],
    activities: {
      sectionTitle: "AWARD CATEGORIES",
      items: ["Employee of the Year", "Team Excellence Award", "Innovation Champion", "Customer Service Star", "Leadership Excellence", "Rising Star Award", "Long Service Recognition", "Best Department", "Sales Champion", "Cultural Ambassador", "Safety Champion", "Mentorship Award"]
    },
    alternatingSections: [
      {
        title: "The Red Carpet Experience",
        description: "Make every honoree feel like a star with VIP treatment from arrival to recognition.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920",
        points: [
          { text: "Professional photography at arrival" },
          { text: "Spotlight introductions" },
          { text: "Custom trophy presentations" },
          { text: "Victory lap moments" }
        ]
      },
      {
        title: "Categories That Matter",
        description: "We help you design award categories that truly reflect your company values and culture.",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1920",
        points: [
          { text: "Innovation & Excellence Awards" },
          { text: "Leadership & Mentorship Recognition" },
          { text: "Team Collaboration Honors" },
          { text: "Long Service & Milestone Awards" }
        ]
      },
      {
        title: "Production Excellence",
        description: "From dramatic lighting to cinematic video packages, we create show-stopping moments.",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920",
        points: [
          { text: "Nominee video packages" },
          { text: "Dramatic reveal sequences" },
          { text: "Live audience voting options" },
          { text: "Social media integration" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1607892378846-1e3d9fde6ed5?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"
    ],
    testimonials: [
      { quote: "The most professionally executed awards ceremony we've ever had.", author: "Patricia Goh", company: "OCBC Bank" },
      { quote: "Our employees felt truly valued. The attention to detail was exceptional.", author: "James Lim", company: "CapitaLand" },
      { quote: "Elluminate made our recognition night absolutely spectacular.", author: "Michelle Teo", company: "Marina Bay Sands" },
      { quote: "The red carpet experience made everyone feel like a superstar.", author: "Richard Wong", company: "Singtel" },
      { quote: "Production quality was TV-grade. Absolutely impressed!", author: "Sandra Lee", company: "DBS Bank" },
      { quote: "Our awardees felt truly celebrated. Perfect execution.", author: "Kenneth Tan", company: "Standard Chartered" }
    ],
    faqs: [
      { question: "Can you help design award categories?", answer: "Yes! We work with you to create meaningful categories that align with your company values and recognize diverse achievements." },
      { question: "Do you provide custom trophies?", answer: "We can arrange custom trophy design and production, or work with your existing awards." },
      { question: "What AV production is included?", answer: "Our packages include stage design, lighting, sound, video production for nominee packages, and live event coverage." },
      { question: "Can you handle hybrid ceremonies?", answer: "Absolutely! We can broadcast to remote attendees and incorporate virtual award presentations." },
      { question: "How do you handle large numbers of awards?", answer: "We design efficient yet impactful flows to ensure every award moment is special while keeping the event engaging." }
    ],
    cta: {
      headline: "Ready to Celebrate Your Achievers?",
      subtext: "Let's create an awards ceremony that honors excellence and inspires greatness."
    },
    dividerVariant: "ribbon",
    recentEvents: [
      { client: "OCBC Bank", event: "Annual Awards Night", pax: 400 },
      { client: "CapitaLand", event: "Excellence Awards", pax: 300 },
      { client: "Marina Bay Sands", event: "Team Awards Gala", pax: 500 },
      { client: "Singtel", event: "Innovation Awards", pax: 350 },
      { client: "DBS Bank", event: "Star Performer Night", pax: 600 },
      { client: "Standard Chartered", event: "Service Awards", pax: 250 },
      { client: "PSA International", event: "Safety Awards", pax: 450 },
      { client: "SIA Engineering", event: "Long Service Awards", pax: 200 },
      { client: "Changi Airport Group", event: "Annual Recognition", pax: 550 },
      { client: "ComfortDelGro", event: "Driver Awards Night", pax: 380 },
      { client: "Sembcorp Industries", event: "Achievement Awards", pax: 280 },
      { client: "Sats Ltd", event: "Employee of the Year", pax: 320 },
    ],
    recentEventsHeadline: "Companies who've hosted Awards Ceremonies with us",
  },
  "corporate-anniversaries": {
    accentColor: "#B03052",
    hero: {
      title: "Corporate Anniversaries",
      subtitle: "Anniversary",
      tagline: "Honoring your journey, celebrating your legacy, inspiring your future.",
      backgroundImage: corporateAnniversaryHero
    },
    overview: {
      description: "Mark your company's journey with anniversary celebrations that honor your history while looking toward the future. We create meaningful events that bring together employees, clients, and stakeholders in celebration of your success. Every milestone deserves a celebration that reflects your company's unique story.",
      backgroundImage: corporateAnniversaryHero
    },
    features: [
      { icon: CalendarDays, title: "Historical Storytelling", description: "Showcase your company's journey through compelling narratives." },
      { icon: Users, title: "Multi-Generational Engagement", description: "Activities that connect past, present, and future employees." },
      { icon: Camera, title: "Legacy Documentation", description: "Professional capture of your milestone celebration." },
      { icon: Gift, title: "Commemorative Merchandise", description: "Custom memorabilia for lasting memories." },
      { icon: Mic, title: "Executive Speeches", description: "Professionally produced keynote moments." },
      { icon: Sparkles, title: "Surprise Elements", description: "Unexpected moments that delight and impress." }
    ],
    benefits: [
      { icon: Heart, title: "Heritage Recognition", description: "Honor the legacy that built your company." },
      { icon: Users, title: "Stakeholder Connection", description: "Strengthen relationships with all stakeholders." },
      { icon: Star, title: "Brand Storytelling", description: "Amplify your brand narrative." },
      { icon: Trophy, title: "Employee Pride", description: "Boost loyalty through shared celebration." },
      { icon: Megaphone, title: "PR Opportunities", description: "Generate positive media coverage." }
    ],
    activities: {
      sectionTitle: "CELEBRATION ELEMENTS",
      items: ["Historical Timeline Display", "Founder Tribute Video", "Pioneer Recognition Ceremony", "Time Capsule Unveiling", "Legacy Wall Installation", "Memory Lane Photo Exhibition", "Anniversary Gala Dinner", "Employee Journey Stories", "Milestone Achievement Awards", "Commemorative Merchandise", "Company Song Performance", "Future Vision Reveal"]
    },
    alternatingSections: [
      {
        title: "Celebrating Your Legacy",
        description: "We help you tell your company's story in a way that inspires pride and connection.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
        points: [
          { text: "Historical timeline displays" },
          { text: "Founder tribute videos" },
          { text: "Employee journey features" },
          { text: "Milestone achievement highlights" }
        ]
      },
      {
        title: "Engaging All Generations",
        description: "Connect veterans with newcomers through activities that bridge your company's history with its future.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920",
        points: [
          { text: "Pioneer recognition programs" },
          { text: "Cross-generational team activities" },
          { text: "Time capsule ceremonies" },
          { text: "Legacy wall contributions" }
        ]
      },
      {
        title: "Commemorative Keepsakes",
        description: "Give your team meaningful mementos that capture this special milestone.",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920",
        points: [
          { text: "Anniversary merchandise design" },
          { text: "Commemorative photo books" },
          { text: "Custom awards and plaques" },
          { text: "Digital memory archives" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"
    ],
    testimonials: [
      { quote: "Our 25th anniversary was absolutely magical. Elluminate exceeded all expectations.", author: "William Koh", company: "Keppel Corporation" },
      { quote: "The perfect blend of nostalgia and celebration. Our employees loved it!", author: "Grace Tan", company: "ST Engineering" },
      { quote: "A truly memorable milestone celebration that honored our company's legacy.", author: "Andrew Lim", company: "ComfortDelGro" },
      { quote: "The historical storytelling touched everyone's hearts.", author: "Linda Wong", company: "Sembcorp" },
      { quote: "Every pioneer felt truly honored. Beautiful execution.", author: "David Chen", company: "SIA Engineering" },
      { quote: "The commemorative elements were perfect keepsakes.", author: "Rachel Goh", company: "Neptune Orient Lines" }
    ],
    faqs: [
      { question: "How do you incorporate company history?", answer: "We work with you to gather historical materials, interview pioneers, and create compelling storytelling elements like videos, timelines, and displays." },
      { question: "Can you accommodate multiple celebration events?", answer: "Yes! We can plan milestone celebrations across multiple locations or a series of events throughout the anniversary year." },
      { question: "What commemorative items can you create?", answer: "We can produce anniversary merchandise, photo books, custom awards, time capsules, and digital archives." },
      { question: "How do you engage retirees and former employees?", answer: "We can organize special reunions, tribute programs, and legacy recognition segments for pioneers." },
      { question: "What's the typical planning timeline?", answer: "For milestone anniversaries, we recommend starting planning 6-12 months in advance." }
    ],
    cta: {
      headline: "Ready to Celebrate Your Milestone?",
      subtext: "Let's honor your company's journey with a celebration worthy of your achievements."
    },
    dividerVariant: "wave",
    recentEvents: [
      { client: "Keppel Corporation", event: "25th Anniversary Gala", pax: 500 },
      { client: "ST Engineering", event: "50th Anniversary", pax: 800 },
      { client: "ComfortDelGro", event: "10th Anniversary Dinner", pax: 350 },
      { client: "Sembcorp Industries", event: "Silver Jubilee", pax: 400 },
      { client: "SIA Engineering", event: "30th Anniversary", pax: 600 },
      { client: "Neptune Orient Lines", event: "Anniversary Celebration", pax: 250 },
      { client: "Olam International", event: "20th Anniversary", pax: 300 },
      { client: "Wilmar International", event: "Corporate Milestone", pax: 450 },
      { client: "Venture Corporation", event: "Anniversary Gala", pax: 200 },
      { client: "Creative Technology", event: "40th Anniversary", pax: 180 },
      { client: "Sats Ltd", event: "Golden Anniversary", pax: 550 },
      { client: "Far East Organization", event: "Company Anniversary", pax: 350 },
    ],
    recentEventsHeadline: "Companies who've celebrated milestones with us",
  },
  "leadership-offsites": {
    accentColor: "#4FB3B3",
    hero: {
      title: "Leadership Offsites",
      subtitle: "Offsite",
      tagline: "Where vision meets strategy in inspiring settings.",
      backgroundImage: leadershipOffsiteHero
    },
    overview: {
      description: "Empower your leadership team with focused offsite experiences designed for strategic thinking and team alignment. Our executive retreats combine productive sessions with premium hospitality for maximum impact. Step away from the office to gain fresh perspectives and align on your organization's future.",
      backgroundImage: leadershipOffsiteHero
    },
    features: [
      { icon: MapPin, title: "Exclusive Venue Selection", description: "Premium locations that inspire strategic thinking." },
      { icon: Users, title: "Workshop Facilitation", description: "Expert moderators for productive sessions." },
      { icon: Wine, title: "Executive Hospitality", description: "Premium catering and amenities throughout." },
      { icon: Lock, title: "Confidential Environment", description: "Secure settings for sensitive discussions." },
      { icon: Target, title: "Goal Alignment", description: "Structured activities for vision alignment." },
      { icon: Lightbulb, title: "Innovation Sessions", description: "Creative thinking workshops for breakthrough ideas." }
    ],
    benefits: [
      { icon: Clock, title: "Uninterrupted Focus", description: "Dedicated time for strategic planning." },
      { icon: Users, title: "Team Cohesion", description: "Strengthen leadership team bonds." },
      { icon: Target, title: "Vision Alignment", description: "Unified direction and goals." },
      { icon: Heart, title: "Executive Wellness", description: "Recharge while strategizing." },
      { icon: Lightbulb, title: "Fresh Perspectives", description: "New environment sparks new ideas." }
    ],
    activities: {
      sectionTitle: "SESSION FORMATS",
      items: ["Strategic Planning Workshop", "Vision & Mission Alignment", "Team Performance Review", "Innovation Brainstorm", "Leadership Development", "Scenario Planning", "Goal Setting Session", "Executive Coaching", "Change Management Workshop", "Culture & Values Workshop", "Succession Planning", "Business Model Canvas"]
    },
    alternatingSections: [
      {
        title: "Strategic Session Design",
        description: "We help structure your offsite for maximum strategic output and team alignment.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920",
        points: [
          { text: "Pre-offsite stakeholder interviews" },
          { text: "Customized agenda development" },
          { text: "Facilitated strategy sessions" },
          { text: "Action planning frameworks" }
        ]
      },
      {
        title: "Premium Venues",
        description: "From city retreats to resort escapes, we curate the perfect setting for your leadership team.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920",
        points: [
          { text: "Private meeting facilities" },
          { text: "Executive accommodation" },
          { text: "Fine dining experiences" },
          { text: "Wellness and recreation options" }
        ]
      },
      {
        title: "Team Bonding Elements",
        description: "Balance strategic work with activities that strengthen leadership team connections.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920",
        points: [
          { text: "Executive team challenges" },
          { text: "Leadership coaching sessions" },
          { text: "Informal networking dinners" },
          { text: "Wellness activities" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
      "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=800"
    ],
    testimonials: [
      { quote: "The most productive leadership retreat we've ever had. Exceptional facilitation.", author: "Richard Lee", company: "Temasek Holdings" },
      { quote: "Perfect balance of strategic sessions and team bonding activities.", author: "Susan Chong", company: "Singapore Airlines" },
      { quote: "Elluminate understood exactly what our leadership team needed.", author: "Kenneth Tan", company: "UOB Bank" },
      { quote: "The venue selection was perfect. Inspired great thinking.", author: "Amanda Wong", company: "CapitaLand" },
      { quote: "We achieved more alignment in 2 days than 6 months of meetings.", author: "Daniel Goh", company: "Mapletree" },
      { quote: "The facilitation brought out insights we never expected.", author: "Michelle Teo", company: "GIC" }
    ],
    faqs: [
      { question: "Do you provide strategy facilitation?", answer: "Yes, we offer experienced facilitators who can guide strategic discussions, or we can work with your preferred facilitator." },
      { question: "What venue options are available?", answer: "We source premium venues including luxury hotels, resort retreats, and private estates both locally and regionally." },
      { question: "How do you ensure confidentiality?", answer: "We ensure private meeting spaces, NDAs for all vendors, and secure handling of all materials and discussions." },
      { question: "Can you incorporate executive coaching?", answer: "Yes, we can arrange leadership coaches and team development specialists as part of your offsite program." },
      { question: "What's the ideal duration?", answer: "Most leadership offsites run 1.5-3 days, depending on your objectives and agenda requirements." }
    ],
    cta: {
      headline: "Ready to Align Your Leadership Team?",
      subtext: "Let's design a strategic offsite that transforms vision into action."
    },
    dividerVariant: "spotlight",
    recentEvents: [
      { client: "Temasek Holdings", event: "Leadership Retreat", pax: 40 },
      { client: "Singapore Airlines", event: "Executive Off-site", pax: 60 },
      { client: "UOB Bank", event: "Strategy Retreat", pax: 35 },
      { client: "CapitaLand", event: "Board Planning Day", pax: 25 },
      { client: "Mapletree", event: "Leadership Alignment", pax: 30 },
      { client: "GIC", event: "Annual Strategy Off-site", pax: 50 },
      { client: "DBS Bank", event: "C-Suite Planning", pax: 20 },
      { client: "OCBC Bank", event: "Executive Workshop", pax: 45 },
      { client: "Singtel", event: "Leadership Forum", pax: 55 },
      { client: "Keppel Corporation", event: "Vision Retreat", pax: 35 },
      { client: "PSA International", event: "Senior Leadership Day", pax: 40 },
      { client: "Sembcorp", event: "Strategy Offsite", pax: 30 },
    ],
    recentEventsHeadline: "Companies who've trusted us for Leadership Offsites",
  },
  "product-launch": {
    accentColor: "#9B51E0",
    hero: {
      title: "Product Launch Events",
      subtitle: "Launch",
      tagline: "Where products become experiences and launches become legends.",
      backgroundImage: productLaunchHero
    },
    overview: {
      description: "Launch your products with the fanfare they deserve. We create immersive launch experiences that generate buzz, engage your audience, and position your brand for maximum market impact. From intimate reveals to grand spectacles, every launch is designed to make your product unforgettable.",
      backgroundImage: productLaunchHero
    },
    features: [
      { icon: Rocket, title: "Concept & Creative Direction", description: "Innovative ideas that showcase your product's uniqueness." },
      { icon: Sparkles, title: "Experiential Activation", description: "Interactive elements that engage all senses." },
      { icon: Monitor, title: "Live Demonstrations", description: "Compelling product showcases that wow audiences." },
      { icon: Camera, title: "Media Management", description: "Press and influencer coordination for maximum coverage." },
      { icon: Mic, title: "Professional Presentation", description: "Expert hosting and product storytelling." },
      { icon: Music, title: "Atmosphere Design", description: "Audio-visual experiences that amplify impact." }
    ],
    benefits: [
      { icon: Star, title: "Strong First Impressions", description: "Launch with maximum market impact." },
      { icon: Megaphone, title: "Media Buzz", description: "Generate coverage and social engagement." },
      { icon: Users, title: "Audience Engagement", description: "Connect deeply with your target market." },
      { icon: Gem, title: "Brand Differentiation", description: "Stand out from the competition." },
      { icon: Zap, title: "Sales Momentum", description: "Build excitement that drives conversions." }
    ],
    activities: {
      sectionTitle: "LAUNCH FORMATS",
      items: ["Grand Unveiling Ceremony", "Live Demo Experience", "VIP Preview Night", "Media Launch Event", "Interactive Exhibition", "Roadshow Activation", "Digital Launch Broadcast", "Influencer Showcase", "Customer Experience Day", "Pop-Up Launch Store", "Virtual Reality Preview", "Celebrity Endorsement Event"]
    },
    alternatingSections: [
      {
        title: "The Big Reveal",
        description: "Create show-stopping product reveal moments that captivate your audience and media.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920",
        points: [
          { text: "Dramatic unveiling sequences" },
          { text: "Immersive product experiences" },
          { text: "Live demonstration stations" },
          { text: "Hands-on trial opportunities" }
        ]
      },
      {
        title: "Media & Influencer Strategy",
        description: "Maximize coverage and social buzz with our comprehensive media management.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920",
        points: [
          { text: "Press conference coordination" },
          { text: "Influencer hosting and engagement" },
          { text: "Social media content creation" },
          { text: "Post-event media outreach" }
        ]
      },
      {
        title: "Immersive Brand Experiences",
        description: "Transform your product launch into a multi-sensory brand experience.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Interactive brand installations" },
          { text: "Photo-worthy backdrops" },
          { text: "Branded merchandise and giveaways" },
          { text: "VIP experience zones" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"
    ],
    testimonials: [
      { quote: "Our product launch exceeded all expectations. The buzz was incredible!", author: "Emily Tan", company: "Samsung Singapore" },
      { quote: "Elluminate created an experience our customers are still talking about.", author: "Jason Lee", company: "Apple Southeast Asia" },
      { quote: "The perfect blend of showmanship and substance. Highly recommended!", author: "Rachel Koh", company: "Sony Singapore" },
      { quote: "Media coverage exceeded our KPIs by 200%. Amazing execution!", author: "Marcus Wong", company: "Huawei Singapore" },
      { quote: "The influencer engagement was perfectly managed.", author: "Sarah Lim", company: "OPPO Singapore" },
      { quote: "Best product launch we've ever done. Sales were immediate.", author: "Kenneth Tan", company: "Dyson Singapore" }
    ],
    faqs: [
      { question: "How do you handle media relations?", answer: "We coordinate press invitations, media kits, press conferences, and post-event follow-up to maximize coverage." },
      { question: "Can you manage influencer engagement?", answer: "Yes, we handle influencer identification, invitations, hosting, and content coordination for social media amplification." },
      { question: "What product demo capabilities do you have?", answer: "We can create interactive demonstration stations, hands-on experience zones, and live presentation setups." },
      { question: "Do you handle hybrid launch events?", answer: "Absolutely! We can broadcast to global audiences and create engaging virtual participation elements." },
      { question: "What's the typical lead time for a product launch?", answer: "We recommend 6-8 weeks minimum, though larger launches may require 3-6 months of planning." }
    ],
    cta: {
      headline: "Ready to Launch with Impact?",
      subtext: "Let's create a product launch that captures attention and drives results."
    },
    dividerVariant: "spotlight",
    recentEvents: [
      { client: "Samsung Singapore", event: "Galaxy S Launch", pax: 300 },
      { client: "Apple Southeast Asia", event: "Product Preview", pax: 200 },
      { client: "Sony Singapore", event: "Console Launch Night", pax: 250 },
      { client: "Huawei Singapore", event: "Flagship Reveal", pax: 350 },
      { client: "OPPO Singapore", event: "Phone Launch", pax: 180 },
      { client: "Dyson Singapore", event: "New Product Showcase", pax: 150 },
      { client: "LG Electronics", event: "Home Appliance Launch", pax: 200 },
      { client: "Panasonic Asia", event: "Innovation Reveal", pax: 120 },
      { client: "BMW Asia", event: "New Model Launch", pax: 250 },
      { client: "Porsche Singapore", event: "Exclusive Preview", pax: 100 },
      { client: "Lululemon Singapore", event: "Collection Launch", pax: 180 },
      { client: "Sephora Singapore", event: "Beauty Launch Event", pax: 220 },
    ],
    recentEventsHeadline: "Brands who've launched with Elluminate",
  },
  "brand-activations": {
    accentColor: "#F2C744",
    hero: {
      title: "Brand Activations",
      subtitle: "Activation",
      tagline: "Where brands come alive and connections become lasting.",
      backgroundImage: brandActivationHero
    },
    overview: {
      description: "Bring your brand to life through immersive activation experiences that connect with your audience on a deeper level. We design interactive touchpoints that create memorable brand encounters and lasting impressions. Transform passive consumers into active brand advocates.",
      backgroundImage: brandActivationHero
    },
    features: [
      { icon: Palette, title: "Experiential Concept Development", description: "Creative strategies that bring your brand story to life." },
      { icon: Sparkles, title: "Interactive Installations", description: "Engaging touchpoints that invite participation." },
      { icon: Users, title: "Brand Ambassador Training", description: "Staff who embody your brand values." },
      { icon: Target, title: "Engagement Tracking", description: "Measurable metrics for ROI analysis." },
      { icon: Camera, title: "Content Generation", description: "Social-worthy moments for organic reach." },
      { icon: Gift, title: "Memorable Takeaways", description: "Branded experiences they'll remember." }
    ],
    benefits: [
      { icon: Star, title: "Brand Awareness", description: "Increased recall and recognition." },
      { icon: Users, title: "Direct Engagement", description: "Personal connections with consumers." },
      { icon: Camera, title: "UGC Opportunities", description: "Content your audience creates for you." },
      { icon: Target, title: "Data Insights", description: "Valuable consumer behavior data." },
      { icon: Heart, title: "Brand Loyalty", description: "Emotional connections that last." }
    ],
    activities: {
      sectionTitle: "ACTIVATION TYPES",
      items: ["Pop-Up Experience", "Mall Activation", "Roadshow Campaign", "Festival Booth", "Sampling Station", "Interactive Installation", "Brand Mascot Experience", "Gamification Zone", "Photo Opportunity Setup", "Virtual Reality Experience", "Social Media Challenge", "Community Event Sponsorship"]
    },
    alternatingSections: [
      {
        title: "Experiential Installations",
        description: "Create Instagram-worthy brand moments that consumers want to share.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920",
        points: [
          { text: "Interactive photo opportunities" },
          { text: "Gamified brand experiences" },
          { text: "Sensory brand immersions" },
          { text: "Pop-up brand spaces" }
        ]
      },
      {
        title: "Consumer Engagement",
        description: "Turn passive audiences into active participants with engaging brand interactions.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Sampling and trial programs" },
          { text: "Interactive games and contests" },
          { text: "Live demonstrations" },
          { text: "Community building activities" }
        ]
      },
      {
        title: "Measurable Impact",
        description: "Track engagement metrics and ROI for data-driven brand activation strategies.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920",
        points: [
          { text: "Footfall and dwell time tracking" },
          { text: "Social media mentions monitoring" },
          { text: "Lead capture and database building" },
          { text: "Post-activation surveys" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800"
    ],
    testimonials: [
      { quote: "Our brand activation drove incredible engagement and social buzz.", author: "Amanda Wong", company: "Nike Singapore" },
      { quote: "Elluminate truly understood our brand and brought it to life beautifully.", author: "Marcus Lim", company: "Coca-Cola Singapore" },
      { quote: "The activation exceeded our KPIs and created lasting brand memories.", author: "Jessica Tan", company: "Red Bull Asia" },
      { quote: "Social media engagement was through the roof. Amazing content generation!", author: "Kevin Goh", company: "Adidas Singapore" },
      { quote: "The experiential elements perfectly captured our brand essence.", author: "Sarah Lee", company: "Unilever Singapore" },
      { quote: "ROI was clearly measurable. Will definitely partner again.", author: "Daniel Wong", company: "P&G Singapore" }
    ],
    faqs: [
      { question: "What types of brand activations do you specialize in?", answer: "We handle pop-up experiences, roadshows, mall activations, event sponsorship activations, and experiential marketing installations." },
      { question: "Can you handle multi-location activations?", answer: "Yes, we can manage simultaneous activations across multiple venues and cities." },
      { question: "How do you measure activation success?", answer: "We track footfall, dwell time, social mentions, leads captured, samples distributed, and conduct post-activation surveys." },
      { question: "Do you provide brand ambassadors?", answer: "Yes, we recruit, train, and manage brand ambassadors who authentically represent your brand." },
      { question: "What's the typical activation duration?", answer: "Activations can range from single-day events to multi-week campaigns depending on your objectives." }
    ],
    cta: {
      headline: "Ready to Activate Your Brand?",
      subtext: "Let's create experiences that turn audiences into advocates."
    },
    dividerVariant: "confetti",
    recentEvents: [
      { client: "Nike Singapore", event: "Air Max Day Activation", pax: 500 },
      { client: "Coca-Cola Singapore", event: "Mall Roadshow", pax: 800 },
      { client: "Red Bull Asia", event: "Extreme Sports Activation", pax: 400 },
      { client: "Adidas Singapore", event: "Originals Pop-Up", pax: 350 },
      { client: "Unilever Singapore", event: "Brand Experience Day", pax: 600 },
      { client: "P&G Singapore", event: "Consumer Activation", pax: 450 },
      { client: "L'Oreal Singapore", event: "Beauty Activation", pax: 300 },
      { client: "Nestlé Singapore", event: "Taste Tour", pax: 550 },
      { client: "Tiger Beer", event: "Street Festival", pax: 700 },
      { client: "Grab", event: "GrabPay Launch Activation", pax: 400 },
      { client: "Lazada", event: "11.11 Countdown", pax: 900 },
      { client: "Shopee", event: "Brand Festival Booth", pax: 650 },
    ],
    recentEventsHeadline: "Brands who've activated with Elluminate",
  },
  "client-appreciation": {
    accentColor: "#E4AFA3",
    hero: {
      title: "Client Appreciation",
      subtitle: "Appreciation",
      tagline: "Because your valued clients deserve experiences as exceptional as they are.",
      backgroundImage: clientAppreciationHero
    },
    overview: {
      description: "Show your valued clients the appreciation they deserve with exclusive events designed to strengthen relationships and demonstrate your commitment to partnership excellence. Every detail is crafted to make your clients feel valued, special, and connected to your brand.",
      backgroundImage: clientAppreciationHero
    },
    features: [
      { icon: Crown, title: "VIP Experience Curation", description: "Exclusive experiences that make clients feel special." },
      { icon: Gift, title: "Personalized Touches", description: "Custom details that show you truly know them." },
      { icon: Wine, title: "Premium Hospitality", description: "Finest food, drinks, and service." },
      { icon: Users, title: "Relationship Activities", description: "Engagements that strengthen bonds." },
      { icon: Sparkles, title: "Surprise & Delight", description: "Unexpected moments that impress." },
      { icon: Camera, title: "Memory Creation", description: "Professional documentation of the experience." }
    ],
    benefits: [
      { icon: Heart, title: "Strengthened Relationships", description: "Deeper client connections." },
      { icon: Star, title: "Enhanced Retention", description: "Clients who stay and grow." },
      { icon: Users, title: "Referral Opportunities", description: "Happy clients spread the word." },
      { icon: Gem, title: "Brand Loyalty", description: "Emotional investment in your brand." },
      { icon: Handshake, title: "Exclusive Networking", description: "Connect clients with each other." }
    ],
    activities: {
      sectionTitle: "EXPERIENCE OPTIONS",
      items: ["Private Dining Experience", "Yacht Charter Event", "Wine Tasting Evening", "Golf Tournament Day", "Spa & Wellness Retreat", "Art Gallery Preview", "Concert VIP Experience", "Exclusive Workshop", "Behind-the-Scenes Tour", "Gourmet Cooking Class", "Luxury Brand Experience", "Cultural Immersion Tour"]
    },
    alternatingSections: [
      {
        title: "VIP Treatment",
        description: "Make every client feel like your most important one with personalized touches throughout.",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920",
        points: [
          { text: "Personal welcome greetings" },
          { text: "Custom name cards and gifts" },
          { text: "Dedicated hospitality attention" },
          { text: "Premium seating arrangements" }
        ]
      },
      {
        title: "Exclusive Experiences",
        description: "Offer access to unique experiences your clients won't find anywhere else.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
        points: [
          { text: "Private dining experiences" },
          { text: "Behind-the-scenes access" },
          { text: "Expert speaker sessions" },
          { text: "Unique entertainment" }
        ]
      },
      {
        title: "Networking Opportunities",
        description: "Create valuable connection opportunities among your client community.",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920",
        points: [
          { text: "Facilitated introductions" },
          { text: "Interest-based groupings" },
          { text: "Collaborative activities" },
          { text: "Follow-up connection support" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800"
    ],
    testimonials: [
      { quote: "Our clients felt truly valued. The event strengthened our partnerships significantly.", author: "Jonathan Ng", company: "Credit Suisse" },
      { quote: "The attention to personalization was exceptional. Each client felt special.", author: "Diana Teo", company: "Standard Chartered" },
      { quote: "A masterclass in client appreciation. Elluminate delivers excellence.", author: "Victor Chua", company: "Julius Baer" },
      { quote: "Our top clients are now our biggest advocates. Incredible ROI.", author: "Amanda Lee", company: "HSBC Singapore" },
      { quote: "The networking facilitation led to new business among our clients.", author: "Richard Tan", company: "Citi Singapore" },
      { quote: "Premium experience from start to finish. Clients were impressed.", author: "Michelle Wong", company: "Morgan Stanley" }
    ],
    faqs: [
      { question: "How do you personalize the experience for each client?", answer: "We work with you to gather client preferences, interests, and history to create personalized touches throughout the event." },
      { question: "What venue types work best?", answer: "We recommend exclusive venues like private dining rooms, boutique hotels, yacht charters, or unique spaces that convey exclusivity." },
      { question: "Can you accommodate dietary and cultural requirements?", answer: "Absolutely. We carefully manage all dietary requirements and cultural sensitivities for each guest." },
      { question: "How do you handle gift and takeaway items?", answer: "We can source, customize, and manage premium gifts that reflect your brand and appreciation for each client." },
      { question: "What's the ideal group size?", answer: "Client appreciation events work best with 20-100 guests to maintain the exclusive, intimate feel." }
    ],
    cta: {
      headline: "Ready to Appreciate Your Clients?",
      subtext: "Let's create experiences that turn clients into lifelong partners."
    },
    dividerVariant: "ribbon",
    recentEvents: [
      { client: "Credit Suisse", event: "VIP Client Dinner", pax: 80 },
      { client: "Standard Chartered", event: "Top Client Evening", pax: 60 },
      { client: "Julius Baer", event: "Private Client Event", pax: 50 },
      { client: "HSBC Singapore", event: "Wealth Client Appreciation", pax: 100 },
      { client: "Citi Singapore", event: "Platinum Client Night", pax: 70 },
      { client: "Morgan Stanley", event: "Partner Appreciation", pax: 45 },
      { client: "Goldman Sachs", event: "Client Awards Dinner", pax: 65 },
      { client: "J.P. Morgan", event: "Annual Client Gala", pax: 90 },
      { client: "Bank of America", event: "Key Client Event", pax: 55 },
      { client: "Barclays Singapore", event: "Client Thank-You Night", pax: 75 },
      { client: "BNP Paribas", event: "VIP Appreciation", pax: 40 },
      { client: "Deutsche Bank", event: "Client Experience Night", pax: 60 },
    ],
    recentEventsHeadline: "Companies who've appreciated clients with Elluminate",
  },
  "town-halls": {
    accentColor: "#295CFF",
    hero: {
      title: "Town Halls & Conferences",
      subtitle: "Town Hall",
      tagline: "Where leadership connects with teams and vision becomes shared purpose.",
      backgroundImage: townHallHero
    },
    overview: {
      description: "Communicate effectively with your entire organization through professionally executed town halls and conferences. We ensure your message lands with impact while creating engaging experiences for all attendees. From in-person gatherings to hybrid events, we make corporate communication compelling.",
      backgroundImage: townHallHero
    },
    features: [
      { icon: Monitor, title: "Technical Production", description: "Flawless AV and staging for maximum impact." },
      { icon: Globe, title: "Hybrid Event Capabilities", description: "Seamless integration of virtual and in-person." },
      { icon: Users, title: "Interactive Q&A", description: "Polling and engagement tools for participation." },
      { icon: PenTool, title: "Content Support", description: "Presentation design and scripting assistance." },
      { icon: Mic, title: "Professional Hosting", description: "Skilled moderators who keep energy high." },
      { icon: Camera, title: "Event Documentation", description: "Professional recording for future reference." }
    ],
    benefits: [
      { icon: Megaphone, title: "Clear Communication", description: "Messages that resonate and inspire." },
      { icon: Users, title: "Employee Alignment", description: "Unified understanding of company direction." },
      { icon: Heart, title: "Leadership Visibility", description: "Connect leaders with their teams." },
      { icon: Target, title: "Feedback Opportunities", description: "Two-way communication that matters." },
      { icon: Zap, title: "Energy & Motivation", description: "Inspire action and commitment." }
    ],
    activities: {
      sectionTitle: "EVENT FORMATS",
      items: ["All-Hands Meeting", "Annual General Meeting", "Quarterly Business Review", "Strategy Announcement", "Leadership Address", "Company-Wide Town Hall", "Regional Conference", "Sales Kick-Off", "Change Communication", "Policy Update Briefing", "Financial Results Presentation", "Vision & Mission Launch"]
    },
    alternatingSections: [
      {
        title: "Engaging Presentation Design",
        description: "Transform corporate messages into compelling narratives that resonate.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920",
        points: [
          { text: "Visual presentation design" },
          { text: "Executive coaching for speakers" },
          { text: "Script development support" },
          { text: "Rehearsal and run-through coordination" }
        ]
      },
      {
        title: "Interactive Elements",
        description: "Keep your audience engaged with real-time participation opportunities.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
        points: [
          { text: "Live polling and surveys" },
          { text: "Q&A session management" },
          { text: "Audience response systems" },
          { text: "Gamification elements" }
        ]
      },
      {
        title: "Hybrid Excellence",
        description: "Ensure remote attendees feel equally included and engaged.",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1920",
        points: [
          { text: "Professional live streaming" },
          { text: "Virtual audience engagement tools" },
          { text: "Multi-location connectivity" },
          { text: "On-demand replay options" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800"
    ],
    testimonials: [
      { quote: "Our town hall has never been more engaging. Employees loved the interactive elements.", author: "Catherine Lee", company: "Prudential Singapore" },
      { quote: "The hybrid execution was flawless. Everyone felt equally included.", author: "Benjamin Tan", company: "AIA Singapore" },
      { quote: "Elluminate transformed our annual conference into an inspiring experience.", author: "Helen Wong", company: "Great Eastern" },
      { quote: "Production quality was outstanding. Made our message truly impactful.", author: "David Lim", company: "NTUC Income" },
      { quote: "The Q&A facilitation kept energy high throughout.", author: "Rachel Goh", company: "Manulife Singapore" },
      { quote: "Best company-wide event we've hosted. Clear and engaging.", author: "Kenneth Tan", company: "AXA Singapore" }
    ],
    faqs: [
      { question: "Can you support hybrid town halls?", answer: "Yes! We specialize in hybrid events with professional streaming, virtual engagement tools, and seamless integration of remote and in-person attendees." },
      { question: "Do you provide presentation design services?", answer: "We offer full presentation design support, including visual design, content structuring, and executive coaching for speakers." },
      { question: "How do you keep large audiences engaged?", answer: "We use interactive polling, gamification, Q&A sessions, and professional hosting to maintain energy and engagement throughout." },
      { question: "What technical production is included?", answer: "Our packages include staging, lighting, sound, video production, live streaming, and event recording." },
      { question: "Can you handle multi-location broadcasts?", answer: "Yes, we can coordinate simultaneous broadcasts to multiple office locations with two-way interaction capabilities." }
    ],
    cta: {
      headline: "Ready to Unite Your Organization?",
      subtext: "Let's create town halls that inform, inspire, and energize your people."
    },
    dividerVariant: "spotlight",
    recentEvents: [
      { client: "Prudential Singapore", event: "Annual Town Hall", pax: 1200 },
      { client: "AIA Singapore", event: "All-Hands Meeting", pax: 800 },
      { client: "Great Eastern", event: "Quarterly Address", pax: 600 },
      { client: "NTUC Income", event: "Company Town Hall", pax: 900 },
      { client: "Manulife Singapore", event: "Strategy Launch", pax: 500 },
      { client: "AXA Singapore", event: "Year-End Town Hall", pax: 700 },
      { client: "Zurich Insurance", event: "Hybrid Town Hall", pax: 450 },
      { client: "Tokio Marine", event: "Regional Conference", pax: 350 },
      { client: "FWD Insurance", event: "Annual Address", pax: 550 },
      { client: "Income Insurance", event: "CEO Town Hall", pax: 1000 },
      { client: "Aviva Singapore", event: "All-Hands Hybrid", pax: 400 },
      { client: "Prudential", event: "Mid-Year Update", pax: 650 },
    ],
    recentEventsHeadline: "Companies who've hosted Town Halls with Elluminate",
  },
  "immersive-experiences": {
    accentColor: "#43F0D8",
    hero: {
      title: "Immersive Experiences",
      subtitle: "Immersive",
      tagline: "Step into worlds where imagination becomes reality.",
      backgroundImage: immersiveExperienceHero
    },
    overview: {
      description: "Transport your guests into extraordinary worlds with fully immersive themed experiences. We create multisensory environments that captivate, engage, and leave lasting impressions on every attendee. From fantasy realms to futuristic visions, we make the impossible possible.",
      backgroundImage: immersiveExperienceHero
    },
    features: [
      { icon: Theater, title: "World-Building & Storytelling", description: "Complete narratives that transport guests." },
      { icon: Palette, title: "Set Design & Construction", description: "Physical environments that amaze." },
      { icon: Users, title: "Character & Performer Casting", description: "Actors who bring the world to life." },
      { icon: Music, title: "Sensory Experience Integration", description: "Sound, scent, touch, and taste." },
      { icon: Sparkles, title: "Special Effects", description: "Magical moments that surprise." },
      { icon: Camera, title: "Instagram-Worthy Moments", description: "Shareable experiences for social reach." }
    ],
    benefits: [
      { icon: Star, title: "Unforgettable Experiences", description: "Memories that last a lifetime." },
      { icon: Heart, title: "Emotional Engagement", description: "Deep connection through storytelling." },
      { icon: Camera, title: "Social Media Gold", description: "Content your guests create for you." },
      { icon: Gem, title: "Brand Differentiation", description: "Stand out from ordinary events." },
      { icon: Sparkles, title: "Lasting Impressions", description: "Experiences they'll talk about for years." }
    ],
    activities: {
      sectionTitle: "EXPERIENCE THEMES",
      items: ["Murder Mystery Night", "Escape Room Adventure", "Circus Spectacular", "Jungle Safari", "Under the Sea", "Space Station Mission", "Medieval Kingdom", "Superhero Universe", "Detective Investigation", "Time Travel Journey", "Fantasy Realm Quest", "Secret Agent Mission"]
    },
    alternatingSections: [
      {
        title: "Complete World Building",
        description: "We create fully realized worlds with detailed environments, characters, and storylines.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920",
        points: [
          { text: "Custom set design and construction" },
          { text: "Thematic prop sourcing" },
          { text: "Costume and character development" },
          { text: "Environmental soundscapes" }
        ]
      },
      {
        title: "Multi-Sensory Engagement",
        description: "Engage all five senses for a truly immersive experience.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Signature scents for each zone" },
          { text: "Themed food and beverages" },
          { text: "Tactile interactive elements" },
          { text: "Immersive audio design" }
        ]
      },
      {
        title: "Theme Options",
        description: "From classic elegance to sci-fi adventures, we bring any theme to life.",
        image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=1920",
        points: [
          { text: "Enchanted Forest" },
          { text: "Futuristic Metropolis" },
          { text: "Underwater Kingdom" },
          { text: "Space Odyssey" }
        ]
      }
    ],
    themes: [
      { name: "Enchanted Forest", image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800" },
      { name: "Futuristic Metropolis", image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800" },
      { name: "Underwater Kingdom", image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=800" },
      { name: "Ancient Dynasty", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800" },
      { name: "Space Odyssey", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800" },
      { name: "Circus Spectacular", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800"
    ],
    testimonials: [
      { quote: "We stepped into another world entirely. Absolutely magical!", author: "Lisa Chen", company: "Facebook Singapore" },
      { quote: "The attention to detail was incredible. Every corner was Instagram-worthy.", author: "Tom Lim", company: "TikTok Singapore" },
      { quote: "Our guests are still talking about it months later. Unforgettable!", author: "Sarah Ng", company: "ByteDance" },
      { quote: "The multi-sensory elements made it truly immersive.", author: "Kevin Tan", company: "Google Singapore" },
      { quote: "Most creative event we've ever hosted. Blown away!", author: "Amanda Wong", company: "Netflix Singapore" },
      { quote: "The world-building was extraordinary. Felt like a movie set.", author: "Daniel Lee", company: "Disney Southeast Asia" }
    ],
    faqs: [
      { question: "How elaborate can the immersive experience be?", answer: "We can create anything from themed zones within a venue to complete environmental transformations. Our team includes set designers, fabricators, and creative technologists." },
      { question: "What themes are most popular?", answer: "Popular themes include fantasy worlds, futuristic/sci-fi, vintage eras, cultural celebrations, and brand-specific universes." },
      { question: "Can you incorporate technology?", answer: "Yes! We integrate projection mapping, AR/VR elements, interactive installations, and special effects to enhance immersion." },
      { question: "What's the lead time for immersive events?", answer: "Due to the production complexity, we recommend 8-12 weeks minimum for fully immersive experiences." },
      { question: "Do you provide performers and actors?", answer: "Yes, we cast and costume performers who bring the world to life through character interactions." }
    ],
    cta: {
      headline: "Ready to Create Another World?",
      subtext: "Let's transport your guests to extraordinary realms of wonder."
    }
  },
  "wellness-events": {
    accentColor: "#A5F0D0",
    hero: {
      title: "Wellness Events",
      subtitle: "Wellness",
      tagline: "Nurturing wellbeing, inspiring balance, elevating your team.",
      backgroundImage: wellnessEventHero
    },
    overview: {
      description: "Promote employee wellbeing with thoughtfully designed wellness events that nurture mind, body, and spirit. From meditation sessions to fitness challenges, we create experiences that support holistic health and demonstrate your commitment to your team's wellness.",
      backgroundImage: wellnessEventHero
    },
    features: [
      { icon: Dumbbell, title: "Wellness Activity Curation", description: "Diverse activities for all fitness levels." },
      { icon: Heart, title: "Mental Health Sessions", description: "Mindfulness and stress management programs." },
      { icon: Users, title: "Expert Facilitators", description: "Certified wellness professionals." },
      { icon: Sparkles, title: "Holistic Approach", description: "Mind, body, and spirit integration." },
      { icon: Target, title: "Wellness Assessments", description: "Personalized health insights." },
      { icon: Gift, title: "Wellness Kits", description: "Take-home resources for continued practice." }
    ],
    benefits: [
      { icon: Heart, title: "Reduced Stress", description: "Practical tools for stress management." },
      { icon: Zap, title: "Increased Energy", description: "Revitalized and motivated teams." },
      { icon: Users, title: "Team Connection", description: "Bond through shared wellness experiences." },
      { icon: Star, title: "Employee Appreciation", description: "Show you care about their wellbeing." },
      { icon: Target, title: "Productivity Boost", description: "Healthier employees perform better." }
    ],
    activities: {
      sectionTitle: "WELLNESS ACTIVITIES",
      items: ["Corporate Yoga Session", "Guided Meditation", "Mindfulness Workshop", "Fitness Bootcamp", "Nutrition Workshop", "Stress Management Class", "Sound Healing", "Nature Walk Therapy", "Pilates Session", "Breathwork Experience", "Wellness Cooking Class", "Sleep Optimization Talk"]
    },
    alternatingSections: [
      {
        title: "Physical Wellness",
        description: "Get your team moving with fun, inclusive activities for all fitness levels.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920",
        points: [
          { text: "Yoga and stretching sessions" },
          { text: "Team fitness challenges" },
          { text: "Dance and movement classes" },
          { text: "Outdoor activities and hikes" }
        ]
      },
      {
        title: "Mental Wellness",
        description: "Support mental health with mindfulness and stress reduction programs.",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920",
        points: [
          { text: "Guided meditation sessions" },
          { text: "Stress management workshops" },
          { text: "Breathwork and relaxation" },
          { text: "Mental health awareness talks" }
        ]
      },
      {
        title: "Holistic Experiences",
        description: "Integrate mind, body, and spirit for complete wellbeing.",
        image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=1920",
        points: [
          { text: "Sound healing sessions" },
          { text: "Nutrition workshops" },
          { text: "Spa and relaxation experiences" },
          { text: "Nature immersion activities" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
      "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800"
    ],
    testimonials: [
      { quote: "The wellness day was exactly what our team needed. Everyone felt recharged.", author: "Michelle Lim", company: "Unilever Singapore" },
      { quote: "Professional instructors and thoughtfully curated activities. Highly recommended!", author: "David Tan", company: "Johnson & Johnson" },
      { quote: "Our employees rated it the best wellness initiative we've ever done.", author: "Sarah Goh", company: "P&G Singapore" },
      { quote: "The mental wellness component was especially valuable.", author: "Kevin Wong", company: "GSK Singapore" },
      { quote: "Inclusive activities that everyone could participate in.", author: "Amanda Lee", company: "Merck Singapore" },
      { quote: "Team bonding through wellness was a great combination.", author: "Richard Tan", company: "Sanofi Singapore" }
    ],
    faqs: [
      { question: "What activities can be included?", answer: "Options include yoga, meditation, fitness classes, nutritionworkshops, spa experiences, outdoor activities, and mental health sessions." },
      { question: "Can activities be adapted for all fitness levels?", answer: "Absolutely! We ensure all activities are inclusive and offer modifications for different abilities and fitness levels." },
      { question: "Do you provide certified instructors?", answer: "Yes, all our wellness facilitators are certified professionals in their respective disciplines." },
      { question: "Can wellness events be held outdoors?", answer: "We offer both indoor and outdoor wellness experiences, including nature walks, beach yoga, and park activities." },
      { question: "What wellness resources can participants take home?", answer: "We can provide wellness kits including guides, apps, equipment, and resources for continued practice." }
    ],
    cta: {
      headline: "Ready to Invest in Your Team's Wellbeing?",
      subtext: "Let's create wellness experiences that nurture and energize your people."
    }
  },
  "event-concept": {
    accentColor: "#C0C0C0",
    dividerVariant: "spotlight",
    hero: {
      title: "Event Concept Development",
      subtitle: "Concept",
      tagline: "Where vision transforms into extraordinary experiences.",
      backgroundImage: eventConceptHero
    },
    overview: {
      description: "Turn your event vision into reality with our comprehensive concept development services. We work closely with your stakeholders to craft unique event narratives, design immersive guest journeys, and create detailed execution plans that bring your ideas to life with precision and creativity. Our process begins with discovery workshops where we decode your brand DNA, audience profile, and strategic objectives. From there, our creative directors develop 2-3 distinct concept directions, each with mood boards, colour palettes, 3D venue renderings, and experience flow maps. Once a direction is selected, we refine every touchpoint from entrance moments to farewell gifts, producing detailed production specifications that any vendor team can execute flawlessly. Whether you are planning a product launch, annual gala, or multi-day conference, our concept development ensures your event tells a cohesive story that resonates long after the last guest departs.",
      backgroundImage: eventConceptHero
    },
    features: [
      { icon: Lightbulb, title: "Creative Ideation", description: "Multi-session brainstorming that sparks innovative, on-brand concepts." },
      { icon: Palette, title: "Theme Development", description: "Cohesive narratives that tie every element of your event together." },
      { icon: PenTool, title: "Visual Design", description: "Mood boards, 3D renderings, colour palettes, and design specifications." },
      { icon: Target, title: "Strategic Alignment", description: "Concepts engineered to achieve measurable event objectives." },
      { icon: Users, title: "Stakeholder Workshops", description: "Collaborative sessions to align vision across all decision-makers." },
      { icon: Monitor, title: "Production Planning", description: "Detailed technical specs, vendor briefs, and run-sheet documentation." }
    ],
    benefits: [
      { icon: Star, title: "Unique Concepts", description: "Events that stand out and never feel templated." },
      { icon: Target, title: "Clear Direction", description: "A defined creative vision for all stakeholders and vendors." },
      { icon: Sparkles, title: "Creative Excellence", description: "Innovative ideas from a team with 500+ events produced." },
      { icon: Clock, title: "Efficient Execution", description: "Detailed plans that prevent scope creep and last-minute surprises." },
      { icon: Heart, title: "Memorable Experiences", description: "Concepts designed for emotional impact and audience delight." }
    ],
    activities: {
      sectionTitle: "CONCEPT SERVICES",
      items: ["Theme Development", "Narrative Design", "3D Renderings", "Mood Board Creation", "Experience Flow Mapping", "Stakeholder Workshops", "Venue Scouting", "Vendor Coordination", "Budget Planning", "Timeline Development", "Risk Assessment", "Creative Direction"]
    },
    alternatingSections: [
      {
        title: "Discovery & Ideation",
        description: "We start by understanding your vision, objectives, and audience to spark creative concepts.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920",
        points: [
          { text: "Stakeholder interviews and briefings" },
          { text: "Creative brainstorming sessions" },
          { text: "Competitive landscape analysis" },
          { text: "Audience persona development" }
        ]
      },
      {
        title: "Concept Design",
        description: "Transform ideas into tangible concepts with visual presentations and detailed specifications.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920",
        points: [
          { text: "Theme and narrative development" },
          { text: "Mood boards and visual direction" },
          { text: "3D renderings and layouts" },
          { text: "Experience flow mapping" }
        ]
      },
      {
        title: "Production Planning",
        description: "Detailed execution plans ensure your concept comes to life exactly as envisioned.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Technical specifications" },
          { text: "Vendor coordination plans" },
          { text: "Timeline and run sheets" },
          { text: "Budget breakdowns" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800"
    ],
    testimonials: [
      { quote: "The concept development process was incredibly thorough. Every stakeholder was aligned within two weeks.", author: "Lisa Wong", company: "L'Oreal Singapore" },
      { quote: "Elluminate transformed our vague ideas into a stunning event concept with 3D renderings that blew us away.", author: "Marcus Tan", company: "BMW Asia" },
      { quote: "The visual presentations made it easy to get C-suite buy-in on our first attempt.", author: "Amanda Lee", company: "Johnson & Johnson" },
      { quote: "Creative and practical. They understood our brand DNA perfectly from the first workshop.", author: "Kevin Goh", company: "Sephora Singapore" },
      { quote: "The production plans were so detailed, our vendor team executed without a single question.", author: "Sarah Chen", company: "Pandora Singapore" },
      { quote: "Best concept development experience we have had. Truly elevated our annual conference.", author: "Daniel Lim", company: "Abbott Laboratories" }
    ],
    faqs: [
      { question: "What is included in concept development?", answer: "Discovery workshops, creative brainstorming, 2-3 concept directions with mood boards, 3D renderings, experience flow maps, and detailed production specifications." },
      { question: "How many concept options do you present?", answer: "We typically develop 2-3 distinct concept directions for you to choose from, then refine the selected concept through two revision rounds." },
      { question: "Can you work with our existing ideas?", answer: "Absolutely! We can develop your existing vision further or start from scratch based on your objectives and audience." },
      { question: "Do you handle execution as well?", answer: "Yes, we offer end-to-end service from concept to on-site execution, or we can hand over detailed plans to your production team." },
      { question: "What is the typical timeline for concept development?", answer: "Concept development typically takes 2-4 weeks depending on complexity, number of stakeholders, and revision cycles." }
    ],
    cta: {
      headline: "Ready to Bring Your Vision to Life?",
      subtext: "Let's develop an event concept that exceeds your imagination."
    },
    recentEvents: [
      { client: "L'Oreal Singapore", event: "Annual Summit Concept", pax: 500 },
      { client: "BMW Asia", event: "Product Launch Concept", pax: 300 },
      { client: "Johnson & Johnson", event: "Conference Design", pax: 800 },
      { client: "Sephora Singapore", event: "Brand Event Concept", pax: 200 },
      { client: "Pandora Singapore", event: "VIP Gala Concept", pax: 150 },
      { client: "Abbott Laboratories", event: "Annual Dinner Concept", pax: 600 },
      { client: "Roche Singapore", event: "Summit Concept Development", pax: 400 },
      { client: "Procter & Gamble", event: "Brand Activation Concept", pax: 1000 },
      { client: "Unilever Singapore", event: "Year-End Gala Concept", pax: 700 },
      { client: "AstraZeneca", event: "Conference Concept", pax: 350 },
      { client: "GSK Singapore", event: "Awards Night Concept", pax: 250 },
      { client: "Pfizer Singapore", event: "Product Launch Concept", pax: 450 }
    ],
    recentEventsHeadline: "Companies whose events we've conceptualized"
  },
  "stage-production": {
    accentColor: "#FFB347",
    dividerVariant: "spotlight",
    hero: {
      title: "Stage & AV Production",
      subtitle: "Production",
      tagline: "Where technology meets artistry to create unforgettable moments.",
      backgroundImage: stageProductionHero
    },
    overview: {
      description: "Elevate your events with professional stage design and audio-visual production that creates immersive, cinema-grade experiences. Our technical team brings together cutting-edge LED walls, intelligent lighting rigs, concert-grade sound systems, and show-stopping special effects to deliver flawless productions that captivate audiences from the opening act to the final bow. We handle everything from initial stage blueprints and 3D renderings through load-in, technical rehearsal, and live show operation. Whether you need a simple podium setup for 50 or a multi-level stage with projection mapping for 5,000, our crew of certified riggers, sound engineers, lighting designers, and video technicians deliver broadcast-quality production values every time. We maintain our own inventory of premium equipment and always deploy redundant backup systems for mission-critical shows.",
      backgroundImage: stageProductionHero
    },
    features: [
      { icon: Monitor, title: "Stage Design", description: "Custom stage constructions with 3D rendering previews before build." },
      { icon: Volume2, title: "Audio Systems", description: "Concert-grade line arrays for crystal-clear sound at any venue size." },
      { icon: Lightbulb, title: "Lighting Design", description: "Intelligent moving heads, wash lights, and atmospheric effects." },
      { icon: Video, title: "Video Production", description: "LED walls, projection mapping, IMAG cameras, and live switching." },
      { icon: Sparkles, title: "Special Effects", description: "Cold pyro, CO2 jets, confetti cannons, haze, and snow machines." },
      { icon: Users, title: "Technical Crew", description: "Certified riggers, engineers, and stage managers for seamless execution." }
    ],
    benefits: [
      { icon: Star, title: "Professional Quality", description: "Broadcast-grade production values that impress every audience." },
      { icon: Camera, title: "Visual Impact", description: "Stunning visuals that transform ordinary venues into spectacular stages." },
      { icon: Zap, title: "Reliable Execution", description: "Redundant equipment and backup systems for zero-failure shows." },
      { icon: Heart, title: "Emotional Moments", description: "Technology that amplifies storytelling and creates goosebump moments." },
      { icon: Sparkles, title: "Memorable Experiences", description: "Production quality that elevates every moment of your event." }
    ],
    activities: {
      sectionTitle: "PRODUCTION SERVICES",
      items: ["Custom Stage Design", "LED Wall Setup", "Projection Mapping", "Intelligent Lighting", "Professional Sound System", "Live Streaming", "Confetti & Pyrotechnics", "Fog & Haze Effects", "Moving Head Lights", "Truss & Rigging", "Video Playback", "Technical Direction"]
    },
    alternatingSections: [
      {
        title: "Stage Design & Construction",
        description: "Custom stage builds that create the perfect platform for your event.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [{ text: "Custom stage design and fabrication" }, { text: "LED screen integration" }, { text: "Scenic elements and backdrops" }, { text: "Rigging and structural engineering" }]
      },
      {
        title: "Audio-Visual Excellence",
        description: "State-of-the-art technology for crystal-clear sound and stunning visuals.",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920",
        points: [{ text: "Professional sound systems" }, { text: "Intelligent lighting rigs" }, { text: "LED walls and projection" }, { text: "Live streaming capabilities" }]
      },
      {
        title: "Special Effects",
        description: "Add magic to your event with spectacular effects and atmospheric elements.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920",
        points: [{ text: "Confetti and streamer cannons" }, { text: "Haze and fog machines" }, { text: "CO2 jets and cold pyro" }, { text: "Bubble and snow effects" }]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800"
    ],
    testimonials: [
      { quote: "The stage production was absolutely world-class. Our 2,000 guests were mesmerized.", author: "Richard Wong", company: "Singtel" },
      { quote: "Technical execution was flawless. Zero hiccups across a 4-hour live show.", author: "Amanda Tan", company: "StarHub" },
      { quote: "The lighting design transformed our ballroom into a concert arena.", author: "Kevin Lee", company: "MediaCorp" },
      { quote: "Best AV production we have ever experienced at a corporate event in Singapore.", author: "Michelle Goh", company: "SPH Media" },
      { quote: "The cold pyro and confetti finale had the entire audience on their feet.", author: "Daniel Lim", company: "Resorts World Sentosa" },
      { quote: "From 3D renders to load-out, the team was professional and meticulous.", author: "Sarah Chen", company: "Marina Bay Sands" }
    ],
    faqs: [
      { question: "What production services do you offer?", answer: "Stage design, audio systems, intelligent lighting, LED/projection, live streaming, special effects (pyro, confetti, haze), and full technical crew." },
      { question: "Do you work with venue in-house AV?", answer: "We can integrate with venue systems or bring our own equipment, depending on your requirements and venue restrictions." },
      { question: "Can you handle outdoor events?", answer: "Yes, we have weatherproof equipment and outdoor-rated systems for open-air events of any scale." },
      { question: "What backup systems do you have?", answer: "We always deploy redundant equipment and backup power for mission-critical elements like sound, video playback, and lighting." },
      { question: "How early do you need venue access?", answer: "Depending on complexity, we typically need 1-3 days for load-in, setup, technical rehearsals, and sound checks." }
    ],
    cta: {
      headline: "Ready for Production Excellence?",
      subtext: "Let's create a technical production that elevates your event to new heights."
    },
    recentEvents: [
      { client: "Singtel", event: "Annual Gala Stage Production", pax: 2000 },
      { client: "StarHub", event: "Product Launch AV", pax: 800 },
      { client: "MediaCorp", event: "Awards Show Production", pax: 1500 },
      { client: "SPH Media", event: "Conference Stage Design", pax: 600 },
      { client: "Resorts World Sentosa", event: "Grand Show Production", pax: 3000 },
      { client: "Marina Bay Sands", event: "Corporate Gala AV", pax: 2500 },
      { client: "Changi Airport Group", event: "Launch Event Stage", pax: 1000 },
      { client: "Singapore Airlines", event: "Awards Ceremony Production", pax: 500 },
      { client: "CapitaLand", event: "Town Hall AV Setup", pax: 400 },
      { client: "DBS Bank", event: "Annual Dinner Stage", pax: 1200 },
      { client: "OCBC", event: "D&D Production", pax: 900 },
      { client: "UOB", event: "Conference AV Package", pax: 700 }
    ],
    recentEventsHeadline: "Events we've brought to life on stage"
  },
  "custom-themes": {
    accentColor: "#7A2BE2",
    dividerVariant: "spotlight",
    hero: {
      title: "Custom Theme Creation",
      subtitle: "Theme",
      tagline: "Where imagination takes form and events become works of art.",
      backgroundImage: customThemesHero
    },
    overview: {
      description: "Transform ordinary venues into extraordinary themed environments with our custom theme creation services. From elegant galas to wild fantasy worlds, we design and execute cohesive themes that immerse guests in unforgettable experiences.",
      backgroundImage: customThemesHero
    },
    features: [
      { icon: Palette, title: "Theme Conceptualization", description: "Original themes tailored to your vision." },
      { icon: PenTool, title: "Visual Design", description: "Mood boards, color palettes, and design guides." },
      { icon: Building, title: "Set Design & Fabrication", description: "Custom props and scenic elements." },
      { icon: Sparkles, title: "Decor & Styling", description: "Comprehensive venue transformation." },
      { icon: Music, title: "Sensory Integration", description: "Music, lighting, and scent to match." },
      { icon: Users, title: "Costume & Character Design", description: "Themed attire and performers." }
    ],
    benefits: [
      { icon: Star, title: "Unique Events", description: "One-of-a-kind themed experiences." },
      { icon: Camera, title: "Photo Opportunities", description: "Instagram-worthy moments throughout." },
      { icon: Heart, title: "Immersive Atmosphere", description: "Transport guests to another world." },
      { icon: Gem, title: "Brand Alignment", description: "Themes that reflect your identity." },
      { icon: Sparkles, title: "Lasting Memories", description: "Events they'll never forget." }
    ],
    activities: {
      sectionTitle: "POPULAR THEMES",
      items: ["Great Gatsby Art Deco", "Tropical Paradise", "Casino Royale", "Enchanted Garden", "Hollywood Glamour", "Futuristic Neon", "Rustic Charm", "Winter Wonderland", "Arabian Nights", "Carnival Fiesta", "Black & Gold Luxury", "Retro 80s"]
    },
    alternatingSections: [
      {
        title: "Theme Development",
        description: "We create original theme concepts that align with your vision and event objectives.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920",
        points: [
          { text: "Creative concept development" },
          { text: "Mood boards and visual direction" },
          { text: "Color palette and design guides" },
          { text: "Theme narrative and storytelling" }
        ]
      },
      {
        title: "Venue Transformation",
        description: "Watch your venue transform into a completely different world.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920",
        points: [
          { text: "Custom set pieces and props" },
          { text: "Themed furniture and decor" },
          { text: "Entrance experiences" },
          { text: "Photo booth installations" }
        ]
      },
      {
        title: "Complete Sensory Design",
        description: "Engage all senses for full thematic immersion.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920",
        points: [
          { text: "Themed music and soundscapes" },
          { text: "Signature scents" },
          { text: "Themed food and beverages" },
          { text: "Atmospheric lighting design" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
    ],
    testimonials: [
      { quote: "The venue transformation was absolutely magical. Guests were blown away!", author: "Lisa Wong", company: "Raffles Hotel" },
      { quote: "Elluminate brought our fantasy theme to life beyond our imagination.", author: "Marcus Tan", company: "Marina Bay Sands" },
      { quote: "Every detail was perfect. The theme was completely immersive.", author: "Amanda Lee", company: "Capella Singapore" },
      { quote: "Most creative themed event we've ever experienced.", author: "Kevin Goh", company: "St. Regis Singapore" },
      { quote: "The sensory elements really completed the experience.", author: "Sarah Chen", company: "Fullerton Hotel" },
      { quote: "Guests thought they'd stepped into a movie set!", author: "Daniel Lim", company: "W Singapore" }
    ],
    faqs: [
      { question: "What themes can you create?", answer: "We can create any theme imaginable - from classic elegance to fantasy worlds, vintage eras to futuristic visions. If you can dream it, we can build it." },
      { question: "Do you handle all decor and props?", answer: "Yes, we source, fabricate, and install all themed elements including props, furniture, florals, and specialty items." },
      { question: "Can themes be adapted to different budgets?", answer: "Absolutely! We can scale themes from intimate touches to full venue transformations based on your budget." },
      { question: "What happens to the decor after the event?", answer: "We handle all breakdown and removal. Some clients choose to keep certain items as mementos." },
      { question: "How do you ensure cohesive theming?", answer: "We create comprehensive design guides and oversee all vendors to ensure every element aligns with the theme." }
    ],
    cta: {
      headline: "Ready to Create Your Perfect Theme?",
      subtext: "Let's transform your venue into an unforgettable themed experience."
    },
    recentEvents: [
      { client: "Raffles Hotel", event: "Gatsby Theme Gala", pax: 300 },
      { client: "Marina Bay Sands", event: "Casino Royale Theme", pax: 500 },
      { client: "Capella Singapore", event: "Enchanted Garden D&D", pax: 200 },
      { client: "St. Regis Singapore", event: "Hollywood Glamour Night", pax: 250 },
      { client: "Fullerton Hotel", event: "Arabian Nights Theme", pax: 400 },
      { client: "W Singapore", event: "Neon Futuristic Launch", pax: 350 },
      { client: "Shangri-La Singapore", event: "Winter Wonderland Theme", pax: 600 },
      { client: "Mandarin Oriental", event: "Tropical Paradise Gala", pax: 280 },
      { client: "The Ritz-Carlton", event: "Black & Gold Luxury", pax: 180 },
      { client: "Pan Pacific", event: "Retro 80s Party", pax: 450 },
      { client: "Fairmont Singapore", event: "Carnival Fiesta Theme", pax: 320 },
      { client: "Conrad Centennial", event: "Rustic Charm D&D", pax: 220 }
    ],
    recentEventsHeadline: "Venues we've transformed with custom themes"
  },
  "emcee-media": {
    accentColor: "#6C7A89",
    dividerVariant: "spotlight",
    hero: {
      title: "Emcee, Photo & Video",
      subtitle: "Media",
      tagline: "Capturing moments, commanding stages, creating memories.",
      backgroundImage: emceeMediaHero
    },
    overview: {
      description: "Complete your event with professional hosting and comprehensive media coverage. Our experienced emcees energize any event, while our photography and videography teams capture every precious moment with cinematic quality.",
      backgroundImage: emceeMediaHero
    },
    features: [
      { icon: Mic, title: "Professional Emcees", description: "Charismatic hosts for any event type." },
      { icon: Camera, title: "Event Photography", description: "Professional coverage of every moment." },
      { icon: Video, title: "Videography", description: "Cinematic event documentation." },
      { icon: Sparkles, title: "Same-Day Edits", description: "Quick turnaround for instant sharing." },
      { icon: Monitor, title: "Live Streaming", description: "Broadcast to remote audiences." },
      { icon: PenTool, title: "Post-Production", description: "Professional editing and delivery." }
    ],
    benefits: [
      { icon: Star, title: "Engaging Events", description: "Hosts who energize every moment." },
      { icon: Camera, title: "Quality Coverage", description: "Professional documentation." },
      { icon: Heart, title: "Lasting Memories", description: "Moments captured forever." },
      { icon: Zap, title: "Fast Delivery", description: "Quick turnaround times." },
      { icon: Users, title: "Extended Reach", description: "Share with those who couldn't attend." }
    ],
    activities: {
      sectionTitle: "SERVICE OPTIONS",
      items: ["Event Emcee", "Wedding Emcee", "Bilingual Host", "Event Photography", "Corporate Headshots", "Photo Booth", "Same-Day Edit Video", "Highlight Reel", "Full Event Coverage", "Live Streaming", "Drone Videography", "Interview Videos"]
    },
    alternatingSections: [
      {
        title: "Professional Emcees",
        description: "Our experienced hosts bring energy, professionalism, and perfect timing to your event.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920",
        points: [
          { text: "Bilingual and multilingual options" },
          { text: "Corporate and entertainment styles" },
          { text: "Script development support" },
          { text: "Audience interaction expertise" }
        ]
      },
      {
        title: "Photography Services",
        description: "Capture every smile, every moment, every memory with professional photography.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
        points: [
          { text: "Event coverage photography" },
          { text: "Corporate headshots" },
          { text: "Photo booth services" },
          { text: "Instant prints available" }
        ]
      },
      {
        title: "Video Production",
        description: "From event highlights to full coverage, we deliver cinematic video content.",
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920",
        points: [
          { text: "Multi-camera event coverage" },
          { text: "Same-day highlight reels" },
          { text: "Live streaming services" },
          { text: "Post-event documentary edits" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800"
    ],
    testimonials: [
      { quote: "The emcee was absolutely fantastic! Kept the energy high all night.", author: "Richard Wong", company: "DBS Bank" },
      { quote: "Photography quality was outstanding. Every shot was perfect.", author: "Amanda Tan", company: "OCBC Bank" },
      { quote: "The same-day edit video was a huge hit with our guests.", author: "Kevin Lee", company: "UOB Bank" },
      { quote: "Professional team from start to finish. Highly recommended!", author: "Michelle Goh", company: "Standard Chartered" },
      { quote: "Our emcee made even the formal segments entertaining.", author: "Daniel Lim", company: "Maybank Singapore" },
      { quote: "Best event coverage we've ever had. Worth every cent.", author: "Sarah Chen", company: "HSBC Singapore" }
    ],
    faqs: [
      { question: "What types of emcees are available?", answer: "We have emcees for corporate events, gala dinners, team building, conferences, and entertainment shows. Bilingual and multilingual options available." },
      { question: "How many photos/videos do we receive?", answer: "Deliverables depend on the package, but typically 300-500 edited photos for a full event and 3-5 minute highlight videos." },
      { question: "How quickly are photos/videos delivered?", answer: "Same-day edits for select photos/video highlights. Full galleries typically within 1-2 weeks." },
      { question: "Can you do live streaming?", answer: "Yes, we offer professional live streaming to platforms like YouTube, Facebook, Zoom, or custom platforms." },
      { question: "Do emcees help with script writing?", answer: "Yes, our emcees work with you on scripts, run-sheets, and can improvise professionally when needed." }
    ],
    cta: {
      headline: "Ready to Capture Your Event?",
      subtext: "Let's bring professional hosting and media coverage to your next event."
    },
    recentEvents: [
      { client: "DBS Bank", event: "Emcee + Photo Coverage", pax: 1200 },
      { client: "OCBC Bank", event: "D&D Photography", pax: 800 },
      { client: "UOB Bank", event: "Awards Night Emcee", pax: 600 },
      { client: "Standard Chartered", event: "Gala Video Coverage", pax: 500 },
      { client: "Maybank Singapore", event: "Conference Emcee", pax: 400 },
      { client: "HSBC Singapore", event: "Full Media Package", pax: 1000 },
      { client: "Citibank Singapore", event: "Town Hall Emcee", pax: 700 },
      { client: "Bank of Singapore", event: "Photo + Video", pax: 300 },
      { client: "CIMB Singapore", event: "Event Photography", pax: 450 },
      { client: "RHB Singapore", event: "Same-Day Edit Video", pax: 350 },
      { client: "Rabobank", event: "Bilingual Emcee", pax: 250 },
      { client: "ANZ Singapore", event: "Full Event Coverage", pax: 550 }
    ],
    recentEventsHeadline: "Events we've hosted and captured"
  },
  "summits": {
    accentColor: "#6366F1",
    hero: {
      title: "Corporate Summits",
      subtitle: "Summit",
      tagline: "Bring your industry leaders together for impactful discussions and strategic alignment.",
      backgroundImage: summitsHero
    },
    overview: {
      description: "Host world-class summits that position your organization as an industry leader. From intimate executive roundtables to large-scale industry conferences, we manage every detail to ensure your summit delivers maximum impact and engagement.",
      backgroundImage: summitsHero
    },
    features: [
      { icon: Users, title: "Speaker Management", description: "End-to-end coordination of keynote speakers and panelists." },
      { icon: Monitor, title: "Hybrid Capabilities", description: "Seamless integration of in-person and virtual attendees." },
      { icon: Mic, title: "Panel Moderation", description: "Professional moderators for engaging discussions." },
      { icon: Target, title: "Strategic Sessions", description: "Workshops designed to drive actionable outcomes." },
      { icon: Camera, title: "Content Capture", description: "Professional recording for post-event distribution." },
      { icon: Sparkles, title: "VIP Experiences", description: "Exclusive networking sessions for key stakeholders." }
    ],
    benefits: [
      { icon: Globe, title: "Thought Leadership", description: "Position your brand at the forefront of industry discourse." },
      { icon: Users, title: "Network Building", description: "Connect stakeholders and build lasting relationships." },
      { icon: Target, title: "Strategic Alignment", description: "Align teams around shared vision and goals." },
      { icon: Star, title: "Brand Visibility", description: "Elevate your organization's market presence." },
      { icon: Lightbulb, title: "Knowledge Exchange", description: "Facilitate valuable insights and best practices." }
    ],
    activities: {
      sectionTitle: "SUMMIT FORMATS",
      items: ["Industry Conference", "Executive Roundtable", "Innovation Summit", "Leadership Forum", "Annual General Meeting", "Strategic Planning Summit", "Partner Conference", "Technology Summit", "Sustainability Forum", "Regional Summit", "Global Leadership Summit", "Customer Summit"]
    },
    alternatingSections: [
      {
        title: "Summit Excellence",
        description: "Our summits bring together the right people, content, and experiences to drive meaningful outcomes.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
        points: [
          { text: "Comprehensive speaker and content management" },
          { text: "Interactive session designs" },
          { text: "Networking facilitation" },
          { text: "Post-event content packaging" }
        ]
      },
      {
        title: "Why Our Summits Stand Out",
        description: "We combine strategic thinking with flawless execution to create summits that matter.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920",
        points: [
          { text: "Curated attendee experiences" },
          { text: "Thought-provoking content" },
          { text: "Premium production quality" },
          { text: "Measurable business outcomes" }
        ]
      },
      {
        title: "Perfect For",
        description: "Whether launching a new initiative or celebrating milestones, our summits deliver impact.",
        image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1920",
        points: [
          { text: "Annual industry conferences" },
          { text: "Leadership alignment sessions" },
          { text: "Partner and customer events" },
          { text: "Strategic planning gatherings" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
    ],
    testimonials: [
      { quote: "The summit exceeded all expectations. Attendees left inspired and aligned.", author: "James Tan", company: "Leading Bank" },
      { quote: "Professional execution from start to finish. Our best summit yet.", author: "Sarah Lim", company: "Technology Company" },
      { quote: "The networking sessions were invaluable. Real connections were made.", author: "Michael Wong", company: "Consulting Firm" },
      { quote: "Content quality and speaker management were exceptional.", author: "Rachel Goh", company: "Healthcare Organization" },
      { quote: "A seamless hybrid experience that engaged all attendees equally.", author: "David Chen", company: "Financial Services" },
      { quote: "Elluminate made our vision a reality. Highly recommended.", author: "Amanda Lee", company: "Manufacturing Company" }
    ],
    faqs: [
      { question: "What size summits can you manage?", answer: "We handle summits from 50 to 2000+ attendees, both in-person and hybrid formats." },
      { question: "Do you help with speaker sourcing?", answer: "Yes, we can help identify, invite, and coordinate speakers aligned with your summit themes." },
      { question: "Can you manage hybrid summits?", answer: "Absolutely. We specialize in seamless hybrid experiences that engage both in-person and virtual attendees." },
      { question: "What's the typical planning timeline?", answer: "We recommend 3-6 months for comprehensive summit planning, though we can accommodate shorter timelines." },
      { question: "Do you provide content support?", answer: "Yes, we help develop agendas, moderate sessions, and package content for post-event distribution." }
    ],
    cta: {
      headline: "Ready to Host an Impactful Summit?",
      subtext: "Let's create a summit that positions your organization as an industry leader."
    },
    recentEvents: [
      { client: "McKinsey Singapore", event: "Leadership Summit", pax: 300 },
      { client: "BCG Asia", event: "Partner Conference", pax: 200 },
      { client: "Bain & Company", event: "Strategy Summit", pax: 150 },
      { client: "Deloitte Singapore", event: "Industry Conference", pax: 500 },
      { client: "PwC Singapore", event: "Annual Summit", pax: 400 },
      { client: "EY Singapore", event: "Innovation Forum", pax: 350 },
      { client: "KPMG Singapore", event: "Technology Summit", pax: 250 },
      { client: "Accenture", event: "Digital Summit", pax: 600 },
      { client: "Oliver Wyman", event: "Executive Roundtable", pax: 80 },
      { client: "Roland Berger", event: "Regional Summit", pax: 120 },
      { client: "A.T. Kearney", event: "Global Leadership Forum", pax: 180 },
      { client: "Mercer Singapore", event: "HR Summit", pax: 450 }
    ],
    recentEventsHeadline: "Organizations whose summits we've produced",
    dividerVariant: "wave",
  },
  "government-events": {
    accentColor: "#DC2626",
    hero: {
      title: "Government Events",
      subtitle: "Government",
      tagline: "Delivering excellence in public sector events with precision and professionalism.",
      backgroundImage: governmentEventHero
    },
    overview: {
      description: "Partner with us for government events that meet the highest standards of professionalism, security, and impact. From ministry conferences to national celebrations, we bring expertise in protocol, stakeholder management, and seamless execution.",
      backgroundImage: governmentEventHero
    },
    features: [
      { icon: Award, title: "Protocol Excellence", description: "Adherence to government protocols and VIP requirements." },
      { icon: Lock, title: "Security Compliance", description: "Event planning that meets security standards." },
      { icon: Users, title: "Stakeholder Management", description: "Coordination across multiple agencies and departments." },
      { icon: Monitor, title: "Technical Production", description: "Broadcast-quality AV for official proceedings." },
      { icon: Globe, title: "Multi-Cultural Sensitivity", description: "Inclusive programming for diverse communities." },
      { icon: Clock, title: "Precision Timing", description: "Military-precision event flow and scheduling." }
    ],
    benefits: [
      { icon: Star, title: "Professional Image", description: "Events that reflect positively on your organization." },
      { icon: Users, title: "Public Engagement", description: "Meaningful connections with citizens and stakeholders." },
      { icon: Target, title: "Message Clarity", description: "Clear communication of government initiatives." },
      { icon: Heart, title: "Community Building", description: "Events that bring people together." },
      { icon: Award, title: "Standards Compliance", description: "Meeting all regulatory and protocol requirements." }
    ],
    activities: {
      sectionTitle: "EVENT TYPES",
      items: ["Ministry Conferences", "National Day Celebrations", "Community Outreach", "Policy Launches", "Award Ceremonies", "Public Forums", "Training Programs", "International Delegations", "Ground-Breaking Ceremonies", "Memorial Events", "Town Hall Meetings", "Youth Programs"]
    },
    alternatingSections: [
      {
        title: "Government Event Excellence",
        description: "We understand the unique requirements of public sector events and deliver accordingly.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
        points: [
          { text: "Protocol and ceremonial expertise" },
          { text: "Multi-stakeholder coordination" },
          { text: "Security and logistics planning" },
          { text: "Media and communications support" }
        ]
      },
      {
        title: "Trusted by Government",
        description: "Our track record in government events speaks for itself.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920",
        points: [
          { text: "Experience with statutory boards" },
          { text: "Understanding of procurement processes" },
          { text: "Compliance with government standards" },
          { text: "Professional and discrete service" }
        ]
      },
      {
        title: "Perfect For",
        description: "Public sector events that require precision, professionalism, and impact.",
        image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1920",
        points: [
          { text: "Ministerial and agency events" },
          { text: "Public engagement initiatives" },
          { text: "National celebrations" },
          { text: "Inter-agency programs" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
    ],
    testimonials: [
      { quote: "Professional execution that met all our protocol requirements.", author: "Director", company: "Government Agency" },
      { quote: "Seamless coordination across multiple departments.", author: "Event Manager", company: "Statutory Board" },
      { quote: "The attention to detail was impressive.", author: "Communications Lead", company: "Ministry" },
      { quote: "They understood our unique requirements perfectly.", author: "Programme Director", company: "Government Organization" },
      { quote: "A trusted partner for our annual events.", author: "Senior Manager", company: "Public Sector" },
      { quote: "Delivered excellence under tight timelines.", author: "Project Lead", company: "Government Agency" }
    ],
    faqs: [
      { question: "Do you understand government procurement?", answer: "Yes, we are familiar with GeBIZ and government procurement processes." },
      { question: "Can you handle VIP protocols?", answer: "Absolutely. We have experience with ministerial and diplomatic protocols." },
      { question: "What about security requirements?", answer: "We work closely with security teams to ensure all requirements are met." },
      { question: "Do you have relevant certifications?", answer: "We maintain necessary certifications and can provide documentation as required." },
      { question: "Can you manage large-scale public events?", answer: "Yes, we have experience with events ranging from intimate gatherings to large public celebrations." }
    ],
    cta: {
      headline: "Ready to Plan Your Government Event?",
      subtext: "Partner with us for events that meet the highest standards of public sector excellence."
    },
    dividerVariant: "ribbon",
    recentEvents: [
      { client: "Ministry of Education", event: "National Day Observance", pax: 2000 },
      { client: "Ministry of Health", event: "Healthcare Conference", pax: 800 },
      { client: "MAS", event: "Financial Sector Summit", pax: 500 },
      { client: "EDB Singapore", event: "Investor Forum", pax: 300 },
      { client: "JTC Corporation", event: "Industry Day", pax: 600 },
      { client: "HDB", event: "Community Event", pax: 1500 },
      { client: "NEA", event: "Sustainability Forum", pax: 400 },
      { client: "STB", event: "Tourism Conference", pax: 350 },
      { client: "NParks", event: "National Day Celebration", pax: 1000 },
      { client: "IMDA", event: "Digital Economy Summit", pax: 450 },
      { client: "Enterprise Singapore", event: "SME Conference", pax: 700 },
      { client: "A*STAR", event: "Research Symposium", pax: 250 }
    ],
    recentEventsHeadline: "Government agencies we've partnered with"
  },
  "private-events": {
    accentColor: "#EC4899",
    hero: {
      title: "Private Events",
      subtitle: "Private",
      tagline: "Intimate celebrations and exclusive gatherings crafted with personal attention.",
      backgroundImage: privateEventHero
    },
    overview: {
      description: "Create unforgettable private events for your most important occasions. From executive dinners to milestone celebrations, we bring the same level of excellence to intimate gatherings as we do to large-scale events.",
      backgroundImage: privateEventHero
    },
    features: [
      { icon: Heart, title: "Personal Touch", description: "Every detail tailored to your preferences and style." },
      { icon: Wine, title: "Premium Experiences", description: "Access to exclusive venues and services." },
      { icon: Sparkles, title: "Custom Design", description: "Unique themes and décor for your occasion." },
      { icon: Camera, title: "Memory Capture", description: "Professional photography and videography." },
      { icon: Music, title: "Entertainment", description: "Curated entertainment for your guests." },
      { icon: Lock, title: "Privacy", description: "Discrete planning and execution." }
    ],
    benefits: [
      { icon: Star, title: "Exclusive Experience", description: "Events as unique as you are." },
      { icon: Heart, title: "Stress-Free Planning", description: "We handle everything so you can enjoy." },
      { icon: Sparkles, title: "Memorable Moments", description: "Create lasting memories with loved ones." },
      { icon: Award, title: "Quality Assurance", description: "Corporate-level excellence for personal events." },
      { icon: Users, title: "Guest Experience", description: "Every guest feels valued and welcomed." }
    ],
    activities: {
      sectionTitle: "EVENT TYPES",
      items: ["Executive Dinners", "Milestone Birthdays", "Anniversary Celebrations", "Retirement Parties", "Private Concerts", "Intimate Weddings", "Family Reunions", "Graduation Parties", "Engagement Parties", "Baby Showers", "Farewell Gatherings", "VIP Gatherings"]
    },
    alternatingSections: [
      {
        title: "Personal Event Excellence",
        description: "Bringing corporate event expertise to your most personal celebrations.",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920",
        points: [
          { text: "Personalized planning and design" },
          { text: "Premium vendor network" },
          { text: "Full event coordination" },
          { text: "Day-of management" }
        ]
      },
      {
        title: "Why Choose Us",
        description: "The same excellence that Singapore's top companies trust, now for your private events.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920",
        points: [
          { text: "Attention to detail" },
          { text: "Professional coordination" },
          { text: "Creative concepts" },
          { text: "Seamless execution" }
        ]
      },
      {
        title: "Perfect For",
        description: "Special occasions that deserve special attention.",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920",
        points: [
          { text: "Executive celebrations" },
          { text: "Family milestones" },
          { text: "Intimate gatherings" },
          { text: "VIP occasions" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800"
    ],
    testimonials: [
      { quote: "My 50th birthday was absolutely perfect. Every detail was thoughtfully planned.", author: "Michelle", company: "Private Client" },
      { quote: "They made our anniversary celebration truly special.", author: "David & Sarah", company: "Private Clients" },
      { quote: "Professional service with a personal touch.", author: "James", company: "Private Client" },
      { quote: "Our family reunion was the best we've ever had.", author: "The Tan Family", company: "Private Clients" },
      { quote: "Exceeded all expectations for our intimate dinner.", author: "Robert", company: "Private Client" },
      { quote: "They understood exactly what we wanted.", author: "Amanda", company: "Private Client" }
    ],
    faqs: [
      { question: "What's the minimum guest count?", answer: "We cater to events from 20 to 500+ guests. Intimate gatherings are our specialty." },
      { question: "Can you help with venue sourcing?", answer: "Yes, we have relationships with exclusive venues across Singapore." },
      { question: "Do you handle all vendors?", answer: "We coordinate everything - catering, entertainment, décor, photography, and more." },
      { question: "How far in advance should we book?", answer: "We recommend 2-3 months for optimal planning, but can accommodate shorter timelines." },
      { question: "Is there flexibility in packages?", answer: "Absolutely. Every event is customized to your needs and budget." }
    ],
    cta: {
      headline: "Ready to Plan Your Private Event?",
      subtext: "Let's create an unforgettable celebration for you and your guests."
    },
    dividerVariant: "wave",
    recentEvents: [
      { client: "Private Client", event: "Executive 50th Birthday", pax: 80 },
      { client: "Private Client", event: "Anniversary Celebration", pax: 60 },
      { client: "Private Client", event: "Retirement Gala", pax: 120 },
      { client: "Private Client", event: "Milestone Birthday", pax: 100 },
      { client: "Private Client", event: "Family Reunion", pax: 200 },
      { client: "Private Client", event: "Engagement Party", pax: 50 },
      { client: "Private Client", event: "Graduation Celebration", pax: 70 },
      { client: "Private Client", event: "VIP Dinner", pax: 40 },
      { client: "Private Client", event: "Farewell Gathering", pax: 90 },
      { client: "Private Client", event: "Baby Shower", pax: 30 },
      { client: "Private Client", event: "Executive Dinner", pax: 25 },
      { client: "Private Client", event: "Housewarming", pax: 45 }
    ],
    recentEventsHeadline: "Private events we've curated"
  },
  "family-fun-days": {
    accentColor: "#F97316",
    hero: {
      title: "Family Fun Days",
      subtitle: "Family Day",
      tagline: "Bring families together for a day of joy, laughter, and unforgettable memories.",
      backgroundImage: familyFunDayHero
    },
    overview: {
      description: "Create magical family fun days that bring your employees and their loved ones together. Our comprehensive family events include activities for all ages, ensuring everyone from toddlers to grandparents has an amazing time.",
      backgroundImage: familyFunDayHero
    },
    features: [
      { icon: Users, title: "All-Ages Activities", description: "Engaging programs for every generation." },
      { icon: Gamepad2, title: "Game Stations", description: "Interactive games and carnival booths." },
      { icon: Music, title: "Entertainment", description: "Live performances and stage shows." },
      { icon: Gift, title: "Prizes & Giveaways", description: "Exciting prizes for participants." },
      { icon: Camera, title: "Photo Opportunities", description: "Fun photo booths and instant prints." },
      { icon: Heart, title: "Family Bonding", description: "Activities designed for family participation." }
    ],
    benefits: [
      { icon: Heart, title: "Employee Appreciation", description: "Show employees you value their families." },
      { icon: Users, title: "Team Bonding", description: "Build connections beyond the workplace." },
      { icon: Star, title: "Memorable Experience", description: "Create lasting family memories." },
      { icon: Sparkles, title: "Company Culture", description: "Strengthen organizational culture." },
      { icon: PartyPopper, title: "Fun Atmosphere", description: "A day of pure enjoyment for all." }
    ],
    activities: {
      sectionTitle: "ACTIVITY OPTIONS",
      items: ["Carnival Games", "Bouncy Castles", "Face Painting", "Balloon Sculpting", "Magic Shows", "Kids Workshops", "Sports Challenges", "Treasure Hunts", "Photo Booths", "Food Stalls", "Lucky Draws", "Stage Performances"]
    },
    alternatingSections: [
      {
        title: "A Day for Everyone",
        description: "Our family fun days cater to all ages with diverse activities and entertainment.",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1920",
        points: [
          { text: "Kids zone with age-appropriate activities" },
          { text: "Family challenge stations" },
          { text: "Entertainment for all ages" },
          { text: "Food and refreshments" }
        ]
      },
      {
        title: "Seamless Experience",
        description: "We handle everything so families can focus on having fun together.",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920",
        points: [
          { text: "Full event setup and breakdown" },
          { text: "Professional facilitators" },
          { text: "Safety-first approach" },
          { text: "Weather contingency plans" }
        ]
      },
      {
        title: "Perfect For",
        description: "Companies that value work-life balance and family engagement.",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920",
        points: [
          { text: "Annual family appreciation events" },
          { text: "Company milestone celebrations" },
          { text: "Year-end gatherings" },
          { text: "Community building initiatives" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"
    ],
    testimonials: [
      { quote: "Our employees and their families had the best time. Thank you!", author: "HR Director", company: "Technology Company" },
      { quote: "The kids couldn't stop talking about the fun day for weeks!", author: "Admin Manager", company: "Financial Services" },
      { quote: "A truly inclusive event that brought everyone together.", author: "People Lead", company: "Healthcare Organization" },
      { quote: "Professional execution with a fun, family-friendly atmosphere.", author: "Culture Manager", company: "Retail Company" },
      { quote: "Best family day we've ever organized. Will definitely repeat!", author: "Events Coordinator", company: "Manufacturing Company" },
      { quote: "Every family member, regardless of age, had activities to enjoy.", author: "HR Manager", company: "Logistics Company" }
    ],
    faqs: [
      { question: "How many families can you accommodate?", answer: "We regularly manage events for 500 to 5000+ participants." },
      { question: "What if it rains?", answer: "We always have weather contingency plans and can arrange covered venues." },
      { question: "Are activities safe for young children?", answer: "Safety is paramount. All activities are age-appropriate with trained supervisors." },
      { question: "Can we customize the activities?", answer: "Absolutely. We tailor activities to your company culture and preferences." },
      { question: "What food options are available?", answer: "We can arrange diverse food options including vegetarian, halal, and kid-friendly menus." }
    ],
    cta: {
      headline: "Ready to Plan Your Family Fun Day?",
      subtext: "Let's create a day that brings families together and creates lasting memories."
    }
  },
  "corporate-carnivals": {
    accentColor: "#EAB308",
    dividerVariant: "confetti",
    hero: {
      title: "Corporate Carnivals",
      subtitle: "Carnival",
      tagline: "Transform your corporate event into a spectacular carnival celebration.",
      backgroundImage: corporateCarnivalHero
    },
    overview: {
      description: "Step right up to the greatest corporate show on earth! Our Corporate Carnivals transform any venue into a bustling fairground bursting with energy, colour, and non-stop entertainment. Think classic ring-toss booths, giant Jenga towers, strength-tester hammers, spin-the-wheel stations, candy floss carts, and roaming performers weaving through the crowd. Employees collect carnival tickets at every station, then trade them for prizes at our redemption counter, turning every game into a friendly competition. We bring the full sensory package: themed bunting and balloon arches at the entrance, funfair lighting rigs, upbeat DJ sets, and even a confetti cannon finale. Whether you are celebrating year-end milestones, rewarding top performers, or simply giving your team a well-deserved break, our carnival format keeps every attendee engaged from the first whistle to the last prize draw. We have produced carnivals for groups of 100 to 5,000+ across ballrooms, outdoor fields, and office lobbies.",
      backgroundImage: corporateCarnivalHero
    },
    features: [
      { icon: PartyPopper, title: "Carnival Games", description: "Classic and modern carnival game stations with trained operators." },
      { icon: Gift, title: "Prize Redemption", description: "Ticket-based system with exciting prizes and branded merchandise." },
      { icon: Music, title: "Live Entertainment", description: "Roaming performers, stilt-walkers, magicians, and DJs." },
      { icon: Palette, title: "Themed Decor", description: "Full carnival atmosphere transformation with balloon arches and bunting." },
      { icon: Users, title: "Crowd Games", description: "Interactive mass participation activities and stage contests." },
      { icon: Camera, title: "Photo Experiences", description: "Instagram-worthy photo booths and instant print stations." }
    ],
    benefits: [
      { icon: PartyPopper, title: "Fun Atmosphere", description: "A vibrant break from the everyday routine that lifts spirits." },
      { icon: Users, title: "Team Engagement", description: "Friendly competition and collaboration at every booth." },
      { icon: Heart, title: "Employee Appreciation", description: "Show your team they are valued with a celebration they deserve." },
      { icon: Star, title: "Memorable Event", description: "An experience people will talk about long after the last balloon pops." },
      { icon: Zap, title: "Energy Boost", description: "Inject excitement and positivity into your organization." }
    ],
    activities: {
      sectionTitle: "CARNIVAL ELEMENTS",
      items: ["Ring Toss", "Balloon Darts", "Basketball Shootout", "Giant Jenga", "Spin the Wheel", "Strength Tester", "Photo Booth", "Food Carts", "Prize Station", "Stage Games", "Dance Floor", "Roaming Performers"]
    },
    alternatingSections: [
      {
        title: "Carnival Magic",
        description: "We transform any venue into a vibrant carnival wonderland.",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1920",
        points: [
          { text: "Complete carnival game setup" },
          { text: "Themed decorations and lighting" },
          { text: "Professional game operators" },
          { text: "Prize management system" }
        ]
      },
      {
        title: "Entertainment Excellence",
        description: "Non-stop entertainment keeps the energy high throughout.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff32?w=1920",
        points: [
          { text: "Stage performances and shows" },
          { text: "Roaming entertainers" },
          { text: "Music and DJ services" },
          { text: "Interactive crowd games" }
        ]
      },
      {
        title: "Perfect For",
        description: "Celebrations that call for excitement and fun.",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920",
        points: [
          { text: "Company anniversaries" },
          { text: "Year-end celebrations" },
          { text: "Product launches" },
          { text: "Team appreciation events" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff32?w=800",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800"
    ],
    testimonials: [
      { quote: "The carnival was the highlight of our year! Every department came together for a night of pure fun.", author: "Jasmine Koh", company: "Capitaland" },
      { quote: "From ring toss to the confetti finale, every moment was electric.", author: "Adrian Lim", company: "Mapletree Investments" },
      { quote: "Our 3,000-person carnival went off without a hitch. Incredible logistics.", author: "Nicole Tan", company: "Keppel Corporation" },
      { quote: "The prize redemption system was genius. Staff were competing all night!", author: "Raymond Chia", company: "Olam International" },
      { quote: "Best company celebration we have ever had. Roaming performers were a huge hit.", author: "Cheryl Wong", company: "Far East Organization" },
      { quote: "Professional setup, amazing atmosphere, and zero stress for our HR team.", author: "Bernard Teo", company: "Suntec REIT" }
    ],
    faqs: [
      { question: "What is included in a carnival package?", answer: "Packages typically include 8-12 game stations, prize redemption counter, decorations, entertainment, food carts, and full event coordination." },
      { question: "How much space do you need?", answer: "We can design carnivals for spaces from 200 sqm to large outdoor areas. Ballrooms, fields, and multi-level atriums all work." },
      { question: "Can this be done indoors?", answer: "Yes, we have indoor-suitable games and decorations perfect for ballrooms, function rooms, and office lobbies." },
      { question: "What about food and beverages?", answer: "We offer carnival food carts (popcorn, candy floss, nachos) plus traditional F&B catering options for sit-down meals." },
      { question: "How many games are included?", answer: "Standard packages include 8-12 game stations, customizable based on your headcount and venue size." }
    ],
    cta: {
      headline: "Ready for Carnival Fun?",
      subtext: "Let's bring the carnival excitement to your next corporate celebration."
    },
    recentEvents: [
      { client: "Capitaland", event: "Year-End Carnival", pax: 2500 },
      { client: "Mapletree Investments", event: "Staff Appreciation Carnival", pax: 800 },
      { client: "Keppel Corporation", event: "Family Day Carnival", pax: 3000 },
      { client: "Olam International", event: "Team Carnival Night", pax: 600 },
      { client: "Far East Organization", event: "Company Carnival", pax: 1200 },
      { client: "Suntec REIT", event: "D&D Carnival Theme", pax: 500 },
      { client: "Frasers Property", event: "Festive Carnival", pax: 900 },
      { client: "CDL", event: "Annual Carnival Bash", pax: 1500 },
      { client: "Ascendas-Singbridge", event: "Team Carnival", pax: 700 },
      { client: "CapitaSpring", event: "Office Carnival Day", pax: 400 },
      { client: "GuocoLand", event: "CNY Carnival", pax: 350 },
      { client: "Wing Tai Holdings", event: "Mid-Year Carnival", pax: 450 }
    ],
    recentEventsHeadline: "Companies who've experienced our Carnival Magic"
  },
  "vip-gala": {
    accentColor: "#A855F7",
    dividerVariant: "ribbon",
    hero: {
      title: "VIP Gala Experiences",
      subtitle: "VIP Gala",
      tagline: "Exclusive, luxurious gatherings for your most distinguished guests.",
      backgroundImage: vipGalaHero
    },
    overview: {
      description: "Host spectacular VIP galas that leave lasting impressions on your most important guests. From champagne reception arrivals to the final standing ovation, our luxury event expertise ensures every detail reflects sophistication, exclusivity, and world-class hospitality. We curate premium venues across Singapore, coordinate celebrity and keynote talent, design bespoke table settings and floral installations, and manage red-carpet arrivals with media-wall photo ops. Our production team delivers concert-grade sound, intelligent lighting, and cinematic LED visuals that set the mood for an unforgettable evening. Whether it is a charity gala, investor dinner, or executive recognition ceremony, we orchestrate white-glove service that makes every guest feel like royalty. With over 60 luxury galas produced for C-suite audiences, boards of directors, and high-net-worth clients, we know how to balance gravitas with grace.",
      backgroundImage: vipGalaHero
    },
    features: [
      { icon: Crown, title: "Premium Venues", description: "Access to Singapore's most exclusive hotels, private clubs, and rooftop spaces." },
      { icon: Wine, title: "Fine Dining", description: "Michelin-star catering, premium wines, and craft cocktail bars." },
      { icon: Sparkles, title: "Luxury Decor", description: "Opulent floral installations, crystal centrepieces, and bespoke design." },
      { icon: Music, title: "Elite Entertainment", description: "String quartets, celebrity performers, and curated DJ sets." },
      { icon: Camera, title: "Red Carpet Experience", description: "VIP arrivals, media wall, and professional event photography." },
      { icon: Gem, title: "Bespoke Details", description: "Personalized place cards, gift boxes, and custom touches for each guest." }
    ],
    benefits: [
      { icon: Crown, title: "Prestige", description: "Events that reflect your organization's excellence and status." },
      { icon: Users, title: "Relationship Building", description: "Strengthen bonds with key stakeholders in an intimate setting." },
      { icon: Star, title: "Brand Elevation", description: "Position your brand firmly in the luxury and premium space." },
      { icon: Heart, title: "Memorable Impact", description: "Create experiences your guests will remember for years." },
      { icon: Award, title: "Recognition", description: "Celebrate top performers and milestones with elegance." }
    ],
    activities: {
      sectionTitle: "GALA ELEMENTS",
      items: ["Red Carpet Arrivals", "Champagne Reception", "Gourmet Dinner", "Awards Ceremony", "Live Orchestra", "Celebrity Performances", "After-Party", "VIP Gifting", "Photo Gallery", "Auction Events", "Keynote Speeches", "Entertainment Shows"]
    },
    alternatingSections: [
      {
        title: "Luxury Defined",
        description: "Every aspect of our VIP galas exudes sophistication and elegance.",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920",
        points: [
          { text: "Exclusive venue curation" },
          { text: "Premium catering and beverages" },
          { text: "Luxurious decor and styling" },
          { text: "White-glove service" }
        ]
      },
      {
        title: "Guest Experience",
        description: "Your guests receive unparalleled attention and hospitality.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920",
        points: [
          { text: "Personalized invitations" },
          { text: "VIP arrivals and hosting" },
          { text: "Curated entertainment" },
          { text: "Premium takeaway gifts" }
        ]
      },
      {
        title: "Perfect For",
        description: "Occasions that demand the highest levels of sophistication.",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920",
        points: [
          { text: "Corporate anniversaries" },
          { text: "Executive appreciation events" },
          { text: "Client galas" },
          { text: "Charity fundraisers" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800"
    ],
    testimonials: [
      { quote: "An evening of pure luxury. Our 200 guests were thoroughly impressed from arrival to after-party.", author: "Catherine Tay", company: "Temasek Holdings" },
      { quote: "The floral installations alone were worth the investment. Stunning from every angle.", author: "Vivian Leong", company: "GIC Private Limited" },
      { quote: "World-class execution that rivalled any international gala we have attended.", author: "Jonathan Kwek", company: "Pontiac Land Group" },
      { quote: "Our clients felt truly valued. The personalized gift boxes were an incredible touch.", author: "Sharon Loh", company: "Allen & Gledhill" },
      { quote: "The most elegant corporate event I have ever attended in Singapore.", author: "Patrick Ng", company: "Julius Baer" },
      { quote: "Sophisticated, seamless, spectacular. Three words that perfectly describe the evening.", author: "Grace Lim", company: "Singapore Exchange" }
    ],
    faqs: [
      { question: "What venues do you recommend for VIP galas?", answer: "We work with The Fullerton, Capella Sentosa, Marina Bay Sands, Raffles Hotel, private clubs, and unique heritage venues." },
      { question: "What is included in VIP gala packages?", answer: "Full-service including venue, gourmet catering, premium bar, decor and florals, entertainment, photography, VIP gifting, and guest management." },
      { question: "Can you accommodate dietary requirements?", answer: "Absolutely. We work with top caterers to accommodate all dietary needs at the highest level, including halal, kosher, and allergen-free menus." },
      { question: "How do you ensure exclusivity?", answer: "We curate every detail from invitations to departure gifts, creating a one-of-a-kind experience your guests will not find elsewhere." },
      { question: "What is the typical budget range?", answer: "VIP gala investments vary widely based on guest count and scope. We will work within your budget to maximize impact and perceived value." }
    ],
    cta: {
      headline: "Ready for VIP Excellence?",
      subtext: "Let's create an exclusive gala experience that leaves lasting impressions."
    },
    recentEvents: [
      { client: "Temasek Holdings", event: "Annual Gala Dinner", pax: 200 },
      { client: "GIC Private Limited", event: "Investor Appreciation Gala", pax: 150 },
      { client: "Pontiac Land Group", event: "VIP Recognition Evening", pax: 120 },
      { client: "Allen & Gledhill", event: "Client Gala Night", pax: 180 },
      { client: "Julius Baer", event: "Private Banking Gala", pax: 100 },
      { client: "Singapore Exchange", event: "Annual Awards Gala", pax: 250 },
      { client: "Fullerton Fund Management", event: "Charity Gala", pax: 300 },
      { client: "OCBC Private Bank", event: "VIP Client Evening", pax: 80 },
      { client: "Keppel Capital", event: "Executive Appreciation", pax: 160 },
      { client: "Mapletree Investments", event: "Board Gala Dinner", pax: 90 },
      { client: "Frasers Hospitality", event: "Partner Gala Night", pax: 140 },
      { client: "CapitaLand Investment", event: "Year-End VIP Gala", pax: 220 }
    ],
    recentEventsHeadline: "Companies who've trusted us with VIP Gala Events"
  },
  "grand-opening": {
    accentColor: "#EF4444",
    dividerVariant: "confetti",
    hero: {
      title: "Grand Openings",
      subtitle: "Grand Opening",
      tagline: "Make your debut unforgettable with a spectacular grand opening celebration.",
      backgroundImage: grandOpeningHero
    },
    overview: {
      description: "Launch your new venture with maximum impact and lasting impressions. Our grand opening events combine solemn ceremony with joyful celebration and strategic media management to create debuts that generate buzz, attract press coverage, and firmly establish your brand presence from day one. We handle every element: ribbon-cutting choreography with VIP dignitaries, guided venue tours for media and investors, branded photo walls, live entertainment, and post-ceremony networking receptions. Our production team sets up stage, sound, and lighting to ensure your launch looks and sounds world-class, whether you are opening a flagship retail store, a new corporate headquarters, or a community facility. We coordinate media invitations, press kits, social media coverage, and professional videography so your opening reaches far beyond the guests in the room. From intimate boutique unveilings for 50 guests to large-scale public launches for 2,000+, we have produced grand openings across every industry in Singapore.",
      backgroundImage: grandOpeningHero
    },
    features: [
      { icon: Rocket, title: "Launch Ceremonies", description: "Ribbon-cutting choreography with VIP and dignitary coordination." },
      { icon: Megaphone, title: "Media Coverage", description: "Press kit preparation, media wall setup, and journalist coordination." },
      { icon: Users, title: "VIP Management", description: "Guest of honor logistics, arrivals protocol, and guided tours." },
      { icon: Sparkles, title: "Brand Experience", description: "Immersive brand showcases, product demos, and interactive displays." },
      { icon: PartyPopper, title: "Celebration", description: "Post-ceremony entertainment, networking reception, and festivities." },
      { icon: Camera, title: "Content Creation", description: "Professional photo and video documentation for marketing use." }
    ],
    benefits: [
      { icon: Rocket, title: "Strong Launch", description: "Start with maximum impact, visibility, and media coverage." },
      { icon: Star, title: "Media Coverage", description: "Generate press articles, social media buzz, and online traction." },
      { icon: Users, title: "Stakeholder Engagement", description: "Impress investors, partners, VIPs, and government officials." },
      { icon: Heart, title: "Community Connection", description: "Build neighbourhood and customer relationships from day one." },
      { icon: Target, title: "Brand Establishment", description: "Set the tone and standard for your brand presence in Singapore." }
    ],
    activities: {
      sectionTitle: "OPENING ELEMENTS",
      items: ["Ribbon Cutting", "VIP Tours", "Press Conference", "Product Showcase", "Ceremonial Launch", "Entertainment", "Networking Reception", "Media Wall", "Gift Distribution", "Live Streaming", "Cultural Performances", "Fireworks Display"]
    },
    alternatingSections: [
      {
        title: "Launch with Impact",
        description: "We create grand openings that generate buzz and establish your presence.",
        image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1920",
        points: [
          { text: "Strategic event planning" },
          { text: "VIP and media coordination" },
          { text: "Brand-aligned experiences" },
          { text: "Comprehensive coverage" }
        ]
      },
      {
        title: "Beyond the Ribbon",
        description: "Our grand openings combine ceremony with celebration and engagement.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920",
        points: [
          { text: "Ceremonial moments" },
          { text: "Guest entertainment" },
          { text: "Product/space showcases" },
          { text: "Networking opportunities" }
        ]
      },
      {
        title: "Perfect For",
        description: "Any new venture deserving a memorable launch.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920",
        points: [
          { text: "New office or HQ openings" },
          { text: "Retail store launches" },
          { text: "Facility inaugurations" },
          { text: "Branch expansions" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
    ],
    testimonials: [
      { quote: "Our new regional headquarters opening made a powerful statement to the entire industry.", author: "Tan Wei Ming", company: "Dyson Singapore" },
      { quote: "The media coverage exceeded all expectations. We were featured in five publications.", author: "Serene Goh", company: "Lululemon Singapore" },
      { quote: "A perfect blend of ceremony and celebration that our investors loved.", author: "Adrian Chew", company: "Sea Group" },
      { quote: "Our VIP guests, including two ministers, were thoroughly impressed.", author: "Rachel Ng", company: "CapitaLand" },
      { quote: "The launch set the perfect tone for our flagship store brand experience.", author: "Marcus Loh", company: "Decathlon Singapore" },
      { quote: "Professional execution from ribbon-cutting to after-party networking.", author: "Felicia Tan", company: "WeWork Singapore" }
    ],
    faqs: [
      { question: "How far in advance should we plan a grand opening?", answer: "We recommend 2-3 months for comprehensive planning, though we can accommodate shorter timelines for simpler formats." },
      { question: "Do you handle media and PR coordination?", answer: "Yes, we coordinate media invitations, press kits, on-site media management, and post-event press release distribution." },
      { question: "Can you arrange VIP and government attendance?", answer: "We can help coordinate invitations, logistics, and protocol for VIPs, ministers, and foreign dignitaries." },
      { question: "What about permits and approvals?", answer: "We assist with venue permits, road closures, safety requirements, NEA approvals, and all necessary regulatory paperwork." },
      { question: "Do you provide post-event content?", answer: "Yes, we deliver edited photos, highlight videos, and social media content within 3-5 business days for your marketing use." }
    ],
    cta: {
      headline: "Ready for Your Grand Opening?",
      subtext: "Let's create a launch that establishes your presence with impact."
    },
    recentEvents: [
      { client: "Dyson Singapore", event: "Regional HQ Grand Opening", pax: 500 },
      { client: "Lululemon", event: "Flagship Store Launch", pax: 300 },
      { client: "Sea Group", event: "New Office Opening", pax: 800 },
      { client: "CapitaLand", event: "Mixed-Use Development Launch", pax: 1200 },
      { client: "Decathlon Singapore", event: "Megastore Grand Opening", pax: 600 },
      { client: "WeWork Singapore", event: "Co-Working Space Launch", pax: 250 },
      { client: "Grab", event: "Tech Centre Opening", pax: 400 },
      { client: "Samsung", event: "Experience Store Launch", pax: 350 },
      { client: "Nike Singapore", event: "Concept Store Opening", pax: 450 },
      { client: "Apple Orchard Road", event: "Flagship Opening Support", pax: 200 },
      { client: "Foodpanda", event: "Cloud Kitchen Launch", pax: 150 },
      { client: "Tesla Singapore", event: "Showroom Grand Opening", pax: 280 }
    ],
    recentEventsHeadline: "Companies who've launched with Elluminate"
  },
  "amazing-race": {
    accentColor: "#FFC400",
    dividerVariant: "raceTrack",
    hero: {
      title: "THE AMAZING RACE",
      subtitle: "Team Building Adventure",
      tagline: "A fast-moving race across Singapore built for teams, schools, and student groups who want to move, solve, and win together.",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774360229/AmazingRace_2_hi89qz.jpg"
    },
    howItWorksImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361380/AmazingRace_20_pvj3jq.heic",
    addOnsImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361386/AmazingRace_24_r4bomr.heic",
    overview: {
      description: "The Amazing Race is our signature outdoor experience where teams race across Singapore completing missions, solving puzzles, and working together under real time pressure. Groups navigate between 8 and 14 checkpoints over 2 to 3 hours, tackling a carefully balanced mix of physical challenges, mental puzzles, and creative tasks — designed so that every team member, regardless of fitness level, has a way to contribute and a moment to shine. The format works brilliantly for corporate teams of 20 to 500+, school cohorts, orientation programmes, and student leadership groups who want something that feels genuinely active and memorable rather than corporate-by-numbers. Our facilitators design each race route around your venue and goals: a city-wide adventure through iconic Singapore landmarks, a heritage trail through Kampong Glam or Chinatown, a contained campus race, or a resort experience that doubles as a team retreat. Every checkpoint is facilitated, every team is supported, and the debrief we run at the end consistently surfaces conversations teams carry back into the workplace. Since 2017 we have delivered this experience for more than 100 organisations across Singapore — the format is proven, the facilitation quality is consistent, and the energy it creates outlasts race day by weeks.",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774360229/AmazingRace_2_hi89qz.jpg"
    },
    features: [
      { icon: Navigation, title: "Multi-Checkpoint Adventure", description: "Navigate through strategically placed stations across your chosen venue." },
      { icon: Brain, title: "Problem-Solving Challenges", description: "Puzzles and riddles that require teamwork and creative thinking." },
      { icon: Timer, title: "Time-Based Competition", description: "Race against the clock and other teams for ultimate bragging rights." },
      { icon: Users, title: "Team Collaboration", description: "Challenges designed to require all team members to contribute." },
      { icon: Compass, title: "Customizable Routes", description: "Tailored race routes based on your venue and objectives." },
      { icon: Trophy, title: "Prizes & Recognition", description: "Exciting prizes for winning teams and special category awards." }
    ],
    benefits: [
      { icon: Zap, title: "High Energy Fun", description: "An exciting, adrenaline-pumping experience for all fitness levels." },
      { icon: Target, title: "Strategic Thinking", description: "Develops planning and decision-making skills under pressure." },
      { icon: Heart, title: "Team Bonding", description: "Shared challenges create lasting connections between colleagues." },
      { icon: Lightbulb, title: "Problem Solving", description: "Real-world puzzles that spark creative thinking." },
      { icon: Star, title: "Memorable Experience", description: "Stories your team will talk about for years." }
    ],
    // New Flow Sections
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Race Day Journey",
      showNumbers: true,
      itemsPerRow: 3,
      items: [
        { icon: Users, title: "Split Into Teams", description: "Form teams of 5–10 with a mix of skills and strengths." },
        { icon: ClipboardList, title: "Receive Race Kit", description: "Get your race clue sheet, map, and starting instructions." },
        { icon: Map, title: "Navigate & Solve", description: "Decode clues to find checkpoints across Singapore." },
        { icon: Puzzle, title: "Complete Challenges", description: "Each checkpoint has a mission your team must finish before moving on." },
        { icon: Target, title: "Scorecard Check", description: "Return to base with completed clues, tallied missions, and verified checkpoint stamps." },
        { icon: Trophy, title: "Awards & Celebration", description: "Final standings revealed, the winning team crowned, and the whole group celebrates together." }
      ]
    },
    whatToExpectFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "An Unforgettable Adventure",
      itemsPerRow: 3,
      items: [
        { icon: Navigation, title: "Multi-Checkpoint Adventure", description: "Navigate through 6-10 strategically placed stations across exciting venues." },
        { icon: Brain, title: "Mind-Bending Puzzles", description: "Riddles, codes, and brain teasers that challenge your team's wit." },
        { icon: Timer, title: "Adrenaline-Pumping Races", description: "Time pressure adds excitement to every challenge you face." },
        { icon: Users, title: "True Team Collaboration", description: "Every member's skills are essential to winning the race." },
        { icon: Compass, title: "Customized to Your Goals", description: "Routes and challenges tailored to your company objectives." },
        { icon: Trophy, title: "Prizes & Recognition", description: "Exciting rewards for top teams and special category winners." }
      ]
    },
    raceFormatsFlow: {
      sectionTitle: "RACE FORMATS",
      sectionSubtitle: "Choose Your Adventure",
      itemsPerRow: 4,
      items: [
        { icon: Building, title: "City Amazing Race", description: "Explore urban landmarks and hidden gems across the city." },
        { icon: Home, title: "Indoor Amazing Race", description: "Perfect for hotels, conference centers, or office buildings." },
        { icon: Globe, title: "Virtual Amazing Race", description: "Remote teams compete online with digital challenges." },
        { icon: MapPin, title: "Heritage Trail Race", description: "Discover cultural landmarks and historical sites." },
        { icon: Flag, title: "Cultural Amazing Race", description: "Immerse in local traditions and cultural experiences." },
        { icon: Building2, title: "Campus Race", description: "Ideal for universities, schools, or large campuses." },
        { icon: Palmtree, title: "Beach Amazing Race", description: "Sun, sand, and exciting seaside challenges." },
        { icon: Moon, title: "Night Race Challenge", description: "After-dark adventure with unique nocturnal tasks." },
        { icon: Trees, title: "Nature Trail Race", description: "Parks, gardens, and outdoor natural settings." },
        { icon: ShoppingBag, title: "Mall Adventure Race", description: "Indoor shopping mall exploration and challenges." },
        { icon: Mountain, title: "Resort Race", description: "Perfect for team retreats at resort destinations." },
        { icon: Plane, title: "Hybrid Experience", description: "Combine physical and virtual elements for distributed teams." }
      ]
    },
    challengeTypesFlow: {
      sectionTitle: "CHALLENGE TYPES",
      sectionSubtitle: "Something for Everyone",
      itemsPerRow: 4,
      items: [
        { icon: Activity, title: "Physical Challenges", description: "Relay races, obstacle courses, and active team tasks." },
        { icon: Brain, title: "Mental Challenges", description: "Puzzles, riddles, trivia, and logic problems." },
        { icon: Camera, title: "Creative Challenges", description: "Photo missions, performances, and artistic tasks." },
        { icon: Users, title: "Team Coordination", description: "Tasks requiring full team synchronization and communication." }
      ]
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Every Occasion",
      itemsPerRow: 4,
      items: [
        { icon: UserPlus, title: "New Team Integration", description: "Break the ice and build bonds with new hires and team members." },
        { icon: Building, title: "Department Off-sites", description: "Strengthen collaboration within departments and divisions." },
        { icon: PartyPopper, title: "Celebration Days", description: "Milestones, cohort celebrations, and annual appreciation events." },
        { icon: GraduationCap, title: "School Cohorts", description: "Ideal for classes, CCA groups, and student leaders who learn best by doing." },
        { icon: Handshake, title: "Orientation Programmes", description: "Turn a fresh group into a connected team quickly." },
        { icon: Rocket, title: "Kickoff Events", description: "Start the term, project, or programme with momentum and excitement." },
        { icon: Briefcase, title: "Cross-Team Alignment", description: "Connect functions, houses, or committees through shared challenge." },
        { icon: Target, title: "Leadership Retreats", description: "Sharpen communication and decision-making through active missions." }
      ]
    },
    activities: {
      sectionTitle: "RACE FORMATS",
      items: ["City Amazing Race", "Indoor Amazing Race", "Virtual Amazing Race", "Heritage Trail Race", "Cultural Amazing Race", "Campus Race", "Beach Amazing Race", "Night Race Challenge", "Hybrid Race Experience", "Corporate Park Race", "Mall Adventure Race", "Nature Trail Race"]
    },
    alternatingSections: [
      {
        title: "How It Works",
        description: "Teams are given clues that lead them to various checkpoints where they must complete challenges before moving on.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920",
        points: [
          { text: "Teams of 4-8 members work together" },
          { text: "Solve clues to find checkpoint locations" },
          { text: "Complete physical and mental challenges" },
          { text: "Race against time and other teams" }
        ]
      },
      {
        title: "Challenge Types",
        description: "Our Amazing Race features a diverse mix of challenges that cater to different strengths and abilities.",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920",
        points: [
          { text: "Physical challenges - Relay races, obstacle courses" },
          { text: "Mental challenges - Puzzles, riddles, trivia" },
          { text: "Creative challenges - Photo missions, performances" },
          { text: "Team challenges - Tasks requiring full team coordination" }
        ]
      },
      {
        title: "Perfect For",
        description: "The Amazing Race format is versatile and can be adapted for various corporate needs and group sizes.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920",
        points: [
          { text: "New team integration and onboarding" },
          { text: "Department off-sites and team days" },
          { text: "Company-wide events and celebrations" },
          { text: "Leadership development programs" }
        ]
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800"
    ],
    testimonials: [
      {
        quote: "We ran the Amazing Race across the CBD with 120 staff from three departments that rarely interact. What stuck with me was watching the quieter team members step up and take charge when the pressure was on. Our managers still reference specific checkpoint moments in team meetings three months on.",
        author: "Wei Ling T.",
        company: "Senior HR Manager, CapitaLand"
      },
      {
        quote: "Booking the Amazing Race for our cohort of 80 new graduates was one of the better decisions I made all year. The facilitators read the room quickly and kept the energy up without it ever feeling like a corporate exercise. By the final checkpoint the teams were genuinely competitive and the post-race debrief surfaced honest conversations about communication styles that we carried directly into the onboarding programme.",
        author: "Darren K.",
        company: "Graduate Talent Lead, DBS Bank"
      },
      {
        quote: "We had 200 people across four departments with very different fitness levels and I was nervous about keeping everyone engaged. The race format handled it really well — the puzzle stations gave the less active participants a way to anchor the team while others covered ground. Every group felt like they had a chance until the very end, which made the awards moment genuinely exciting.",
        author: "Priya S.",
        company: "Head of People Experience, NTUC"
      },
      {
        quote: "Running the Heritage Trail race through Kampong Glam with 65 of us was a completely different experience from the usual bowling night. Clues were tied to real local history which sparked conversations even between colleagues who have lived in Singapore their whole lives. We have a strong international contingent and this format helped bridge that cultural gap faster than anything we had tried before.",
        author: "Marcus L.",
        company: "Culture & Engagement Manager, Changi Airport Group"
      },
      {
        quote: "We have used other team building providers before and the facilitation quality gap is very noticeable with Elluminate. Their facilitators pre-empt problems — they noticed one team was struggling at a checkpoint and adjusted subtly without breaking the competitive integrity of the race. 90 people from Finance and Tech left in significantly better spirits than they arrived, which is not easy to pull off.",
        author: "Aishah R.",
        company: "People Operations Lead, GovTech"
      },
      {
        quote: "Ran this for 150 participants as part of our annual strategy kick-off and it was the perfect call for getting people energised before the afternoon sessions. The debrief format Elluminate used — where each team shared one thing they discovered about a colleague — was a small touch that landed really well with our senior leaders. We are already in conversations to book the Cultural Race for our next cohort.",
        author: "Jonathan C.",
        company: "VP Culture & Leadership, Singtel"
      }
    ],
    faqs: [
      { question: "How many participants can join the Amazing Race?", answer: "We can accommodate groups from 20 to 500+ participants. We'll structure teams and challenges based on your group size." },
      { question: "Where can the Amazing Race be held?", answer: "We offer city-wide races, indoor venue races, resort races, and virtual options. Popular locations include Marina Bay, Sentosa, and various CBD areas." },
      { question: "How long does an Amazing Race typically last?", answer: "A standard race runs 2-3 hours, but we can customize the duration from 1.5 to 4 hours based on your schedule." },
      { question: "Is it suitable for all fitness levels?", answer: "Yes! We design challenges to be inclusive with a mix of physical and mental tasks. Teams can strategize based on individual strengths." },
      { question: "Can challenges be customized to our company?", answer: "Absolutely! We can incorporate company trivia, branded materials, and challenges aligned with your values and objectives." }
    ],
    processFlow: [
      { icon: Phone, title: "Inquire", description: "Share your event details and team size with us." },
      { icon: ClipboardList, title: "Customize", description: "We design the perfect race route and challenges." },
      { icon: CheckCircle, title: "Confirm", description: "Review the proposal and finalize your booking." },
      { icon: Flag, title: "Race Day", description: "Your team embarks on the exciting adventure!" },
      { icon: Trophy, title: "Celebrate", description: "Awards, photos, and memories to treasure." }
    ],
    videoSection: {
      title: "See the Race in Action",
      subtitle: "Watch teams compete through exciting challenges across Singapore's iconic landmarks",
      videoUrl: "https://www.youtube.com/embed/m-YiH2zCxmE"
    },
    cta: {
      headline: "Ready for Your Amazing Race?",
      subtext: "Let's design an exhilarating race experience for your team, class, or student cohort."
    },
    // New enhanced sections
    clientLogos: ["DBS", "OCBC", "Singtel", "Grab", "NTUC", "GovTech", "CapitaLand", "Changi Airport Group"],
    recentEvents: [
      { client: "DBS Bank", event: "City Race at Marina Bay", pax: 200 },
      { client: "OCBC", event: "City Race at Gardens by the Bay", pax: 280 },
      { client: "Singtel", event: "Heritage Trail at Kampong Glam", pax: 160 },
      { client: "Grab", event: "MRT Station Challenge", pax: 250 },
      { client: "NTUC", event: "Community Race at East Coast Park", pax: 400 },
      { client: "GovTech", event: "Indoor Race Challenge", pax: 120 },
      { client: "CapitaLand", event: "Team Race at Marina Bay", pax: 350 },
      { client: "Changi Airport Group", event: "Terminal Race Challenge", pax: 180 },
      { client: "SP Group", event: "Heritage Trail Race", pax: 55 },
      { client: "SMRT", event: "Campus Race at Jurong East", pax: 90 },
      { client: "Prudential", event: "City Amazing Race", pax: 75 },
      { client: "Marina Bay Sands", event: "Indoor Station Race", pax: 140 },
      { client: "Great Eastern", event: "Financial District Race", pax: 85 },
      { client: "Standard Chartered", event: "City Amazing Race", pax: 110 },
      { client: "Shopee", event: "Campus Race at Pasir Ris", pax: 300 },
      { client: "StarHub", event: "Amazing Race at Sentosa", pax: 65 },
      { client: "Singapore Airlines", event: "City Race Challenge", pax: 170 },
      { client: "POSB", event: "Neighbourhood Race", pax: 45 },
      { client: "AIA Singapore", event: "Wellness Race Challenge", pax: 130 },
      { client: "Maybank", event: "Heritage Trail at Chinatown", pax: 95 }
    ],
    pricing: {
      startingPrice: "From $45",
      unit: "per pax",
      minimumPax: 10,
      duration: "3 hours",
      activityType: "outdoor"
    },
    packages: [
      {
        color: "#26D07C",
        title: "Minimum Package",
        description: "Simply play Amazing Race at one of our set locations. We handle everything — you just show up and have fun.",
        price: "From $60/pax",
        features: ["Pre-set location", "Standard race format", "Basic facilitation"]
      },
      {
        color: "#FFC400",
        title: "Enhanced Package",
        description: "Add venue selection, catering, prizes, and logistics. Your event, your preferences.",
        features: ["Custom venue", "Add-ons available", "Flexible timing"]
      },
      {
        color: "#FF4F4F",
        title: "Premium Package",
        description: "A fully bespoke experience designed around your goals, brand, and vision.",
        features: ["Custom route design", "Branded challenges", "Full event management"]
      }
    ],
    addOns: [
      { icon: "Route", title: "Custom Route Design", description: "We map out a bespoke race route through iconic Singapore landmarks tailored to your team size and theme." },
      { icon: "ClipboardList", title: "Branded Challenge Cards", description: "Custom-printed mission cards featuring your company branding and inside team references." },
      { icon: "Mic", title: "Emcee Upgrade", description: "Add a professional emcee to supercharge the energy at the starting line, checkpoints, and finale." },
      { icon: "Camera", title: "Race Photography", description: "Dedicated photographer capturing every spectacular chase, challenge, and finish line moment." },
      { icon: "Trophy", title: "Champion Trophies", description: "Engrave custom victory trophies and medals for the winning team to take back to the office." },
      { icon: "UtensilsCrossed", title: "Refreshment Pit Stop", description: "Catered mid-race pit stop with drinks and snacks to keep racers fuelled through the course." },
      { icon: "Bus", title: "Transport", description: "Chartered bus transfers from your office or hotel to the race starting point and back." },
      { icon: "MapPin", title: "Venue Sourcing", description: "We identify and book outdoor or indoor venues that best fit your team size and experience goals." },
    ],
    miniGallery: {
      title: "Amazing Race in Action",
      images: [
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361379/AmazingRace_22_qnkeat.heic", alt: "Amazing Race team building checkpoint challenge" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774360193/AmazingRace_16_mdu3de.jpg", alt: "Teams racing during an Amazing Race activity" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774360193/AmazingRace_14_e5yt0c.heic", alt: "Amazing Race outdoor team challenge" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774360192/AmazingRace_15_hspv90.heic", alt: "Teams solving puzzles during Amazing Race" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774360190/AmazingRace_1_ig4gbv.heic", alt: "Amazing Race starting line team moment" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361385/AmazingRace_33_scwscr.jpg", alt: "Amazing Race celebration and finish line" },
      ],
    },
    outcomes: [
      { icon: "TrendingUp", title: "Improved Communication", description: "Teams report 40% better collaboration after our events" },
      { icon: "Heart", title: "Stronger Team Bonds", description: "Colleagues become friends through shared adventures" },
      { icon: "Zap", title: "Re-energized Workforce", description: "Return to work motivated and connected" },
      { icon: "Target", title: "Better Problem-Solving", description: "Skills that transfer directly to workplace challenges" },
      { icon: "Star", title: "Unforgettable Memories", description: "Stories your team will share for years" },
      { icon: "Users", title: "Enhanced Leadership", description: "Natural leaders emerge through team challenges" }
    ],

    // Amazing Race page tweaks
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced our Amazing Race"
  },

  // --- Physical Team Building (replicates Amazing Race structure) ---

  "csi-bones": {
    accentColor: "#26D07C",
    dividerVariant: "policeTape",
    hero: {
      title: "CSI - BONES",
      subtitle: "Team Building Mystery",
      tagline: "A forensic mystery built for teams and school groups who love clues, deduction, and competitive problem-solving.",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361406/CSI_3_tt9yqa.jpg",
    },
    overview: {
      description: "CSI-Bones is a forensic investigation experience where teams collaborate to solve a high-stakes mystery. Your group examines evidence, connects clues, and makes fast decisions together, making it a strong fit for both workplace teams and student groups who enjoy logic, communication, and immersive storytelling. It is a safe, indoor-friendly format that keeps everyone engaged without relying on pure physical intensity.",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361406/CSI_3_tt9yqa.jpg",
    },
    howItWorksImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361402/CSI_1_myrtls.jpg",
    addOnsImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361411/CSI_6_y8pkaz.jpg",
    features: [
      { icon: Search, title: "Evidence-Based Gameplay", description: "Analyze clues, artifacts, and witness statements." },
      { icon: Brain, title: "Deduction & Logic", description: "Connect the dots and build a case as a team." },
      { icon: Users, title: "Role-Based Collaboration", description: "Each teammate contributes different strengths." },
    ],
    benefits: [
      { icon: Users, title: "Sharper Communication", description: "Teams practice clarity and alignment under time pressure." },
      { icon: Lightbulb, title: "Better Problem Solving", description: "Structured thinking that transfers back to work." },
      { icon: Heart, title: "Real Team Bonding", description: "Shared wins (and plot twists) build stronger relationships." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Our team was fully locked in from start to finish. So engaging!", author: "Team Lead", company: "Technology Company" },
      { quote: "Great balance of fun and critical thinking. Everyone contributed.", author: "HR Manager", company: "Financial Services" },
      { quote: "The storyline was fantastic — we still talk about the twist ending.", author: "Operations Lead", company: "Logistics" },
    ],
    faqs: [],
    cta: {
      headline: "Ready to Solve the Case?",
      subtext: "Tell us your pax count and venue and we’ll tailor the CSI-Bones experience for your team or student group.",
    },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Investigation Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Case Briefing", description: "Meet your facilitator, receive the case file, and understand the roles your team will play." },
        { icon: Search, title: "Crime Scene Sweep", description: "Inspect the scene, photograph clues, and collect evidence before anything is missed." },
        { icon: Puzzle, title: "Evidence Analysis", description: "Compare witness notes, physical objects, and coded material to narrow your suspect list." },
        { icon: Users, title: "Team Theory Building", description: "Split responsibilities, test assumptions, and decide which clues your team trusts most." },
        { icon: Brain, title: "Final Deduction", description: "Piece together motive, timeline, and method before time runs out." },
        { icon: Trophy, title: "Case Presentation", description: "Present your verdict, defend your reasoning, and find out who solved the mystery best." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Every Occasion",
      itemsPerRow: 4,
      items: [
        { icon: UserPlus, title: "New Team Integration", description: "Break the ice through shared detective work." },
        { icon: Building, title: "Department Off-sites", description: "Strengthen collaboration within a team." },
        { icon: PartyPopper, title: "Company Celebrations", description: "A fresh alternative to the usual games." },
        { icon: GraduationCap, title: "School Cohorts", description: "Great for classes, student leaders, and problem-solving groups." },
        { icon: Handshake, title: "Orientation Programmes", description: "Turn shared mystery-solving into faster group connection." },
        { icon: Rocket, title: "Kickoff Events", description: "Start a programme or term with curiosity and momentum." },
        { icon: Briefcase, title: "Cross-Team Alignment", description: "Improve communication across functions or committees." },
        { icon: Target, title: "Training Days", description: "A lighter, story-led format for decision-making and collaboration." },
      ],
    },
    clientLogos: ["Google", "DBS", "Shopee", "Microsoft"],
    recentEvents: [
      { client: "DBS", event: "CSI-Bones", pax: 120 },
      { client: "Google", event: "CSI-Bones", pax: 80 },
      { client: "Shopee", event: "CSI-Bones", pax: 150 },
      { client: "Microsoft", event: "CSI-Bones", pax: 90 },
    ],
    pricing: {
      startingPrice: "From $45",
      unit: "per pax",
      minimumPax: 10,
      duration: "3 hours",
      activityType: "indoor",
    },
    packages: trafficLightPackages("From $45/pax", "CSI-Bones", "#26D07C"),
    addOns: [
      { icon: "Search", title: "Enhanced Evidence Kit", description: "Upgrade the case with extra props, physical clues, and deeper puzzle layers." },
      { icon: "ClipboardList", title: "Custom Case File", description: "Tailor the mystery with company values, internal references, or school themes." },
      { icon: "Sparkles", title: "Themed Host Casting", description: "Add in-character investigators or suspects to heighten immersion." },
      { icon: "Award", title: "Detective Awards", description: "Best Investigator, Best Theory, and Champion Team prizes for your finale." },
      { icon: "Camera", title: "Photo Recap", description: "Capture team analysis, reveal moments, and celebration shots during the case." },
      { icon: "MapPin", title: "Venue Styling", description: "Dress the room like a real investigation site with caution markers and clue zones." }
    ],
    outcomes: [
      { icon: "Users", title: "Sharper Team Communication", description: "Teams practice clearer updates, faster information sharing, and stronger alignment." },
      { icon: "Lightbulb", title: "Better Critical Thinking", description: "The case structure pushes participants to compare evidence before jumping to conclusions." },
      { icon: "Target", title: "Stronger Decision Making", description: "Groups learn how to commit to a theory together when the answer is not obvious." },
      { icon: "Heart", title: "More Shared Confidence", description: "The reveal moment gives quieter contributors a visible way to help the team succeed." },
    ],
    miniGallery: {
      title: "CSI-Bones Highlights",
      images: [
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361413/CSI_4_mezxfu.jpg", alt: "CSI-Bones investigation briefing" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361409/CSI_5_t4xrjy.jpg", alt: "Teams collaborating during CSI-Bones" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361403/CSI_2_slu6jv.jpg", alt: "Team moment after completing CSI-Bones" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774592600/CSI_14_z4eswb.heic", alt: "CSI-Bones team investigation scene" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774592599/CSI_13_ferqyd.heic", alt: "CSI-Bones evidence analysis" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774592598/CSI_12_dg3lo1.heic", alt: "CSI-Bones clue discovery" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774592593/CSI_9_a26htk.heic", alt: "CSI-Bones team collaboration" },
        { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774592593/CSI_10_umoqpw.heic", alt: "CSI-Bones group solving mystery" },
      ],
    },
    hideOutcomes: false,
    ctaBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361403/CSI_2_slu6jv.jpg",
    testimonialBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774592607/CSI_15_rxnuq4.heic",
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Companies who've experienced our CSI-Bones",
  },

  "cultural-race": {
    accentColor: "#FF4F4F",
    dividerVariant: "raceTrack",
    hero: {
      title: "CULTURAL RACE",
      subtitle: "Team Building Adventure",
      tagline: "Explore, laugh, and compete through Singapore’s culture with challenges built for teamwork, curiosity, and shared discovery.",
      backgroundImage: heroCulturalRace,
    },
    overview: {
      description: "Cultural Race is a high-energy heritage adventure where teams complete interactive missions across Singapore's cultural landmarks. It works well for corporate teams, school groups, and youth cohorts who want a format that combines exploration, teamwork, and local discovery. Explore Chinatown, Little India, Kampong Glam, and more while solving puzzles, completing creative tasks, and racing against rival teams.",
      backgroundImage: heroCulturalRace,
    },
    features: [
      { icon: MapPin, title: "Landmark Checkpoints", description: "Routes tailored to your venue or district." },
      { icon: Camera, title: "Creative Missions", description: "Photo/video challenges that bring out team personality." },
      { icon: Users, title: "Inclusive Format", description: "A mix of mental, creative, and light physical tasks." },
    ],
    benefits: [
      { icon: Heart, title: "Stronger Bonds", description: "Shared exploration creates real connection." },
      { icon: Target, title: "Better Coordination", description: "Teams plan routes and divide roles effectively." },
      { icon: Star, title: "Memorable Stories", description: "A feel-good experience your team will remember." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "We learned new things about Singapore and about each other!", author: "People Ops", company: "FMCG" },
      { quote: "Perfect for a mixed team — everyone could contribute.", author: "Manager", company: "Bank" },
      { quote: "Great energy and pacing. The missions were hilarious.", author: "Director", company: "Startup" },
    ],
    faqs: [],
    cta: {
      headline: "Ready to Run Your Cultural Race?",
      subtext: "Share your date and pax and we’ll recommend the right route and format for your team or school group.",
    },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Race Day Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Team Briefing", description: "Form your squads, receive your race pack, and learn the rules and scoring system." },
        { icon: Map, title: "Explore Cultural Landmarks", description: "Navigate through iconic heritage sites and hidden gems across Singapore." },
        { icon: Puzzle, title: "Solve Checkpoint Missions", description: "Complete cultural challenges, photo tasks, and brain teasers at each stop." },
        { icon: Camera, title: "Heritage & Photo Challenges", description: "Capture moments, collect stamps, and gather cultural clues along the route." },
        { icon: Flag, title: "Finale Sprint", description: "Race against time and rival teams to reach the finish line first." },
        { icon: Trophy, title: "Awards & Cultural Reflection", description: "Winners crowned, highlights shared, and the team reflects on what they discovered together." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Every Occasion",
      itemsPerRow: 4,
      items: [
        { icon: UserPlus, title: "New Team Integration", description: "Explore and break the ice quickly." },
        { icon: Building, title: "Department Off-sites", description: "Build collaboration outside the office." },
        { icon: PartyPopper, title: "Company Celebrations", description: "A lively, photo-worthy team activity." },
        { icon: GraduationCap, title: "School Cohorts", description: "Perfect for classes and student groups exploring Singapore together." },
        { icon: Handshake, title: "Orientation Programmes", description: "Shared discovery makes new groups connect faster." },
        { icon: Rocket, title: "Kickoff Events", description: "An energetic way to launch a term, retreat, or programme." },
        { icon: Briefcase, title: "Cross-Team Alignment", description: "Bridge silos, houses, or committees with shared missions." },
        { icon: Target, title: "Learning Journeys", description: "Blend exploration with active participation and teamwork." },
      ],
    },
    clientLogos: ["DBS", "Grab", "Meta", "Deloitte"],
    recentEvents: [
      { client: "DBS", event: "Cultural Race", pax: 180 },
      { client: "Grab", event: "Heritage Missions", pax: 120 },
      { client: "Meta", event: "Chinatown Trail", pax: 90 },
      { client: "Deloitte", event: "Little India Trail", pax: 150 },
    ],
    pricing: {
      startingPrice: "From $45",
      unit: "per pax",
      minimumPax: 10,
      duration: "3 hours",
      activityType: "outdoor",
    },
    packages: trafficLightPackages("From $45/pax", "Cultural Race", "#FF4F4F"),
    addOns: [
      { icon: "Map", title: "Curated Route Design", description: "Shape the race around heritage zones, landmarks, or school-neighbourhood stories." },
      { icon: "ClipboardList", title: "Custom Question Sets", description: "Blend in company trivia, school knowledge, or event messages across checkpoints." },
      { icon: "Camera", title: "Photo Mission Pack", description: "Add more visual challenges and content-friendly tasks throughout the route." },
      { icon: "Award", title: "Cultural Champion Awards", description: "Recognise best teamwork, best spirit, and top race performance." },
      { icon: "UtensilsCrossed", title: "Food Trail Upgrade", description: "Turn selected stops into snack, tasting, or refreshment moments." },
      { icon: "MapPin", title: "Venue Start-End Support", description: "Coordinate smoother briefing and finale zones for larger groups." }
    ],
    outcomes: [
      { icon: "Users", title: "Stronger Team Connection", description: "Teams bond quickly through shared discovery and on-the-move problem solving." },
      { icon: "Lightbulb", title: "Better Curiosity", description: "Participants pay more attention to their surroundings, stories, and hidden details." },
      { icon: "Target", title: "Sharper Collaboration", description: "The race rewards teams that divide roles well and stay aligned under time pressure." },
      { icon: "Heart", title: "More Meaningful Shared Memories", description: "The mix of exploration and local culture makes the event easy to remember and talk about after." },
    ],
    miniGallery: {
      title: "Cultural Race Highlights",
      images: [
        { src: heroCulturalRace, alt: "Teams racing through cultural checkpoints" },
        { src: heroTeamCelebration, alt: "Team celebrating during Cultural Race" },
        { src: teamBuildingOutdoor1, alt: "Outdoor team moment during Cultural Race" },
      ],
    },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced our Cultural Race",
  },

  "amongst-us": {
    accentColor: "#8B5CF6",
    dividerVariant: "policeTape",
    hero: {
      title: "AMONGST US",
      subtitle: "Physical Team Building",
      tagline: "Inspired by the viral hit game Among Us — a live social-deduction showdown where your crew finds imposters, defends the mission, and outplays the opposition.",
      backgroundImage: heroTeamCelebration,
    },
    overview: {
      description: "Amongst Us is a live team-building adaptation of the viral hit game Among Us, brought off the screen and into a fully facilitated physical experience. Participants move through missions, suspicion rounds, secret roles, and timed reveals while trying to complete objectives without letting the imposters sabotage the team. It works especially well for workplaces, student leaders, camps, and mixed groups because the format rewards observation, persuasion, teamwork, and a good sense of humour rather than fitness alone.",
      backgroundImage: heroTeamCelebration,
    },
    features: [
      { icon: Ghost, title: "Hidden Role Gameplay", description: "Secret imposters, mission-based crew tasks, and live accusation rounds." },
      { icon: Users, title: "Social Strategy", description: "Teams need trust, persuasion, and observation to survive each round." },
      { icon: Timer, title: "Paced Elimination Flow", description: "Short rounds keep the tension high and the room fully engaged." },
      { icon: Theater, title: "Facilitated Drama", description: "Hosts guide reveals, twists, and voting rounds so the experience never stalls." },
    ],
    benefits: [
      { icon: Heart, title: "Fast Bonding", description: "The format breaks awkwardness quickly because everyone has something to watch, discuss, or defend." },
      { icon: Lightbulb, title: "Sharper Observation", description: "Participants pay closer attention to behaviour, detail, and shifting alliances." },
      { icon: Users, title: "Better Group Dynamics", description: "Teams learn how trust is built, tested, and repaired under pressure." },
      { icon: Zap, title: "High Engagement", description: "Short rounds, role twists, and accusation moments keep energy levels consistently high." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "The accusations and plot twists had our whole team laughing and fully invested.", author: "People Partner", company: "Canva Singapore" },
      { quote: "Perfect mix of strategy, chaos, and team bonding. Nobody checked their phone once.", author: "Programme Lead", company: "NUS Student Life" },
      { quote: "It worked brilliantly for a mixed group because you do not need to be sporty to shine.", author: "HR Manager", company: "Trip.com" },
      { quote: "Amongst Us gave our student leaders a hilarious way to practice communication and composure.", author: "Teacher", company: "Temasek Secondary" },
    ],
    faqs: [
      { question: "Is this suitable for mixed ages and abilities?", answer: "Yes. Amongst Us is built around communication, deduction, and movement-lite missions, so it works well for mixed groups without relying on fitness." },
      { question: "How many imposters are there per round?", answer: "We adjust the number of imposters based on your group size so the game stays balanced and exciting." },
      { question: "Can this be played indoors?", answer: "Yes. It works well in function rooms, halls, classrooms, and flexible indoor venues with enough circulation space." },
      { question: "Is it only for fans of the original game?", answer: "No. First-time players pick it up quickly because the host explains the rules and guides each stage clearly." },
    ],
    cta: { headline: "Ready to Find the Imposter?", subtext: "Tell us your group size, venue, and audience and we will build the right live Amongst Us format for you." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Social Deduction Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Mission Briefing", description: "Your group learns the rules, receives role cards, and understands how crew and imposters win." },
        { icon: Users, title: "Crew Missions Begin", description: "Teams start completing station-based objectives while trying to spot unusual behaviour." },
        { icon: Ghost, title: "Secret Sabotage", description: "Imposters quietly disrupt progress, create doubt, and misdirect the room." },
        { icon: Search, title: "Emergency Discussions", description: "Players call out suspicions, compare stories, and decide what evidence they trust." },
        { icon: Target, title: "Voting and Elimination", description: "The room chooses who gets removed, then quickly resets for the next pressure round." },
        { icon: Trophy, title: "Final Reveal", description: "The surviving crew or imposters are exposed, points are tallied, and the winning side is crowned." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "High-Engagement Group Play",
      itemsPerRow: 4,
      items: [
        { icon: UserPlus, title: "Orientation Groups", description: "A fast way to get new groups talking, reacting, and remembering names." },
        { icon: Users, title: "Student Leadership", description: "Great for prefects, councillors, and camp groups that need trust and composure." },
        { icon: Building, title: "Department Bonding", description: "Teams that know each other well enjoy the bluffing, suspicion, and internal jokes." },
        { icon: PartyPopper, title: "Celebration Blocks", description: "A lively format for appreciation days, term-end moments, and fun internal events." },
        { icon: Handshake, title: "Cross-Team Mixing", description: "Excellent when you need strangers to interact quickly without forced small talk." },
        { icon: GraduationCap, title: "Camps and Cohorts", description: "Works well for youth groups because the game is easy to learn and exciting to watch." },
        { icon: Briefcase, title: "Communication Training Days", description: "A strong energizer for sessions focused on trust, listening, and group decision-making." },
        { icon: Rocket, title: "Kickoff Events", description: "A memorable opening activity that sets a playful, engaged tone for the rest of the day." },
      ],
    },
    clientLogos: ["Canva", "Trip.com", "NUS", "Temasek Secondary", "Singtel", "GovTech"],
    recentEvents: [
      { client: "Canva Singapore", event: "Amongst Us", pax: 90 },
      { client: "Trip.com", event: "Social Deduction Day", pax: 120 },
      { client: "NUS Student Life", event: "Camp Amongst Us", pax: 180 },
      { client: "Temasek Secondary", event: "Leadership Cohort", pax: 140 },
      { client: "Singtel", event: "Amongst Us", pax: 70 },
      { client: "GovTech", event: "Team Bonding", pax: 110 },
    ],
    pricing: { startingPrice: "From $45", unit: "per pax", minimumPax: 12, duration: "2.5 to 3 hours", activityType: "indoor" },
    packages: trafficLightPackages("From $45/pax", "Amongst Us", "#8B5CF6"),
    addOns: [
      { icon: "Ghost", title: "Premium Role Pack", description: "Add special roles, extra twists, and facilitator-led sabotage mechanics." },
      { icon: "ClipboardList", title: "Custom Mission Cards", description: "Tailor tasks around company values, school themes, or event objectives." },
      { icon: "Sparkles", title: "Themed Set Dressing", description: "Bring in visual props and room styling for a stronger game-world atmosphere." },
      { icon: "Award", title: "Crew and Imposter Awards", description: "Recognise best bluffer, sharpest detective, and top-performing crew." },
      { icon: "Camera", title: "Photo Highlights", description: "Capture accusation rounds, reveal moments, and team celebration shots." },
      { icon: "MapPin", title: "Indoor Venue Setup", description: "We help configure the room into mission zones, discussion areas, and reveal points." },
    ],
    outcomes: [
      { icon: "Users", title: "More Natural Interaction", description: "Participants connect quickly because the format gives them real reasons to talk and react." },
      { icon: "Lightbulb", title: "Sharper Listening", description: "Players learn to notice inconsistencies, read the room, and communicate more carefully." },
      { icon: "Target", title: "Faster Group Decisions", description: "Voting rounds teach teams how to decide with incomplete information and limited time." },
      { icon: "Zap", title: "Stronger Energy", description: "The room stays engaged because every round creates suspense, laughter, and immediate stakes." },
    ],
    miniGallery: {
      title: "Amongst Us Highlights",
      images: [
        { src: heroTeamCelebration, alt: "Amongst Us team reveal moment" },
        { src: heroCsiInvestigation, alt: "Players analysing who the imposter might be" },
        { src: teamBuildingOutdoor1, alt: "Participants reacting during a live discussion round" },
      ],
    },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Groups who've played Amongst Us",
  },

  "alice-in-motherland": {
    accentColor: "#A768FF",
    dividerVariant: "route",
    hero: {
      title: "ALICE IN MOTHERLAND",
      subtitle: "Physical Team Building",
      tagline: "Inspired by the Netflix hit Alice in Borderland — a surreal live adventure where teams navigate themed stations, crack curious puzzles, and find their way through a world of playful challenges.",
      backgroundImage: heroCreativeWorkshop,
    },
    overview: {
      description: "Alice in Motherland is a team-building adventure inspired by Alice in Borderland, the acclaimed Netflix series, adapted into a live and fully facilitated group experience. Teams journey through themed stations, complete curious missions, solve imaginative puzzles, and collaborate their way through a surreal format that rewards creativity and team observation. It works especially well for clients or schools looking for something visually distinctive, story-driven, and genuinely memorable.",
      backgroundImage: heroCreativeWorkshop,
    },
    features: [
      { icon: Rabbit, title: "Story-Led Journey", description: "Each stage feels like a chapter in a larger adventure rather than a disconnected game list." },
      { icon: Palette, title: "Creative Challenge Design", description: "Teams solve unusual tasks that reward imagination, curiosity, and collaboration." },
      { icon: Map, title: "Themed Stations", description: "Move through different worlds, each with its own tone, puzzles, and team dynamic." },
      { icon: Sparkles, title: "Immersive Atmosphere", description: "Props, facilitation, and pacing help the experience feel playful and memorable." },
    ],
    benefits: [
      { icon: Heart, title: "More Shared Joy", description: "The whimsical tone lowers barriers and gets people participating with less hesitation." },
      { icon: Lightbulb, title: "Creative Thinking", description: "Teams stretch beyond routine logic and try new ways of solving problems together." },
      { icon: Users, title: "Inclusive Collaboration", description: "The format lets planners, performers, problem-solvers, and quieter contributors all add value." },
      { icon: Star, title: "Memorable Brand Experience", description: "The concept feels curated and premium, making it strong for clients who want something distinctive." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "It felt like stepping into a live storybook. Our team loved how different it felt from a normal activity.", author: "Marketing Lead", company: "CapitaLand" },
      { quote: "The pacing, props, and storytelling made the whole day feel special from start to finish.", author: "Teacher", company: "CHIJ St Nicholas" },
      { quote: "Alice in Motherland gave us a creative format that still delivered real teamwork and group interaction.", author: "Events Manager", company: "Airbnb APAC" },
      { quote: "Beautifully themed and easy for mixed personalities to enjoy together.", author: "Programme Director", company: "SUTD" },
    ],
    faqs: [
      { question: "Is this more creative than competitive?", answer: "Yes. Alice in Motherland leans more into immersive storytelling, light challenge design, and team interaction than pure competitive intensity." },
      { question: "Can it be adapted for schools or clients?", answer: "Yes. The concept can be tuned for school cohorts, creative brands, appreciation events, or curated offsites." },
      { question: "Do participants need to perform or act?", answer: "No. The theme is immersive, but participants can engage through puzzles, movement, observation, and group missions without needing to perform theatrically." },
      { question: "Where does it work best?", answer: "It works well in indoor venues, event spaces, and flexible outdoor settings where themed stations can be set up clearly." },
    ],
    cta: { headline: "Ready to Enter Motherland?", subtext: "Tell us your audience, setting, and event goals and we will shape the right Alice in Motherland experience for your group." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Motherland Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Rabbit, title: "Enter the Story", description: "Teams are welcomed into the world, briefed on the mission, and introduced to the first themed twist." },
        { icon: Map, title: "Travel Through Stations", description: "Each stop reveals a different world, challenge style, and team dynamic." },
        { icon: Puzzle, title: "Solve Curious Missions", description: "Teams tackle playful puzzles and collaborative tasks that reward imagination and attention to detail." },
        { icon: Users, title: "Adapt as a Team", description: "Different members take the lead at different points, keeping the format inclusive and engaging." },
        { icon: Sparkles, title: "Unlock the Final Path", description: "Clues and completed missions combine to reveal the last phase of the adventure." },
        { icon: Trophy, title: "Celebrate the Finish", description: "The final reveal brings the story together before the winning team is announced and celebrated." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Creative and Curated Group Experiences",
      itemsPerRow: 4,
      items: [
        { icon: Building, title: "Creative Teams", description: "A strong fit for groups that want something more imaginative than standard competition formats." },
        { icon: PartyPopper, title: "Appreciation Events", description: "Feels curated and special for client hospitality, celebration blocks, and team thank-yous." },
        { icon: GraduationCap, title: "School Cohorts", description: "Great for classes or youth groups who respond well to story, theme, and discovery." },
        { icon: Handshake, title: "Client-Facing Experiences", description: "Useful when you want a premium, memorable format that still encourages real interaction." },
        { icon: UserPlus, title: "New Group Bonding", description: "The imaginative tone helps strangers loosen up without forcing overly intense competition." },
        { icon: Briefcase, title: "Cross-Department Mixers", description: "Different mission types help people from different functions contribute naturally." },
        { icon: Rocket, title: "Offsite Highlights", description: "Works well as the signature experience inside a wider retreat or strategy day." },
        { icon: Heart, title: "Culture Moments", description: "Ideal when the goal is shared experience, curiosity, and memorable group energy." },
      ],
    },
    clientLogos: ["CapitaLand", "Airbnb", "SUTD", "CHIJ St Nicholas", "Mediacorp", "Prudential"],
    recentEvents: [
      { client: "CapitaLand", event: "Alice in Motherland", pax: 80 },
      { client: "Airbnb APAC", event: "Story Adventure", pax: 60 },
      { client: "SUTD", event: "Creative Cohort Day", pax: 120 },
      { client: "CHIJ St Nicholas", event: "Student Adventure", pax: 150 },
      { client: "Mediacorp", event: "Themed Team Day", pax: 70 },
      { client: "Prudential", event: "Client Experience", pax: 55 },
    ],
    pricing: { startingPrice: "From $48", unit: "per pax", minimumPax: 12, duration: "2.5 to 3 hours", activityType: "hybrid" },
    packages: trafficLightPackages("From $48/pax", "Alice in Motherland", "#A768FF"),
    addOns: [
      { icon: "Palette", title: "Enhanced Theming", description: "Upgrade props, set dressing, and station styling for a stronger world-building effect." },
      { icon: "ClipboardList", title: "Branded Story Integration", description: "Blend your company message, school values, or event theme into the narrative." },
      { icon: "Sparkles", title: "Host Character Pack", description: "Add more in-world facilitators and themed reveals to heighten immersion." },
      { icon: "Camera", title: "Styled Photo Moments", description: "Capture standout scenes and group interactions across the themed stations." },
      { icon: "Award", title: "Curated Finale Awards", description: "Wrap the story with custom awards and a more theatrical ending sequence." },
      { icon: "MapPin", title: "Venue Transformation", description: "Adapt indoor halls or event spaces into a clearer multi-zone adventure layout." },
    ],
    outcomes: [
      { icon: "Heart", title: "Stronger Group Connection", description: "The shared story creates easy talking points and stronger emotional buy-in throughout the session." },
      { icon: "Lightbulb", title: "More Creative Collaboration", description: "Teams practice idea-sharing, interpretation, and curiosity rather than only speed and competition." },
      { icon: "Users", title: "Broader Participation", description: "Different mission styles let more personalities shine across the full experience." },
      { icon: "Star", title: "Higher Memorability", description: "The concept lands as a signature experience rather than a generic activity block." },
    ],
    miniGallery: {
      title: "Alice in Motherland Highlights",
      images: [
        { src: heroCreativeWorkshop, alt: "Team entering a themed Alice in Motherland station" },
        { src: heroTeamCelebration, alt: "Participants reacting during a story-led mission" },
        { src: teamBuildingOutdoor1, alt: "Group celebrating after completing the final challenge" },
      ],
    },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Groups who've entered Alice in Motherland",
  },

  "battle-of-the-olympians": {
    accentColor: "#FFC400",
    dividerVariant: "ribbon",
    hero: {
      title: "BATTLE OF THE OLYMPIANS",
      subtitle: "Physical Team Building",
      tagline: "A bold team tournament that blends athletic rounds, strategy games, and full-group energy into one epic showdown.",
      backgroundImage: heroAdventureChallenge,
    },
    overview: {
      description: "Battle of the Olympians is a large-format team competition built for groups that want scale, energy, and a sense of event. Teams move through a mix of athletic relays, tactical tasks, mental rounds, and showpiece finales while earning points for consistency, teamwork, and determination. It works especially well for larger corporate groups, school cohorts, student camps, and department-wide offsites that need something competitive, highly visible, and easy for people to rally around.",
      backgroundImage: heroAdventureChallenge,
    },
    features: [
      { icon: Crown, title: "Epic Tournament Format", description: "A clear competition arc with heats, points, momentum swings, and a strong finale." },
      { icon: Dumbbell, title: "Athletic and Mental Mix", description: "Rounds are designed so teams need more than raw speed to win well." },
      { icon: Users, title: "Big Group Energy", description: "Ideal for cohorts that want cheering, team pride, and visible head-to-head moments." },
      { icon: Trophy, title: "High-Stakes Finish", description: "The leaderboard and final rounds create a satisfying event climax." },
    ],
    benefits: [
      { icon: Zap, title: "Bigger Event Energy", description: "The format feels like a major tournament, not just a sequence of isolated activities." },
      { icon: Users, title: "Stronger Team Pride", description: "Groups rally around team identity, support each other, and celebrate shared wins loudly." },
      { icon: Target, title: "Balanced Competition", description: "Mixed challenge types mean more participants can contribute meaningfully." },
      { icon: Award, title: "Clear Recognition", description: "The final result gives the event a strong payoff and memorable finish." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Battle of the Olympians gave our whole cohort a proper event feeling from the first whistle to the final awards.", author: "Student Development Head", company: "NYP" },
      { quote: "It scaled beautifully for a large department and still felt well-organised at every stage.", author: "HRBP", company: "DBS" },
      { quote: "The mix of game types meant the sporty teams and the strategic teams both had chances to shine.", author: "Teacher", company: "Catholic High" },
      { quote: "If you want big cheering, visible teamwork, and a strong finale, this format delivers.", author: "Programme Manager", company: "ByteDance Singapore" },
    ],
    faqs: [
      { question: "Is this only for very sporty groups?", answer: "No. Battle of the Olympians mixes physical, tactical, and lighter strategy rounds so teams need a broader range of strengths." },
      { question: "Can it handle large groups?", answer: "Yes. It is one of the stronger formats for larger cohorts because it can be run in waves, heats, and multi-station rotations." },
      { question: "Can schools book this too?", answer: "Yes. It works well for student leaders, school cohorts, camps, and house-based competitions when the format is tuned to age and venue." },
      { question: "Where does it work best?", answer: "Open fields, large indoor halls, and resort-style spaces work best because they support multiple competition zones cleanly." },
    ],
    cta: { headline: "Ready for an Olympian Showdown?", subtext: "Share your group size, audience, and venue and we will shape the right Battle of the Olympians format for your event." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Olympian Tournament Flow",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Opening Ceremony", description: "Teams are briefed, grouped, and introduced to the point system and tournament flow." },
        { icon: Users, title: "Team Identity Build", description: "Squads establish roles, energy, and a shared strategy before the first round begins." },
        { icon: Dumbbell, title: "Athletic Heats", description: "Teams compete in movement-led rounds that test coordination, pace, and determination." },
        { icon: Brain, title: "Tactical Challenges", description: "Mental and strategy-based rounds rebalance the leaderboard and reward smart teamwork." },
        { icon: Crown, title: "Final Championship Push", description: "The top teams battle through the deciding rounds while everyone follows the live standings." },
        { icon: Trophy, title: "Victory Celebration", description: "Champions are crowned, standout contributors are recognised, and the event ends on a proper high." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Large Group Competitive Events",
      itemsPerRow: 4,
      items: [
        { icon: Building, title: "Company-Wide Team Days", description: "Strong for larger groups that want one shared event with a clear climax." },
        { icon: GraduationCap, title: "School Cohorts", description: "A great fit for large student groups, house systems, and inter-class bonding days." },
        { icon: Users, title: "Department Showdowns", description: "Useful when you want friendly rivalry across functions or business units." },
        { icon: Rocket, title: "Kickoff Events", description: "Ideal when you need to start the year or quarter with strong collective energy." },
        { icon: PartyPopper, title: "Celebration Programmes", description: "Works well as the centrepiece for appreciation days and milestone events." },
        { icon: Handshake, title: "Cross-Group Mixing", description: "Rotations and team structures help people interact beyond their usual circles." },
        { icon: Target, title: "Leadership Camps", description: "A strong format for resilience, communication, and shared accountability under pressure." },
        { icon: Award, title: "High-Visibility Finals", description: "Best when you want a strong end-of-event payoff that everyone can get behind." },
      ],
    },
    clientLogos: ["DBS", "ByteDance", "NYP", "Catholic High", "SIA", "GovTech"],
    recentEvents: [
      { client: "DBS", event: "Olympians", pax: 220 },
      { client: "ByteDance Singapore", event: "Team Tournament", pax: 140 },
      { client: "NYP", event: "Cohort Olympians", pax: 260 },
      { client: "Catholic High", event: "House Competition", pax: 180 },
      { client: "SIA", event: "Department Games", pax: 120 },
      { client: "GovTech", event: "Olympian Showdown", pax: 160 },
    ],
    pricing: { startingPrice: "From $48", unit: "per pax", minimumPax: 20, duration: "3 to 4 hours", activityType: "outdoor" },
    packages: trafficLightPackages("From $48/pax", "Battle of the Olympians", "#FFC400"),
    addOns: [
      { icon: "Award", title: "Tournament Awards Pack", description: "Add champion medals, MVP recognition, and styled prize moments for the finale." },
      { icon: "ClipboardList", title: "Live Leaderboard Setup", description: "Make the competition easier to follow with clearer live standings and score updates." },
      { icon: "Camera", title: "Action Photo Coverage", description: "Capture the race moments, celebration scenes, and award ceremony highlights." },
      { icon: "Sparkles", title: "Opening Ceremony Upgrade", description: "Add stronger host intros, walk-ins, and atmosphere at the start of the event." },
      { icon: "MapPin", title: "Field Layout Planning", description: "Configure the venue into clearer battle zones, cheering areas, and final-stage positions." },
      { icon: "UtensilsCrossed", title: "Energy Break Catering", description: "Bring in snacks and hydration support for larger, longer-running competitions." },
    ],
    outcomes: [
      { icon: "Zap", title: "Higher Collective Energy", description: "The tournament structure keeps the group emotionally invested across the full programme." },
      { icon: "Users", title: "Stronger Team Identity", description: "Squads build pride, accountability, and support through visible rounds and shared pressure." },
      { icon: "Target", title: "Better Execution Under Pressure", description: "Teams learn to adjust quickly as the leaderboard changes and time runs down." },
      { icon: "Award", title: "Clear Recognition Moments", description: "The final format creates memorable payoff for top performers and the wider group." },
    ],
    miniGallery: {
      title: "Battle of the Olympians Highlights",
      images: [
        { src: heroAdventureChallenge, alt: "Teams competing during Battle of the Olympians" },
        { src: heroTeamCelebration, alt: "Olympian teams celebrating after the final round" },
        { src: teamBuildingOutdoor1, alt: "Large group tournament layout during a team showdown" },
      ],
    },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Groups who've entered Battle of the Olympians",
  },

  // Quick-launch placeholders (content can be refined later)
  "archery-tag": {
    accentColor: "#2A8DFF",
    dividerVariant: "arrow",
    hero: {
      title: "ARCHERY TAG",
      subtitle: "Team Battle",
      tagline: "A safe, high-energy battle format for teams and student groups who want action, teamwork, and fast decisions.",
      backgroundImage: heroAdventureChallenge,
    },
    overview: {
      description: "Archery Tag is a team battle experience that blends movement, strategy, and communication. It is designed to be safe, inclusive, and easy to run for workplace teams, school groups, and student leaders who want something active without losing structure. Clear rules, protective equipment, and professional facilitation keep the format fun and accessible.",
      backgroundImage: heroAdventureChallenge,
    },
    features: [
      { icon: Target, title: "Tactical Team Play", description: "Coordinate roles and communicate to win rounds." },
      { icon: Shield, title: "Safe Equipment", description: "Proper safety briefing and supervised gameplay." },
      { icon: Trophy, title: "Tournament Format", description: "Round-robin or bracketed competition." },
    ],
    benefits: [
      { icon: Users, title: "Team Coordination", description: "Align quickly and execute together." },
      { icon: Zap, title: "High Energy", description: "A lively, adrenaline-filled format." },
      { icon: Heart, title: "Bonding", description: "Shared wins and funny moments build connection." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "So much fun and surprisingly strategic.", author: "HR", company: "MNC" },
      { quote: "Great energy for a company offsite.", author: "Manager", company: "Tech" },
      { quote: "Everyone got involved, even the quieter folks.", author: "Lead", company: "Finance" },
    ],
    faqs: [],
    cta: { headline: "Ready to Battle?", subtext: "Share your pax count and venue and we’ll propose the best format for your team or school group." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Battle Flow",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Safety Briefing & Gear Up", description: "Learn the rules, receive your bow and arrows, and complete a technique demonstration." },
        { icon: Users, title: "Team Formation & Strategy", description: "Form battle squads, assign roles (shooters, defenders, runners), and plan your opening approach." },
        { icon: Target, title: "Practice Round", description: "A warm-up match to build comfort with the equipment and understand the game mechanics." },
        { icon: Swords, title: "Competitive Battle Rounds", description: "Compete in capture-the-flag, elimination, and objective modes with escalating intensity." },
        { icon: Crown, title: "Knockout Finals", description: "Top teams advance to the semifinal and championship rounds for the ultimate showdown." },
        { icon: Trophy, title: "Victory Ceremony", description: "Champions crowned, standout players recognised, and the full group celebrates together." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Every Occasion",
      itemsPerRow: 4,
      items: [
        { icon: UserPlus, title: "New Team Integration", description: "Break the ice with playful competition." },
        { icon: Building, title: "Department Off-sites", description: "A fast win for team energy." },
        { icon: PartyPopper, title: "Company Celebrations", description: "A hype activity to anchor the day." },
        { icon: GraduationCap, title: "School Cohorts", description: "A big hit for classes, camps, and student leaders who enjoy active formats." },
        { icon: Handshake, title: "Orientation Programmes", description: "Fast-paced rounds help new groups loosen up quickly." },
        { icon: Rocket, title: "Kickoff Events", description: "A momentum-building activity for camps, teams, and term openings." },
        { icon: Briefcase, title: "Cross-Team Alignment", description: "Build trust across functions, squads, or committees." },
        { icon: Target, title: "Training Days", description: "A strong action block inside a wider team-development day." },
      ],
    },
    clientLogos: ["Google", "DBS"],
    recentEvents: [
      { client: "Google", event: "Archery Tag", pax: 80 },
      { client: "DBS", event: "Archery Tag", pax: 120 },
    ],
    pricing: { startingPrice: "From $45", unit: "per pax", minimumPax: 12, duration: "3 hours", activityType: "hybrid" },
    packages: trafficLightPackages("From $45/pax", "Archery Tag", "#2A8DFF"),
    addOns: [
      { icon: "Shield", title: "Extended Battle Props", description: "Add barricades, shields, and mission objects for more tactical rounds." },
      { icon: "ClipboardList", title: "Custom Game Modes", description: "Build in school themes, company values, or event-specific objectives." },
      { icon: "Award", title: "Champion Medals", description: "Recognise the sharpest squad, MVP players, and best team spirit." },
      { icon: "Camera", title: "Action Photo Capture", description: "Capture battle stances, team huddles, and victory celebrations." },
      { icon: "MapPin", title: "Arena Setup Support", description: "Optimise your field, hall, or venue for safer and smoother gameplay." },
      { icon: "UtensilsCrossed", title: "Recharge Breaks", description: "Add drinks or snacks for larger or longer event formats." }
    ],
    outcomes: [
      { icon: "Users", title: "Faster Team Coordination", description: "Teams communicate more clearly because timing and positioning matter in every round." },
      { icon: "Target", title: "Sharper Tactical Thinking", description: "Participants learn to read the field, commit to roles, and adjust plans quickly." },
      { icon: "Zap", title: "Higher Energy Levels", description: "The format injects movement and excitement without becoming chaotic." },
      { icon: "Heart", title: "More Shared Wins", description: "Even first-timers feel useful because different players contribute in different ways." },
    ],
    miniGallery: {
      title: "Archery Tag Highlights",
      images: [
        { src: heroAdventureChallenge, alt: "Archery Tag team battle" },
        { src: teamBuildingOutdoor1, alt: "Outdoor team building moment" },
        { src: heroTeamCelebration, alt: "Team celebrating after Archery Tag" },
      ],
    },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Companies who've experienced our Archery Tag",
  },

  "builder-cross": {
    accentColor: "#FF8A3D",
    dividerVariant: "blueprint",
    hero: { title: "BUILDERCROSS", subtitle: "Team Building Challenge", tagline: "A hands-on build challenge for teams, classes, and student leaders who learn best by making things together.", backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361397/BuilderCross_1_zkduwz.jpg" },
    overview: {
      description: "BuilderCross is a hands-on construction challenge where teams design, plan, and build structures together under time pressure. Inspired by engineering and architecture challenges, participants work with provided materials to create functional builds that meet specific criteria. It is especially strong for workplace teams, school cohorts, and youth groups because it rewards planning, delegation, iteration, and communication without requiring high physical intensity. Whether your group is building bridges, towers, or themed creations, BuilderCross rewards ingenuity and collaboration over brute force.",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361397/BuilderCross_1_zkduwz.jpg",
    },
    features: [
      { icon: Building, title: "Hands-On Construction", description: "Teams build physical structures using provided materials and tools." },
      { icon: Puzzle, title: "Multi-Round Challenges", description: "Progressive rounds with increasing difficulty and creative constraints." },
      { icon: Brain, title: "Engineering Thinking", description: "Plan, prototype, test, and iterate as a team." },
      { icon: Timer, title: "Time Pressure", description: "Each build phase runs on a countdown, adding urgency and excitement." },
    ],
    benefits: [
      { icon: Lightbulb, title: "Creative Problem Solving", description: "Teams learn to think outside the box and adapt designs on the fly." },
      { icon: Users, title: "Role Delegation", description: "Natural leaders and specialists emerge during build phases." },
      { icon: Target, title: "Project Management Skills", description: "Plan resources, manage time, and deliver results under pressure." },
      { icon: Zap, title: "Resilience Building", description: "Failed builds teach iteration and persistence without frustration." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Our engineering team loved the build-and-test format. It mirrored real project delivery perfectly.", author: "Rachel Teo", company: "ST Engineering" },
      { quote: "BuilderCross was the highlight of our team day. Creative, competitive, and genuinely fun.", author: "Kevin Ang", company: "CapitaLand" },
      { quote: "The progressive difficulty kept everyone engaged from start to finish. Great facilitation.", author: "Priya Nair", company: "Singtel" },
      { quote: "Perfect for our R&D department. The iterative design challenges sparked great discussions.", author: "Marcus Loh", company: "Dyson Singapore" },
      { quote: "Even the quieter team members came alive during the build phases. Very inclusive activity.", author: "Sharon Koh", company: "OCBC Bank" },
      { quote: "We have done many team building activities but BuilderCross was refreshingly different.", author: "Daniel Yeo", company: "Keppel Corporation" },
    ],
    faqs: [
      { question: "What materials are used for building?", answer: "We provide a range of safe, reusable materials including wooden blocks, connectors, cardboard, tape, and specialty items depending on the challenge theme. All materials are provided." },
      { question: "Is BuilderCross suitable for non-technical teams?", answer: "Absolutely. The challenges are designed for everyone regardless of technical background. Success comes from teamwork, creativity, and communication rather than engineering expertise." },
      { question: "How many people can participate?", answer: "BuilderCross works well for groups of 10 to 300+. Teams are typically formed in groups of 4 to 8 for optimal collaboration." },
      { question: "Can it be done indoors?", answer: "Yes, BuilderCross is perfect for indoor venues like conference rooms, hotel ballrooms, and function halls. We also offer outdoor setups for a different dynamic." },
      { question: "How long does a session last?", answer: "Standard sessions run 2 to 3 hours. We can adjust the number of rounds and difficulty to fit your schedule." },
    ],
    cta: { headline: "Ready to Build Together?", subtext: "Tell us your group size and goals and we will design a BuilderCross experience your team or class will remember." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Build Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Challenge Briefing", description: "Receive your building challenge, materials list, and scoring criteria." },
        { icon: Brain, title: "Plan & Design", description: "Strategize as a team. Sketch blueprints and assign roles." },
        { icon: Building, title: "Build Sprint 1", description: "First construction phase — get the prototype built and test its basic functionality." },
        { icon: Puzzle, title: "Test & Iterate", description: "Stress-test your build, identify what needs improving, and rework the weakest points." },
        { icon: Zap, title: "Final Build Push", description: "Reinforce, refine, and complete the final version against the countdown clock." },
        { icon: Trophy, title: "Showcase & Judging", description: "Present builds to the judges, scores revealed, and champions crowned." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Hands-On Teams and Cohorts",
      itemsPerRow: 4,
      items: [
        { icon: Building, title: "Project Teams", description: "A natural fit for teams that want planning, prototyping, and delivery pressure in one format." },
        { icon: GraduationCap, title: "School Cohorts", description: "Strong for classes and student leaders because it rewards teamwork more than loud personalities." },
        { icon: Lightbulb, title: "Innovation Days", description: "Useful when you want teams to think, test, adapt, and improve visibly." },
        { icon: Handshake, title: "Cross-Functional Groups", description: "Different skill types can contribute through planning, building, presenting, and refining." },
        { icon: UserPlus, title: "New Team Bonding", description: "Hands-on making gives strangers something concrete to do together from the start." },
        { icon: Target, title: "Leadership Programmes", description: "Highlights delegation, time management, and calm decision-making under constraints." },
        { icon: Briefcase, title: "Workshop Energizers", description: "A good active block inside broader strategy, innovation, or learning days." },
        { icon: Rocket, title: "Retreat Sessions", description: "Works well when you want a challenge that feels constructive, not just competitive." },
      ],
    },
    clientLogos: ["ST Engineering", "CapitaLand", "Singtel", "Dyson", "OCBC", "Keppel"],
    recentEvents: [
      { client: "ST Engineering", event: "BuilderCross Team Day", pax: 120 },
      { client: "CapitaLand", event: "Department Build-Off", pax: 80 },
      { client: "Singtel", event: "Innovation BuilderCross", pax: 200 },
      { client: "Dyson Singapore", event: "R&D Team Build", pax: 60 },
      { client: "OCBC Bank", event: "Cross-Team BuilderCross", pax: 150 },
      { client: "Keppel Corporation", event: "Leadership Build Challenge", pax: 90 },
    ],
    pricing: { startingPrice: "From $45", unit: "per pax", minimumPax: 10, duration: "3 hours", activityType: "indoor" },
    packages: trafficLightPackages("From $45/pax", "BuilderCross", "#FF8A3D"),
    addOns: [
      { icon: "Building", title: "Premium Build Materials", description: "Level up the challenge with sturdier parts, specialty connectors, and advanced build elements." },
      { icon: "ClipboardList", title: "Branded Challenge Brief", description: "Weave in company values, product themes, or school learning objectives." },
      { icon: "Award", title: "Best Build Awards", description: "Recognise innovation, teamwork, aesthetics, and structural performance." },
      { icon: "Camera", title: "Progress Photo Coverage", description: "Capture design discussions, prototype failures, and final reveal moments." },
      { icon: "MapPin", title: "Venue Layout Planning", description: "Design better build zones, judging areas, and final showcase flow." },
      { icon: "UtensilsCrossed", title: "Refreshment Support", description: "Keep energy up during longer build and testing sessions." },
    ],
    outcomes: [
      { icon: "Lightbulb", title: "Better Problem Solving", description: "Teams learn to iterate instead of freezing when the first idea fails." },
      { icon: "Users", title: "Clearer Role Ownership", description: "Participants naturally step into planning, making, testing, and presenting roles." },
      { icon: "Target", title: "Stronger Execution", description: "The challenge rewards groups that can turn plans into workable output quickly." },
      { icon: "Award", title: "Visible Team Achievement", description: "The final builds give the group something concrete to feel proud of together." },
    ],
    howItWorksImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361400/BuilderCross_5_ilekr6.heic",
    addOnsImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361399/BuilderCross_3_xq5fkd.heic",
    ctaBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361406/BuilderCross_6_ibyshz.jpg",
    testimonialBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361402/BuilderCross_9_fphwj5.jpg",
    miniGallery: { title: "BuilderCross Highlights", images: [
      { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361402/BuilderCross_8_vovefn.jpg", alt: "Teams building structures during BuilderCross challenge" },
      { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361402/BuilderCross_2_m6lujd.heic", alt: "Team collaborating on BuilderCross design" },
      { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361401/BuilderCross_10_wvtpdm.jpg", alt: "BuilderCross final showcase moment" },
      { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361400/BuilderCross_7_cgexuc.jpg", alt: "Collaborative building moment" },
    ] },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Companies who've experienced our BuilderCross",
  },

  "gel-blitz": {
    accentColor: "#FF8A3D",
    dividerVariant: "gelBeads",
    hero: { title: "GELBLITZ", subtitle: "Team Battle", tagline: "A fast, tactical battle format built for teams and student groups that want action without the admin headache.", backgroundImage: heroAdventureChallenge },
    overview: {
      description: "GelBlitz is a high-energy gel blaster team battle experience designed for safe, exciting team bonding. Using specially designed gel blasters that fire soft, biodegradable gel beads, teams compete in structured tactical rounds with clear objectives. It is a strong fit for both workplace teams and older student groups because it combines action, teamwork, and facilitation in a format that feels exciting but remains well-controlled. Whether your group prefers tactical strategy or all-out action, GelBlitz delivers an adrenaline rush that gets people communicating fast.",
      backgroundImage: heroAdventureChallenge,
    },
    features: [
      { icon: Crosshair, title: "Tactical Game Modes", description: "Capture the flag, base defense, VIP escort, and elimination rounds." },
      { icon: Shield, title: "Full Safety Gear", description: "Protective goggles, vests, and safety briefing included for all participants." },
      { icon: Users, title: "Squad-Based Play", description: "Teams of 5 to 8 with assigned roles: scouts, medics, and captains." },
      { icon: Target, title: "Objective-Based Missions", description: "Every round has clear goals that require teamwork to achieve." },
    ],
    benefits: [
      { icon: Zap, title: "Adrenaline Rush", description: "Fast-paced rounds keep energy levels high from start to finish." },
      { icon: Users, title: "Communication Under Pressure", description: "Quick callouts and coordination win games and build real-world skills." },
      { icon: Heart, title: "Inclusive Fun", description: "Low barrier to entry means everyone can participate and contribute." },
      { icon: Target, title: "Strategic Thinking", description: "Plan approaches, adapt to opponents, and make split-second decisions." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "The team could not stop laughing. GelBlitz was the most fun we have had at a corporate event.", author: "Serene Tan", company: "Lazada Singapore" },
      { quote: "Perfect mix of strategy and action. Even our quieter team members got competitive.", author: "Wei Ming", company: "Sea Group" },
      { quote: "Safe, well-organized, and absolutely hilarious. Our team bonded instantly.", author: "Farah Ibrahim", company: "Mediacorp" },
      { quote: "We booked GelBlitz for our sales kickoff and the energy was electric. Highly recommend.", author: "Jason Poh", company: "PropertyGuru" },
      { quote: "The different game modes kept things fresh. Three hours flew by.", author: "Alicia Wong", company: "Razer Inc." },
      { quote: "Great for cross-department bonding. Teams that never work together were collaborating like pros.", author: "Ravi Kumar", company: "Infosys Singapore" },
    ],
    faqs: [
      { question: "Are gel blasters safe?", answer: "Yes. Gel blasters fire soft, biodegradable gel beads that burst harmlessly on impact. All participants wear protective goggles and receive a full safety briefing before gameplay begins." },
      { question: "What should participants wear?", answer: "Comfortable athletic clothing and closed-toe shoes are recommended. We provide all protective equipment including goggles and optional vests." },
      { question: "Can it be played indoors?", answer: "Yes. GelBlitz works in both indoor arenas and outdoor fields. Gel beads are water-based and leave no residue, making indoor play clean and hassle-free." },
      { question: "How large can the group be?", answer: "We accommodate groups from 12 to 200+ participants. Larger groups are split into multiple squads with rotating match rounds." },
      { question: "What game modes are available?", answer: "We offer capture the flag, team elimination, base defense, VIP escort, and custom objective modes. The facilitator selects the best mix based on your group size and energy level." },
    ],
    cta: { headline: "Ready for GelBlitz?", subtext: "Share your group size and preferred venue and we will design the right GelBlitz experience for your team or student cohort." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Battle Plan",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Safety Briefing & Gear Up", description: "Learn the rules, receive your gel blaster, and fit protective goggles." },
        { icon: Users, title: "Squad Formation & Roles", description: "Form squads, assign roles (scouts, medics, captains), and plan your opening strategy." },
        { icon: Target, title: "Practice Warm-Up", description: "A quick warm-up match to familiarise with the equipment and test your aim." },
        { icon: Crosshair, title: "Tactical Mission Rounds", description: "Compete in multiple objective-based game modes — flag capture, elimination, and base defense." },
        { icon: Crown, title: "Championship Battle", description: "Top squads face off in the deciding grand finale for the GelBlitz title." },
        { icon: Trophy, title: "Victory Ceremony", description: "MVP awards, squad rankings revealed, and the full group celebrates." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Action-Focused Team Days",
      itemsPerRow: 4,
      items: [
        { icon: Building, title: "Competitive Team Offsites", description: "Great for groups that want action, laughter, and clear team roles." },
        { icon: GraduationCap, title: "Older Student Cohorts", description: "Works well for camps and youth groups that want a safe but exciting battle format." },
        { icon: Handshake, title: "Cross-Team Mixing", description: "Tactical rounds create fast interaction even across unfamiliar groups." },
        { icon: PartyPopper, title: "Celebration Events", description: "A lively centrepiece for appreciation days and high-energy internal events." },
        { icon: Rocket, title: "Kickoff Programmes", description: "Ideal when you want the day to start with momentum and visible team spirit." },
        { icon: Target, title: "Communication Training", description: "Useful for groups exploring coordination, quick decisions, and pressure response." },
        { icon: Users, title: "Department Bonding", description: "Team roles and mission objectives give the session more structure than casual free play." },
        { icon: Heart, title: "Morale Boosts", description: "The format releases energy fast and creates immediate shared wins." },
      ],
    },
    clientLogos: ["Lazada", "Sea Group", "Mediacorp", "PropertyGuru", "Razer", "Infosys"],
    recentEvents: [
      { client: "Lazada Singapore", event: "GelBlitz Team Battle", pax: 150 },
      { client: "Sea Group", event: "Department GelBlitz", pax: 80 },
      { client: "Mediacorp", event: "Creative Team GelBlitz", pax: 60 },
      { client: "PropertyGuru", event: "Sales Kickoff GelBlitz", pax: 120 },
      { client: "Razer Inc.", event: "Gaming-Themed GelBlitz", pax: 100 },
      { client: "Infosys Singapore", event: "Cross-Department Battle", pax: 200 },
    ],
    pricing: { startingPrice: "From $45", unit: "per pax", minimumPax: 12, duration: "3 hours", activityType: "hybrid" },
    packages: trafficLightPackages("From $45/pax", "GelBlitz", "#FF8A3D"),
    addOns: [
      { icon: "Shield", title: "Arena Upgrade", description: "Add better cover zones, themed objectives, and cleaner battle layouts." },
      { icon: "ClipboardList", title: "Mission Customisation", description: "Adapt rounds around your audience, event theme, or team goals." },
      { icon: "Award", title: "MVP and Squad Awards", description: "Recognise best teamwork, top strategist, and champion squad." },
      { icon: "Camera", title: "Action Recap", description: "Capture key battle moments, team huddles, and the final showdown." },
      { icon: "MapPin", title: "Venue Planning", description: "Configure indoor or outdoor spaces for smoother circulation and safer play." },
      { icon: "UtensilsCrossed", title: "Energy Break Support", description: "Add drinks or snacks between mission blocks for longer sessions." },
    ],
    outcomes: [
      { icon: "Zap", title: "Higher Group Energy", description: "Fast rounds and clear objectives keep the pace lively from start to finish." },
      { icon: "Users", title: "Stronger Communication", description: "Success depends on callouts, trust, and role clarity under pressure." },
      { icon: "Target", title: "Smarter Tactical Execution", description: "Teams improve at adjusting plans in real time as the game shifts." },
      { icon: "Heart", title: "Inclusive Shared Fun", description: "Even non-sporty participants stay engaged because strategy matters as much as movement." },
    ],
    miniGallery: { title: "GelBlitz Highlights", images: [{ src: heroAdventureChallenge, alt: "GelBlitz tactical team battle" }, { src: heroTeamCelebration, alt: "Team celebrating GelBlitz victory" }, { src: teamBuildingOutdoor1, alt: "Outdoor GelBlitz action" }] },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Companies who've experienced our GelBlitz",
  },

  "minute-to-win-it": {
    accentColor: "#2A8DFF",
    dividerVariant: "timer",
    hero: { title: "MINUTE TO WIN IT", subtitle: "Team Party Games", tagline: "Quick-fire mini games for teams, classes, and cohorts that want instant laughs and full participation.", backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361435/MTWI_2_m57wuz.jpg" },
    howItWorksImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361427/MTWI_12_vui3ae.jpg",
    addOnsImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361426/MTWI_10_ofjakc.heic",
    ctaBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361433/MTWI_4_e5fnzy.jpg",
    testimonialBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361435/MTWI_3_hiohbs.jpg",
    overview: {
      description: "Minute To Win It is a high-energy party-style team building experience featuring dozens of fast-paced mini challenges, each lasting just 60 seconds. Inspired by the hit TV show, teams compete across multiple rounds of quirky, hilarious, and surprisingly challenging games that test dexterity, coordination, creativity, and teamwork. It works just as well for school cohorts and student groups as it does for workplace teams because the rules are simple, the energy is immediate, and everyone can take part. Minute To Win It works brilliantly as a standalone event, a celebration segment, or an energizer during workshops and camp programmes.",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361435/MTWI_2_m57wuz.jpg",
    },
    features: [
      { icon: Timer, title: "60-Second Challenges", description: "Fast, exciting rounds that keep everyone on their toes." },
      { icon: Gamepad2, title: "100+ Game Library", description: "Curated selection from our extensive collection of team mini games." },
      { icon: Mic, title: "Live Emcee Hosting", description: "Professional hosts with commentary, countdowns, and crowd energy." },
      { icon: Trophy, title: "Real-Time Scoring", description: "Live leaderboard with dramatic point reveals between rounds." },
    ],
    benefits: [
      { icon: Heart, title: "Instant Bonding", description: "Shared laughter and friendly competition break barriers faster than any icebreaker." },
      { icon: PartyPopper, title: "Maximum Fun Factor", description: "The most entertaining team activity with non-stop energy and surprises." },
      { icon: Users, title: "100% Participation", description: "Games designed so everyone contributes regardless of age or fitness level." },
      { icon: Zap, title: "Energizer Effect", description: "Perfect for lifting energy mid-conference or kicking off celebrations." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "We added Minute To Win It to our D&D and it was the highlight of the entire night.", author: "Cheryl Lim", company: "Prudential Singapore" },
      { quote: "The emcee was fantastic. The energy never dropped for a single second.", author: "Ahmad Razak", company: "StarHub" },
      { quote: "Perfect for our year-end celebration. Everyone from interns to directors was laughing together.", author: "Grace Ong", company: "Great Eastern" },
      { quote: "We have tried many team activities but nothing gets people laughing like Minute To Win It.", author: "Vincent Tay", company: "Changi Airport Group" },
      { quote: "Booked this for 300 people and it worked flawlessly. Incredible organization.", author: "Li Wei", company: "NCS Group" },
      { quote: "The game variety was impressive. Our team wants to do it again next quarter.", author: "Nurul Huda", company: "Maybank Singapore" },
    ],
    faqs: [
      { question: "How many games are played in one session?", answer: "A typical 2 to 3 hour session includes 10 to 15 games, carefully curated to maintain energy and variety. We adjust based on your group size and event format." },
      { question: "Can it be combined with a Dinner & Dance?", answer: "Absolutely. Minute To Win It is one of our most popular D&D segments. We can run it between courses or as the main entertainment segment." },
      { question: "What is the maximum group size?", answer: "We have hosted Minute To Win It for groups of up to 500+. Larger groups are divided into teams with simultaneous game stations and a central scoring display." },
      { question: "Do we need a large venue?", answer: "A standard function room or ballroom works perfectly. We bring all equipment and set up game stations. Minimum recommended space is about 50 square meters for groups up to 50." },
      { question: "Is it suitable for formal corporate events?", answer: "Yes. We tailor the game selection and hosting style to match your event tone, from casual team days to more formal gala entertainment." },
    ],
    cta: { headline: "Ready to Play?", subtext: "Tell us your group size, venue, and event style and we will curate the right Minute To Win It experience for your team or class." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Game Night Flow",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Users, title: "Team Formation", description: "Split into teams, pick team names, and get your scorecard." },
        { icon: Mic, title: "Emcee Kickoff & Rules Briefing", description: "Your host introduces the games, rules, and scoring system with live crowd energy." },
        { icon: Star, title: "Warm-Up Challenge", description: "One easy starter game to loosen everyone up and get the laughs going." },
        { icon: Timer, title: "Rapid-Fire Main Rounds", description: "Compete in back-to-back 60-second challenges with live scoring after every game." },
        { icon: Zap, title: "Lightning Bonus Round", description: "Highest-stakes round with double points on the line — any team can take the lead." },
        { icon: Trophy, title: "Grand Finale & Champion Reveal", description: "Final scores announced, winners crowned, and the full group celebrates together." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Party Energy and Full Participation",
      itemsPerRow: 4,
      items: [
        { icon: PartyPopper, title: "Celebration Events", description: "A strong fit for year-end parties, appreciation days, and lighter team days." },
        { icon: Building, title: "Large Company Gatherings", description: "Easy to scale across large rooms while keeping everyone involved." },
        { icon: GraduationCap, title: "School Cohorts", description: "Perfect for classes and student groups because the rules are simple and the laughs are instant." },
        { icon: Handshake, title: "Cross-Team Mixing", description: "Mini games make it easy for unfamiliar groups to relax and connect fast." },
        { icon: Mic, title: "Dinner Segments", description: "Fits naturally inside gala dinners, D&Ds, and hosted stage programmes." },
        { icon: Rocket, title: "Kickoff Energizers", description: "Works well when you need to raise the room before more serious agenda blocks." },
        { icon: Heart, title: "Morale Moments", description: "Strong when the main goal is shared fun, laughter, and positive group energy." },
        { icon: Users, title: "Mixed Demographic Groups", description: "One of the easiest formats for varied ages, personalities, and fitness levels." },
      ],
    },
    clientLogos: ["Prudential", "StarHub", "Great Eastern", "Changi Airport Group", "NCS", "Maybank"],
    recentEvents: [
      { client: "Prudential Singapore", event: "D&D Minute To Win It", pax: 400 },
      { client: "StarHub", event: "Team Day Games", pax: 200 },
      { client: "Great Eastern", event: "Year-End Celebration", pax: 300 },
      { client: "Changi Airport Group", event: "Department Challenge", pax: 150 },
      { client: "NCS Group", event: "Kickoff Energizer", pax: 250 },
      { client: "Maybank Singapore", event: "Team Building Games", pax: 180 },
    ],
    pricing: { startingPrice: "From $45", unit: "per pax", minimumPax: 10, duration: "3 hours", activityType: "indoor" },
    packages: trafficLightPackages("From $45/pax", "Minute To Win It", "#2A8DFF"),
    addOns: [
      { icon: "ClipboardList", title: "Custom Game Curation", description: "Pick challenge types to suit your crowd, tone, and event format." },
      { icon: "Mic", title: "Stage Hosting Upgrade", description: "Bring in a bigger hosted feel with stronger emcee scripting and crowd play." },
      { icon: "Award", title: "Champion Prize Pack", description: "Add medals, novelty prizes, and recognition for top-performing teams." },
      { icon: "Camera", title: "Event Photo Moments", description: "Capture funny reactions, challenge attempts, and winning-team celebrations." },
      { icon: "MapPin", title: "Room Layout Support", description: "Plan game stations and audience flow for smoother, faster transitions." },
      { icon: "UtensilsCrossed", title: "Snacks Between Rounds", description: "Pair the mini-game format with refreshments for a more social event flow." },
    ],
    outcomes: [
      { icon: "Heart", title: "Faster Bonding", description: "Shared laughter does a lot of the heavy lifting in breaking down awkwardness." },
      { icon: "Users", title: "Broader Participation", description: "Because the games are short and varied, more people get a chance to shine." },
      { icon: "Zap", title: "Lifted Room Energy", description: "This format is effective when the audience needs an instant reset or boost." },
      { icon: "Star", title: "Memorable Shared Moments", description: "The quick wins and funny fails make the session especially easy to remember." },
    ],
    miniGallery: { title: "Minute To Win It Highlights", images: [{ src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361426/MTWI_1_yi4zue.heic", alt: "Teams competing in Minute To Win It challenges" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361429/MTWI_11_tc1soi.jpg", alt: "Exciting mini game moment" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361435/MTWI_5_pzdfsb.jpg", alt: "Team celebration after winning" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361437/MTWI_7_vlabzw.heic", alt: "Minute To Win It game action" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361437/MTWI_9_qfxt3q.heic", alt: "Team challenge moment" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361438/MTWI_6_fydbkh.jpg", alt: "Fun team activity highlight" }] },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Companies who've experienced our Minute To Win It",
  },

  "monopoly-dash": {
    accentColor: "#FF4F4F",
    dividerVariant: "money",
    hero: { title: "MONOPOLY DASH", subtitle: "City Strategy Race", tagline: "A city race for teams and student groups who enjoy strategy, negotiation, and fast decisions on the move.", backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361422/MonopolyDash_4_jkl1xu.jpg" },
    overview: {
      description: "Monopoly Dash is a city-wide strategy race inspired by the classic board game, brought to life on the streets of Singapore. Teams navigate real neighborhoods, landmarks, and hidden gems while earning virtual currency, purchasing properties, and completing trade missions. Unlike a standard Amazing Race, Monopoly Dash adds a layer of financial strategy: teams must decide when to invest, when to save, and when to negotiate with rival teams for property trades. That makes it a strong fit for workplace groups, older students, and leadership cohorts who enjoy competition with a more cerebral edge.",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361422/MonopolyDash_4_jkl1xu.jpg",
    },
    howItWorksImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361422/MonopolyDash_5_msxabk.heic",
    addOnsImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361421/MonopolyDash_2_sq8gpp.jpg",
    ctaBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361426/MonopolyDash_6_e304eq.heic",
    testimonialBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361422/MonopolyDash_3_kq2pxe.heic",
    features: [
      { icon: Map, title: "Real-World Board Game", description: "Singapore neighborhoods become your game board with real locations as properties." },
      { icon: Handshake, title: "Negotiate & Trade", description: "Broker deals with rival teams to complete property sets and maximize value." },
      { icon: Monitor, title: "Digital Platform", description: "Live scoring, property portfolios, and real-time team rankings on mobile devices." },
      { icon: Navigation, title: "City Exploration", description: "Discover iconic and hidden locations across Singapore while competing." },
    ],
    benefits: [
      { icon: Target, title: "Strategic Thinking", description: "Teams balance risk, reward, and resource allocation in every decision." },
      { icon: Handshake, title: "Negotiation Skills", description: "Real-time deal-making develops persuasion and collaboration abilities." },
      { icon: Brain, title: "Financial Literacy", description: "Budgeting, investing, and portfolio management in a fun, practical context." },
      { icon: Zap, title: "Competitive Energy", description: "The trading element adds unpredictable twists that keep every team engaged." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "The strategy element made Monopoly Dash stand out from every other team activity we have tried.", author: "Kenneth Goh", company: "J.P. Morgan Singapore" },
      { quote: "Watching teams negotiate property trades in real time was entertaining and insightful.", author: "Yvonne Lau", company: "UBS Singapore" },
      { quote: "Our finance team loved it. The strategic depth was exactly what they wanted.", author: "Rizwan Ali", company: "Standard Chartered" },
      { quote: "A refreshing twist on outdoor team building. The digital platform made scoring seamless.", author: "Samantha Teo", company: "CIMB Singapore" },
      { quote: "We played across the Civic District and discovered places we never knew existed.", author: "Patrick Leong", company: "Ernst & Young" },
      { quote: "The negotiation rounds were the highlight. Colleagues who barely talked before were cutting deals together.", author: "Mei Ling Chua", company: "HSBC Singapore" },
    ],
    faqs: [
      { question: "How does the digital platform work?", answer: "Each team receives access to our mobile web app where they can view their property portfolio, team rankings, available trades, and mission locations. No app download required." },
      { question: "Where does Monopoly Dash take place?", answer: "We offer routes across several Singapore zones including Marina Bay, Civic District, Chinatown, Little India, and Kampong Glam. Custom routes are also available." },
      { question: "Is there actual physical activity involved?", answer: "Yes, teams walk or use public transport between locations. The average team covers 3 to 5 kilometers over the course of the game." },
      { question: "How are winners determined?", answer: "Teams earn points based on total property value, completed sets, bonus mission scores, and trade profits. The team with the highest portfolio value wins." },
      { question: "Can challenges be customized?", answer: "Yes. We can incorporate company trivia, branded properties, and custom missions aligned with your event theme or company values." },
    ],
    cta: { headline: "Ready to Dash?", subtext: "Tell us your group size and preferred neighborhood and we will design a Monopoly Dash that fits your team or student group." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Monopoly Dash Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Game Briefing & Teams Ready", description: "Learn the trading mechanics, scoring system, and study the route map before setting off." },
        { icon: Map, title: "Set Off & Explore", description: "Head out to real Singapore locations and complete your team's first property missions." },
        { icon: Target, title: "Earn Virtual Currency", description: "Complete on-site challenges to build your team's property fund and start acquiring assets." },
        { icon: Handshake, title: "Trade & Negotiate", description: "Broker deals with rival teams at dedicated checkpoints to complete property sets." },
        { icon: Route, title: "Final Sprint", description: "Last locations, bonus missions, and tiebreaker challenges before the game closes." },
        { icon: Trophy, title: "Portfolio Reveal & Champions", description: "Final property values tallied, rankings revealed, and the richest team crowned the winner." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Strategic Outdoor Team Challenges",
      itemsPerRow: 4,
      items: [
        { icon: Building, title: "Strategy-Loving Teams", description: "A strong fit for groups that enjoy planning, negotiating, and thinking ahead." },
        { icon: GraduationCap, title: "Leadership Cohorts", description: "Useful for older students and youth leaders who can handle route and trade decisions." },
        { icon: Handshake, title: "Negotiation Practice", description: "Excellent for programmes that want real-time persuasion and collaboration to show up naturally." },
        { icon: Users, title: "Cross-Department Mixing", description: "Teams need diverse thinking styles to balance movement, deals, and budgeting." },
        { icon: Rocket, title: "Amazing Race Alternative", description: "Great when you want the city-race energy with a stronger strategic layer." },
        { icon: Briefcase, title: "Commercial and Finance Teams", description: "A natural fit for audiences who enjoy trading, value creation, and risk management." },
        { icon: Map, title: "City Discovery Days", description: "Useful when you want exploration, landmarks, and movement to stay central." },
        { icon: Lightbulb, title: "Decision-Making Sessions", description: "Highlights planning quality, adaptability, and deal-making under time pressure." },
      ],
    },
    clientLogos: ["J.P. Morgan", "UBS", "Standard Chartered", "CIMB", "Ernst & Young", "HSBC"],
    recentEvents: [
      { client: "J.P. Morgan Singapore", event: "Strategy Monopoly Dash", pax: 150 },
      { client: "UBS Singapore", event: "Leadership Monopoly Dash", pax: 80 },
      { client: "Standard Chartered", event: "Finance Team Dash", pax: 120 },
      { client: "CIMB Singapore", event: "Regional Team Dash", pax: 100 },
      { client: "Ernst & Young", event: "Consultant Monopoly Dash", pax: 200 },
      { client: "HSBC Singapore", event: "Cross-Department Dash", pax: 160 },
    ],
    pricing: { startingPrice: "From $45", unit: "per pax", minimumPax: 10, duration: "3 hours", activityType: "outdoor" },
    packages: trafficLightPackages("From $45/pax", "Monopoly Dash", "#FF4F4F"),
    addOns: [
      { icon: "ClipboardList", title: "Branded Property Deck", description: "Rename properties and missions around your company, school, or campaign theme." },
      { icon: "Map", title: "Custom City Route", description: "Shape the race around the neighbourhood or district that best fits your audience." },
      { icon: "Award", title: "Trader Awards", description: "Recognise sharp negotiators, best strategists, and top overall portfolios." },
      { icon: "Camera", title: "Street Challenge Recap", description: "Capture team trades, checkpoint moments, and end-of-race reactions." },
      { icon: "UtensilsCrossed", title: "Food Stop Integration", description: "Add refreshment checkpoints or tasting moments along the route." },
      { icon: "MapPin", title: "Briefing Venue Support", description: "Coordinate cleaner start and finale locations for smoother game flow." },
    ],
    outcomes: [
      { icon: "Target", title: "Sharper Strategic Thinking", description: "Teams have to balance movement, spending, trading, and timing throughout the race." },
      { icon: "Users", title: "Stronger Role Coordination", description: "The best teams split responsibilities clearly across navigation, deals, and missions." },
      { icon: "Lightbulb", title: "Better Negotiation Confidence", description: "Participants get repeated practice making offers, reading leverage, and closing deals." },
      { icon: "Heart", title: "More Engaging Exploration", description: "The city route feels more purposeful because every stop connects to the wider game strategy." },
    ],
    miniGallery: { title: "Monopoly Dash Highlights", images: [{ src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361419/MonopolyDash_1_rlwgie.jpg", alt: "Teams racing through Singapore during Monopoly Dash" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361427/MonopolyDash_9_k7krlz.jpg", alt: "Monopoly Dash street challenge" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361423/MonopolyDash_7_vgqtey.heic", alt: "Outdoor negotiation moment" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361422/MonopolyDash_3_kq2pxe.heic", alt: "Champions celebrating Monopoly Dash victory" }] },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Companies who've experienced our Monopoly Dash",
  },

  "nerfwar": {
    accentColor: "#FF8A3D",
    dividerVariant: "foamDart",
    hero: { title: "NERFWAR", subtitle: "Foam Dart Battles", tagline: "A safe, fast, and hilarious battle format for teams and school groups who want action with structure.", backgroundImage: heroAdventureChallenge },
    overview: {
      description: "Nerfwar is a high-energy foam dart battle experience that transforms your outing into an action-packed tactical adventure. Equipped with Nerf blasters and foam darts, teams compete in structured match formats designed to encourage communication, strategy, and good old-fashioned fun. It is especially useful for mixed groups, schools, and student cohorts because the format is safe, easy to pick up, and full of movement without feeling intimidating. Whether you are hosting a casual team day or an energetic kickoff event, Nerfwar delivers guaranteed laughs and memorable team moments.",
      backgroundImage: heroAdventureChallenge,
    },
    features: [
      { icon: Swords, title: "Multiple Battle Modes", description: "Elimination, capture the flag, VIP protection, and custom objective rounds." },
      { icon: Shield, title: "Safe Equipment", description: "Foam darts, protective goggles, and quality Nerf blasters provided for all." },
      { icon: Users, title: "Role-Based Squads", description: "Teams assign scouts, defenders, and attackers for each mission." },
      { icon: Gamepad2, title: "Progressive Difficulty", description: "Rounds escalate in complexity to keep every team challenged." },
    ],
    benefits: [
      { icon: Zap, title: "High Energy Release", description: "Physical activity and laughter combine for the ultimate stress reliever." },
      { icon: Users, title: "Team Communication", description: "Quick callouts and role coordination translate directly to workplace skills." },
      { icon: Heart, title: "Inclusive Participation", description: "Easy to pick up, fun for everyone regardless of experience or fitness." },
      { icon: Target, title: "Tactical Planning", description: "Develop strategy and adapt under pressure in a low-stakes environment." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Nerfwar was the most inclusive activity we have done. Everyone from our CEO to new interns participated.", author: "Hui Ling Tan", company: "Shopify Singapore" },
      { quote: "The battle modes kept things varied and exciting. No two rounds felt the same.", author: "Jason Chua", company: "Carousell" },
      { quote: "Our team cannot stop talking about the VIP protection round. Absolute chaos in the best way.", author: "Anita Fernandez", company: "Grab Financial" },
      { quote: "Safe, well-organized, and endlessly fun. The facilitators were great at keeping energy up.", author: "Bryan Koh", company: "Circles.Life" },
      { quote: "We booked Nerfwar for 200 people and every single person was engaged from start to finish.", author: "Diana Ng", company: "Foodpanda Singapore" },
      { quote: "A fantastic way to break down barriers between teams. Highly recommend for any team event.", author: "Arjun Menon", company: "Wise Singapore" },
    ],
    faqs: [
      { question: "Is Nerfwar safe for all participants?", answer: "Yes. Foam darts are soft and harmless. Safety goggles are provided and mandatory. Our facilitators conduct a thorough safety briefing before every game." },
      { question: "What equipment is provided?", answer: "We provide Nerf blasters, foam darts, extra magazines, safety goggles, and all arena setup materials. Participants just need to wear comfortable clothing and closed-toe shoes." },
      { question: "Can it be played indoors?", answer: "Yes. Nerfwar works in indoor venues, function rooms, and outdoor spaces. We bring portable barriers and set up the arena at your chosen location." },
      { question: "How many rounds are played?", answer: "A standard 3-hour session includes 6 to 8 rounds with different game modes. We adjust the pace based on your group energy and time constraints." },
      { question: "What is the ideal group size?", answer: "Nerfwar works best for groups of 10 to 200+. Larger groups are split into platoons with rotating matches and a central leaderboard." },
    ],
    cta: { headline: "Ready for Nerfwar?", subtext: "Share your group size and venue preference and we will design the right foam dart battle experience for your team or class." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Battle Briefing",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Safety Briefing & Equipment Check", description: "Learn the rules, get fitted with foam dart blasters, and receive your protective goggles." },
        { icon: Users, title: "Squad Formation & Role Assignment", description: "Form squads, assign scouts, defenders, and attackers for each mission round." },
        { icon: Star, title: "Warm-Up Volley", description: "A quick opening match to calibrate everyone and get comfortable with the gear." },
        { icon: Target, title: "Battle Round Series", description: "Compete in multiple escalating game modes — elimination, flag capture, and VIP protection." },
        { icon: Crown, title: "Nerfwar Championship Final", description: "Top squads compete in the deciding match for the Nerfwar crown." },
        { icon: Trophy, title: "Victory Ceremony & MVP Awards", description: "Final results announced, standout players recognised, and the team photo taken." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Fast, Safe Battle Energy",
      itemsPerRow: 4,
      items: [
        { icon: Building, title: "Team Offsites", description: "Great for departments that want active fun with minimal learning curve." },
        { icon: GraduationCap, title: "School and Camp Groups", description: "A good fit for student cohorts because the format is safe, playful, and easy to learn." },
        { icon: Users, title: "Mixed Personality Teams", description: "Different roles let both bold and quieter participants contribute meaningfully." },
        { icon: PartyPopper, title: "Celebration Events", description: "Useful when the goal is high energy, laughter, and memorable group moments." },
        { icon: Handshake, title: "Cross-Team Bonding", description: "Battle rounds quickly break down barriers between unfamiliar participants." },
        { icon: Rocket, title: "Kickoff Activities", description: "Starts the day with strong movement, cheering, and fast group buy-in." },
        { icon: Target, title: "Communication Practice", description: "The game naturally surfaces planning, callouts, and quick support under pressure." },
        { icon: Heart, title: "Morale Resets", description: "Ideal when a tired group needs an immediate lift in mood and energy." },
      ],
    },
    clientLogos: ["Shopify", "Carousell", "Grab Financial", "Circles.Life", "Foodpanda", "Wise"],
    recentEvents: [
      { client: "Shopify Singapore", event: "All-Hands Nerfwar", pax: 120 },
      { client: "Carousell", event: "Team Day Nerfwar", pax: 80 },
      { client: "Grab Financial", event: "Department Battle", pax: 100 },
      { client: "Circles.Life", event: "Office Nerfwar", pax: 60 },
      { client: "Foodpanda Singapore", event: "Regional Nerfwar", pax: 200 },
      { client: "Wise Singapore", event: "Cross-Team Battle", pax: 150 },
    ],
    pricing: { startingPrice: "From $45", unit: "per pax", minimumPax: 10, duration: "3 hours", activityType: "hybrid" },
    packages: trafficLightPackages("From $45/pax", "Nerfwar", "#FF8A3D"),
    addOns: [
      { icon: "Shield", title: "Arena Barrier Pack", description: "Build a more dynamic battlefield with extra cover and tactical movement lanes." },
      { icon: "ClipboardList", title: "Custom Mission Modes", description: "Adapt gameplay around your event goals, audience, or venue style." },
      { icon: "Award", title: "Squad Awards", description: "Recognise top teams, best communicators, and standout players." },
      { icon: "Camera", title: "Battle Highlights", description: "Capture action shots, team strategy huddles, and the winning moments." },
      { icon: "MapPin", title: "Indoor or Outdoor Setup", description: "Design the layout to suit your venue for safer and more exciting movement." },
      { icon: "UtensilsCrossed", title: "Recharge Breaks", description: "Add refreshments between rounds to keep longer sessions comfortable." },
    ],
    outcomes: [
      { icon: "Zap", title: "Fast Energy Release", description: "The short rounds help teams loosen up quickly and stay engaged." },
      { icon: "Users", title: "Better Team Communication", description: "Participants build trust through role clarity and in-the-moment coordination." },
      { icon: "Target", title: "Improved Tactical Thinking", description: "The format rewards teams that can plan, adapt, and support each other." },
      { icon: "Heart", title: "Low-Barrier Participation", description: "Because the rules are easy and the gear is familiar, people jump in quickly." },
    ],
    miniGallery: { title: "Nerfwar Highlights", images: [{ src: heroAdventureChallenge, alt: "Nerfwar foam dart team battle in action" }, { src: heroTeamCelebration, alt: "Team celebrating Nerfwar victory" }, { src: teamBuildingOutdoor1, alt: "Outdoor Nerfwar moment" }] },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Companies who've experienced our Nerfwar",
  },

  "running-man": {
    accentColor: "#FFD400",
    dividerVariant: "route",
    hero: { title: "RUNNING MAN ADVENTURE", subtitle: "Variety Show Games", tagline: "A fan-favourite challenge format for teams, classes, and student groups that want pure energy and big laughs.", backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361444/RunningMan_10_x6owst.heic" },
    howItWorksImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361441/RunningMan_2_h7dp74.jpg",
    addOnsImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774599632/RunningMan_19_os8wfv.jpg",
    ctaBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361442/RunningMan_6_esz34i.heic",
    testimonialBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774599625/RunningMan_16_tbkpld.jpg",
    overview: {
      description: "Running Man Adventure is inspired by the massively popular Korean variety show, bringing its signature blend of hilarious challenges, name-tag battles, and team missions to your event. Teams compete through multiple rounds of creative, physical, and strategic games that reward quick thinking, coordination, and plenty of laughter. It is one of our strongest crossover formats for workplace teams, school cohorts, and student groups because it feels familiar, inclusive, and instantly exciting. Suitable for outdoor parks, indoor venues, and resort settings.",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361444/RunningMan_10_x6owst.heic",
    },
    features: [
      { icon: Gamepad2, title: "Variety Show Format", description: "Multiple game types inspired by the hit Korean show, adapted for team building." },
      { icon: Footprints, title: "Name-Tag Battles", description: "The iconic elimination round where strategy meets speed." },
      { icon: Mic, title: "Game Master Hosting", description: "Professional facilitators deliver commentary and keep the energy high." },
      { icon: Star, title: "Mission Cards", description: "Secret missions and alliance mechanics add unpredictable twists to every round." },
    ],
    benefits: [
      { icon: Heart, title: "Instant Team Spirit", description: "Shared laughter and friendly rivalry create bonds faster than any workshop." },
      { icon: Zap, title: "High Energy Throughout", description: "Non-stop action means zero downtime and maximum engagement." },
      { icon: Users, title: "Universal Appeal", description: "Fun for all ages, fitness levels, and personality types." },
      { icon: PartyPopper, title: "Memorable Moments", description: "The kind of experience people photograph, share, and reminisce about." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "The name-tag battle was absolute pandemonium in the best way. We have never laughed so hard.", author: "Joanne Lim", company: "Unilever Singapore" },
      { quote: "Our team requested Running Man specifically and it exceeded all expectations.", author: "Dennis Heng", company: "Tiger Brokers" },
      { quote: "Perfect for our multi-generational team. Everyone from 22 to 55 had a blast.", author: "Siti Aisyah", company: "Jurong Port" },
      { quote: "The game master was incredible. Kept the energy at 100% for three straight hours.", author: "Ryan Leow", company: "Crypto.com Singapore" },
      { quote: "We have done Running Man twice now and both times the feedback was overwhelmingly positive.", author: "Christine Tan", company: "FairPrice Group" },
      { quote: "Best team day activity we have ever organized. Already planning our next session.", author: "Deepak Sharma", company: "Tata Communications" },
    ],
    faqs: [
      { question: "What games are included?", answer: "Each session features 6 to 8 games selected from our library of 30+ Running Man-inspired challenges. The mix includes physical games, mental puzzles, relay races, and the signature name-tag battle." },
      { question: "Do participants need to be fit?", answer: "No. Games are designed for all fitness levels. While some rounds involve running, others focus on strategy, memory, or creativity. Every team member can contribute." },
      { question: "Can it be done indoors?", answer: "Yes. We offer both indoor and outdoor formats. Indoor versions are adapted for function rooms, hotel ballrooms, and conference venues." },
      { question: "How long is a typical session?", answer: "Standard sessions run 2.5 to 3 hours. We can extend to 4 hours for larger groups or add it as a segment within a longer event." },
      { question: "Is it suitable for large groups?", answer: "Absolutely. We have hosted Running Man for groups of up to 300+ with multiple simultaneous game stations and a central scoring system." },
    ],
    cta: { headline: "Ready for Running Man?", subtext: "Share your group size and event style and we will curate the right Running Man Adventure for your team or student group." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Running Man Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Users, title: "Team Formation & Name-Tag Distribution", description: "Form teams, receive colour-coded name tags, and meet your competitors for the day." },
        { icon: Gamepad2, title: "Opening Variety Missions", description: "Compete in a series of funny, creative, and physical challenges to build points and momentum." },
        { icon: Handshake, title: "Alliance Phase", description: "Form temporary alliances, negotiate deals, set traps, and plan your survival strategy." },
        { icon: Footprints, title: "Name-Tag Capture Rounds", description: "The iconic elimination rounds where you rip off rivals' tags to take them out of the game." },
        { icon: Crown, title: "Final Survivor Showdown", description: "Last teams standing battle for immunity and the Running Man championship." },
        { icon: Trophy, title: "Champion Reveal & Awards", description: "Final standings announced, top performers recognised, and the event closes with a celebration." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Big Energy Variety-Show Bonding",
      itemsPerRow: 4,
      items: [
        { icon: PartyPopper, title: "High-Energy Team Days", description: "Perfect for groups that want laughter, movement, and a lot of cheering." },
        { icon: GraduationCap, title: "School Cohorts", description: "A strong fit for camps and student groups because the format is familiar and highly watchable." },
        { icon: Users, title: "Mixed Teams", description: "The variety of missions makes it easier for many personality types to contribute." },
        { icon: Rocket, title: "Kickoff Events", description: "A reliable way to start the day with strong participation and shared momentum." },
        { icon: Handshake, title: "Cross-Department Mixing", description: "Fun mission formats get strangers interacting quickly without forced conversation." },
        { icon: Heart, title: "Celebration Programmes", description: "Great for appreciation days and event blocks where joy and group spirit matter." },
        { icon: Mic, title: "Hosted Event Segments", description: "Works well in larger programmes because the format is naturally stagey and entertaining." },
        { icon: Target, title: "Leadership Camps", description: "Useful when you want composure, teamwork, and quick adaptation to surface in a playful way." },
      ],
    },
    clientLogos: ["Unilever", "Tiger Brokers", "Jurong Port", "Crypto.com", "FairPrice", "Tata"],
    recentEvents: [
      { client: "Unilever Singapore", event: "Running Man Team Day", pax: 180 },
      { client: "Tiger Brokers", event: "Sales Team Running Man", pax: 80 },
      { client: "Jurong Port", event: "Department Running Man", pax: 120 },
      { client: "Crypto.com Singapore", event: "All-Hands Running Man", pax: 200 },
      { client: "FairPrice Group", event: "Annual Running Man", pax: 250 },
      { client: "Tata Communications", event: "Regional Team Games", pax: 100 },
    ],
    pricing: { startingPrice: "From $45", unit: "per pax", minimumPax: 10, duration: "3 hours", activityType: "outdoor" },
    packages: trafficLightPackages("From $45/pax", "Running Man Adventure", "#FFD400"),
    addOns: [
      { icon: "Tag", title: "Custom Name Tags", description: "Personalized Running Man name tags that make the signature rounds feel more real." },
      { icon: "ClipboardList", title: "Mission Customisation", description: "Adapt challenge cards around your team, school, or event narrative." },
      { icon: "Award", title: "Champion Awards", description: "Recognise best player, best team spirit, and overall champion squad." },
      { icon: "Camera", title: "Variety Show Highlights", description: "Capture challenge reactions, betrayals, and final-round celebrations." },
      { icon: "MapPin", title: "Route and Venue Planning", description: "Shape the session for parks, resorts, halls, or mixed indoor-outdoor settings." },
      { icon: "UtensilsCrossed", title: "Refreshment Breaks", description: "Add a midway break to keep larger groups comfortable and energised." },
    ],
    outcomes: [
      { icon: "Heart", title: "Stronger Group Spirit", description: "The humour and rivalry help teams relax and rally behind each other quickly." },
      { icon: "Zap", title: "Consistent Energy", description: "Mission variety keeps the format lively without long dead periods." },
      { icon: "Users", title: "Broader Involvement", description: "Different games let sporty, strategic, and playful participants all have moments to shine." },
      { icon: "Star", title: "More Memorable Moments", description: "The name-tag finales and unexpected twists are the parts people keep talking about afterwards." },
    ],
    miniGallery: { title: "Running Man Highlights", images: [{ src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774599632/RunningMan_17_dfqtds.heic", alt: "Running Man variety show team missions" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774599637/RunningMan_21_ncjbhp.jpg", alt: "Team competing in Running Man challenge" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774599640/RunningMan_22_f0ka8y.heic", alt: "Running Man name-tag battle action" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774599624/RunningMan_13_m2kg4e.jpg", alt: "Running Man outdoor challenge moment" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361445/RunningMan_8_afq55t.heic", alt: "Team celebrating Running Man victory" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361445/RunningMan_1_rqyx9i.jpg", alt: "Running Man team formation" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361443/RunningMan_7_bqkr2b.heic", alt: "Running Man finale showdown" }] },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Companies who've experienced our Running Man Adventure",
  },

  "sotong-game": {
    accentColor: "#D946EF",
    dividerVariant: "squid",
    hero: { title: "SOTONG GAME", subtitle: "Squid-Style Survival Games", tagline: "Can Your Team Survive the Ultimate Challenge?", backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361478/SotongGame_7_cd8u9r.jpg" },
    howItWorksImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361474/SotongGame_8_hqiimv.jpg",
    addOnsImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361472/SotongGame_6_m15tpn.jpg",
    ctaBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361469/SotongGame_5_yybybi.jpg",
    testimonialBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361469/SotongGame_4_vphbd3.jpg",
    overview: {
      description: "Sotong Game is a themed team building experience inspired by the global phenomenon of Squid-style survival games, adapted into safe, inclusive, and thrilling team challenges. Participants enter the game world complete with themed briefings, dramatic music, and the unmistakable tension of elimination rounds. From Red Light Green Light to Dalgona challenges to the iconic Tug of War, every game is faithfully recreated with a team-building twist that keeps everyone safe while delivering maximum excitement. Teams must communicate, strategize, and support each other to survive each round and advance to the final showdown. Our facilitators dress the part and maintain the immersive atmosphere throughout, complete with dramatic commentary and live scoring. Sotong Game is consistently one of our most popular activities for groups that want something themed, competitive, and genuinely memorable.",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361478/SotongGame_7_cd8u9r.jpg",
    },
    features: [
      { icon: Gamepad2, title: "Iconic Game Recreations", description: "Red Light Green Light, Dalgona, Tug of War, Marbles, and more." },
      { icon: Theater, title: "Full Immersive Theming", description: "Themed briefings, dramatic music, and costumed facilitators." },
      { icon: Users, title: "Team Survival Mechanics", description: "Teams protect their members through collaborative strategy." },
      { icon: Timer, title: "Elimination Rounds", description: "Progressive elimination builds tension and excitement throughout." },
    ],
    benefits: [
      { icon: Heart, title: "Unforgettable Experience", description: "The theming and drama create memories that last well beyond the event." },
      { icon: Users, title: "Team Solidarity", description: "Survival mechanics encourage teams to protect and support each other." },
      { icon: Zap, title: "Maximum Engagement", description: "The elimination format keeps everyone invested in every single round." },
      { icon: Brain, title: "Calm Under Pressure", description: "Games reward composure, patience, and strategic decision-making." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "The theming was incredible. Our team felt like they were actually in the show.", author: "Michelle Yap", company: "Dentsu Singapore" },
      { quote: "Sotong Game was the most talked-about team event we have ever organized. Everyone loved it.", author: "Kelvin Ong", company: "Publicis Groupe" },
      { quote: "The elimination rounds created amazing tension. People were cheering and strategizing like crazy.", author: "Priscilla Ng", company: "Ninja Van" },
      { quote: "Safe, hilarious, and perfectly organized. The facilitators absolutely nailed the atmosphere.", author: "Hafiz Rahman", company: "RedDoorz" },
      { quote: "We played the Dalgona challenge and the entire room went silent with concentration. Priceless.", author: "Jessica Loh", company: "Shopee Express" },
      { quote: "Booked Sotong Game for our year-end event and the feedback was unanimously positive.", author: "Alex Tan", company: "Gojek Singapore" },
    ],
    faqs: [
      { question: "Is Sotong Game safe?", answer: "Absolutely. All games are adapted for safety. There is no physical contact in elimination rounds, and activities like Tug of War use proper equipment with safety guidelines. Our facilitators prioritize participant safety throughout." },
      { question: "What games are included?", answer: "A typical session includes 5 to 7 games from our library: Red Light Green Light, Dalgona Challenge, Tug of War, Marbles, Glass Bridge (adapted), and a final team showdown." },
      { question: "Do eliminated players just sit out?", answer: "No. Eliminated players join a fun side activity or become spectators who can earn bonus points for their team through mini challenges." },
      { question: "Can it be held indoors?", answer: "Yes. Sotong Game works in indoor function rooms, hotel ballrooms, and outdoor fields. We bring all props, music, and theming materials." },
      { question: "How many people can play?", answer: "We accommodate groups from 20 to 300+. Larger groups are divided into zones with simultaneous games running in parallel." },
    ],
    cta: { headline: "Ready for Sotong Game?", subtext: "Tell us your group size, audience, and venue and we will create the right immersive survival game experience for your event." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Survival Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Theater, title: "Enter the Arena", description: "Your group receives the themed briefing, rules, and team setup that kicks off the survival format." },
        { icon: Gamepad2, title: "Red Light Green Light", description: "The first challenge sets the tone with movement, tension, and instant crowd energy." },
        { icon: Puzzle, title: "Precision Challenge Rounds", description: "Games like Dalgona and tactical mini-challenges test control, patience, and focus." },
        { icon: Users, title: "Team Survival Decisions", description: "Teams decide how to protect members, divide effort, and recover after each twist." },
        { icon: Timer, title: "Elimination Pressure", description: "The pace tightens as rounds get harder and every point becomes more valuable." },
        { icon: Trophy, title: "Final Showdown", description: "The last battle decides the surviving champions before the finale reveal and prize moment." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "High-Drama Group Competition",
      itemsPerRow: 4,
      items: [
        { icon: PartyPopper, title: "Year-End Events", description: "A crowd-pleasing format for teams that want something bold, memorable, and highly social." },
        { icon: Users, title: "Department Showdowns", description: "Strong for groups that enjoy friendly rivalry and visible head-to-head moments." },
        { icon: GraduationCap, title: "School Cohorts", description: "A strong fit for camps, classes, and student leaders when you want themed excitement." },
        { icon: Handshake, title: "Cross-Team Mixing", description: "Useful when you need strangers to loosen up quickly through shared suspense and laughter." },
        { icon: Rocket, title: "Kickoff Programmes", description: "Sets an energetic tone for a larger team day, retreat, or orientation schedule." },
        { icon: Building, title: "Culture Events", description: "Works well for clients who want a signature experience instead of a standard activity block." },
        { icon: Target, title: "Leadership Camps", description: "Great when you want composure, strategy, and group responsibility to show up naturally." },
        { icon: Heart, title: "Celebration Groups", description: "Best for audiences who enjoy cheering, spectacle, and a more dramatic event atmosphere." },
      ],
    },
    clientLogos: ["Dentsu", "Publicis", "Ninja Van", "RedDoorz", "Shopee Express", "Gojek"],
    recentEvents: [
      { client: "Dentsu Singapore", event: "Squid-Style Team Games", pax: 180 },
      { client: "Publicis Groupe", event: "Agency Sotong Game", pax: 120 },
      { client: "Ninja Van", event: "Operations Sotong Game", pax: 200 },
      { client: "RedDoorz", event: "Team Survival Challenge", pax: 80 },
      { client: "Shopee Express", event: "Logistics Sotong Game", pax: 150 },
      { client: "Gojek Singapore", event: "Year-End Sotong Game", pax: 250 },
    ],
    pricing: { startingPrice: "From $45", unit: "per pax", minimumPax: 20, duration: "3 hours", activityType: "outdoor" },
    packages: trafficLightPackages("From $45/pax", "Sotong Game", "#D946EF"),
    addOns: [
      { icon: "Sparkles", title: "Themed Host Upgrade", description: "Add stronger in-character facilitation, voice-over moments, and game reveals." },
      { icon: "Palette", title: "Visual Set Dressing", description: "Bring in stronger props, signage, and staging so the venue feels more immersive." },
      { icon: "Award", title: "Survivor Awards Pack", description: "Recognise champion teams, standout players, and best comeback moments." },
      { icon: "Camera", title: "Content Highlights", description: "Capture dramatic round reactions, challenge moments, and celebration scenes." },
      { icon: "MapPin", title: "Venue Zoning", description: "Configure the space into cleaner challenge lanes, spectator areas, and reveal points." },
      { icon: "UtensilsCrossed", title: "Break-Time Catering", description: "Keep energy levels steady with drinks, snacks, or meal coordination between rounds." },
    ],
    outcomes: [
      { icon: "Zap", title: "Higher Event Energy", description: "Themed gameplay, host pacing, and elimination tension keep the room fully engaged." },
      { icon: "Users", title: "Stronger Team Solidarity", description: "Survival mechanics naturally push participants to support and protect each other." },
      { icon: "Target", title: "Better Composure Under Pressure", description: "Short, high-stakes rounds reward teams that stay calm and make decisions together." },
      { icon: "Heart", title: "More Shared Memories", description: "The visual drama and reaction moments make this one of the easiest formats to remember and talk about." },
    ],
    miniGallery: { title: "Sotong Game Highlights", images: [{ src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361464/SotongGame_19_gqbkjc.jpg", alt: "Sotong Game themed team challenge" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361447/SotongGame_1_evo52u.jpg", alt: "Squid-style game in progress" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361450/SotongGame_13_sabaqz.jpg", alt: "Team survival moment" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361450/SotongGame_11_r7nxph.heic", alt: "Sotong Game elimination round" }, { src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774361476/SotongGame_9_wzdts3.heic", alt: "Sotong Game team moment" }] },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Companies who've experienced our Sotong Game",
  },

  "tag-tical-laser-teambuilding": {
    accentColor: "#FFC400",
    dividerVariant: "laser",
    hero: { title: "TAG-TICAL LASER TAG", subtitle: "Laser Team Battles", tagline: "Gear Up for the Ultimate Laser Tag Showdown!", backgroundImage: heroAdventureChallenge },
    overview: {
      description: "Tag-tical Laser Teambuilding is a premium laser tag experience designed specifically for corporate team building. Using state-of-the-art infrared laser tag equipment, teams compete in structured tactical rounds that reward strategy, communication, and coordination. Unlike casual laser tag, our corporate format features objective-based game modes including capture the base, escort missions, king of the hill, and team elimination. Each participant receives a laser tag vest and phaser with real-time hit tracking and scoring. Our facilitators design the battlefield layout, manage game flow, and provide tactical briefings between rounds. The technology is completely safe with no projectiles involved, making it suitable for all participants regardless of age or fitness level. Tag-tical Laser is perfect for teams that want a competitive, active experience with a strong strategic element.",
      backgroundImage: heroAdventureChallenge,
    },
    features: [
      { icon: Crosshair, title: "Infrared Technology", description: "Safe laser tag equipment with real-time hit tracking and scoring." },
      { icon: Target, title: "Objective Game Modes", description: "Capture the base, escort mission, king of the hill, and elimination rounds." },
      { icon: Shield, title: "Tactical Battlefield", description: "Custom arena layouts with barriers, cover points, and strategic positions." },
      { icon: Users, title: "Squad Coordination", description: "Roles and formations that require genuine team communication." },
    ],
    benefits: [
      { icon: Target, title: "Strategic Alignment", description: "Teams develop planning, communication, and execution skills under pressure." },
      { icon: Zap, title: "High Energy Fun", description: "Active gameplay keeps energy levels high throughout the entire session." },
      { icon: Users, title: "Cross-Team Bonding", description: "Shared tactical experiences break down departmental barriers." },
      { icon: Heart, title: "Zero Physical Risk", description: "Infrared technology means no projectiles, no pain, just pure competitive fun." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "The objective-based modes made laser tag feel like a real team building exercise, not just a game.", author: "Timothy Lim", company: "Thales Singapore" },
      { quote: "Excellent organization and equipment. Our team loved the tactical briefings between rounds.", author: "Karen Yeo", company: "BAE Systems" },
      { quote: "We booked laser tag expecting casual fun but got a genuinely strategic team experience.", author: "Prakash Nair", company: "ST Aerospace" },
      { quote: "The escort mission mode was brilliant. Required real coordination and role assignment.", author: "Linda Goh", company: "Dassault Systemes" },
      { quote: "Safe, exciting, and surprisingly team-focused. Way better than traditional laser tag venues.", author: "Edmund Chong", company: "Bosch Singapore" },
      { quote: "Our engineering team rated this as the best team activity we have done in three years.", author: "Aisha Binte Yusof", company: "Sembcorp Industries" },
    ],
    faqs: [
      { question: "How does laser tag differ from regular laser tag arcades?", answer: "Our corporate laser tag uses higher-grade equipment with precise hit tracking, tactical game modes designed for team building, custom battlefield layouts, and professional facilitation. The focus is on team strategy rather than individual play." },
      { question: "Is it safe for all participants?", answer: "Yes. Laser tag uses harmless infrared beams. There are no projectiles of any kind. The equipment is lightweight and comfortable, and the gameplay is suitable for all fitness levels." },
      { question: "Where is it held?", answer: "We can set up laser tag arenas in indoor function rooms, outdoor fields, parks, and resort grounds. We bring all equipment including portable barriers for the battlefield." },
      { question: "How are teams scored?", answer: "Our equipment tracks individual hits, team objectives completed, and survival rates. Scores are displayed on a live leaderboard between rounds." },
      { question: "What game modes are available?", answer: "We offer team elimination, capture the base, escort mission, king of the hill, free-for-all, and custom objective modes. The facilitator selects the best mix based on your group dynamics." },
    ],
    cta: { headline: "Ready for Laser Tag?", subtext: "Share your group size and venue and we will design a tactical laser tag experience your team will love." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Tactical Briefing",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Gear Up & Equipment Fitting", description: "Receive your laser vest and phaser, complete safety briefing, and confirm controls." },
        { icon: Map, title: "Battlefield Walk-Through", description: "Study the arena layout, cover positions, and objective locations before the first round." },
        { icon: Shield, title: "Team Strategy Session", description: "Assign roles, set your formation, and plan the opening round approach with your squad." },
        { icon: Target, title: "Battle Rounds", description: "Compete in objective-based game modes with live scoring and escalating intensity." },
        { icon: Crown, title: "Elimination Finals", description: "Top squads advance to the deciding championship round for the laser tag title." },
        { icon: Trophy, title: "Victory Ceremony & Rankings", description: "Final leaderboard revealed, MVP recognised, and the winning squad celebrated." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Tactical Laser Team Battles",
      itemsPerRow: 4,
      items: [
        { icon: Building, title: "Corporate Team Days", description: "A premium battle format for teams that want something active and polished." },
        { icon: GraduationCap, title: "Older Student Cohorts", description: "Good for youth leaders and senior students who enjoy mission structure and strategy." },
        { icon: Handshake, title: "Cross-Team Bonding", description: "Objective rounds create strong interdependence and fast communication." },
        { icon: Target, title: "Leadership Development", description: "Highlights decision-making, role clarity, and tactical alignment under pressure." },
        { icon: Rocket, title: "Kickoff Events", description: "Strong when you want a sharp, modern format that feels more premium than casual play." },
        { icon: Users, title: "Mixed Group Participation", description: "Safe infrared gameplay lowers hesitation while preserving the competition feel." },
        { icon: PartyPopper, title: "Celebration Blocks", description: "A memorable centrepiece for offsites, milestone events, and internal appreciation days." },
        { icon: Heart, title: "Morale and Trust", description: "Teams build confidence quickly when they execute clean strategies together." },
      ],
    },
    clientLogos: ["Thales", "BAE Systems", "ST Aerospace", "Dassault", "Bosch", "Sembcorp"],
    recentEvents: [
      { client: "Thales Singapore", event: "Tactical Laser Battle", pax: 140 },
      { client: "BAE Systems", event: "Engineering Team Laser Tag", pax: 80 },
      { client: "ST Aerospace", event: "Department Laser Battle", pax: 120 },
      { client: "Dassault Systemes", event: "Regional Laser Tag", pax: 60 },
      { client: "Bosch Singapore", event: "Cross-Team Laser Battle", pax: 100 },
      { client: "Sembcorp Industries", event: "Annual Laser Tag Event", pax: 200 },
    ],
    pricing: { startingPrice: "From $45", unit: "per pax", minimumPax: 10, duration: "3 hours", activityType: "hybrid" },
    packages: trafficLightPackages("From $45/pax", "Tag-tical Laser Tag", "#FFC400"),
    addOns: [
      { icon: "Shield", title: "Battlefield Upgrade", description: "Add more cover, tactical positions, and mission props for better game flow." },
      { icon: "ClipboardList", title: "Custom Mission Design", description: "Build rounds around your event theme, audience, or learning outcomes." },
      { icon: "Award", title: "Laser MVP Awards", description: "Recognise champions, top tacticians, and standout team communicators." },
      { icon: "Camera", title: "Gameplay Coverage", description: "Capture tactical pushes, winning moments, and team celebration shots." },
      { icon: "MapPin", title: "Arena Planning", description: "Configure halls, fields, or open spaces into cleaner laser battle zones." },
      { icon: "UtensilsCrossed", title: "Energy Break Catering", description: "Support longer sessions with drinks, snacks, or post-game bites." },
    ],
    outcomes: [
      { icon: "Target", title: "Sharper Strategic Execution", description: "Teams improve at planning routes, protecting roles, and committing to decisions." },
      { icon: "Users", title: "Stronger Squad Communication", description: "Success depends on coordination, updates, and quick trust in teammates." },
      { icon: "Zap", title: "Premium Competitive Energy", description: "The technology adds intensity without creating unnecessary physical strain." },
      { icon: "Heart", title: "Higher Group Confidence", description: "Participants feel more comfortable joining because the format is safe, structured, and easy to read." },
    ],
    miniGallery: { title: "Laser Tag Highlights", images: [{ src: heroAdventureChallenge, alt: "Tactical laser tag team battle" }, { src: heroTeamCelebration, alt: "Team celebrating laser tag victory" }, { src: teamBuildingOutdoor1, alt: "Outdoor laser tag moment" }] },
    hideOutcomes: false,
    hideMidCta: false,
    perfectForVariant: "flow",
    recentEventsHeadline: "Companies who've experienced our Laser Tag Battles",
  },

  "treasure-heist": {
    accentColor: "#FFD400",
    dividerVariant: "vault",
    hero: {
      title: "TREASURE HEIST",
      subtitle: "Team Strategy Adventure",
      tagline: "Inspired by Money Heist — assemble your crew, crack the defences, and steal the most gold before the clock runs out.",
      backgroundImage: treasureHeistHero,
    },
    overview: {
      description:
        "Taking inspiration from the global phenomenon Money Heist (La Casa de Papel), Treasure Heist is a fully facilitated team strategy adventure where crews plan and execute a gold heist against the pirates. Teams compete to steal the most gold by completing challenges, solving heist puzzles, and outmanoeuvring rival crews — while the defences get harder with each round. As the stakes rise, only the most coordinated and creative crew takes home the ultimate haul.",
      backgroundImage: treasureHeistHero,
    },
    features: [
      { icon: Gem, title: "Heist Theme", description: "A playful pirate storyline that keeps teams locked-in." },
      { icon: Puzzle, title: "Puzzles & Clues", description: "Solve challenges to uncover clues that lead to the treasure." },
      { icon: Users, title: "Team Strategy", description: "Plan, communicate, and adapt together under time pressure." },
    ],
    benefits: [
      { icon: Lightbulb, title: "Sharper Strategy", description: "Think ahead, prioritize, and make decisions as a team." },
      { icon: Heart, title: "Stronger Trust", description: "Build confidence and collaboration through shared wins." },
      { icon: Zap, title: "High Energy", description: "Fast-moving missions that keep everyone engaged." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      {
        quote:
          "We had to organize a last-minute teambuilding for 40 pax and Elluminate pulled it off in spectacular fashion — everyone had a blast.",
        author: "Darren Tey",
        company: "Lonza (Operations Manager)",
      },
      {
        quote:
          "Ever since our first session, we haven't stopped — departments across the company, from new hires to management, all enjoyed the activities.",
        author: "Darren Tey",
        company: "Lonza (Operations Manager)",
      },
      {
        quote: "Super accommodating and professional throughout — highly recommended.",
        author: "Arianti Amalina",
        company: "Madam Tussauds (Human Resource Officer)",
      },
      {
        quote:
          "Thank you for organizing our session on short notice — teams bonded quickly and the facilitators handled every detail with care.",
        author: "Arianti Amalina",
        company: "Madam Tussauds (Human Resource Officer)",
      },
      {
        quote:
          "A smooth, well-run experience from start to finish — the games were engaging and the energy stayed high.",
        author: "Farzanah Begum",
        company: "A*STAR SIMTech (Senior Officer)",
      },
      {
        quote:
          "Great facilitation and structure — it kept the group focused, moving, and having fun the whole time.",
        author: "Jurgen Carlson",
        company: "AMS AG (Senior Partner)",
      },
      {
        quote:
          "The heist storyline made it easy for everyone to jump in, collaborate, and compete in a friendly way.",
        author: "Jurgen Carlson",
        company: "AMS AG (Senior Partner)",
      },
    ],
    faqs: [],
    cta: { headline: "Ready for the Heist?", subtext: "Tell us your pax and venue — we’ll propose a Treasure Heist experience." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Treasure Heist Game Plan",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        {
          icon: ClipboardList,
          title: "Heist Briefing",
          description:
            "Teams learn the mission: steal the most gold from the pirate vaults before the clock runs out.",
        },
        {
          icon: Users,
          title: "Team Strategy Session",
          description:
            "Plan your approach, assign crew roles, and study the challenge map before the first raid.",
        },
        {
          icon: Puzzle,
          title: "Pirate Obstacle Course",
          description:
            "Navigate a series of challenges and puzzles that guard the pirates' treasure stash.",
        },
        {
          icon: Gem,
          title: "Steal the Gold",
          description:
            "Complete missions to earn heist tokens and protect your haul from rival crews.",
        },
        {
          icon: Gamepad2,
          title: "Final Heist Push",
          description:
            "Last chance to raid rival vaults and maximise your gold before the countdown hits zero.",
        },
        {
          icon: Trophy,
          title: "Vault Count & Victory",
          description:
            "All stolen gold counted, the richest crew crowned the ultimate heist champions.",
        },
      ],
    },
    perfectForFlow: defaultPerfectForFlow,
    clientLogos: ["Lonza", "A*STAR SIMTech", "Madam Tussauds", "AMS AG"],
    recentEvents: [
      { client: "Lonza", event: "Treasure Heist", pax: 120 },
      { client: "A*STAR SIMTech", event: "Treasure Heist", pax: 60 },
      { client: "Madam Tussauds", event: "Treasure Heist", pax: 80 },
      { client: "AMS AG", event: "Treasure Heist", pax: 45 },
      { client: "Lonza", event: "Team Strategy Day", pax: 150 },
      { client: "A*STAR SIMTech", event: "Heist Challenge", pax: 90 },
      { client: "Madam Tussauds", event: "Pirate Missions", pax: 110 },
      { client: "AMS AG", event: "Treasure Heist", pax: 70 },
      { client: "Lonza", event: "Heist Race", pax: 95 },
      { client: "A*STAR SIMTech", event: "Treasure Heist", pax: 130 },
      { client: "Madam Tussauds", event: "Team Heist", pax: 55 },
      { client: "AMS AG", event: "Strategy Heist", pax: 100 },
    ],
    pricing: { startingPrice: "From $45", unit: "per pax", minimumPax: 10, duration: "3 hours", activityType: "outdoor" },
    packages: trafficLightPackages("From $45/pax", "Treasure Heist", "#FFD400"),
    addOns: [
      { icon: "Palette", title: "Heist Theme Enhancement", description: "Full thematic décor including vault props, Money Heist masks, and dramatic mission briefing kits." },
      { icon: "ClipboardList", title: "Custom Mission Design", description: "Replace standard heist challenges with missions written around your company culture or event theme." },
      { icon: "Trophy", title: "Heist Champion Trophy", description: "Custom-engraved gold vault trophy for the team that pulls off the most successful heist." },
      { icon: "Camera", title: "Event Photography", description: "Professional photographer capturing all the drama, disguises, and victory moments." },
      { icon: "UtensilsCrossed", title: "Pirate Feast Catering", description: "Themed catering spread for a squad meal after the heist is over and the gold is counted." },
      { icon: "MapPin", title: "Venue Setup", description: "Full on-site setup and teardown including signage, mission stations, and themed props." },
    ],
    miniGallery: {
      title: "Treasure Heist Highlights",
      images: [
        { src: treasureHeistHero, alt: "Treasure Heist team-building session" },
        { src: treasureHeistGallery1, alt: "Outdoor team-building moment" },
        { src: treasureHeistMask, alt: "Treasure Heist mask key art" },
      ],
    },
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced our Treasure Heist",
  },

  // ==========================================
  // VIRTUAL TEAM BUILDING SERVICES
  // ==========================================

  "amazing-race-virtual": {
    accentColor: "#FFC400",
    dividerVariant: "raceTrack",
    hero: {
      title: "AMAZING RACE VIRTUAL",
      subtitle: "Virtual Team Building",
      tagline: "The World is waiting for you. Good Luck. Travel Safe and Go!",
      backgroundImage: virtualPlaceholderHero,
    },
    overview: {
      description: "Journey across the globe without leaving your seat! In this high-energy virtual adventure, teams race through countries, solve puzzles, and complete challenges inspired by destinations worldwide. Perfect for remote teams who want excitement, strategy, and bonding—all through Zoom. Requires only a laptop/desktop with camera and internet.",
      backgroundImage: virtualPlaceholderHero,
    },
    features: [
      { icon: Globe, title: "World Adventure", description: "Travel virtually to exciting destinations around the globe." },
      { icon: Puzzle, title: "Team Challenges", description: "Solve puzzles and complete missions together." },
      { icon: Trophy, title: "Competitive Racing", description: "Race against other teams to win." },
    ],
    benefits: [
      { icon: Users, title: "Team Bonding", description: "Connect remote colleagues through shared adventure." },
      { icon: Zap, title: "High Energy", description: "Keep engagement high throughout the session." },
      { icon: Globe, title: "Global Access", description: "Join from anywhere in the world." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Amazing energy! Our team felt like we traveled the world together.", author: "Sarah T.", company: "Remote Tech Co" },
      { quote: "Perfect for our distributed team—everyone was engaged from start to finish.", author: "Mike L.", company: "Global Solutions" },
      { quote: "The virtual format worked surprisingly well. Highly recommend!", author: "Lisa K.", company: "Digital Agency" },
      { quote: "Our team is still talking about the Amazing Race experience weeks later.", author: "James W.", company: "FinTech Startup" },
      { quote: "Great way to break the ice with new remote team members.", author: "Amanda C.", company: "Marketing Pro" },
      { quote: "The facilitators were excellent at keeping everyone involved.", author: "David R.", company: "Consulting Group" },
    ],
    faqs: [],
    cta: { headline: "Ready to Race Around the World?", subtext: "Book your virtual Amazing Race adventure today." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Virtual Adventure",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Monitor, title: "Welcome to the Race", description: "Join the Zoom session, meet your facilitator, and receive your global race briefing." },
        { icon: Users, title: "Team Formation", description: "Split into teams via breakout rooms and plan your opening checkpoint strategy." },
        { icon: Globe, title: "Global Checkpoint 1", description: "Race through your first destination with visual puzzles and cultural trivia." },
        { icon: Map, title: "Cross-Country Missions", description: "Navigate multiple themed checkpoints and solve challenges across virtual countries." },
        { icon: Zap, title: "Final Sprint", description: "Last destination with bonus points and a first-to-finish advantage on the line." },
        { icon: Trophy, title: "Race Results & Awards", description: "Final standings revealed, winning team crowned, and celebration debrief shared." },
      ],
    },
    perfectForFlow: defaultVirtualPerfectFor,
    recentEvents: [
      { client: "Google Singapore", event: "Virtual Amazing Race", pax: 150 },
      { client: "Microsoft", event: "Remote Team Day", pax: 200 },
      { client: "Shopee", event: "Virtual Bonding", pax: 180 },
      { client: "Grab", event: "Amazing Race Online", pax: 120 },
    ],
    pricing: { startingPrice: "From $25", unit: "per pax", minimumPax: 10, duration: "1.5-3 hours", activityType: "indoor" },
    packages: trafficLightPackages("From $25/pax", "Virtual Amazing Race", "#FFC400"),
    addOns: [
      { icon: "Gift", title: "Branded Welcome Pack", description: "Send physical kits with custom merchandise, snacks, and activity props to participants before the session." },
      { icon: "UtensilsCrossed", title: "Meals Delivery", description: "Coordinate food delivery to all participants so everyone eats together during breaks." },
      { icon: "Award", title: "Winner Prize Delivery", description: "Ship prizes directly to the winning team's homes after the event." },
      { icon: "Camera", title: "Session Recording", description: "Record the full session for HR archives, highlights reels, or those who missed out." },
      { icon: "Mic", title: "Custom Host Script", description: "Tailor the facilitator's script to include company values, event theme, or leadership messaging." },
      { icon: "ClipboardList", title: "Customised Challenges", description: "Replace or adapt challenges to reflect your industry, culture, or specific group dynamics." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced our Virtual Amazing Race",
  },

  "fit-in-your-team-virtual": {
    accentColor: "#8B5CF6",
    dividerVariant: "blueprint",
    hero: {
      title: "FIT IN YOUR TEAM",
      subtitle: "Virtual Team Building",
      tagline: "A Fun and Competitive Workout Teambuilding Activity made for Your Team to get Energized!",
      backgroundImage: virtualPlaceholderHero,
    },
    overview: {
      description: "Get your team moving with this high-energy virtual workout experience! Combining fitness challenges with team competition, Fit In Your Team promotes physical wellness, mental clarity, and social connection—all from the comfort of home. Perfect for teams looking to energize, bond, and prioritize wellbeing together via Zoom.",
      backgroundImage: virtualPlaceholderHero,
    },
    features: [
      { icon: Dumbbell, title: "Fitness Challenges", description: "Fun workout activities for all fitness levels." },
      { icon: Heart, title: "Wellness Focus", description: "Promote physical and mental wellbeing." },
      { icon: Trophy, title: "Team Competition", description: "Compete as teams for points and prizes." },
    ],
    benefits: [
      { icon: Activity, title: "Get Moving", description: "Break sedentary habits with fun movement." },
      { icon: Heart, title: "Boost Morale", description: "Energize your team with positive vibes." },
      { icon: Users, title: "Team Spirit", description: "Build camaraderie through shared challenges." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Our team loved the workout session—great for morale and health!", author: "Jennifer M.", company: "Health Corp" },
      { quote: "Perfect blend of fitness and fun. Everyone was laughing and sweating!", author: "Ryan P.", company: "Wellness Inc" },
      { quote: "A refreshing change from typical virtual meetings.", author: "Emily S.", company: "Active Agency" },
      { quote: "The instructors were motivating and inclusive of all fitness levels.", author: "Chris T.", company: "Sports Co" },
      { quote: "We've made this a monthly team tradition now!", author: "Nicole B.", company: "Fit Tech" },
      { quote: "Great energy and perfect for remote team engagement.", author: "Mark D.", company: "Digital Health" },
    ],
    faqs: [],
    cta: { headline: "Ready to Get Fit Together?", subtext: "Energize your team with a virtual workout experience." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Wellness Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Monitor, title: "Welcome & Equipment Check", description: "Join the session, confirm you have space to move, and meet your energy host." },
        { icon: Users, title: "Team Formation & Warm-Up", description: "Form teams via breakout rooms and kick off with a light mobility warm-up." },
        { icon: Dumbbell, title: "Cardio Challenge Round", description: "Fun fitness missions that get everyone moving and racking up team points." },
        { icon: Activity, title: "Strength & Coordination Games", description: "Team-based physical tasks that reward synchrony and collective effort." },
        { icon: Zap, title: "Final Fitness Showdown", description: "Last round with extra points for the most energetic and improved team." },
        { icon: Trophy, title: "Cool-Down & Recognition", description: "Team results shared, MVP moments called out, and a wellness debrief to close." },
      ],
    },
    perfectForFlow: defaultVirtualPerfectFor,
    recentEvents: [
      { client: "DBS Bank", event: "Fit In Your Team", pax: 200 },
      { client: "OCBC", event: "Virtual Wellness Day", pax: 150 },
      { client: "Singtel", event: "Team Fitness", pax: 180 },
      { client: "StarHub", event: "Fit In Your Team", pax: 100 },
    ],
    pricing: { startingPrice: "From $25", unit: "per pax", minimumPax: 10, duration: "1.5-3 hours", activityType: "indoor" },
    packages: trafficLightPackages("From $25/pax", "Fit In Your Team", "#8B5CF6"),
    addOns: [
      { icon: "Gift", title: "Branded Welcome Pack", description: "Send physical kits with custom merchandise, snacks, and activity props to participants before the session." },
      { icon: "UtensilsCrossed", title: "Meals Delivery", description: "Coordinate food delivery to all participants so everyone eats together during breaks." },
      { icon: "Award", title: "Winner Prize Delivery", description: "Ship prizes directly to the winning team's homes after the event." },
      { icon: "Camera", title: "Session Recording", description: "Record the full session for HR archives, highlights reels, or those who missed out." },
      { icon: "Mic", title: "Custom Host Script", description: "Tailor the facilitator's script to include company values, event theme, or leadership messaging." },
      { icon: "ClipboardList", title: "Customised Challenges", description: "Replace or adapt challenges to reflect your industry, culture, or specific group dynamics." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced Fit In Your Team",
  },

  "the-gameshow-experience-virtual": {
    accentColor: "#1F7CFF",
    dividerVariant: "spotlight",
    hero: {
      title: "GAMESHOW EXPERIENCE",
      subtitle: "Virtual Team Building",
      tagline: "6 in 1 Gameshows to play and challenge your colleagues",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579600/TheGameShow_VTB_4_weyhxy.png",
    },
    overview: {
      description: "Bring the excitement of TV gameshows to your virtual team event! With 6 different gameshow formats in one experience, teams compete through trivia, challenges, and hilarious moments. This high-energy virtual experience is perfect for large groups looking for entertainment and friendly competition via Zoom.",
      backgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579600/TheGameShow_VTB_4_weyhxy.png",
    },
    howItWorksImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579600/TheGameShow_VTB_7_swbfoo.png",
    addOnsImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579597/TheGameShow_VTB_11_ye3umr.png",
    testimonialBackgroundImage: "https://res.cloudinary.com/dw1q8nz8z/image/upload/f_auto,q_auto/v1774579596/TheGameShow_VTB_1_mbuxzv.png",
    features: [
      { icon: Gamepad2, title: "6 Gameshows", description: "Multiple formats keep things fresh and exciting." },
      { icon: Trophy, title: "Points Competition", description: "Teams compete for the highest score." },
      { icon: PartyPopper, title: "Entertainment", description: "Fun, laughter, and memorable moments." },
    ],
    benefits: [
      { icon: Sparkles, title: "High Energy", description: "Keep engagement sky-high throughout." },
      { icon: Users, title: "Inclusive Fun", description: "Everyone can participate regardless of skills." },
      { icon: Star, title: "Memorable", description: "Create lasting team memories." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Best virtual team event we've ever had! The gameshows were hilarious.", author: "Kevin L.", company: "Entertainment Inc" },
      { quote: "Our team was laughing the entire time. Highly recommend!", author: "Priya S.", company: "Media Group" },
      { quote: "Perfect for our year-end virtual celebration.", author: "Tom H.", company: "Creative Agency" },
      { quote: "The variety of games kept everyone engaged throughout.", author: "Rachel W.", company: "Gaming Co" },
      { quote: "Our remote team finally felt connected after this experience.", author: "Jason M.", company: "Tech Startup" },
      { quote: "The host was fantastic—professional yet fun!", author: "Linda C.", company: "Events Plus" },
    ],
    faqs: [],
    cta: { headline: "Ready for Gameshow Fun?", subtext: "Book your virtual gameshow experience today." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Gameshow Experience",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Monitor, title: "Welcome to the Studio", description: "Join the virtual studio, meet your host, and get the full gameshow rules explained." },
        { icon: Users, title: "Team Assignment", description: "Split into competing teams, pick team names, and submit your opening wager." },
        { icon: Gamepad2, title: "Gameshow Round 1", description: "Compete in the first format — trivia, physical challenge, or creative mission." },
        { icon: Star, title: "Rotating Formats", description: "Cycle through different gameshow styles, keeping scores tight and the energy high." },
        { icon: Zap, title: "Final Round: Double Down", description: "Last game with double points — any team can surge to take the lead." },
        { icon: Trophy, title: "Champion Crowning", description: "Scores tallied, winner announced, and everyone shares their standout moment." },
      ],
    },
    perfectForFlow: defaultVirtualPerfectFor,
    recentEvents: [
      { client: "Netflix", event: "Gameshow Experience", pax: 250 },
      { client: "Spotify", event: "Virtual Games Night", pax: 180 },
      { client: "TikTok", event: "Gameshow Fun", pax: 300 },
      { client: "Meta", event: "Team Gameshow", pax: 200 },
    ],
    pricing: { startingPrice: "From $25", unit: "per pax", minimumPax: 20, duration: "1.5-3 hours", activityType: "indoor" },
    packages: trafficLightPackages("From $25/pax", "Gameshow Experience", "#1F7CFF"),
    addOns: [
      { icon: "Gift", title: "Branded Welcome Pack", description: "Send physical kits with custom merchandise, snacks, and activity props to participants before the session." },
      { icon: "UtensilsCrossed", title: "Meals Delivery", description: "Coordinate food delivery to all participants so everyone eats together during breaks." },
      { icon: "Award", title: "Winner Prize Delivery", description: "Ship prizes directly to the winning team's homes after the event." },
      { icon: "Camera", title: "Session Recording", description: "Record the full session for HR archives, highlights reels, or those who missed out." },
      { icon: "Mic", title: "Custom Host Script", description: "Tailor the facilitator's script to include company values, event theme, or leadership messaging." },
      { icon: "ClipboardList", title: "Customised Challenges", description: "Replace or adapt challenges to reflect your industry, culture, or specific group dynamics." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced our Gameshow Experience",
  },

  "the-great-zodiac-hunt-virtual": {
    accentColor: "#EF4444",
    dividerVariant: "route",
    hero: {
      title: "GREAT ZODIAC HUNT",
      subtitle: "Virtual Team Building",
      tagline: "The Zodiac Animals have all escaped! It is up to you the Celestial Vanguards to get them all back!",
      backgroundImage: virtualPlaceholderHero,
    },
    overview: {
      description: "Celebrate Chinese New Year virtually with this themed team adventure! The 12 Zodiac animals have escaped and your team must work together to bring them back. Through puzzles, challenges, and cultural trivia, teams race to capture all the animals and restore harmony. Perfect for CNY celebrations via Zoom.",
      backgroundImage: virtualPlaceholderHero,
    },
    features: [
      { icon: Search, title: "Zodiac Hunt", description: "Track down all 12 escaped zodiac animals." },
      { icon: Puzzle, title: "Team Puzzles", description: "Solve challenges to capture each animal." },
      { icon: Flag, title: "CNY Theme", description: "Celebrate Chinese New Year with cultural elements." },
    ],
    benefits: [
      { icon: Users, title: "Team Unity", description: "Work together to complete the mission." },
      { icon: Sparkles, title: "Festive Fun", description: "Perfect for CNY celebrations." },
      { icon: Globe, title: "Cultural Learning", description: "Learn about zodiac traditions." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Perfect for our CNY virtual celebration! Everyone loved the theme.", author: "Ming L.", company: "Asian Markets" },
      { quote: "Great way to celebrate Chinese New Year with our global team.", author: "Wei C.", company: "International Corp" },
      { quote: "The zodiac storyline was creative and engaging.", author: "Hui T.", company: "Cultural Events" },
      { quote: "Our team had so much fun hunting the zodiac animals!", author: "Chen W.", company: "Festival Co" },
      { quote: "A unique and culturally meaningful team experience.", author: "Lin M.", company: "Heritage Group" },
      { quote: "The perfect blend of tradition and modern team building.", author: "Jing S.", company: "Lunar Ltd" },
    ],
    faqs: [],
    cta: { headline: "Ready for the Zodiac Hunt?", subtext: "Celebrate with your team in this CNY-themed adventure." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Zodiac Adventure",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Monitor, title: "Welcome to the Hunt", description: "Join the session, receive your Celestial Vanguard briefing, and learn the mission objectives." },
        { icon: Users, title: "Team Formation & Assignments", description: "Form squads and learn which zodiac animals your team is responsible for tracking down." },
        { icon: Search, title: "Zodiac Clue Challenges", description: "Solve cultural puzzles, trivia, and riddles themed around each escaped zodiac animal." },
        { icon: Flag, title: "Capture Missions", description: "Race through recovery tasks to secure zodiac animals before rival teams do." },
        { icon: Zap, title: "Final Reveal Round", description: "Last zodiac animals discovered with bonus points and a tie-breaking challenge." },
        { icon: Trophy, title: "Zodiac Restoration Ceremony", description: "Animals returned, scores tallied, and the top Vanguard team crowned." },
      ],
    },
    perfectForFlow: defaultVirtualPerfectFor,
    recentEvents: [
      { client: "HSBC", event: "Great Zodiac Hunt", pax: 200 },
      { client: "Standard Chartered", event: "CNY Celebration", pax: 150 },
      { client: "Bank of China", event: "Zodiac Hunt", pax: 180 },
      { client: "UOB", event: "Virtual CNY", pax: 120 },
    ],
    pricing: { startingPrice: "From $25", unit: "per pax", minimumPax: 10, duration: "1.5-3 hours", activityType: "indoor" },
    packages: trafficLightPackages("From $25/pax", "Great Zodiac Hunt", "#EF4444"),
    addOns: [
      { icon: "Gift", title: "Branded Welcome Pack", description: "Send physical kits with custom merchandise, snacks, and activity props to participants before the session." },
      { icon: "UtensilsCrossed", title: "Meals Delivery", description: "Coordinate food delivery to all participants so everyone eats together during breaks." },
      { icon: "Award", title: "Winner Prize Delivery", description: "Ship prizes directly to the winning team's homes after the event." },
      { icon: "Camera", title: "Session Recording", description: "Record the full session for HR archives, highlights reels, or those who missed out." },
      { icon: "Mic", title: "Custom Host Script", description: "Tailor the facilitator's script to include company values, event theme, or leadership messaging." },
      { icon: "ClipboardList", title: "Customised Challenges", description: "Replace or adapt challenges to reflect your industry, culture, or specific group dynamics." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced the Great Zodiac Hunt",
  },

  "the-nuclear-fallout-escape-room-virtual": {
    accentColor: "#26D07C",
    dividerVariant: "vault",
    hero: {
      title: "NUCLEAR FALLOUT ESCAPE ROOM",
      subtitle: "Virtual Team Building",
      tagline: "To save the world, your team needs to work together to stop the Nuclear Countdown.",
      backgroundImage: virtualPlaceholderHero,
    },
    overview: {
      description: "The clock is ticking! In this intense virtual escape room, teams must work together to stop a nuclear countdown. Communication, logic, and teamwork are crucial as you solve puzzles and crack codes under pressure. This adrenaline-pumping experience is perfect for teams who thrive on intellectual challenges via Zoom.",
      backgroundImage: virtualPlaceholderHero,
    },
    features: [
      { icon: Lock, title: "Escape Room", description: "Solve puzzles and crack codes under pressure." },
      { icon: Timer, title: "Countdown", description: "Race against the clock to save the world." },
      { icon: Brain, title: "Intellectual Challenge", description: "Test your logic and problem-solving skills." },
    ],
    benefits: [
      { icon: Users, title: "Deep Collaboration", description: "Success requires everyone's input." },
      { icon: Zap, title: "High Stakes", description: "Adrenaline-pumping excitement." },
      { icon: Target, title: "Problem Solving", description: "Sharpen critical thinking skills." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Intense, thrilling, and amazing for team communication!", author: "Alex K.", company: "Nuclear Solutions" },
      { quote: "Our team has never worked together so intensely. Great experience!", author: "Sara J.", company: "Energy Corp" },
      { quote: "The pressure of the countdown really brought out the best in us.", author: "Michael R.", company: "Defense Tech" },
      { quote: "Perfect for testing and improving team communication skills.", author: "Diana L.", company: "Security Inc" },
      { quote: "We solved it with 30 seconds left—what a rush!", author: "Peter H.", company: "Crisis Management" },
      { quote: "Highly engaging and mentally stimulating.", author: "Karen W.", company: "Think Tank" },
    ],
    faqs: [],
    cta: { headline: "Ready to Save the World?", subtext: "Can your team stop the nuclear countdown in time?" },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Escape Mission",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Monitor, title: "Emergency Broadcast", description: "Join the session and receive your crisis briefing — the nuclear countdown has already begun." },
        { icon: Users, title: "Team Roles Assigned", description: "Form your specialist team: engineer, analyst, decoder, and field lead." },
        { icon: Brain, title: "Puzzle Phase 1: Contain the Leak", description: "Solve the first set of logic and code-breaking challenges to slow the countdown." },
        { icon: Lock, title: "Puzzle Phase 2: Crack the Override", description: "Deeper puzzles requiring cross-team collaboration to unlock the next stage." },
        { icon: Timer, title: "Final Sequence: Stop the Countdown", description: "Race to pull the correct codes and override the nuclear system before time runs out." },
        { icon: Trophy, title: "Debrief & Outcome Reveal", description: "Team result revealed, scores shared, and the best puzzle-solvers recognised." },
      ],
    },
    perfectForFlow: defaultVirtualPerfectFor,
    recentEvents: [
      { client: "Deloitte", event: "Nuclear Fallout", pax: 100 },
      { client: "PwC", event: "Escape Room Challenge", pax: 80 },
      { client: "EY", event: "Virtual Escape", pax: 90 },
      { client: "KPMG", event: "Nuclear Fallout", pax: 70 },
    ],
    pricing: { startingPrice: "From $25", unit: "per pax", minimumPax: 10, duration: "1.5-3 hours", activityType: "indoor" },
    packages: trafficLightPackages("From $25/pax", "Nuclear Fallout Escape Room", "#26D07C"),
    addOns: [
      { icon: "Gift", title: "Branded Welcome Pack", description: "Send physical kits with custom merchandise, snacks, and activity props to participants before the session." },
      { icon: "UtensilsCrossed", title: "Meals Delivery", description: "Coordinate food delivery to all participants so everyone eats together during breaks." },
      { icon: "Award", title: "Winner Prize Delivery", description: "Ship prizes directly to the winning team's homes after the event." },
      { icon: "Camera", title: "Session Recording", description: "Record the full session for HR archives, highlights reels, or those who missed out." },
      { icon: "Mic", title: "Custom Host Script", description: "Tailor the facilitator's script to include company values, event theme, or leadership messaging." },
      { icon: "ClipboardList", title: "Customised Challenges", description: "Replace or adapt challenges to reflect your industry, culture, or specific group dynamics." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced Nuclear Fallout Escape Room",
  },

  "the-patriot-act-virtual": {
    accentColor: "#DC2626",
    dividerVariant: "arrow",
    hero: {
      title: "THE PATRIOT ACT",
      subtitle: "Virtual Team Building",
      tagline: "Salute to our Great Nation by playing activities mixed of the old and new of Singapore",
      backgroundImage: virtualPlaceholderHero,
    },
    overview: {
      description: "Celebrate Singapore's heritage with this patriotic virtual team experience! Teams compete through activities that blend old-school Singapore nostalgia with modern challenges. From traditional games to national trivia, this experience is perfect for National Day celebrations or any time you want to celebrate Singapore's spirit via Zoom.",
      backgroundImage: virtualPlaceholderHero,
    },
    features: [
      { icon: Flag, title: "National Pride", description: "Celebrate Singapore's heritage and culture." },
      { icon: Gamepad2, title: "Mixed Activities", description: "Old-school games meet modern challenges." },
      { icon: Trophy, title: "Team Competition", description: "Compete for patriotic glory." },
    ],
    benefits: [
      { icon: Heart, title: "National Spirit", description: "Foster love for Singapore." },
      { icon: Users, title: "Team Bonding", description: "Unite through shared cultural experiences." },
      { icon: PartyPopper, title: "Celebration", description: "Perfect for National Day events." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Perfect for our National Day celebration! Very meaningful.", author: "Ahmad B.", company: "Singapore Ltd" },
      { quote: "Loved the mix of nostalgia and modern games.", author: "Mei Ling T.", company: "Heritage Corp" },
      { quote: "Our team learned so much about Singapore while having fun!", author: "Raj S.", company: "National Events" },
      { quote: "The old-school games brought back so many memories.", author: "Susan L.", company: "Memory Lane" },
      { quote: "Great way to celebrate our nation with remote colleagues.", author: "Daniel C.", company: "Patriot Inc" },
      { quote: "The facilitators were engaging and knowledgeable about SG culture.", author: "Farah M.", company: "Cultural Events" },
    ],
    faqs: [],
    cta: { headline: "Ready to Celebrate Singapore?", subtext: "Unite your team with patriotic pride and fun." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Patriotic Experience",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Monitor, title: "Welcome, Citizen", description: "Join the session and receive your National Service briefing from the Patriot Act command." },
        { icon: Users, title: "Team & Unit Formation", description: "Split into competing patriotic units and receive your mission package for the day." },
        { icon: Gamepad2, title: "Old-School Singapore Challenges", description: "Classic kampong-inspired games and nostalgic SG knowledge rounds." },
        { icon: Flag, title: "Modern Singapore Missions", description: "Digital, visual, and trivia challenges showcasing Singapore today." },
        { icon: Zap, title: "National Day Championship", description: "Final all-out competition with a patriotic grand challenge deciding the winner." },
        { icon: Trophy, title: "Ceremony & Recognition", description: "Scores tallied, top unit honoured, and the team shares their favourite Singapore memory." },
      ],
    },
    perfectForFlow: defaultVirtualPerfectFor,
    recentEvents: [
      { client: "SAF", event: "The Patriot Act", pax: 400 },
      { client: "SPF", event: "National Day Special", pax: 300 },
      { client: "MOE", event: "Patriot Act Virtual", pax: 350 },
      { client: "MOM", event: "Team Singapore", pax: 200 },
    ],
    pricing: { startingPrice: "From $25", unit: "per pax", minimumPax: 15, duration: "1.5-3 hours", activityType: "indoor" },
    packages: trafficLightPackages("From $25/pax", "The Patriot Act", "#DC2626"),
    addOns: [
      { icon: "Gift", title: "Branded Welcome Pack", description: "Send physical kits with custom merchandise, snacks, and activity props to participants before the session." },
      { icon: "UtensilsCrossed", title: "Meals Delivery", description: "Coordinate food delivery to all participants so everyone eats together during breaks." },
      { icon: "Award", title: "Winner Prize Delivery", description: "Ship prizes directly to the winning team's homes after the event." },
      { icon: "Camera", title: "Session Recording", description: "Record the full session for HR archives, highlights reels, or those who missed out." },
      { icon: "Mic", title: "Custom Host Script", description: "Tailor the facilitator's script to include company values, event theme, or leadership messaging." },
      { icon: "ClipboardList", title: "Customised Challenges", description: "Replace or adapt challenges to reflect your industry, culture, or specific group dynamics." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced The Patriot Act",
  },

  "tomb-raider-king-treasure-hunt-virtual": {
    accentColor: "#D97706",
    dividerVariant: "vault",
    hero: {
      title: "TOMB RAIDER KING",
      subtitle: "Virtual Team Building",
      tagline: "The Grand Treasure Hunt Game made to push your team to the limit!",
      backgroundImage: virtualPlaceholderHero,
    },
    overview: {
      description: "Embark on an epic virtual treasure hunt across 5 ancient tombs! Teams race to collect the most gold by solving puzzles, overcoming obstacles, and raiding tombs before competitors. This adventure-packed experience combines strategy, speed, and teamwork for an unforgettable virtual journey via Zoom.",
      backgroundImage: virtualPlaceholderHero,
    },
    features: [
      { icon: Crown, title: "Treasure Hunting", description: "Raid 5 tombs for gold and glory." },
      { icon: Map, title: "Epic Adventure", description: "Journey through ancient mysteries." },
      { icon: Trophy, title: "Competition", description: "Most gold wins the crown." },
    ],
    benefits: [
      { icon: Target, title: "Strategic Thinking", description: "Plan your tomb-raiding approach." },
      { icon: Zap, title: "High Energy", description: "Non-stop action and excitement." },
      { icon: Users, title: "Team Coordination", description: "Success requires full team effort." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Felt like a real adventure movie! Our team loved every moment.", author: "Indiana J.", company: "Adventure Corp" },
      { quote: "The tomb raiding theme was so immersive and exciting.", author: "Lara C.", company: "Explorer Inc" },
      { quote: "Great competitive energy—we barely beat our rivals!", author: "Nathan D.", company: "Treasure Hunters" },
      { quote: "Perfect blend of puzzles and action.", author: "Elena F.", company: "Ancient Discoveries" },
      { quote: "Our team couldn't stop talking about the gold we collected!", author: "Marcus A.", company: "Fortune Seekers" },
      { quote: "Highly engaging from start to finish.", author: "Alicia V.", company: "Mystery Co" },
    ],
    faqs: [],
    cta: { headline: "Ready to Raid the Tombs?", subtext: "Lead your team to treasure and glory." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Treasure Hunt",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Monitor, title: "Explorer Briefing", description: "Join the session and receive your mission: unearth the most treasure before rival teams." },
        { icon: Users, title: "Team Formation & Artefact Map", description: "Form squads and study the artefact map to plan your exploration route." },
        { icon: Map, title: "Chamber 1 Discovery", description: "Solve the first set of clues to unlock the opening tomb and claim its gold." },
        { icon: Puzzle, title: "Deep Exploration Missions", description: "Navigate through progressively harder chambers with more valuable treasures inside." },
        { icon: Crown, title: "The King's Vault", description: "Final and most valuable chamber with clues that only surface under maximum pressure." },
        { icon: Trophy, title: "Treasure Count & Crown Reveal", description: "Total haul calculated, the top team crowned the Tomb Raider King." },
      ],
    },
    perfectForFlow: defaultVirtualPerfectFor,
    recentEvents: [
      { client: "Apple", event: "Tomb Raider King", pax: 400 },
      { client: "Google", event: "Virtual Treasure Hunt", pax: 350 },
      { client: "Amazon", event: "Tomb Raider", pax: 300 },
      { client: "Microsoft", event: "Treasure Adventure", pax: 250 },
    ],
    pricing: { startingPrice: "From $25", unit: "per pax", minimumPax: 15, duration: "1.5-3 hours", activityType: "indoor" },
    packages: trafficLightPackages("From $25/pax", "Tomb Raider King", "#D97706"),
    addOns: [
      { icon: "Gift", title: "Branded Welcome Pack", description: "Send physical kits with custom merchandise, snacks, and activity props to participants before the session." },
      { icon: "UtensilsCrossed", title: "Meals Delivery", description: "Coordinate food delivery to all participants so everyone eats together during breaks." },
      { icon: "Award", title: "Winner Prize Delivery", description: "Ship prizes directly to the winning team's homes after the event." },
      { icon: "Camera", title: "Session Recording", description: "Record the full session for HR archives, highlights reels, or those who missed out." },
      { icon: "Mic", title: "Custom Host Script", description: "Tailor the facilitator's script to include company values, event theme, or leadership messaging." },
      { icon: "ClipboardList", title: "Customised Challenges", description: "Replace or adapt challenges to reflect your industry, culture, or specific group dynamics." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced Tomb Raider King",
  },

  "grand-christmas-delivery": {
    accentColor: "#DC2626",
    accentColorSecondary: "#26D07C",
    dividerVariant: "confetti",
    hero: {
      title: "THE GRAND CHRISTMAS DELIVERY",
      subtitle: "Virtual Team Building",
      tagline: "Santa's Village is under attack! You are the Elite Elf Force that will save Christmas!",
      backgroundImage: virtualPlaceholderHero,
    },
    overview: {
      description: "Santa needs your help! In this festive virtual adventure, teams become the Elite Elf Force on a mission to save Christmas. Battle through party games, team challenges, and boss battles to deliver presents and defeat the forces threatening the holiday season. The team that delivers the most presents wins! Perfect for year-end celebrations via Zoom.",
      backgroundImage: virtualPlaceholderHero,
    },
    features: [
      { icon: Gift, title: "Christmas Mission", description: "Save Christmas as the Elite Elf Force." },
      { icon: Swords, title: "Boss Battles", description: "Defeat enemies threatening the holidays." },
      { icon: Trophy, title: "Delivery Competition", description: "Deliver the most presents to win." },
    ],
    benefits: [
      { icon: PartyPopper, title: "Festive Fun", description: "Perfect year-end celebration." },
      { icon: Users, title: "Team Spirit", description: "Unite to save Christmas together." },
      { icon: Sparkles, title: "Holiday Magic", description: "Immersive Christmas atmosphere." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "The best virtual Christmas party we've ever had!", author: "Nick C.", company: "North Pole Inc" },
      { quote: "Our team loved being elves on a mission to save Christmas!", author: "Holly B.", company: "Festive Corp" },
      { quote: "The boss battles were hilarious and challenging.", author: "Rudolph R.", company: "Reindeer Ltd" },
      { quote: "Perfect way to end the year with our remote team.", author: "Ivy G.", company: "Winter Wonderland" },
      { quote: "Everyone got into the Christmas spirit—even our Grinches!", author: "Jingle B.", company: "Holiday Events" },
      { quote: "The present delivery competition was so much fun!", author: "Carol S.", company: "Yuletide Co" },
    ],
    faqs: [],
    cta: { headline: "Ready to Save Christmas?", subtext: "Join the Elite Elf Force and deliver holiday magic." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Christmas Mission",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Monitor, title: "Elf Force Briefing", description: "Join Santa's virtual command centre and receive your mission targets and delivery routes." },
        { icon: Users, title: "Team Assignment", description: "Form your Elf Force squads and choose your sleigh route priority." },
        { icon: PartyPopper, title: "Party Challenges & Gift Collection", description: "Festive games that earn presents for your team's delivery count." },
        { icon: Swords, title: "Boss Battle Phase", description: "Defend your presents against Christmas villains trying to steal your haul." },
        { icon: Zap, title: "Final Delivery Sprint", description: "Last push to maximise deliveries before the Christmas deadline closes." },
        { icon: Trophy, title: "Results & Nice List Reveal", description: "Final deliveries counted, top Elf Force team crowned, and festive debrief to close." },
      ],
    },
    perfectForFlow: defaultVirtualPerfectFor,
    recentEvents: [
      { client: "Coca-Cola", event: "Grand Christmas Delivery", pax: 400 },
      { client: "Starbucks", event: "Holiday Team Event", pax: 300 },
      { client: "Unilever", event: "Christmas Celebration", pax: 350 },
      { client: "P&G", event: "Elf Force Mission", pax: 250 },
    ],
    pricing: { startingPrice: "From $25", unit: "per pax", minimumPax: 15, duration: "1.5-3 hours", activityType: "indoor" },
    packages: trafficLightPackages("From $25/pax", "Grand Christmas Delivery", "#DC2626"),
    addOns: [
      { icon: "Gift", title: "Branded Welcome Pack", description: "Send physical kits with custom merchandise, snacks, and activity props to participants before the session." },
      { icon: "UtensilsCrossed", title: "Meals Delivery", description: "Coordinate food delivery to all participants so everyone eats together during breaks." },
      { icon: "Award", title: "Winner Prize Delivery", description: "Ship prizes directly to the winning team's homes after the event." },
      { icon: "Camera", title: "Session Recording", description: "Record the full session for HR archives, highlights reels, or those who missed out." },
      { icon: "Mic", title: "Custom Host Script", description: "Tailor the facilitator's script to include company values, event theme, or leadership messaging." },
      { icon: "ClipboardList", title: "Customised Challenges", description: "Replace or adapt challenges to reflect your industry, culture, or specific group dynamics." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced The Grand Christmas Delivery",
  },

  // ================== RETREATS ==================

  "local-retreats": {
    accentColor: "#10B981",
    dividerVariant: "route",
    hero: {
      title: "LOCAL RETREATS",
      subtitle: "Retreat",
      tagline: "Singapore may be small, but not all of it has been explored!",
      backgroundImage: overseasRetreatHero,
    },
    overview: {
      description: "Not every great retreat requires a passport. Singapore's hotel scene delivers everything from affordable urban escapes to some of the most storied and architecturally celebrated properties in Asia — and we know exactly which ones perform for team retreats. We offer three distinct tiers: Staycation for whole-staff appreciation and casual connection, Heritage for a culturally rich stay in Singapore's most celebrated historical hotels, and Luxury for recognition-grade experiences that senior leaders and top earners genuinely value. You choose the tier; we handle room blocks, activities, dining, and every detail in between.",
      backgroundImage: overseasRetreatHero,
    },
    features: [
      { icon: Building, title: "Curated Venues", description: "Handpicked hotels across Singapore." },
      { icon: Wine, title: "Meals Included", description: "Breakfast, lunch, and dinner options." },
      { icon: Users, title: "Team Activities", description: "Bonding experiences tailored to your group." },
      { icon: Sparkles, title: "Special Add-ons", description: "Spa, recreation, entertainment." },
    ],
    benefits: [
      { icon: Heart, title: "Deep Bonding", description: "Extended time together builds connections." },
      { icon: Zap, title: "Renewed Energy", description: "Return refreshed and motivated." },
      { icon: MapPin, title: "Convenient Location", description: "No passport, no long flights." },
      { icon: Star, title: "Memorable Experiences", description: "Adventures your team will cherish." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "The heritage hotel retreat was a unique experience our team loved.", author: "Rachel L.", company: "DBS Bank" },
      { quote: "Perfect way to reward our team without the hassle of overseas travel.", author: "Marcus T.", company: "Grab Holdings" },
      { quote: "The luxury tier was absolutely worth it—5-star treatment all the way.", author: "Jennifer W.", company: "Google Singapore" },
      { quote: "Our staycation retreat was affordable yet memorable.", author: "David C.", company: "Shopee" },
      { quote: "Great balance of relaxation and team activities.", author: "Amanda G.", company: "Meta Singapore" },
      { quote: "Elluminate handled everything seamlessly.", author: "Kevin L.", company: "Microsoft Singapore" },
    ],
    faqs: [
      { question: "What's the difference between the three tiers?", answer: "Staycation ($200/night) offers affordable stays, Heritage ($300/night) features historical hotels, and Luxury ($500/night) provides 4-5 star experiences." },
      { question: "What's included in each package?", answer: "All tiers include hotel accommodations, meals & refreshments, recreation/entertainment, and special add-ons." },
      { question: "How far in advance should we book?", answer: "We recommend booking 4-6 weeks in advance for best availability, especially for Heritage hotels." },
      { question: "Can you customize the itinerary?", answer: "Absolutely! We tailor activities and timing to your team's preferences." },
    ],
    cta: { headline: "Ready for a Local Escape?", subtext: "Discover Singapore's hidden gems with your team." },
    destinationsGrid: {
      sectionTitle: "POPULAR VENUES",
      sectionSubtitle: "Where Will Your Team Stay?",
      destinations: [
        {
          country: "Sentosa Island",
          image: "/images/destinations/sentosa-island.jpg",
          tagline: "Island vibes just minutes from the CBD. Beach clubs, resort pools, and a world-class escape.",
          activities: ["Beach Activities", "Resort Pool", "Team Games", "Sunset Dinner"],
        },
        {
          country: "Marina Bay",
          image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
          tagline: "Singapore's iconic skyline as your backdrop. Luxury stays with unmatched city views.",
          activities: ["Skyline Tour", "Fine Dining", "Infinity Pool", "Art Walk"],
        },
        {
          country: "Heritage District",
          image: "/images/destinations/singapore-heritage-district.jpg",
          tagline: "Stay in buildings steeped in history. Shophouse charm meets modern luxury.",
          activities: ["Heritage Walk", "Cultural Tour", "Local Cuisine", "Art Gallery"],
        },
        {
          country: "East Coast",
          image: "/images/destinations/east-coast-park.jpg",
          tagline: "Seaside breezes, cycling paths, and the best seafood in Singapore.",
          activities: ["Cycling", "Seafood Dinner", "Beach Games", "Kayaking"],
        },
        {
          country: "Orchard / City Centre",
          image: "/images/destinations/orchard-road-singapore.jpg",
          tagline: "Urban luxury at its finest. Shopping, dining, and five-star comfort in the heart of the city.",
          activities: ["City Exploration", "Shopping Trail", "Rooftop Bar", "Spa Day"],
        },
        {
          country: "Changi & Jewel",
          image: "/images/destinations/jewel-changi-rain-vortex.jpg",
          tagline: "Nature-meets-architecture retreats near the world's most celebrated airport.",
          activities: ["Jewel Tour", "Nature Walk", "Team Challenge", "Garden Dining"],
        },
      ],
    },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Retreat Planning Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Phone, title: "Consultation & Discovery", description: "Share your team size, goals, timeline, and retreat objectives with us." },
        { icon: Building, title: "Tier Selection", description: "Choose between Staycation, Heritage, or Luxury based on your budget and experience preference." },
        { icon: MapPin, title: "Venue Matching", description: "We handpick the best hotel options within your chosen tier and present them for your review." },
        { icon: ClipboardList, title: "Itinerary Design", description: "Craft a day-by-day schedule blending team activities, meals, and personal downtime." },
        { icon: CalendarDays, title: "Logistics & Coordination", description: "We handle all bookings, transport, and on-site setup so you just show up." },
        { icon: Star, title: "Retreat Execution", description: "Arrive, relax, and let us manage the full flow from check-in to the final experience." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Every Team",
      itemsPerRow: 4,
      items: [
        { icon: Trophy, title: "Top Performer Rewards", description: "Celebrate your best achievers." },
        { icon: Users, title: "Team Bonding", description: "Strengthen connections in a relaxed setting." },
        { icon: Target, title: "Strategy Retreats", description: "Plan the year ahead together." },
        { icon: PartyPopper, title: "Milestone Celebrations", description: "Mark company achievements." },
        { icon: Handshake, title: "Leadership Off-sites", description: "Executive planning sessions." },
        { icon: GraduationCap, title: "Training Programs", description: "Combine learning with leisure." },
        { icon: Heart, title: "Wellness Retreats", description: "Focus on team wellbeing." },
        { icon: Sparkles, title: "Year-End Celebrations", description: "End the year on a high note." },
      ],
    },
    recentEvents: [
      { client: "DBS Bank", event: "Heritage Retreat", pax: 50 },
      { client: "Singtel", event: "Luxury Staycation", pax: 80 },
      { client: "OCBC", event: "Team Retreat", pax: 60 },
      { client: "Standard Chartered", event: "Leadership Off-site", pax: 30 },
    ],
    pricing: { startingPrice: "Get a Quote", unit: "per pax/night", minimumPax: 10, duration: "1-3 nights", activityType: "indoor" },
    packages: [
      {
        color: "#26D07C",
        title: "Staycation",
        description: "Relax, Recharge, Reconnect. The everyday hustle disappears the moment your team checks in. Staycation retreats are designed for whole-staff appreciation — a rewarding overnight experience at a well-appointed city hotel without the complexity of overseas travel. Expect a comfortable room, a shared team dinner, pool and facilities access, and one guided team activity that does the bonding heavy-lifting. Partner hotels include Novotel Clarke Quay, Village Hotel, Park Hotel, Holiday Inn and Mercure.",
        features: ["Hotel room night", "Team dinner", "Pool & facilities access", "1 team bonding activity", "Breakfast included"],
      },
      {
        color: "#FFC400",
        title: "Heritage",
        description: "A Story Worth Staying In. Not all hotels are built equal — some carry over a century of history in their walls. Heritage retreats use Singapore's most celebrated historical properties as the backdrop, which means the venue itself becomes a talking point before a single activity begins. Properties like Goodwood Park Hotel (built 1900), Fort Canning Hotel (a Napoleonic-era barracks), Capitol Kempinski (a 1929 landmark), and Raffles Singapore carry names that signal prestige and create events people remember. Ideal for leadership off-sites, milestone celebrations, and occasions where the visual calibre of the setting matters.",
        features: ["Heritage hotel stay", "Premium dining experience", "Optional heritage tour", "Cultural team activity", "Curated itinerary"],
      },
      {
        color: "#FF4F4F",
        title: "Luxury",
        description: "Recognition-Grade. The Luxury tier is not for everyone — and that is precisely the point. These are the retreats you book when the message you want to send is: you have earned this. Properties in this tier include Capella Sentosa, Marina Bay Sands, The Fullerton Bay, Andaz Singapore, and Shangri-La — Singapore's most aspirational addresses. Expect immaculate rooms, private dining experiences, spa treatment credits, concierge service, and exclusive facilities that most of your team will never have experienced elsewhere. Best for top performer reward trips, board strategy off-sites, and senior leadership retreats.",
        features: ["5-star luxury accommodation", "Private dining experience", "Spa treatment credit", "Concierge service", "Premium team programme"],
      },
    ],
    addOns: [
      { icon: "UtensilsCrossed", title: "Enhanced Catering", description: "Premium dining upgrades including themed dinners, champagne toasts, and bespoke menus." },
      { icon: "Dumbbell", title: "Spa & Wellness", description: "In-hotel or off-site spa sessions, yoga, or guided wellness activities for your team." },
      { icon: "Camera", title: "Photo & Video Coverage", description: "Professional photographer and videographer to document the retreat experience." },
      { icon: "Gamepad2", title: "Team Building Activities", description: "Add a guided team activity like Amazing Race or Escape Room within the retreat itinerary." },
      { icon: "MapPin", title: "Optional Day Trip", description: "Guided excursion to a local attraction, heritage site, or adventure experience near the hotel." },
      { icon: "Gift", title: "Team Appreciation Gifts", description: "Branded welcome bags or personalised mementos for every participant to take home." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced Local Retreats",
  },

  // ================== PROFILING & TRAINING ==================

  "mbti": {
    accentColor: "#8B5CF6",
    dividerVariant: "blueprint",
    hero: {
      title: "MBTI PERSONALITY PROFILING",
      subtitle: "Training",
      tagline: "Personality has the power to uplift, depress, curse and to bless.",
      backgroundImage: virtualPlaceholderHero,
    },
    overview: {
      description: "Looking to find out more about who you are and how you work with others? What's your Type? breaks down your entire personality to figure out what drives you and which types you are able to get along with! This activity is designed as a team building event, where teams will discover the frameworks of the mind, energy, nature and tactics within us. By pushing values such as exploration, awareness and insightfulness, we aim to give your group a reflective event filled with diverse growth!",
      backgroundImage: virtualPlaceholderHero,
    },
    features: [
      { icon: Brain, title: "Personality Discovery", description: "Understand what drives you and others." },
      { icon: Users, title: "Team Compatibility", description: "Learn which types work best together." },
      { icon: Lightbulb, title: "Self-Awareness", description: "Gain insights into your own behavior." },
      { icon: Puzzle, title: "Digital Profiles", description: "Each participant receives their MBTI profile." },
    ],
    benefits: [
      { icon: Target, title: "Better Communication", description: "Understand how to communicate with different types." },
      { icon: Heart, title: "Improved Relationships", description: "Build stronger team connections." },
      { icon: Zap, title: "Enhanced Productivity", description: "Leverage personality strengths." },
      { icon: Star, title: "Personal Growth", description: "Develop self-awareness and empathy." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Eye-opening experience! Now I understand why my teammates think differently.", author: "Sarah L.", company: "DBS Bank" },
      { quote: "The MBTI session helped our team communicate more effectively.", author: "Marcus T.", company: "Grab Holdings" },
      { quote: "Fascinating to learn about the four frameworks of personality.", author: "Jennifer W.", company: "Google Singapore" },
      { quote: "Our team dynamics improved significantly after this session.", author: "David C.", company: "Shopee" },
      { quote: "The digital profiles were a great takeaway for everyone.", author: "Amanda G.", company: "Meta Singapore" },
      { quote: "Highly recommended for any team looking to improve collaboration.", author: "Kevin L.", company: "Microsoft Singapore" },
    ],
    faqs: [
      { question: "What is MBTI?", answer: "MBTI (Myers-Briggs Type Indicator) is a personality framework that categorizes people into 16 types based on four dimensions: Mind, Energy, Nature, and Tactics." },
      { question: "What's included in the package?", answer: "The package includes professional facilitation, individual MBTI assessments, digital profiles for each participant, and team analysis." },
      { question: "How long is the session?", answer: "Sessions typically run 2-4 hours depending on group size and depth of analysis required." },
      { question: "Can this be done virtually?", answer: "Yes! We offer both in-person and virtual MBTI sessions via Zoom or Teams." },
    ],
    cta: { headline: "Ready to Discover Your Type?", subtext: "Unlock the power of personality understanding." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your MBTI Workshop Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Pre-Session Assessment", description: "Participants complete the MBTI questionnaire online before the workshop day." },
        { icon: Lightbulb, title: "Results Reveal", description: "Each person discovers their type in a guided, judgment-free environment." },
        { icon: Brain, title: "Type Exploration", description: "Explore the four dimensions (Mind, Energy, Nature, Tactics) and what each means in practice." },
        { icon: Users, title: "Team Type Mapping", description: "Visualise the team's combined personality landscape and what it means for how you work together." },
        { icon: Handshake, title: "Communication Workshop", description: "Practise adapting your style when working with different types in real scenarios." },
        { icon: Target, title: "Personal Action Plan", description: "Each participant leaves with three concrete ways to apply their MBTI insights at work." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Understanding Your Team",
      itemsPerRow: 4,
      items: [
        { icon: UserPlus, title: "New Teams", description: "Help new team members understand each other." },
        { icon: Building, title: "Department Alignment", description: "Improve cross-functional collaboration." },
        { icon: GraduationCap, title: "Leadership Development", description: "Develop emotional intelligence in leaders." },
        { icon: Handshake, title: "Conflict Resolution", description: "Understand different perspectives." },
        { icon: Target, title: "Career Development", description: "Guide personal and professional growth." },
        { icon: Users, title: "Team Optimization", description: "Build balanced, high-performing teams." },
        { icon: Briefcase, title: "Hiring & Recruitment", description: "Inform team composition decisions." },
        { icon: Sparkles, title: "Culture Building", description: "Create understanding and empathy." },
      ],
    },
    recentEvents: [
      { client: "DBS Bank", event: "MBTI Workshop", pax: 60 },
      { client: "Google", event: "Personality Profiling", pax: 80 },
      { client: "Grab", event: "Team MBTI", pax: 50 },
      { client: "Shopee", event: "MBTI Session", pax: 70 },
    ],
    pricing: { startingPrice: "$250", unit: "per pax", minimumPax: 10, duration: "2-4 hours", activityType: "indoor" },
    packages: trafficLightPackages("$250/pax", "MBTI Profiling", "#8B5CF6"),
    addOns: [
      { icon: "FileText", title: "Digital MBTI Profiles", description: "Full personality reports emailed to every participant for ongoing reference and self-reflection." },
      { icon: "BarChart3", title: "Team Analysis Report", description: "A comprehensive report mapping your team's type distribution and its collaboration dynamics." },
      { icon: "Video", title: "Virtual Delivery", description: "Facilitated remotely via Zoom or Teams for distributed or hybrid teams." },
      { icon: "Users", title: "Follow-up Session", description: "A 30-day check-in session to reinforce insights and answer questions that came up post-workshop." },
      { icon: "GraduationCap", title: "Manager Coaching Brief", description: "A private debrief for team leaders on how to manage and develop each MBTI type on their team." },
      { icon: "Palette", title: "Team Type Poster", description: "A custom illustrated poster showing your entire team's MBTI types to display in the office." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced MBTI Profiling",
  },

  "disc": {
    accentColor: "#3B82F6",
    dividerVariant: "blueprint",
    hero: {
      title: "DISC ASSESSMENT",
      subtitle: "Training",
      tagline: "The biggest communication problem is that we do not listen to understand. We only listen to reply.",
      backgroundImage: virtualPlaceholderHero,
    },
    overview: {
      description: "Are you compatible with others? What's your personality type? We will help you break down your entire core personality and figure out what makes you, well you. Since everyone is special, we believe this exercise will help with self-awareness and tell you about your specialty. This activity should be done with team members, where teams will find out each member's mind, energy, and nature.",
      backgroundImage: virtualPlaceholderHero,
    },
    features: [
      { icon: Brain, title: "Core Personality", description: "Discover what makes you unique." },
      { icon: Users, title: "Team Compatibility", description: "Understand how you work with others." },
      { icon: Target, title: "Conflict Resolution", description: "Learn productive ways to handle disagreements." },
      { icon: Puzzle, title: "Digital Profiles", description: "Each participant receives their DiSC profile." },
    ],
    benefits: [
      { icon: Lightbulb, title: "Self-Awareness", description: "The first step toward constructive progress." },
      { icon: Handshake, title: "Better Conflict Handling", description: "Turn conflict into constructive exercises." },
      { icon: Building, title: "Effective Management", description: "Lead with deeper employee connections." },
      { icon: Heart, title: "Judgment-Free Training", description: "DiSC levels the playing field." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "DISC helped our team understand why we communicate differently.", author: "Rachel L.", company: "DBS Bank" },
      { quote: "The conflict resolution insights were incredibly valuable.", author: "Marcus T.", company: "Grab Holdings" },
      { quote: "Our managers are now more effective at connecting with their teams.", author: "Jennifer W.", company: "Google Singapore" },
      { quote: "A must for any organization focused on communication.", author: "David C.", company: "Shopee" },
      { quote: "The judgment-free approach made everyone comfortable.", author: "Amanda G.", company: "Meta Singapore" },
      { quote: "Practical insights we could apply immediately.", author: "Kevin L.", company: "Microsoft Singapore" },
    ],
    faqs: [
      { question: "What is DISC?", answer: "DISC is a behavior assessment tool that measures Dominance, Influence, Steadiness, and Conscientiousness—helping people understand their communication style." },
      { question: "How is DISC different from MBTI?", answer: "DISC focuses on observable behavior and communication styles, while MBTI explores cognitive preferences. Both are valuable for different purposes." },
      { question: "What's included in the package?", answer: "Professional facilitation, individual DiSC assessments, digital profiles, and team analysis." },
      { question: "How long is the session?", answer: "Sessions typically run 2-4 hours depending on group size." },
    ],
    cta: { headline: "Ready to Improve Communication?", subtext: "Discover the power of understanding behavioral styles." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your DiSC Workshop Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Pre-Session DISC Questionnaire", description: "Participants complete their behavioural assessment online before the workshop." },
        { icon: Lightbulb, title: "Profile Reveal & Explanation", description: "Each participant receives their DiSC style (D, i, S, or C) in a safe, non-judgmental setting." },
        { icon: Brain, title: "Behavioural Style Exploration", description: "Explore how each style thinks, communicates, and responds under stress and pressure." },
        { icon: Users, title: "Team Compatibility Mapping", description: "See how your team's combined styles create strengths and friction points in real working situations." },
        { icon: Handshake, title: "Conflict Resolution Practice", description: "Apply DiSC insights to real scenarios and practise adaptive communication with your team." },
        { icon: Target, title: "Personal Commitment Cards", description: "Each person selects one behaviour to improve and shares it with the team as a commitment." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Communication Excellence",
      itemsPerRow: 4,
      items: [
        { icon: Users, title: "Team Communication", description: "Improve how your team talks and listens." },
        { icon: Building, title: "Manager Training", description: "Develop leadership communication skills." },
        { icon: Handshake, title: "Conflict Resolution", description: "Build tools for handling disagreements." },
        { icon: UserPlus, title: "New Hire Integration", description: "Accelerate team cohesion." },
        { icon: Target, title: "Sales Teams", description: "Adapt communication to client styles." },
        { icon: GraduationCap, title: "Leadership Programs", description: "Develop emotional intelligence." },
        { icon: Briefcase, title: "Cross-Team Collaboration", description: "Bridge departmental communication gaps." },
        { icon: Sparkles, title: "Customer Service", description: "Better understand customer needs." },
      ],
    },
    recentEvents: [
      { client: "Singtel", event: "DISC Workshop", pax: 80 },
      { client: "OCBC", event: "Communication Training", pax: 60 },
      { client: "Standard Chartered", event: "DISC Assessment", pax: 50 },
      { client: "Deloitte", event: "Team DISC", pax: 70 },
    ],
    pricing: { startingPrice: "$250", unit: "per pax", minimumPax: 10, duration: "2-4 hours", activityType: "indoor" },
    packages: trafficLightPackages("$250/pax", "DISC Assessment", "#3B82F6"),
    addOns: [
      { icon: "FileText", title: "Digital DiSC Profiles", description: "Full individual DiSC reports emailed to every participant after the workshop." },
      { icon: "BarChart3", title: "Team Analysis Report", description: "An overview of your team's combined DiSC landscape and what it means for day-to-day collaboration." },
      { icon: "Video", title: "Virtual Delivery", description: "Fully facilitated via Zoom or Teams for remote and hybrid workforces." },
      { icon: "Users", title: "Follow-up Session", description: "A 30-day reinforcement session to embed insights and address real workplace scenarios." },
      { icon: "GraduationCap", title: "Manager Communication Guide", description: "A customised guide for each manager on how to communicate effectively with each style on their team." },
      { icon: "Puzzle", title: "Conflict Scenario Workshop", description: "A practical follow-up using real conflict case studies to apply DiSC thinking in challenging situations." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced DISC Assessment",
  },

  "ocean": {
    accentColor: "#14B8A6",
    dividerVariant: "blueprint",
    hero: {
      title: "O.C.E.A.N PROFILING",
      subtitle: "Training",
      tagline: "All great changes into Order is preceded always by Chaos.",
      backgroundImage: virtualPlaceholderHero,
    },
    overview: {
      description: "Rated as one of the top most accurate personality tests in the world! OCEAN Big Five are the domains that represent the basic structure behind all individual personality traits. By diving in deeper, this will allow your team to identify predictive behaviors for real-life scenarios! Gain insights into different office environment situations and how various personalities deal with them.",
      backgroundImage: virtualPlaceholderHero,
    },
    features: [
      { icon: Brain, title: "Scientific Accuracy", description: "One of the most validated personality models." },
      { icon: Target, title: "Predictive Behaviors", description: "Identify how people act in real scenarios." },
      { icon: Users, title: "Office Dynamics", description: "Understand workplace personality interactions." },
      { icon: Puzzle, title: "Digital Profiles", description: "Each participant receives their OCEAN profile." },
    ],
    benefits: [
      { icon: Lightbulb, title: "Deep Insights", description: "Understand the five fundamental traits." },
      { icon: Heart, title: "Better Relationships", description: "Navigate personality differences effectively." },
      { icon: Zap, title: "Improved Performance", description: "Leverage natural strengths." },
      { icon: Star, title: "Evidence-Based", description: "Backed by decades of research." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "The most comprehensive personality assessment we've done.", author: "Sarah L.", company: "DBS Bank" },
      { quote: "OCEAN gave us predictive insights we couldn't get elsewhere.", author: "Marcus T.", company: "Grab Holdings" },
      { quote: "The five traits framework is incredibly practical.", author: "Jennifer W.", company: "Google Singapore" },
      { quote: "Helped us understand why certain team dynamics exist.", author: "David C.", company: "Shopee" },
      { quote: "Backed by science—we trust the results.", author: "Amanda G.", company: "Meta Singapore" },
      { quote: "Great for building emotionally intelligent teams.", author: "Kevin L.", company: "Microsoft Singapore" },
    ],
    faqs: [
      { question: "What is OCEAN?", answer: "OCEAN (also known as the Big Five) measures Openness, Conscientiousness, Extroversion, Agreeableness, and Neuroticism—the five fundamental personality traits." },
      { question: "Why is OCEAN considered highly accurate?", answer: "OCEAN is backed by decades of psychological research and is considered one of the most scientifically validated personality models." },
      { question: "What's included in the package?", answer: "Professional facilitation, individual OCEAN assessments, digital profiles, and team analysis." },
      { question: "How does OCEAN differ from MBTI?", answer: "OCEAN measures traits on a spectrum (high to low), while MBTI categorizes into distinct types. OCEAN is more predictive of behavior." },
    ],
    cta: { headline: "Ready to Explore the Big Five?", subtext: "Unlock scientifically-validated personality insights." },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your OCEAN Workshop Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Pre-Workshop OCEAN Assessment", description: "Complete the validated Big Five questionnaire before the session." },
        { icon: Lightbulb, title: "Results Reveal", description: "Each participant sees their OCEAN profile scores across all five personality dimensions." },
        { icon: Brain, title: "Trait Exploration", description: "Deep-dive into what Openness, Conscientiousness, Extroversion, Agreeableness, and Neuroticism mean." },
        { icon: Users, title: "Team Landscape Analysis", description: "See where the group clusters and what the distribution means for how your team collaborates." },
        { icon: Target, title: "Workplace Scenario Application", description: "Map OCEAN traits to real team situations, communication styles, and hiring decisions." },
        { icon: CheckCircle, title: "Individual Insight & Action", description: "Each participant builds a short personal development note based on their unique profile." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Data-Driven Insights",
      itemsPerRow: 4,
      items: [
        { icon: Target, title: "Hiring Decisions", description: "Use evidence-based insights for recruitment." },
        { icon: Building, title: "Team Composition", description: "Build balanced teams with complementary traits." },
        { icon: GraduationCap, title: "Leadership Development", description: "Identify and develop high-potential leaders." },
        { icon: Users, title: "Conflict Prediction", description: "Anticipate and prevent team conflicts." },
        { icon: Briefcase, title: "Role Fit Analysis", description: "Match people to roles they'll thrive in." },
        { icon: Handshake, title: "Client Matching", description: "Pair account managers with compatible clients." },
        { icon: Sparkles, title: "Culture Alignment", description: "Assess cultural fit for new hires." },
        { icon: Heart, title: "Wellbeing Programs", description: "Tailor support based on personality needs." },
      ],
    },
    recentEvents: [
      { client: "McKinsey", event: "OCEAN Profiling", pax: 40 },
      { client: "BCG", event: "Big Five Assessment", pax: 50 },
      { client: "Bain", event: "Personality Workshop", pax: 35 },
      { client: "Accenture", event: "OCEAN Training", pax: 60 },
    ],
    pricing: { startingPrice: "$250", unit: "per pax", minimumPax: 10, duration: "2-4 hours", activityType: "indoor" },
    packages: trafficLightPackages("$250/pax", "OCEAN Profiling", "#14B8A6"),
    addOns: [
      { icon: "FileText", title: "Digital OCEAN Profiles", description: "Full Big Five personality reports delivered digitally to all participants post-workshop." },
      { icon: "BarChart3", title: "Team Analysis Report", description: "Aggregate team OCEAN profile showing collective strengths, risk areas, and collaboration patterns." },
      { icon: "Video", title: "Virtual Delivery", description: "Online delivery via Zoom or Teams for geographically dispersed teams." },
      { icon: "Users", title: "Follow-up Session", description: "30-day reinforcement session to revisit insights and connect OCEAN traits to real work outcomes." },
      { icon: "Briefcase", title: "Role-Fit Mapping Session", description: "A deep-dive session exploring how each person's OCEAN profile aligns with their current role demands." },
      { icon: "GraduationCap", title: "Manager Insight Brief", description: "A confidential briefing for team leads on how OCEAN traits show up across their direct reports." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've experienced OCEAN Profiling",
  },

  // ============================================
  // MASS TALKS
  // ============================================
  "mass-talks": {
    accentColor: "#F59E0B",
    dividerVariant: "blueprint",
    hero: {
      title: "MASS TALKS",
      subtitle: "Training",
      tagline: "Inspire Hundreds, Impact Thousands",
      backgroundImage: summitsHero,
    },
    overview: {
      description: "Transform your large-scale gatherings into unforgettable moments of inspiration and learning. Our Mass Talks bring together captivating speakers, engaging content, and professional production to deliver powerful messages that resonate with audiences of any size. Whether it's a company-wide town hall, industry conference keynote, or motivational assembly, we craft experiences that inform, inspire, and ignite action across your entire organization.",
      backgroundImage: summitsHero,
    },
    features: [
      { icon: Mic, title: "Professional Speakers", description: "Access our network of industry experts and motivational speakers." },
      { icon: Users, title: "Large Audience Engagement", description: "Interactive elements designed for hundreds of participants." },
      { icon: Video, title: "Full AV Production", description: "Professional sound, lighting, and visual presentations." },
      { icon: Sparkles, title: "Customized Content", description: "Tailored messaging aligned with your company values." },
    ],
    benefits: [
      { icon: Target, title: "Unified Messaging", description: "Deliver consistent messaging across your entire organization." },
      { icon: Zap, title: "Instant Impact", description: "Create memorable moments that spark immediate action." },
      { icon: Heart, title: "Cultural Reinforcement", description: "Strengthen company culture and shared values." },
      { icon: Trophy, title: "Inspire Excellence", description: "Motivate teams to reach new heights of performance." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "The speaker absolutely captivated our 500+ audience. The energy in the room was electric!", author: "HR Director", company: "Multinational Bank" },
      { quote: "Professional production quality that elevated our annual conference to new heights.", author: "Events Manager", company: "Tech Corporation" },
      { quote: "Our teams left feeling inspired and aligned. Best investment we've made in employee engagement.", author: "CEO", company: "Retail Chain" },
    ],
    faqs: [
      { question: "What audience size can you accommodate?", answer: "We specialize in events from 100 to 5,000+ participants, with full AV support for any venue size." },
      { question: "Can you provide speakers or do we need our own?", answer: "Both options available! We have a network of professional speakers or can coach your internal leaders for maximum impact." },
      { question: "What topics can Mass Talks cover?", answer: "From motivation and leadership to industry trends and change management - we customize content to your needs." },
      { question: "Do you handle venue and logistics?", answer: "Yes, we offer end-to-end event management including venue sourcing, AV setup, and on-site coordination." },
    ],
    cta: { headline: "Book Your Mass Talk", subtext: "Inspire your entire organization" },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "From Concept to Standing Ovation",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Phone, title: "Discovery Call", description: "We understand your objectives, audience profile, and the key messages you want to land." },
        { icon: Mic, title: "Speaker Selection", description: "Choose from our network of industry experts or we'll coach your internal speakers to shine." },
        { icon: PenTool, title: "Content Development", description: "Craft compelling narratives, slides, and supporting materials tailored to your audience." },
        { icon: Volume2, title: "Rehearsal & Tech Check", description: "Full run-through at the venue with AV setup confirmed and speaker walk-throughs completed." },
        { icon: Sparkles, title: "Live Delivery", description: "Professional execution with full AV support and facilitated audience engagement." },
        { icon: ClipboardList, title: "Post-Event Debrief", description: "Collect participant feedback, share impact highlights, and plan any follow-up actions." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Every Large-Scale Occasion",
      itemsPerRow: 4,
      items: [
        { icon: Building, title: "Annual Town Halls", description: "Unite your entire company with inspiring messages." },
        { icon: GraduationCap, title: "Training Conferences", description: "Educate large groups efficiently and memorably." },
        { icon: Rocket, title: "Product Launches", description: "Generate excitement across all departments." },
        { icon: Users, title: "Company Milestones", description: "Celebrate achievements with the whole team." },
        { icon: Target, title: "Strategic Kickoffs", description: "Align everyone on new directions and goals." },
        { icon: Heart, title: "Culture Events", description: "Reinforce values and build shared identity." },
        { icon: Award, title: "Recognition Ceremonies", description: "Honor achievements on a grand scale." },
        { icon: Sparkles, title: "Motivational Sessions", description: "Energize and inspire your workforce." },
      ],
    },
    recentEvents: [
      { client: "DBS Bank", event: "Annual Town Hall", pax: 2000 },
      { client: "Singtel", event: "Leadership Conference", pax: 500 },
      { client: "NTUC", event: "Staff Appreciation Day", pax: 1500 },
      { client: "Grab Singapore", event: "Company Kickoff", pax: 800 },
    ],
    pricing: { startingPrice: "$5,000", unit: "per session", minimumPax: 100, duration: "1-3 hours", activityType: "indoor" },
    packages: trafficLightPackages("$5,000", "Mass Talks", "#F59E0B"),
    addOns: [
      { icon: "Mic", title: "Celebrity Speaker", description: "Elevate the event with a renowned industry leader, athlete, or motivational personality." },
      { icon: "Video", title: "Live Streaming", description: "Broadcast to remote employees or overseas offices with professional multi-camera streaming." },
      { icon: "Camera", title: "Event Recording", description: "Full HD recording for replay, internal comms, and future onboarding use." },
      { icon: "Gift", title: "Attendee Kits", description: "Branded notebooks, pens, and takeaway materials to reinforce key messages after the event." },
      { icon: "ClipboardList", title: "Post-Event Content Package", description: "Speaker slides, key takeaways summary, and a highlight reel delivered within 5 business days." },
      { icon: "GraduationCap", title: "Speaker Coaching Session", description: "Pre-event coaching for internal speakers on delivery, stage presence, and messaging clarity." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Organizations we've inspired",
  },

  // ============================================
  // WORKSHOPS
  // ============================================
  "workshops": {
    accentColor: "#EC4899",
    dividerVariant: "blueprint",
    hero: {
      title: "WORKSHOPS",
      subtitle: "Training",
      tagline: "Learn by Doing, Grow by Practicing",
      backgroundImage: leadershipOffsiteHero,
    },
    overview: {
      description: "Our interactive workshops go beyond passive learning to create immersive skill-building experiences. With hands-on activities, real-world scenarios, and expert facilitation, participants don't just learn concepts - they practice and internalize them. From communication and leadership to creativity and problem-solving, our workshops transform knowledge into actionable skills that drive immediate results in the workplace.",
      backgroundImage: leadershipOffsiteHero,
    },
    features: [
      { icon: PenTool, title: "Hands-On Learning", description: "Interactive exercises that reinforce concepts through practice." },
      { icon: Users, title: "Small Group Focus", description: "Optimal group sizes for maximum participation and feedback." },
      { icon: Target, title: "Practical Skills", description: "Walk away with immediately applicable techniques." },
      { icon: GraduationCap, title: "Expert Facilitators", description: "Industry professionals who bring real-world experience." },
    ],
    benefits: [
      { icon: Zap, title: "Immediate Application", description: "Skills that can be used the very next day at work." },
      { icon: Brain, title: "Deep Understanding", description: "Practice-based learning creates lasting retention." },
      { icon: Users, title: "Team Bonding", description: "Shared learning experiences strengthen team connections." },
      { icon: Rocket, title: "Performance Boost", description: "Measurable improvements in key competencies." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "The workshop format was perfect - we actually practiced the techniques rather than just hearing about them.", author: "Team Lead", company: "Consulting Firm" },
      { quote: "Our team's presentation skills improved dramatically after just one session.", author: "L&D Manager", company: "Insurance Company" },
      { quote: "Interactive, engaging, and immediately useful. This is how training should be done.", author: "Department Head", company: "Manufacturing" },
    ],
    faqs: [
      { question: "What topics do your workshops cover?", answer: "Communication, leadership, creativity, problem-solving, presentation skills, time management, and more. We also create custom workshops for specific needs." },
      { question: "What's the ideal group size?", answer: "15-30 participants is optimal for interactive learning, but we can adapt formats for groups of 10-50." },
      { question: "How long are the workshops?", answer: "Standard workshops run 3-4 hours. Half-day and full-day intensive options are also available." },
      { question: "Can workshops be customized for our industry?", answer: "Absolutely! We tailor scenarios, examples, and exercises to your specific industry context." },
    ],
    cta: { headline: "Book Your Workshop", subtext: "Transform knowledge into skills" },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "The Workshop Experience",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Needs Assessment", description: "We identify specific skills gaps and learning objectives for your team." },
        { icon: PenTool, title: "Custom Workshop Design", description: "Content tailored to your industry, real challenges, and group size." },
        { icon: Sparkles, title: "Warm-Up Activity", description: "An engaging opener that sets the tone and gets participants ready to learn." },
        { icon: Users, title: "Skill Building Modules", description: "Interactive exercises, role-plays, and group activities for active, hands-on learning." },
        { icon: Brain, title: "Real-World Application", description: "Case studies and live practice grounded in your team's actual workplace context." },
        { icon: Target, title: "Personal Action Plan", description: "Each participant commits to three actions they will take in the next 30 days." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Skill Development Needs",
      itemsPerRow: 4,
      items: [
        { icon: Mic, title: "Presentation Skills", description: "Build confidence and clarity in public speaking." },
        { icon: Users, title: "Team Communication", description: "Improve collaboration and reduce misunderstandings." },
        { icon: Brain, title: "Creative Thinking", description: "Unlock innovation and fresh perspectives." },
        { icon: Target, title: "Goal Setting", description: "Learn frameworks for achieving objectives." },
        { icon: Clock, title: "Time Management", description: "Master productivity and prioritization." },
        { icon: Heart, title: "Emotional Intelligence", description: "Develop self-awareness and empathy." },
        { icon: Puzzle, title: "Problem Solving", description: "Structured approaches to complex challenges." },
        { icon: Handshake, title: "Negotiation Skills", description: "Win-win strategies for business success." },
      ],
    },
    recentEvents: [
      { client: "Shopee", event: "Leadership Workshop", pax: 25 },
      { client: "Lazada", event: "Communication Skills", pax: 30 },
      { client: "Sea Group", event: "Creative Thinking", pax: 20 },
      { client: "Carousell", event: "Presentation Mastery", pax: 25 },
    ],
    pricing: { startingPrice: "$150", unit: "per pax", minimumPax: 15, duration: "3-4 hours", activityType: "indoor" },
    packages: trafficLightPackages("$150/pax", "Workshops", "#EC4899"),
    addOns: [
      { icon: "FileText", title: "Workbook & Materials", description: "Custom-designed participant workbooks with exercises, templates, and reference guides." },
      { icon: "Video", title: "Session Recording", description: "Full video recording of the workshop for absent teammates or future training references." },
      { icon: "Users", title: "Follow-up Coaching", description: "1-on-1 coaching sessions for key participants to reinforce and apply their new skills." },
      { icon: "Award", title: "Certification", description: "Official certificates of completion signed by the facilitator and issued same day." },
      { icon: "Palette", title: "Custom Case Studies", description: "Workshop scenarios rewritten to reflect actual situations from your industry or company context." },
      { icon: "CalendarDays", title: "6-Week Practice Programme", description: "Post-workshop email series with weekly micro-challenges to build lasting skill habits over 6 weeks." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Teams we've trained",
  },

  // ============================================
  // YOUTH CAMPS
  // ============================================
  "youth-camps": {
    accentColor: "#22C55E",
    dividerVariant: "route",
    hero: {
      title: "YOUTH CAMPS",
      subtitle: "Training",
      tagline: "Building Tomorrow's Leaders Today",
      backgroundImage: familyFunDayHero,
    },
    overview: {
      description: "Our Youth Camps combine adventure, learning, and personal growth to create transformative experiences for young people. Designed for schools, CCAs, and youth organizations, these programs develop leadership, teamwork, and resilience through carefully structured activities and challenges. From day camps to multi-day adventures, we create safe yet challenging environments where youth discover their potential and forge lasting friendships.",
      backgroundImage: familyFunDayHero,
    },
    features: [
      { icon: Flag, title: "Adventure Activities", description: "Exciting challenges that push comfort zones safely." },
      { icon: Users, title: "Team Challenges", description: "Group activities that build cooperation and communication." },
      { icon: GraduationCap, title: "Leadership Training", description: "Practical lessons in leading and following." },
      { icon: Heart, title: "Character Building", description: "Values-based programming for personal growth." },
    ],
    benefits: [
      { icon: Shield, title: "Safe Environment", description: "Trained facilitators and comprehensive safety protocols." },
      { icon: Sparkles, title: "Memorable Experiences", description: "Adventures they'll talk about for years." },
      { icon: Target, title: "Skill Development", description: "Real skills for school and life success." },
      { icon: Users, title: "Stronger Bonds", description: "Deep friendships formed through shared challenges." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Our students came back transformed. The leadership skills they developed were evident immediately.", author: "Principal", company: "Secondary School" },
      { quote: "Safe, fun, and genuinely impactful. The facilitators were amazing with the students.", author: "CCA Teacher", company: "Junior College" },
      { quote: "The camp exceeded all expectations. Students were engaged from start to finish.", author: "Year Head", company: "Primary School" },
    ],
    faqs: [
      { question: "What age groups do you cater to?", answer: "We design programs for Primary (8-12), Secondary (13-16), and JC/Poly students (17-19), with age-appropriate activities for each." },
      { question: "What safety measures are in place?", answer: "All facilitators are first-aid certified, we maintain strict supervision ratios, conduct thorough risk assessments, and have emergency protocols for all activities." },
      { question: "Can camps be customized for specific outcomes?", answer: "Yes! We work with schools to align camp objectives with curriculum goals, CCE outcomes, or specific developmental needs." },
      { question: "What's the typical camp duration?", answer: "We offer day camps (6-8 hours), overnight camps (2D1N), and extended camps (3D2N to 5D4N)." },
    ],
    cta: { headline: "Plan Your Youth Camp", subtext: "Invest in the next generation" },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "The Camp Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Phone, title: "School Consultation", description: "Understand your learning objectives, student profiles, and logistical requirements." },
        { icon: ClipboardList, title: "Programme Design", description: "Create age-appropriate activities aligned with CCE goals and camp outcomes." },
        { icon: MapPin, title: "Venue & Logistics", description: "Secure the campsite, arrange transport, and prepare all necessary equipment." },
        { icon: Flag, title: "Camp Kick-Off", description: "Trained facilitators welcome students and launch the first session with energy and purpose." },
        { icon: Activity, title: "Activity Execution", description: "Guided team challenges, reflection activities, and adventure experiences through the programme." },
        { icon: Target, title: "Debrief & Post-Camp Report", description: "Student feedback collected and learning outcomes documented for teacher review." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Youth Development Needs",
      itemsPerRow: 4,
      items: [
        { icon: GraduationCap, title: "School Cohort Camps", description: "Annual camps for entire levels or cohorts." },
        { icon: Users, title: "CCA Bonding", description: "Strengthen club and team unity." },
        { icon: Flag, title: "Leadership Training", description: "Develop student leaders and prefects." },
        { icon: Target, title: "Orientation Camps", description: "Welcome new students with memorable experiences." },
        { icon: Heart, title: "Character Development", description: "Build resilience, integrity, and responsibility." },
        { icon: Sparkles, title: "Graduation Celebrations", description: "End-of-year memorable experiences." },
        { icon: Mountain, title: "Adventure Programs", description: "Push limits in safe, structured environments." },
        { icon: Users, title: "Class Bonding", description: "Build stronger classroom communities." },
      ],
    },
    recentEvents: [
      { client: "Raffles Institution", event: "Sec 1 Orientation Camp", pax: 400 },
      { client: "Hwa Chong Institution", event: "Leadership Camp", pax: 150 },
      { client: "ACS Independent", event: "CCA Bonding Camp", pax: 80 },
      { client: "CHIJ St Nicholas", event: "Cohort Camp", pax: 300 },
    ],
    pricing: { startingPrice: "$80", unit: "per student", minimumPax: 30, duration: "1-5 days", activityType: "outdoor" },
    packages: trafficLightPackages("$80/student", "Youth Camps", "#22C55E"),
    addOns: [
      { icon: "Moon", title: "Overnight Stay", description: "Extended multi-day programmes with supervised campsite accommodation included." },
      { icon: "Utensils", title: "Catering", description: "Full meal and snack catering throughout the camp — breakfast, lunch, dinner, and supper." },
      { icon: "Bus", title: "Transport", description: "Chartered bus pickup and drop-off from your school directly to the campsite and back." },
      { icon: "Camera", title: "Photo & Video", description: "Professional documentation of every camp milestone for keepsake albums and school yearbooks." },
      { icon: "Puzzle", title: "Custom Activity Design", description: "Bespoke challenge stations, games, and reflection activities built around your school's values or theme." },
      { icon: "Flag", title: "Leadership Roles Pack", description: "Structured leader and sub-leader assignments with role cards, briefings, and debrief guides." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Schools we've partnered with",
  },

  // ============================================
  // CORPORATE DAYS
  // ============================================
  "corporate-days": {
    accentColor: "#6366F1",
    dividerVariant: "blueprint",
    hero: {
      title: "CORPORATE DAYS",
      subtitle: "Training",
      tagline: "Where Work Meets Play, Teams Thrive",
      backgroundImage: corporateCarnivalHero,
    },
    overview: {
      description: "Transform ordinary workdays into extraordinary team experiences with our Corporate Days program. These specially designed full-day or half-day events blend professional development with engaging activities, creating the perfect balance of learning and fun. Whether you're celebrating milestones, reinforcing company culture, or simply giving your team a well-deserved break, Corporate Days deliver memorable experiences that boost morale and strengthen team bonds.",
      backgroundImage: corporateCarnivalHero,
    },
    features: [
      { icon: CalendarDays, title: "Flexible Formats", description: "Half-day, full-day, or custom durations to fit your schedule." },
      { icon: Puzzle, title: "Mixed Activities", description: "Blend of games, workshops, and social experiences." },
      { icon: Building, title: "On-site or Off-site", description: "At your office, external venues, or unique locations." },
      { icon: Sparkles, title: "Themed Experiences", description: "Custom themes aligned with company events or seasons." },
    ],
    benefits: [
      { icon: Heart, title: "Boosted Morale", description: "Show appreciation and energize your workforce." },
      { icon: Users, title: "Stronger Connections", description: "Build relationships across departments and levels." },
      { icon: Zap, title: "Renewed Energy", description: "Return to work refreshed and motivated." },
      { icon: Target, title: "Aligned Culture", description: "Reinforce company values through shared experiences." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Best company event we've ever had! The team is still talking about it weeks later.", author: "Office Manager", company: "Advertising Agency" },
      { quote: "Perfect mix of fun and team bonding. Everyone participated and had a great time.", author: "HR Manager", company: "Financial Services" },
      { quote: "Exceeded expectations. The customization to our company culture made it special.", author: "CEO", company: "Tech Startup" },
    ],
    faqs: [
      { question: "What's included in a Corporate Day?", answer: "Typically includes facilitated activities, games, meals/refreshments, and can incorporate workshops, competitions, or celebrations based on your objectives." },
      { question: "Can it be held at our office?", answer: "Absolutely! We can transform your office space, use your function rooms, or recommend external venues for a change of scenery." },
      { question: "How far in advance should we book?", answer: "We recommend 3-4 weeks minimum for custom programs, though we can accommodate shorter timelines for standard packages." },
      { question: "What's the ideal group size?", answer: "Corporate Days work great for teams of 20-200. For larger groups, we design multi-track programs." },
    ],
    cta: { headline: "Plan Your Corporate Day", subtext: "Give your team an experience they'll remember" },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "Your Corporate Day Journey",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: Phone, title: "Brief & Discover", description: "Understand your team, objectives, occasion, and any cultural moments to celebrate." },
        { icon: PenTool, title: "Design & Propose", description: "Curate a custom day programme with the right balance of activities and social time." },
        { icon: ClipboardList, title: "Confirm & Customise", description: "Finalise the agenda, branding needs, dietary requirements, and any special requests." },
        { icon: CalendarDays, title: "Plan & Coordinate", description: "Handle all venue, logistics, catering, and materials to ensure everything is ready on the day." },
        { icon: Sparkles, title: "Execute & Facilitate", description: "Professional facilitators deliver a seamless, energetic, and well-paced experience." },
        { icon: PartyPopper, title: "Wrap-Up & Celebration", description: "Close the day with recognition, team photos, and a memorable finishing moment." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "Every Corporate Occasion",
      itemsPerRow: 4,
      items: [
        { icon: PartyPopper, title: "Company Celebrations", description: "Anniversaries, achievements, and milestones." },
        { icon: Users, title: "Department Bonding", description: "Strengthen internal team connections." },
        { icon: Rocket, title: "Quarterly Kickoffs", description: "Energize teams for new initiatives." },
        { icon: Heart, title: "Employee Appreciation", description: "Show gratitude to your workforce." },
        { icon: Award, title: "Year-End Parties", description: "Celebrate successes and look forward." },
        { icon: Handshake, title: "New Team Integration", description: "Welcome and integrate new hires." },
        { icon: Target, title: "Strategy Days", description: "Combine planning with team activities." },
        { icon: Sparkles, title: "Festive Celebrations", description: "CNY, Christmas, Deepavali themed events." },
      ],
    },
    recentEvents: [
      { client: "Facebook Singapore", event: "Team Appreciation Day", pax: 150 },
      { client: "ByteDance", event: "Quarterly Bonding", pax: 100 },
      { client: "LinkedIn", event: "Year-End Celebration", pax: 80 },
      { client: "Twitter Singapore", event: "Department Day Out", pax: 50 },
    ],
    pricing: { startingPrice: "$100", unit: "per pax", minimumPax: 20, duration: "4-8 hours", activityType: "hybrid" },
    packages: trafficLightPackages("$100/pax", "Corporate Days", "#6366F1"),
    addOns: [
      { icon: "Utensils", title: "Premium Catering", description: "Elevated lunch, themed snack stations, and custom beverage packages throughout the day." },
      { icon: "Gift", title: "Team Gifts", description: "Personalised merchandise, appreciation boxes, or experience vouchers for every participant." },
      { icon: "Camera", title: "Event Photography", description: "Professional photographer present throughout the day to capture every shared moment and milestone." },
      { icon: "Music", title: "Entertainment", description: "Live DJ, acoustic band, caricature artist, or photo booth to amplify the atmosphere." },
      { icon: "Palette", title: "Custom Theming & Décor", description: "Full venue dressing with branded backdrops, balloon arrangements, and thematic prop stations." },
      { icon: "Award", title: "Employee Recognition Awards", description: "Custom trophy design and a dedicated awards ceremony segment for celebrating standout team members." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies we've celebrated with",
  },

  "incentive-travel": {
    accentColor: "#D97706",
    dividerVariant: "ribbon",
    hero: {
      title: "INCENTIVE TRAVEL",
      subtitle: "Retreat",
      tagline: "Reward your best people with the journey of a lifetime.",
      backgroundImage: overseasRetreatHero,
    },
    overview: {
      description: "Incentive travel is one of the most powerful non-cash rewards a company can offer its top performers, sales teams, and high-growth contributors. A well-designed incentive trip communicates something no bonus cheque can: we see what you did, and we want your experience to match it. Elluminate designs end-to-end incentive travel programmes for Singapore-based organisations — from defining the eligibility criteria and building the anticipation campaign, to executing the trip itself with on-ground facilitation, a private recognition dinner, and a polished post-trip highlight reel. Destinations range from regional gems like Bali and Japan to long-haul experiences in Europe and beyond. Every programme is built around your earners, your culture, and the level of recognition your organisation is committed to delivering.",
      backgroundImage: overseasRetreatHero,
    },
    features: [
      { icon: ClipboardList, title: "Criteria & Campaign Design", description: "We help you define who earns the trip, communicate it compellingly, and build the anticipation before departure." },
      { icon: Plane, title: "Premium Flights", description: "Economy Plus, Business, or full Business Class depending on tier — booked, managed, and coordinated for the whole group." },
      { icon: Building, title: "5-Star Accommodation", description: "Handpicked luxury hotels at each destination, chosen for ambience, team-suitability, and experience calibre." },
      { icon: Award, title: "Private Recognition Dinner", description: "A gala dinner or intimate awards evening built into the programme — where leaders personally acknowledge each earner." },
      { icon: Globe, title: "Exclusive Local Experiences", description: "Curated activities unavailable to the general public: private temple access, chef's table dinners, yacht charters, and more." },
      { icon: Star, title: "Dedicated Travel Manager", description: "A dedicated Elluminate coordinator manages the entire trip on-ground so nothing is left to chance." },
    ],
    benefits: [
      { icon: Trophy, title: "Performance-Driven Culture", description: "Incentive travel reinforces what good looks like and makes high performance aspirational across the organisation." },
      { icon: Heart, title: "Retention Tool", description: "Earners who experience great incentive trips are significantly less likely to leave for a competitor." },
      { icon: Users, title: "Cohesion at the Top", description: "Top performers from different regions or teams bond during the trip in ways the office never allows." },
      { icon: Rocket, title: "Employer Brand Signal", description: "Word spreads internally. Earners share the trip on social media. It becomes a visible benchmark for what is possible." },
    ],
    alternatingSections: [],
    gallery: [],
    testimonials: [
      { quote: "Our sales team still talks about the Japan incentive trip 18 months later. It genuinely drove Q3 performance.", author: "VP Sales", company: "SaaS Platform" },
      { quote: "The private recognition dinner in Bali was the most meaningful moment of the year for our senior team.", author: "CEO", company: "Regional Bank" },
      { quote: "Elluminate handled every detail from visa letters to the gala dinner. We just showed up and celebrated.", author: "HR Director", company: "Consulting Firm" },
      { quote: "The criteria campaign built so much energy before we even departed. The team was buzzing for months.", author: "Sales Director", company: "Tech Distributor" },
      { quote: "Switzerland was beyond anything our top performers expected. They came back more loyal and motivated than ever.", author: "Regional Manager", company: "Insurance MNC" },
      { quote: "The Rome trip set a new standard for how we recognise our best people. Applications for the next cycle tripled.", author: "Head of People", company: "FinTech Startup" },
    ],
    faqs: [
      { question: "What makes incentive travel different from a regular retreat?", answer: "Incentive travel is reward-based — only top performers qualify. The prestige of earning the trip is as important as the trip itself. It is explicitly designed to drive performance and recognise achievement, not just provide a getaway." },
      { question: "What destinations work best?", answer: "Popular choices are Bali, Japan, Thailand, and Europe. The destination should feel aspirational relative to where your team usually travels — the stretch is what makes it feel earned." },
      { question: "How far in advance do we need to book?", answer: "Minimum 3 months, ideally 6. Building the pre-trip campaign and anticipation period is part of the programme design, and that takes time to do well." },
      { question: "Can you manage small groups?", answer: "Yes. Our typical incentive group ranges from 8 to 80. Smaller groups actually get more elevated, personalised experiences." },
    ],
    cta: { headline: "Design Your Incentive Programme", subtext: "Tell us your dates, destination, and how many earners you want to reward." },
    destinationsGrid: {
      sectionTitle: "DESTINATIONS",
      sectionSubtitle: "Where Will Your Earners Go?",
      destinations: [
        {
          country: "Bali, Indonesia",
          image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
          tagline: "Clifftop villas, private pool dinners, and the ultimate tropical reward.",
          region: "Southeast Asia",
          activities: ["Villa Stay", "Private Dinner", "Rafting", "Temple Tour"],
        },
        {
          country: "Tokyo, Japan",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
          tagline: "Michelin stars, ancient culture, and a city that redefines what is possible.",
          region: "East Asia",
          activities: ["Omakase Dinner", "Tea Ceremony", "TeamLab", "City Tour"],
        },
        {
          country: "Phuket, Thailand",
          image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80",
          tagline: "Turquoise waters, yacht charters, and nights your top earners will never forget.",
          region: "Southeast Asia",
          activities: ["Yacht Charter", "Island Hopping", "Beach Gala", "Thai Cuisine"],
        },
        {
          country: "Rome, Italy",
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
          tagline: "The Eternal City. Colosseum walks, rooftop aperitivos, and la dolce vita for your best.",
          region: "Europe",
          activities: ["Colosseum Tour", "Chef's Table", "Wine Tasting", "Vespa Tour"],
        },
        {
          country: "Swiss Alps",
          image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
          tagline: "Mountain lodges, panoramic trains, and the kind of luxury that feels earned.",
          region: "Europe",
          activities: ["Alpine Hike", "Scenic Train", "Fondue Dinner", "Spa Retreat"],
        },
        {
          country: "Maldives",
          image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
          tagline: "Overwater villas, private island dining, and recognition at the highest level.",
          region: "Indian Ocean",
          activities: ["Overwater Villa", "Snorkelling", "Sunset Cruise", "Private Beach"],
        },
        {
          country: "London, UK",
          image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
          tagline: "West End shows, private members' clubs, and a cosmopolitan reward experience.",
          region: "Europe",
          activities: ["West End Show", "Private Club", "Thames Cruise", "Pub Crawl"],
        },
        {
          country: "Paris, France",
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
          tagline: "Eiffel Tower dinners, Champagne houses, and the world's most romantic city as a reward.",
          region: "Europe",
          activities: ["Eiffel Tower", "Champagne Tasting", "Louvre Tour", "Gala Dinner"],
        },
        {
          country: "Santorini, Greece",
          image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
          tagline: "White-washed cliffs, Aegean sunsets, and a Mediterranean escape like no other.",
          region: "Europe",
          activities: ["Catamaran Cruise", "Wine Tour", "Cliff Dining", "Volcano Hike"],
        },
      ],
    },
    howItWorksFlow: {
      sectionTitle: "WHAT TO EXPECT",
      sectionSubtitle: "From Criteria to Celebration",
      itemsPerRow: 3,
      showNumbers: true,
      items: [
        { icon: ClipboardList, title: "Criteria & Target Setting", description: "We help you define eligibility — who earns the trip, what the thresholds are, and how to communicate it to maximise motivation." },
        { icon: MapPin, title: "Destination Selection", description: "We shortlist 2–3 destinations matching your budget, season, and the 'it feels earned' threshold your team needs to feel." },
        { icon: PenTool, title: "Programme Design", description: "Craft a custom itinerary: arrival experience, team activities, private recognition dinner, and free time that still feels curated." },
        { icon: Plane, title: "Travel & Logistics", description: "All flights, transfers, accommodation, visa documentation, and on-ground arrangements managed end to end." },
        { icon: Star, title: "On-Trip Facilitation", description: "A dedicated Elluminate coordinator is present on the ground ensuring every moment — planned and spontaneous — runs smoothly." },
        { icon: Trophy, title: "Post-Trip Recognition", description: "Receive a highlight reel, photo album, and optional post-trip engagement report to close the recognition loop internally." },
      ],
    },
    perfectForFlow: {
      sectionTitle: "PERFECT FOR",
      sectionSubtitle: "High-Performance Organisations",
      itemsPerRow: 4,
      items: [
        { icon: Target, title: "Sales Teams", description: "Reward top billers and quota crushers with a trip that matches their output." },
        { icon: Trophy, title: "Top Performer Reward", description: "Annual earner recognition for your company's highest contributors." },
        { icon: GraduationCap, title: "Leadership Development", description: "Combine incentive recognition with an offsite designed for senior growth." },
        { icon: Handshake, title: "Partner & Distributor Trips", description: "Reward your top channel partners and distributors as a retention play." },
        { icon: Rocket, title: "Launch Incentive", description: "Drive pre-launch momentum with a trip tied to a product cycle or campaign." },
        { icon: Users, title: "Cross-Region Cohorts", description: "Bring top performers from different offices together in a meaningful setting." },
        { icon: Star, title: "Annual Kickoff Reward", description: "Close the year strong — open the new one with a recognition trip for earners." },
        { icon: Briefcase, title: "Client Appreciation Trips", description: "Take your most valuable clients on a curated experience that deepens the relationship." },
      ],
    },
    recentEvents: [
      { client: "Salesforce", event: "APAC Sales Incentive Trip — Bali", pax: 40 },
      { client: "Standard Chartered", event: "Top Banker Reward Trip — Thailand", pax: 25 },
      { client: "AIA Singapore", event: "Million Dollar Round Table Trip", pax: 30 },
      { client: "Cisco Singapore", event: "Q4 Winners Trip — Japan", pax: 18 },
    ],
    pricing: { startingPrice: "Get a Quote", unit: "per pax", minimumPax: 5, duration: "3-7 days", activityType: "outdoor" },
    packages: [
      {
        color: "#26D07C",
        title: "Regional Incentive",
        description: "A well-executed 3-night incentive trip to a regional destination (Bali, Thailand, Malaysia). Includes round-trip economy flights, four-star accommodation, curated team activity, and a private recognition dinner.",
        features: ["Economy/Economy+ flights", "4-star accommodation", "Team activity", "Private recognition dinner", "Dedicated coordinator"],
      },
      {
        color: "#FFC400",
        title: "Signature Incentive",
        description: "A 5-night premium experience to Japan, Hong Kong, or further afield. Premium economy flights or business class upgrade, 5-star accommodation, and a fully choreographed recognition evening.",
        features: ["Premium economy flights", "5-star accommodation", "2 curated experiences", "Gala recognition dinner", "Highlight reel included"],
      },
      {
        color: "#FF4F4F",
        title: "Ultra Premium",
        description: "No ceiling, no compromise. Maldives, Swiss Alps, European capitals. Business class flights, private villa stays, chef experiences, and a fully custom programme designed from scratch.",
        features: ["Business class flights", "Luxury villa / resort", "Private experiences", "Custom programme", "White-glove service"],
      },
    ],
    addOns: [
      { icon: "Plane", title: "Business Class Upgrade", description: "Upgrade the entire group to business class for a departure experience that sets the tone from gate to gate." },
      { icon: "Gift", title: "Branded Welcome Kits", description: "Custom arrival kits in every hotel room: branded luggage tags, notebooks, local snacks, and a personalised note from leadership." },
      { icon: "Trophy", title: "In-Trip Awards Gala", description: "A formal recognition ceremony with custom trophies, individual callouts, and a captured moment for every earner." },
      { icon: "CalendarDays", title: "Extended Stay Option", description: "Allow earners to extend their stay personally at special room rates — a perk within a perk." },
      { icon: "Gamepad2", title: "Team Activity Add-on", description: "Add an Elluminate team-building session or cultural activity to the itinerary on any day of the trip." },
      { icon: "Camera", title: "Post-Trip Highlight Reel", description: "A professionally edited 3-minute video of the trip — perfect for internal comms, LinkedIn, and next year's incentive campaign." },
    ],
    hideOutcomes: true,
    hideMidCta: true,
    perfectForVariant: "pills",
    recentEventsHeadline: "Companies who've run Incentive Travel with us",
  },
};
