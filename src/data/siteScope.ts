export interface ServiceLink {
  name: string;
  slug: string;
}

export const physicalTeamBuildingServices: ServiceLink[] = [
  { name: "Amazing Race", slug: "amazing-race" },
  { name: "CSI-Bones", slug: "csi-bones" },
  { name: "Cultural Race", slug: "cultural-race" },
  { name: "Amongst Us", slug: "amongst-us" },
  { name: "Alice in Motherland", slug: "alice-in-motherland" },
  { name: "Battle of the Olympians", slug: "battle-of-the-olympians" },
  { name: "Archery Tag", slug: "archery-tag" },
  { name: "Builder Cross", slug: "builder-cross" },
  { name: "GelBlitz", slug: "gel-blitz" },
  { name: "Minute To Win It", slug: "minute-to-win-it" },
  { name: "Monopoly Dash", slug: "monopoly-dash" },
  { name: "Nerfwar", slug: "nerfwar" },
  { name: "Running Man Adventure", slug: "running-man" },
  { name: "Sotong Game", slug: "sotong-game" },
  { name: "Tag-tical Laser", slug: "tag-tical-laser-teambuilding" },
  { name: "Treasure Heist", slug: "treasure-heist" },
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
  ...physicalTeamBuildingServices.map((service) => service.slug),
  ...virtualTeamBuildingServices.map((service) => service.slug),
  ...retreatServices.map((service) => service.slug),
  ...trainingServices.map((service) => service.slug),
]);

export const serviceCategoryLabels: Record<string, string> = {
  ...Object.fromEntries(physicalTeamBuildingServices.map((service) => [service.slug, "Physical Team Building"])),
  ...Object.fromEntries(virtualTeamBuildingServices.map((service) => [service.slug, "Virtual Team Building"])),
  ...Object.fromEntries(retreatServices.map((service) => [service.slug, "Retreats"])),
  ...Object.fromEntries(trainingServices.map((service) => [service.slug, "Training"])),
};