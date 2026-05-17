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
import outdoorImage from "@/assets/events/team-building-outdoor-1.jpg";
import routeImage from "@/assets/hero/amazing-race.jpg";
import indoorImage from "@/assets/hero/csi-investigation.jpg";

const quoteBriefItems = [
  { label: "Pax", text: "Estimated headcount, seniority mix, and team profile" },
  { label: "Date", text: "Preferred date, timing window, or event month" },
  { label: "Venue", text: "Office, hotel, external venue, outdoor route, or online" },
  { label: "Goal", text: "Bonding, morale, onboarding, collaboration, or celebration" },
];

const plannerPressures = [
  {
    icon: Users,
    title: "Mixed teams are hard to plan for",
    text: "Different departments, seniority levels, fitness comfort, and personalities can make one activity feel too intense for some and too flat for others.",
  },
  {
    icon: CalendarCheck,
    title: "The logistics decide what will actually work",
    text: "Pax, date, venue type, weather exposure, timing, and facilitator coverage shape the right shortlist before the activity name matters.",
  },
  {
    icon: Target,
    title: "A vague activity list does not help approval",
    text: "HR/admin planners need a clear recommendation they can explain internally, not twenty options with no planning logic.",
  },
];

const decisionModules = [
  {
    icon: Building2,
    title: "Indoor control",
    tag: "Office, hotel, function room",
    text: "For teams that need predictable timing, sheltered comfort, and easier participation across different energy levels.",
  },
  {
    icon: MapPin,
    title: "Outdoor movement",
    tag: "Routes, parks, city missions",
    text: "For groups that want momentum, movement, checkpoints, and a more memorable away-from-desk experience.",
  },
  {
    icon: Sparkles,
    title: "Active challenge",
    tag: "High energy, facilitated rounds",
    text: "For company groups that want competition, scoring, team identity, and a shared finale without turning it into a sports day.",
  },
  {
    icon: Laptop,
    title: "Virtual or hybrid",
    tag: "Remote, regional, mixed locations",
    text: "For teams who cannot all gather physically but still need hosted interaction, pace, and a clear activity structure.",
  },
];

const recommendationSteps = [
  {
    icon: MessageSquare,
    title: "Send the real constraints",
    text: "Bring the messy planning details: pax, date, venue, timing, comfort level, and what the session should achieve.",
  },
  {
    icon: MousePointer2,
    title: "Get a tighter activity direction",
    text: "Elluminate narrows the field into physical or virtual formats that fit the brief instead of asking you to guess from a menu.",
  },
  {
    icon: FileText,
    title: "Review quote assumptions",
    text: "The quote conversation can cover duration, inclusions, facilitation needs, venue assumptions, and next planning steps.",
  },
  {
    icon: CheckCircle2,
    title: "Run the activity with a clear plan",
    text: "Once the direction is confirmed, the activity flow is built around your group size, energy level, and venue reality.",
  },
];

const physicalLanes = [
  {
    slug: "amazing-race",
    title: "Amazing Race-style missions",
    text: "For outdoor or venue-based groups that want movement, checkpoints, and team momentum.",
  },
  {
    slug: "csi-bones",
    title: "Indoor mystery formats",
    text: "For teams that need participation and problem-solving without heavy physical intensity.",
  },
  {
    slug: "cultural-race",
    title: "Singapore discovery routes",
    text: "For groups that want local movement, collaborative clues, and a stronger sense of place.",
  },
  {
    slug: "treasure-heist",
    title: "Strategy challenge formats",
    text: "For teams that respond well to role assignment, planning, timed decisions, and shared stakes.",
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
    text: "For online groups that need easy participation, clear rounds, and fast energy.",
  },
  {
    slug: "the-nuclear-fallout-escape-room-virtual",
    title: "Virtual escape room",
    text: "For teams that prefer puzzle-led collaboration and group decision-making.",
  },
];

const quotePrep = [
  "Estimated pax or group-size range",
  "Preferred date, time window, and event duration",
  "Venue status: confirmed, preferred, or still open",
  "Indoor, outdoor, or virtual preference",
  "Team objective and any comfort or mobility considerations",
  "Weather, transport, meal, AV, or approval constraints",
];

