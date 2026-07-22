import type { FlowSectionItem, PackageTier, AddOn, FAQ, ServiceData } from "@/data/servicesData";
import { servicesData } from "@/data/servicesData";
import { serviceContentQuality } from "@/data/serviceContentQuality";
import {
  getServiceCardPresentation,
  type ServiceCardPresentation,
} from "@/data/serviceCardCatalog";
import {
  getServiceExperienceContent,
  serviceExperienceSlugs,
  type ServiceExperienceContent,
  type ServiceExperienceSlug,
} from "@/data/serviceExperienceContent";
import { getVerifiedLocalServiceGalleryPaths } from "@/data/serviceGalleryMedia";
import { getServiceQuickFacts } from "@/data/serviceQuickFacts";
import { serviceActorAssets } from "@/data/serviceActorAssets";
import {
  Banknote,
  Building2,
  Calculator,
  CalendarDays,
  Camera,
  Clapperboard,
  ClipboardCheck,
  Clock3,
  DoorOpen,
  Dumbbell,
  Eye,
  Flag,
  Footprints,
  Gauge,
  Globe2,
  GraduationCap,
  Hammer,
  Handshake,
  KeyRound,
  Landmark,
  Map as MapIcon,
  MapPin,
  Medal,
  MessageCircle,
  Monitor,
  PencilRuler,
  Puzzle,
  RotateCw,
  Search,
  Shield,
  Timer,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  activityPageBatchOneSlugs,
  activityPageBatchOneSlugSet,
  equipmentActivityServices,
  physicalTeamBuildingServices,
  retreatServices,
  trainingServices,
  virtualTeamBuildingServices,
} from "@/data/siteScope";

export type ServiceFamily = "physical" | "equipment" | "virtual" | "retreat" | "training";

export interface ServicePlanningFact {
  label: string;
  value: string;
}

export interface ServicePackageOption extends PackageTier {
  id: string;
  source: "existing-service-data";
}

export interface ServiceGalleryAsset {
  src: string;
  alt: string;
  classification: "real-event" | "campaign-editorial";
  scope: "route" | "family";
}

export interface ServiceJourneyMedia {
  kind: "real-event" | "conceptual-editorial";
  src?: string;
  alt: string;
  scope: "route" | "family";
}

export interface ServicePageBlueprint {
  slug: ServiceExperienceSlug;
  layoutVersion: "legacy" | "activity-v2";
  family: ServiceFamily;
  card: ServiceCardPresentation;
  journey: ServiceExperienceContent;
  video: ServiceData["videoSection"] | null;
  specialistExtension: {
    kind: "destinations";
    data: NonNullable<ServiceData["destinationsGrid"]>;
  } | null;
  assets: {
    hero: string;
    overviewBackground?: string;
    ctaBackground?: string;
    journeyActorLeft?: string;
    journeyActorRight?: string;
    plannerActor?: string;
  };
  transitionMoments: readonly [
    { title: string; description: string; icon: LucideIcon },
    { title: string; description: string; icon: LucideIcon },
    { title: string; description: string; icon: LucideIcon },
  ];
  overviewPresentation: {
    eyebrow: string;
    title: string;
  };
  plannerGuidance: string;
  overviewParagraphs: readonly [string, string];
  facts: readonly ServicePlanningFact[];
  packages: readonly ServicePackageOption[];
  addOns: readonly AddOn[];
  perfectFor: readonly FlowSectionItem[];
  faqs: readonly FAQ[];
  gallery: readonly ServiceGalleryAsset[];
  galleryTitle: string;
  journeyMedia: readonly ServiceJourneyMedia[];
  relatedSlugs: readonly ServiceExperienceSlug[];
  midCta: {
    headline: string;
    subtext: string;
    buttonLabel: string;
  };
  closingCta: {
    headline: string;
    subtext: string;
    buttonLabel: string;
  };
}

const familyEntries: Record<ServiceFamily, readonly { slug: string }[]> = {
  physical: physicalTeamBuildingServices,
  equipment: equipmentActivityServices,
  virtual: virtualTeamBuildingServices,
  retreat: retreatServices,
  training: trainingServices,
};

const familyBySlug = new Map<string, ServiceFamily>(
  Object.entries(familyEntries).flatMap(([family, entries]) =>
    entries.map((entry) => [entry.slug, family as ServiceFamily] as const),
  ),
);

const explicitStartingPrices: Partial<Record<ServiceExperienceSlug, string>> = {
  "amazing-race": "From $45/pax",
  "csi-bones": "From $55/pax",
  "monopoly-dash": "From $55/pax",
  "sotong-game": "From $55/pax",
};

type ActivityBatchSlug = (typeof activityPageBatchOneSlugs)[number];

