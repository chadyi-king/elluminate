import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
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
    constraint: "Venue is already fixed",
    direction: "Build around the space",
    detail: "Office, hotel, function room, park, heritage route, or selected external venue.",
  },
  {
    icon: Zap,
    constraint: "Team needs movement",
    direction: "Physical challenge formats",
    detail: "Race-style, mission-based, and active formats for teams that should get out of meeting mode.",
  },
  {
    icon: ShieldCheck,
    constraint: "Mixed energy levels",
    direction: "Lower-intensity indoor options",
    detail: "Puzzle, mystery, and table-friendly formats for groups that need participation without heavy exertion.",
  },
  {
    icon: Monitor,
    constraint: "Remote or hybrid group",
    direction: "Virtual activity lane",
    detail: "Facilitated online formats when the team cannot gather in one Singapore venue.",
  },
];

const recommendationSteps = [
  "Read the brief and confirm the real constraints.",
  "Shortlist activity directions that fit pax, venue, energy, and objective.",
  "Clarify quote assumptions before your team commits internally.",
  "Lock the activity details once the date, venue, and scope are aligned.",
];

const physicalLanes = [
  {
    title: "Race-style city challenge",
    slug: "amazing-race",
    image: activityImages.hero,
    text: "For teams that should move, compete, explore, and build momentum outside the usual meeting room.",
  },
  {
    title: "Indoor mystery and strategy",
    slug: "csi-bones",
    image: activityImages.indoor,
    text: "For mixed groups that need collaboration, deduction, and shared problem-solving without high physical intensity.",
  },
  {
    title: "Culture-led discovery route",
    slug: "cultural-race",
    image: activityImages.outdoor,
    text: "For teams that want a Singapore-based activity with movement, local context, and light competition.",
  },
];