const faqs = [
  {
    question: "What is corporate physical team building?",
    answer:
      "Corporate physical team building is a facilitated activity session where company teams take part in active, collaborative challenges. The format can be indoor, outdoor, route-based, mission-based, or lower-intensity depending on the group and objective.",
  },
  {
    question: "Can this work indoors or outdoors?",
    answer:
      "Yes. Elluminate can recommend indoor, outdoor, or venue-based formats after reviewing your pax, date, venue preference, timing, and comfort level for weather-sensitive plans.",
  },
  {
    question: "How many pax can you support?",
    answer:
      "Share your estimated pax in the enquiry form. Elluminate will recommend activity formats and team structures that fit the group instead of forcing every company into one activity.",
  },
  {
    question: "Can you recommend an activity based on our goal?",
    answer:
      "Yes. Mention whether the session is for bonding, onboarding, morale, collaboration, celebration, or department energy, and Elluminate will suggest a suitable direction.",
  },
  {
    question: "How do we get a quote?",
    answer:
      "Send your pax, date, preferred venue, timing, and objective through the enquiry form. The team can then respond with a practical activity direction and quote assumptions.",
  },
  {
    question: "Is this suitable for HR/admin teams planning a company event?",
    answer:
      "Yes. This page is designed for HR/admin planners, office managers, team leads, and company event planners who need a clear shortlist and quote path.",
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

const TeamBuildingHubPage = () => {
  const { openContactModal } = useContactModal();

  const openPhysicalInquiry = () => openContactModal({ eventCategory: "Physical Team Building" });
  const openVirtualInquiry = () => openContactModal({ eventCategory: "Virtual Team Building" });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Corporate Physical Team Building Singapore | Elluminate"
        description="Plan corporate physical team building in Singapore with Elluminate. Share pax, date, venue, and goals to get indoor, outdoor, active, or virtual team bonding activity recommendations and a quote direction."
        keywords="corporate physical team building Singapore, corporate team building Singapore, team bonding activities Singapore, company team building activities, indoor outdoor team building Singapore, corporate team building quote"
        canonical="https://elluminate.sg/services/team-building"
      />
      <ServiceSchema
        name="Corporate Physical Team Building in Singapore"
        description="Elluminate helps Singapore company teams plan facilitated physical and virtual team building activities based on pax, date, venue, and objective."
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
        <section className="relative min-h-[calc(100vh-7rem)] overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Corporate team building activity in Singapore"
              className="h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-slate-950/74" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(42,139,255,0.34),transparent_34%),linear-gradient(90deg,rgba(3,7,18,0.98)_0%,rgba(3,7,18,0.88)_48%,rgba(3,7,18,0.42)_100%)]" />
          </div>

          <div className="container relative mx-auto grid gap-10 px-6 py-16 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Team Activities For Companies
              </p>
              <h1 className="mb-6 text-4xl font-display font-black leading-[0.98] md:text-6xl lg:text-7xl">
                Corporate Physical Team Building in Singapore
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/82">
                Bring the messy planning details. Elluminate helps turn pax, date, venue, energy level, and team goals
                into a team-building activity direction your company can actually run.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="xl" onClick={openPhysicalInquiry} className="w-full whitespace-normal px-5 text-center sm:w-auto sm:whitespace-nowrap">
                  Request A Team Activity Quote
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  asChild
                  className="w-full whitespace-normal border-white/35 bg-white/10 px-5 text-center text-white hover:bg-white hover:text-slate-950 sm:w-auto sm:whitespace-nowrap"
                >
                  <a href="#activity-fit">Compare Activity Fits</a>
                </Button>
              </div>
            </div>

            <aside className="w-full max-w-full overflow-hidden rounded-lg border border-white/16 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-md lg:ml-auto lg:max-w-md">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Quote Brief</p>
                  <h2 className="mt-2 text-2xl font-display font-black text-white">What to send first</h2>
                </div>
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-3">
                {quoteBriefItems.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[3.75rem_minmax(0,1fr)] gap-3 border-t border-white/10 pt-3 sm:grid-cols-[4.5rem_minmax(0,1fr)]"
                  >
                    <span className="text-sm font-bold text-white">{item.label}</span>
                    <span className="min-w-0 break-words text-sm leading-6 text-white/72">{item.text}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={openPhysicalInquiry}
                className="mt-6 flex w-full items-center justify-between rounded-lg bg-primary px-5 py-4 text-left text-sm font-semibold text-white shadow-blue transition-colors hover:bg-primary-deep"
              >
                Share pax, date and goals
                <ArrowRight className="h-4 w-4" />
              </button>
            </aside>
          </div>
        </section>

        <section className="bg-white px-6 py-18 lg:px-12 lg:py-24">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                The Planning Problem
              </p>
              <h2 className="text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                The activity is only good if it fits the room.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Corporate team building breaks down when the format ignores real constraints. The better starting point
                is not the longest list of games. It is a clear read of the group, venue, timing, and goal.
              </p>
            </div>
            <div className="grid gap-4">
              {plannerPressures.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-lg border border-border bg-section-light p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-display font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="activity-fit" className="overflow-hidden bg-slate-950 px-6 py-18 text-white lg:px-12 lg:py-24">
          <div className="container mx-auto">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Choose By Constraint
                </p>
                <h2 className="text-3xl font-display font-black leading-tight md:text-5xl">
                  Decide the activity lane before the activity name.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-white/70">
                Indoor, outdoor, active, lower-intensity, or virtual is not a style choice. It is a planning decision
                shaped by pax, weather, venue, comfort level, and how much energy the session needs.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {decisionModules.map(({ icon: Icon, title, tag, text }) => (
                <article key={title} className="bg-slate-950/88 p-6">
                  <Icon className="mb-5 h-7 w-7 text-primary" />
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/44">{tag}</p>
                  <h3 className="mb-3 text-xl font-display font-bold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-white/68">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-18 lg:px-12 lg:py-24">
          <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-3">
              <img
                src={outdoorImage}
                alt="Outdoor team activity moment"
                className="h-full min-h-[320px] rounded-lg object-cover"
                loading="lazy"
              />
              <div className="grid gap-3">
                <img src={routeImage} alt="Team route challenge" className="h-40 rounded-lg object-cover" loading="lazy" />
                <img src={indoorImage} alt="Indoor team challenge" className="h-40 rounded-lg object-cover" loading="lazy" />
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Recommendation Logic
              </p>
              <h2 className="mb-5 text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                Elluminate helps turn unclear options into a quote-ready direction.
              </h2>
              <p className="mb-8 text-base leading-7 text-muted-foreground">
                You do not need to know the exact format before enquiring. Share the planning realities, and the
                response can focus on what is suitable for your people, space, time, and objective.
              </p>
              <div className="space-y-4">
                {recommendationSteps.map(({ icon: Icon, title, text }, index) => (
                  <article key={title} className="grid grid-cols-[3rem_1fr] gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">0{index + 1}</p>
                      <h3 className="mt-1 text-lg font-display font-bold text-foreground">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-18 lg:px-12 lg:py-24">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Curated Lanes</p>
              <h2 className="text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                Physical first, with virtual options when the team is not in one place.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Physical Team Building</p>
                    <h3 className="mt-2 text-2xl font-display font-black text-foreground">For teams gathering in person</h3>
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
                  Get A Physical Activity Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </article>

              <article className="rounded-lg border border-primary/20 bg-slate-950 p-6 text-white shadow-sm">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Virtual Team Building</p>
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

        <section className="bg-section-light px-6 py-18 lg:px-12 lg:py-24">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Quote Preparation
              </p>
              <h2 className="text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                A better brief gets you a better recommendation.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                The quote path should not feel like guessing. Send the details that decide feasibility, then let the
                activity direction follow from the brief.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                {quotePrep.map((detail) => (
                  <div key={detail} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-primary/15 bg-primary/5 p-5">
                <div className="flex gap-3">
                  <CloudSun className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">
                    For outdoor plans, include wet-weather concerns or sheltered-space preferences early so fallback
                    direction can be discussed before the quote is treated as final.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-18 lg:px-12 lg:py-24">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                After You Enquire
              </p>
              <h2 className="text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                The next step should feel clear, not like another open loop.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {recommendationSteps.map(({ title, text }, index) => (
                <article key={title} className="relative rounded-lg border border-border bg-white p-6 shadow-sm">
                  <span className="mb-8 block text-sm font-black text-primary/60">0{index + 1}</span>
                  <h3 className="mb-3 text-lg font-display font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-18 text-white lg:px-12 lg:py-24">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Planning Confidence
              </p>
              <h2 className="text-3xl font-display font-black leading-tight md:text-5xl">
                A focused activity conversation before you commit.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Recommendations stay tied to your actual brief.",
                "Indoor, outdoor, and virtual directions are compared by fit.",
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

        <section className="px-6 py-18 lg:px-12 lg:py-24">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">FAQ</p>
              <h2 className="text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
                Questions corporate planners usually need answered
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

        <section className="bg-section-light px-6 py-18 lg:px-12 lg:py-24">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Get A Corporate Activity Quote
            </p>
            <h2 className="mb-4 text-3xl font-display font-black leading-tight text-foreground md:text-5xl">
              Send the brief. Get a clearer team-building direction.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-muted-foreground">
              Share your pax, date, preferred venue, and objective so Elluminate can recommend a physical or virtual
              activity direction that fits the group.
            </p>
            <Button size="xl" onClick={openPhysicalInquiry} className="whitespace-normal px-5 text-center sm:whitespace-nowrap">
              Share Pax, Date And Goals
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer topActivityLinks={footerActivityLinks} />
    </div>
  );
};

export default TeamBuildingHubPage;
