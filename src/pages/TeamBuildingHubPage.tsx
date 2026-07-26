import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  MessageCircle,
  Route,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, OrganizationSchema, ServiceSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cloudinaryImage } from "@/lib/media";
import { getCampaignPageConfig } from "@/data/campaignPageConfigs";
import { getRouteSeo } from "@/data/seoRoutes";
import { submitLead } from "@/lib/leadSubmission";
import {
  equipmentActivityServices,
  physicalTeamBuildingServices,
  virtualTeamBuildingServices,
} from "@/data/siteScope";

type ActivityFilter = "All" | "Outdoor" | "Indoor" | "High energy" | "Lower intensity" | "Virtual";
type FormatPreference = "Physical" | "Virtual" | "Not sure" | "";

type QuoteFormState = {
  name: string;
  email: string;
  pax: string;
  timing: string;
  phone: string;
  venue: string;
  objective: string;
  formatPreference: FormatPreference;
  privacyConsent: boolean;
};

type ActivityCard = {
  slug: string;
  title: string;
  format: string;
  description: string;
  fit: string;
  image: string;
  alt: string;
  filters: ActivityFilter[];
};

const campaignConfig = getCampaignPageConfig("team-building");
const pageUrl = `https://elluminate.sg${campaignConfig.path}`;
const teamBuildingSeo = getRouteSeo("/services/team-building");
const seoDescription = teamBuildingSeo?.description ?? campaignConfig.description;
const whatsappUrl =
  "https://wa.me/6588352482?text=Hi%20Elluminate%2C%20I%27d%20like%20to%20plan%20a%20team-building%20event.";

const filters: ActivityFilter[] = ["All", "Outdoor", "Indoor", "High energy", "Lower intensity", "Virtual"];

const activityCards: ActivityCard[] = [
  {
    slug: "amazing-race",
    title: "Amazing Race",
    format: "Outdoor race format",
    description: "Teams navigate checkpoints, solve clues, and complete facilitated challenges together.",
    fit: "A strong direction when you want movement, exploration, and a shared finish line.",
    image: "/images/services/amazing-race/gallery-1.jpg",
    alt: "Company team completing an outdoor team-building challenge in Singapore",
    filters: ["All", "Outdoor", "High energy"],
  },
  {
    slug: "cultural-race",
    title: "Cultural Race",
    format: "Singapore discovery format",
    description: "A route-based team challenge shaped around local districts, clues, and group missions.",
    fit: "Useful when the location should become part of the experience for local or visiting teams.",
    image: "/images/services/cultural-race/gallery-5.jpg",
    alt: "Team members taking part in a Cultural Race checkpoint",
    filters: ["All", "Outdoor", "High energy"],
  },
  {
    slug: "csi-bones",
    title: "CSI-Bones",
    format: "Indoor mystery format",
    description: "Teams examine evidence, compare theories, and work through a facilitated investigation.",
    fit: "A lower-movement option for groups that enjoy observation, deduction, and collaboration.",
    image: "/images/services/csi-bones/gallery-1.jpg",
    alt: "Corporate group examining evidence during a CSI-Bones team-building activity",
    filters: ["All", "Indoor", "Lower intensity"],
  },
  {
    slug: "minute-to-win-it",
    title: "Minute To Win It",
    format: "Indoor station format",
    description: "Short, accessible challenges keep teams rotating, scoring, and cheering one another on.",
    fit: "Works well when you need compact energy in an office, function room, or ballroom.",
    image: "/images/services/minute-to-win-it/gallery-3.jpg",
    alt: "Participants completing an indoor Minute To Win It team challenge",
    filters: ["All", "Indoor", "High energy"],
  },
  {
    slug: "monopoly-dash",
    title: "Monopoly Dash",
    format: "Strategy and challenge format",
    description: "Teams combine light strategy, movement, points, and friendly competition across the session.",
    fit: "A balanced direction when the group wants an easy-to-follow game layer and visible momentum.",
    image: "/images/services/monopoly-dash/gallery-2.jpg",
    alt: "Company team taking part in a Monopoly Dash outdoor challenge",
    filters: ["All", "Outdoor", "High energy"],
  },
  {
    slug: "amazing-race-virtual",
    title: "Virtual Amazing Race",
    format: "Virtual team format",
    description: "A hosted online race that gives remote or multi-office teams a shared challenge and finish.",
    fit: "For teams that cannot meet in one venue but still want a facilitated group experience.",
    image: "/images/services/amazing-race-virtual/gallery-1.jpg",
    alt: "Virtual Amazing Race team-building session shown on participant screens",
    filters: ["All", "Virtual", "Lower intensity"],
  },
];

const catalogueGroups = [
  {
    title: "Story-led physical experiences",
    items: physicalTeamBuildingServices,
    accent: "border-blue-200 bg-blue-50/[0.65]",
  },
  {
    title: "Equipment activities",
    items: equipmentActivityServices,
    accent: "border-amber-200 bg-amber-50/[0.65]",
  },
  {
    title: "Virtual experiences",
    items: virtualTeamBuildingServices,
    accent: "border-violet-200 bg-violet-50/[0.65]",
  },
];

const proofMetrics = [
  { value: "5,000+", label: "events delivered" },
  { value: "100,000+", label: "participants" },
  { value: "8+ years", label: "shared operating history" },
  { value: "24", label: "physical, equipment-led and virtual experiences" },
];

const stakes = [
  "Working time the whole group will not get back.",
  "The organiser's confidence when the room disengages.",
  "A rare chance for quieter voices and different departments to participate.",
  "People's enthusiasm for the next company event.",
];

const stakeMoments = [
  {
    marker: "01",
    title: "Quiet arrival",
    image: "/images/services/csi-bones/gallery-5.jpg",
    alt: "Colleagues arriving and listening at an indoor team activity",
  },
  {
    marker: "02",
    title: "Unexpected contributor",
    image: "/images/services/amazing-race/gallery-2.jpg",
    alt: "Team members collaborating closely during an outdoor challenge",
  },
  {
    marker: "03",
    title: "Shared finish",
    image: "/images/services/amazing-race/gallery-7.jpg",
    alt: "Corporate team celebrating a shared finish together",
  },
];

