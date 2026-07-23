import {
  equipmentActivityServices,
  physicalTeamBuildingServices,
  retreatServices,
  trainingServices,
  virtualTeamBuildingServices,
  type ServiceLink,
} from "@/data/siteScope";

export type CampaignPageKind = "team-building" | "retreats" | "training";

export interface CampaignPageConfig {
  kind: CampaignPageKind;
  path: string;
  searchIntent: string;
  label: string;
  h1: string;
  description: string;
  title: string;
  heroSlug: string;
  eventCategory: string;
  services: ServiceLink[];
  sectionTitle: string;
  sectionCopy: string;
  planningPoints: { title: string; copy: string }[];
}

export const campaignPageConfigs: Record<CampaignPageKind, CampaignPageConfig> = {
  "team-building": {
    kind: "team-building",
    path: "/services/team-building",
    searchIntent: "Corporate team building Singapore",
    label: "Corporate team building in Singapore",
    h1: "Corporate Team Building in Singapore, Planned Around Your Team",
    description:
      "Plan corporate team building in Singapore around your team, objective, venue and timing. Compare physical, equipment and virtual formats, then send your event brief.",
    title: "Corporate Team Building Services Singapore | Elluminate",
    heroSlug: "amazing-race",
    eventCategory: "Corporate Team Building",
    services: [
      ...physicalTeamBuildingServices,
      ...equipmentActivityServices,
      ...virtualTeamBuildingServices,
    ],
    sectionTitle: "Find a team-building format that fits your group",
    sectionCopy:
      "Compare the setting, pace and style of each experience, then open any activity page for its full journey, practical details and starting point.",
    planningPoints: [
      { title: "People and objective", copy: "Group size, team profile and the outcome you want determine which formats fit best." },
      { title: "Setting and energy", copy: "Indoor, outdoor, equipment-based and virtual formats create very different event rhythms." },
      { title: "Date and logistics", copy: "Timing, venue, accessibility and optional extras shape the final event plan and quote." },
    ],
  },
  retreats: {
    kind: "retreats",
    path: "/services/retreats",
    searchIntent: "Company retreats and corporate retreats",
    label: "Corporate retreats and offsites",
    h1: "Company Retreats Planned Around Your Team",
    description:
      "Plan local or overseas company retreats around your group, schedule, objectives and travel needs. Compare retreat directions and discuss the practical details with Elluminate.",
    title: "Company Retreats and Offsites Singapore | Elluminate",
    heroSlug: "overseas-retreats",
    eventCategory: "Corporate Retreat",
    services: retreatServices,
    sectionTitle: "Choose the retreat direction before building the itinerary",
    sectionCopy:
      "Start with where the team can travel, how long they have and what the retreat needs to balance. The itinerary can then be shaped around work sessions, bonding, meals, movement and downtime.",
    planningPoints: [
      { title: "Destination and duration", copy: "Local, nearby or overseas options need different travel time, accommodation and itinerary pacing." },
      { title: "Team objective", copy: "Strategy, reward, connection and leadership alignment create different retreat priorities." },
      { title: "Operating details", copy: "Transport, rooms, meals, activity flow and participant requirements should be considered together." },
    ],
  },
  training: {
    kind: "training",
    path: "/services/training",
    searchIntent: "Corporate training, workshops and team profiling",
    label: "Corporate training, workshops and team profiling",
    h1: "Corporate Training Planned Around Your Team",
    description:
      "Explore corporate training, workshops and team profiling shaped around your audience, workplace context, timing and practical learning objective with Elluminate.",
    title: "Corporate Training and Workshops Singapore | Elluminate",
    heroSlug: "workshops",
    eventCategory: "Training Workshop",
    services: trainingServices,
    sectionTitle: "Start with the workplace conversation you need to create",
    sectionCopy:
      "A useful session should suit the audience, time available and the practical outcome you want after the room clears. Share that context before choosing a training format.",
    planningPoints: [
      { title: "Audience", copy: "Team composition, seniority, existing knowledge and group size affect how a session should be facilitated." },
      { title: "Desired outcome", copy: "Awareness, discussion, practice and team alignment call for different session structures." },
      { title: "Format and timing", copy: "A profile, workshop, talk, offsite or multi-part programme each needs a different flow." },
    ],
  },
};

export const campaignPagePaths = Object.values(campaignPageConfigs).map((config) => config.path);

export function getCampaignPageConfig(kind: CampaignPageKind) {
  return campaignPageConfigs[kind];
}
