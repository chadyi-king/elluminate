import { getServiceCommercialProfile } from "./serviceCommercialProfiles.js";

// Short keyword line shown inside each service page H1, under the activity name.
// It keeps the visual title unchanged while telling search engines what and where.
const serviceHeroKeywordLines = {
  "amazing-race": "Team Building in Singapore",
  "csi-bones": "Indoor Mystery Challenge in Singapore",
  "cultural-race": "Team Building in Singapore",
  "amongst-us": "Team Building in Singapore",
  "alice-in-motherland": "Team Building in Singapore",
  "battle-of-the-olympians": "Team Building in Singapore",
  "builder-cross": "Team Building in Singapore",
  "minute-to-win-it": "Indoor Team Games in Singapore",
  "running-man": "Team Building in Singapore",
  "sotong-game": "Team Building in Singapore",
  "treasure-heist": "Team Building in Singapore",
  "archery-tag": "Team Building in Singapore",
  "gel-blitz": "Team Building in Singapore",
  "nerfwar": "Team Building in Singapore",
  "tag-tical-laser-teambuilding": "Team Building in Singapore",
  "amazing-race-virtual": "Online Team Building in Singapore",
  "fit-in-your-team-virtual": "Virtual Team Building in Singapore",
  "the-gameshow-experience-virtual": "Virtual Team Building in Singapore",
  "the-great-zodiac-hunt-virtual": "Virtual Team Building in Singapore",
  "the-nuclear-fallout-escape-room-virtual": "Virtual Team Building in Singapore",
  "the-patriot-act-virtual": "Virtual Team Building in Singapore",
  "tomb-raider-king-treasure-hunt-virtual": "Virtual Team Building in Singapore",
  "grand-christmas-delivery": "Virtual Team Building in Singapore",
  "overseas-retreats": "Planned from Singapore",
  "local-retreats": "Company Offsites in Singapore",
  "incentive-travel": "Corporate Reward Trips from Singapore",
  "mbti": "Team Profiling in Singapore",
  "disc": "Team Profiling Workshop in Singapore",
  "ocean": "Big Five Personality Workshop in Singapore",
  "mass-talks": "Corporate Keynotes and Seminars in Singapore",
  "workshops": "Workplace Training in Singapore",
  "youth-camps": "School Programmes in Singapore",
  "corporate-days": "Company and Family Days in Singapore",
  "wellness-events": "Workplace Wellbeing in Singapore",
  "leadership-offsites": "Facilitated from Singapore, Local or Overseas",
};

const service = (slug, title, description) => ({
  path: `/services/${slug}`,
  slug,
  title,
  description,
  heroKeywordLine: serviceHeroKeywordLines[slug],
});

