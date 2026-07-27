import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Award,
  BookOpenCheck,
  Brain,
  BriefcaseBusiness,
  CalendarCheck2,
  Compass,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Map,
  MapPinned,
  MessageSquareText,
  Plane,
  Presentation,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import retreatJourneyActor from "@/assets/service-characters/batch-03/overseas-retreats-actor-1.webp";
import retreatPlannerActor from "@/assets/service-characters/batch-03/overseas-retreats-actor-2.webp";
import retreatEnergyActor from "@/assets/service-characters/batch-03/overseas-retreats-actor-3.webp";
import retreatLocalActor from "@/assets/service-characters/batch-03/local-retreats-actor-2.webp";
import trainingThoughtfulActor from "@/assets/service-characters/batch-03/mbti-actor-2.webp";
import trainingProcessActor from "@/assets/service-characters/batch-04/workshops-actor-3.webp";
import trainingEnergyActor from "@/assets/service-characters/batch-04/workshops-actor-1.webp";
import trainingSupportActor from "@/assets/service-characters/batch-04/workshops-actor-2.webp";

export type ServiceCampaignKind = "retreats" | "training";

export type ServiceCampaignPhoto = {
  src: string;
  alt: string;
  position?: string;
  caption?: string;
};

export type ServiceCampaignMetric = {
  value: string;
  label: string;
  icon: LucideIcon;
  accent: string;
};

export type ServiceCampaignStep = {
  title: string;
  copy: string;
  icon?: LucideIcon;
};

export type ServiceCampaignStakeMoment = ServiceCampaignStep & {
  image: string;
  alt: string;
};

export type ServiceCampaignFaq = {
  question: string;
  answer: string;
};

export type ServiceCampaignCard = {
  slug: string;
  filters: string[];
};

export type ServiceCampaignCatalogueGroup = {
  title: string;
  description: string;
  items: Array<{ name: string; slug: string }>;
  icon: LucideIcon;
  accent: string;
  tone: string;
};

export type ServiceCampaignLandingConfig = {
  kind: ServiceCampaignKind;
  path: string;
  label: string;
  breadcrumb: string;
  schemaName: string;
  eventCategory: string;
  additionalDetails: string;
  hero: {
    semanticHeadline: string;
    topLeft: string[];
    lowerLeft: string[];
    topRight: string[];
    lowerRight: string[];
    storyLead: string;
    storyBody: string;
    cta: string;
    actor: string;
    actorAlt: string;
    actorWidth: number;
    actorHeight: number;
    photos: ServiceCampaignPhoto[];
  };
  theme: {
    stage: string;
    deep: string;
    accent: string;
    pale: string;
    warm: string;
    danger: string;
    success: string;
  };
  proof: {
    headline: string;
    body: string;
    testimonialSource: string;
    metricsSource: string;
    metrics: ServiceCampaignMetric[];
    testimonialIds: string[];
  };
  stakes: {
    eyebrow: string;
    headline: string;
    body: string;
    organiserQuestion: string;
    items: string[];
    closing: string;
    actor: string;
    moments: ServiceCampaignStakeMoment[];
  };
  comparison: {
    headline: string;
    body: string;
    commonLabel: string;
    commonHeadline: string;
    commonItems: string[];
    elluminateHeadline: string;
    elluminateItems: string[];
    elluminateClosing: string;
    sequence: ServiceCampaignStep[];
  };
  value: {
    eyebrow: string;
    headline: string;
    body: string;
    columns: Array<{ title: string; items: string[] }>;
    connectedLine: string;
    clarity: string[];
  };
  discovery: {
    eyebrow: string;
    headline: string;
    body: string;
    callout: string;
    filters: string[];
    cards: ServiceCampaignCard[];
    collectionHeadline: string;
    collectionBody: string;
    groups: ServiceCampaignCatalogueGroup[];
  };
  evidence: {
    eyebrow: string;
    headline: string;
    body: string;
    gallery: ServiceCampaignPhoto[];
    actors: { left: string; right: string };
    testimonialEyebrow: string;
    testimonialHeading: string;
    testimonialDescription: string;
    orderingSeed: string;
  };
  fit: {
    headline: string;
    strong: string[];
    different: string[];
    boundary: string;
    faqs: ServiceCampaignFaq[];
  };
  process: {
    headline: string;
    steps: ServiceCampaignStep[];
    actor: string;
  };
  closing: {
    eyebrow: string;
    headlineParts: Array<{ text: string; accent?: boolean }>;
    body: string;
    enquiryValue: string[];
    bridge: string;
    line: string;
    photos: ServiceCampaignPhoto[];
  };
  footerLinks: Array<{ name: string; path: string }>;
};

