/**
 * Keyword landing pages: one page per search phrase that had no page of its own.
 *
 * - /services/virtual-team-building  → "virtual team building singapore"
 * - /services/bintan-batam-retreats  → "bintan corporate retreat", "batam team building"
 * - /services/indoor-team-building   → "indoor team building singapore"
 *
 * Prices, durations and group sizes are read from serviceCommercialProfiles so
 * these pages never drift from the activity pages they link to.
 */
import { getServiceCommercialProfile } from "@/data/serviceCommercialProfiles";

export type KeywordLandingKey = "virtual-team-building" | "bintan-batam-retreats" | "indoor-team-building";

export interface KeywordLandingImage {
  src: string;
  alt: string;
}

export interface KeywordLandingFact {
  label: string;
  value: string;
}

export interface KeywordLandingCard {
  title: string;
  copy: string;
}

export interface KeywordLandingCompare {
  eyebrow: string;
  title: string;
  intro: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
}

export interface KeywordLandingItinerary {
  eyebrow: string;
  title: string;
  intro: string;
  days: { day: string; title: string; items: string[] }[];
}

export interface KeywordLandingConfig {
  key: KeywordLandingKey;
  path: string;
  eventCategory: string;
  schemaName: string;
  /** Activity whose public "from" price this page quotes. */
  priceSlug: string;
  parent: { name: string; path: string };
  breadcrumb: string;
  accent: string;
  additionalDetails: string;
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    facts: KeywordLandingFact[];
    cta: string;
    reassurance: string[];
    images: [KeywordLandingImage, KeywordLandingImage, KeywordLandingImage];
  };
  problem: {
    eyebrow: string;
    title: string;
    copy: string;
    points: string[];
  };
  valueStack: {
    eyebrow: string;
    title: string;
    intro: string;
    items: KeywordLandingCard[];
    priceLine: string;
  };
  options: {
    eyebrow: string;
    title: string;
    intro: string;
    slugs: string[];
  };
  compare?: KeywordLandingCompare;
  itinerary?: KeywordLandingItinerary;
  recentEvents?: { client: string; event: string; pax: number }[];
  faqs: { question: string; answer: string }[];
  steps: KeywordLandingCard[];
  finalCta: {
    eyebrow: string;
    title: string;
    copy: string;
    button: string;
    gets: string[];
  };
  related: { name: string; path: string }[];
}

const priceLabel = (slug: string) => getServiceCommercialProfile(slug)?.publicPrice?.label ?? "Custom quote";

const virtualSlugs = [
  "amazing-race-virtual",
  "the-nuclear-fallout-escape-room-virtual",
  "the-gameshow-experience-virtual",
  "tomb-raider-king-treasure-hunt-virtual",
  "the-great-zodiac-hunt-virtual",
  "the-patriot-act-virtual",
  "fit-in-your-team-virtual",
  "grand-christmas-delivery",
];

const indoorSlugs = [
  "csi-bones",
  "amongst-us",
  "treasure-heist",
  "builder-cross",
  "minute-to-win-it",
  "alice-in-motherland",
  "tag-tical-laser-teambuilding",
  "nerfwar",
];

