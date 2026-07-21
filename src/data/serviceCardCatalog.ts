import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Brain,
  Briefcase,
  Building2,
  CalendarDays,
  Compass,
  Crosshair,
  Dumbbell,
  Flag,
  Footprints,
  Gem,
  Ghost,
  Gift,
  Globe,
  Heart,
  Lightbulb,
  Map,
  Mic,
  Monitor,
  Moon,
  Palmtree,
  Plane,
  Rabbit,
  Route,
  Search,
  Shield,
  ShoppingBag,
  Sparkles,
  Swords,
  Target,
  Theater,
  Timer,
  Trees,
  Trophy,
  Users,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import {
  equipmentActivityServices,
  physicalTeamBuildingServices,
  retreatServices,
  serviceCategoryLabels,
  trainingServices,
  virtualTeamBuildingServices,
} from "@/data/siteScope";

interface ServiceCardCopy {
  shortTitle: string;
  hook: string;
  setting: string;
  energy: string;
  icon: LucideIcon;
}

export interface ServiceCardPresentation extends ServiceCardCopy {
  slug: string;
  title: string;
  image: string;
  accent: string;
  category: string;
}

export const serviceCardCatalog: Record<string, ServiceCardCopy> = {
  "team-building": {
    shortTitle: "Team Building",
    hook: "Find the challenge that gets your people moving, thinking and laughing together.",
    setting: "Indoor / outdoor",
    energy: "Choose your pace",
    icon: Users,
  },
  "amazing-race": {
    shortTitle: "Amazing Race",
    hook: "Follow the clues, conquer the checkpoints and race your crew to the final flag.",
    setting: "Outdoor",
    energy: "High energy",
    icon: Route,
  },
  "csi-bones": {
    shortTitle: "CSI-Bones",
    hook: "Read the evidence, challenge every theory and crack the case as one investigation team.",
    setting: "Indoor",
    energy: "Focused",
    icon: Search,
  },
  "cultural-race": {
    shortTitle: "Cultural Race",
    hook: "Turn Singapore's streets into a trail of local discoveries, clues and team missions.",
    setting: "Outdoor",
    energy: "Curious",
    icon: Map,
  },
  "amongst-us": {
    shortTitle: "Amongst Us",
    hook: "Complete the mission, read the room and uncover the impostors hiding in plain sight.",
    setting: "Indoor",
    energy: "Social strategy",
    icon: Ghost,
  },
  "alice-in-motherland": {
    shortTitle: "Alice in Motherland",
    hook: "Step through the looking glass for curious puzzles, colourful characters and clever teamwork.",
    setting: "Indoor",
    energy: "Immersive",
    icon: Rabbit,
  },
  "battle-of-the-olympians": {
    shortTitle: "Battle of Olympians",
    hook: "Enter the arena for a team tournament packed with challenges, rivalries and big finishes.",
    setting: "Outdoor",
    energy: "Competitive",
    icon: Trophy,
  },
  "builder-cross": {
    shortTitle: "Builder Cross",
    hook: "Turn a pile of materials into one bold build before the final inspection begins.",
    setting: "Indoor",
    energy: "Hands-on",
    icon: Building2,
  },
  "minute-to-win-it": {
    shortTitle: "Minute to Win It",
    hook: "Sixty seconds, one deceptively simple challenge and a room cheering every attempt.",
    setting: "Indoor",
    energy: "Fast-paced",
    icon: Timer,
  },
  "monopoly-dash": {
    shortTitle: "Monopoly Dash",
    hook: "Race for properties, make your moves and build the winning empire before time runs out.",
    setting: "Outdoor",
    energy: "Competitive",
    icon: ShoppingBag,
  },
  "running-man": {
    shortTitle: "Running Man",
    hook: "Bring the variety-show chaos with chase missions, surprise games and plenty of team banter.",
    setting: "Outdoor",
    energy: "High energy",
    icon: Footprints,
  },
  "sotong-game": {
    shortTitle: "Sotong Game",
    hook: "Survive each round of playful pressure, quick decisions and dramatic team showdowns.",
    setting: "Outdoor",
    energy: "Competitive",
    icon: Target,
  },
  "treasure-heist": {
    shortTitle: "Treasure Heist",
    hook: "Gather the crew, outsmart the vault and escape with the prize before the alarm wins.",
    setting: "Indoor / outdoor",
    energy: "Tactical",
    icon: Gem,
  },
  "archery-tag": {
    shortTitle: "Archery Tag",
    hook: "Dodge, aim and work the field together in a fast-moving foam-arrow showdown.",
    setting: "Outdoor",
    energy: "High energy",
    icon: Crosshair,
  },
  "gel-blitz": {
    shortTitle: "GelBlitz",
    hook: "Move with your squad, take the objective and own the field in a tactical gel battle.",
    setting: "Outdoor",
    energy: "High energy",
    icon: Shield,
  },
  nerfwar: {
    shortTitle: "Nerfwar",
    hook: "Load the foam darts, choose your formation and send the whole team into playful battle.",
    setting: "Indoor / outdoor",
    energy: "Playful combat",
    icon: Swords,
  },
  "tag-tical-laser-teambuilding": {
    shortTitle: "Tag-tical Laser",
    hook: "Think fast, cover your teammates and complete the mission in a live laser arena.",
    setting: "Indoor / outdoor",
    energy: "Tactical",
    icon: Target,
  },
  "amazing-race-virtual": {
    shortTitle: "Virtual Amazing Race",
    hook: "Send remote teams racing through live clues, challenges and destinations from one screen.",
    setting: "Virtual",
    energy: "High energy",
    icon: Globe,
  },
  "fit-in-your-team-virtual": {
    shortTitle: "Fit In Your Team",
    hook: "Get everyone moving with quick wellness challenges built for teams joining from anywhere.",
    setting: "Virtual",
    energy: "Active",
    icon: Dumbbell,
  },
  "the-gameshow-experience-virtual": {
    shortTitle: "Gameshow Experience",
    hook: "Lights, buzzers and bragging rights turn the video call into a live team gameshow.",
    setting: "Virtual",
    energy: "Lively",
    icon: Theater,
  },
  "the-great-zodiac-hunt-virtual": {
    shortTitle: "Zodiac Hunt",
    hook: "Follow the signs, connect the clues and unlock a celestial mystery together online.",
    setting: "Virtual",
    energy: "Curious",
    icon: Moon,
  },
  "the-nuclear-fallout-escape-room-virtual": {
    shortTitle: "Nuclear Fallout",
    hook: "Beat the countdown, contain the crisis and escape the fallout through sharp team decisions.",
    setting: "Virtual",
    energy: "Suspenseful",
    icon: Shield,
  },
  "the-patriot-act-virtual": {
    shortTitle: "The Patriot Act",
    hook: "Decode the intelligence, connect the evidence and complete the mission before time expires.",
    setting: "Virtual",
    energy: "Strategic",
    icon: Flag,
  },
  "tomb-raider-king-treasure-hunt-virtual": {
    shortTitle: "Tomb Raider King",
    hook: "Enter the lost tomb, solve its ancient traps and claim the treasure as one expedition team.",
    setting: "Virtual",
    energy: "Adventurous",
    icon: Gem,
  },
  "grand-christmas-delivery": {
    shortTitle: "Christmas Delivery",
    hook: "Save the festive season through merry missions, quick teamwork and one very important delivery.",
    setting: "Virtual",
    energy: "Festive",
    icon: Gift,
  },
  "overseas-retreats": {
    shortTitle: "Overseas Retreats",
    hook: "Take the team somewhere new with travel, shared adventures and breathing room planned together.",
    setting: "Overseas",
    energy: "Shared adventure",
    icon: Plane,
  },
  "local-retreats": {
    shortTitle: "Local Retreats",
    hook: "Step away from the usual routine without leaving Singapore behind.",
    setting: "Local offsite",
    energy: "Reset",
    icon: Palmtree,
  },
  "incentive-travel": {
    shortTitle: "Incentive Travel",
    hook: "Reward standout people with a journey that feels considered from departure to celebration.",
    setting: "Overseas",
    energy: "Premium",
    icon: Plane,
  },
  mbti: {
    shortTitle: "MBTI Profiling",
    hook: "Turn personality differences into useful conversations about how your team works together.",
    setting: "Indoor",
    energy: "Reflective",
    icon: Users,
  },
  disc: {
    shortTitle: "DISC Assessment",
    hook: "See the team's working styles clearly and practise communicating across the differences.",
    setting: "Indoor",
    energy: "Interactive",
    icon: Activity,
  },
  ocean: {
    shortTitle: "OCEAN Profiling",
    hook: "Explore the traits shaping everyday decisions, collaboration and communication at work.",
    setting: "Indoor",
    energy: "Reflective",
    icon: Brain,
  },
  "mass-talks": {
    shortTitle: "Mass Talks",
    hook: "Bring the whole room into one focused conversation with ideas built to travel beyond the stage.",
    setting: "Indoor",
    energy: "Inspiring",
    icon: Mic,
  },
  workshops: {
    shortTitle: "Workshops",
    hook: "Turn useful ideas into discussion, practice and takeaways the team can use immediately.",
    setting: "Indoor",
    energy: "Hands-on",
    icon: Lightbulb,
  },
  "youth-camps": {
    shortTitle: "Youth Camps",
    hook: "Fill the programme with new friendships, team challenges and stories worth bringing home.",
    setting: "Indoor / outdoor",
    energy: "High energy",
    icon: Trees,
  },
  "corporate-days": {
    shortTitle: "Corporate Days",
    hook: "Bring colleagues and families together for one easy-flowing day of activity and celebration.",
    setting: "Indoor / outdoor",
    energy: "Celebratory",
    icon: CalendarDays,
  },
  "wellness-events": {
    shortTitle: "Wellness Events",
    hook: "Give the team space to move, breathe and return to work with a little more energy.",
    setting: "Indoor / outdoor",
    energy: "Restorative",
    icon: Heart,
  },
  "leadership-offsites": {
    shortTitle: "Leadership Offsites",
    hook: "Create the headspace for leaders to align, decide and move forward together.",
    setting: "Offsite",
    energy: "Focused",
    icon: Briefcase,
  },
};

