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
  Route,
  Sparkles,
  Target,
  Users,
  WalletCards,
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
import { trackLeadConversion } from "@/lib/tracking";
import { cloudinaryImage } from "@/lib/media";
import { supabase } from "@/integrations/supabase/client";
import { servicesData } from "@/data/servicesData";

type ActivityFilter = "All" | "Outdoor" | "Indoor" | "High energy" | "Low exertion" | "Virtual";
type PackageTierValue = "Classic" | "Takeover" | "Signature";

type QuoteFormState = {
  name: string;
  email: string;
  pax: string;
  timing: string;
  venue: string;
  objective: string;
  preferredTier: PackageTierValue | "";
  privacyConsent: boolean;
};

type ActivityCard = {
  slug: string;
  title: string;
  direction: string;
  filters: ActivityFilter[];
  fit: string;
  note: string;
};

type PackageTierCard = {
  tier: PackageTierValue;
  title: string;
  eyebrow: string;
  price: string;
  copy: string;
  usefulFor: string[];
  cta: string;
};

const pageUrl = "https://elluminate.sg/services/team-building";
const seoTitle = "Corporate Team Building Singapore | Elluminate";
const seoDescription =
  "Plan corporate team building in Singapore without babysitting another vendor. Share your pax, date, venue and goal, then start a free planning session with Elluminate.";
const contactPhone = "+65 8835 2482";
const contactEmail = "info@elluminate.sg";
const whatsappUrl =
  "https://wa.me/6588352482?text=Hi%20Elluminate%2C%20I'd%20like%20to%20start%20a%20free%20team%20building%20planning%20session.";

const heroService = servicesData["team-building"];
const heroImage = heroService.hero.backgroundImage;

const filters: ActivityFilter[] = ["All", "Outdoor", "Indoor", "High energy", "Low exertion", "Virtual"];

const activityCards: ActivityCard[] = [
  {
    slug: "amazing-race",
    title: "Amazing Race",
    direction: "Outdoor race formats",
    filters: ["All", "Outdoor", "High energy"],
    fit: "For teams that want movement, clues, checkpoint missions, and a shared finish line.",
    note: "Good when the group can leave the meeting room and needs the day to feel bigger than another workshop.",
  },
  {
    slug: "cultural-race",
    title: "Cultural Race",
    direction: "Outdoor race formats",
    filters: ["All", "Outdoor", "High energy"],
    fit: "For teams that want a Singapore route with discovery, local clues, and group tasks.",
    note: "Useful for mixed local and international teams, or company groups who want the location to matter.",
  },
  {
    slug: "csi-bones",
    title: "CSI-Bones",
    direction: "Strategy and mystery formats",
    filters: ["All", "Indoor", "Low exertion"],
    fit: "For groups that prefer deduction, collaboration, and a controlled indoor setup.",
    note: "A quieter but still involved format when careful thinking should beat loud participation.",
  },
  {
    slug: "minute-to-win-it",
    title: "Minute To Win It",
    direction: "High-energy station games",
    filters: ["All", "Indoor", "High energy"],
    fit: "For teams that want quick rotations, visible laughter, and easy-to-join challenges.",
    note: "A practical choice when you need compact energy in a ballroom, office, or indoor venue.",
  },
  {
    slug: "monopoly-dash",
    title: "Monopoly Dash",
    direction: "Indoor challenge formats",
    filters: ["All", "Indoor", "High energy"],
    fit: "For teams that want light strategy, movement, points, and friendly competition.",
    note: "A balanced direction when the group wants a game layer without a complicated briefing.",
  },
  {
    slug: "amazing-race-virtual",
    title: "Virtual Amazing Race",
    direction: "Virtual and hybrid formats",
    filters: ["All", "Virtual", "Low exertion"],
    fit: "For remote, hybrid, or multi-office teams that still need a facilitated shared activity.",
    note: "Use this lane when people cannot gather in one physical venue but still need a hosted team moment.",
  },
];

const physicalActivityPriceNumbers = activityCards
  .filter((activity) => !activity.filters.includes("Virtual"))
  .map((activity) => servicesData[activity.slug]?.pricing?.startingPrice)
  .map((price) => {
    const match = price?.match(/\$([\d,]+)/);
    return match ? Number(match[1].replace(/,/g, "")) : null;
  })
  .filter((price): price is number => typeof price === "number");

