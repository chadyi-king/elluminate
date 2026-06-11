import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Filter,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BreadcrumbSchema, FAQSchema, OrganizationSchema, ServiceSchema } from "@/components/StructuredData";
import { getAttribution } from "@/lib/attribution";
import { cloudinaryImage } from "@/lib/media";
import { supabase } from "@/integrations/supabase/client";
import { servicesData } from "@/data/servicesData";

type ActivityFilter = "All" | "Outdoor" | "Indoor" | "High energy" | "Low exertion" | "Virtual";

type QuoteFormState = {
  name: string;
  email: string;
  pax: string;
  timing: string;
  venue: string;
  objective: string;
  privacyConsent: boolean;
};

type ActivityCard = {
  slug: string;
  direction: string;
  filters: ActivityFilter[];
  fit: string;
  note: string;
};

const pageUrl = "https://elluminate.sg/services/team-building";
const seoTitle = "Corporate Team Building Singapore | Elluminate";
const seoDescription =
  "Plan a facilitated corporate team building event in Singapore. Share your pax, date, venue preference and goals, then enquire with Elluminate for a suitable activity recommendation and quote.";
const contactPhone = "+65 8835 2482";
const contactEmail = "info@elluminate.sg";
const whatsappUrl =
  "https://wa.me/6588352482?text=Hi%20Elluminate%2C%20I%27d%20like%20to%20plan%20a%20team%20building%20event.";

const heroService = servicesData["team-building"];
const heroImage = heroService.hero.backgroundImage;

const filters: ActivityFilter[] = ["All", "Outdoor", "Indoor", "High energy", "Low exertion", "Virtual"];

const activityCards: ActivityCard[] = [
  {
    slug: "amazing-race",
    direction: "Outdoor race formats",
    filters: ["All", "Outdoor", "High energy"],
    fit: "For teams that want movement, clues, checkpoint missions, and a shared finish line.",
    note: "Useful when the event can stretch beyond a single room and the group wants momentum.",
  },
  {
    slug: "cultural-race",
    direction: "Outdoor race formats",
    filters: ["All", "Outdoor", "High energy"],
    fit: "For teams that want a Singapore route with discovery, local clues, and group tasks.",
    note: "Fits groups that want a more place-based activity instead of a closed-room format.",
  },
  {
    slug: "csi-bones",
    direction: "Strategy and mystery formats",
    filters: ["All", "Indoor", "Low exertion"],
    fit: "For groups that prefer deduction, collaboration, and a controlled indoor setup.",
    note: "A practical lane when your team includes mixed mobility or prefers thinking over running.",
  },
  {
    slug: "minute-to-win-it",
    direction: "High-energy station games",
    filters: ["All", "Indoor", "High energy"],
    fit: "For teams that want fast rotations, visible laughter, and easy-to-join challenges.",
    note: "Works well when you need a compact indoor activity with immediate energy.",
  },
  {
    slug: "monopoly-dash",
    direction: "Indoor challenge formats",
    filters: ["All", "Indoor", "High energy"],
    fit: "For teams that want light strategy, movement, points, and friendly competition.",
    note: "A balanced direction when the group wants games without a complicated setup.",
  },
  {
    slug: "amazing-race-virtual",
    direction: "Virtual and hybrid formats",
    filters: ["All", "Virtual", "Low exertion"],
    fit: "For remote, hybrid, or multi-office teams that still need a facilitated shared activity.",
    note: "Use this lane when people cannot gather in one physical venue.",
  },
];

const planningDetails = [
  {
    title: "Pax",
    copy: "Headcount shapes group split, game flow, facilitation, and how much space the activity needs.",
    icon: Users,
  },
  {
    title: "Date and duration",
    copy: "Timing affects availability, pacing, and whether the session should be short, half-day, or longer.",
    icon: Clock3,
  },
  {
    title: "Venue type",
    copy: "Office rooms, ballrooms, outdoor spaces, and offsite venues all change what feels smooth to run.",
    icon: MapPin,
  },
  {
    title: "Indoor/outdoor preference",
    copy: "This helps narrow the activity lane early and keeps backup discussions practical.",
    icon: Target,
  },
  {
    title: "Activity intensity",
    copy: "Some teams want speed and movement. Others need something lighter, calmer, or more inclusive.",
    icon: Sparkles,
  },
  {
    title: "Facilitation and logistics",
    copy: "Setup, briefing, scoring, rotations, and debrief all affect the final event plan and quote.",
    icon: ClipboardCheck,
  },
];

