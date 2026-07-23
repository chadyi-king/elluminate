/**
 * Canonical public commercial facts for every live child service route.
 *
 * Keep prices, durations, package rules, visible planning facts and Offer
 * schema aligned by reading from this file. GST is intentionally not
 * mentioned in public copy.
 */

export const standardActivityInclusions = [
  "Activity concept",
  "Playing materials and equipment",
  "Facilitators",
  "Basic setup",
  "Scoring",
  "Free public venue or route",
];

export const standardOptionalExtras = [
  "Paid venue",
  "Catering",
  "Transport",
  "Photography",
  "Prizes",
  "Branding",
  "Printed reports",
  "Substantial customisation",
];

const publicPrice = (amount, unit = "pax") => ({
  amount,
  currency: "SGD",
  unit,
  label: unit === "session" ? `From $${amount}/session` : `From $${amount}/${unit}`,
});

const baseProfile = (slug, family, price, duration, setting, familyFacts, overrides = {}) => ({
  slug,
  family,
  publicPrice: price,
  minimumGroup: 10,
  duration,
  setting,
  recommendedLeadTime: "At least 2 weeks; earlier if customised",
  inclusions: standardActivityInclusions,
  extras: standardOptionalExtras,
  familyFacts,
  packageRules: {
    minimum: price?.label ?? "Custom quote",
    enhanced: "Custom quote",
    premium: "Custom quote",
  },
  ...overrides,
});

const physicalFacts = (intensity = "3 out of 5", accessibility = "Tasks can be adapted", weather = "Sheltered or indoor options planned") => [
  { label: "Intensity", value: intensity },
  { label: "Accessibility", value: accessibility },
  { label: "Weather contingency", value: weather },
];

const equipmentFacts = (matchFormat, providedGear) => [
  { label: "Match format", value: matchFormat },
  { label: "Team size", value: "Balanced for safe, active play" },
  { label: "Provided gear", value: providedGear },
];

const virtualFacts = [
  { label: "Platform", value: "Zoom, Microsoft Teams or Google Meet" },
  { label: "Devices", value: "One connected device per participant or team" },
  { label: "Technical hosting", value: "Live host and joining brief included" },
];

const retreatFacts = (travel, accommodation, inclusions) => [
  { label: "Travel", value: travel },
  { label: "Accommodation", value: accommodation },
  { label: "Programme inclusions", value: inclusions },
];

const trainingFacts = (framework, exercises, takeaways) => [
  { label: "Framework", value: framework },
  { label: "Exercises", value: exercises },
  { label: "Practical takeaways", value: takeaways },
];