const routeSeoBase = [
  { path: "/", h1: "Team Building, Company Retreats & Training in Singapore", title: "Team Building and Company Experiences Singapore | Elluminate", description: "Team building, company retreats and corporate training in Singapore. Physical, virtual and overseas formats for groups of 10+, run by Elluminate." },
  { path: "/about", h1: "About Elluminate: Team Building in Singapore", title: "About Our Team Experiences in Singapore | Elluminate", description: "Meet Elluminate and discover the people, values, and thinking behind our team-building, retreat, and training experiences in Singapore." },
  { path: "/portfolio", title: "Team Building and Company Event Portfolio | Elluminate", description: "See real team-building activities, workshops and company retreats delivered by the Elluminate and Team Elevate team." },
  { path: "/blog", title: "Team Building Planning Guides Singapore | Elluminate", description: "Practical guides for planning team-building activities, company retreats and workplace experiences in Singapore." },
  { path: "/services/team-building", family: "team-building", searchIntent: "Corporate team building Singapore", h1: "Corporate Team Building in Singapore, Planned Around Your Team", title: "Corporate Team Building Services Singapore | Elluminate", description: "Corporate team building in Singapore: outdoor races, indoor mysteries, arena battles and virtual games. Physical from $45/pax, virtual from $25/pax." },
  { path: "/services/retreats", family: "retreats", searchIntent: "Company retreats and corporate retreats", h1: "Company Retreats in Singapore", title: "Company Retreats and Offsites Singapore | Elluminate", description: "Local and overseas company retreats from Singapore, 2D1N to 5D4N. Local stays from $550/pax, overseas from $400/pax (flights excluded)." },
  { path: "/services/training", family: "training", searchIntent: "Corporate training, workshops and team profiling", h1: "Corporate Training in Singapore", title: "Corporate Training and Workshops Singapore | Elluminate", description: "Corporate training in Singapore: MBTI, DiSC and OCEAN profiling, workshops, talks, wellness events and leadership offsites. Profiling from $150/pax." },

  { path: "/blog/top-10-team-building-activities-singapore-2026", type: "article", title: "10 Team Building Activities in Singapore | Elluminate", description: "A practical guide to comparing indoor, outdoor and virtual team-building formats by venue, energy level and team objective." },
  { path: "/blog/how-to-plan-amazing-race-company", type: "article", title: "How to Plan an Amazing Race for Your Company | Elluminate", description: "A practical guide to planning a corporate Amazing Race in Singapore, including routes, group flow and wet-weather considerations." },
  { path: "/blog/indoor-vs-outdoor-team-building", type: "article", title: "Indoor vs Outdoor Team Building in Singapore | Elluminate", description: "Compare indoor and outdoor corporate team-building formats by venue, weather, energy level and event objective." },

  service("amazing-race", "Amazing Race Team Building in Singapore | Elluminate", "Clues, checkpoints and facilitated missions in a 3–4 hour Amazing Race in Singapore. From $45/pax for groups of 10+, with indoor backup options."),
  service("csi-bones", "CSI-Bones Mystery Team Building Singapore | Elluminate", "Solve a mystery indoors: CSI-Bones teams read the evidence, test theories and crack the case. From $55/pax, 3–4 hours, low-movement roles available."),
  service("cultural-race", "Cultural Race Team Building Singapore | Elluminate", "Race through Singapore's heritage districts solving clues and local missions. Cultural Race runs 3–4 hours from $48/pax, with sheltered stops if it rains."),
  service("amongst-us", "Amongst Us Social Deduction Singapore | Elluminate", "Complete missions, read the room and unmask hidden impostors in a live social-deduction game. Indoor and low-movement, 3–4 hours, from $50/pax."),
  service("alice-in-motherland", "Alice in Motherland Team Building Singapore | Elluminate", "Curious puzzles, themed stations and team missions in a story-led indoor or hybrid activity. Alice in Motherland runs 3–4 hours from $48/pax."),
  service("battle-of-the-olympians", "Battle of the Olympians Team Building Singapore | Elluminate", "Facilitated challenge rounds, team scoring and a big finish in one team tournament. Outdoor or sheltered, with adjustable intensity, from $48/pax."),
  service("builder-cross", "Builder Cross Team Building Singapore | Elluminate", "Teams turn raw materials into one structure that must survive the final test. Builder Cross is an indoor, hands-on challenge: 3–4 hours, from $45/pax."),
  service("minute-to-win-it", "Minute To Win It Team Building Singapore | Elluminate", "Sixty-second station games that are easy to explain and quick to rotate. Indoor Minute To Win It for ballrooms or offices, 3–4 hours, from $45/pax."),
  service("running-man", "Running Man Adventure Team Building Singapore | Elluminate", "Variety-show chase missions and quick-fire team games in a high-energy format. Running Man runs 3–4 hours from $48/pax, with indoor options."),
  service("sotong-game", "Sotong Game Team Building Challenge Singapore | Elluminate", "Squid-style survival rounds with clear rules, short games and team-safe suspense. Indoor, outdoor or hybrid, 3–4 hours, from $50/pax."),
  service("treasure-heist", "Treasure Heist Team Building Singapore | Elluminate", "Crack the clues, plan the job and beat the vault in a heist-themed team mission. Indoor, outdoor or hybrid, 3–4 hours, from $55/pax."),
  service("archery-tag", "Archery Tag Corporate Team Building Singapore | Elluminate", "Archery Tag with bows, foam-tipped arrows and a safety briefing provided. Facilitated team objectives in an indoor or outdoor arena, from $50/pax."),
  service("gel-blitz", "GelBlitz Team Building Activity Singapore | Elluminate", "Gel-blaster squad missions with game equipment and a safety briefing included. GelBlitz runs 3–4 hours in an indoor or outdoor arena, from $50/pax."),
  service("nerfwar", "Nerfwar Team Building Activity Singapore | Elluminate", "Foam-blaster team battles with blasters, darts and a safety briefing provided. Nerfwar suits mixed groups, indoor or outdoor, from $50/pax."),
  service("tag-tical-laser-teambuilding", "Tactical Laser Tag Team Building Singapore | Elluminate", "Sensor-based laser tag missions built on team strategy, with no projectiles. Laser equipment and safety briefing included; 3–4 hours from $50/pax."),

  service("amazing-race-virtual", "Virtual Amazing Race Team Building Singapore | Elluminate", "Remote and hybrid teams race through hosted clues and missions on Zoom, Teams or Google Meet. 1.5–2 hours from $25/pax, joining brief included."),
  service("fit-in-your-team-virtual", "Virtual Team Fitness Activity Singapore | Elluminate", "Hosted online fitness challenges that get remote teams moving together. 1.5–2 hours on Zoom, Teams or Google Meet, from $25/pax."),
  service("the-gameshow-experience-virtual", "Virtual Gameshow Team Building Singapore | Elluminate", "Quick rounds, buzzers and team play turn a video call into a hosted game show. 1.5–2 hours on Zoom, Microsoft Teams or Google Meet, from $25/pax."),
  service("the-great-zodiac-hunt-virtual", "Great Zodiac Hunt Virtual Team Building | Elluminate", "Follow themed clues and solve a zodiac mystery together online. The Great Zodiac Hunt is live-hosted for remote teams, 1.5–2 hours, from $25/pax."),
  service("the-nuclear-fallout-escape-room-virtual", "Nuclear Fallout Virtual Escape Room Singapore | Elluminate", "Beat the countdown in a live-hosted virtual escape room full of puzzles and team decisions. Nuclear Fallout runs 1.5–2 hours online from $25/pax."),
  service("the-patriot-act-virtual", "Singapore Virtual Team Building Activity | Elluminate", "Singapore-themed trivia and online team rounds, suited to National Day and mixed local groups. Live-hosted, 1.5–2 hours, from $25/pax."),
  service("tomb-raider-king-treasure-hunt-virtual", "Virtual Treasure Hunt Team Building Singapore | Elluminate", "Solve ancient traps and puzzles as one expedition team in a hosted virtual treasure hunt. 1.5–2 hours on Zoom, Teams or Google Meet, from $25/pax."),
  service("grand-christmas-delivery", "Christmas Virtual Team Building Singapore | Elluminate", "Year-end fun for remote or hybrid teams: a festive virtual mission, live-hosted for 1.5–2 hours, from $25/pax, with no venue needed."),

  service("overseas-retreats", "Overseas Corporate Retreat Planning Singapore | Elluminate", "Regional company retreats planned from Singapore: stay, transfers, activities and itinerary for 2D1N to 5D4N. From $400/pax, flights excluded."),
  service("local-retreats", "Local Corporate Company Retreats Singapore | Elluminate", "Singapore company retreats with staycation, heritage or premium stays, meals and activities. 2D1N to 5D4N from $550/pax, with no overseas travel."),
  service("incentive-travel", "Corporate Incentive Travel Planning Singapore | Elluminate", "Reward trips for top performers, local or overseas, with recognition moments, activities and itinerary coordination. 2D1N to 5D4N, from $800/pax."),

  service("mbti", "MBTI Team Profiling Workshop Singapore | Elluminate", "MBTI team workshop of about 4 hours with personalised digital reports, guided reflection and team mapping. From $150/pax for groups of 10+."),
  service("disc", "DiSC Team Profiling Workshop Singapore | Elluminate", "DiSC behavioural-styles workshop with personalised digital reports and workplace scenarios. About 4 hours, from $150/pax for groups of 10+."),
  service("ocean", "OCEAN Team Personality Workshop Singapore | Elluminate", "Big Five (OCEAN) personality workshop with trait reflection, team mapping and a personalised digital report. About 4 hours, from $150/pax."),
  service("mass-talks", "Corporate Talks and Seminars Singapore | Elluminate", "Keynotes, seminars and moderated sessions of 30–60 minutes, shaped for large corporate audiences in Singapore. From $500 per session."),
  service("workshops", "Corporate Workplace Workshops Singapore | Elluminate", "Interactive workplace workshops on communication, collaboration and leadership, run indoors, online or hybrid. About 4 hours, from $150/pax."),
  service("corporate-days", "Corporate Day Event Planning Singapore | Elluminate", "Half-day or full-day company and family days with facilitated activity zones, shared moments and event-day coordination. From $100/pax."),
  service("youth-camps", "School and Youth Camp Programmes Singapore | Elluminate", "School and youth camps of 1–5 days with team challenges, leadership practice and facilitated reflection. Outdoor or site-based, from $80/student."),
  service("wellness-events", "Corporate Wellness Event Planning Singapore | Elluminate", "Workplace wellness sessions of 2–6 hours with accessible movement, recovery and mental wellbeing activities. Indoor, outdoor or retreat format."),
  service("leadership-offsites", "Leadership Offsite Planning Singapore | Elluminate", "Leadership offsites of 3–5 days, local or overseas, with facilitated working sessions that end in clear decisions, owners and actions."),

  { path: "/teambuilding", title: "Corporate Team Building Singapore | Elluminate", description: "Corporate team building in Singapore: outdoor races, indoor mysteries, arena battles and virtual games. Physical from $45/pax, virtual from $25/pax.", redirectTo: "/services/team-building", robots: "noindex, follow" },
  { path: "/team-building", title: "Corporate Team Building Singapore | Elluminate", description: "Corporate team building in Singapore: outdoor races, indoor mysteries, arena battles and virtual games. Physical from $45/pax, virtual from $25/pax.", redirectTo: "/services/team-building", robots: "noindex, follow" },
  { path: "/corporate-team-building", title: "Corporate Team Building Singapore | Elluminate", description: "Corporate team building in Singapore: outdoor races, indoor mysteries, arena battles and virtual games. Physical from $45/pax, virtual from $25/pax.", redirectTo: "/services/team-building", robots: "noindex, follow" },
  { path: "/retreats", title: "Company Retreats and Offsites Singapore | Elluminate", description: "Local and overseas company retreats from Singapore, 2D1N to 5D4N. Local stays from $550/pax, overseas from $400/pax (flights excluded).", redirectTo: "/services/retreats", robots: "noindex, follow" },
  { path: "/training", title: "Corporate Training and Workshops Singapore | Elluminate", description: "Corporate training in Singapore: MBTI, DiSC and OCEAN profiling, workshops, talks, wellness events and leadership offsites. Profiling from $150/pax.", redirectTo: "/services/training", robots: "noindex, follow" },
  { path: "/services/corporate-retreats", title: "Overseas Corporate Retreat Planning Singapore | Elluminate", description: "Regional company retreats planned from Singapore: stay, transfers, activities and itinerary for 2D1N to 5D4N. From $400/pax, flights excluded.", redirectTo: "/services/overseas-retreats", robots: "noindex, follow" },
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
    heroKeywordLine: route.heroKeywordLine,
  };
};