const comparison = {
  left: [
    "Pick an activity first",
    "Adapt the team to the format",
    "Pricing and logistics come later",
    "Harder to know if it fits the group",
  ],
  right: [
    "Start with pax, venue, date, and goal",
    "Shortlist activity directions that fit",
    "Discuss flow, facilitation, and setup early",
    "Build the event around the people attending",
  ],
};

const faqs = [
  {
    question: "Do I need to know which activity I want?",
    answer:
      "No. You can start with your pax, date, venue preference, and event goal. Elluminate can then recommend a suitable activity direction before you lock a specific format.",
  },
  {
    question: "Can you recommend something for our group size?",
    answer:
      "Yes. Headcount is one of the first things we ask for because it affects team split, pacing, venue fit, and facilitation needs.",
  },
  {
    question: "Can this work indoors or outdoors?",
    answer:
      "Yes, depending on your group size, venue, timing, and desired activity intensity. The enquiry brief helps us discuss indoor, outdoor, and backup options clearly.",
  },
  {
    question: "Can you support virtual or hybrid teams?",
    answer:
      "Yes. Physical team building is the main focus of this page, but Elluminate also has virtual and hybrid formats for teams that cannot gather in one place.",
  },
  {
    question: "What details should I send?",
    answer:
      "Send your expected pax, date or timing window, venue preference, event objective, and any notes about participant profile or activity intensity.",
  },
  {
    question: "How do we get a quote?",
    answer:
      "Submit the team event enquiry or WhatsApp Elluminate with your details. A planner can review the brief, suggest an activity direction, and discuss quote details with you.",
  },
];

const processSteps = [
  {
    title: "Share your event details",
    copy: "Tell us the pax, date or timing window, preferred venue, and what the team-building session should achieve.",
    icon: ClipboardCheck,
  },
  {
    title: "Get a recommended activity direction",
    copy: "Elluminate narrows the options by group profile, space, timing, and the experience you want people to have.",
    icon: Sparkles,
  },
  {
    title: "Confirm the plan and run the event",
    copy: "Once the direction works, we align on the quote, setup, flow, facilitation, and event-day details.",
    icon: CheckCircle2,
  },
];

const teamMembers = [
  {
    name: "Edmund Sim",
    role: "Director",
    image: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778649289/edmund_team_out767.png",
  },
  {
    name: "Afifah Camut",
    role: "Senior Sales Manager",
    image: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778649289/afifah_team_gmy3pc.png",
  },
  {
    name: "Lisa Ong",
    role: "Senior Events Manager",
    image: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778649290/lisa_team_gmcxyf.png",
  },
];

const selectedLogoNames = Array.from(
  new Set(
    activityCards.flatMap((activity) => servicesData[activity.slug]?.clientLogos || []),
  ),
).slice(0, 8);

const galleryImages = [
  servicesData["team-building"].hero.backgroundImage,
  servicesData["amazing-race"].hero.backgroundImage,
  servicesData["csi-bones"].overview.backgroundImage,
  servicesData["cultural-race"].hero.backgroundImage,
  servicesData["minute-to-win-it"].hero.backgroundImage,
  servicesData["monopoly-dash"].hero.backgroundImage,
];

const safeFooterLinks = [
  { name: "Team Building", path: "/services/team-building" },
  { name: "Amazing Race", path: "/services/amazing-race" },
  { name: "CSI-Bones", path: "/services/csi-bones" },
  { name: "Cultural Race", path: "/services/cultural-race" },
  { name: "Minute To Win It", path: "/services/minute-to-win-it" },
  { name: "Monopoly Dash", path: "/services/monopoly-dash" },
  { name: "Amazing Race Virtual", path: "/services/amazing-race-virtual" },
  { name: "Fit In Your Team", path: "/services/fit-in-your-team-virtual" },
  { name: "Workshops", path: "/services/workshops" },
];

const initialQuoteForm: QuoteFormState = {
  name: "",
  email: "",
  pax: "",
  timing: "",
  venue: "",
  objective: "",
  privacyConsent: false,
};

const getServiceTitle = (slug: string) => servicesData[slug]?.hero.title || slug;