export const keywordLandingPages: Record<KeywordLandingKey, KeywordLandingConfig> = {
  "virtual-team-building": {
    key: "virtual-team-building",
    path: "/services/virtual-team-building",
    eventCategory: "Virtual Team Building",
    priceSlug: "amazing-race-virtual",
    schemaName: "Virtual Team Building Singapore",
    parent: { name: "Team Building", path: "/services/team-building" },
    breadcrumb: "Virtual Team Building",
    accent: "#8B5CF6",
    additionalDetails: "I would like help choosing a virtual or hybrid team-building activity.",
    hero: {
      eyebrow: "Virtual team building Singapore",
      headline: "Remote teams that actually switch their cameras on.",
      sub: "Live-hosted online games for remote and hybrid teams across Singapore and the region. Your people join from one link; our host runs the whole thing on Zoom, Microsoft Teams or Google Meet.",
      facts: [
        { label: "Price", value: `${priceLabel("amazing-race-virtual")}` },
        { label: "Length", value: "1.5–2 hours" },
        { label: "Group", value: "10 to 500+ people" },
      ],
      cta: "Get my virtual quote",
      reassurance: ["No software to install", "Live host and joining brief included", "Works across time zones"],
      images: [
        { src: "/images/services/the-gameshow-experience-virtual/hero.jpg", alt: "Remote team laughing together during a hosted virtual game show" },
        { src: "/images/services/amazing-race-virtual/hero.jpg", alt: "Virtual Amazing Race challenge screen with team video tiles" },
        { src: "/images/services/the-nuclear-fallout-escape-room-virtual/hero.jpg", alt: "Online team solving a puzzle round in a virtual escape room" },
      ],
    },
    problem: {
      eyebrow: "Why most online sessions flop",
      title: "A quiz on a video call is not team building.",
      copy: "Remote staff already spend hours on video calls. Another one with a slideshow quiz and twenty muted tiles tells them the company did the minimum. A good virtual session gives every person a job, a team and a reason to unmute in the first five minutes.",
      points: [
        "Cameras stay off and the same three people talk",
        "Hosts read from slides and lose the room by minute ten",
        "Overseas colleagues join late, confused, or not at all",
      ],
    },
    valueStack: {
      eyebrow: "What you get",
      title: "Everything handled, from the calendar invite to the winners' screen.",
      intro: "You send one link to your team. We do the rest.",
      items: [
        { title: "A live professional host", copy: "A real person runs the game, calls on quiet players and keeps the energy up. Not a pre-recorded video." },
        { title: "Breakout teams set up for you", copy: "We split your people into mixed teams so departments and offices actually meet." },
        { title: "Joining brief and tech check", copy: "A simple joining note for staff, plus a quick check before the session so nobody gets stuck." },
        { title: "Live scoreboard and finale", copy: "Points, rankings and a winners' moment that gives the session a proper ending." },
        { title: "Your themes and in-jokes", copy: "Company trivia, product rounds or festive themes built in on request." },
        { title: "Photos for your internal post", copy: "Screenshots of the best moments, ready for your newsletter or LinkedIn." },
      ],
      priceLine: `${priceLabel("amazing-race-virtual")} for groups of 10 or more. One price covers hosting, game platform and the joining brief.`,
    },
    options: {
      eyebrow: "Pick your game",
      title: "Eight live-hosted virtual team-building games",
      intro: "Each runs for 1.5 to 2 hours on the platform you already use. Not sure which one fits? Tell us your group and we will recommend two.",
      slugs: virtualSlugs,
    },
    compare: {
      eyebrow: "Quick guide",
      title: "Which virtual game suits your team?",
      intro: "A simple way to narrow the choice before you ask us.",
      columns: ["Best for", "Energy", "Good pick"],
      rows: [
        { label: "Mixed teams who barely know each other", values: ["Breaking the ice", "Medium", "Virtual Amazing Race"] },
        { label: "Puzzle lovers and analytical teams", values: ["Problem solving", "Medium", "Nuclear Fallout escape room"] },
        { label: "Big groups and town halls", values: ["Pure fun", "High", "The Gameshow Experience"] },
        { label: "Teams who sit all day", values: ["Getting people moving", "High", "Fit In Your Team"] },
        { label: "Year-end and festive sessions", values: ["Celebration", "Medium", "Grand Christmas Delivery"] },
      ],
    },
    faqs: [
      { question: "How much does virtual team building cost in Singapore?", answer: `Our virtual games start ${priceLabel("amazing-race-virtual").toLowerCase()} for groups of 10 or more. The price includes the live host, game platform and joining brief. Larger groups and custom themes are quoted to your brief.` },
      { question: "Which platforms do you run on?", answer: "Zoom, Microsoft Teams and Google Meet. If your company uses a different platform, tell us and we will check it before you book." },
      { question: "What do participants need?", answer: "A laptop or phone with a camera, a stable internet connection and the meeting link. No downloads or accounts are needed for most games." },
      { question: "Can we run it for a hybrid team, with some people in the office?", answer: "Yes. Office groups can play as one team on a shared screen while remote colleagues join from home. We plan the teams so both sides get equal airtime." },
      { question: "Our team is spread across countries. Will that work?", answer: "Yes. We schedule around your time zones and keep instructions simple for colleagues joining in a second language." },
      { question: "How many people can join?", answer: "From 10 people to large groups of several hundred. Big groups get more hosts and more breakout teams so nobody gets lost." },
      { question: "How far ahead should we book?", answer: "Two weeks is comfortable. Shorter notice is often possible for standard games, so ask us before you rule it out." },
    ],
    steps: [
      { title: "Tell us your group", copy: "Group size, date, platform and what you want people to feel afterwards. Two minutes on the form." },
      { title: "Get two recommendations and a quote", copy: "We suggest the two games that fit best and send a clear price." },
      { title: "Send one link, then enjoy it", copy: "We send the joining brief, run a tech check and host the whole session live." },
    ],
    finalCta: {
      eyebrow: "Your next team call could be the good one",
      title: "Give your remote team a session they talk about the next morning.",
      copy: "Tell us your group size and date. We reply within one working day with two game ideas and a price.",
      button: "Plan my virtual session",
      gets: ["Two games matched to your team", "A clear price for your group size", "A date held while you get approval"],
    },
    related: [
      { name: "All team-building activities", path: "/services/team-building" },
      { name: "Indoor team building", path: "/services/indoor-team-building" },
      { name: "Virtual Amazing Race", path: "/services/amazing-race-virtual" },
      { name: "Virtual escape room", path: "/services/the-nuclear-fallout-escape-room-virtual" },
    ],
  },

  "bintan-batam-retreats": {
    key: "bintan-batam-retreats",
    path: "/services/bintan-batam-retreats",
    eventCategory: "Corporate Retreat",
    priceSlug: "overseas-retreats",
    schemaName: "Bintan and Batam Corporate Retreats",
    parent: { name: "Company Retreats", path: "/services/retreats" },
    breadcrumb: "Bintan & Batam Retreats",
    accent: "#14A39A",
    additionalDetails: "I would like help planning a company retreat in Bintan or Batam.",
    hero: {
      eyebrow: "Bintan & Batam corporate retreats",
      headline: "An overseas retreat, one hour from the office.",
      sub: "Ferry, resort, team building and dinner planned as one package. Your team leaves Singapore in the morning and is on the beach by lunch, with no flights, no airport queues and no lost day of travel.",
      facts: [
        { label: "Price", value: `${priceLabel("overseas-retreats")}` },
        { label: "Trip", value: "2D1N to 3D2N" },
        { label: "Ferry", value: "About 1 hour" },
      ],
      cta: "Plan my Bintan or Batam retreat",
      reassurance: ["Ferry tickets and group check-in handled", "Indoor plan ready if it rains", "One quote, one point of contact"],
      images: [
        { src: "/images/services/overseas-retreats/gallery-3.jpg", alt: "Company group gathered under palm trees during a retreat activity" },
        { src: "/images/services/treasure-heist/gallery-2.jpg", alt: "Colleagues posing together on the beach after a team challenge" },
        { src: "/images/services/local-retreats/gallery-3.jpg", alt: "Long seafront dinner table for a company retreat group at sunset" },
      ],
    },
    problem: {
      eyebrow: "The organiser's headache",
      title: "Overseas trips eat your time before they eat your budget.",
      copy: "Flights, visas, hotel blocks, transfers, activities, dinner, a rain plan and fifty WhatsApp messages from colleagues. Bintan and Batam cut most of that out: a short ferry, resort areas built for groups, and one partner who plans every piece together.",
      points: [
        "Flight retreats lose a full day to airports and transfers",
        "Separate vendors for hotel, activities and dinner means you chase everyone",
        "One rainy afternoon can wipe out the programme without a backup plan",
      ],
    },
    valueStack: {
      eyebrow: "What the package covers",
      title: "One plan for the whole trip, not five vendors to chase.",
      intro: "We plan the trip around what you want the team to come back with: closer working relationships, a reset after a tough year, or a reward for hitting target.",
      items: [
        { title: "Ferry and group check-in", copy: "Group tickets, check-in and passport collection planned for you at both terminals." },
        { title: "Resort and rooming", copy: "Beach resorts in Bintan's Lagoi area or Batam's Nongsa coast, matched to your group size and budget." },
        { title: "Transfers on both sides", copy: "Coaches from the ferry terminal to the resort and back, timed to the ferry schedule." },
        { title: "Facilitated team building", copy: "Beach games, races or indoor challenges run by our own facilitators, not the resort's." },
        { title: "Dinner and celebration night", copy: "Seafood dinner, awards or a themed party night to close the trip on a high." },
        { title: "Rain plan and on-site lead", copy: "An indoor version of every activity and one Elluminate lead with your group throughout." },
      ],
      priceLine: `${priceLabel("overseas-retreats")} for groups of 10 or more. The final price depends on resort, room sharing, dates and programme.`,
    },
    options: {
      eyebrow: "Activities we run on the island",
      title: "Team-building formats that work on a resort",
      intro: "Most retreat groups pick one main activity for day two, then add free-and-easy time. Every format below has an indoor version for wet weather.",
      slugs: ["amazing-race", "battle-of-the-olympians", "sotong-game", "running-man", "treasure-heist", "builder-cross"],
    },
    compare: {
      eyebrow: "Bintan or Batam?",
      title: "Two islands, two different trips",
      intro: "Both are a short ferry from Singapore. The right one depends on how your team likes to unwind.",
      columns: ["Bintan", "Batam"],
      rows: [
        { label: "Ferry from Singapore", values: ["About 1 hour from Tanah Merah", "About 45 to 60 minutes from HarbourFront or Tanah Merah"] },
        { label: "Feel", values: ["Quiet beach resorts, slower pace", "Livelier, with town, food and shopping nearby"] },
        { label: "Best for", values: ["Bonding, reflection and leadership time", "Active groups and budget-conscious teams"] },
        { label: "Typical trip", values: ["2D1N or 3D2N", "Day trip or 2D1N"] },
        { label: "Popular add-ons", values: ["Water sports, ATV rides, spa", "Seafood dinner, golf, city tour"] },
      ],
    },
    itinerary: {
      eyebrow: "Sample plan",
      title: "A 3D2N Bintan retreat at a glance",
      intro: "A typical shape we adapt to your goals, group size and budget. Batam trips follow the same rhythm, often shortened to 2D1N.",
      days: [
        { day: "Day 1", title: "Arrive and switch off", items: ["Morning ferry from Tanah Merah", "Coach to the resort and check-in", "Welcome lunch and short kick-off", "Free afternoon, then group dinner"] },
        { day: "Day 2", title: "The team day", items: ["Facilitated team-building programme", "Lunch by the beach", "Free time for water sports or the spa", "Celebration night with awards"] },
        { day: "Day 3", title: "Reflect and return", items: ["Short debrief: what we take back to work", "Late breakfast and check-out", "Afternoon ferry back to Singapore"] },
      ],
    },
    recentEvents: [
      { client: "National Parks Board", event: "Bintan Team Getaway", pax: 303 },
      { client: "Nanyang Polytechnic", event: "Batam Retreat Day", pax: 404 },
      { client: "EDB Singapore", event: "Bintan Team Getaway", pax: 205 },
      { client: "NEA Singapore", event: "Batam Retreat Day", pax: 64 },
    ],
    faqs: [
      { question: "How much does a Bintan or Batam corporate retreat cost?", answer: `Packages start ${priceLabel("overseas-retreats").toLowerCase()} for groups of 10 or more. Resort choice, room sharing, dates and the activities you add decide the final price. We send a clear breakdown so you can compare options.` },
      { question: "How long is the ferry from Singapore?", answer: "About one hour to Bintan from Tanah Merah Ferry Terminal, and about 45 to 60 minutes to Batam from HarbourFront or Tanah Merah, depending on the terminal you land at." },
      { question: "What documents does my team need?", answer: "A passport valid for at least six months. Visa rules depend on nationality, so we collect passport details early and flag anyone who needs a visa on arrival or e-visa well before the trip." },
      { question: "What happens if it rains?", answer: "Every outdoor activity we plan has an indoor version at the resort, so the programme carries on. Tropical showers are usually short, and we schedule around them." },
      { question: "Can you handle large groups?", answer: "Yes. We have run Bintan and Batam trips for groups of several hundred, with staggered ferries, more facilitators and a clear rooming plan." },
      { question: "Is a day trip to Batam possible?", answer: "Yes. A Batam day trip with a morning ferry, team-building programme, seafood lunch and an evening return is a popular choice for teams that cannot stay overnight." },
      { question: "How early should we start planning?", answer: "Eight to twelve weeks gives the widest choice of resorts and ferry slots, especially for weekends and year-end. Shorter timelines are possible; ask us what is still open." },
    ],
    steps: [
      { title: "Share your brief", copy: "Group size, preferred dates, budget range and what the trip is for. Rough is fine." },
      { title: "Compare two options", copy: "We send two plans, usually one Bintan and one Batam, each with a clear price breakdown." },
      { title: "Confirm and pack", copy: "We book the ferry, resort and programme, send the staff briefing and travel with your group." },
    ],
    finalCta: {
      eyebrow: "Resort dates go first",
      title: "Get your team on the island before the good weekends are gone.",
      copy: "Tell us your group size and preferred month. We reply within one working day with a Bintan and a Batam option side by side.",
      button: "Get my retreat options",
      gets: ["A Bintan and a Batam plan to compare", "A clear price breakdown per person", "Dates held while you get approval"],
    },
    related: [
      { name: "All company retreats", path: "/services/retreats" },
      { name: "Overseas retreats", path: "/services/overseas-retreats" },
      { name: "Local retreats in Singapore", path: "/services/local-retreats" },
      { name: "Incentive travel", path: "/services/incentive-travel" },
    ],
  },

  "indoor-team-building": {
    key: "indoor-team-building",
    path: "/services/indoor-team-building",
    eventCategory: "Physical Team Building",
    priceSlug: "builder-cross",
    schemaName: "Indoor Team Building Singapore",
    parent: { name: "Team Building", path: "/services/team-building" },
    breadcrumb: "Indoor Team Building",
    accent: "#2A8DFF",
    additionalDetails: "I would like help choosing an indoor team-building activity.",
    hero: {
      eyebrow: "Indoor team building Singapore",
      headline: "Team building that never gets rained out.",
      sub: "Air-conditioned mysteries, heists, build challenges and arena games that work in your office, a hotel ballroom or an event space. No sweat, no sunburn, no weather backup needed.",
      facts: [
        { label: "Price", value: `${priceLabel("builder-cross")}` },
        { label: "Length", value: "3–4 hours" },
        { label: "Group", value: "10 to 500+ people" },
      ],
      cta: "Get my indoor quote",
      reassurance: ["Runs in your office or a venue we find", "Low-movement roles for everyone", "Facilitators, props and setup included"],
      images: [
        { src: "/images/services/csi-bones/gallery-2.jpg", alt: "Colleagues crowding around clues during an indoor mystery challenge" },
        { src: "/images/services/builder-cross/gallery-5.jpg", alt: "Team smiling beside the structure they built indoors" },
        { src: "/images/services/csi-bones/hero.jpg", alt: "Team examining evidence together in an indoor investigation activity" },
      ],
    },
    problem: {
      eyebrow: "Why indoor works",
      title: "Singapore weather should not decide whether your event happens.",
      copy: "Outdoor races are great until the 3pm thunderstorm, the heat warning or the colleague who cannot run. Indoor team building keeps every person comfortable and involved, so the energy goes into the challenge, not into surviving the weather.",
      points: [
        "Afternoon storms cancel or shorten outdoor programmes",
        "Heat and long walks leave some colleagues on the sidelines",
        "Mixed-age teams need roles that do not depend on fitness",
      ],
    },
    valueStack: {
      eyebrow: "What you get",
      title: "A complete indoor programme, not a box of games.",
      intro: "Bring the people. We bring the story, the props, the facilitators and the finish.",
      items: [
        { title: "An activity matched to your group", copy: "Thinking, building, playing or competing: we pick the format that fits your people and goals." },
        { title: "Facilitators who run the room", copy: "Trained facilitators brief the teams, keep time and make sure quieter people get involved." },
        { title: "Props, materials and setup", copy: "Everything arrives with us and is set up before your team walks in." },
        { title: "Venue help", copy: "Use your office or event space, or we suggest suitable venues for your group size." },
        { title: "Scoring and a proper finale", copy: "Live scoring, a winning moment and a short wrap-up that links the fun back to work." },
        { title: "Roles for every fitness level", copy: "Low-movement and seated roles are built in, so nobody has to sit out." },
      ],
      priceLine: `Indoor activities start ${priceLabel("builder-cross").toLowerCase()} for groups of 10 or more. Venue, catering and photography can be added to the same quote.`,
    },
    options: {
      eyebrow: "Pick your indoor activity",
      title: "Eight indoor team-building activities in Singapore",
      intro: "From quiet thinkers to competitive sports teams, each runs indoors in 3 to 4 hours. Not sure which one fits? Tell us your group and we will recommend two.",
      slugs: indoorSlugs,
    },
    compare: {
      eyebrow: "Quick guide",
      title: "Which indoor activity suits your team?",
      intro: "A simple way to narrow the choice before you ask us.",
      columns: ["Best for", "Energy", "Good pick"],
      rows: [
        { label: "Analytical teams and mixed ages", values: ["Problem solving", "Low", "CSI-Bones"] },
        { label: "Groups who love a bit of drama", values: ["Reading people", "Low", "Amongst Us"] },
        { label: "Teams that need to plan together", values: ["Collaboration", "Medium", "Builder Cross or Treasure Heist"] },
        { label: "Large groups in a ballroom", values: ["Quick laughs", "Medium", "Minute To Win It"] },
        { label: "Competitive, sporty teams", values: ["Adrenaline", "High", "Laser tag or Nerfwar"] },
      ],
    },
    faqs: [
      { question: "How much does indoor team building cost in Singapore?", answer: `Indoor activities start ${priceLabel("builder-cross").toLowerCase()} for groups of 10 or more, including facilitators, props, setup and scoring. Venue, food and transport are optional extras we can add to one quote.` },
      { question: "Can you run it in our office?", answer: "Yes, if there is enough clear floor space for your group. Send us the room size or a few photos and we will tell you which activities fit." },
      { question: "Do you help find a venue?", answer: "Yes. We suggest indoor venues that suit your group size, budget and location, and plan the activity around the room." },
      { question: "We have colleagues who cannot do physical activity. Is that a problem?", answer: "No. Most of our indoor activities are low-movement by design, and every one has roles that work seated or with limited mobility." },
      { question: "How many people can take part?", answer: "From 10 people to several hundred. Larger groups get more facilitators and run in parallel zones so everyone stays involved." },
      { question: "How long does an indoor activity take?", answer: "Most run 3 to 4 hours including briefing and finale. Shorter versions are possible if it sits inside a conference or town hall." },
      { question: "How far ahead should we book?", answer: "At least two weeks, earlier if you want a custom theme or a venue found for you." },
    ],
    steps: [
      { title: "Tell us your group", copy: "Group size, date, venue (if you have one) and what you want the session to achieve." },
      { title: "Get two recommendations and a quote", copy: "We match two indoor activities to your team and send a clear price." },
      { title: "Turn up and play", copy: "We arrive early, set up, run the programme and pack everything away." },
    ],
    finalCta: {
      eyebrow: "Rain or shine, the date stays",
      title: "Lock in a team day the weather cannot cancel.",
      copy: "Tell us your group size, date and venue. We reply within one working day with two indoor ideas and a price.",
      button: "Plan my indoor event",
      gets: ["Two activities matched to your team", "Venue fit checked for your room", "A clear price for your group size"],
    },
    related: [
      { name: "All team-building activities", path: "/services/team-building" },
      { name: "Virtual team building", path: "/services/virtual-team-building" },
      { name: "CSI-Bones mystery", path: "/services/csi-bones" },
      { name: "Indoor vs outdoor guide", path: "/blog/indoor-vs-outdoor-team-building" },
    ],
  },
};

export const keywordLandingPageList = Object.values(keywordLandingPages);
