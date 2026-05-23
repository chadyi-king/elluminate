import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileQuestion,
  MapPin,
  Monitor,
  Route,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContactModal } from "@/contexts/ContactModalContext";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/StructuredData";
import { servicesData } from "@/data/servicesData";
import { cloudinaryImage } from "@/lib/media";

type TeamBriefCategory = "Physical Team Building" | "Virtual Team Building";

const activityImages = {
  hero: servicesData["amazing-race"].hero.backgroundImage,
  indoor: servicesData["csi-bones"].hero.backgroundImage,
  outdoor: servicesData["cultural-race"].hero.backgroundImage,
  strategy: servicesData["treasure-heist"].hero.backgroundImage,
  virtual: servicesData["amazing-race-virtual"].hero.backgroundImage,
};

const fitMatrix = [
  {
    icon: MapPin,
    label: "Venue is fixed",
    title: "Build around the space",
    copy: "Office, hotel function room, external venue, outdoor route, or virtual setup.",
  },
  {
    icon: Zap,
    label: "Team needs energy",
    title: "Add movement and pace",
    copy: "Race-style missions, timed rounds, checkpoints, and active challenges.",
  },
  {
    icon: ShieldCheck,
    label: "Mixed comfort levels",
    title: "Keep participation easy",
    copy: "Puzzle, mystery, strategy, and table-friendly formats for broad groups.",
  },
  {
    icon: Target,
    label: "Clear business goal",
    title: "Match the activity to the outcome",
    copy: "Bonding, morale, onboarding, collaboration, celebration, or team reset.",
  },
  {
    icon: Monitor,
    label: "Remote or hybrid",
    title: "Use hosted virtual formats",
    copy: "Structured online activities when the team cannot gather in one place.",
  },
];

const activityIdeas = [
  {
    title: "Amazing Race-style missions",
    slug: "amazing-race",
    fit: "Outdoor or venue-based",
    copy: "For teams that want movement, checkpoints, collaboration, and a clear finish line.",
  },
  {
    title: "Indoor mystery challenge",
    slug: "csi-bones",
    fit: "Indoor, lower-intensity",
    copy: "For groups that need problem-solving, deduction, and participation without heavy exertion.",
  },
  {
    title: "Cultural discovery route",
    slug: "cultural-race",
    fit: "Singapore outdoor route",
    copy: "For teams that want local context, movement, clues, and light competition.",
  },
  {
    title: "Treasure strategy challenge",
    slug: "treasure-heist",
    fit: "Indoor or controlled venue",
    copy: "For groups that enjoy roles, planning, negotiation, and timed decisions.",
  },
  {
    title: "Minute-to-win-it rounds",
    slug: "minute-to-win-it",
    fit: "High-energy indoor",
    copy: "For teams that want quick rounds, easy laughter, and low setup friction.",
  },
  {
    title: "Monopoly-style dash",
    slug: "monopoly-dash",
    fit: "Movement plus strategy",
    copy: "For groups that like trading, route choices, scoring, and friendly pressure.",
  },
  {
    title: "Running Man-inspired challenge",
    slug: "running-man",
    fit: "Active challenge",
    copy: "For teams that want pace, team tasks, and a more kinetic activity direction.",
  },
  {
    title: "Amongst Us-style social deduction",
    slug: "amongst-us",
    fit: "Indoor or hybrid-friendly",
    copy: "For teams that enjoy communication, suspicion, teamwork, and fast decision-making.",
  },
  {
    title: "Creative build challenge",
    slug: "builder-cross",
    fit: "Hands-on teamwork",
    copy: "For planners who want planning, building, testing, and collaboration in one format.",
  },
  {
    title: "Virtual hosted challenge",
    slug: "amazing-race-virtual",
    fit: "Remote or regional teams",
    copy: "For distributed groups that still need facilitation, missions, and a shared tempo.",
  },
];

const teamBuildingFooterLinks = activityIdeas.map(({ title, slug }) => ({
  name: title,
  path: `/services/${slug}`,
}));