const classicStartingPrice = Math.min(...physicalActivityPriceNumbers);
const sourcedClassicStartingPriceLabel = "Activity formats from $45/pax";
const classicStartingPriceLabel = Number.isFinite(classicStartingPrice)
  ? classicStartingPrice === 45
    ? sourcedClassicStartingPriceLabel
    : `Activity formats from $${classicStartingPrice}/pax`
  : "Activity pricing quoted after the brief";

const packageTiers: PackageTierCard[] = [
  {
    tier: "Classic",
    title: "The Classic",
    eyebrow: "Activity-first team building",
    price: classicStartingPriceLabel,
    copy: "A facilitated team-building activity selected around your pax, venue, timing, and event goal.",
    usefulFor: ["Company bonding day", "Department session", "New team icebreaker"],
    cta: "Start with The Classic",
  },
  {
    tier: "Takeover",
    title: "The Takeover",
    eyebrow: "Activity plus event flow",
    price: "Activity pricing plus venue, food and transport quoted separately",
    copy: "A more complete planning layer when the activity needs to sit inside a longer company day.",
    usefulFor: ["Half-day or full-day flow", "Offsite with meals", "More moving parts to coordinate"],
    cta: "Ask About The Takeover",
  },
  {
    tier: "Signature",
    title: "The Signature",
    eyebrow: "Custom event direction",
    price: "Custom quote",
    copy: "A more shaped experience when the activity needs a stronger theme, storyline, or internal objective.",
    usefulFor: ["Leadership or all-hands moment", "Milestone celebration", "Company-wide culture push"],
    cta: "Discuss The Signature",
  },
];

const mondayTest = [
  {
    title: "Will the silos actually mix?",
    copy: "The format should make people move beyond their usual lunch table, team pod, or department line.",
    icon: Users,
  },
  {
    title: "Will the arms-crossed crowd join in?",
    copy: "Not everyone arrives excited. The activity needs a simple entry point, clear stakes, and room for different personalities.",
    icon: Target,
  },
  {
    title: "Will there be a story on Monday?",
    copy: "The session should create a shared reference people can talk about after the event, not just a photo folder.",
    icon: MessageCircle,
  },
];

const comparison = {
  left: [
    "Choose from a long list of activity names",
    "Ask the team to fit the format",
    "Find out the event flow after the quote",
    "Hope the activity works for mixed energy levels",
  ],
  right: [
    "Start with pax, venue, date, and goal",
    "Shortlist formats that suit the people attending",
    "Discuss flow, facilitation, and setup early",
    "Build the event around how the group should feel and behave",
  ],
};

const processSteps = [
  {
    title: "Send the rough brief",
    copy: "Tell us who is attending, when it should happen, where it may run, and what the event should achieve.",
    icon: ClipboardCheck,
  },
  {
    title: "Shape the activity direction",
    copy: "Elluminate turns the planning inputs into a sensible activity lane, package direction, and next questions.",
    icon: Sparkles,
  },
  {
    title: "Confirm the plan",
    copy: "Once the direction works, we align on quote details, event flow, setup, facilitation, and the day itself.",
    icon: CheckCircle2,
  },
];

const runSheetRows = [
  {
    timing: "Before arrival",
    activity: "Set up stations, route logic, briefing materials, scoring, and holding area.",
    plannerValue: "People arrive to a day that already has shape.",
  },
  {
    timing: "Opening",
    activity: "Welcome, split teams, explain stakes, and make the rules easy to understand.",
    plannerValue: "The room knows what is happening without long explanations.",
  },
  {
    timing: "Main activity",
    activity: "Run checkpoints, manage pacing, keep score, and adjust flow when groups move at different speeds.",
    plannerValue: "Momentum stays up without the organiser having to chase teams.",
  },
  {
    timing: "Close",
    activity: "Bring teams back, reveal results, capture the moment, and hand over next steps if needed.",
    plannerValue: "The event has a finish, not just a stop time.",
  },
];