const planningFlow = [
  {
    icon: UsersRound,
    title: "Fit the people",
    copy: "Consider pax, desired energy, accessibility needs, team mix and what the event should achieve.",
  },
  {
    icon: Compass,
    title: "Match the experience",
    copy: "Narrow the direction across physical, equipment-led and virtual formats instead of leaving you to decode the catalogue alone.",
  },
  {
    icon: Route,
    title: "Shape the flow",
    copy: "Connect the briefing, team allocation, pacing, scoring and shared finish as one experience.",
  },
  {
    icon: Sparkles,
    title: "Facilitate the room",
    copy: "Bring the activity concept, materials, equipment, facilitators and basic setup together for event day.",
  },
  {
    icon: ShieldCheck,
    title: "Protect the plan",
    copy: "Surface venue, movement, noise, access, weather and fallback considerations before confirmation.",
  },
];

const valueBefore = [
  "The activity direction around your brief",
  "Group and participant considerations",
  "Venue and format fit",
  "Briefing and team allocation",
  "Activity pacing and scoring",
  "Weather and fallback considerations where relevant",
];

const valueStandard = [
  "Activity concept",
  "Playing materials and equipment",
  "Facilitators",
  "Basic setup",
  "Scoring",
  "A free public venue or route where the selected format uses one",
];

const valueOptional = [
  "Paid venue",
  "Catering",
  "Transport",
  "Photography",
  "Prizes",
  "Branding",
  "Printed reports",
  "Substantial customisation",
];

const riskReducers = [
  "No payment at enquiry",
  "No need to choose an activity first",
  "Review the direction and quote before confirming",
];

const comparisonApproaches = [
  {
    number: "01",
    title: "Choose a fixed activity first",
    items: [
      "Start from a familiar activity name or package.",
      "Select the format before every group requirement is clear.",
      "Validate venue, participation, pacing and contingencies afterwards.",
      "Best when your team already knows exactly what it wants.",
    ],
  },
  {
    number: "02",
    title: "Build it internally",
    items: [
      "Keep complete control of the concept.",
      "Source or prepare equipment and materials.",
      "Handle briefing, facilitation, scoring and event flow.",
      "Best when your organisation has the time, resources and experienced facilitators.",
    ],
  },
  {
    number: "03",
    title: "Plan with Elluminate",
    items: [
      "Start with the people, purpose, place and timing.",
      "Narrow the activity direction around the brief.",
      "Connect setup, facilitation, pacing, scoring and fallback considerations.",
      "Deliver the activity with facilitators, materials, equipment and basic setup.",
      "Best when the organiser wants a coordinated, facilitated experience.",
    ],
  },
];

const strongFit = [
  "You know the desired outcome but not the right activity.",
  "Your group includes different departments, seniority levels, energy levels or accessibility considerations.",
  "You are deciding between indoor, outdoor, physical or virtual formats.",
  "You want facilitated delivery rather than only equipment.",
  "You want venue, flow, setup and contingency questions surfaced before confirmation.",
];

const differentFit = [
  "You only need a venue booking.",
  "You only want bare equipment rental and plan to self-run the event.",
  "You already have a complete internal concept, facilitation team and operating plan.",
];

const processSteps = [
  {
    title: "Share the event brief",
    copy: "Send your pax, timing, venue preference, and what you want the day to achieve. It is fine if some details are still open.",
  },
  {
    title: "Discuss the right direction",
    copy: "We use the brief to narrow physical, indoor, outdoor, or virtual formats that make sense for the people attending.",
  },
  {
    title: "Confirm and run the event",
    copy: "Once the direction and quote are aligned, we confirm the operating details and facilitate the activity on the day.",
  },
];

const proofOrganisations = ["Lonza", "SIMTech", "Madame Tussauds Singapore", "AMS AG"];

const teamBuildingFooterLinks = [
  { name: "Team Building", path: "/services/team-building" },
  { name: "Amazing Race", path: "/services/amazing-race" },
  { name: "Cultural Race", path: "/services/cultural-race" },
  { name: "CSI-Bones", path: "/services/csi-bones" },
  { name: "Minute To Win It", path: "/services/minute-to-win-it" },
  { name: "Monopoly Dash", path: "/services/monopoly-dash" },
  { name: "Virtual Amazing Race", path: "/services/amazing-race-virtual" },
  { name: "Corporate Retreats", path: "/services/corporate-retreats" },
  { name: "Workshops", path: "/services/workshops" },
  { name: "MBTI", path: "/services/mbti" },
];

const reviews = [
  {
    quote: "All of us had a real fun blast and we have nothing but good things to say about the facilitators and the games!",
    author: "Darren Tey",
    role: "Operations Manager",
    company: "Lonza",
  },
  {
    quote: "All our different departments have enjoyed the activities, from our newest members to our management teams.",
    author: "Farzanah Begum",
    role: "Senior Officer for Development and Engagement",
    company: "SIMTech",
  },
];

const gallery = [
  {
    src: "/images/services/amazing-race/gallery-5.jpg",
    alt: "Corporate team working together during an outdoor challenge",
    caption: "Pulling together — outdoor team challenge",
  },
  {
    src: "/images/services/csi-bones/gallery-4.jpg",
    alt: "Corporate participants examining clues during an indoor mystery activity",
    caption: "Comparing clues — indoor investigation",
  },
  {
    src: "/images/services/minute-to-win-it/gallery-6.jpg",
    alt: "Company group taking part in an indoor station challenge",
    caption: "Rotating through stations — indoor format",
  },
  {
    src: "/images/services/monopoly-dash/gallery-5.jpg",
    alt: "Team members completing a facilitated outdoor challenge",
    caption: "Sharing the same finish — facilitated outdoor format",
  },
];