const recommendationSteps = [
  "Confirm the real constraints: pax, date, venue, duration, weather exposure, and team comfort level.",
  "Shortlist physical or virtual activity directions that match the group instead of forcing a random format.",
  "Clarify quote assumptions early so HR, admin, or team leads know what still needs approval.",
  "Shape the final run plan once the activity, venue, timing, and team split are aligned.",
];

const trustChecks = [
  "No need to choose the activity before enquiring.",
  "Recommendations stay tied to pax, venue, timing, and objective.",
  "Indoor, outdoor, physical, and virtual options are compared by fit.",
  "Quote assumptions can be clarified before final confirmation.",
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
      "No. Send the planning brief first. Elluminate can use pax, date, venue preference, team goal, and comfort level to suggest a suitable activity direction.",
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
      "Yes. Include any budget range, procurement requirement, or approval constraint in the brief so the first recommendation is more useful.",
  },
  {
    question: "Can you suggest fun things to do for our company team?",
    answer:
      "Yes. Share whether the group prefers movement, mystery, strategy, quick games, Singapore routes, or virtual participation. Elluminate can shortlist activity ideas around those constraints.",
  },
  {
    question: "What happens after we submit the brief?",
    answer:
      "The brief opens the existing enquiry form with the context carried across. A real enquiry is only submitted after that form is completed.",
  },
];