const activityTransitionMoments: Record<ActivityBatchSlug, ServicePageBlueprint["transitionMoments"]> = {
  "amazing-race": [
    { title: "Crack the First Clue", description: "Open the route and find the first checkpoint.", icon: MapIcon },
    { title: "Race the Checkpoints", description: "Move, solve and keep the whole crew together.", icon: Footprints },
    { title: "Chase the Final Flag", description: "Bring every answer home before the clock wins.", icon: Flag },
  ],
  "csi-bones": [
    { title: "Lead the Investigation", description: "Step into the case and decide what matters.", icon: Search },
    { title: "Question the Evidence", description: "Challenge the obvious story and compare theories.", icon: MessageCircle },
    { title: "Build the Final Theory", description: "Connect the timeline before making the accusation.", icon: Clock3 },
  ],
  "cultural-race": [
    { title: "Read the Streets", description: "Notice the details hiding in familiar places.", icon: MapPin },
    { title: "Unlock Local Stories", description: "Turn landmarks and culture into the next clue.", icon: Landmark },
    { title: "Capture the Discovery", description: "Return with answers, photos and a trail worth sharing.", icon: Camera },
  ],
  "amongst-us": [
    { title: "Complete the Missions", description: "Work together while hidden roles shift the room.", icon: ClipboardCheck },
    { title: "Read the Crew", description: "Watch the stories, the silences and the suspicious moves.", icon: Eye },
    { title: "Expose the Imposter", description: "Put the final theory to a vote before it is too late.", icon: Users },
  ],
  "alice-in-motherland": [
    { title: "Enter Motherland", description: "Leave ordinary rules at the first strange door.", icon: DoorOpen },
    { title: "Survive Curious Trials", description: "Solve the puzzles that keep changing the story.", icon: Puzzle },
    { title: "Unlock the Final Gate", description: "Use everything the team discovered to escape.", icon: KeyRound },
  ],
  "battle-of-the-olympians": [
    { title: "Raise the Banner", description: "Claim a team identity and enter the arena together.", icon: Shield },
    { title: "Conquer the Trials", description: "Take on rounds that reward different strengths.", icon: Dumbbell },
    { title: "Claim the Podium", description: "Rally for the final event and the victory moment.", icon: Trophy },
  ],
  "builder-cross": [
    { title: "Sketch the Plan", description: "Turn competing ideas into one shared blueprint.", icon: PencilRuler },
    { title: "Build Under Pressure", description: "Divide the work and bring the structure to life.", icon: Hammer },
    { title: "Face the Stress Test", description: "See whether the final build survives the challenge.", icon: Gauge },
  ],
  "minute-to-win-it": [
    { title: "Learn the Challenge", description: "Read the setup and spot the trick before time starts.", icon: ClipboardCheck },
    { title: "Beat the Clock", description: "Give the team everything for sixty loud seconds.", icon: Timer },
    { title: "Climb the Scoreboard", description: "Rotate, recover and chase the comeback round.", icon: RotateCw },
  ],
  "monopoly-dash": [
    { title: "Build the Fortune", description: "Earn your first advantage and read the live board.", icon: Banknote },
    { title: "Negotiate the Deals", description: "Trade, persuade and protect the bigger strategy.", icon: Handshake },
    { title: "Close the Ledger", description: "Count every move and discover who played it best.", icon: Calculator },
  ],
  "running-man": [
    { title: "Accept the Mission", description: "Meet the cast and open the first challenge card.", icon: Clapperboard },
    { title: "Enter the Chase", description: "Move fast as every round changes the rules.", icon: Footprints },
    { title: "Win the Final Episode", description: "Bring the crew together for one last mission.", icon: Medal },
  ],
};

const activityOverviewPresentation: Record<ActivityBatchSlug, ServicePageBlueprint["overviewPresentation"]> = {
  "amazing-race": { eyebrow: "The Adventure", title: "Your Race Day, From First Clue to Final Flag" },
  "csi-bones": { eyebrow: "The Investigation", title: "The Case Begins Before the First Clue" },
  "cultural-race": { eyebrow: "The Discovery", title: "Singapore Becomes the Trail" },
  "amongst-us": { eyebrow: "The Suspicion", title: "Every Mission Changes Who You Trust" },
  "alice-in-motherland": { eyebrow: "The Story", title: "The Rules Change After Every Door" },
  "battle-of-the-olympians": { eyebrow: "The Arena", title: "Every Round Tests a Different Strength" },
  "builder-cross": { eyebrow: "The Build", title: "The Plan Meets the Pressure Test" },
  "minute-to-win-it": { eyebrow: "The Countdown", title: "Sixty Seconds Changes the Whole Room" },
  "monopoly-dash": { eyebrow: "The Strategy", title: "Every Move Changes the Board" },
  "running-man": { eyebrow: "The Episode", title: "The Next Mission Is Never What You Expect" },
};

const activityPlannerGuidance: Record<ActivityBatchSlug, string> = {
  "amazing-race": "Share the people, place and pace. We will shape the route, checkpoints and wet-weather plan around them.",
  "csi-bones": "Share the group, room and preferred difficulty. We will tune the case, evidence and reveal around your investigators.",
  "cultural-race": "Share the group, district and walking comfort. We will shape a trail that makes Singapore part of the game.",
  "amongst-us": "Share the group, room and comfort level. We will balance missions, hidden roles and discussion so the suspicion stays fun.",
  "alice-in-motherland": "Share the audience, setting and story appetite. We will tune the trials and strange turns around your group.",
  "battle-of-the-olympians": "Share the group, arena and preferred intensity. We will build a tournament where different strengths get their moment.",
  "builder-cross": "Share the people, room and objective. We will tune the materials, build brief and final stress test around them.",
  "minute-to-win-it": "Share the group, room and time available. We will build the station mix and rotations for maximum participation.",
  "monopoly-dash": "Share the people, setting and pace. We will shape the live board, missions and deal-making around your group.",
  "running-man": "Share the group, location and energy level. We will build a variety-show mission sequence that everyone can enter.",
};