const faqs = [
  {
    question: "What is corporate team building?",
    answer:
      "Corporate team building is a facilitated activity planned for company groups so colleagues can collaborate, communicate, and bond outside normal work routines. Elluminate helps match the activity to your pax, venue, timing, and goal.",
  },
  {
    question: "Do we need to choose the activity before enquiring?",
    answer:
      "No. You can send a rough brief first. Share your pax, date or timing window, preferred venue, and team objective, and Elluminate can suggest a suitable physical or virtual activity direction.",
  },
  {
    question: "Can this work indoors and outdoors?",
    answer:
      "Yes, depending on the activity direction, venue, and group needs. Indoor formats usually work better for controlled spaces, while outdoor formats suit teams that want movement and location-based challenges.",
  },
  {
    question: "What about wet weather or venue constraints?",
    answer:
      "Include those details in the brief. Elluminate can discuss indoor fit, venue limitations, and fallback considerations before the quote is confirmed.",
  },
  {
    question: "How many pax can you support?",
    answer:
      "The right answer depends on activity type, venue, facilitation needs, and timing. Send your estimated headcount and Elluminate will recommend a direction that fits the group.",
  },
  {
    question: "How do we get a quote?",
    answer:
      "Send your pax, date or timing window, venue preference, and objective. Those details help Elluminate shape a recommendation and prepare quote assumptions for your review.",
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
        keywords="corporate physical team building Singapore, corporate team building Singapore, team bonding activities Singapore, company team building activities, indoor outdoor team building Singapore, corporate team building quote"
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
              className="h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/30" />
          </div>

          <div className="container relative mx-auto grid gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Corporate Team Building Singapore
              </p>
              <h1 className="mb-6 text-4xl font-display font-black leading-tight md:text-6xl">
                Corporate Team Building in Singapore, Planned Around Your Pax, Venue And Goal
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-white/82">
                Send the messy brief. Elluminate helps translate headcount, timing, venue constraints, and team objective into a suitable activity direction before you ask the company to commit.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="xl" asChild>
                  <a href="#team-activity-brief">
                    Start With A Brief
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => openBriefModal("Physical Team Building")}
                >
                  Talk To A Planner
                </Button>
              </div>
            </div>

            <form
              id="team-activity-brief"
              onSubmit={handleBriefSubmit}
              className="border border-white/20 bg-white/95 p-5 text-slate-950 shadow-2xl backdrop-blur md:p-6"
            >
              <div className="mb-5 flex items-start gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-primary text-white">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Team Activity Brief</p>
                  <h2 className="mt-1 text-2xl font-display font-black">Get a quote-ready direction</h2>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Pax or headcount</span>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min="1"
                    value={brief.pax}
                    onChange={(event) => updateBrief("pax", event.target.value)}
                    placeholder="e.g., 80"
                    className="bg-white"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Date or timing window</span>
                  <Input
                    value={brief.timing}
                    onChange={(event) => updateBrief("timing", event.target.value)}
                    placeholder="e.g., Fri afternoon in August"
                    className="bg-white"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Venue preference</span>
                  <select
                    value={brief.venue}
                    onChange={(event) => updateBrief("venue", event.target.value)}
                    className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-slate-900 focus:border-primary focus:outline-none"
                  >
                    <option value="">Not sure yet</option>
                    <option value="Office or function room">Office or function room</option>
                    <option value="Hotel or event venue">Hotel or event venue</option>
                    <option value="Outdoor Singapore route">Outdoor Singapore route</option>
                    <option value="Hybrid or virtual">Hybrid or virtual</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-slate-700">Team objective</span>
                  <select
                    value={brief.objective}
                    onChange={(event) => updateBrief("objective", event.target.value)}
                    className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-slate-900 focus:border-primary focus:outline-none"
                  >
                    <option value="">Still deciding</option>
                    <option value="Cross-team bonding">Cross-team bonding</option>
                    <option value="High-energy morale boost">High-energy morale boost</option>
                    <option value="Communication and problem-solving">Communication and problem-solving</option>
                    <option value="Onboarding or team reset">Onboarding or team reset</option>
                  </select>
                </label>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {(["Physical Team Building", "Virtual Team Building"] as TeamBriefCategory[]).map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => updateBrief("eventCategory", category)}
                      className={`border px-3 py-2 text-sm font-semibold transition-colors ${
                        brief.eventCategory === category
                          ? "border-primary bg-primary text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-primary/60"
                      }`}
                    >
                      {category === "Physical Team Building" ? "Physical" : "Virtual"}
                    </button>
                  ))}
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Brief To Contact Form
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
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Start Before You Know The Activity
              </p>
              <h2 className="mb-5 text-3xl font-display font-black md:text-5xl">
                HR and admin planners should not have to reverse-engineer the whole event alone.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Most company enquiries begin with a half-formed brief: a rough pax count, a possible date, a venue that may or may not work, and a team objective that still needs shaping. That is enough to start.
              </p>
            </div>

            <div className="border-l-4 border-primary bg-section-light p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["Pax", "Changes facilitation, team split, and venue fit."],
                  ["Date", "Affects format, run time, and planning urgency."],
                  ["Venue", "Determines indoor, outdoor, route, or virtual direction."],
                  ["Goal", "Keeps the activity from becoming random entertainment."],
                ].map(([title, text]) => (
                  <div key={title}>
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
                The right team activity is usually hidden inside the logistics.
              </h2>
              <p className="text-base leading-7 text-white/70">
                Instead of browsing a long list of activities, use the brief to narrow the direction.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-4">
              {fitMatrix.map(({ icon: Icon, constraint, direction, detail }) => (
                <div key={constraint} className="bg-slate-950 p-6">
                  <Icon className="mb-5 h-8 w-8 text-primary" />
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">{constraint}</p>
                  <h3 className="mb-3 text-2xl font-display font-bold">{direction}</h3>
                  <p className="text-sm leading-6 text-white/68">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-20 lg:px-12">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
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
                  Sample Recommendation Output
                </p>
                <h2 className="mb-4 text-3xl font-display font-black md:text-4xl">
                  From a rough brief to a clear activity direction.
                </h2>
                <p className="text-base leading-7 text-muted-foreground">
                  A planner might come in with: 80 pax, Friday afternoon, CBD venue, mixed departments, and a need for energy without making quieter staff feel left behind.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 shadow-sm md:p-8">
              <div className="mb-6 border-b border-border pb-5">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Possible Direction</p>
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

        <section className="bg-white px-6 py-20 lg:px-12">
          <div className="container mx-auto">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Physical First, Virtual When Needed
                </p>
                <h2 className="text-3xl font-display font-black md:text-5xl">
                  Curated lanes for company teams, not a dump of every activity.
                </h2>
              </div>
              <Button variant="outline" onClick={() => openBriefModal("Virtual Team Building")}>
                Ask About Virtual
                <Monitor className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {physicalLanes.map((lane) => (
                <Link
                  key={lane.slug}
                  to={`/services/${lane.slug}`}
                  className="group block overflow-hidden bg-section-light transition-transform hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cloudinaryImage(lane.image, { width: 780 })}
                      alt={lane.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-display font-bold text-foreground">{lane.title}</h3>
                    <p className="mb-5 text-sm leading-6 text-muted-foreground">{lane.text}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary">
                      View Direction
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 grid gap-6 bg-slate-950 p-6 text-white md:grid-cols-[0.8fr_1.2fr] md:items-center md:p-8">
              <img
                src={cloudinaryImage(activityImages.virtual, { width: 900 })}
                alt="Virtual team building activity interface"
                className="h-56 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Monitor className="h-7 w-7 text-primary" />
                  <h3 className="text-2xl font-display font-black">Virtual and hybrid teams</h3>
                </div>
                <p className="mb-5 text-sm leading-6 text-white/72">
                  When the team is distributed, the brief can still become a facilitated activity direction. Share the regions, timing window, platform preference, and objective.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => openBriefModal("Virtual Team Building")}>
                  Send A Virtual Brief
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-section-light px-6 py-20 lg:px-12">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Quote Prep</p>
              <h2 className="mb-5 text-3xl font-display font-black md:text-5xl">
                What to send so the first reply is useful.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                You do not need a polished event brief. Send the practical details that affect the recommendation and quote assumptions.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              {[
                { icon: Users, title: "Pax and profile", text: "Estimated headcount, departments, seniority mix, and any participation constraints." },
                { icon: CalendarDays, title: "Date and duration", text: "Preferred date, timing window, and how long the activity can realistically run." },
                { icon: MapPin, title: "Venue situation", text: "Office, external venue, outdoor route, not sure yet, or virtual setup." },
                { icon: Target, title: "Team objective", text: "Bonding, morale, collaboration, onboarding, communication, or a team reset." },
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
                { icon: BriefcaseBusiness, title: "Quote assumptions", text: "The quote is shaped around pax, date, venue, and scope." },
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
                Questions company planners usually ask first.
              </h2>
            </div>
            <div className="space-y-px overflow-hidden border border-white/10 bg-white/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group bg-slate-950 p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-display font-bold">
                    {faq.question}
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-white/68">{faq.answer}</p>
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
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Ready To Shortlist?</p>
              <h2 className="max-w-3xl text-3xl font-display font-black md:text-5xl">
                Send pax, date, venue, and goal. Elluminate will turn it into an activity direction.
              </h2>
            </div>
            <Button size="xl" variant="secondary" onClick={() => openBriefModal("Physical Team Building")}>
              Send My Brief
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamBuildingHubPage;
