import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  CloudSun,
  FileText,
  Laptop,
  MapPin,
  MessageSquare,
  MousePointer2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import heroImage from "@/assets/services/team-building-hero.jpg";
import outdoorImage from "@/assets/hero/amazing-race.jpg";
import indoorImage from "@/assets/hero/csi-investigation.jpg";
import challengeImage from "@/assets/services/physical/treasure-heist-hero.jpg";

type BriefState = {
  eventCategory: "Physical Team Building" | "Virtual Team Building";
  pax: string;
  dateWindow: string;
  venue: string;
  objective: string;
};

const initialBrief: BriefState = {
  eventCategory: "Physical Team Building",
  pax: "",
  dateWindow: "",
  venue: "",
  objective: "",
};

const formatOptions = [
  { label: "Physical", value: "Physical Team Building" as const },
  { label: "Virtual / Hybrid", value: "Virtual Team Building" as const },
];

const venueOptions = [
  "Still deciding",
  "Office or function room",
  "Hotel or external venue",
  "Outdoor route or park",
  "Virtual or hybrid",
];

const objectiveOptions = [
  "Bonding and morale",
  "Collaboration",
  "Onboarding",
  "Celebration",
  "High-energy challenge",
  "Unsure - recommend for us",
];

const plannerSignals = [
  "Mixed departments and seniority levels",
  "A date or month that may move",
  "Indoor, outdoor, or virtual uncertainty",
  "Different comfort levels for physical activity",
  "A need to explain the choice internally",
];

const fitRows = [
  {
    icon: Building2,
    lane: "Indoor control",
    fits: "Office, hotel, or function room",
    recommendation: "Lower weather risk, easier timing, and simpler participation for mixed-energy teams.",
  },
  {
    icon: MapPin,
    lane: "Outdoor movement",
    fits: "City route, park, or venue-based missions",
    recommendation: "Better for teams that want momentum, checkpoints, and an away-from-desk experience.",
  },
  {
    icon: Sparkles,
    lane: "Active challenge",
    fits: "Facilitated rounds with scoring",
    recommendation: "Useful when the team wants competition and energy without turning the day into a sports event.",
  },
  {
    icon: Target,
    lane: "Lower-intensity teamwork",
    fits: "Problem-solving, mystery, or strategy formats",
    recommendation: "Helpful when participation matters more than movement and the team has a wide comfort range.",
  },
  {
    icon: Laptop,
    lane: "Virtual or hybrid",
    fits: "Remote, regional, or mixed-location teams",
    recommendation: "Keeps the activity hosted and structured when the group cannot gather in one place.",
  },
];

const recommendationSteps = [
  {
    icon: MessageSquare,
    title: "Share the brief",
    text: "Send pax, date window, venue preference, and what the session should achieve.",
  },
  {
    icon: MousePointer2,
    title: "Shortlist the direction",
    text: "Elluminate can narrow the choice into activity lanes that fit the real planning constraints.",
  },
  {
    icon: FileText,
    title: "Clarify quote assumptions",
    text: "The quote conversation can cover duration, team split, venue notes, and facilitation needs.",
  },
  {
    icon: CheckCircle2,
    title: "Confirm the run plan",
    text: "Once the activity direction is chosen, the flow can be shaped around the group and venue.",
  },
];

const physicalLanes = [
  {
    slug: "amazing-race",
    title: "Amazing Race-style missions",
    text: "For teams that want movement, checkpoints, and shared momentum across a route or venue.",
  },
  {
    slug: "csi-bones",
    title: "Indoor mystery formats",
    text: "For groups that need problem-solving and participation with lower physical intensity.",
  },
  {
    slug: "cultural-race",
    title: "Singapore discovery routes",
    text: "For company groups that want local context, collaborative clues, and outdoor movement.",
  },
  {
    slug: "treasure-heist",
    title: "Strategy challenge formats",
    text: "For teams that respond well to roles, planning, timed decisions, and shared stakes.",
  },
];

