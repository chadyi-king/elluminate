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
import { servicesData } from "@/data/servicesData";

const heroImage = servicesData["amazing-race"].hero.backgroundImage;

const primaryActivities = [
  {
    slug: "amazing-race",
    title: "Amazing Race style routes",
    text: "Outdoor or venue-based missions for teams that want movement, checkpoints, and shared problem-solving.",
  },
  {
    slug: "csi-bones",
    title: "Indoor mystery formats",
    text: "A focused option for groups that need strong participation without relying on heavy physical intensity.",
  },
  {
    slug: "cultural-race",
    title: "Singapore discovery races",
    text: "Active team bonding built around local routes, cultural clues, and collaborative missions.",
  },
  {
    slug: "treasure-heist",
    title: "Strategy challenge formats",
    text: "Story-led challenges for teams that enjoy planning, role assignment, and timed decisions.",
  },
  {
    slug: "sotong-game",
    title: "Active challenge rounds",
    text: "High-energy rounds for groups that want playful competition, facilitation, and a clear finale.",
  },
  {
    slug: "running-man",
    title: "Variety challenge games",
    text: "A lively format for teams that want movement, laughter, and rotating group missions.",
  },
];

const virtualActivities = [
  {
    slug: "amazing-race-virtual",
    title: "Virtual Amazing Race",
    text: "Remote-friendly missions for teams joining from different offices or home locations.",
  },
  {
    slug: "the-gameshow-experience-virtual",
    title: "Virtual game show",
    text: "Hosted rounds for online teams that need easy participation and clear energy.",
  },
  {
    slug: "the-nuclear-fallout-escape-room-virtual",
    title: "Virtual escape room",
    text: "Puzzle-led online collaboration for teams that prefer logic and group decision-making.",
  },
];

