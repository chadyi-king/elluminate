import { getServiceCommercialProfile } from "./serviceCommercialProfiles.js";

const service = (slug, title, description) => ({ path: `/services/${slug}`, slug, title, description });

const routeSeoBase = [
  { path: "/", title: "Team Building and Company Experiences Singapore | Elluminate", description: "Plan physical and virtual team building, company retreats and corporate workshops around your people, objective, venue and timing." },
  { path: "/about", title: "About Our Team Experiences in Singapore | Elluminate", description: "Meet Elluminate and discover the people, values, and thinking behind our team-building, retreat, and training experiences in Singapore." },
  { path: "/portfolio", title: "Team Building and Company Event Portfolio | Elluminate", description: "See real team-building activities, workshops and company retreats delivered by the Elluminate and Team Elevate team." },
  { path: "/blog", title: "Team Building Planning Guides Singapore | Elluminate", description: "Practical guides for planning team-building activities, company retreats and workplace experiences in Singapore." },
  { path: "/services/team-building", family: "team-building", searchIntent: "Corporate team building Singapore", h1: "Corporate Team Building in Singapore, Planned Around Your Team", title: "Corporate Team Building Services Singapore | Elluminate", description: "Plan corporate team building in Singapore around your team, objective, venue and timing. Compare physical, equipment and virtual formats, then send your event brief." },
  { path: "/services/retreats", family: "retreats", searchIntent: "Company retreats and corporate retreats", h1: "Company Retreats Planned Around Your Team", title: "Company Retreats and Offsites Singapore | Elluminate", description: "Explore local and overseas company retreats planned around your group, schedule, objective and travel needs." },
  { path: "/services/training", family: "training", searchIntent: "Corporate training, workshops and team profiling", h1: "Corporate Training Planned Around Your Team", title: "Corporate Training and Workshops Singapore | Elluminate", description: "Explore corporate training, workshops and team profiling shaped around your audience, workplace context, timing and practical learning objective." },

  { path: "/blog/top-10-team-building-activities-singapore-2026", type: "article", title: "10 Team Building Activities in Singapore | Elluminate", description: "A practical guide to comparing indoor, outdoor and virtual team-building formats by venue, energy level and team objective." },
  { path: "/blog/how-to-plan-amazing-race-company", type: "article", title: "How to Plan an Amazing Race for Your Company | Elluminate", description: "A practical guide to planning a corporate Amazing Race in Singapore, including routes, group flow and wet-weather considerations." },
  { path: "/blog/indoor-vs-outdoor-team-building", type: "article", title: "Indoor vs Outdoor Team Building in Singapore | Elluminate", description: "Compare indoor and outdoor corporate team-building formats by venue, weather, energy level and event objective." },

  service("amazing-race", "Amazing Race Team Building in Singapore | Elluminate", "Plan a facilitated Amazing Race in Singapore around your group, route, timing, movement level and wet-weather needs."),
  service("csi-bones", "CSI-Bones Mystery Team Building Singapore | Elluminate", "Plan an indoor CSI-Bones mystery challenge with evidence, team reasoning and facilitation shaped around your group and venue."),
  service("cultural-race", "Cultural Race Team Building Singapore | Elluminate", "Explore Singapore through a facilitated Cultural Race with clues, local locations and team missions planned around your group."),
  service("amongst-us", "Amongst Us Social Deduction Singapore | Elluminate", "Plan a facilitated social-deduction team activity with missions, hidden roles and group discussion."),
  service("alice-in-motherland", "Alice in Motherland Team Building Singapore | Elluminate", "Explore a story-led team activity with themed puzzles and collaborative missions for indoor or suitable hybrid venues."),
  service("battle-of-the-olympians", "Battle of the Olympians Team Building Singapore | Elluminate", "Plan a tournament-style team activity with facilitated challenge rounds, scoring and adjustable activity intensity."),
  service("builder-cross", "Builder Cross Team Building Singapore | Elluminate", "Plan a hands-on construction challenge around collaboration, communication, venue space and group size."),
  service("minute-to-win-it", "Minute To Win It Team Building Singapore | Elluminate", "Plan quick-rotation team games around your pax, venue layout, timing and preferred energy level."),
  service("monopoly-dash", "Monopoly Dash Team Building Singapore | Elluminate", "Plan a Monopoly Dash strategy race around your location, group profile, timing and preferred level of movement."),
  service("running-man", "Running Man Adventure Team Building Singapore | Elluminate", "Plan a facilitated Running Man-style activity with team missions and a pace suited to your group and venue."),
  service("sotong-game", "Sotong Game Team Building Challenge Singapore | Elluminate", "Explore a facilitated challenge format with team rounds, scoring and activity intensity planned around your group."),
  service("treasure-heist", "Treasure Heist Team Building Singapore | Elluminate", "Plan a heist-themed team challenge with missions, strategy and facilitation shaped around your venue and group."),
  service("archery-tag", "Archery Tag Corporate Team Building Singapore | Elluminate", "Explore a facilitated Archery Tag activity and discuss venue, safety, group size and event flow with Elluminate."),
  service("gel-blitz", "GelBlitz Team Building Activity Singapore | Elluminate", "Explore a facilitated GelBlitz activity and discuss venue, safety, equipment and group requirements with Elluminate."),
  service("nerfwar", "Nerfwar Team Building Activity Singapore | Elluminate", "Explore a facilitated Nerfwar activity and discuss venue, equipment, group size and event flow with Elluminate."),
  service("tag-tical-laser-teambuilding", "Tactical Laser Tag Team Building Singapore | Elluminate", "Explore a facilitated tactical laser team activity and discuss venue, group size and event flow with Elluminate."),

  service("amazing-race-virtual", "Virtual Amazing Race Team Building Singapore | Elluminate", "Plan a facilitated Virtual Amazing Race for remote or hybrid teams, with the platform and session flow confirmed before the event."),
  service("fit-in-your-team-virtual", "Virtual Team Fitness Activity Singapore | Elluminate", "Explore a facilitated virtual fitness activity planned around your remote team, timing and participation level."),
  service("the-gameshow-experience-virtual", "Virtual Gameshow Team Building Singapore | Elluminate", "Plan an online game-show format with active hosting and team challenges for remote or hybrid groups."),
  service("the-great-zodiac-hunt-virtual", "Great Zodiac Hunt Virtual Team Building | Elluminate", "Explore a zodiac-themed virtual team challenge with facilitated puzzles and group missions."),
  service("the-nuclear-fallout-escape-room-virtual", "Nuclear Fallout Virtual Escape Room Singapore | Elluminate", "Plan a facilitated virtual escape-room challenge for remote or hybrid teams."),
  service("the-patriot-act-virtual", "Singapore Virtual Team Building Activity | Elluminate", "Explore a Singapore-themed virtual team activity with hosted challenges for remote or hybrid groups."),
  service("tomb-raider-king-treasure-hunt-virtual", "Virtual Treasure Hunt Team Building Singapore | Elluminate", "Plan a facilitated virtual treasure-hunt challenge with puzzles and team missions."),
  service("grand-christmas-delivery", "Christmas Virtual Team Building Singapore | Elluminate", "Plan a facilitated festive virtual activity for remote or hybrid company teams."),

  service("overseas-retreats", "Overseas Corporate Retreat Planning Singapore | Elluminate", "Plan a regional company retreat around destination, pax, travel, accommodation, programme flow and team objectives."),
  service("local-retreats", "Local Corporate Company Retreats Singapore | Elluminate", "Plan a Singapore company offsite around venue, stay, programme flow, group needs and event objective."),
  service("incentive-travel", "Corporate Incentive Travel Planning Singapore | Elluminate", "Plan a company incentive trip around participant profile, destination, travel window, recognition goal and operating details."),

  service("mbti", "MBTI Team Profiling Workshop Singapore | Elluminate", "Discuss an MBTI-framed team workshop around communication preferences, team context and the assessment scope confirmed in your proposal."),
  service("disc", "DiSC Team Profiling Workshop Singapore | Elluminate", "Discuss a DiSC-framed workshop around behaviour, communication and your workplace context, with assessment scope confirmed before delivery."),
  service("ocean", "OCEAN Team Personality Workshop Singapore | Elluminate", "Explore an OCEAN-framed team workshop around personality traits, workplace behaviour and facilitated discussion."),
  service("mass-talks", "Corporate Talks and Seminars Singapore | Elluminate", "Plan a corporate talk around the audience, message, timing, speaker brief and event format."),
  service("workshops", "Corporate Workplace Workshops Singapore | Elluminate", "Plan a facilitated workplace workshop around your audience, objective, timing and preferred delivery format."),
  service("corporate-days", "Corporate Day Event Planning Singapore | Elluminate", "Plan a company day around your audience, programme flow, venue, activities and operating requirements."),
  service("youth-camps", "School and Youth Camp Programmes Singapore | Elluminate", "Plan a facilitated school or youth programme around age group, pax, venue, supervision and programme objectives."),
  service("wellness-events", "Corporate Wellness Event Planning Singapore | Elluminate", "Plan a workplace wellness event around your audience, venue, participation needs and desired tone."),
  service("leadership-offsites", "Leadership Offsite Planning Singapore | Elluminate", "Plan a leadership offsite around the agenda, decisions, participant group, venue and facilitation needs."),

  { path: "/teambuilding", title: "Corporate Team Building Singapore | Elluminate", description: "Plan corporate team building in Singapore around your team, objective, venue and timing.", redirectTo: "/services/team-building", robots: "noindex, follow" },
  { path: "/team-building", title: "Corporate Team Building Singapore | Elluminate", description: "Plan corporate team building in Singapore around your team, objective, venue and timing.", redirectTo: "/services/team-building", robots: "noindex, follow" },
  { path: "/corporate-team-building", title: "Corporate Team Building Singapore | Elluminate", description: "Plan corporate team building in Singapore around your team, objective, venue and timing.", redirectTo: "/services/team-building", robots: "noindex, follow" },
  { path: "/retreats", title: "Company Retreats and Offsites Singapore | Elluminate", description: "Explore local and overseas company retreats planned around your group, schedule, objective and travel needs.", redirectTo: "/services/retreats", robots: "noindex, follow" },
  { path: "/training", title: "Corporate Training and Workshops Singapore | Elluminate", description: "Explore corporate training, workshops and team profiling shaped around your audience and workplace objective.", redirectTo: "/services/training", robots: "noindex, follow" },
  { path: "/services/corporate-retreats", title: "Overseas Corporate Retreat Planning Singapore | Elluminate", description: "Plan a regional company retreat around destination, pax, travel, accommodation, programme flow and team objectives.", redirectTo: "/services/overseas-retreats", robots: "noindex, follow" },
];