const virtualLanes = [
  {
    slug: "amazing-race-virtual",
    title: "Virtual race formats",
    text: "For remote teams that still need pace, missions, and hosted coordination.",
  },
  {
    slug: "the-gameshow-experience-virtual",
    title: "Virtual game show",
    text: "For online groups that need easy participation, rounds, and quick energy.",
  },
  {
    slug: "the-nuclear-fallout-escape-room-virtual",
    title: "Virtual escape room",
    text: "For teams that prefer puzzle-led collaboration and group decision-making.",
  },
];

const quotePrep = [
  "Estimated pax or group-size range",
  "Date, event month, or timing window",
  "Venue status: confirmed, preferred, or open",
  "Indoor, outdoor, physical, virtual, or hybrid preference",
  "Team objective and comfort considerations",
  "Weather, transport, meal, AV, or approval constraints",
];

const faqs = [
  {
    question: "What is corporate team building?",
    answer:
      "Corporate team building is a facilitated activity for company groups. It can be physical, indoor, outdoor, route-based, lower-intensity, virtual, or hybrid depending on pax, venue, date, and the objective.",
  },
  {
    question: "Do we need to choose the activity before enquiring?",
    answer:
      "No. You can send the planning brief first. Elluminate can use pax, date, venue preference, and goals to suggest a suitable activity direction.",
  },
  {
    question: "Can this work indoors or outdoors?",
    answer:
      "Yes. Indoor, outdoor, and venue-based formats can be discussed after the team size, timing, weather exposure, and activity comfort level are clear.",
  },
  {
    question: "What if our group size is not confirmed yet?",
    answer:
      "Share the estimated range. The recommendation can start with a practical activity lane, then the quote assumptions can be refined once pax is clearer.",
  },
  {
    question: "Can we include budget or quote expectations?",
    answer:
      "Yes. If you already have a budget range, approval deadline, or procurement constraint, include it in the brief so the recommendation conversation starts in the right place.",
  },
  {
    question: "What happens after we submit the brief?",
    answer:
      "The enquiry goes through the existing contact flow. The team-building details you provide are carried into the form so the follow-up can focus on recommendation and quote assumptions.",
  },
];

const footerActivityLinks = [
  { name: "Team Building", path: "/services/team-building" },
  { name: "Amazing Race", path: "/services/amazing-race" },
  { name: "CSI-Bones", path: "/services/csi-bones" },
  { name: "Cultural Race", path: "/services/cultural-race" },
  { name: "Treasure Heist", path: "/services/treasure-heist" },
  { name: "Sotong Game", path: "/services/sotong-game" },
  { name: "Running Man", path: "/services/running-man" },
  { name: "Amazing Race Virtual", path: "/services/amazing-race-virtual" },
  { name: "Gameshow Experience", path: "/services/the-gameshow-experience-virtual" },
  { name: "Corporate Retreats", path: "/services/local-retreats" },
  { name: "MBTI Profiling", path: "/services/mbti" },
  { name: "DISC Assessment", path: "/services/disc" },
  { name: "Workshops", path: "/services/workshops" },
  { name: "Youth Camps", path: "/services/youth-camps" },
];

const formatBriefDetails = (brief: BriefState) =>
  [
    "Team Activity Brief",
    `Pax: ${brief.pax || "Not specified yet"}`,
    `Date/timing: ${brief.dateWindow || "Not specified yet"}`,
    `Venue preference: ${brief.venue || "Not specified yet"}`,
    `Objective: ${brief.objective || "Not specified yet"}`,
  ].join("\n");

const getAttendeeNumber = (pax: string) => pax.match(/\d[\d,]*/)?.[0].replace(/,/g, "") ?? "";