const activityPlanningFacts: Record<ActivityBatchSlug, readonly ServicePlanningFact[]> = {
  "amazing-race": [
    { label: "Group size", value: "10 to 200+ players" },
    { label: "Duration", value: "Around 3 hours" },
    { label: "Setting", value: "Outdoor, with indoor options" },
    { label: "Recommended booking lead time", value: "At least 2 weeks; earlier if customised" },
    { label: "Intensity", value: "3 out of 5" },
    { label: "Weather contingency", value: "Sheltered route or indoor backup" },
  ],
  "csi-bones": [
    { label: "Group size", value: "From 10 players" },
    { label: "Duration", value: "Around 3 hours" },
    { label: "Setting", value: "Indoor-first" },
    { label: "Recommended booking lead time", value: "At least 2 weeks; earlier if customised" },
    { label: "Intensity", value: "1 out of 5" },
    { label: "Weather contingency", value: "Not weather-dependent" },
  ],
  "cultural-race": [
    { label: "Group size", value: "From 10 players" },
    { label: "Duration", value: "Around 3 hours" },
    { label: "Setting", value: "Outdoor heritage districts" },
    { label: "Recommended booking lead time", value: "At least 2 weeks; earlier if customised" },
    { label: "Intensity", value: "3 out of 5" },
    { label: "Weather contingency", value: "Sheltered stops or indoor alternative" },
  ],
  "amongst-us": [
    { label: "Group size", value: "From 12 players" },
    { label: "Duration", value: "2.5 to 3 hours" },
    { label: "Setting", value: "Indoor" },
    { label: "Recommended booking lead time", value: "At least 2 weeks; earlier if customised" },
    { label: "Intensity", value: "1 out of 5" },
    { label: "Weather contingency", value: "Not weather-dependent" },
  ],
  "alice-in-motherland": [
    { label: "Group size", value: "From 12 players" },
    { label: "Duration", value: "2.5 to 3 hours" },
    { label: "Setting", value: "Indoor or hybrid" },
    { label: "Recommended booking lead time", value: "At least 2 weeks; earlier if customised" },
    { label: "Intensity", value: "2 out of 5" },
    { label: "Weather contingency", value: "Indoor format available" },
  ],
  "battle-of-the-olympians": [
    { label: "Group size", value: "From 20 players" },
    { label: "Duration", value: "3 to 4 hours" },
    { label: "Setting", value: "Outdoor, with indoor options" },
    { label: "Recommended booking lead time", value: "At least 2 weeks; earlier if customised" },
    { label: "Intensity", value: "4 out of 5" },
    { label: "Weather contingency", value: "Sheltered arena or adjusted game mix" },
  ],
  "builder-cross": [
    { label: "Group size", value: "From 10 players" },
    { label: "Duration", value: "Around 3 hours" },
    { label: "Setting", value: "Indoor" },
    { label: "Recommended booking lead time", value: "At least 2 weeks; earlier if customised" },
    { label: "Intensity", value: "2 out of 5" },
    { label: "Weather contingency", value: "Not weather-dependent" },
  ],
  "minute-to-win-it": [
    { label: "Group size", value: "From 10 players" },
    { label: "Duration", value: "Around 3 hours" },
    { label: "Setting", value: "Indoor" },
    { label: "Recommended booking lead time", value: "At least 2 weeks; earlier if customised" },
    { label: "Intensity", value: "2 out of 5" },
    { label: "Weather contingency", value: "Not weather-dependent" },
  ],
  "monopoly-dash": [
    { label: "Group size", value: "From 10 players" },
    { label: "Duration", value: "Around 3 hours" },
    { label: "Setting", value: "Outdoor route or indoor board" },
    { label: "Recommended booking lead time", value: "At least 2 weeks; earlier if customised" },
    { label: "Intensity", value: "2 out of 5" },
    { label: "Weather contingency", value: "Indoor game-board option" },
  ],
  "running-man": [
    { label: "Group size", value: "From 10 players" },
    { label: "Duration", value: "Around 3 hours" },
    { label: "Setting", value: "Outdoor, with indoor options" },
    { label: "Recommended booking lead time", value: "At least 2 weeks; earlier if customised" },
    { label: "Intensity", value: "4 out of 5" },
    { label: "Weather contingency", value: "Sheltered or indoor mission mix" },
  ],
};

const familyFactCopy: Record<ServiceFamily, readonly [ServicePlanningFact, ServicePlanningFact, ServicePlanningFact]> = {
  physical: [
    { label: "Intensity", value: "Adjusted to your group" },
    { label: "Accessibility", value: "Route and tasks can be adapted" },
    { label: "Weather contingency", value: "Sheltered or indoor options planned" },
  ],
  equipment: [
    { label: "Match format", value: "Facilitated team missions" },
    { label: "Team size", value: "Balanced for safe, active play" },
    { label: "Provided gear", value: "Game equipment and safety briefing" },
  ],
  virtual: [
    { label: "Platform", value: "Hosted live online" },
    { label: "Devices", value: "One connected device per participant or team" },
    { label: "Technical hosting", value: "Facilitator and joining brief included" },
  ],
  retreat: [
    { label: "Travel", value: "Planned around destination and dates" },
    { label: "Accommodation", value: "Matched to group and programme" },
    { label: "Programme inclusions", value: "Activities, logistics and shared moments" },
  ],
  training: [
    { label: "Framework", value: "Matched to the session objective" },
    { label: "Exercises", value: "Interactive discussion and practice" },
    { label: "Practical takeaways", value: "Clear actions for work or school" },
  ],
};