const moneyGoes = [
  {
    title: "Activity design and materials",
    copy: "The clues, station tasks, props, scoring logic, and briefing material that make the format work.",
    icon: Route,
  },
  {
    title: "Facilitation crew",
    copy: "People on site or online who brief, pace, host, score, and keep the group moving.",
    icon: Users,
  },
  {
    title: "Planning and coordination",
    copy: "The thinking before event day: pax split, timing, venue fit, setup notes, and event flow.",
    icon: ClipboardCheck,
  },
  {
    title: "Logistics essentials",
    copy: "Movement, setup time, equipment handling, wet-weather discussion, and the practical details around the activity.",
    icon: WalletCards,
  },
];

const notForEveryone = [
  "If you only want the cheapest activity name on a spreadsheet, we may not be the right starting point.",
  "If you want items dropped off with no facilitation or planning layer, this page is probably more than you need.",
  "If the event goal does not matter and any activity will do, a lighter option may be enough.",
  "If you need the activity to make sense for the team, venue, timing, and internal story, this is exactly the brief to send.",
];

const practicalPlanning = [
  {
    title: "Venue fit",
    copy: "We discuss the room, outdoor space, movement, noise level, and setup limits before pushing a format.",
  },
  {
    title: "Weather discussion",
    copy: "For outdoor formats, we talk through what happens if conditions change and what backup thinking is sensible.",
  },
  {
    title: "Pax changes",
    copy: "Headcount can move. The plan should make clear how group split, staffing, and flow may need to adjust.",
  },
  {
    title: "Quote assumptions",
    copy: "The quote conversation should make the included activity, facilitation, and add-on items clear enough to compare.",
  },
];