const faqs = [
  {
    question: "We do not know which activity to choose.",
    answer:
      "That is a valid starting point. Share your estimated pax, timing, venue preference and event objective. Elluminate can narrow the activity direction from there.",
  },
  {
    question: "Our team has very different personalities and energy levels.",
    answer:
      "Include that in the brief. Desired intensity, movement, seated or lower-movement roles, team mix and venue access can be discussed before the direction is confirmed.",
  },
  {
    question: "Will quieter colleagues be left out?",
    answer:
      "No format can guarantee how every individual will respond. The planning goal is to choose roles, pacing and challenges that give more than one kind of participant a way to contribute.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "Outdoor formats should include a weather discussion. Depending on the selected activity, considerations may include a sheltered route, indoor option or adjusted game mix. The exact contingency belongs in the confirmed event scope.",
  },
  {
    question: "What if we do not have a venue?",
    answer:
      "Some formats include a free public venue or route. Paid venues are available as an optional addition. Suitability depends on the activity, group, date, access and weather requirements.",
  },
  {
    question: "Can this run in our office or function room?",
    answer:
      "Yes, subject to the selected format and available space. Movement, noise, access, setup and participant flow should be checked before confirmation.",
  },
  {
    question: "How early should we enquire?",
    answer:
      "The published planning guidance is at least two weeks. Enquire earlier when the event requires substantial customisation.",
  },
  {
    question: "How is the quote calculated?",
    answer:
      "The quote depends on the selected format, pax, duration, venue, facilitation needs, setup and event-specific logistics.",
  },
  {
    question: "Can we customise the experience?",
    answer:
      "Standard, enhanced and bespoke directions are available. The feasible level and price depend on the activity, lead time and requested scope.",
  },
  {
    question: "Is submitting the brief a commitment?",
    answer:
      "No. No payment is taken through the enquiry form. Elluminate reviews the details, clarifies open questions and discusses the direction and quote before confirmation.",
  },
  {
    question: "Can you support remote or multi-office teams?",
    answer:
      "Yes. Elluminate offers facilitated virtual formats alongside physical activities in Singapore.",
  },
];

const initialQuoteForm: QuoteFormState = {
  name: "",
  email: "",
  pax: "",
  timing: "",
  phone: "",
  venue: "",
  objective: "",
  formatPreference: "",
  privacyConsent: false,
};

const buildBriefDetails = (form: QuoteFormState) =>
  [
    "Team Building Event Planning Enquiry",
    `Pax/headcount: ${form.pax.trim()}`,
    `Date or timing window: ${form.timing.trim()}`,
    `Venue preference: ${form.venue.trim() || "Not provided"}`,
    `Event objective: ${form.objective.trim() || "Not provided"}`,
    `Format preference: ${form.formatPreference || "Not sure"}`,
    "Source page: /services/team-building#quote",
  ].join("\n");

const parseExpectedDate = (timing: string) => {
  const parsed = new Date(timing);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
};

const pushLandingEvent = (eventName: "form_start" | "cta_click", payload: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;

  const trackingWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.dataLayer.push({
    event: eventName,
    page_path: "/services/team-building",
    form_name: "team_building_quote_brief",
    ...payload,
  });
};