const familyPerfectFor: Record<ServiceFamily, readonly FlowSectionItem[]> = {
  physical: [
    { icon: Users, title: "New Teams", description: "Break the ice through shared decisions and action." },
    { icon: Building2, title: "Departments", description: "Bring colleagues out of routine and into the same challenge." },
    { icon: CalendarDays, title: "Company Days", description: "Give a larger event a clear, energetic centrepiece." },
    { icon: GraduationCap, title: "Learning Cohorts", description: "Turn teamwork into something participants can feel and discuss." },
    { icon: Globe2, title: "Regional Groups", description: "Create one shared Singapore experience across offices and cultures." },
    { icon: Monitor, title: "Hybrid Teams Meeting Live", description: "Reconnect people who usually work across screens and locations." },
    { icon: Flag, title: "Project Kickoffs", description: "Start a new chapter with momentum, shared language and a story to retell." },
    { icon: Puzzle, title: "Cross-Functional Crews", description: "Give different roles a challenge where every contribution changes the result." },
  ],
  equipment: [
    { icon: Users, title: "Competitive Crews", description: "Give spirited teams a clear arena for friendly rivalry." },
    { icon: Building2, title: "Department Battles", description: "Mix strategy, movement and plenty of memorable near misses." },
    { icon: CalendarDays, title: "Company Days", description: "Add a high-energy tournament to a wider programme." },
    { icon: GraduationCap, title: "Youth Groups", description: "Build coordination and confidence through supervised play." },
    { icon: Globe2, title: "Mixed-Experience Groups", description: "Brief beginners clearly while keeping the action satisfying." },
    { icon: Monitor, title: "Teams Ready to Unplug", description: "Swap the meeting room for an active shared objective." },
  ],
  virtual: [
    { icon: Monitor, title: "Remote Teams", description: "Create one live room for colleagues working from different places." },
    { icon: Globe2, title: "Regional Offices", description: "Connect countries and time zones through the same hosted game." },
    { icon: Users, title: "New Joiners", description: "Make introductions easier through prompts, missions and laughter." },
    { icon: Building2, title: "Department Socials", description: "Bring energy to an online gathering without extra logistics." },
    { icon: CalendarDays, title: "Festive Sessions", description: "Give celebrations and milestones an interactive centrepiece." },
    { icon: GraduationCap, title: "Learning Cohorts", description: "Use collaboration and reflection in a convenient online format." },
  ],
  retreat: [
    { icon: Users, title: "Whole-Team Resets", description: "Create time and space for people to reconnect beyond daily work." },
    { icon: Building2, title: "Leadership Groups", description: "Balance focused conversations with a thoughtfully paced offsite." },
    { icon: CalendarDays, title: "Annual Retreats", description: "Turn a recurring company moment into a programme people value." },
    { icon: Globe2, title: "Regional Teams", description: "Bring distributed colleagues together in a destination that fits." },
    { icon: GraduationCap, title: "Strategy and Learning", description: "Pair workshops with shared experiences and time to reset." },
    { icon: Monitor, title: "Teams Leaving Hybrid Behind", description: "Give screen-heavy groups meaningful face-to-face time." },
  ],
  training: [
    { icon: Users, title: "New Teams", description: "Build useful shared language from the beginning." },
    { icon: Building2, title: "Established Departments", description: "Surface working patterns and improve everyday collaboration." },
    { icon: GraduationCap, title: "Learning Cohorts", description: "Turn concepts into practice through discussion and exercises." },
    { icon: CalendarDays, title: "Development Days", description: "Give a wider programme a focused learning anchor." },
    { icon: Globe2, title: "Cross-Cultural Groups", description: "Create clearer ways to understand different perspectives." },
    { icon: Monitor, title: "Hybrid Workforces", description: "Apply the framework to communication across rooms and screens." },
  ],
};

const approvedPackageSlugs = new Set<ServiceExperienceSlug>([
  ...activityPageBatchOneSlugs,
  "overseas-retreats",
  "local-retreats",
  "incentive-travel",
  "leadership-offsites",
  "wellness-events",
]);

const familyFaqSupplements: Record<ServiceFamily, readonly FAQ[]> = {
  physical: [
    { question: "Can the activity be adjusted for different fitness levels?", answer: "Yes. We can tune the route, pace, movement and challenge mix around the people taking part." },
    { question: "What happens if the weather changes?", answer: "We will discuss sheltered checkpoints, an indoor alternative or a clear wet-weather decision point during planning." },
    { question: "Can the experience include our company theme?", answer: "Yes. Selected clues, missions, team identities and event materials can be shaped around your brief." },
  ],
  equipment: [
    { question: "Is the equipment and safety briefing included?", answer: "Yes. The game equipment, rules, facilitator briefing and match flow are part of the event setup." },
    { question: "Can beginners take part?", answer: "Yes. The opening briefing and practice round help first-time players understand the equipment before the main missions begin." },
    { question: "Can the match format be customised?", answer: "Yes. We can adjust the team setup, mission sequence, pace and scoring to suit the group." },
  ],
  virtual: [
    { question: "Which online platform will we use?", answer: "We will confirm the platform with your organiser and provide a simple joining brief before the session." },
    { question: "Do participants need special equipment?", answer: "No specialist equipment is normally required. Participants need a suitable connected device, audio and a stable internet connection." },
    { question: "Is a live host included?", answer: "Yes. A facilitator hosts the experience, explains each round and keeps the group moving together online." },
  ],
  retreat: [
    { question: "Can you coordinate travel and accommodation?", answer: "Yes. The planning scope can include destination research, accommodation, transport and the programme around them." },
    { question: "Can work sessions and team activities be combined?", answer: "Yes. We can balance workshops, planning time, shared meals, team experiences and free time around the retreat objective." },
    { question: "How is the destination selected?", answer: "We start with group size, dates, budget, travel comfort and the purpose of the retreat before shortlisting locations." },
  ],
  training: [
    { question: "Can the session use examples from our workplace or school?", answer: "Yes. We can shape scenarios, discussions and exercises around the audience and the situations they actually face." },
    { question: "Will participants leave with practical takeaways?", answer: "Yes. The session is designed to turn the framework into useful language, reflection and actions participants can apply afterwards." },
    { question: "Can this be combined with a team activity?", answer: "Yes. Selected programmes can pair facilitated learning with an experiential activity that reinforces the same objective." },
  ],
};

const universalFaqs: readonly FAQ[] = [
  { question: "What information do you need for a quote?", answer: "Share your preferred date, estimated group size, venue or location, event objective and any timing or accessibility constraints." },
  { question: "How early should we enquire?", answer: "Send your preferred date as early as possible. The useful lead time depends on venue, customisation, travel and production requirements." },
  { question: "Can the programme be customised?", answer: "Yes. We can discuss the pace, flow, difficulty, branding and supporting logistics that make sense for your group." },
  { question: "Can you help if we are not sure which format fits?", answer: "Yes. Tell us about the people, the objective and the day you are planning, and we will help narrow the most suitable options." },
  { question: "What happens after we submit the event brief?", answer: "The team reviews the brief, clarifies the important planning details and recommends the next step for a suitable programme and quote." },
];