const faqs = [
  {
    question: "Do I need to know which activity I want?",
    answer:
      "No. You can start with your pax, date, venue preference, and event goal. Elluminate can recommend a suitable activity direction before you choose a specific format.",
  },
  {
    question: "What is the difference between the tiers?",
    answer:
      "The Classic is activity-first. The Takeover adds more event-flow support around the activity. The Signature is for a more custom concept, theme, or internal objective.",
  },
  {
    question: "Can we move between tiers?",
    answer:
      "Yes. The tier is a planning preference, not a lock-in. Share what you are considering and we can discuss which level makes sense for the event.",
  },
  {
    question: "Can you recommend something for our group size?",
    answer:
      "Yes. Headcount affects team split, pacing, venue fit, facilitation, and the activity direction we would suggest.",
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

const selectedLogoNames = Array.from(
  new Set(activityCards.flatMap((activity) => servicesData[activity.slug]?.clientLogos || [])),
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
  preferredTier: "",
  privacyConsent: false,
};

const getServiceImage = (slug: string, width: number) => {
  const service = servicesData[slug];
  return cloudinaryImage(service.overview.backgroundImage || service.hero.backgroundImage, { width });
};

const buildBriefDetails = (form: QuoteFormState) =>
  [
    "Free Planning Session Request",
    "Team Building Event Planning Enquiry",
    `Preferred planning level: ${form.preferredTier || "Not selected"}`,
    `Name: ${form.name.trim()}`,
    `Work email: ${form.email.trim()}`,
    `Pax/headcount: ${form.pax.trim()}`,
    `Date or timing window: ${form.timing.trim()}`,
    `Venue preference: ${form.venue.trim()}`,
    `Team objective: ${form.objective.trim()}`,
    "Requested support: Shape a suitable team-building event direction and quote details.",
    "Source page: /services/team-building#quote",
  ].join("\n");

const pushLandingEvent = (eventName: "form_start" | "cta_click", payload: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;

  const w = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
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

  const setPreferredTier = (tier: PackageTierValue | "") => {
    handleFieldChange("preferredTier", tier);
  };

  const handleFormStart = () => {
    if (!formStarted) {
      pushLandingEvent("form_start", { field_group: "free_planning_session" });
      setFormStarted(true);
    }
  };

  const handleCtaClick = (location: string, ctaText = "Start My Free Planning Session") => {
    pushLandingEvent("cta_click", { cta_location: location, cta_text: ctaText });
  };

  const handleTierCta = (tier: PackageTierValue, location: string, ctaText: string) => {
    setPreferredTier(tier);
    handleCtaClick(location, ctaText);
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
      typeof window !== "undefined"
        ? `${window.location.pathname}${window.location.search}`
        : "/services/team-building";
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
      gad_source: attribution.gad_source || null,
      utm_source: attribution.utm_source || null,
      utm_medium: attribution.utm_medium || null,
      utm_campaign: attribution.utm_campaign || null,
      utm_term: attribution.utm_term || null,
      utm_content: attribution.utm_content || null,
      referrer: attribution.referrer || null,
      landing_page: attribution.landing_page || null,
      submission_page: submissionPage,
      form_name: "plan_my_event",
      lead_id: submissionId,
      brand: "elluminate",
      service: "corporate_physical_team_building",
      attribution_captured_at: attribution.captured_at || null,
    };

    try {
      const { error } = await supabase.from("contact_submissions").insert(submissionPayload);

      if (error) throw error;

      trackLeadConversion({
        lead_id: submissionId,
        event_category: "Physical Team Building",
        page_path: submissionPage,
        attribution,
      });

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
              className="h-full w-full object-cover opacity-48"
              width={1800}
              height={1100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/88 to-foreground/50" />
          </div>

          <div className="container mx-auto grid min-h-[calc(100vh-7rem)] items-center gap-10 px-6 py-14 lg:grid-cols-[1fr_0.78fr] lg:px-12 lg:py-20">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex max-w-full items-start gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-primary sm:items-center sm:tracking-[0.2em]">
                <Sparkles className="h-4 w-4" />
                Free Planning Session for company team events
              </div>

              <h1 className="max-w-[12ch] break-words font-display text-[2.15rem] font-black leading-[1.02] tracking-normal text-background sm:max-w-4xl sm:text-5xl sm:leading-[0.98] lg:text-7xl">
                Corporate team building in Singapore without babysitting another vendor.
              </h1>

              <p className="mt-6 max-w-[34ch] text-base leading-7 text-background/82 sm:max-w-2xl sm:text-xl sm:leading-8">
                Send your pax, date, venue preference, and event goal. Elluminate helps shape a team-building event that
                fits the people, the space, and the reason you are gathering.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                  <a href="#quote" onClick={() => handleCtaClick("hero_primary")}>
                    Start My Free Planning Session <ArrowRight className="h-5 w-5" />
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
                {[
                  "Pax, date, venue and goal first",
                  "Physical, indoor, outdoor or virtual",
                  "Activity plus planning logic",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-background/15 bg-background/10 p-4 text-sm font-semibold leading-6 text-background/84"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              id="quote"
              className="scroll-mt-28 rounded-[1.75rem] border border-background/20 bg-background p-5 text-foreground shadow-2xl shadow-black/25 sm:p-7"
            >
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Free Planning Session Request
                </p>
                <h2 className="mt-2 font-display text-3xl font-black">Tell Us About Your Team Event</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Send the basics. We will use them to discuss the right activity direction, planning level, and quote
                  details.
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
                    />
                  </label>
                  <label className="space-y-2 text-sm font-semibold">
                    Date or timing window
                    <Input
                      name="timing"
                      value={quoteForm.timing}
                      onChange={(event) => handleFieldChange("timing", event.target.value)}
                      placeholder="e.g. late July, weekday afternoon"
                    />
                  </label>
                </div>

                <label className="space-y-2 text-sm font-semibold">
                  Venue preference
                  <Input
                    name="venue"
                    value={quoteForm.venue}
                    onChange={(event) => handleFieldChange("venue", event.target.value)}
                    placeholder="Office, ballroom, outdoor, external venue, unsure"
                  />
                </label>

                <div className="space-y-2">
                  <p className="text-sm font-semibold">Planning level</p>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {packageTiers.map((tier) => (
                      <button
                        key={tier.tier}
                        type="button"
                        name="preferredTier"
                        onClick={() => setPreferredTier(tier.tier)}
                        className={`rounded-xl border px-3 py-2 text-left text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          quoteForm.preferredTier === tier.tier
                            ? "border-primary bg-primary text-primary-foreground shadow-blue"
                            : "border-border bg-secondary/50 text-foreground hover:bg-primary/10"
                        }`}
                      >
                        {tier.title}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="space-y-2 text-sm font-semibold">
                  Team objective
                  <Textarea
                    name="objective"
                    value={quoteForm.objective}
                    onChange={(event) => handleFieldChange("objective", event.target.value)}
                    placeholder="What should this event help with? Bonding, morale, onboarding, celebration, collaboration..."
                    className="min-h-28"
                  />
                </label>

                <input
                  aria-hidden="true"
                  tabIndex={-1}
                  name="company_website"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                  className="hidden"
                  autoComplete="off"
                />

                <label className="flex items-start gap-3 rounded-2xl bg-secondary/50 p-4 text-sm leading-6 text-muted-foreground">
                  <Checkbox
                    checked={quoteForm.privacyConsent}
                    onCheckedChange={(checked) => handleFieldChange("privacyConsent", checked === true)}
                    className="mt-1"
                  />
                  <span>I agree to be contacted by Elluminate about this team-building enquiry.</span>
                </label>

                {formError ? <p className="text-sm font-semibold text-destructive">{formError}</p> : null}
                {submitStatus === "success" ? (
                  <p className="rounded-2xl bg-primary/10 p-4 text-sm font-semibold leading-6 text-primary">
                    Your free planning session request has been sent. We will review the details and follow up with next
                    steps.
                  </p>
                ) : null}

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={submitStatus === "submitting"}
                >
                  {submitStatus === "submitting" ? "Sending..." : "Send My Team Building Enquiry"}
                  <ArrowRight className="h-5 w-5" />
                </Button>

                <p className="text-center text-xs leading-5 text-muted-foreground">
                  Free and no obligation. Send the rough brief; we will help turn it into a practical event direction.
                </p>
              </form>
            </div>
          </div>
        </section>

        {selectedLogoNames.length ? (
          <section className="border-b border-border bg-background py-8">
            <div className="container mx-auto px-6 lg:px-12">
              <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Selected organisations we have worked with
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {selectedLogoNames.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-border bg-secondary/35 px-5 py-2 text-sm font-bold text-foreground/75"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-background py-20">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                You've been to that event
              </p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                The one where the activity happened, but nobody knew why it mattered.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                A company team-building day can look busy and still feel thin. People split into familiar groups, the
                loudest voices dominate, and the organiser spends the day chasing details instead of joining the room.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                "The activity sounds exciting, but the group mix is wrong.",
                "The venue changes what is practical, but nobody checks early.",
                "The event goal is vague, so every format sounds equally fine.",
                "The organiser becomes the fallback operator on event day.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-secondary/35 p-6">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="mt-5 text-lg font-semibold leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/35 py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">The core difference</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Generic team building vs. team building planned properly
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-[1.5rem] border border-border bg-background p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Industry catalogue approach
                </p>
                <ul className="mt-6 space-y-4">
                  {comparison.left.map((item) => (
                    <li key={item} className="flex gap-3 text-base font-semibold leading-7 text-muted-foreground">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-muted-foreground/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[1.5rem] border border-primary/25 bg-primary/5 p-7 shadow-blue">
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

        <section className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">The Monday Test</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Every event idea has to survive the day after.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                The activity should not only fill a calendar slot. It should create a moment people can carry back into
                work.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {mondayTest.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-border bg-secondary/35 p-7">
                    <Icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-8 font-display text-2xl font-black">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-foreground py-20 text-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Packages</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Pick the level of planning support you actually need.
              </h2>
              <p className="mt-5 text-lg leading-8 text-background/75">
                Start simple, add event flow when the day has more moving parts, or ask for a more custom direction.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {packageTiers.map((tier) => (
                <article
                  key={tier.tier}
                  className="flex min-h-full flex-col rounded-[1.5rem] border border-background/12 bg-background/8 p-7"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{tier.eyebrow}</p>
                  <h3 className="mt-4 font-display text-3xl font-black text-background">{tier.title}</h3>
                  <p className="mt-4 rounded-2xl bg-background/10 p-4 text-sm font-bold leading-6 text-background">
                    {tier.price}
                  </p>
                  <p className="mt-5 text-base leading-7 text-background/72">{tier.copy}</p>
                  <ul className="mt-6 space-y-3">
                    {tier.usefulFor.map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-background/82">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="hero" size="lg" className="mt-auto w-full">
                    <a
                      href="#quote"
                      onClick={() => handleTierCta(tier.tier, `package_${tier.tier.toLowerCase()}`, tier.cta)}
                    >
                      {tier.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-secondary/35 py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">How it works</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Plan the event before the activity becomes a problem.
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
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Activity directions
                </p>
                <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                  These are the formats The Classic is built from.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  For Takeover and Signature events, these formats become raw material. The final plan can adjust the
                  flow, theme, venue use, and facilitation around the bigger company day.
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
                      activityFilter === filter
                        ? "bg-primary text-primary-foreground shadow-blue"
                        : "bg-background text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredActivities.map((activity) => (
                <article
                  key={activity.slug}
                  className="group overflow-hidden rounded-[1.5rem] border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-blue"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={getServiceImage(activity.slug, 720)}
                      alt={activity.title}
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
                    <h3 className="font-display text-2xl font-black">{activity.title}</h3>
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
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/35 py-20">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Steal Our Run Sheet</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                The visible game is only one part of the day.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Here is an example run sheet for a company team-building event. It shows the planning layer behind the
                activity: timing, setup, briefing, pacing, and handback.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-8">
                <a href="#quote" onClick={() => handleCtaClick("run_sheet")}>
                  Start My Free Planning Session <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-border bg-background shadow-sm">
              {runSheetRows.map((row) => (
                <div
                  key={row.timing}
                  className="grid gap-4 border-b border-border p-5 last:border-b-0 md:grid-cols-[0.22fr_0.42fr_0.36fr]"
                >
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-primary">{row.timing}</p>
                  <p className="text-sm font-semibold leading-6 text-foreground">{row.activity}</p>
                  <p className="text-sm leading-6 text-muted-foreground">{row.plannerValue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Where Your Money Actually Goes
              </p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                A team-building quote is more than the activity name.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                The useful question is not only what game you are buying. It is what needs to happen for the day to run
                well.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {moneyGoes.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-border bg-secondary/35 p-6">
                    <Icon className="h-7 w-7 text-primary" />
                    <h3 className="mt-5 font-display text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-foreground py-20 text-background">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                We're Not For Everyone
              </p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Good. That makes the fit easier to see.
              </h2>
              <p className="mt-5 text-lg leading-8 text-background/75">
                The free planning session is for teams that want the event to make sense, not just happen.
              </p>
            </div>

            <div className="grid gap-4">
              {notForEveryone.map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-background/10 bg-background/8 p-5">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <p className="text-base font-semibold leading-7 text-background/84">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-secondary/35 py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                What teams have said
              </p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Feedback from team-building enquiries and events.
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {heroService.testimonials.slice(0, 3).map((testimonial) => (
                <figure
                  key={`${testimonial.author}-${testimonial.company}`}
                  className="rounded-2xl border border-border bg-background p-7 shadow-sm"
                >
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

        <section className="bg-background py-20">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Practical planning reassurance
              </p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                The boring details get discussed before they become loud details.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {practicalPlanning.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border bg-secondary/35 p-6">
                  <h3 className="font-display text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Team-building moments from past events
                </p>
                <h2 className="font-display max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                  Active company events should show movement, faces, and facilitation.
                </h2>
              </div>
              <Button asChild variant="primary-outline" size="lg">
                <a href="#quote" onClick={() => handleCtaClick("gallery")}>
                  Start My Free Planning Session
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

        <section id="faq" className="bg-secondary/35 py-20">
          <div className="container mx-auto max-w-4xl px-6 lg:px-12">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">FAQ</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Questions people ask before planning team building.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border bg-background p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-black text-foreground">
                    {faq.question}
                    <span className="rounded-full bg-secondary p-2 text-primary transition group-open:rotate-90">
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
              Send the rough idea. Start a free planning session.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-background/75">
              Share pax, date, venue preference, and event goal. We will help you shape a team-building direction that
              is easier to explain internally.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href="#quote" onClick={() => handleCtaClick("final_cta")}>
                  Start My Free Planning Session <ArrowRight className="h-5 w-5" />
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

      <Footer
        topActivityLinks={safeFooterLinks}
        bottomNote="Corporate team building, team bonding, retreats, and training experiences in Singapore."
      />
    </div>
  );
};

export default TeamBuildingHubPage;