export const serviceCommercialProfiles = {
  "amazing-race": baseProfile("amazing-race", "physical", publicPrice(45), "3–4 hours, flexible timing", "Outdoor, with indoor options", physicalFacts("3 out of 5", "Route and tasks can be adapted", "Sheltered route or indoor backup")),
  "csi-bones": baseProfile("csi-bones", "physical", publicPrice(55), "3–4 hours, flexible timing", "Indoor-first", physicalFacts("1 out of 5", "Seated and low-movement roles available", "Not weather-dependent")),
  "cultural-race": baseProfile("cultural-race", "physical", publicPrice(48), "3–4 hours, flexible timing", "Outdoor heritage districts", physicalFacts("3 out of 5", "Route and movement can be adapted", "Sheltered stops or indoor alternative")),
  "amongst-us": baseProfile("amongst-us", "physical", publicPrice(50), "3–4 hours, flexible timing", "Indoor", physicalFacts("1 out of 5", "Low-movement format", "Not weather-dependent")),
  "alice-in-motherland": baseProfile("alice-in-motherland", "physical", publicPrice(48), "3–4 hours, flexible timing", "Indoor or hybrid", physicalFacts("2 out of 5", "Roles and movement can be adapted", "Indoor format available")),
  "battle-of-the-olympians": baseProfile("battle-of-the-olympians", "physical", publicPrice(48), "3–4 hours, flexible timing", "Outdoor, with indoor options", physicalFacts("4 out of 5", "Challenge intensity can be tuned", "Sheltered arena or adjusted game mix")),
  "builder-cross": baseProfile("builder-cross", "physical", publicPrice(45), "3–4 hours, flexible timing", "Indoor", physicalFacts("2 out of 5", "Hands-on roles can be adapted", "Not weather-dependent")),
  "minute-to-win-it": baseProfile("minute-to-win-it", "physical", publicPrice(45), "3–4 hours, flexible timing", "Indoor", physicalFacts("2 out of 5", "Station mix can be adapted", "Not weather-dependent")),
  "monopoly-dash": baseProfile("monopoly-dash", "physical", publicPrice(55), "3–4 hours, flexible timing", "Outdoor route or indoor board", physicalFacts("2 out of 5", "Movement and roles can be adapted", "Indoor game-board option")),
  "running-man": baseProfile("running-man", "physical", publicPrice(48), "3–4 hours, flexible timing", "Outdoor, with indoor options", physicalFacts("4 out of 5", "Mission intensity can be tuned", "Sheltered or indoor mission mix")),
  "sotong-game": baseProfile("sotong-game", "physical", publicPrice(50), "3–4 hours, flexible timing", "Indoor, outdoor or hybrid", physicalFacts("3 out of 5", "Game mix can be adapted", "Indoor or hybrid game sequence")),
  "treasure-heist": baseProfile("treasure-heist", "physical", publicPrice(55), "3–4 hours, flexible timing", "Indoor, outdoor or hybrid", physicalFacts("2 out of 5", "Roles and movement can be adapted", "Indoor heist route available")),

  "archery-tag": baseProfile("archery-tag", "equipment", publicPrice(50), "3–4 hours, flexible timing", "Indoor or outdoor arena", equipmentFacts("Facilitated team objectives", "Bows, foam-tipped arrows and safety briefing")),
  "gel-blitz": baseProfile("gel-blitz", "equipment", publicPrice(50), "3–4 hours, flexible timing", "Indoor or outdoor arena", equipmentFacts("Facilitated squad missions", "Game equipment and safety briefing")),
  nerfwar: baseProfile("nerfwar", "equipment", publicPrice(50), "3–4 hours, flexible timing", "Indoor or outdoor arena", equipmentFacts("Facilitated foam-blaster missions", "Foam blasters, darts and safety briefing")),
  "tag-tical-laser-teambuilding": baseProfile("tag-tical-laser-teambuilding", "equipment", publicPrice(50), "3–4 hours, flexible timing", "Indoor or outdoor arena", equipmentFacts("Sensor-based team missions", "Laser equipment and safety briefing")),

  "amazing-race-virtual": baseProfile("amazing-race-virtual", "virtual", publicPrice(25), "1.5–2 hours", "Live online", virtualFacts),
  "fit-in-your-team-virtual": baseProfile("fit-in-your-team-virtual", "virtual", publicPrice(25), "1.5–2 hours", "Live online", virtualFacts),
  "the-gameshow-experience-virtual": baseProfile("the-gameshow-experience-virtual", "virtual", publicPrice(25), "1.5–2 hours", "Live online", virtualFacts),
  "the-great-zodiac-hunt-virtual": baseProfile("the-great-zodiac-hunt-virtual", "virtual", publicPrice(25), "1.5–2 hours", "Live online", virtualFacts),
  "the-nuclear-fallout-escape-room-virtual": baseProfile("the-nuclear-fallout-escape-room-virtual", "virtual", publicPrice(25), "1.5–2 hours", "Live online", virtualFacts),
  "the-patriot-act-virtual": baseProfile("the-patriot-act-virtual", "virtual", publicPrice(25), "1.5–2 hours", "Live online", virtualFacts),
  "tomb-raider-king-treasure-hunt-virtual": baseProfile("tomb-raider-king-treasure-hunt-virtual", "virtual", publicPrice(25), "1.5–2 hours", "Live online", virtualFacts),
  "grand-christmas-delivery": baseProfile("grand-christmas-delivery", "virtual", publicPrice(25), "1.5–2 hours", "Live online", virtualFacts),

  "overseas-retreats": baseProfile("overseas-retreats", "retreat", publicPrice(400), "2D1N–5D4N; 7D6N by arrangement", "Overseas", retreatFacts("Flights excluded; transfers planned to package", "Matched to destination and group", "Stay, meals, activities and itinerary vary by package"), {
    inclusions: ["Retreat planning", "Accommodation planning", "Programme design", "Activities", "Itinerary coordination"],
  }),
  "local-retreats": baseProfile("local-retreats", "retreat", publicPrice(550), "2D1N–5D4N; 7D6N by arrangement", "Singapore", retreatFacts("Local transfers available as an extra", "Staycation, heritage and premium options", "Stay, meals and activities vary by package"), {
    inclusions: ["Retreat planning", "Accommodation planning", "Programme design", "Activities", "Itinerary coordination"],
  }),
  "incentive-travel": baseProfile("incentive-travel", "retreat", publicPrice(800), "2D1N–5D4N; 7D6N by arrangement", "Local or overseas", retreatFacts("Flights and transfers planned to package", "Matched to destination and recognition brief", "Recognition moments, activities and coordination vary by package"), {
    inclusions: ["Travel programme planning", "Accommodation planning", "Recognition moments", "Activities", "Itinerary coordination"],
  }),

  mbti: baseProfile("mbti", "training", publicPrice(150), "Approximately 4 hours", "Indoor", trainingFacts("MBTI preference pairs", "Guided reflection and team mapping", "Personalised digital report and practical communication cues"), {
    inclusions: ["Facilitated profiling session", "Personalised digital report", "Guided exercises", "Team discussion"],
    extras: [...standardOptionalExtras, "Printed personalised reports"],
  }),
  disc: baseProfile("disc", "training", publicPrice(150), "Approximately 4 hours", "Indoor", trainingFacts("DiSC behavioural styles", "Profile interpretation and workplace scenarios", "Personalised digital report and communication adjustments"), {
    inclusions: ["Facilitated profiling session", "Personalised digital report", "Guided exercises", "Team discussion"],
    extras: [...standardOptionalExtras, "Printed personalised reports"],
  }),
  ocean: baseProfile("ocean", "training", publicPrice(150), "Approximately 4 hours", "Indoor", trainingFacts("Big Five personality traits", "Trait reflection and team mapping", "Personalised digital report and collaboration experiments"), {
    inclusions: ["Facilitated profiling session", "Personalised digital report", "Guided exercises", "Team discussion"],
    extras: [...standardOptionalExtras, "Printed personalised reports"],
  }),
  "mass-talks": baseProfile("mass-talks", "training", publicPrice(500, "session"), "30–60 minutes", "Indoor or event venue", trainingFacts("Keynote, seminar or moderated session", "Audience interaction where appropriate", "A clear message shaped for the room")),
  workshops: baseProfile("workshops", "training", publicPrice(150), "Approximately 4 hours", "Indoor, virtual or hybrid", trainingFacts("Matched to the workshop objective", "Interactive discussion and practice", "Exercises, reflection and workplace actions")),
  "youth-camps": baseProfile("youth-camps", "training", publicPrice(80, "student"), "1–5 days", "Outdoor or site-based", trainingFacts("Age-appropriate development framework", "Facilitated activities and reflection", "Bonding, leadership and practical learning")),
  "corporate-days": baseProfile("corporate-days", "training", publicPrice(100), "Half-day or full-day", "Indoor, outdoor or mixed", trainingFacts("Multi-activity company programme", "Facilitated zones and shared moments", "Planning, facilitation and event-day coordination")),
  "wellness-events": baseProfile("wellness-events", "training", publicPrice(75), "2–6 hours", "Indoor, outdoor or retreat format", trainingFacts("Movement, recovery and mental wellbeing", "Accessible guided activities", "A practical team reset"), {
    recommendedLeadTime: "At least 2 weeks; earlier for multi-part programmes",
  }),
  "leadership-offsites": baseProfile("leadership-offsites", "training", null, "3–5 days", "Local or overseas", trainingFacts("Leadership alignment and decision-making", "Facilitated agenda and working sessions", "Decisions, owners and action capture"), {
    recommendedLeadTime: "Enquire as soon as preferred dates are known",
    packageRules: { minimum: "Custom quote", enhanced: "Custom quote", premium: "Custom quote" },
  }),
};

export const serviceCommercialSlugs = Object.freeze(Object.keys(serviceCommercialProfiles));

export function getServiceCommercialProfile(slug) {
  return serviceCommercialProfiles[slug] ?? null;
}

export function getCommercialPlanningFacts(slug) {
  const profile = getServiceCommercialProfile(slug);
  if (!profile) return [];

  return [
    { label: "Starting price", value: profile.publicPrice?.label ?? "Custom quote" },
    { label: "Group size", value: `From ${profile.minimumGroup} participants` },
    { label: "Duration", value: profile.duration },
    { label: "Setting", value: profile.setting },
    { label: "Customisation level", value: "Standard, enhanced or bespoke" },
    { label: "Recommended booking lead time", value: profile.recommendedLeadTime },
    ...profile.familyFacts,
  ];
}