const familyGalleryFallbacks: Record<ServiceFamily, readonly string[]> = {
  physical: [
    "/images/services/amazing-race/gallery-1.jpg",
    "/images/services/running-man/gallery-2.jpg",
    "/images/services/cultural-race/gallery-3.jpg",
  ],
  equipment: [
    "/images/services/archery-tag/gallery-1.jpg",
    "/images/services/gel-blitz/gallery-2.jpg",
    "/images/services/tag-tical-laser-teambuilding/gallery-3.jpg",
  ],
  virtual: [
    "/images/services/amazing-race-virtual/gallery-1.jpg",
    "/images/services/the-gameshow-experience-virtual/gallery-2.jpg",
    "/images/services/the-great-zodiac-hunt-virtual/gallery-3.jpg",
    "/images/services/the-nuclear-fallout-escape-room-virtual/gallery-1.jpg",
    "/images/services/tomb-raider-king-treasure-hunt-virtual/gallery-2.jpg",
    "/images/services/fit-in-your-team-virtual/gallery-3.jpg",
    "/images/services/the-patriot-act-virtual/gallery-3.jpg",
    "/images/services/grand-christmas-delivery/gallery-2.jpg",
  ],
  retreat: [
    "/images/services/overseas-retreats/gallery-3.jpg",
    "/images/services/local-retreats/gallery-2.jpg",
    "/images/services/incentive-travel/gallery-1.jpg",
  ],
  training: [
    "/images/services/workshops/gallery-1.jpg",
    "/images/services/workshops/gallery-2.jpg",
    "/images/services/corporate-days/gallery-2.jpg",
    "/images/services/corporate-days/gallery-4.jpg",
    "/images/services/wellness-events/gallery-3.jpg",
    "/images/services/wellness-events/gallery-5.jpg",
  ],
};

const familyEvidenceLabels: Record<ServiceFamily, string> = {
  physical: "Team Building",
  equipment: "Equipment Activity",
  virtual: "Virtual Team",
  retreat: "Retreat",
  training: "Training",
};

const relevantFamilyFallbacks: Record<ServiceFamily, readonly ServiceExperienceSlug[]> = {
  physical: [],
  equipment: ["battle-of-the-olympians", "running-man", "sotong-game", "minute-to-win-it"],
  virtual: [],
  retreat: ["leadership-offsites", "corporate-days", "wellness-events", "workshops"],
  training: ["local-retreats", "incentive-travel", "overseas-retreats"],
};

