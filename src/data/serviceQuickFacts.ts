import { getServiceCardPresentation } from "@/data/serviceCardCatalog";
import {
  getServiceExperienceContent,
  serviceExperienceSlugs,
  type ServiceExperienceVariant,
} from "@/data/serviceExperienceContent";

export type ServiceQuickFactsTheme =
  | "expedition"
  | "investigation"
  | "strategy"
  | "retreat"
  | "training";

export interface ServiceQuickFact {
  label: string;
  value: string;
  detail?: string;
}

interface ServiceQuickFactInput extends Omit<ServiceQuickFact, "value"> {
  value?: string | null;
}

interface ServiceQuickFactsInput {
  theme: ServiceQuickFactsTheme;
  eyebrow: string;
  heading: string;
  intro: string;
  facts: ServiceQuickFactInput[];
}

export interface ServiceQuickFactsData extends Omit<ServiceQuickFactsInput, "facts"> {
  facts: ServiceQuickFact[];
}

interface VariantFactProfile {
  theme: ServiceQuickFactsTheme;
  deliveryMode: string;
  format: string;
  teamFocus: string;
  firstBrief: string;
  customisation: string;
}

const variantFactProfiles: Record<ServiceExperienceVariant, VariantFactProfile> = {
  expedition: {
    theme: "expedition",
    deliveryMode: "Facilitated route",
    format: "Checkpoint challenge",
    teamFocus: "Navigation and teamwork",
    firstBrief: "Pax, venue and goals",
    customisation: "Route, missions and branding",
  },
  investigation: {
    theme: "investigation",
    deliveryMode: "Facilitated in person",
    format: "Mystery and evidence",
    teamFocus: "Observation and reasoning",
    firstBrief: "Pax, room and difficulty",
    customisation: "Storyline and team themes",
  },
  intrigue: {
    theme: "investigation",
    deliveryMode: "Facilitated in person",
    format: "Social deduction game",
    teamFocus: "Trust and group discussion",
    firstBrief: "Pax, venue and comfort level",
    customisation: "Roles, missions and tone",
  },
  storybook: {
    theme: "investigation",
    deliveryMode: "Facilitated in person",
    format: "Story-led challenge",
    teamFocus: "Creative problem-solving",
    firstBrief: "Pax, venue and audience",
    customisation: "Story, missions and branding",
  },
  arena: {
    theme: "strategy",
    deliveryMode: "Facilitated in person",
    format: "Competitive rounds",
    teamFocus: "Composure and teamwork",
    firstBrief: "Pax, venue and comfort level",
    customisation: "Games, theme and tone",
  },
  maker: {
    theme: "strategy",
    deliveryMode: "Facilitated in person",
    format: "Hands-on build",
    teamFocus: "Planning and adaptability",
    firstBrief: "Pax, venue and objectives",
    customisation: "Materials, brief and difficulty",
  },
  arcade: {
    theme: "strategy",
    deliveryMode: "Facilitated in person",
    format: "Fast station games",
    teamFocus: "Participation and energy",
    firstBrief: "Pax, room and timing",
    customisation: "Game mix and branding",
  },
  strategy: {
    theme: "strategy",
    deliveryMode: "Facilitated in person",
    format: "Live strategy game",
    teamFocus: "Decisions and collaboration",
    firstBrief: "Pax, venue and pace",
    customisation: "Missions, scoring and branding",
  },
  tactical: {
    theme: "strategy",
    deliveryMode: "Facilitated in person",
    format: "Objective team battle",
    teamFocus: "Coordination and strategy",
    firstBrief: "Pax, venue and safety needs",
    customisation: "Game modes and arena layout",
  },
  "virtual-console": {
    theme: "strategy",
    deliveryMode: "Hosted online",
    format: "Live virtual mission",
    teamFocus: "Communication and teamwork",
    firstBrief: "Pax, platform and timing",
    customisation: "Story, rounds and branding",
  },
  retreat: {
    theme: "retreat",
    deliveryMode: "Managed offsite",
    format: "Retreat programme",
    teamFocus: "Connection and reset",
    firstBrief: "Pax, dates and objectives",
    customisation: "Itinerary, venue and activities",
  },
  travel: {
    theme: "retreat",
    deliveryMode: "Managed journey",
    format: "Recognition travel",
    teamFocus: "Shared experience and reward",
    firstBrief: "Pax, travel window and goals",
    customisation: "Destination, itinerary and moments",
  },
  profiling: {
    theme: "training",
    deliveryMode: "Facilitated session",
    format: "Personality profiling",
    teamFocus: "Self-awareness and communication",
    firstBrief: "Audience, context and goals",
    customisation: "Examples, scenarios and takeaways",
  },
  learning: {
    theme: "training",
    deliveryMode: "Facilitated session",
    format: "Interactive learning",
    teamFocus: "Practice and reflection",
    firstBrief: "Audience, goals and timing",
    customisation: "Content, activities and examples",
  },
  wellness: {
    theme: "training",
    deliveryMode: "Facilitated programme",
    format: "Wellness experience",
    teamFocus: "Wellbeing and connection",
    firstBrief: "Audience, needs and setting",
    customisation: "Activities, pace and accessibility",
  },
  leadership: {
    theme: "training",
    deliveryMode: "Facilitated offsite",
    format: "Decision workshop",
    teamFocus: "Alignment and ownership",
    firstBrief: "Leaders, decisions and context",
    customisation: "Agenda, facilitation and outputs",
  },
  festival: {
    theme: "training",
    deliveryMode: "Produced programme",
    format: "Multi-activity day",
    teamFocus: "Participation and celebration",
    firstBrief: "Pax, venue and objectives",
    customisation: "Zones, activities and production",
  },
  camp: {
    theme: "expedition",
    deliveryMode: "Facilitated programme",
    format: "Camp journey",
    teamFocus: "Bonding and leadership",
    firstBrief: "Age, pax and supervision",
    customisation: "Activities, flow and learning goals",
  },
};