const retreatConfig: ServiceCampaignLandingConfig = {
  kind: "retreats",
  path: "/services/retreats",
  label: "Company Retreat Planning Singapore",
  breadcrumb: "Retreats",
  schemaName: "Company Retreat Planning Singapore",
  eventCategory: "Corporate Retreat",
  additionalDetails: "I would like help planning a local or overseas company retreat.",
  hero: {
    semanticHeadline: "Company Retreats Your People Will Still Talk About",
    topLeft: ["Company", "Retreats"],
    lowerLeft: ["Your", "People"],
    topRight: ["Will", "Still"],
    lowerRight: ["Talk", "About"],
    storyLead: "Beautiful",
    storyBody:
      "places are only the beginning. A retreat can still move work somewhere nicer without bringing the team closer. We connect the stay, schedule and shared moments so the whole trip feels worth taking.",
    cta: "Plan My Company Retreat",
    actor: "/images/campaigns/retreats/hero-retreat-man-v4.webp",
    actorAlt: "Illustrative campaign visual of a fictional adult Asian professional holding a lit sparkler",
    actorWidth: 863,
    actorHeight: 1823,
    photos: [
      {
        src: "/images/services/local-retreats/hero.jpg",
        alt: "Large company retreat group gathered together at Bird Paradise",
        position: "50% 52%",
      },
      {
        src: "/images/services/local-retreats/addons.jpg",
        alt: "Retreat dinner arranged beside the beach at sunset",
        position: "48% 55%",
      },
      {
        src: "/images/services/local-retreats/gallery-6.jpg",
        alt: "Company retreat group gathered with travel bags and gifts",
        position: "50% 50%",
      },
      {
        src: "/images/services/overseas-retreats/gallery-6.jpg",
        alt: "Colleagues together at an overseas retreat destination",
        position: "45% 70%",
      },
    ],
  },
  theme: {
    stage: "#68D3B0",
    deep: "#0F6F5C",
    accent: "#15967C",
    pale: "#EDF9F5",
    warm: "#FFC857",
    danger: "#FF766B",
    success: "#0F9D76",
  },
  proof: {
    headline: "Your retreat should not be the test run.",
    body:
      "Years of planning multi-part event days have taught us where itineraries drag, where energy drops and which practical details decide whether the team actually reconnects.",
    testimonialSource: "Verified organiser feedback on whole-group fit, facilitation and professional delivery",
    metricsSource: "Figures reflect the shared Team Elevate and Elluminate operating history under EXSTATIC PTE. LTD.",
    metrics: [
      { value: "1,000+", label: "events across our operating history", icon: CalendarCheck2, accent: "#15967C" },
      { value: "100,000+", label: "participants across shared experiences", icon: UsersRound, accent: "#2A8DFF" },
      { value: "8+ years", label: "planning and delivering events together", icon: Award, accent: "#D99B00" },
      { value: "Local + overseas", label: "retreat directions to compare", icon: MapPinned, accent: "#8B5CF6" },
    ],
    testimonialIds: [
      "team-elevate-client-jurgen-carlson-ams-ag",
      "team-elevate-google-jnlynn",
      "team-elevate-google-wp",
      "team-elevate-client-darren-tey-lonza",
    ],
  },
  stakes: {
    eyebrow: "The quiet cost of getting it wrong",
    headline: "A beautiful destination cannot rescue a disconnected plan.",
    body:
      "Most retreats do not fail because the hotel is ugly. They fall flat when travel runs long, work sessions swallow the day, activities feel bolted on and people never get enough space to reconnect. The organiser returns with receipts, tired colleagues and no clear sense of what the trip changed.",
    organiserQuestion: "Will this feel like a real retreat, or just work in another location?",
    items: [
      "A larger budget spent on disconnected bookings.",
      "The organiser's confidence when every supplier answers a different part of the plan.",
      "The team's energy when travel, sessions and activities compete for the same time.",
      "A rare chance to reconnect away from the usual work rhythm.",
    ],
    closing:
      "A destination creates the setting. A connected plan gives the team a reason to remember what happened there.",
    actor: retreatJourneyActor,
    moments: [
      {
        title: "Protect the budget",
        copy: "Make the big decisions serve one purpose before the spend gets fragmented.",
        image: "/images/services/local-retreats/gallery-1.jpg",
        alt: "Company group enjoying a shared retreat programme",
        icon: ShieldCheck,
      },
      {
        title: "Protect the itinerary",
        copy: "Balance travel, sessions, meals and shared experiences as one rhythm.",
        image: "/images/services/overseas-retreats/gallery-2.jpg",
        alt: "Colleagues moving through an overseas retreat itinerary",
        icon: Route,
      },
      {
        title: "Protect the group's energy",
        copy: "Give people enough structure to connect and enough room to reset.",
        image: "/images/services/local-retreats/gallery-7.jpg",
        alt: "Retreat participants enjoying time together outdoors",
        icon: HeartHandshake,
      },
      {
        title: "Protect what comes back",
        copy: "Create a shared story that lasts beyond the flight or checkout.",
        image: "/images/services/overseas-retreats/gallery-7.jpg",
        alt: "Company retreat group celebrating together",
        icon: Sparkles,
      },
    ],
  },
  comparison: {
    headline: "The destination should fit the team, not the other way around.",
    body:
      "Starting with the purpose changes how the location, length, accommodation, work sessions, shared experiences, meals, movement and downtime are shaped before you confirm.",
    commonLabel: "The common destination-first approach",
    commonHeadline: "Choose the destination. Hope the retreat comes together.",
    commonItems: [
      "Choose a destination from a shortlist.",
      "Book rooms and transport as separate decisions.",
      "Fit work sessions and activities into whatever time remains.",
      "Leave pacing and participant needs to the final itinerary.",
      "Solve changes and contingencies supplier by supplier.",
    ],
    elluminateHeadline: "Make the whole retreat serve the purpose",
    elluminateItems: [
      "Start with the team, objective, travel comfort, dates and budget.",
      "Match the local or overseas direction to the brief.",
      "Build work, bonding, meals and downtime into one rhythm.",
      "Consider participant requirements before confirmation.",
      "Connect the itinerary, operating details and fallback decisions.",
    ],
    elluminateClosing:
      "You do not just receive bookings. You receive one retreat direction you can explain, compare and confidently confirm.",
    sequence: [
      { title: "Fit the purpose", copy: "Name what the time away should change.", icon: Target },
      { title: "Choose the direction", copy: "Compare local and overseas fit.", icon: Compass },
      { title: "Build the rhythm", copy: "Balance work, travel and downtime.", icon: Route },
      { title: "Connect the moments", copy: "Make each part support the whole.", icon: Sparkles },
      { title: "Protect the plan", copy: "Surface practical risks early.", icon: ShieldCheck },
    ],
  },
  value: {
    eyebrow: "The value behind our retreat planning",
    headline: "The room is not the retreat. The value is everything you connect around it.",
    body:
      "Travel, accommodation, work sessions, meals, shared experiences, downtime and contingency decisions all affect the same group. Connecting them early makes the retreat easier to explain, easier to operate and more worthwhile for the team.",
    columns: [
      {
        title: "Before you confirm, we help shape",
        items: [
          "Retreat direction around the brief",
          "Group and travel considerations",
          "Local or overseas fit",
          "Objective and programme balance",
          "Itinerary pacing",
          "Contingency considerations",
        ],
      },
      {
        title: "Your agreed scope can bring together",
        items: [
          "Retreat programme direction",
          "Itinerary planning",
          "Accommodation and transport coordination",
          "Shared team experiences",
          "Facilitation for selected programme elements",
          "Operating plan for agreed components",
        ],
      },
      {
        title: "Optional additions when they fit",
        items: [
          "Flights or upgraded accommodation",
          "Catering or private dining",
          "Photography and video",
          "Workshops or leadership sessions",
          "Branding and gifts",
          "Leisure or wellness experiences",
        ],
      },
    ],
    connectedLine:
      "Instead of coordinating the stay, schedule, shared experiences and operating details in isolation, you receive one connected retreat scope.",
    clarity: ["No payment at enquiry", "No need to choose a destination first", "Review the direction and quote before confirming"],
  },
  discovery: {
    eyebrow: "Find the right retreat direction",
    headline: "You do not have to decide local or overseas before you know what the retreat needs.",
    body:
      "Start with travel comfort, time away, team objective and budget. Elluminate can help narrow whether a Singapore retreat or regional getaway gives the group the right balance of focus, connection and reset.",
    callout:
      "Not sure whether the team needs one day, an overnight stay, a regional trip, more work time or more breathing room? That is a planning question, not homework for you.",
    filters: ["All", "Local", "Overseas", "Recognition"],
    cards: [
      { slug: "local-retreats", filters: ["All", "Local"] },
      { slug: "overseas-retreats", filters: ["All", "Overseas"] },
      { slug: "incentive-travel", filters: ["All", "Recognition"] },
    ],
    collectionHeadline: "Three retreat directions. One brief to shape the right itinerary.",
    collectionBody:
      "Compare local retreats, overseas retreats and recognition travel, then open any page for the full experience and practical details. You can also send the brief without choosing one first.",
    groups: [
      {
        title: "Singapore retreats",
        description: "Step out of the usual routine without adding regional travel.",
        items: [{ name: "Local Retreats", slug: "local-retreats" }],
        icon: MapPinned,
        accent: "#15967C",
        tone: "border-emerald-200 bg-emerald-50/[0.72]",
      },
      {
        title: "Regional retreats",
        description: "Create more distance from the everyday rhythm with an overseas stay.",
        items: [{ name: "Overseas Retreats", slug: "overseas-retreats" }],
        icon: Plane,
        accent: "#2A8DFF",
        tone: "border-blue-200 bg-blue-50/[0.72]",
      },
      {
        title: "Recognition travel",
        description: "Reward and recognise standout people with a considered journey.",
        items: [{ name: "Incentive Travel", slug: "incentive-travel" }],
        icon: Award,
        accent: "#D99B00",
        tone: "border-amber-200 bg-amber-50/[0.72]",
      },
    ],
  },
  evidence: {
    eyebrow: "Real retreat moments",
    headline: "The destination may change. The test is whether the team feels the retreat was worth the time away.",
    body:
      "A local stay, an overseas itinerary, a working offsite and a team reset should not follow the same rhythm. The evidence is in how the programme gives people time to focus, connect and return with a shared story.",
    gallery: [
      {
        src: "/images/services/overseas-retreats/hero.jpg",
        alt: "Company retreat group gathered at an overseas destination",
        caption: "A new setting: overseas retreat",
      },
      {
        src: "/images/services/local-retreats/gallery-2.jpg",
        alt: "Colleagues sharing a local retreat experience",
        caption: "Time together: local retreat",
      },
      {
        src: "/images/services/overseas-retreats/gallery-5.jpg",
        alt: "Retreat participants enjoying a shared programme moment",
        caption: "One rhythm: programme and downtime",
      },
      {
        src: "/images/services/local-retreats/gallery-7.jpg",
        alt: "Company retreat participants celebrating together",
        caption: "One story: a shared finish",
      },
    ],
    actors: { left: retreatLocalActor, right: retreatEnergyActor },
    testimonialEyebrow: "What organisers said afterwards",
    testimonialHeading: "Proof from organisers who trusted the wider event team",
    testimonialDescription:
      "Real feedback from the shared Team Elevate and Elluminate operating history. These reviews show planning, adaptability and delivery, rather than making a claim about this specific service.",
    orderingSeed: "retreats-client-stories",
  },
  fit: {
    headline: "This is the right fit if you need more than rooms, flights and a loose itinerary.",
    strong: [
      "You know why the team needs time away but not the right destination.",
      "You are comparing a local retreat with an overseas retreat.",
      "You need work, bonding, meals and downtime to feel connected.",
      "Your group has travel, dietary, mobility or rooming considerations.",
      "You want one planning direction instead of coordinating every supplier separately.",
    ],
    different: [
      "You only want the cheapest hotel quote.",
      "You need rooms or transport, not a retreat programme.",
      "You intend to self-run everything and only want supplier contacts.",
      "You want a fixed itinerary without discussing the team or purpose.",
      "The lowest quote is the only deciding factor.",
    ],
    boundary:
      "If you only need rooms or transport, there are simpler options. If you need the retreat to work as one connected experience, we should talk.",
    faqs: [
      {
        question: "We do not know whether to stay in Singapore or travel overseas.",
        answer:
          "That is a valid starting point. Share your date window, group size, travel comfort, budget range and what the retreat should achieve. Elluminate can compare suitable directions from there.",
      },
      {
        question: "Can work sessions and team activities be combined?",
        answer:
          "Yes. The planning goal is to create a rhythm where work, connection, meals and downtime support one another instead of competing for the same energy.",
      },
      {
        question: "Our team has different travel, dietary or mobility needs.",
        answer:
          "Include those needs in the brief. Travel comfort, rooming, dietary requirements, movement and access should be surfaced before the direction is confirmed.",
      },
      {
        question: "Is submitting the brief a commitment?",
        answer: "No. You can review the proposed direction and quote before deciding whether to confirm.",
      },
      {
        question: "Can you coordinate accommodation and transport?",
        answer:
          "Coordination can be included when it forms part of the agreed scope. The proposal will state what Elluminate is coordinating and what remains client-managed.",
      },
    ],
  },
  process: {
    headline: "From rough brief to a retreat you can confidently confirm",
    steps: [
      {
        title: "Share the retreat brief",
        copy:
          "Send the group size, date window, destination ideas, budget range and what the time away should achieve. It is fine if some details are still open.",
      },
      {
        title: "Discuss the right direction",
        copy:
          "We use the brief to compare local or overseas options and shape the balance of travel, stay, sessions, shared experiences and downtime.",
      },
      {
        title: "Confirm and run the retreat",
        copy:
          "Once the direction and quote are aligned, we confirm the agreed operating details and coordinate the retreat scope with you.",
      },
    ],
    actor: retreatPlannerActor,
  },
  closing: {
    eyebrow: "Before the best options become whatever is left",
    headlineParts: [
      { text: "The longer you wait, the more the retreat gets built around " },
      { text: "what is still available.", accent: true },
    ],
    body:
      "Share the brief while there is still room to compare local and overseas directions, align suitable stays, balance the programme and solve travel or participant needs before the itinerary becomes rushed.",
    enquiryValue: [
      "A clearer retreat direction based on the team and objective",
      "Practical questions to solve before confirmation",
      "A connected recommendation and quote to review",
    ],
    bridge: "One brief connects the destination, stay, programme rhythm, shared experiences and quote.",
    line: "Bring us the rough brief. We will shape the whole retreat around your team.",
    photos: [
      {
        src: "/images/services/local-retreats/gallery-5.jpg",
        alt: "Colleagues laughing during a local retreat activity",
      },
      {
        src: "/images/services/overseas-retreats/gallery-1.jpg",
        alt: "Company group together on an overseas retreat",
      },
      {
        src: "/images/services/local-retreats/addons.jpg",
        alt: "Retreat dinner arranged beside the beach",
      },
    ],
  },
  footerLinks: [
    { name: "Retreats", path: "/services/retreats" },
    { name: "Local Retreats", path: "/services/local-retreats" },
    { name: "Overseas Retreats", path: "/services/overseas-retreats" },
    { name: "Incentive Travel", path: "/services/incentive-travel" },
    { name: "Team Building", path: "/services/team-building" },
    { name: "Training", path: "/services/training" },
  ],
};