// A small number of legacy service folders contain byte-for-byte copies under
// different filenames. Keep the first, most route-specific candidate while
// treating every alias in a group as the same visual. This prevents duplicate
// cards without rewriting or deleting source assets that other pages may use.
const duplicateAssetPathGroups: readonly (readonly string[])[] = [
  ["/images/services/amazing-race/gallery-2.jpg", "/images/services/cultural-race/gallery-4.jpg"],
  ["/images/services/cultural-race/gallery-3.jpg", "/images/services/cultural-race/addons.jpg"],
  ["/images/services/amongst-us/hero.jpg", "/images/services/amongst-us/gallery-1.jpg"],
  ["/images/services/amongst-us/gallery-2.jpg", "/images/services/amongst-us/how-it-works.jpg"],
  ["/images/services/amongst-us/gallery-3.jpg", "/images/services/amongst-us/addons.jpg"],
  ["/images/services/amongst-us/cta.jpg", "/images/services/amongst-us/gallery-4.jpg", "/images/services/corporate-days/gallery-6.jpg", "/images/services/leadership-offsites/gallery-6.jpg"],
  ["/images/services/alice-in-motherland/gallery-1.jpg", "/images/services/sotong-game/gallery-3.jpg"],
  ["/images/services/alice-in-motherland/gallery-2.jpg", "/images/services/alice-in-motherland/how-it-works.jpg"],
  ["/images/services/alice-in-motherland/gallery-3.jpg", "/images/services/alice-in-motherland/addons.jpg"],
  ["/images/services/alice-in-motherland/gallery-6.jpg", "/images/services/local-retreats/cta.jpg", "/images/services/local-retreats/gallery-4.jpg", "/images/services/corporate-days/hero.jpg", "/images/services/corporate-days/gallery-1.jpg"],
  ["/images/services/battle-of-the-olympians/hero.jpg", "/images/services/battle-of-the-olympians/gallery-1.jpg"],
  ["/images/services/battle-of-the-olympians/gallery-2.jpg", "/images/services/battle-of-the-olympians/how-it-works.jpg"],
  ["/images/services/battle-of-the-olympians/gallery-3.jpg", "/images/services/battle-of-the-olympians/addons.jpg"],
  ["/images/services/battle-of-the-olympians/cta.jpg", "/images/services/battle-of-the-olympians/gallery-4.jpg"],
  ["/images/services/monopoly-dash/gallery-1.jpg", "/images/services/monopoly-dash/gallery-5.jpg"],
  ["/images/services/monopoly-dash/gallery-2.jpg", "/images/services/monopoly-dash/gallery-6.jpg"],
  ["/images/services/sotong-game/gallery-4.jpg", "/images/services/treasure-heist/gallery-3.jpg"],
  ["/images/services/treasure-heist/hero.jpg", "/images/services/treasure-heist/gallery-1.jpg"],
  ["/images/services/the-great-zodiac-hunt-virtual/gallery-3.jpg", "/images/services/the-great-zodiac-hunt-virtual/gallery-1.jpg", "/images/services/the-great-zodiac-hunt-virtual/gallery-2.jpg", "/images/services/the-great-zodiac-hunt-virtual/gallery-4.jpg", "/images/services/the-great-zodiac-hunt-virtual/gallery-5.jpg", "/images/services/the-great-zodiac-hunt-virtual/gallery-6.jpg", "/images/services/the-great-zodiac-hunt-virtual/gallery-7.jpg"],
  ["/images/services/fit-in-your-team-virtual/gallery-1.jpg", "/images/services/fit-in-your-team-virtual/gallery-6.jpg"],
  ["/images/services/fit-in-your-team-virtual/gallery-2.jpg", "/images/services/fit-in-your-team-virtual/gallery-7.jpg"],
  ["/images/services/fit-in-your-team-virtual/cta.jpg", "/images/services/fit-in-your-team-virtual/gallery-4.jpg"],
  ["/images/services/the-patriot-act-virtual/gallery-1.jpg", "/images/services/the-patriot-act-virtual/gallery-4.jpg", "/images/services/the-patriot-act-virtual/gallery-7.jpg"],
  ["/images/services/the-patriot-act-virtual/gallery-2.jpg", "/images/services/the-patriot-act-virtual/how-it-works.jpg", "/images/services/the-patriot-act-virtual/gallery-5.jpg", "/images/services/the-patriot-act-virtual/testimonial.jpg"],
  ["/images/services/the-patriot-act-virtual/gallery-3.jpg", "/images/services/the-patriot-act-virtual/gallery-6.jpg"],
  ["/images/services/tomb-raider-king-treasure-hunt-virtual/gallery-1.jpg", "/images/services/tomb-raider-king-treasure-hunt-virtual/gallery-4.jpg"],
  ["/images/services/tomb-raider-king-treasure-hunt-virtual/hero.jpg", "/images/services/tomb-raider-king-treasure-hunt-virtual/cta.jpg"],
  ["/images/services/grand-christmas-delivery/gallery-1.jpg", "/images/services/grand-christmas-delivery/gallery-4.jpg", "/images/services/grand-christmas-delivery/gallery-7.jpg"],
  ["/images/services/grand-christmas-delivery/gallery-2.jpg", "/images/services/grand-christmas-delivery/gallery-5.jpg"],
  ["/images/services/grand-christmas-delivery/gallery-3.jpg", "/images/services/grand-christmas-delivery/gallery-6.jpg"],
  ["/images/services/grand-christmas-delivery/how-it-works.jpg", "/images/services/grand-christmas-delivery/testimonial.jpg"],
  ["/images/services/overseas-retreats/gallery-1.jpg", "/images/services/incentive-travel/gallery-2.jpg"],
  ["/images/services/overseas-retreats/gallery-2.jpg", "/images/services/incentive-travel/gallery-4.jpg"],
  ["/images/services/overseas-retreats/gallery-4.jpg", "/images/services/incentive-travel/gallery-3.jpg"],
  ["/images/services/overseas-retreats/gallery-5.jpg", "/images/services/incentive-travel/gallery-5.jpg"],
  ["/images/services/overseas-retreats/gallery-6.jpg", "/images/services/incentive-travel/gallery-6.jpg"],
  ["/images/services/overseas-retreats/gallery-7.jpg", "/images/services/incentive-travel/gallery-7.jpg"],
  ["/images/services/overseas-retreats/testimonial.jpg", "/images/services/incentive-travel/testimonial.jpg"],
  ["/images/services/alice-in-motherland/gallery-7.jpg", "/images/services/local-retreats/gallery-5.jpg", "/images/services/local-retreats/testimonial.jpg", "/images/services/corporate-days/gallery-2.jpg", "/images/services/corporate-days/how-it-works.jpg"],
  ["/images/services/local-retreats/gallery-6.jpg", "/images/services/corporate-days/gallery-3.jpg", "/images/services/corporate-days/addons.jpg", "/images/services/leadership-offsites/gallery-3.jpg"],
  ["/images/services/local-retreats/gallery-7.jpg", "/images/services/corporate-days/cta.jpg", "/images/services/corporate-days/gallery-4.jpg", "/images/services/leadership-offsites/gallery-4.jpg"],
  ["/images/services/corporate-days/gallery-5.jpg", "/images/services/corporate-days/testimonial.jpg", "/images/services/leadership-offsites/gallery-5.jpg"],
  ["/images/services/corporate-days/gallery-7.jpg", "/images/services/leadership-offsites/gallery-7.jpg"],
  ["/images/services/alice-in-motherland/cta.jpg", "/images/services/alice-in-motherland/gallery-4.jpg"],
  ["/images/services/alice-in-motherland/gallery-5.jpg", "/images/services/alice-in-motherland/testimonial.jpg"],
  ["/images/services/amazing-race-virtual/gallery-5.jpg", "/images/services/amazing-race-virtual/testimonial.jpg"],
  ["/images/services/amongst-us/gallery-5.jpg", "/images/services/amongst-us/testimonial.jpg"],
  ["/images/services/battle-of-the-olympians/gallery-5.jpg", "/images/services/battle-of-the-olympians/testimonial.jpg"],
  ["/images/services/csi-bones/gallery-1.jpg", "/images/services/csi-bones/gallery-7.jpg"],
  ["/images/services/cultural-race/gallery-5.jpg", "/images/services/cultural-race/testimonial.jpg"],
  ["/images/services/monopoly-dash/gallery-3.jpg", "/images/services/monopoly-dash/gallery-7.jpg"],
  ["/images/services/the-great-zodiac-hunt-virtual/addons.jpg", "/images/services/the-great-zodiac-hunt-virtual/how-it-works.jpg"],
  ["/images/services/the-great-zodiac-hunt-virtual/cta.jpg", "/images/services/the-great-zodiac-hunt-virtual/testimonial.jpg"],
];

const duplicateAssetIdentityByPath = new Map<string, string>(
  duplicateAssetPathGroups.flatMap((paths, groupIndex) =>
    paths.map((path) => [path, `duplicate-binary-${groupIndex}`] as const),
  ),
);

const getAssetIdentity = (src: string) => duplicateAssetIdentityByPath.get(src) ?? src;