// Owner-confirmed or explicitly supported decision facts. Other live child
// routes fall back to the categorical service and experience data below.
const curatedServiceQuickFacts: Record<string, ServiceQuickFactsInput> = {
  "amazing-race": {
    theme: "expedition",
    eyebrow: "Race briefing",
    heading: "Know the route before the first clue",
    intro: "The practical details your organiser needs before we shape the race.",
    facts: [
      { label: "Starting price", value: "From $45/pax" },
      { label: "Group size", value: "10–200+ players" },
      { label: "Duration", value: "3 hours" },
      { label: "Setting", value: "Outdoor" },
      { label: "Crew size", value: "5–10 per team" },
      { label: "Course", value: "8–14 checkpoints" },
      { label: "Wet weather", value: "Sheltered or indoor backup" },
    ],
  },
  "csi-bones": {
    theme: "investigation",
    eyebrow: "Case notes",
    heading: "Open the case file",
    intro: "A quick read on the room, the players and how far the mystery can be tailored.",
    facts: [
      { label: "Starting price", value: "From $55/pax" },
      { label: "Group size", value: "10+ players" },
      { label: "Setting", value: "Indoor-first" },
      { label: "Format", value: "Facilitated mystery" },
      { label: "Team focus", value: "Observation and deduction" },
      { label: "Customisable", value: "Storyline and company themes" },
    ],
  },
  "monopoly-dash": {
    theme: "strategy",
    eyebrow: "Board setup",
    heading: "Read the board before the first move",
    intro: "The essentials behind the route, game economy and live team competition.",
    facts: [
      { label: "Starting price", value: "From $55/pax" },
      { label: "Group size", value: "10+ players" },
      { label: "Setting", value: "Indoor or city route" },
      { label: "Format", value: "Live strategy race" },
      { label: "Core play", value: "Missions, trades and points" },
      { label: "Customisable", value: "Currency, challenges and branding" },
    ],
  },
  "sotong-game": {
    theme: "strategy",
    eyebrow: "Arena rules",
    heading: "Know the arena before round one",
    intro: "A fast brief on the group, setting and level of competitive drama.",
    facts: [
      { label: "Starting price", value: "From $55/pax" },
      { label: "Group size", value: "20+ players" },
      { label: "Setting", value: "Indoor, outdoor or hybrid" },
      { label: "Format", value: "Multiple short rounds" },
      { label: "Energy", value: "Competitive" },
      { label: "Customisable", value: "Games, venue and tone" },
    ],
  },
  "local-retreats": {
    theme: "retreat",
    eyebrow: "Itinerary notes",
    heading: "Set the offsite before the itinerary",
    intro: "Start with the shape of the day, then choose the venue and shared experiences.",
    facts: [
      { label: "Setting", value: "Singapore" },
      { label: "Programme range", value: "1–3 nights" },
      { label: "Planning scope", value: "Venue, meals and activities" },
      { label: "Best first brief", value: "Pax, dates and outcomes" },
    ],
  },
  "overseas-retreats": {
    theme: "retreat",
    eyebrow: "Itinerary notes",
    heading: "Set the retreat before the flights",
    intro: "Clarify why the team is travelling before the destination and programme take shape.",
    facts: [
      { label: "Setting", value: "Overseas" },
      { label: "Typical length", value: "3–5 days" },
      { label: "Planning scope", value: "Travel, stay and programme" },
      { label: "Best first brief", value: "Pax, objectives and budget" },
    ],
  },
  mbti: {
    theme: "training",
    eyebrow: "Session brief",
    heading: "Set the conversation before the profiles",
    intro: "The framework works best when it starts with a real team situation, not a string of letters.",
    facts: [
      { label: "Setting", value: "Indoor" },
      { label: "Format", value: "Facilitated profiling" },
      { label: "Focus", value: "Communication preferences" },
      { label: "Best first brief", value: "Team context and goals" },
      { label: "Takeaway", value: "Shared language for work" },
    ],
  },
  disc: {
    theme: "training",
    eyebrow: "Session brief",
    heading: "Set the conversation before the styles",
    intro: "Begin with the working relationship or team habit you want people to understand better.",
    facts: [
      { label: "Setting", value: "Indoor" },
      { label: "Format", value: "Interactive profiling" },
      { label: "Focus", value: "Visible work styles" },
      { label: "Best first brief", value: "Team situation and goals" },
      { label: "Takeaway", value: "Practical communication cues" },
    ],
  },
};