const trainingConfig: ServiceCampaignLandingConfig = {
  kind: "training",
  path: "/services/training",
  label: "Corporate Training Singapore",
  breadcrumb: "Training",
  schemaName: "Corporate Training and Workshops Singapore",
  eventCategory: "Training Workshop",
  additionalDetails: "I would like help shaping the right training, workshop or profiling direction for my group.",
  hero: {
    semanticHeadline: "Training Your People Can Actually Use",
    topLeft: ["Training"],
    lowerLeft: ["Your", "People"],
    topRight: ["Can"],
    lowerRight: ["Actually", "Use"],
    storyLead: "Monday",
    storyBody:
      "is the real test. You can fill a room, finish a deck and still watch everyone return to the same habits. We shape the format, facilitation and application around the work waiting outside the room.",
    cta: "Build My Training Programme",
    actor: "/images/campaigns/training/hero-training-woman-v4.webp",
    actorAlt: "Illustrative campaign visual of a fictional adult Southeast Asian professional holding a lit sparkler and folder",
    actorWidth: 873,
    actorHeight: 1802,
    photos: [
      {
        src: "/images/services/workshops/addons.jpg",
        alt: "Workshop participants enjoying a hands-on group exercise",
        position: "42% 50%",
      },
      {
        src: "/images/services/mbti/gallery-1.jpg",
        alt: "Training participants discussing and writing together",
        position: "50% 58%",
      },
      {
        src: "/images/services/disc/gallery-5.jpg",
        alt: "Colleagues collaborating during an applied training exercise",
        position: "58% 52%",
      },
      {
        src: "/images/services/ocean/gallery-2.jpg",
        alt: "Facilitator teaching a corporate learning session",
        position: "50% 50%",
      },
    ],
  },
  theme: {
    stage: "#FF8F78",
    deep: "#C94250",
    accent: "#E2585B",
    pale: "#FFF2ED",
    warm: "#FFD85D",
    danger: "#E45F55",
    success: "#1AA382",
  },
  proof: {
    headline: "Your people should not be the test run for a generic deck.",
    body:
      "Years of facilitated sessions have taught us where attention drops, what different audiences need and which practical choices decide whether learning survives Monday.",
    testimonialSource: "Verified organiser feedback on adaptation, curation and useful facilitation",
    metricsSource: "Figures reflect the shared Team Elevate and Elluminate operating history under EXSTATIC PTE. LTD.",
    metrics: [
      { value: "1,000+", label: "events across our operating history", icon: CalendarCheck2, accent: "#E2585B" },
      { value: "100,000+", label: "participants across shared experiences", icon: UsersRound, accent: "#2A8DFF" },
      { value: "8+ years", label: "planning and delivering experiences together", icon: Award, accent: "#D99B00" },
      { value: "9", label: "training and development directions to explore", icon: GraduationCap, accent: "#8B5CF6" },
    ],
    testimonialIds: [
      "team-elevate-google-joshua",
      "team-elevate-google-shahrul",
      "team-elevate-google-jk",
      "team-elevate-client-arianti-amalina-madame-tussauds",
    ],
  },
  stakes: {
    eyebrow: "The Monday-morning test",
    headline: "Training costs more when the useful part ends in the room.",
    body:
      "Most workshops do not fail loudly. People nod, fill a page and return to the same meetings, handovers and habits. The organiser has spent time, budget and credibility, but nobody can name what should be different on Monday.",
    organiserQuestion: "What should people actually do differently when work resumes?",
    items: [
      "Time from the whole room that nobody gets back.",
      "The organiser's credibility when the session feels generic.",
      "A rare chance to surface working habits and friction safely.",
      "The chance for useful language and practice to survive Monday.",
    ],
    closing:
      "No workshop can change a workplace by itself. A better-fit session can give people clearer language, a chance to practise and a practical next move.",
    actor: trainingThoughtfulActor,
    moments: [
      {
        title: "Protect people's time",
        copy: "Give every part of the session a clear reason to be there.",
        image: "/images/services/mbti/gallery-5.jpg",
        alt: "Participants taking part in a facilitated learning session",
        icon: CalendarCheck2,
      },
      {
        title: "Start with the real work",
        copy: "Connect the framework to situations the room recognises.",
        image: "/images/services/mbti/gallery-6.jpg",
        alt: "Corporate participants discussing workplace examples",
        icon: BriefcaseBusiness,
      },
      {
        title: "Give the room a way to practise",
        copy: "Let participants compare, test and adjust instead of only listening.",
        image: "/images/services/mbti/gallery-7.jpg",
        alt: "Small group practising during a workshop",
        icon: Activity,
      },
      {
        title: "End with a usable next move",
        copy: "Close with an application people can recognise when work resumes.",
        image: "/images/services/workshops/gallery-3.jpg",
        alt: "Workshop group reaching a practical shared result",
        icon: BookOpenCheck,
      },
    ],
  },
  comparison: {
    headline: "Topic-first training starts with the deck. We start with what should be different after the session.",
    body:
      "That changes what gets designed before confirmation. The audience, examples, practice, discussion, delivery mode and participant materials follow the real workplace context.",
    commonLabel: "The common topic-first approach",
    commonHeadline: "Choose a topic. Hope it changes something.",
    commonItems: [
      "Choose a topic from a list.",
      "Deliver the same deck to every audience.",
      "Ask people to listen before understanding the workplace context.",
      "Leave practical application to happen after the session.",
    ],
    elluminateHeadline: "Make the session fit the work",
    elluminateItems: [
      "Start with the audience, workplace context and desired change.",
      "Compare workshops, profiling, talks and broader programmes around the objective.",
      "Shape examples, prompts, participation and practice around the people.",
      "Facilitate discussion, reflection and practical application.",
      "Confirm timing, delivery mode, assessment inclusions and participant materials before delivery.",
    ],
    elluminateClosing:
      "You do not just receive training hours. You receive a direction, session design and practical application you can explain, compare and confirm.",
    sequence: [
      { title: "Name the work", copy: "Define what should change after the room clears.", icon: Target },
      { title: "Fit the format", copy: "Match the programme to the audience and need.", icon: Compass },
      { title: "Build the practice", copy: "Turn ideas into discussion and application.", icon: BookOpenCheck },
      { title: "Facilitate the room", copy: "Create more than one way to participate.", icon: MessageSquareText },
      { title: "Carry it into Monday", copy: "Close with a practical next move.", icon: BriefcaseBusiness },
    ],
  },
  value: {
    eyebrow: "The value behind our training design",
    headline: "You are not paying to fill a training slot. You are paying for a session people can use.",
    body:
      "A useful session needs the right problem, examples, participation, practice, facilitation and close. Elluminate connects those decisions so the learning is built around the work, not added after a generic deck is chosen.",
    columns: [
      {
        title: "Before the session, we help shape",
        items: [
          "The workplace or team challenge",
          "Audience level and group mix",
          "The practical learning objective",
          "Topic, programme or profiling direction",
          "Session depth and participation style",
          "In-person, virtual or hybrid fit",
        ],
      },
      {
        title: "Your confirmed scope may bring together",
        items: [
          "Agreed session or programme design",
          "Facilitated delivery",
          "Examples, prompts and practical exercises",
          "Structured discussion and reflection",
          "Participant resources stated in the proposal",
          "A practical closing application",
        ],
      },
      {
        title: "Optional additions when they fit",
        items: [
          "Profiling assessments and individual reports",
          "Team profile summaries",
          "Manager debriefs",
          "Follow-up or reinforcement sessions",
          "Substantial programme customisation",
          "Venue, catering or production support",
        ],
      },
    ],
    connectedLine:
      "Instead of piecing together the topic, facilitation, exercises and practical application separately, you receive one connected programme scope.",
    clarity: [
      "No need to choose the framework first",
      "Review the recommended direction and quote before confirmation",
      "Assessment and report inclusions confirmed in the proposal",
    ],
  },
  discovery: {
    eyebrow: "Find the right direction",
    headline: "You do not have to choose the framework before the problem is clear.",
    body:
      "Start with what should be different after the session. These directions are useful starting points. Elluminate can narrow the format around your audience, objective, timing and workplace context.",
    callout:
      "Not sure whether you need profiling, a workshop, a talk or a longer programme? That is a design question, not homework for you.",
    filters: ["All", "Profiling", "Workshop", "Programme"],
    cards: [
      { slug: "workshops", filters: ["All", "Workshop"] },
      { slug: "mbti", filters: ["All", "Profiling"] },
      { slug: "disc", filters: ["All", "Profiling"] },
      { slug: "ocean", filters: ["All", "Profiling"] },
      { slug: "corporate-days", filters: ["All", "Programme"] },
      { slug: "wellness-events", filters: ["All", "Programme"] },
    ],
    collectionHeadline: "Nine training and development directions. One brief to narrow them down.",
    collectionBody:
      "Compare profiling, workshops, talks and broader programmes, then share the audience and workplace need so the right direction can be shaped around them.",
    groups: [
      {
        title: "Profiling and team insight",
        description: "Use a shared framework to open more useful conversations about how people work.",
        items: [
          { name: "MBTI Profiling", slug: "mbti" },
          { name: "DISC Assessment", slug: "disc" },
          { name: "OCEAN Profiling", slug: "ocean" },
        ],
        icon: Brain,
        accent: "#8B5CF6",
        tone: "border-violet-200 bg-violet-50/[0.72]",
      },
      {
        title: "Workshops and group learning",
        description: "Bring ideas into the room through explanation, discussion and practice.",
        items: [
          { name: "Mass Talks", slug: "mass-talks" },
          { name: "Workshops", slug: "workshops" },
          { name: "Youth Camps", slug: "youth-camps" },
        ],
        icon: Presentation,
        accent: "#E2585B",
        tone: "border-rose-200 bg-rose-50/[0.72]",
      },
      {
        title: "Broader development programmes",
        description: "Connect learning, wellbeing and leadership moments across a wider programme.",
        items: [
          { name: "Corporate Days", slug: "corporate-days" },
          { name: "Wellness Events", slug: "wellness-events" },
          { name: "Leadership Offsites", slug: "leadership-offsites" },
        ],
        icon: Lightbulb,
        accent: "#D99B00",
        tone: "border-amber-200 bg-amber-50/[0.72]",
      },
    ],
  },
  evidence: {
    eyebrow: "Real training moments",
    headline: "Useful learning should look like more than a room watching slides.",
    body:
      "Different groups need different ways to engage. Profiling can open a shared language. A workshop can let people test a skill. A broader programme can connect several moments. The proof belongs in participation, discussion and practice.",
    gallery: [
      {
        src: "/images/services/mbti/gallery-2.jpg",
        alt: "Corporate participants comparing perspectives in small groups",
        caption: "Comparing perspectives: small-group discussion",
      },
      {
        src: "/images/services/mbti/gallery-7.jpg",
        alt: "Participants testing a prompt during facilitated group practice",
        caption: "Testing the prompt: facilitated practice",
      },
      {
        src: "/images/services/workshops/gallery-4.jpg",
        alt: "Colleagues completing an applied workshop exercise",
        caption: "Working it through: applied exercise",
      },
      {
        src: "/images/services/workshops/how-it-works.jpg",
        alt: "Workshop participants reaching a shared result",
        caption: "Reaching a result: active participation",
      },
    ],
    actors: { left: trainingEnergyActor, right: trainingSupportActor },
    testimonialEyebrow: "What organisers said about the delivery",
    testimonialHeading: "Proof of thoughtful planning, adaptation and professional facilitation",
    testimonialDescription:
      "Real feedback from the shared Team Elevate and Elluminate operating history. These reviews show planning, adaptability and delivery, rather than making a claim about this specific service.",
    orderingSeed: "training-client-stories",
  },
  fit: {
    headline: "Elluminate is for organisers who want the session designed around the people and the work.",
    strong: [
      "You know what needs to improve but not whether the answer is profiling, a workshop, a talk or a broader programme.",
      "Your audience includes different levels, departments, working styles or confidence levels.",
      "You want examples, prompts and practice shaped around workplace context.",
      "You want facilitated discussion and application, not only a speaker and slides.",
      "You want assessment inclusions, participant materials, delivery mode and scope clarified before confirmation.",
    ],
    different: [
      "You only want the cheapest off-the-shelf deck.",
      "You want a motivational talk with no discussion of the audience or objective.",
      "You expect a personality profile to diagnose, label or fix people.",
      "You expect one session to guarantee business results.",
      "Price is the only factor in your decision.",
    ],
    boundary:
      "If you only need a slide deck, there are simpler options. If you need the session to make sense for the people and the work, we should talk.",
    faqs: [
      {
        question: "We know the problem but not the right training format.",
        answer:
          "That is a valid starting point. Share the audience, workplace challenge, timing and what people need to understand, discuss or practise. Elluminate can compare suitable directions from there.",
      },
      {
        question: "Our audience spans different departments and seniority levels.",
        answer:
          "Include that mix in the brief. Examples, pacing, participation and session depth can be shaped around who is in the room.",
      },
      {
        question: "Will this become another passive lecture?",
        answer:
          "The intended workshop format combines explanation with discussion, exercises, reflection and practical application. The final balance depends on the topic and audience.",
      },
      {
        question: "Will profiling put people into boxes?",
        answer:
          "Profiling should be used as a discussion lens, not a diagnosis or permanent label. The framework, assessment and report scope are confirmed before delivery.",
      },
      {
        question: "Can the session fit our timing and delivery mode?",
        answer:
          "The practical structure depends on group size and intended depth. Selected workshops can be delivered in person, virtually or in a hybrid format.",
      },
    ],
  },
  process: {
    headline: "From workplace challenge to a training programme you can confirm",
    steps: [
      {
        title: "Share the audience and challenge",
        copy:
          "Send the group size, audience level, timing, delivery preference and what you want people to understand, discuss or practise. It is fine if the framework is still open.",
      },
      {
        title: "Discuss the right learning direction",
        copy:
          "We use the brief to compare a workshop, profiling framework, talk or broader programme, then align the depth, participation and practical application.",
      },
      {
        title: "Confirm and run the session",
        copy:
          "Once the direction and quote are aligned, we confirm the materials, logistics and facilitation, then deliver the agreed session.",
      },
    ],
    actor: trainingProcessActor,
  },
  closing: {
    eyebrow: "Before the calendar turns the session into a slot to fill",
    headlineParts: [
      { text: "The later the brief arrives, the easier it is to buy " },
      { text: "training hours", accent: true },
      { text: " and miss the " },
      { text: "real problem.", accent: true },
    ],
    body:
      "Share the challenge while there is still room to understand the audience, compare formats, shape examples and build practice around the work people are returning to.",
    enquiryValue: [
      "A clearer learning direction based on the audience and workplace need",
      "The practical questions worth resolving before scope is confirmed",
      "A connected recommendation and quote you can review internally",
    ],
    bridge: "One brief connects the objective, audience, format, participation plan and quote.",
    line: "Bring us the workplace challenge. We will shape the programme people can carry back into it.",
    photos: [
      {
        src: "/images/services/mbti/gallery-1.jpg",
        alt: "Participants discussing ideas during a profiling workshop",
      },
      {
        src: "/images/services/workshops/gallery-1.jpg",
        alt: "Corporate workshop group learning together",
      },
      {
        src: "/images/services/mbti/gallery-7.jpg",
        alt: "Participants applying a training prompt together",
      },
    ],
  },
  footerLinks: [
    { name: "Training", path: "/services/training" },
    { name: "Workshops", path: "/services/workshops" },
    { name: "MBTI Profiling", path: "/services/mbti" },
    { name: "DISC Assessment", path: "/services/disc" },
    { name: "OCEAN Profiling", path: "/services/ocean" },
    { name: "Mass Talks", path: "/services/mass-talks" },
    { name: "Team Building", path: "/services/team-building" },
    { name: "Retreats", path: "/services/retreats" },
  ],
};

export const serviceCampaignLandingConfigs: Record<ServiceCampaignKind, ServiceCampaignLandingConfig> = {
  retreats: retreatConfig,
  training: trainingConfig,
};
