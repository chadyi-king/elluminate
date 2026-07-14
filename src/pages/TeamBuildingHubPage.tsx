import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  CloudSun,
  Compass,
  MapPin,
  MessageCircle,
  Monitor,
  Route,
  Sparkles,
  Target,
  Users,
  Zap,
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
import { getRouteSeo } from "@/data/seoRoutes";
import { submitLead } from "@/lib/leadSubmission";

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

const pageUrl = "https://elluminate.sg/services/team-building";
const teamBuildingSeo = getRouteSeo("/services/team-building");
const seoDescription = teamBuildingSeo?.description ?? "Plan corporate team building in Singapore with Elluminate.";
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

const planningFactors = [
  {
    icon: MapPin,
    title: "Where it can run",
    copy: "An office, ballroom, outdoor route, retreat venue, or online call each creates a different set of sensible options.",
  },
  {
    icon: Zap,
    title: "How the team should feel",
    copy: "High-energy competition, lighter participation, problem-solving, and relaxed connection need different formats.",
  },
  {
    icon: Target,
    title: "What the event should achieve",
    copy: "Bonding, onboarding, morale, cross-team interaction, and celebration change how the activity should be shaped.",
  },
];

const comparison = {
  catalogue: [
    "Choose an activity name before the brief is clear",
    "Try to make the group fit a fixed format",
    "Work through venue and flow questions later",
    "Carry the uncertainty back to your internal team",
  ],
  elluminate: [
    "Start with the people, date, venue, and purpose",
    "Narrow the activity direction around the group",
    "Discuss setup, facilitation, timing, and fallback planning",
    "Build a clearer event plan before confirmation",
  ],
};

const whatWeHandle = [
  {
    icon: Compass,
    title: "Activity direction",
    copy: "We help narrow the format around the group instead of asking you to decode a long catalogue alone.",
  },
  {
    icon: Route,
    title: "Event flow",
    copy: "Briefing, team allocation, activity pacing, scoring, and the closing moment are considered as one experience.",
  },
  {
    icon: Building2,
    title: "Venue fit",
    copy: "We discuss space, movement, noise, access, and what is practical for an indoor or outdoor setting.",
  },
  {
    icon: CloudSun,
    title: "Planning contingencies",
    copy: "For outdoor events, weather and fallback considerations are surfaced during planning rather than left unspoken.",
  },
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
    src: "/images/services/amazing-race/gallery-1.jpg",
    alt: "Corporate team working together during an outdoor challenge",
    caption: "Outdoor team challenge",
  },
  {
    src: "/images/services/csi-bones/gallery-1.jpg",
    alt: "Corporate participants examining clues during an indoor mystery activity",
    caption: "Indoor investigation format",
  },
  {
    src: "/images/services/minute-to-win-it/gallery-3.jpg",
    alt: "Company group taking part in an indoor station challenge",
    caption: "Indoor station activity",
  },
  {
    src: "/images/services/monopoly-dash/gallery-2.jpg",
    alt: "Team members completing a facilitated outdoor challenge",
    caption: "Facilitated outdoor format",
  },
];