const TeamBuildingHubPage = () => {
  const { openContactModal } = useContactModal();
  const [brief, setBrief] = useState({
    pax: "",
    timing: "",
    venue: "",
    objective: "",
    eventCategory: "Physical Team Building" as TeamBriefCategory,
  });

  const updateBrief = (field: keyof typeof brief, value: string) => {
    setBrief((current) => ({ ...current, [field]: value }));
  };

  const buildBriefDetails = (eventCategory: TeamBriefCategory) =>
    [
      "Team Activity Brief",
      `Activity lane: ${eventCategory}`,
      `Pax/headcount: ${brief.pax || "Not provided"}`,
      `Date or timing window: ${brief.timing || "Not provided"}`,
      `Venue preference: ${brief.venue || "Not provided"}`,
      `Team objective: ${brief.objective || "Not provided"}`,
      "Source: /services/team-building brief panel",
    ].join("\n");

  const openBriefModal = (eventCategory: TeamBriefCategory = brief.eventCategory) => {
    openContactModal({
      additionalDetails: buildBriefDetails(eventCategory),
      eventCategory,
      expectedAttendees: brief.pax,
    });
  };

  const handleBriefSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openBriefModal(brief.eventCategory);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Corporate Physical Team Building Singapore | Elluminate"
        description="Plan corporate team bonding activities in Singapore around your pax, date, venue, and objective. Explore indoor, outdoor, and virtual team building options and request a quote."
        keywords="corporate physical team building Singapore, corporate team building Singapore, team bonding activities Singapore, company team building activities, indoor outdoor team building Singapore, corporate team building quote, fun team building activities Singapore"
        canonical="https://elluminate.sg/services/team-building"
      />
      <ServiceSchema
        name="Corporate Physical Team Building Singapore"
        description="Elluminate helps Singapore company planners turn a team-building brief into suitable physical or virtual activity recommendations."
        slug="team-building"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://elluminate.sg/" },
          { name: "Services", url: "https://elluminate.sg/" },
          { name: "Corporate Team Building", url: "https://elluminate.sg/services/team-building" },
        ]}
      />
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src={cloudinaryImage(activityImages.hero, { width: 1800 })}
              alt="Corporate team building activity in Singapore"
              className="h-full w-full object-cover opacity-70"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />
          </div>

          <div className="container relative mx-auto grid gap-8 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center lg:px-12 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Corporate Team Building Singapore
              </p>
              <h1 className="mb-6 text-4xl font-display font-black leading-[0.98] md:text-5xl lg:text-6xl">
                Corporate Team Building in Singapore, Planned Around Your Pax, Venue And Goal
              </h1>
              <p className="mb-7 max-w-2xl text-lg leading-8 text-white/80">
                Send the messy planning details. Elluminate turns headcount, timing, venue reality, and team objectives into a clearer activity recommendation for your company group.
              </p>

              <div className="mb-8 grid gap-3 text-sm text-white/75 sm:grid-cols-3">
                {["No activity choice needed first", "Indoor, outdoor, or virtual", "Brief carried into enquiry"].map((item) => (
                  <div key={item} className="flex items-center gap-2 border border-white/15 bg-white/10 px-3 py-3">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="xl" asChild>
                  <a href="#team-activity-brief">
                    Build My Team Activity Brief
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="!border-white !bg-transparent !text-white hover:!bg-white/10"
                  asChild
                >
                  <a href="#top-10-activity-ideas">Pick from 10 activity directions</a>
                </Button>
              </div>
            </div>

            <form
              id="team-activity-brief"
              onSubmit={handleBriefSubmit}
              className="border border-white/20 bg-white/95 p-5 text-slate-950 shadow-2xl backdrop-blur md:p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Team Activity Brief</p>
                  <h2 className="mt-1 text-2xl font-display font-black">Start with the constraints</h2>
                </div>
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-primary text-white">
                  <ClipboardList className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {(["Physical Team Building", "Virtual Team Building"] as TeamBriefCategory[]).map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => updateBrief("eventCategory", category)}
                      className={`min-h-11 border px-3 py-2 text-sm font-semibold transition-colors ${
                        brief.eventCategory === category
                          ? "border-primary bg-primary text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-primary/60"
                      }`}
                    >
                      {category === "Physical Team Building" ? "Physical" : "Virtual"}
                    </button>
                  ))}
                </div>

                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Pax / headcount</span>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min="1"
                    value={brief.pax}
                    onChange={(event) => updateBrief("pax", event.target.value)}
                    placeholder="e.g. 80 pax"
                    className="h-11 bg-white text-slate-950"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Date or timing window</span>
                  <Input
                    value={brief.timing}
                    onChange={(event) => updateBrief("timing", event.target.value)}
                    placeholder="e.g. late July, weekday afternoon"
                    className="h-11 bg-white text-slate-950"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Venue preference</span>
                  <select
                    value={brief.venue}
                    onChange={(event) => updateBrief("venue", event.target.value)}
                    className="h-11 w-full rounded-md border border-input bg-white px-3 text-sm text-slate-950 shadow-sm focus:border-primary focus:outline-none"
                  >
                    <option value="">Choose venue type</option>
                    <option value="Still deciding">Still deciding</option>
                    <option value="Office or function room">Office or function room</option>
                    <option value="Hotel or external venue">Hotel or external venue</option>
                    <option value="Outdoor route or park">Outdoor route or park</option>
                    <option value="Virtual or hybrid">Virtual or hybrid</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Team objective</span>
                  <select
                    value={brief.objective}
                    onChange={(event) => updateBrief("objective", event.target.value)}
                    className="h-11 w-full rounded-md border border-input bg-white px-3 text-sm text-slate-950 shadow-sm focus:border-primary focus:outline-none"
                  >
                    <option value="">Choose objective</option>
                    <option value="Bonding and morale">Bonding and morale</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Onboarding">Onboarding</option>
                    <option value="Celebration">Celebration</option>
                    <option value="High-energy challenge">High-energy challenge</option>
                    <option value="Unsure - recommend for us">Unsure - recommend for us</option>
                  </select>
                </label>

                <Button type="submit" className="min-h-12 w-full" size="lg">
                  Get My Activity Recommendation
                  <Send className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs leading-5 text-slate-500">
                  This opens the existing enquiry form with your brief carried across. No production enquiry is submitted until that form is completed.
                </p>
              </div>
            </form>
          </div>
        </section>

        <section className="bg-white px-6 py-16 lg:px-12">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                For HR And Admin Planners
              </p>
              <h2 className="mb-5 text-3xl font-display font-black md:text-5xl">
                You can start before the activity name is obvious.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Many company enquiries begin with a half-formed brief: a rough pax count, a possible date, a venue that may or may not work, and a team objective that still needs shaping. That is enough to begin the shortlist.
              </p>
            </div>

            <div className="border-l-4 border-primary bg-section-light p-6">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                What Elluminate checks before recommending an activity
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Pax", "Team split, facilitator load, and venue fit."],
                  ["Date", "Run time, planning urgency, and availability."],
                  ["Venue", "Indoor, outdoor, route, or virtual direction."],
                  ["Goal", "Bonding, morale, collaboration, onboarding, or celebration."],
                ].map(([title, text]) => (
                  <div key={title} className="bg-white p-4 shadow-sm">
                    <p className="mb-1 text-lg font-display font-bold text-foreground">{title}</p>
                    <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 text-white lg:px-12">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Choose By Constraint
              </p>
              <h2 className="mb-4 text-3xl font-display font-black md:text-5xl">
                The right activity usually reveals itself through the logistics.
              </h2>
              <p className="text-base leading-7 text-white/70">
                Start with the things that are hard to change: pax, date, venue, energy level, objective, and whether the team can gather in person.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-5">
              {fitMatrix.map(({ icon: Icon, label, title, copy }) => (
                <div key={label} className="bg-slate-950 p-6">
                  <Icon className="mb-5 h-8 w-8 text-primary" />
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">{label}</p>
                  <h3 className="mb-3 text-2xl font-display font-bold">{title}</h3>
                  <p className="text-sm leading-6 text-white/70">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="top-10-activity-ideas" className="bg-white px-6 py-20 lg:px-12">
          <div className="container mx-auto">
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Fun Things To Do With Your Team
                </p>
                <h2 className="text-3xl font-display font-black md:text-5xl">
                  Top 10 Fun Team Building Activity Ideas
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                Use this as a shortlist, not homework. Pick a few directions that feel right, then let the brief decide what actually fits your pax, venue, date, and team comfort level.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {activityIdeas.map((activity, index) => (
                <Link
                  key={activity.title}
                  to={`/services/${activity.slug}`}
                  className="group grid gap-4 border border-border bg-section-light p-5 transition-colors hover:border-primary/50 hover:bg-white md:grid-cols-[64px_1fr]"
                >
                  <div className="flex h-16 w-16 items-center justify-center bg-slate-950 text-xl font-display font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-display font-bold text-foreground">{activity.title}</h3>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{activity.fit}</span>
                    </div>
                    <p className="mb-3 text-sm leading-6 text-muted-foreground">{activity.copy}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary">
                      View activity direction
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 bg-slate-950 p-6 text-white md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Unsure What Fits?</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/72">
                  Send the team brief and ask Elluminate to narrow the list for your venue, pax, and objective.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="outline" className="!border-white !bg-transparent !text-white hover:!bg-white/10" onClick={() => openBriefModal("Physical Team Building")}>
                  Ask For A Shortlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  className="!bg-white !text-slate-950 hover:!bg-slate-100"
                  onClick={() => openBriefModal("Virtual Team Building")}
                >
                  Ask About Virtual Options
                  <Monitor className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-20 lg:px-12">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-stretch">
            <div className="overflow-hidden bg-white shadow-sm">
              <img
                src={cloudinaryImage(activityImages.strategy, { width: 1100 })}
                alt="Facilitated corporate team activity"
                className="h-64 w-full object-cover md:h-80"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 md:p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Sample Recommendation
                </p>
                <h2 className="mb-4 text-3xl font-display font-black md:text-4xl">
                  From rough brief to useful quote direction.
                </h2>
                <p className="text-base leading-7 text-muted-foreground">
                  Example brief: 80 pax, Friday afternoon, CBD venue, mixed departments, and a need for energy without leaving quieter staff behind.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 shadow-sm md:p-8">
              <div className="mb-6 border-b border-border pb-5">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Possible Direction
                </p>
                <h3 className="text-2xl font-display font-black text-foreground">
                  Indoor strategy challenge or race-style route with moderated intensity
                </h3>
              </div>
              <div className="space-y-4">
                {recommendationSteps.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-primary text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-8 w-full" onClick={() => openBriefModal("Physical Team Building")}>
                Request My Recommendation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Claim-safe trust section: keep proof language neutral until owner-approved evidence exists. */}
        <section className="bg-white px-6 py-20 lg:px-12">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Planning Confidence
              </p>
              <h2 className="mb-5 text-3xl font-display font-black md:text-5xl">
                Credibility without inflated proof claims.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Until owner-approved logos, testimonials, or volume data are supplied, this page keeps the reassurance practical: clear constraints, clear next step, and clear quote inputs.
              </p>
            </div>

            <div className="grid gap-3">
              {trustChecks.map((item) => (
                <div key={item} className="flex gap-3 border border-border bg-section-light p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-20 lg:px-12">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Quote Preparation</p>
              <h2 className="mb-5 text-3xl font-display font-black md:text-5xl">
                What to send so the first reply is useful.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                You do not need a polished event brief. Send the practical details that affect feasibility, recommendation quality, and quote assumptions.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              {[
                { icon: Users, title: "Pax and profile", text: "Estimated headcount, departments, seniority mix, and participation constraints." },
                { icon: CalendarDays, title: "Date and duration", text: "Preferred date, timing window, and how long the activity can realistically run." },
                { icon: MapPin, title: "Venue situation", text: "Office, external venue, outdoor route, open venue search, or virtual setup." },
                { icon: Target, title: "Team objective", text: "Bonding, morale, collaboration, onboarding, communication, or team reset." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-white p-6">
                  <Icon className="mb-4 h-7 w-7 text-primary" />
                  <h3 className="mb-2 text-xl font-display font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-12">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">After Enquiry</p>
              <h2 className="text-3xl font-display font-black md:text-5xl">
                A practical next step, not a vague call for details.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {[
                { icon: FileQuestion, title: "Brief review", text: "Your constraints are reviewed before an activity direction is suggested." },
                { icon: Sparkles, title: "Recommendation", text: "You get a clearer lane for physical or virtual team building." },
                { icon: BriefcaseBusiness, title: "Quote assumptions", text: "The quote conversation can cover pax, date, venue, scope, and facilitation needs." },
                { icon: Route, title: "Event alignment", text: "Details are confirmed before the facilitated activity runs." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-t-4 border-primary bg-section-light p-6">
                  <Icon className="mb-4 h-7 w-7 text-primary" />
                  <h3 className="mb-2 text-xl font-display font-bold">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 text-white lg:px-12">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">FAQ</p>
              <h2 className="text-3xl font-display font-black md:text-5xl">
                Questions planners usually need answered before requesting a quote
              </h2>
            </div>
            <div className="space-y-px overflow-hidden border border-white/10 bg-white/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group bg-slate-950 p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-display font-bold">
                    {faq.question}
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-white/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-primary px-6 py-16 text-white lg:px-12">
          <div className="absolute inset-0 opacity-20">
            <img
              src={cloudinaryImage(activityImages.outdoor, { width: 1600 })}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="container relative mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Get A Corporate Activity Quote
              </p>
              <h2 className="max-w-3xl text-3xl font-display font-black md:text-5xl">
                Send the rough brief. Get a clearer activity direction.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
                Start with pax, date, venue preference, and objective. The activity direction can follow from the constraints.
              </p>
            </div>
            <Button
              size="xl"
              variant="secondary"
              className="!bg-white !text-slate-950 hover:!bg-slate-100"
              onClick={() => openBriefModal("Physical Team Building")}
            >
              Build My Team Activity Brief
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer
        topActivityLinks={teamBuildingFooterLinks}
        bottomNote="Corporate team building, retreats, training, and facilitated event experiences in Singapore."
      />
    </div>
  );
};

export default TeamBuildingHubPage;