const familyParentPath = {
  physical: "/services/team-building",
  equipment: "/services/team-building",
  virtual: "/services/team-building",
  retreat: "/services/retreats",
  training: "/services/training",
};

const stableLastmod = (route) => {
  if (route.type === "article") return "2026-03-05";
  if (route.redirectTo) return undefined;
  if (route.path === "/" || route.path.startsWith("/services/")) return "2026-07-24";
  return "2026-07-22";
};

export const routeSeo = routeSeoBase.map((route) => {
  const commercial = route.slug ? getServiceCommercialProfile(route.slug) : undefined;
  const canonicalPath = route.redirectTo || route.path;
  const parentPath = commercial ? familyParentPath[commercial.family] : undefined;
  return {
    ...route,
    canonicalPath,
    canonicalUrl: `https://elluminate.sg${canonicalPath === "/" ? "" : canonicalPath}`,
    indexable: !route.redirectTo && route.robots !== "noindex, follow",
    family: route.family || commercial?.family,
    parentPath,
    searchIntent: route.searchIntent || route.title.split("|")[0].trim(),
    h1: route.h1 || route.title.split("|")[0].trim(),
    commercial,
    lastmod: stableLastmod(route),
    changefreq: route.path === "/" || route.path === "/blog" ? "weekly" : "monthly",
    priority: route.path === "/" ? "1.0" : route.path === "/services/team-building" ? "0.9" : route.path.startsWith("/services/") ? "0.8" : "0.7",
  };
});

export const getRouteSeo = (path) => {
  const route = routeSeo.find((item) => item.path === path);
  if (!route) return undefined;
  return {
    title: route.title,
    description: route.description,
    canonical: route.canonicalUrl,
    type: route.type || "website",
    robots: route.robots || "index, follow",
  };
};