const hasSlug = (items: { slug: string }[], slug: string) => items.some((item) => item.slug === slug);

const getFallbackCardCopy = (slug: string): ServiceCardCopy => {
  const category = serviceCategoryLabels[slug] ?? "Experience";

  if (hasSlug(virtualTeamBuildingServices, slug)) {
    return { shortTitle: servicesData[slug]?.hero.title ?? slug, hook: servicesData[slug]?.hero.tagline ?? "Bring the team together online.", setting: "Virtual", energy: "Interactive", icon: Monitor };
  }
  if (hasSlug(retreatServices, slug)) {
    return { shortTitle: servicesData[slug]?.hero.title ?? slug, hook: servicesData[slug]?.hero.tagline ?? "Step away together and reconnect.", setting: "Offsite", energy: "Shared adventure", icon: Compass };
  }
  if (hasSlug(trainingServices, slug)) {
    return { shortTitle: servicesData[slug]?.hero.title ?? slug, hook: servicesData[slug]?.hero.tagline ?? "Turn ideas into useful team practice.", setting: "Indoor / flexible", energy: "Interactive", icon: Brain };
  }
  if (hasSlug(equipmentActivityServices, slug)) {
    return { shortTitle: servicesData[slug]?.hero.title ?? slug, hook: servicesData[slug]?.hero.tagline ?? "Bring the team into the action.", setting: "Indoor / outdoor", energy: "High energy", icon: Target };
  }
  if (hasSlug(physicalTeamBuildingServices, slug)) {
    return { shortTitle: servicesData[slug]?.hero.title ?? slug, hook: servicesData[slug]?.hero.tagline ?? "Move, solve and play together.", setting: "Indoor / outdoor", energy: "High energy", icon: Flag };
  }

  return {
    shortTitle: servicesData[slug]?.hero.title ?? slug,
    hook: servicesData[slug]?.hero.tagline ?? `Explore this ${category.toLowerCase()} experience.`,
    setting: "Flexible",
    energy: "Team-led",
    icon: Sparkles,
  };
};

export const getServiceCardPresentation = (slug: string): ServiceCardPresentation | null => {
  const service = servicesData[slug];
  if (!service) return null;

  const copy = serviceCardCatalog[slug] ?? getFallbackCardCopy(slug);
  return {
    ...copy,
    slug,
    title: service.hero.title,
    image: service.hero.backgroundImage,
    accent: service.accentColor,
    category: serviceCategoryLabels[slug] ?? service.hero.subtitle ?? "Experience",
  };
};