const footerActivityLinks = [
  { name: "Team Building Overview", path: "/services/team-building" },
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

const buyerProblems = [
  {
    icon: Users,
    title: "The activity has to fit the group",
    text: "A team of 25, 80, or 250 pax needs different pacing, team sizes, facilitator coverage, and venue assumptions.",
  },
  {
    icon: CalendarCheck,
    title: "The date and venue shape the options",
    text: "Indoor, outdoor, office, hotel, park, and mixed-location plans each need different activity shortlists.",
  },
  {
    icon: Target,
    title: "The goal should guide the format",
    text: "Bonding, morale, onboarding, cross-team collaboration, and department energy are not the same brief.",
  },
];

const fitOptions = [
  {
    icon: Building2,
    title: "Indoor team activities",
    text: "For offices, function rooms, hotel venues, or weather-sensitive plans.",
  },
  {
    icon: MapPin,
    title: "Outdoor team activities",
    text: "For routes, parks, heritage districts, and higher-movement programmes.",
  },
  {
    icon: Sparkles,
    title: "Active challenge formats",
    text: "For teams that want facilitated competition, checkpoints, scoring, and a shared finale.",
  },
  {
    icon: Laptop,
    title: "Virtual and hybrid options",
    text: "For remote teams, regional groups, or companies mixing in-person and online participants.",
  },
];

const planningDetails = [
  "Expected pax or estimated group-size range",
  "Preferred date, backup date, or event month",
  "Indoor, outdoor, office, hotel, or external venue preference",
  "Team objective such as bonding, morale, onboarding, or collaboration",
  "Any timing, mobility, weather, food, transport, or venue constraints",
];

const howItWorks = [
  {
    icon: MessageSquare,
    title: "Share the brief",
    text: "Send pax, date, goals, venue preference, and any constraints through the enquiry form.",
  },
  {
    icon: MousePointer2,
    title: "Get activity direction",
    text: "Elluminate shortlists suitable physical or virtual formats based on the details you provide.",
  },
  {
    icon: FileText,
    title: "Confirm quote and details",
    text: "Review the recommended format, inclusions, timeline, and planning assumptions before confirming.",
  },
  {
    icon: CheckCircle2,
    title: "Run the activity",
    text: "The programme is facilitated so your team can focus on taking part instead of managing every round.",
  },
];

const faqs = [
  {
    question: "What is corporate physical team building?",
    answer:
      "Corporate physical team building is a facilitated activity session where company teams work through active, collaborative challenges together. It can be competitive, mission-based, route-based, indoor, or outdoor depending on the group and objective.",
  },
  {
    question: "Can this work indoors or outdoors?",
    answer:
      "Yes. Elluminate can recommend indoor, outdoor, or venue-based formats after reviewing your pax, date, venue preference, timing, and comfort level for weather-sensitive plans.",
  },
  {
    question: "How many pax can you support?",
    answer:
      "Share your estimated pax in the enquiry form. Elluminate will recommend formats and team structures that fit the group size instead of forcing every company into one activity.",
  },
  {
    question: "Can you recommend an activity based on our goal?",
    answer:
      "Yes. Mention whether the session is for bonding, onboarding, morale, collaboration, celebration, or department energy, and Elluminate will suggest suitable formats.",
  },
  {
    question: "How do we get a quote?",
    answer:
      "Send your pax, date, preferred venue, timing, and objective through the enquiry form. The team can then respond with a practical activity direction and quote assumptions.",
  },
  {
    question: "Is this suitable for HR/admin teams planning a company event?",
    answer:
      "Yes. The page is designed for HR, admin, office managers, team leads, and company event planners who need a clear activity shortlist and quote path.",
  },
];

const TeamBuildingHubPage = () => {
  const { openContactModal } = useContactModal();

  const openPhysicalInquiry = () => openContactModal({ eventCategory: "Physical Team Building" });
  const openVirtualInquiry = () => openContactModal({ eventCategory: "Virtual Team Building" });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Corporate Physical Team Building Singapore | Elluminate"
        description="Plan corporate physical team building in Singapore with Elluminate. Get indoor, outdoor, active, or virtual team bonding activity recommendations for your company group and request a quote."
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
        <section className="relative overflow-hidden bg-foreground text-white">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Corporate team building activity in Singapore"
              className="h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />
          </div>

          <div className="container relative mx-auto px-6 py-24 lg:py-32">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Team Activities For Companies
              </p>
              <h1 className="mb-6 text-4xl font-display font-black leading-tight md:text-6xl">
                Corporate Physical Team Building in Singapore
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-white/82">
                Plan an active team bonding session that fits your pax, date, venue, energy level, and team objective.
                Elluminate can also recommend virtual team building options when your group is remote or hybrid.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="xl" onClick={openPhysicalInquiry}>
                  Request A Team Activity Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="xl" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                  <a href="#activity-fit">Explore Activity Options</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-16">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Built For Practical Planners
              </p>
              <h2 className="text-3xl font-display font-black text-foreground md:text-5xl">
                HR/admin teams need an activity that actually fits the brief.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {buyerProblems.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-xl font-display font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="activity-fit" className="px-6 py-20">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Indoor Or Outdoor Team Activities
              </p>
              <h2 className="mb-4 text-3xl font-display font-black text-foreground md:text-5xl">
                Choose the activity lane before choosing the exact game.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                The right recommendation depends on how active the group should be, where the event can run, and what
                the company wants people to take away from the session.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {fitOptions.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <Icon className="mb-4 h-7 w-7 text-primary" />
                  <h3 className="mb-2 text-lg font-display font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground px-6 py-20 text-white">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Activity Shortlist
              </p>
              <h2 className="mb-5 text-3xl font-display font-black md:text-5xl">
                Common physical formats companies ask about
              </h2>
              <p className="text-base leading-7 text-white/72">
                These links help planners compare activity styles. The enquiry path is still the main route when you
                need a quote and recommendation.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {primaryActivities.map((activity) => (
                <Link
                  key={activity.slug}
                  to={`/services/${activity.slug}`}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-primary/60 hover:bg-white/10"
                >
                  <h3 className="mb-2 text-lg font-display font-bold text-white">{activity.title}</h3>
                  <p className="mb-4 text-sm leading-6 text-white/70">{activity.text}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    View activity
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                How It Works
              </p>
              <h2 className="mb-4 text-3xl font-display font-black text-foreground md:text-5xl">
                Share pax, date, goals, and venue direction.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                The clearer the brief, the easier it is to match the company to a workable activity format and quote.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <Icon className="h-7 w-7 text-primary" />
                    <span className="text-sm font-bold text-primary/50">0{index + 1}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-display font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-20">
          <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Quote Checklist
              </p>
              <h2 className="mb-5 text-3xl font-display font-black text-foreground md:text-5xl">
                What to send when requesting a quote
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                You do not need to know the exact activity before enquiring. Send the planning details and Elluminate
                can help narrow the options.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <ul className="space-y-4">
                {planningDetails.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-primary/15 bg-primary/5 p-4">
                <div className="flex gap-3">
                  <CloudSun className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">
                    For outdoor plans, include any wet-weather or sheltered-space preferences so the team can discuss
                    fallback direction early.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="container mx-auto grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Virtual Team Building
              </p>
              <h2 className="mb-5 text-3xl font-display font-black text-foreground md:text-5xl">
                Planning for remote or hybrid teams?
              </h2>
              <p className="mb-8 text-base leading-7 text-muted-foreground">
                If part of the team cannot gather in one location, Elluminate can also recommend hosted virtual formats.
                Use the virtual enquiry path when your participants are joining online.
              </p>
              <Button variant="primary" size="lg" onClick={openVirtualInquiry}>
                Ask About Virtual Options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-4">
              {virtualActivities.map((activity) => (
                <Link
                  key={activity.slug}
                  to={`/services/${activity.slug}`}
                  className="group rounded-xl border border-border bg-white p-5 shadow-sm transition-colors hover:border-primary/50"
                >
                  <h3 className="mb-2 text-lg font-display font-bold text-foreground">{activity.title}</h3>
                  <p className="mb-3 text-sm leading-6 text-muted-foreground">{activity.text}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    View virtual activity
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground px-6 py-20 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Planning Confidence
            </p>
            <h2 className="mb-5 text-3xl font-display font-black md:text-5xl">
              Clear next steps without invented proof.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-white/72">
              This page avoids unsupported logos, numbers, awards, and testimonials. Before confirming, ask for the
              activity format, facilitator coverage, quote inclusions, timeline, and venue assumptions that apply to
              your actual brief.
            </p>
            <Button size="xl" onClick={openPhysicalInquiry}>
              Plan My Team Activity
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="container mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                FAQ
              </p>
              <h2 className="text-3xl font-display font-black text-foreground md:text-5xl">
                Questions corporate planners usually need answered
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-display font-bold text-foreground">{faq.question}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-display font-black text-foreground md:text-5xl">
              Get a corporate activity quote
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-muted-foreground">
              Share your pax, date, preferred venue, and team objective. Elluminate will use those details to recommend
              a suitable team building direction.
            </p>
            <Button size="xl" onClick={openPhysicalInquiry}>
              Share Pax, Date And Goals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer topActivityLinks={footerActivityLinks} />
    </div>
  );
};

export default TeamBuildingHubPage;