function buildCategoricalQuickFacts(slug: string): ServiceQuickFactsInput | null {
  const experience = getServiceExperienceContent(slug);
  const presentation = getServiceCardPresentation(slug);
  if (!experience || !presentation) return null;

  const profile = variantFactProfiles[experience.variant];
  return {
    theme: profile.theme,
    eyebrow: experience.eyebrow,
    heading: `${presentation.shortTitle}, at a glance`,
    intro: presentation.hook,
    facts: [
      { label: "Setting", value: presentation.setting },
      { label: "Delivery mode", value: profile.deliveryMode },
      { label: "Format", value: profile.format },
      { label: "Team focus", value: profile.teamFocus },
      { label: "Best first brief", value: profile.firstBrief },
      { label: "Customisable", value: profile.customisation },
    ],
  };
}

export function getServiceQuickFacts(slug: string): ServiceQuickFactsData | null {
  const entry = curatedServiceQuickFacts[slug] ?? buildCategoricalQuickFacts(slug);
  if (!entry) return null;

  const facts = entry.facts.filter(
    (fact): fact is ServiceQuickFact => typeof fact.value === "string" && fact.value.trim().length > 0,
  );

  return facts.length > 0 ? { ...entry, facts } : null;
}

export const serviceQuickFactsCoverage = serviceExperienceSlugs.filter((slug) => getServiceQuickFacts(slug)).length;
export const serviceQuickFactsExpectedCoverage = serviceExperienceSlugs.length;