const TeamBuildingHubPage = () => {
  const [activityFilter, setActivityFilter] = useState<ActivityFilter>("All");
  const [quoteForm, setQuoteForm] = useState<QuoteFormState>(initialQuoteForm);
  const [honeypot, setHoneypot] = useState("");
  const [formStarted, setFormStarted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const filteredActivities = useMemo(() => {
    if (activityFilter === "All") return activityCards;
    return activityCards.filter((activity) => activity.filters.includes(activityFilter));
  }, [activityFilter]);

  const updateField = <Key extends keyof QuoteFormState>(field: Key, value: QuoteFormState[Key]) => {
    setQuoteForm((current) => ({ ...current, [field]: value }));
  };

  const handleFormStart = () => {
    if (formStarted) return;
    pushLandingEvent("form_start", { field_group: "team_building_brief" });
    setFormStarted(true);
  };

  const handleCtaClick = (location: string, ctaText = "Build My Team Experience") => {
    pushLandingEvent("cta_click", { cta_location: location, cta_text: ctaText });
  };

  const handleQuoteSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    if (honeypot) {
      setSubmitStatus("success");
      return;
    }

    if (
      !quoteForm.name.trim() ||
      !quoteForm.email.trim() ||
      !quoteForm.pax.trim() ||
      !quoteForm.timing.trim() ||
      !quoteForm.privacyConsent
    ) {
      setFormError("Please complete your name, work email, pax, timing, and privacy consent.");
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("submitting");

    const isVirtual = quoteForm.formatPreference === "Virtual";
    const eventCategory = isVirtual ? "Virtual Team Building" : "Physical Team Building";

    try {
      await submitLead({
        formName: "team_building_quote_brief",
        service: isVirtual ? "corporate_virtual_team_building" : "corporate_physical_team_building",
        emailKeyPrefix: "team-building-brief",
        fields: {
          name: quoteForm.name.trim(),
          email: quoteForm.email.trim(),
          phone: quoteForm.phone.trim() || null,
          event_category: eventCategory,
          organisation: null,
          organisation_type: null,
          expected_attendees: quoteForm.pax.trim(),
          expected_date: parseExpectedDate(quoteForm.timing.trim()),
          additional_customisation: null,
          game_customisation: "Not Applicable",
          add_on_services: null,
          additional_details: buildBriefDetails(quoteForm),
        },
      });

      setSubmitStatus("success");
      setQuoteForm(initialQuoteForm);
    } catch (error) {
      console.error("Team-building enquiry failed", error);
      setSubmitStatus("error");
      setFormError("We could not send your enquiry. Please try again or WhatsApp Elluminate.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO {...teamBuildingSeo} ogImage="https://elluminate.sg/images/services/amazing-race/hero.jpg" />
      <OrganizationSchema type="LocalBusiness" />
      <ServiceSchema name={campaignConfig.h1} description={seoDescription} slug="team-building" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://elluminate.sg/" },
          { name: "Team Building", url: pageUrl },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-[#69c9ec] text-[#0b1f3a]">
          <div
            aria-hidden="true"
            className="absolute -left-32 top-12 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#ffd85d]/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-40 -top-32 -z-10 h-[36rem] w-[36rem] rounded-full bg-white/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute left-[8%] top-[22%] -z-10 h-28 w-28 rotate-12 rounded-[2rem] border border-white/40 bg-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute right-[9%] top-[14%] -z-10 h-20 w-20 -rotate-12 rounded-full border border-[#0b1f3a]/10 bg-[#ffd85d]/20"
          />

          <div className="container relative mx-auto px-5 pb-24 pt-10 sm:px-8 lg:min-h-[720px] lg:px-10 lg:pb-8 lg:pt-8">
            <p className="relative z-50 inline-flex rounded-full border border-white/70 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary shadow-sm backdrop-blur-sm sm:text-sm lg:absolute lg:left-1/2 lg:top-7 lg:-translate-x-1/2">
              Corporate Team Building Singapore
            </p>

            <h1 className="relative z-40 mt-6 font-display text-[clamp(3rem,12vw,5rem)] font-black leading-[0.88] tracking-[-0.06em] lg:absolute lg:inset-x-10 lg:top-[118px] lg:mt-0 lg:h-[340px] lg:text-[clamp(2.5rem,3.75vw,4.35rem)]">
              <span className="block lg:absolute lg:left-0 lg:top-0 lg:w-[29%]">Corporate Team</span>
              <span className="block lg:absolute lg:right-0 lg:top-0 lg:w-[29%] lg:text-right">
                Building in Singapore,
              </span>
              <span className="block lg:absolute lg:left-[1%] lg:top-[190px] lg:w-[28%]">Planned Around</span>
              <span className="block text-primary lg:absolute lg:right-[1%] lg:top-[200px] lg:w-[27%] lg:text-right">
                Your Team
              </span>
            </h1>

            <div className="relative z-50 mt-7 max-w-2xl lg:absolute lg:bottom-7 lg:left-1/2 lg:mt-0 lg:w-[min(680px,52vw)] lg:max-w-none lg:-translate-x-1/2 lg:rounded-[2rem] lg:border lg:border-white/80 lg:bg-[#fbf7ed]/[0.94] lg:px-8 lg:py-5 lg:shadow-[0_28px_75px_rgba(11,31,58,0.22)] lg:backdrop-blur-md">
              <p className="text-lg leading-8 text-[#334765] sm:text-xl sm:leading-9 lg:text-base lg:leading-7 xl:text-lg xl:leading-8">
                The unexpected leader. The quiet teammate who spots the answer. The shared finish everyone joins. We
                match the experience to your people, then shape the flow, venue fit and facilitation around them.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-7 w-full px-7 sm:w-auto sm:px-9 lg:mt-5">
                <a href="#quote" onClick={() => handleCtaClick("hero_primary")}>
                  Build My Team Experience <ArrowRight />
                </a>
              </Button>
              <div className="mt-6 max-w-2xl border-l-2 border-[#f37468] pl-5 text-sm leading-6 text-[#4c5e76] lg:mt-4">
                No payment at enquiry. You do not need to choose an activity first. Review the direction and quote
                before confirming.
              </div>
            </div>

            <div className="relative z-20 mt-10 min-h-[330px] sm:min-h-[430px] lg:absolute lg:inset-0 lg:mt-0 lg:min-h-0">
              <figure className="absolute inset-x-0 top-0 overflow-hidden rounded-[2rem] border-[6px] border-white/90 bg-[#69c9ec] shadow-[0_28px_80px_rgba(11,31,58,0.22)] lg:inset-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none">
                <img
                  src="/images/campaigns/team-building/hero-campaign-woman-v1.webp"
                  alt="Illustrative campaign visual of a fictional adult Asian professional holding a lit sparkler"
                  width={1672}
                  height={941}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover object-center lg:h-full lg:aspect-auto"
                />
                <figcaption className="sr-only">
                  A fictional campaign model appears with a sparkler. The surrounding photographs show real Elluminate
                  team-building events.
                </figcaption>
              </figure>

              <div
                className="absolute inset-x-2 bottom-0 z-30 grid grid-cols-3 items-end gap-2 lg:inset-0 lg:block"
                aria-label="Real Elluminate team-building moments"
              >
                <figure className="-rotate-3 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl lg:absolute lg:left-[1.5%] lg:top-[58%] lg:w-[10%]">
                  <img
                    src={cloudinaryImage("/images/services/amazing-race/cta.jpg", { width: 420 })}
                    alt="Team members coordinating a hands-on string challenge"
                    width={420}
                    height={525}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-[50%_48%]"
                  />
                </figure>
                <figure className="rotate-2 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl lg:absolute lg:right-[1.5%] lg:top-[53%] lg:w-[10%]">
                  <img
                    src={cloudinaryImage("/images/services/builder-cross/gallery-5.jpg", { width: 420 })}
                    alt="Corporate team smiling beside the structure they built together"
                    width={420}
                    height={525}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-[50%_38%]"
                  />
                </figure>
                <figure className="-rotate-2 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl lg:absolute lg:right-[11.5%] lg:top-[67%] lg:w-[8.5%]">
                  <img
                    src={cloudinaryImage("/images/services/battle-of-the-olympians/gallery-6.jpg", { width: 420 })}
                    alt="Colleagues reaching for a flying disc during a beach team challenge"
                    width={420}
                    height={420}
                    loading="lazy"
                    className="aspect-square w-full object-cover object-[52%_48%]"
                  />
                </figure>
                <figure className="hidden rotate-3 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl lg:absolute lg:left-[11.5%] lg:top-[68%] lg:block lg:w-[8.5%]">
                  <img
                    src={cloudinaryImage("/images/services/cultural-race/gallery-7.jpg", { width: 420 })}
                    alt="Company group celebrating together after a team challenge"
                    width={420}
                    height={420}
                    loading="lazy"
                    className="aspect-square w-full object-cover object-[52%_50%]"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 left-1/2 h-32 w-[125%] -translate-x-1/2 rounded-[50%] bg-white" />
        </section>

        <section className="relative overflow-hidden bg-white py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Shared operating history</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                  Experience is what lets us plan around your team—not just sell you an activity.
                </h2>
              </div>
              <blockquote className="relative rounded-[2rem] bg-[#0b1f3a] p-7 text-white shadow-xl sm:p-9">
                <span className="absolute -top-7 right-8 font-display text-8xl font-black leading-none text-[#ffd85d]">“</span>
                <p className="relative text-xl font-semibold leading-8">
                  All our different departments have enjoyed the activities, from our newest members to our management
                  teams.
                </p>
                <footer className="mt-5 border-t border-white/[0.15] pt-5 text-sm leading-6 text-white/70">
                  Farzanah Begum, Senior Officer for Development and Engagement, SIMTech
                </footer>
              </blockquote>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[#dce6f3] bg-[#dce6f3] sm:grid-cols-2 lg:grid-cols-4">
              {proofMetrics.map((metric, index) => (
                <article key={metric.value} className="relative bg-[#f7faff] p-6 sm:p-8">
                  <span className="absolute right-5 top-4 font-display text-4xl font-black text-primary/10">0{index + 1}</span>
                  <p className="font-display text-4xl font-black tracking-[-0.04em] text-primary sm:text-5xl">{metric.value}</p>
                  <p className="mt-3 max-w-[15rem] text-sm font-semibold leading-6 text-[#4c5e76]">{metric.label}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-5 border-t border-[#dce6f3] pt-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#66758b]">From Team Elevate&apos;s event history</p>
                <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
                  {proofOrganisations.map((organisation) => (
                    <span key={organisation} className="font-display text-lg font-black text-[#0b1f3a]/75">
                      {organisation}
                    </span>
                  ))}
                </div>
              </div>
              <p className="rounded-2xl bg-[#fbf7ed] px-5 py-4 text-xs leading-5 text-[#5e6878] lg:justify-self-end">
                Elluminate and Team Elevate are operated by EXSTATIC PTE. LTD. Historical event figures, client proof
                and reviews remain attributed to their original source.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#fbf7ed] py-20 sm:py-28">
          <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#f37468]/10 blur-3xl" />
          <div className="container relative mx-auto px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#e45f55]">The quiet cost of getting it wrong</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#0b1f3a] sm:text-7xl">
                  The wrong activity costs more than the quote.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#4c5e76] lg:justify-self-end">
                Most team events do not fail loudly. They fail quietly. Familiar groups stay together. A few confident
                people carry the activity. Everyone else politely waits for it to end. Then the organiser returns to
                work wondering whether all that time, budget and coordination changed anything.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="rounded-[2rem] bg-[#0b1f3a] p-7 text-white shadow-2xl sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffd85d]">What is at risk</p>
                <ul className="mt-7 space-y-5">
                  {stakes.map((stake, index) => (
                    <li key={stake} className="flex gap-4">
                      <span className="font-display text-xl font-black text-[#f37468]">0{index + 1}</span>
                      <span className="leading-7 text-white/[0.78]">{stake}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-white/[0.15] pt-7 text-lg font-semibold leading-8">
                  No activity can force chemistry. A better-fit experience can give more people a reason, a role and a
                  shared finish.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stakeMoments.map((moment, index) => (
                  <figure
                    key={moment.marker}
                    className={`group relative overflow-hidden rounded-[1.6rem] bg-[#0b1f3a] shadow-xl ${
                      index === 1 ? "sm:translate-y-10" : ""
                    }`}
                  >
                    <img
                      src={cloudinaryImage(moment.image, { width: 700 })}
                      alt={moment.alt}
                      width={700}
                      height={920}
                      loading="lazy"
                      className="aspect-[4/5] h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/10 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <span className="text-xs font-black tracking-[0.2em] text-[#ffd85d]">{moment.marker}</span>
                      <p className="mt-2 font-display text-xl font-black">{moment.title}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#0b1f3a] py-20 text-white sm:py-28">
          <div className="absolute -left-36 -top-36 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-48 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#f37468]/[0.15] blur-3xl" />
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div className="max-w-4xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffd85d]">What we specialise in</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.96] tracking-[-0.035em] sm:text-6xl">
                  Getting the fit right before your team steps into the room.
                </h2>
              </div>
              <p className="text-lg leading-8 text-white/[0.68] lg:justify-self-end">
                You do not need to arrive with the activity name. Bring the people, purpose, place and timing. We
                connect the rest.
              </p>
            </div>

            <div className="relative mt-16">
              <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#ffd85d] via-primary to-[#f37468] sm:block lg:left-0 lg:top-7 lg:h-px lg:w-full" />
              <div className="grid gap-5 lg:grid-cols-5">
                {planningFlow.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="relative rounded-[1.6rem] border border-white/[0.12] bg-white/[0.075] p-6 backdrop-blur-sm">
                      <div className="flex items-center gap-4 lg:block">
                        <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffd85d] text-[#0b1f3a] shadow-lg ring-8 ring-[#0b1f3a]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className="text-xs font-black tracking-[0.2em] text-white/[0.45] lg:mt-9">0{index + 1}</p>
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-black">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/[0.66]">{item.copy}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.06] lg:grid-cols-[0.78fr_1.22fr]">
              <img
                src={cloudinaryImage("/images/services/monopoly-dash/gallery-6.jpg", { width: 980 })}
                alt="Facilitator guiding a team-building group through an activity"
                width={980}
                height={720}
                loading="lazy"
                className="h-full min-h-[300px] w-full object-cover"
              />
              <div aria-hidden="true" className="flex items-center justify-center p-7 text-[#ffd85d] sm:p-10">
                <Sparkles className="h-16 w-16" />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#fffaf0] py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">The value behind the activity</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                Your team sees the experience. You get the planning and delivery behind it.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5e76]">
                A team-building event is not one game. It is the fit, flow, facilitation, setup, scoring and practical
                decisions around it. Elluminate connects those pieces in one event scope.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {[
                { number: "01", title: "Before the event, we help shape", items: valueBefore, tone: "bg-white" },
                { number: "02", title: "Standard activity delivery includes", items: valueStandard, tone: "bg-[#eaf3ff]" },
                { number: "03", title: "Optional additions when needed", items: valueOptional, tone: "bg-[#fff0e8]" },
              ].map((column) => (
                <article key={column.number} className={`rounded-[2rem] border border-[#dce6f3] p-7 shadow-sm sm:p-8 ${column.tone}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-5xl font-black text-primary/[0.15]">{column.number}</span>
                    <span className="h-3 w-3 rounded-full bg-[#f37468]" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-black leading-tight text-[#0b1f3a]">{column.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {column.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-[#40536d]">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#0b1f3a] text-white shadow-2xl">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-7 sm:p-10">
                  <p className="font-display text-2xl font-black leading-9 sm:text-3xl">
                    Instead of piecing together the game, equipment, facilitation, scoring and event flow separately,
                    you have one connected activity scope.
                  </p>
                  <Button asChild variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
                    <a href="#quote" onClick={() => handleCtaClick("value_stack_primary")}>
                      Build My Team Experience <ArrowRight />
                    </a>
                  </Button>
                </div>
                <div className="grid gap-px bg-white/[0.12] sm:grid-cols-3 lg:grid-cols-1">
                  {riskReducers.map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-white/[0.06] px-6 py-5 text-sm font-semibold">
                      <ShieldCheck className="h-5 w-5 shrink-0 text-[#ffd85d]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="activities" className="scroll-mt-24 bg-white py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Find the right direction</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                  You do not have to choose from 24 activities alone.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#4c5e76]">
                  Start with the kind of participation your team needs. These formats are useful starting points;
                  Elluminate can narrow the direction around your people, venue, timing and objective.
                </p>
                <p className="mt-5 max-w-2xl rounded-2xl border-l-4 border-[#ffd85d] bg-[#fffaf0] px-5 py-4 text-sm font-semibold leading-6 text-[#40536d]">
                  Not sure whether the group needs indoor, outdoor, high-energy, lower-intensity or virtual? That is a
                  planning question, not homework for you.
                </p>
              </div>
              <div className="flex flex-wrap gap-2" aria-label="Filter activity formats">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActivityFilter(filter)}
                    aria-pressed={activityFilter === filter}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      activityFilter === filter
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredActivities.map((activity) => (
                <article key={activity.slug} className="group overflow-hidden rounded-[1.75rem] border border-[#dce6f3] bg-background shadow-sm transition motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-blue">
                  <div className="aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={cloudinaryImage(activity.image, { width: 760 })}
                      alt={activity.alt}
                      width={760}
                      height={475}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{activity.format}</p>
                    <h3 className="mt-3 font-display text-2xl font-black">{activity.title}</h3>
                    <p className="mt-4 leading-7 text-foreground/80">{activity.description}</p>
                    <p className="mt-4 border-l-2 border-primary/50 pl-4 text-sm leading-6 text-muted-foreground">{activity.fit}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#dce6f3] pt-5">
                      <Link to={`/services/${activity.slug}`} className="text-sm font-semibold text-primary hover:underline">View format</Link>
                      <a href="#quote" onClick={() => handleCtaClick(`activity_${activity.slug}`, "Ask if this fits my team")} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                        Ask if this fits <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 rounded-[2.25rem] border border-[#dce6f3] bg-[#fbf7ed] p-6 shadow-sm sm:p-9">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">The full collection</p>
                  <h3 className="mt-3 font-display text-3xl font-black text-[#0b1f3a] sm:text-5xl">
                    24 team-building experiences. One brief to narrow them down.
                  </h3>
                  <p className="mt-4 leading-7 text-[#4c5e76]">
                    Explore 12 story-led physical experiences, 4 equipment activities and 8 virtual experiences. You
                    can browse every format — or send the brief without choosing one first.
                  </p>
                </div>
                <a
                  href="#quote"
                  onClick={() => handleCtaClick("full_catalogue_help", "Help me narrow it down")}
                  className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-primary px-6 font-bold text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Help me narrow it down <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {catalogueGroups.map((group) => (
                  <article key={group.title} className={`rounded-2xl border p-5 ${group.accent}`}>
                    <div className="mb-5">
                      <h4 className="font-display text-xl font-black text-foreground">{group.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.slug}
                          to={`/services/${item.slug}`}
                            className="rounded-full border border-foreground/10 bg-background px-3 py-1.5 text-xs font-semibold text-foreground/75 transition hover:border-primary/[0.35] hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#0b1f3a] py-20 text-white sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffd85d]">Real event moments</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-6xl">
                  What good participation looks like is different for every team.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/[0.68]">
                  An outdoor race, an indoor investigation, a station challenge and a virtual session should not
                  create the same kind of energy. The proof is in whether people have a clear way to join in.
                </p>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full border border-white/25 px-6 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ffd85d]"
              >
                Explore the portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
              {gallery.map((item, index) => (
                <figure
                  key={item.src}
                  className={`group relative overflow-hidden rounded-[1.6rem] ${
                    index === 0
                      ? "sm:row-span-2 lg:col-span-2"
                      : index === 3
                        ? "lg:col-span-2"
                        : ""
                  }`}
                >
                  <img
                    src={cloudinaryImage(item.src, { width: index === 0 ? 1200 : 760 })}
                    alt={item.alt}
                    width={index === 0 ? 1200 : 760}
                    height={index === 0 ? 960 : 560}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/90 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-bold text-white">{item.caption}</figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-16 border-t border-white/[0.12] pt-12">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffd85d]">Client voices from Team Elevate</p>
                <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">
                  What clients said about the facilitators and games
                </h2>
                <p className="mt-5 leading-7 text-white/[0.64]">
                  These testimonials come from Team Elevate&apos;s event history. Elluminate and Team Elevate are both
                  operated by EXSTATIC PTE. LTD.
                </p>
              </div>
              <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-2">
                {reviews.map((review, index) => (
                  <figure
                    key={review.author}
                    className={`rounded-[2rem] p-7 sm:p-9 ${
                      index === 0 ? "bg-[#ffd85d] text-[#0b1f3a]" : "bg-white text-[#0b1f3a]"
                    }`}
                  >
                    <blockquote className="font-display text-2xl font-black leading-9">“{review.quote}”</blockquote>
                    <figcaption className="mt-7 border-t border-[#0b1f3a]/[0.15] pt-5">
                      <p className="font-display text-lg font-black">
                        {review.author}, {review.role}, {review.company}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf7ed] py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Compare the approaches</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                  The activity may look similar. The organiser&apos;s workload is not.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#4c5e76] lg:justify-self-end">
                You can choose a game and make the event fit around it. You can build everything internally. Or you
                can start with the brief and connect the activity, flow and practical details before confirmation.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {comparisonApproaches.map((approach, index) => (
                <article
                  key={approach.number}
                  className={`relative overflow-hidden rounded-[2rem] border p-7 sm:p-8 ${
                    index === 2
                      ? "border-primary bg-[#eaf3ff] shadow-xl"
                      : "border-[#d9e1eb] bg-white"
                  }`}
                >
                  <span className="absolute right-5 top-3 font-display text-7xl font-black text-primary/[0.08]">{approach.number}</span>
                  <h3 className="relative mt-5 font-display text-2xl font-black leading-tight text-[#0b1f3a]">{approach.title}</h3>
                  <ul className="relative mt-7 space-y-4">
                    {approach.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-[#40536d]">
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${index === 2 ? "text-primary" : "text-[#8090a3]"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-4xl border-t border-[#d9e1eb] pt-8 text-center text-lg font-semibold leading-8 text-[#0b1f3a]">
              The difference is not simply which game appears on the day. It is how much certainty you have before
              confirming—and how much your internal team still has to carry.
            </p>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Is Elluminate right for your event?</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                A strong fit when you need more than an activity menu.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[2rem] bg-[#0b1f3a] p-7 text-white sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd85d]">Elluminate is a strong fit if</p>
                <ul className="mt-7 space-y-4">
                  {strongFit.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-white/[0.78]">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ffd85d]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-[2rem] border border-[#dce6f3] bg-[#fbf7ed] p-7 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e45f55]">A different solution may fit better if</p>
                <ul className="mt-7 space-y-5">
                  {differentFit.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-[#40536d]">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#f37468]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mx-auto mt-16 max-w-5xl">
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details key={faq.question} className="group overflow-hidden rounded-2xl border border-[#dce6f3] bg-white open:bg-[#f7faff]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-display text-lg font-black text-[#0b1f3a] sm:px-7">
                      <span className="flex items-start gap-4">
                        <span className="mt-0.5 text-xs font-black tracking-[0.18em] text-primary">{String(index + 1).padStart(2, "0")}</span>
                        {faq.question}
                      </span>
                      <ChevronRight className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-90 motion-reduce:transition-none" />
                    </summary>
                    <p className="border-t border-[#dce6f3] px-5 py-5 leading-7 text-[#4c5e76] sm:px-7">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 bg-[#f7faff] py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">How it works</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                From rough brief to a team-building event you can confirm
              </h2>
            </div>
            <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
              <div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-primary via-[#ffd85d] to-[#f37468] lg:block" />
              {processSteps.map((step, index) => (
                <article key={step.title} className="relative rounded-[2rem] border border-[#dce6f3] bg-white p-7 shadow-sm sm:p-8">
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#0b1f3a] font-display text-xl font-black text-[#ffd85d] ring-8 ring-[#f7faff]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-black text-[#0b1f3a]">{step.title}</h3>
                  <p className="mt-4 leading-7 text-[#4c5e76]">{step.copy}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/[0.06] px-5 py-4 text-sm font-semibold leading-6 text-[#40536d]">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              No payment is taken when you enquire. Review the direction and quote before confirming.
            </p>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#fffaf0] py-20 sm:py-28">
          <div className="absolute -left-24 top-12 -z-10 h-72 w-72 rounded-full bg-primary/[0.12] blur-3xl" />
          <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#ffd85d]/25 blur-3xl" />
          <div className="container mx-auto grid gap-6 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-12">
            <aside className="relative flex min-h-[560px] overflow-hidden rounded-[2.25rem] bg-[#0b1f3a] p-7 text-white shadow-2xl sm:p-10">
              <img
                src={cloudinaryImage("/images/services/cultural-race/gallery-6.jpg", { width: 900 })}
                alt="Team members collaborating around an outdoor challenge"
                width={900}
                height={900}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f3a]/20 via-[#0b1f3a]/[0.74] to-[#0b1f3a]" />
              <div className="relative mt-auto max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Your event brief</p>
                <h2 className="mt-4 font-display text-3xl font-black leading-[1.05] sm:text-5xl">
                  You do not need the perfect activity name to begin.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/75">
                  Start with the people, timing, place and purpose. Elluminate can use those details to narrow the
                  direction and discuss a relevant quote with you.
                </p>
                <div className="mt-7 space-y-3 text-sm font-semibold text-white/[0.85]">
                  {["Share only the details you know", "Keep the venue or format open", "No payment is taken here"].map((item) => (
                    <p key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </aside>

            <div
              id="quote"
              className="min-w-0 scroll-mt-28 rounded-[2.25rem] border border-[#dce6f3] bg-white p-6 text-foreground shadow-xl sm:p-9 lg:p-10"
            >
              {submitStatus === "success" ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center" role="status">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-black">Your event brief is in.</h2>
                  <p className="mt-4 max-w-sm leading-7 text-muted-foreground">
                    We have saved your enquiry. The Elluminate team can now review the event details you shared.
                  </p>
                  <Button type="button" variant="primary-outline" className="mt-7" onClick={() => setSubmitStatus("idle")}>
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} onFocus={handleFormStart} noValidate>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Event enquiry</p>
                  <h2 className="mt-2 font-display text-3xl font-black">Tell us about your team event</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Start with the details you know. Venue, objective, and format preference can stay open for now.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-semibold">
                      Name <span className="text-primary">*</span>
                      <Input
                        name="name"
                        value={quoteForm.name}
                        onChange={(event) => updateField("name", event.target.value)}
                        autoComplete="name"
                        required
                        className="mt-2"
                      />
                    </label>
                    <label className="text-sm font-semibold">
                      Work email <span className="text-primary">*</span>
                      <Input
                        name="email"
                        type="email"
                        value={quoteForm.email}
                        onChange={(event) => updateField("email", event.target.value)}
                        autoComplete="email"
                        required
                        className="mt-2"
                      />
                    </label>
                    <label className="text-sm font-semibold">
                      Estimated pax <span className="text-primary">*</span>
                      <Input
                        name="pax"
                        value={quoteForm.pax}
                        onChange={(event) => updateField("pax", event.target.value)}
                        inputMode="numeric"
                        placeholder="e.g. 60"
                        required
                        className="mt-2"
                      />
                    </label>
                    <label className="text-sm font-semibold">
                      Date or timing <span className="text-primary">*</span>
                      <Input
                        name="timing"
                        value={quoteForm.timing}
                        onChange={(event) => updateField("timing", event.target.value)}
                        placeholder="e.g. September, weekday"
                        required
                        className="mt-2"
                      />
                    </label>
                    <label className="text-sm font-semibold">
                      Phone <span className="font-normal text-muted-foreground">(optional)</span>
                      <Input
                        name="phone"
                        type="tel"
                        value={quoteForm.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                        autoComplete="tel"
                        className="mt-2"
                      />
                    </label>
                    <label className="text-sm font-semibold">
                      Venue preference <span className="font-normal text-muted-foreground">(optional)</span>
                      <Input
                        name="venue"
                        value={quoteForm.venue}
                        onChange={(event) => updateField("venue", event.target.value)}
                        placeholder="Office, outdoor, not sure"
                        className="mt-2"
                      />
                    </label>
                  </div>

                  <label className="mt-4 block text-sm font-semibold">
                    Physical or virtual <span className="font-normal text-muted-foreground">(optional)</span>
                    <select
                      name="formatPreference"
                      value={quoteForm.formatPreference}
                      onChange={(event) => updateField("formatPreference", event.target.value as FormatPreference)}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Select a preference</option>
                      <option value="Physical">Physical</option>
                      <option value="Virtual">Virtual</option>
                      <option value="Not sure">Not sure yet</option>
                    </select>
                  </label>

                  <label className="mt-4 block text-sm font-semibold">
                    What should the event achieve? <span className="font-normal text-muted-foreground">(optional)</span>
                    <Textarea
                      name="objective"
                      value={quoteForm.objective}
                      onChange={(event) => updateField("objective", event.target.value)}
                      placeholder="Bonding, onboarding, morale, celebration, cross-team interaction..."
                      className="mt-2 min-h-24"
                    />
                  </label>

                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="team-building-company-website">Company website</label>
                    <input
                      id="team-building-company-website"
                      name="companyWebsite"
                      value={honeypot}
                      onChange={(event) => setHoneypot(event.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted-foreground">
                    <Checkbox
                      checked={quoteForm.privacyConsent}
                      onCheckedChange={(checked) => updateField("privacyConsent", checked === true)}
                      aria-label="Agree to the privacy policy"
                    />
                    <span>I agree to Elluminate using these details to respond to my enquiry.</span>
                  </label>

                  {formError ? <p className="mt-4 text-sm font-semibold text-destructive" role="alert">{formError}</p> : null}

                  <Button type="submit" variant="primary" size="xl" className="mt-6 w-full" disabled={submitStatus === "submitting"}>
                    {submitStatus === "submitting" ? "Sending enquiry..." : "Send My Team Building Enquiry"}
                    {submitStatus !== "submitting" ? <ArrowRight /> : null}
                  </Button>
                  <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                    No payment is taken here. This form starts an event-planning conversation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#0b1f3a] px-6 py-20 text-white sm:py-28 lg:px-12">
          <div className="absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -right-28 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#f37468]/20 blur-3xl" />
          <div className="container mx-auto text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ffd85d] text-[#0b1f3a] shadow-xl">
              <ClipboardCheck className="h-7 w-7" />
            </span>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-[#ffd85d]">Ready when you are</p>
            <h2 className="mx-auto mt-5 max-w-5xl font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-6xl">
              Give us the brief. We&apos;ll help you turn it into a team experience that fits.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/[0.68]">
              Send your group size, timing, venue preference and event goal. You can leave the activity open.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
              <a href="#quote" onClick={() => handleCtaClick("final_primary")}>
                Build My Team Experience <ArrowRight />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Elluminate about team building"
        onClick={() => handleCtaClick("floating_whatsapp", "WhatsApp Elluminate")}
        className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <Footer
        topActivityLinks={teamBuildingFooterLinks}
        bottomNote="Corporate team building, retreats, and training experiences in Singapore."
      />
    </div>
  );
};

export default TeamBuildingHubPage;