const getServiceImage = (slug: string, width: number) => {
  const service = servicesData[slug];
  return cloudinaryImage(service.overview.backgroundImage || service.hero.backgroundImage, { width });
};

const buildBriefDetails = (form: QuoteFormState) =>
  [
    "Team Building Event Planning Enquiry",
    `Name: ${form.name.trim()}`,
    `Work email: ${form.email.trim()}`,
    `Pax/headcount: ${form.pax.trim()}`,
    `Date or timing window: ${form.timing.trim()}`,
    `Venue preference: ${form.venue.trim()}`,
    `Team objective: ${form.objective.trim()}`,
    "Requested support: Recommend a suitable team-building activity direction and quote details.",
    "Source page: /services/team-building#quote",
  ].join("\n");

const pushLandingEvent = (eventName: "form_start" | "cta_click", payload: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
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

  const handleFieldChange = <Key extends keyof QuoteFormState>(field: Key, value: QuoteFormState[Key]) => {
    setQuoteForm((current) => ({ ...current, [field]: value }));
  };

  const handleFormStart = () => {
    if (!formStarted) {
      pushLandingEvent("form_start", { field_group: "team_event_enquiry" });
      setFormStarted(true);
    }
  };

  const handleCtaClick = (location: string, ctaText = "Plan My Team Building Event") => {
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
      !quoteForm.venue.trim() ||
      !quoteForm.objective.trim() ||
      !quoteForm.privacyConsent
    ) {
      setFormError("Please complete the enquiry fields and consent checkbox so we can respond properly.");
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("submitting");

    const attribution = getAttribution();
    const submissionPage =
      typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "/services/team-building";
    const submissionId = crypto.randomUUID();

    const submissionPayload = {
      id: submissionId,
      name: quoteForm.name.trim(),
      email: quoteForm.email.trim(),
      phone: null,
      event_category: "Physical Team Building",
      organisation: null,
      organisation_type: null,
      expected_attendees: quoteForm.pax.trim(),
      expected_date: quoteForm.timing.trim(),
      additional_customisation: null,
      game_customisation: "Not Applicable",
      add_on_services: null,
      additional_details: buildBriefDetails(quoteForm),
      gclid: attribution.gclid || null,
      gbraid: attribution.gbraid || null,
      wbraid: attribution.wbraid || null,
      utm_source: attribution.utm_source || null,
      utm_medium: attribution.utm_medium || null,
      utm_campaign: attribution.utm_campaign || null,
      utm_term: attribution.utm_term || null,
      utm_content: attribution.utm_content || null,
      referrer: attribution.referrer || null,
      landing_page: attribution.landing_page || null,
      submission_page: submissionPage,
      form_name: "team_building_quote_brief",
    };

    try {
      const { error } = await supabase.from("contact_submissions").insert(submissionPayload);

      if (error) throw error;

      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-inquiry",
          idempotencyKey: `team-building-event-${submissionId}`,
          submissionId,
        },
      });

      setQuoteForm(initialQuoteForm);
      setSubmitStatus("success");
    } catch (error) {
      console.error("Team building enquiry submission failed", error);
      setFormError("Something went wrong while sending the enquiry. Please try again or contact us directly.");
      setSubmitStatus("error");
    }
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://elluminate.sg" },
    { name: "Services", url: "https://elluminate.sg/services" },
    { name: "Team Building", url: pageUrl },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords="corporate team building Singapore, team bonding activities Singapore, company team building activities, indoor outdoor team building Singapore, virtual team building Singapore"
        canonical={pageUrl}
        ogImage={cloudinaryImage(heroImage, { width: 1200 })}
      />
      <OrganizationSchema type="LocalBusiness" />
      <ServiceSchema name="Corporate Team Building Singapore" description={seoDescription} slug="team-building" />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-foreground text-background">
          <div className="absolute inset-0 -z-10">
            <img
              src={cloudinaryImage(heroImage, { width: 1800 })}
              alt="Corporate team building activity in Singapore"
              className="h-full w-full object-cover opacity-45"
              width={1800}
              height={1100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/88 to-foreground/45" />
          </div>

          <div className="container mx-auto grid min-h-[calc(100vh-7rem)] items-center gap-10 px-6 py-14 lg:grid-cols-[1.02fr_0.82fr] lg:px-12 lg:py-20">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex max-w-full items-start gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-primary sm:items-center sm:tracking-[0.2em]">
                <Sparkles className="h-4 w-4" />
                Corporate team building, planned around the people attending
              </div>

              <h1 className="font-display text-4xl font-black leading-[0.98] tracking-normal text-background sm:text-5xl lg:text-7xl">
                Corporate Team Building in Singapore, Planned Around Your Team
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-background/82 sm:text-xl">
                Tell us your pax, date, venue preference, and event goal. Elluminate helps you shape a
                team-building activity that fits the people, the space, and the kind of experience you want to create.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                  <a href="#quote" onClick={() => handleCtaClick("hero_primary")}>
                    Plan My Team Building Event <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="primary-outline"
                  size="xl"
                  className="w-full border-background text-background hover:bg-background hover:text-foreground sm:w-auto"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCtaClick("hero_whatsapp", "WhatsApp Us")}
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>

              <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["Physical, indoor, outdoor or virtual", "Built from pax, timing and venue", "One enquiry path, no catalogue guesswork"].map(
                  (item) => (
                    <div key={item} className="rounded-2xl border border-background/15 bg-background/10 p-4 text-sm font-semibold leading-6 text-background/84">
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>

            <div id="quote" className="scroll-mt-28 rounded-[1.75rem] border border-background/20 bg-background p-5 text-foreground shadow-2xl shadow-black/25 sm:p-7">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Event enquiry</p>
                <h2 className="mt-2 font-display text-3xl font-black">Tell Us About Your Team Event</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Send the basics. We will use them to discuss a suitable activity direction and quote details.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleQuoteSubmit} onFocus={handleFormStart}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-semibold">
                    Name
                    <Input
                      name="name"
                      value={quoteForm.name}
                      onChange={(event) => handleFieldChange("name", event.target.value)}
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="space-y-2 text-sm font-semibold">
                    Work email
                    <Input
                      name="email"
                      type="email"
                      value={quoteForm.email}
                      onChange={(event) => handleFieldChange("email", event.target.value)}
                      placeholder="name@company.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-semibold">
                    Pax / headcount
                    <Input
                      name="pax"
                      value={quoteForm.pax}
                      onChange={(event) => handleFieldChange("pax", event.target.value)}
                      placeholder="e.g. 80 pax"
                      required
                    />
                  </label>
                  <label className="space-y-2 text-sm font-semibold">
                    Date or timing window
                    <Input
                      name="timing"
                      value={quoteForm.timing}
                      onChange={(event) => handleFieldChange("timing", event.target.value)}
                      placeholder="e.g. late July, 2 hours"
                      required
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm font-semibold">
                  Venue preference
                  <Input
                    name="venue"
                    value={quoteForm.venue}
                    onChange={(event) => handleFieldChange("venue", event.target.value)}
                    placeholder="Office, hotel ballroom, outdoor venue, unsure"
                    required
                  />
                </label>

                <label className="space-y-2 text-sm font-semibold">
                  Team objective
                  <Textarea
                    name="objective"
                    value={quoteForm.objective}
                    onChange={(event) => handleFieldChange("objective", event.target.value)}
                    placeholder="Bonding, morale, collaboration, celebration, onboarding, or something else"
                    rows={4}
                    required
                  />
                </label>

                <input
                  type="text"
                  name="honeypot"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <label className="flex gap-3 rounded-2xl bg-secondary/50 p-4 text-sm leading-6 text-muted-foreground">
                  <Checkbox
                    name="privacyConsent"
                    checked={quoteForm.privacyConsent}
                    onCheckedChange={(checked) => handleFieldChange("privacyConsent", checked === true)}
                    className="mt-1"
                    required
                  />
                  <span>I consent to Elluminate contacting me about this team-building event enquiry.</span>
                </label>

                {formError && <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">{formError}</p>}
                {submitStatus === "success" && (
                  <p className="rounded-xl bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
                    Enquiry sent. We will review the event details and follow up with next steps.
                  </p>
                )}

                <Button type="submit" variant="hero" size="xl" className="w-full" disabled={submitStatus === "submitting"}>
                  {submitStatus === "submitting" ? "Sending..." : "Send My Team Building Enquiry"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-center font-display text-2xl font-black sm:text-3xl">
              Selected organisations we have worked with
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {selectedLogoNames.map((name) => (
                <div
                  key={name}
                  className="flex h-20 items-center justify-center rounded-2xl border border-border bg-secondary/35 px-3 text-center text-sm font-black text-foreground/70"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/35 py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">The real planning problem</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Most teams do not need more activity names. They need help choosing what will actually work for their group.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Different teams have different energy levels.",
                "Indoor and outdoor venues change what is practical.",
                "The event goal matters: bonding, morale, collaboration, celebration, or onboarding.",
                "A good activity should be easy to explain, easy to run, and easy for people to join.",
              ].map((copy) => (
                <article key={copy} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                  <p className="mt-5 text-lg font-semibold leading-7 text-foreground">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">The planning difference</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Generic team building vs. team building planned properly
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[1.5rem] border border-border bg-secondary/40 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Standard activity catalogue
                </p>
                <ul className="mt-6 space-y-4">
                  {comparison.left.map((item) => (
                    <li key={item} className="flex gap-3 text-base font-medium leading-7 text-muted-foreground">
                      <ChevronRight className="mt-1 h-5 w-5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[1.5rem] border border-primary/25 bg-primary/8 p-7 shadow-blue">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  The Elluminate planning approach
                </p>
                <ul className="mt-6 space-y-4">
                  {comparison.right.map((item) => (
                    <li key={item} className="flex gap-3 text-base font-semibold leading-7 text-foreground">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-secondary/35 py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">How it works</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Start with the event, then choose the activity.
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="rounded-2xl border border-border bg-background p-7 shadow-sm">
                    <div className="flex items-center justify-between">
                      <Icon className="h-8 w-8 text-primary" />
                      <span className="font-display text-5xl font-black text-primary/15">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-black">{step.title}</h3>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">{step.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="activities" className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Activity directions</p>
                <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                  Choose by fit, not just by activity name.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  These are not meant to be a giant directory. They are practical lanes to start the planning
                  conversation.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 rounded-2xl border border-border bg-secondary/35 p-2">
                <Filter className="ml-2 mt-2 h-5 w-5 text-primary" />
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActivityFilter(filter)}
                    className={`rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      activityFilter === filter ? "bg-primary text-primary-foreground shadow-blue" : "bg-background text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredActivities.map((activity) => {
                const service = servicesData[activity.slug];
                return (
                  <article key={activity.slug} className="group overflow-hidden rounded-[1.5rem] border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-blue">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={getServiceImage(activity.slug, 720)}
                        alt={getServiceTitle(activity.slug)}
                        width={720}
                        height={420}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        {activity.direction}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-black">{service.hero.title}</h3>
                      <p className="mt-4 text-base leading-7 text-muted-foreground">{activity.fit}</p>
                      <p className="mt-4 rounded-2xl bg-secondary/60 p-4 text-sm font-medium leading-6 text-foreground/75">
                        {activity.note}
                      </p>
                      <a
                        href="#quote"
                        onClick={() => handleCtaClick(`activity_${activity.slug}`, "Ask if this fits my team")}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary-deep focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        Ask if this fits my team <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-secondary/35 py-20">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why Elluminate</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                What makes Elluminate different
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                The useful part is not simply listing activities. It is helping you explain why a format makes sense
                for this team, this venue, and this event goal.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-8">
                <a href="#quote" onClick={() => handleCtaClick("usp")}>
                  Plan My Team Building Event <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="grid gap-4">
              {[
                "We help choose the activity, not just list it.",
                "We think through venue, pax, timing, and energy level before recommending.",
                "We can support physical, indoor, outdoor, and virtual team-building formats.",
                "The enquiry starts with your event goal, so the recommendation is easier to justify internally.",
              ].map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-border bg-background p-5 shadow-sm">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <p className="text-lg font-semibold leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Planning details</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                What affects the event plan and quote
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                A clearer enquiry makes the recommendation sharper and the quote conversation easier.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {planningDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-border bg-secondary/35 p-6">
                    <Icon className="h-7 w-7 text-primary" />
                    <h3 className="mt-5 font-display text-2xl font-black">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">{item.copy}</p>
                  </article>
                );
              })}
            </div>

            <Button asChild variant="hero" size="xl" className="mt-10">
              <a href="#quote" onClick={() => handleCtaClick("planning_details")}>
                Send Us Your Event Details <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        <section className="bg-foreground py-20 text-background">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Facilitated by the Elluminate team
              </p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                The activity needs someone to shape the room, not just announce the rules.
              </h2>
              <p className="mt-5 text-lg leading-8 text-background/75">
                A good session needs clear briefing, pacing, group movement, scoring, and a closing moment that makes
                the activity feel complete.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {teamMembers.map((member) => (
                <article key={member.name} className="overflow-hidden rounded-[1.5rem] border border-background/10 bg-background/8">
                  <img
                    src={cloudinaryImage(member.image, { width: 420 })}
                    alt={member.name}
                    width={420}
                    height={520}
                    loading="lazy"
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-xl font-black text-background">{member.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-background/70">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Team-building moments from past events
                </p>
                <h2 className="font-display max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                  A page for active company groups should show real movement, faces, and facilitation.
                </h2>
              </div>
              <Button asChild variant="primary-outline" size="lg">
                <a href="#quote" onClick={() => handleCtaClick("gallery")}>
                  Plan My Team Building Event
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
              {galleryImages.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className={`overflow-hidden rounded-[1.25rem] border border-border ${
                    index === 0 || index === 3 ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <img
                    src={cloudinaryImage(image, { width: index === 0 || index === 3 ? 820 : 420 })}
                    alt={`Elluminate team building event ${index + 1}`}
                    width={index === 0 || index === 3 ? 820 : 420}
                    height={index === 0 || index === 3 ? 620 : 320}
                    loading="lazy"
                    className="h-full min-h-44 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-secondary/35 py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">What teams have said</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Feedback from team-building enquiries and events.
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {heroService.testimonials.slice(0, 3).map((testimonial) => (
                <figure key={`${testimonial.author}-${testimonial.company}`} className="rounded-2xl border border-border bg-background p-7 shadow-sm">
                  <blockquote className="text-lg font-semibold leading-8 text-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <p className="font-display text-lg font-black">{testimonial.author}</p>
                    <p className="mt-1 text-sm font-semibold text-muted-foreground">{testimonial.company}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-background py-20">
          <div className="container mx-auto max-w-4xl px-6 lg:px-12">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">FAQ</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Questions people ask before planning team building.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border bg-secondary/35 p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-black text-foreground">
                    {faq.question}
                    <span className="rounded-full bg-background p-2 text-primary transition group-open:rotate-90">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground px-6 py-20 text-background lg:px-12">
          <div className="container mx-auto rounded-[1.75rem] border border-background/10 bg-background/8 p-8 text-center shadow-2xl shadow-black/20 sm:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Ready to plan?</p>
            <h2 className="mx-auto max-w-4xl font-display text-3xl font-black leading-tight sm:text-6xl">
              Plan a team-building activity your people can actually get into.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-background/75">
              Send your pax, date, venue preference, and event goal. We will help you shape the right activity direction.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href="#quote" onClick={() => handleCtaClick("final_cta")}>
                  Plan My Team Building Event <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCtaClick("final_whatsapp", "WhatsApp Elluminate")}
                className="inline-flex min-h-14 items-center gap-2 rounded-xl border border-background/20 px-6 py-3 text-sm font-bold text-background transition hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Elluminate
              </a>
              <a
                href={`tel:${contactPhone.replace(/\s/g, "")}`}
                className="inline-flex min-h-14 items-center gap-2 rounded-xl border border-background/20 px-6 py-3 text-sm font-bold text-background transition hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
              >
                <Phone className="h-4 w-4" />
                {contactPhone}
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex min-h-14 items-center gap-2 rounded-xl border border-background/20 px-6 py-3 text-sm font-bold text-background transition hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
              >
                <Mail className="h-4 w-4" />
                {contactEmail}
              </a>
            </div>
          </div>
        </section>
      </main>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Elluminate"
        onClick={() => handleCtaClick("floating_whatsapp", "WhatsApp Elluminate")}
        className="fixed bottom-6 right-4 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-[#25d366]/30 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:flex"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <div className="sticky bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 shadow-2xl backdrop-blur-xl md:hidden">
        <a
          href="#quote"
          onClick={() => handleCtaClick("mobile_sticky")}
          className="flex h-12 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-blue focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Plan My Team Building Event
        </a>
      </div>

      <Footer
        topActivityLinks={safeFooterLinks}
        bottomNote="Corporate team building, team bonding, retreats, and training experiences in Singapore."
      />
    </div>
  );
};

export default TeamBuildingHubPage;