const hashString = (value: string) => {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const stableOrder = <T extends { slug: string }>(items: readonly T[], seed: string) =>
  [...items].sort((a, b) => hashString(`${seed}:${a.slug}`) - hashString(`${seed}:${b.slug}`));

const splitOverview = (description: string, hook: string): readonly [string, string] => {
  const clean = description.replace(/\s+/g, " ").trim();
  const sentences = clean.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((sentence) => sentence.trim()) ?? [clean];

  if (sentences.length < 2) {
    return [clean, `${hook} We shape the format around the people, setting and outcome you want from the day.`];
  }

  const midpoint = Math.ceil(sentences.length / 2);
  return [sentences.slice(0, midpoint).join(" "), sentences.slice(midpoint).join(" ")];
};

const buildFaqs = (slug: ServiceExperienceSlug, family: ServiceFamily): readonly FAQ[] => {
  const service = servicesData[slug];
  const preferred = serviceContentQuality[slug]?.faqs?.length
    ? serviceContentQuality[slug].faqs
    : service.faqs;
  const seen = new Set<string>();

  return [...preferred, ...familyFaqSupplements[family], ...universalFaqs]
    .filter((faq) => {
      const key = faq.question.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      if (!faq.question.trim() || !faq.answer.trim() || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 8);
};

const buildGallery = (
  slug: ServiceExperienceSlug,
  family: ServiceFamily,
  title: string,
): readonly ServiceGalleryAsset[] => {
  const service = servicesData[slug];
  const verified = getVerifiedLocalServiceGalleryPaths(slug, 12);
  const candidates: ServiceGalleryAsset[] = [
    ...verified.map((src, index) => ({
      src,
      alt: `${title} real event moment ${index + 1}`,
      classification: "real-event" as const,
      scope: "route" as const,
    })),
    ...familyGalleryFallbacks[family].map((src, index) => ({
      src,
      alt: `Elluminate ${familyEvidenceLabels[family].toLowerCase()} event moment ${index + 1}`,
      classification: "real-event" as const,
      scope: "family" as const,
    })),
    ...(service.miniGallery?.images.map((image) => ({
      ...image,
      classification: "campaign-editorial" as const,
      scope: "route" as const,
    })) ?? []),
    ...service.gallery.map((src, index) => ({
      src,
      alt: `${title} editorial scene ${index + 1}`,
      classification: "campaign-editorial" as const,
      scope: "route" as const,
    })),
    ...[
      service.overview.backgroundImage,
      service.howItWorksImage,
      service.addOnsImage,
      service.hero.backgroundImage,
    ]
      .filter((src): src is string => Boolean(src))
      .map((src, index) => ({
        src,
        alt: `${title} campaign scene ${index + 1}`,
        classification: "campaign-editorial" as const,
        scope: "route" as const,
      })),
  ];
  // The hero is rendered separately above the gallery. Reserve its binary so
  // a copied gallery filename cannot make the same visual appear twice on the
  // same route.
  const seenIdentities = new Set<string>([getAssetIdentity(service.hero.backgroundImage)]);

  return candidates.filter((asset) => {
    // Lovable's /__l5e/ URLs are preview-only upload references. They do not
    // exist in the repository build and would become broken images after the
    // GitHub -> Lovable sync, so only repository-backed media is allowed in
    // the canonical child-page gallery.
    const identity = getAssetIdentity(asset.src);
    if (!asset.src || asset.src.startsWith("/__l5e/") || seenIdentities.has(identity)) return false;
    seenIdentities.add(identity);
    return true;
  }).slice(0, 12);
};

const buildJourneyMedia = (
  gallery: readonly ServiceGalleryAsset[],
  slug: ServiceExperienceSlug,
  title: string,
): readonly ServiceJourneyMedia[] => {
  const service = servicesData[slug];
  const experienceImage = getServiceExperienceContent(slug)?.image?.src;
  const heroIdentity = getAssetIdentity(service.hero.backgroundImage);
  const galleryPathByIdentity = new Map(
    gallery.map((asset) => [getAssetIdentity(asset.src), asset.src] as const),
  );
  const seenRealIdentities = new Set<string>();
  const real = gallery
    .filter((asset) => asset.classification === "real-event")
    .filter((asset) => {
      const identity = getAssetIdentity(asset.src);
      if (seenRealIdentities.has(identity)) return false;
      seenRealIdentities.add(identity);
      return true;
    });
  const seenEditorialIdentities = new Set<string>([heroIdentity]);
  const editorial = [
    experienceImage,
    service.overview.backgroundImage,
    service.howItWorksImage,
    service.addOnsImage,
    service.ctaBackgroundImage,
    service.hero.backgroundImage,
    ...gallery.filter((asset) => asset.classification === "campaign-editorial").map((asset) => asset.src),
  ]
    .filter((src): src is string => Boolean(src) && !src.startsWith("/__l5e/"))
    .map((src) => galleryPathByIdentity.get(getAssetIdentity(src)) ?? src)
    .filter((src) => {
      const identity = getAssetIdentity(src);
      if (seenRealIdentities.has(identity) || seenEditorialIdentities.has(identity)) return false;
      seenEditorialIdentities.add(identity);
      return true;
    });
  const media: ServiceJourneyMedia[] = [];

  for (let index = 0; index < 3; index += 1) {
    media.push({
      kind: "real-event",
      src: real[index]?.src,
      alt: real[index]?.alt ?? `${title} event moment ${index + 1}`,
      scope: real[index]?.scope ?? "route",
    });
    media.push({
      kind: "conceptual-editorial",
      src: editorial[index],
      alt: `${title} campaign scene ${index + 1}`,
      scope: "route",
    });
  }

  return media;
};

const buildRelated = (slug: ServiceExperienceSlug, family: ServiceFamily): readonly ServiceExperienceSlug[] => {
  const all = serviceExperienceSlugs
    .filter((candidate) => candidate !== slug)
    .map((candidate) => ({ slug: candidate, family: familyBySlug.get(candidate) as ServiceFamily }));
  const close = stableOrder(all.filter((candidate) => candidate.family === family), `${slug}:close`).slice(0, 4);

  if (close.length < 4) {
    const closeIds = new Set(close.map((candidate) => candidate.slug));
    const curatedFallbacks = relevantFamilyFallbacks[family]
      .filter((candidate) => candidate !== slug && !closeIds.has(candidate))
      .map((candidate) => ({ slug: candidate, family: familyBySlug.get(candidate) as ServiceFamily }));
    close.push(...curatedFallbacks.slice(0, 4 - close.length));
  }

  const closeIds = new Set(close.map((candidate) => candidate.slug));
  const discovery = stableOrder(
    all.filter((candidate) => candidate.family !== family && !closeIds.has(candidate.slug)),
    `${slug}:discover`,
  ).slice(0, 4);

  return [...close, ...discovery].map((candidate) => candidate.slug);
};

const packageId = (slug: string, title: string) =>
  `${slug}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

const buildFacts = (
  slug: ServiceExperienceSlug,
  family: ServiceFamily,
  card: ServiceCardPresentation,
): readonly ServicePlanningFact[] => {
  const service = servicesData[slug];
  const pricing = service.pricing;
  const curatedFacts = getServiceQuickFacts(slug)?.facts ?? [];
  const quickValue = (...labels: string[]) => curatedFacts.find((fact) => labels.includes(fact.label))?.value;
  const startingPrice = explicitStartingPrices[slug]
    ?? quickValue("Starting price")
    ?? (pricing?.startingPrice
      ? `${pricing.startingPrice}${pricing.unit && /[$\d]/.test(pricing.startingPrice) ? ` ${pricing.unit}` : ""}`.replace(/\s+/g, " ").trim()
      : "Quoted to your brief");

  const universal: ServicePlanningFact[] = [
    { label: "Starting price", value: startingPrice },
    { label: "Group size", value: quickValue("Group size") ?? (pricing?.minimumPax ? `From ${pricing.minimumPax} participants` : "Shaped to your group") },
    { label: "Duration", value: quickValue("Duration", "Programme range") ?? pricing?.duration ?? "Confirmed around your programme" },
    { label: "Setting", value: quickValue("Setting") ?? card.setting },
    { label: "Customisation level", value: quickValue("Customisable", "Customisation") ?? "Standard, enhanced or bespoke" },
    { label: "Recommended booking lead time", value: "Enquire as soon as your preferred date is known" },
  ];

  return [...universal, ...familyFactCopy[family]];
};

export const getServicePageBlueprint = (slug: string): ServicePageBlueprint | null => {
  if (!serviceExperienceSlugs.includes(slug as ServiceExperienceSlug)) return null;

  const typedSlug = slug as ServiceExperienceSlug;
  const service = servicesData[typedSlug];
  const family = familyBySlug.get(typedSlug);
  const card = getServiceCardPresentation(typedSlug);
  const experience = getServiceExperienceContent(typedSlug);
  if (!service || !family || !card || !experience) return null;

  const isActivityV2 = activityPageBatchOneSlugSet.has(typedSlug);
  const activitySlug = isActivityV2 ? (typedSlug as ActivityBatchSlug) : null;

  const gallery = buildGallery(typedSlug, family, card.shortTitle);
  const galleryUsesFamilyPhotography = gallery.some((asset) => asset.scope === "family");
  const packages = approvedPackageSlugs.has(typedSlug) && service.pricing && service.packages?.length
    ? service.packages
        .filter((option) => option.title.trim() && option.description.trim() && option.features.length > 0)
        .map((option) => ({
          ...option,
          id: packageId(typedSlug, option.title),
          source: "existing-service-data" as const,
        }))
    : [];
  const perfectForSource = (service.perfectForFlow?.items.length
    ? service.perfectForFlow.items
    : familyPerfectFor[family]);
  const perfectFor = (() => {
    const seen = new Set<string>();
    return [...perfectForSource, ...familyPerfectFor[family]]
      .filter((item) => {
        const key = item.title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, isActivityV2 ? 8 : 6);
  })();

  const fallbackTransitionMoments: ServicePageBlueprint["transitionMoments"] = [
    { ...experience.stages[0], icon: MapIcon },
    { ...experience.stages[1], icon: Search },
    { ...experience.stages[2], icon: Flag },
  ];

  return {
    slug: typedSlug,
    layoutVersion: isActivityV2 ? "activity-v2" : "legacy",
    family,
    card,
    journey: experience,
    video: service.videoSection ?? null,
    specialistExtension: service.destinationsGrid
      ? { kind: "destinations", data: service.destinationsGrid }
      : null,
    assets: {
      hero: service.hero.backgroundImage,
      overviewBackground: service.overview.backgroundImage,
      ctaBackground: service.ctaBackgroundImage,
      ...(activitySlug ? serviceActorAssets[activitySlug] : {}),
    },
    transitionMoments: activitySlug
      ? activityTransitionMoments[activitySlug]
      : fallbackTransitionMoments,
    overviewPresentation: activitySlug
      ? activityOverviewPresentation[activitySlug]
      : { eyebrow: experience.eyebrow, title: experience.title },
    plannerGuidance: activitySlug
      ? activityPlannerGuidance[activitySlug]
      : "Share the audience, setting and objective. We will shape the practical format around them.",
    overviewParagraphs: splitOverview(
      serviceContentQuality[typedSlug]?.overviewDescription ?? service.overview.description,
      card.hook,
    ),
    facts: activitySlug ? activityPlanningFacts[activitySlug] : buildFacts(typedSlug, family, card),
    packages,
    addOns: packages.length > 0 ? service.addOns ?? [] : [],
    perfectFor,
    faqs: buildFaqs(typedSlug, family),
    gallery,
    galleryTitle: galleryUsesFamilyPhotography
      ? `More Elluminate ${familyEvidenceLabels[family]} Moments`
      : `${card.shortTitle} in Action`,
    journeyMedia: buildJourneyMedia(gallery, typedSlug, card.shortTitle),
    relatedSlugs: buildRelated(typedSlug, family),
    midCta: {
      headline: serviceContentQuality[typedSlug]?.ctaHeadline ?? service.cta.headline,
      subtext: serviceContentQuality[typedSlug]?.ctaSubtext ?? service.cta.subtext,
      buttonLabel: `Plan ${card.shortTitle}`,
    },
    closingCta: {
      headline: `Bring ${card.shortTitle} to Your Group`,
      subtext: `Share the people, date and outcome you have in mind. We will help shape the right ${card.shortTitle} format from there.`,
      buttonLabel: "Build My Event",
    },
  };
};

export const servicePageBlueprints = Object.fromEntries(
  serviceExperienceSlugs.map((slug) => {
    const blueprint = getServicePageBlueprint(slug);
    if (!blueprint) throw new Error(`Missing canonical service-page blueprint for ${slug}`);
    return [slug, blueprint];
  }),
) as Record<ServiceExperienceSlug, ServicePageBlueprint>;
