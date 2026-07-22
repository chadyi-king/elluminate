export interface ServiceLink {
  name: string;
  slug: string;
}

export const teamBuildingOverview: ServiceLink = { name: "Team Building", slug: "team-building" };

export const physicalTeamBuildingServices: ServiceLink[] = [
  { name: "Amazing Race", slug: "amazing-race" },
  { name: "CSI-Bones", slug: "csi-bones" },
  { name: "Cultural Race", slug: "cultural-race" },
  { name: "Amongst Us", slug: "amongst-us" },
  { name: "Alice in Motherland", slug: "alice-in-motherland" },
  { name: "Battle of the Olympians", slug: "battle-of-the-olympians" },
  { name: "Builder Cross", slug: "builder-cross" },
  { name: "Minute To Win It", slug: "minute-to-win-it" },
  { name: "Monopoly Dash", slug: "monopoly-dash" },
  { name: "Running Man Adventure", slug: "running-man" },
  { name: "Sotong Game", slug: "sotong-game" },
  { name: "Treasure Heist", slug: "treasure-heist" },
];

/**
 * The first owner-approved activity-page rollout. Keep this list explicit so
 * the new layout can be reviewed as a controlled batch without changing the
 * remaining child routes.
 */
export const activityPageBatchOneSlugs = [
  "amazing-race",
  "csi-bones",
  "cultural-race",
  "amongst-us",
  "alice-in-motherland",
  "battle-of-the-olympians",
  "builder-cross",
  "minute-to-win-it",
  "monopoly-dash",
  "running-man",
] as const;

export type ActivityPageBatchOneSlug = (typeof activityPageBatchOneSlugs)[number];

export const activityPageBatchOneSlugSet = new Set<string>(activityPageBatchOneSlugs);

export const equipmentActivityServices: ServiceLink[] = [
  { name: "Archery Tag", slug: "archery-tag" },
  { name: "GelBlitz", slug: "gel-blitz" },
  { name: "Nerfwar", slug: "nerfwar" },
  { name: "Tag-tical Laser", slug: "tag-tical-laser-teambuilding" },
];

export const virtualTeamBuildingServices: ServiceLink[] = [
  { name: "Amazing Race Virtual", slug: "amazing-race-virtual" },
  { name: "Fit In Your Team", slug: "fit-in-your-team-virtual" },
  { name: "Gameshow Experience", slug: "the-gameshow-experience-virtual" },
  { name: "Great Zodiac Hunt", slug: "the-great-zodiac-hunt-virtual" },
  { name: "Nuclear Fallout Escape", slug: "the-nuclear-fallout-escape-room-virtual" },
  { name: "The Patriot Act", slug: "the-patriot-act-virtual" },
  { name: "Tomb Raider King", slug: "tomb-raider-king-treasure-hunt-virtual" },
  { name: "Grand Christmas Delivery", slug: "grand-christmas-delivery" },
];

export const retreatServices: ServiceLink[] = [
  { name: "Overseas Retreats", slug: "overseas-retreats" },
  { name: "Local Retreats", slug: "local-retreats" },
  { name: "Incentive Travel", slug: "incentive-travel" },
];

export const trainingServices: ServiceLink[] = [
  { name: "MBTI Profiling", slug: "mbti" },
  { name: "DISC Assessment", slug: "disc" },
  { name: "OCEAN Profiling", slug: "ocean" },
  { name: "Mass Talks", slug: "mass-talks" },
  { name: "Workshops", slug: "workshops" },
  { name: "Youth Camps", slug: "youth-camps" },
  { name: "Corporate Days", slug: "corporate-days" },
  { name: "Wellness Events", slug: "wellness-events" },
  { name: "Leadership Offsites", slug: "leadership-offsites" },
];

export const allInScopeServiceSlugs = new Set([
  teamBuildingOverview.slug,
  ...physicalTeamBuildingServices.map((service) => service.slug),
  ...equipmentActivityServices.map((service) => service.slug),
  ...virtualTeamBuildingServices.map((service) => service.slug),
  ...retreatServices.map((service) => service.slug),
  ...trainingServices.map((service) => service.slug),
]);

export const serviceCategoryLabels: Record<string, string> = {
  [teamBuildingOverview.slug]: "Team Building",
  ...Object.fromEntries(physicalTeamBuildingServices.map((service) => [service.slug, "Physical Team Building"])),
  ...Object.fromEntries(equipmentActivityServices.map((service) => [service.slug, "Activities"])),
  ...Object.fromEntries(virtualTeamBuildingServices.map((service) => [service.slug, "Virtual Team Building"])),
  ...Object.fromEntries(retreatServices.map((service) => [service.slug, "Retreats"])),
  ...Object.fromEntries(trainingServices.map((service) => [service.slug, "Training"])),
};