const faqs = [
  {
    question: "Do I need to know which activity I want?",
    answer:
      "No. Start with your group size, timing, venue preference, and event goal. Elluminate can help narrow the activity direction from there.",
  },
  {
    question: "Can you recommend something for our group size?",
    answer:
      "Yes. Headcount affects team allocation, pacing, space, facilitation, and the formats that are practical. Include an estimated pax count in the enquiry even if it may change.",
  },
  {
    question: "Can team building run indoors or outdoors?",
    answer:
      "Yes. The suitable choice depends on your venue, timing, desired energy level, and the people attending. Outdoor plans should also include a weather discussion.",
  },
  {
    question: "Can you support virtual teams?",
    answer:
      "Yes. Elluminate offers facilitated virtual formats for remote and multi-office teams, alongside physical activities in Singapore.",
  },
  {
    question: "What details should I send?",
    answer:
      "The most useful starting details are your name, work email, estimated pax, date or timing window, venue preference, and what you want the event to achieve.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "Your enquiry is saved and sent to the Elluminate team. We review the brief, contact you to clarify any open details, and discuss a suitable activity direction and quote.",
  },
  {
    question: "How is the quote worked out?",
    answer:
      "The quote depends on the selected format, pax, duration, venue, facilitation needs, setup, and any event-specific logistics. Sharing a clear brief helps us price the relevant scope.",
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
      <SEO {...teamBuildingSeo} ogImage="https://elluminate.sg/images/services/amazing-race/gallery-1.jpg" />
      <OrganizationSchema type="LocalBusiness" />
      <ServiceSchema name="Corporate Team Building in Singapore" description={seoDescription} slug="team-building" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://elluminate.sg/" },
          { name: "Team Building", url: pageUrl },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-foreground text-background">
          <img
            src={cloudinaryImage("/images/services/amazing-race/gallery-1.jpg", { width: 1920 })}
            alt="Corporate team working together during an outdoor team-building challenge"
            width={1920}
            height={1080}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground via-foreground/88 to-foreground/45" />

          <div className="container mx-auto grid min-h-[720px] items-center gap-10 px-6 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-20">
            <div className="min-w-0 max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Corporate team building in Singapore
              </p>
              <h1 className="font-display text-4xl font-black leading-[1.08] text-background sm:text-5xl lg:text-7xl">
                Corporate Team Building in Singapore, Planned Around Your Team
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-background/82 sm:text-xl">
                Share your group size, preferred date, venue and what you want the day to achieve. Elluminate helps
                you choose and plan a facilitated physical or virtual activity that fits.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl" className="max-w-full px-5 text-sm sm:px-10 sm:text-base">
                  <a href="#quote" onClick={() => handleCtaClick("hero_primary")}>Plan My Team Building Event <ArrowRight /></a>
                </Button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCtaClick("hero_whatsapp", "WhatsApp Elluminate")}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-background/35 px-6 py-3 text-base font-semibold text-background transition hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp Elluminate
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-background/78">
                {["Indoor or outdoor", "Physical or virtual", "Planned around your brief"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div id="quote" className="min-w-0 scroll-mt-32 rounded-2xl border border-white/15 bg-background p-6 text-foreground shadow-2xl sm:p-8">
              {submitStatus === "success" ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center" role="status">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-black">Your event brief is in.</h2>
                  <p className="mt-4 max-w-sm leading-7 text-muted-foreground">
                    We have saved your enquiry and sent a confirmation to your email. The Elluminate team can now
                    review the event details you shared.
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

        <section className="border-b border-border bg-background py-10">
          <div className="container mx-auto px-6 lg:px-12">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Selected organisations served through Team Elevate's event history
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {proofOrganisations.map((organisation) => (
                <div key={organisation} className="flex min-h-16 items-center justify-center rounded-lg border border-border bg-secondary/30 px-4 text-center font-display text-base font-black text-foreground/75">
                  {organisation}
                </div>
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-4xl text-center text-xs leading-5 text-muted-foreground">
              Elluminate and Team Elevate are operated by EXSTATIC PTE LTD. Selected reviews and event history shown
              were delivered under Team Elevate.
            </p>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Start with the team</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">
                Most companies do not need more activity names. They need a plan that makes sense for their group.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                The same activity can feel completely different depending on the people, space, timing, and purpose.
                Those details should guide the recommendation from the beginning.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {planningFactors.map((factor) => {
                const Icon = factor.icon;
                return (
                  <article key={factor.title} className="rounded-lg border border-border bg-secondary/35 p-7">
                    <Icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-6 font-display text-2xl font-black">{factor.title}</h3>
                    <p className="mt-4 leading-7 text-muted-foreground">{factor.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="activities" className="bg-secondary/35 py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Activity fit</p>
                <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">
                  Six activity directions to start the conversation
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  Explore a few physical and virtual formats, then send the brief. You do not have to choose before
                  speaking with us.
                </p>
              </div>
              <div className="flex flex-wrap gap-2" aria-label="Filter activity formats">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActivityFilter(filter)}
                    aria-pressed={activityFilter === filter}
                    className={`rounded-lg border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
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

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredActivities.map((activity) => (
                <article key={activity.slug} className="group overflow-hidden rounded-lg border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-blue">
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
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{activity.format}</p>
                    <h3 className="mt-3 font-display text-2xl font-black">{activity.title}</h3>
                    <p className="mt-4 leading-7 text-foreground/80">{activity.description}</p>
                    <p className="mt-4 border-l-2 border-primary/50 pl-4 text-sm leading-6 text-muted-foreground">{activity.fit}</p>
                    <div className="mt-6 flex items-center justify-between gap-3">
                      <Link to={`/services/${activity.slug}`} className="text-sm font-semibold text-primary hover:underline">View format</Link>
                      <a href="#quote" onClick={() => handleCtaClick(`activity_${activity.slug}`, "Ask if this fits my team")} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                        Ask if this fits <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">A clearer planning approach</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">
                A catalogue starts with the activity. Elluminate starts with the event.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="rounded-lg border border-border bg-secondary/30 p-7 sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Activity catalogue approach</p>
                <h3 className="mt-3 font-display text-2xl font-black">Pick first. Make it fit later.</h3>
                <ul className="mt-7 space-y-4">
                  {comparison.catalogue.map((item) => (
                    <li key={item} className="flex gap-3 text-foreground/75">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-muted-foreground/45" /> {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-lg border-2 border-primary bg-primary/[0.055] p-7 sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">The Elluminate approach</p>
                <h3 className="mt-3 font-display text-2xl font-black">Plan the fit before locking the format.</h3>
                <ul className="mt-7 space-y-4">
                  {comparison.elluminate.map((item) => (
                    <li key={item} className="flex gap-3 font-medium text-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-foreground py-20 text-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">What Elluminate handles</p>
                <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">
                  The activity is only one part of a team-building day.
                </h2>
                <p className="mt-6 text-lg leading-8 text-background/72">
                  The planning conversation connects the activity to the venue, event flow, facilitation, and the
                  practical details your internal stakeholders will ask about.
                </p>
                <Button asChild variant="hero" size="xl" className="mt-8">
                  <a href="#quote" onClick={() => handleCtaClick("what_we_handle")}>Plan My Team Building Event <ArrowRight /></a>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {whatWeHandle.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="rounded-lg border border-background/15 bg-background/[0.07] p-6">
                      <Icon className="h-7 w-7 text-primary" />
                      <h3 className="mt-5 font-display text-xl font-black">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-background/70">{item.copy}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">How it works</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">
                From rough brief to a team-building event you can confirm
              </h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <article key={step.title} className="relative rounded-lg border border-border bg-secondary/30 p-7">
                  <span className="font-display text-5xl font-black text-primary/18">0{index + 1}</span>
                  <h3 className="mt-6 font-display text-2xl font-black">{step.title}</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/35 py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Real event moments</p>
                <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">
                  See the kind of participation the plan needs to support
                </h2>
              </div>
              <Link to="/portfolio" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                Explore the portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {gallery.map((item, index) => (
                <figure key={item.src} className={`overflow-hidden rounded-lg border border-border bg-background ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}>
                  <img
                    src={cloudinaryImage(item.src, { width: index === 0 ? 1100 : 650 })}
                    alt={item.alt}
                    width={index === 0 ? 1100 : 650}
                    height={index === 0 ? 720 : 520}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="border-t border-border px-4 py-3 text-sm font-semibold text-foreground/75">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Shared operating history</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">What teams have said</h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                These reviews were originally published for events delivered under Team Elevate, which is operated
                alongside Elluminate by EXSTATIC PTE LTD.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-2">
              {reviews.map((review) => (
                <figure key={review.author} className="rounded-lg border border-border bg-secondary/30 p-7">
                  <blockquote className="text-lg font-semibold leading-8">“{review.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <p className="font-display text-lg font-black">{review.author}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{review.role}, {review.company}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Originally published by Team Elevate</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-secondary/35 py-20">
          <div className="container mx-auto max-w-4xl px-6 lg:px-12">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Practical questions</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">Before you send the brief</h2>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-lg border border-border bg-background p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-black">
                    {faq.question}
                    <ChevronRight className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground px-6 py-20 text-background lg:px-12">
          <div className="container mx-auto text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
              <ClipboardCheck className="h-7 w-7" />
            </span>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-3xl font-black leading-tight sm:text-6xl">
              Plan a team-building activity your people can actually get into.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-background/72">
              Send your group size, timing, venue preference, and event goal. Elluminate will help you shape the right
              activity direction.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href="#quote" onClick={() => handleCtaClick("final_primary")}>Plan My Team Building Event <ArrowRight /></a>
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCtaClick("final_whatsapp", "WhatsApp Elluminate")}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-background/30 px-6 py-3 font-semibold text-background transition hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Elluminate
              </a>
            </div>
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