const TeamBuildingHubPage = () => {
  const { openContactModal } = useContactModal();
  const [brief, setBrief] = useState<BriefState>(initialBrief);

  const openInquiryWithBrief = (eventCategory = brief.eventCategory, details = formatBriefDetails(brief)) => {
    openContactModal({
      eventCategory,
      expectedAttendees: getAttendeeNumber(brief.pax),
      additionalDetails: details,
    });
  };

  const handleBriefSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openInquiryWithBrief();
  };

  const openPhysicalInquiry = () =>
    openInquiryWithBrief(
      "Physical Team Building",
      "Team Activity Brief\nBuyer is asking about physical corporate team building. Pax, date, venue, and objective should be confirmed.",
    );

  const openVirtualInquiry = () =>
    openInquiryWithBrief(
      "Virtual Team Building",
      "Team Activity Brief\nBuyer is asking about virtual or hybrid team building. Pax, date, platform/venue, and objective should be confirmed.",
    );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Corporate Physical Team Building Singapore | Elluminate"
        description="Plan corporate team building in Singapore around pax, venue, date, and goals. Send a short team activity brief and get a practical physical or virtual activity recommendation."
        keywords="corporate physical team building Singapore, corporate team building Singapore, team bonding activities Singapore, company team building activities, indoor outdoor team building Singapore, corporate team building quote"
        canonical="https://elluminate.sg/services/team-building"
      />
      <ServiceSchema
        name="Corporate Team Building in Singapore"
        description="Elluminate helps Singapore company teams plan physical and virtual team building activities based on pax, date, venue, and objective."
        slug="team-building"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://elluminate.sg/" },
          { name: "Team Building", url: "https://elluminate.sg/services/team-building" },
        ]}
      />

      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Corporate team building activity in Singapore"
              className="h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-slate-950/78" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.9)_46%,rgba(2,6,23,0.55)_100%)]" />
          </div>

          <div className="container relative mx-auto grid min-h-[calc(100vh-7rem)] gap-10 px-6 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-12 lg:py-16">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Team Activities For Companies
              </p>
              <h1 className="mb-5 text-4xl font-display font-black leading-[0.98] md:text-5xl lg:text-[4.2rem]">
                Corporate Team Building in Singapore, Planned Around Your Pax, Venue And Goal
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/82 md:text-lg md:leading-8">
                Give us the messy planning details. Elluminate helps turn headcount, timing, venue reality, and team
                objectives into a practical activity recommendation for your company group.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <Button size="xl" asChild className="w-full whitespace-normal px-5 text-center sm:w-auto">
                  <a href="#team-activity-brief">
                    Build My Team Activity Brief
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  asChild
                  className="w-full whitespace-normal border-white/35 bg-white/10 px-5 text-center text-white hover:bg-white hover:text-slate-950 sm:w-auto"
                >
                  <a href="#activity-fit">Compare Activity Fits</a>
                </Button>
              </div>
            </div>

            <form
              id="team-activity-brief"
              onSubmit={handleBriefSubmit}
              className="w-full max-w-full overflow-hidden rounded-lg border border-white/16 bg-white/[0.09] p-5 shadow-2xl backdrop-blur-md lg:ml-auto lg:max-w-lg"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    Team Activity Brief
                  </p>
                  <h2 className="mt-2 text-2xl font-display font-black text-white">Start with the constraints</h2>
                </div>
                <FileText className="h-8 w-8 flex-shrink-0 text-primary" />
              </div>

              <div className="mb-4 grid grid-cols-2 gap-2 rounded-lg bg-white/8 p-1">
                {formatOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setBrief((current) => ({ ...current, eventCategory: option.value }))}
                    className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                      brief.eventCategory === option.value
                        ? "bg-primary text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm">
                  <span className="font-semibold text-white">Pax / headcount</span>
                  <input
                    value={brief.pax}
                    onChange={(event) => setBrief((current) => ({ ...current, pax: event.target.value }))}
                    className="rounded-md border border-white/14 bg-white/10 px-3 py-2.5 text-white outline-none transition-colors placeholder:text-white/38 focus:border-primary"
                    placeholder="e.g. 80 pax"
                  />
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-semibold text-white">Date or timing window</span>
                  <input
                    value={brief.dateWindow}
                    onChange={(event) => setBrief((current) => ({ ...current, dateWindow: event.target.value }))}
                    className="rounded-md border border-white/14 bg-white/10 px-3 py-2.5 text-white outline-none transition-colors placeholder:text-white/38 focus:border-primary"
                    placeholder="e.g. late July, weekday afternoon"
                  />
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-semibold text-white">Venue preference</span>
                  <select
                    value={brief.venue}
                    onChange={(event) => setBrief((current) => ({ ...current, venue: event.target.value }))}
                    className="rounded-md border border-white/14 bg-slate-950/70 px-3 py-2.5 text-white outline-none transition-colors focus:border-primary"
                  >
                    <option value="">Choose venue type</option>
                    {venueOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-semibold text-white">Team objective</span>
                  <select
                    value={brief.objective}
                    onChange={(event) => setBrief((current) => ({ ...current, objective: event.target.value }))}
                    className="rounded-md border border-white/14 bg-slate-950/70 px-3 py-2.5 text-white outline-none transition-colors focus:border-primary"
                  >
                    <option value="">Choose objective</option>
                    {objectiveOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-between rounded-lg bg-primary px-5 py-4 text-left text-sm font-semibold text-white shadow-blue transition-colors hover:bg-primary-deep"
              >
                Get My Activity Recommendation
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-xs leading-5 text-white/58">
                This opens the enquiry form with your brief carried into the message.
              </p>
            </form>
          </div>
        </section>

        <section className="bg-white px-6 py-16 lg:px-12 lg:py-22">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                For HR And Admin Planners
              </p>
              <h2 className="text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                You do not need to choose the activity before you know what will fit.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                The right team-building activity is usually decided by constraints first. Pax, venue, energy level,
                timing, and weather exposure shape the shortlist before the activity name matters.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-section-light p-6">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Bring the details that feel messy
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {plannerSignals.map((signal) => (
                  <div key={signal} className="flex gap-3 rounded-md bg-white p-4 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="activity-fit" className="bg-slate-950 px-6 py-16 text-white lg:px-12 lg:py-22">
          <div className="container mx-auto">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Activity Fit Matrix
                </p>
                <h2 className="text-3xl font-display font-black leading-tight md:text-5xl">
                  Choose by constraint, not by a long activity menu.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-white/70">
                This is the planning logic the page should make obvious: first decide what the team and venue can
                support, then choose the format that fits.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/8">
              {fitRows.map(({ icon: Icon, lane, fits, recommendation }) => (
                <div key={lane} className="grid gap-5 border-b border-white/10 p-5 last:border-b-0 lg:grid-cols-[14rem_1fr_1.15fr] lg:items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-black text-white">{lane}</h3>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/48">{fits}</p>
                  <p className="text-sm leading-6 text-white/70">{recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-16 lg:px-12 lg:py-22">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="grid grid-cols-2 gap-3">
              <img
                src={outdoorImage}
                alt="Outdoor company activity route"
                className="h-full min-h-[320px] rounded-lg object-cover"
                loading="lazy"
              />
              <div className="grid gap-3">
                <img
                  src={indoorImage}
                  alt="Indoor team challenge setup"
                  className="h-40 rounded-lg object-cover"
                  loading="lazy"
                />
                <img
                  src={challengeImage}
                  alt="Strategy challenge team activity"
                  className="h-40 rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Sample Recommendation
              </p>
              <h2 className="mb-5 text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                The output should feel like a useful planning answer, not another open loop.
              </h2>
              <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Example brief
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  70 pax, hotel function room, 2.5 hours, mixed departments, morale and collaboration objective.
                </p>
                <div className="my-6 h-px bg-border" />
                <div className="grid gap-4">
                  {[
                    ["Likely direction", "Indoor challenge or mystery format with facilitator-led team rotation."],
                    ["Why it fits", "Sheltered venue, clear timing, strong participation, and no heavy physical barrier."],
                    ["Quote assumptions to confirm", "Room layout, team split, date, AV needs, and any comfort constraints."],
                  ].map(([label, text]) => (
                    <div key={label} className="grid gap-2 sm:grid-cols-[11rem_1fr]">
                      <span className="text-sm font-bold text-foreground">{label}</span>
                      <span className="text-sm leading-6 text-muted-foreground">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12 lg:py-22">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Curated Activity Lanes
              </p>
              <h2 className="text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                Physical team building first, with virtual options when the team is not in one place.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Physical Team Building
                    </p>
                    <h3 className="mt-2 text-2xl font-display font-black text-foreground">
                      For teams gathering in person
                    </h3>
                  </div>
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div className="divide-y divide-border">
                  {physicalLanes.map((activity) => (
                    <Link
                      key={activity.slug}
                      to={`/services/${activity.slug}`}
                      className="group grid gap-2 py-4 transition-colors hover:text-primary sm:grid-cols-[0.72fr_1fr]"
                    >
                      <span className="font-display text-lg font-bold text-foreground group-hover:text-primary">
                        {activity.title}
                      </span>
                      <span className="text-sm leading-6 text-muted-foreground">{activity.text}</span>
                    </Link>
                  ))}
                </div>
                <Button className="mt-6 whitespace-normal text-center sm:whitespace-nowrap" onClick={openPhysicalInquiry}>
                  Ask For A Physical Recommendation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </article>

              <article className="rounded-lg border border-primary/20 bg-slate-950 p-6 text-white shadow-sm">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Virtual Team Building
                    </p>
                    <h3 className="mt-2 text-2xl font-display font-black">For remote or hybrid groups</h3>
                  </div>
                  <Laptop className="h-8 w-8 text-primary" />
                </div>
                <div className="divide-y divide-white/10">
                  {virtualLanes.map((activity) => (
                    <Link
                      key={activity.slug}
                      to={`/services/${activity.slug}`}
                      className="group block py-4 transition-colors hover:text-primary"
                    >
                      <span className="block font-display text-lg font-bold text-white group-hover:text-primary">
                        {activity.title}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-white/68">{activity.text}</span>
                    </Link>
                  ))}
                </div>
                <Button className="mt-6 whitespace-normal text-center sm:whitespace-nowrap" onClick={openVirtualInquiry}>
                  Ask About Virtual Options
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-16 lg:px-12 lg:py-22">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Quote Preparation
              </p>
              <h2 className="text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                A clearer brief makes the quote conversation faster and more useful.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                The first enquiry should not be a guessing game. Send the planning details that decide feasibility,
                then let the activity recommendation follow from the brief.
              </p>
            </div>
            <div className="grid gap-5">
              <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  {quotePrep.map((detail) => (
                    <div key={detail} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-primary/15 bg-primary/5 p-5">
                <div className="flex gap-3">
                  <CloudSun className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">
                    For outdoor plans, include wet-weather or sheltered-space concerns early so fallback direction can
                    be discussed before the quote is treated as final.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12 lg:py-22">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                What Happens Next
              </p>
              <h2 className="text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                From rough brief to activity direction.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {recommendationSteps.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="relative rounded-lg border border-border bg-white p-6 shadow-sm">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="mb-4 block text-sm font-black text-primary/60">0{index + 1}</span>
                  <h3 className="mb-3 text-lg font-display font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16 text-white lg:px-12 lg:py-22">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Planning Confidence
              </p>
              <h2 className="text-3xl font-display font-black leading-tight md:text-5xl">
                A useful enquiry starts before the quote.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Recommendations stay tied to your real brief.",
                "Physical and virtual directions are compared by fit.",
                "Quote assumptions can be clarified before final confirmation.",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-primary" />
                  <p className="text-sm leading-6 text-white/74">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12 lg:py-22">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">FAQ</p>
              <h2 className="text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                Questions planners usually need answered before requesting a quote
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-display font-bold text-foreground">{faq.question}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-16 lg:px-12 lg:py-22">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Get A Corporate Activity Quote
            </p>
            <h2 className="mb-4 text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
              Send the rough brief. Get a clearer activity direction.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-muted-foreground">
              Start with pax, date, venue preference, and objective. The activity direction can follow from the
              constraints.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="xl" asChild className="whitespace-normal px-5 text-center sm:whitespace-nowrap">
                <a href="#team-activity-brief">
                  Build My Team Activity Brief
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="xl"
                variant="outline"
                onClick={openPhysicalInquiry}
                className="whitespace-normal px-5 text-center sm:whitespace-nowrap"
              >
                Ask For Recommendation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer topActivityLinks={footerActivityLinks} />
    </div>
  );
};

export default TeamBuildingHubPage;
