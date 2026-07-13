import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SocialProofSection } from "@/components/SocialProofSection";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BreadcrumbSchema, FAQSchema, OrganizationSchema, ServiceSchema } from "@/components/StructuredData";
import { servicesData } from "@/data/servicesData";
import { getAttribution } from "@/lib/attribution";
import { cloudinaryImage } from "@/lib/media";
import { trackLeadConversion } from "@/lib/tracking";
import { supabase } from "@/integrations/supabase/client";

type ActivityFilter = "All" | "Outdoor" | "Indoor" | "High energy" | "Lower intensity" | "Virtual";

type QuoteFormState = {
  name: string;
  email: string;
  phone: string;
  pax: string;
  timing: string;
  venue: string;
  objective: string;
  privacyConsent: boolean;
};

type ActivityCard = {
  slug: string;
  title: string;
  category: string;
  filters: ActivityFilter[];
  description: string;
};

const pageUrl = "https://elluminate.sg/services/team-building";
const seoTitle = "Corporate Team Building Singapore | Elluminate";
const seoDescription =
  "Plan corporate team building in Singapore around your team, objective, venue and timing. Explore physical and virtual formats, then send Elluminate your event brief.";
const whatsappUrl =
  "https://wa.me/6588352482?text=Hi%20Elluminate%2C%20I'd%20like%20to%20plan%20a%20team-building%20event.";
const heroImage = servicesData["team-building"].hero.backgroundImage;

const initialQuoteForm: QuoteFormState = {
  name: "",
  email: "",
  phone: "",
  pax: "",
  timing: "",
  venue: "",
  objective: "",
  privacyConsent: false,
};

const activityFilters: ActivityFilter[] = ["All", "Outdoor", "Indoor", "High energy", "Lower intensity", "Virtual"];

const activities: ActivityCard[] = [
  {
    slug: "amazing-race",
    title: "Amazing Race",
    category: "Outdoor race format",
    filters: ["All", "Outdoor", "High energy"],
    description: "A route-based team challenge built around checkpoints, missions and a shared finish.",
  },
  {
    slug: "cultural-race",
    title: "Cultural Race",
    category: "Singapore discovery format",
    filters: ["All", "Outdoor", "High energy"],
    description: "Teams explore a Singapore neighbourhood through local clues, group tasks and friendly competition.",
  },
  {
    slug: "csi-bones",
    title: "CSI-Bones",
    category: "Strategy and mystery format",
    filters: ["All", "Indoor", "Lower intensity"],
    description: "A collaborative investigation for teams that prefer observation, deduction and discussion.",
  },
  {
    slug: "minute-to-win-it",
    title: "Minute To Win It",
    category: "Fast indoor challenge format",
    filters: ["All", "Indoor", "High energy"],
    description: "Short, easy-to-understand challenges that keep teams moving, cheering and rotating.",
  },
  {
    slug: "monopoly-dash",
    title: "Monopoly Dash",
    category: "Strategy and movement format",
    filters: ["All", "Indoor", "High energy"],
    description: "A game-led experience combining team decisions, movement, points and friendly competition.",
  },
  {
    slug: "amazing-race-virtual",
    title: "Virtual Amazing Race",
    category: "Remote and hybrid format",
    filters: ["All", "Virtual", "Lower intensity"],
    description: "A facilitated online race for remote, hybrid or multi-office teams sharing one activity window.",
  },
];

const faqs = [
  {
    question: "Do I need to know which team-building activity I want?",
    answer:
      "No. Send us your group size, date or timing window, venue preference and event goal. We can discuss the activity direction that is practical for your team before you choose a specific format.",
  },
  {
    question: "Can you recommend something for our group size?",
    answer:
      "Yes. Pax affects the activity flow, team allocation, facilitation setup and venue requirements, so it is one of the first details we use when shaping a recommendation.",
  },
  {
    question: "Can the event run indoors or outdoors?",
    answer:
      "Both are possible. We will consider the venue, available space, noise limits, movement level and weather exposure when discussing suitable formats and fallback planning.",
  },
  {
    question: "Can you support virtual or hybrid teams?",
    answer:
      "Yes. Elluminate has virtual formats for remote and multi-office groups. Share where participants will be joining from and whether anyone will gather in the same room.",
  },
  {
    question: "What information should I send with my enquiry?",
    answer:
      "Start with your name, work email, estimated pax and preferred date or timing window. Venue preference, event objective, duration and intensity are useful but can be discussed later if they are not confirmed yet.",
  },
  {
    question: "How do we get a quote?",
    answer:
      "Submit the event brief on this page. We will review the details, clarify anything that affects delivery and prepare the relevant activity and pricing direction for your event.",
  },
];

const planningDetails = [
  { icon: Users, title: "Pax", copy: "How many people are attending and how they may be grouped." },
  { icon: Clock3, title: "Date and duration", copy: "The event window, setup time and how the activity fits the wider agenda." },
  { icon: MapPin, title: "Venue", copy: "Available space, indoor or outdoor setting, access and operating restrictions." },
  { icon: Target, title: "Event goal", copy: "Bonding, morale, onboarding, collaboration, celebration or a broader company moment." },
];

const comparisonRows = [
  ["Start with a long activity list", "Start with your team and event brief"],
  ["Choose before the logistics are clear", "Check pax, venue, timing and energy level early"],
  ["Work out whether it fits afterwards", "Shortlist formats that suit the people attending"],
  ["Receive a standard programme", "Shape the flow around the event you are planning"],
];

const processSteps = [
  {
    number: "01",
    title: "Share the event brief",
    copy: "Tell us the essentials: pax, timing, venue preference and what you want the team to get from the day.",
  },
  {
    number: "02",
    title: "Discuss the right direction",
    copy: "We use those details to narrow the format and flag the practical decisions that affect the experience and quote.",
  },
  {
    number: "03",
    title: "Confirm and run the event",
    copy: "Once the activity, scope and logistics are agreed, the team prepares the programme and facilitates the event.",
  },
];

const testimonials = servicesData["team-building"].testimonials.slice(0, 3);

const pushLandingEvent = (event: string, details: Record<string, string>) => {
  if (typeof window === "undefined") return;
  const trackingWindow = window as Window & { dataLayer?: Record<string, unknown>[] };
  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.dataLayer.push({ event, page_type: "team_building_landing", ...details });
};

const buildBriefDetails = (form: QuoteFormState) =>
  [
    "Team Building Event Planning Enquiry",
    `Pax: ${form.pax.trim()}`,
    `Timing: ${form.timing.trim()}`,
    `Venue preference: ${form.venue.trim() || "Not confirmed"}`,
    `Event objective: ${form.objective.trim() || "To discuss"}`,
  ].join("\n");

export default function TeamBuildingHubPage() {
  const [activityFilter, setActivityFilter] = useState<ActivityFilter>("All");
  const [quoteForm, setQuoteForm] = useState<QuoteFormState>(initialQuoteForm);
  const [honeypot, setHoneypot] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [formStarted, setFormStarted] = useState(false);

  const filteredActivities = useMemo(
    () => (activityFilter === "All" ? activities : activities.filter((activity) => activity.filters.includes(activityFilter))),
    [activityFilter],
  );

  const handleFieldChange = <Key extends keyof QuoteFormState>(field: Key, value: QuoteFormState[Key]) => {
    setQuoteForm((current) => ({ ...current, [field]: value }));
  };

  const handleFormStart = () => {
    if (formStarted) return;
    setFormStarted(true);
    pushLandingEvent("form_start", { form_name: "team_building_quote_brief" });
  };

  const handleCtaClick = (location: string) => {
    pushLandingEvent("cta_click", { cta_location: location, cta_text: "Plan My Team Building Event" });
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
      setFormError("Please complete your name, work email, pax, timing and privacy consent.");
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("submitting");
    const attribution = getAttribution();
    const submissionPage =
      typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "/services/team-building";
    const submissionId = crypto.randomUUID();

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        id: submissionId,
        name: quoteForm.name.trim(),
        email: quoteForm.email.trim(),
        phone: quoteForm.phone.trim() || null,
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
        form_name: "team_building_quote_brief",
        lead_id: submissionId,
        brand: "elluminate",
        service: "corporate_physical_team_building",
        attribution_captured_at: attribution.captured_at || null,
      });

      if (error) throw error;

      void supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-inquiry",
          idempotencyKey: `team-building-inquiry-${submissionId}`,
          submissionId,
        },
      });
      void supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-confirmation",
          idempotencyKey: `team-building-confirmation-${submissionId}`,
          submissionId,
        },
      });

      trackLeadConversion({
        lead_id: submissionId,
        form_name: "team_building_quote_brief",
        event_category: "Physical Team Building",
        page_path: submissionPage,
        attribution,
      });

      setQuoteForm(initialQuoteForm);
      setSubmitStatus("success");
    } catch (error) {
      console.error("Team building enquiry submission failed", error);
      setFormError("We could not send the enquiry. Please try again, WhatsApp us, or email info@elluminate.sg.");
      setSubmitStatus("error");
    }
  };

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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://elluminate.sg" },
          { name: "Services", url: "https://elluminate.sg/services" },
          { name: "Team Building", url: pageUrl },
        ]}
      />

      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-foreground text-background">
          <div className="absolute inset-0 -z-10">
            <img
              src={cloudinaryImage(heroImage, { width: 1800 })}
              alt="Colleagues taking part in a facilitated corporate team-building activity"
              className="h-full w-full object-cover opacity-50"
              width={1800}
              height={1100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/45" />
          </div>

          <div className="container mx-auto grid gap-10 px-6 py-14 lg:min-h-[760px] lg:grid-cols-[1.08fr_0.78fr] lg:items-center lg:px-12 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Corporate team building in Singapore
              </p>
              <h1 className="max-w-[14ch] font-display text-4xl font-black leading-[1.02] tracking-normal text-background sm:text-5xl lg:text-7xl">
                Corporate Team Building in Singapore, Planned Around Your Team
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-background/85 sm:text-xl">
                Tell us your pax, date, venue preference and event goal. Elluminate helps you shape an activity that fits
                the people, the space and the kind of experience you want to create.
              </p>

              <div className="mt-8 grid max-w-2xl gap-3 text-sm text-background/90 sm:grid-cols-3">
                {["Physical or virtual formats", "Indoor and outdoor planning", "One clear event enquiry"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                  <a href="#quote" onClick={() => handleCtaClick("hero_primary")}>
                    Plan My Team Building Event <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="xl" className="w-full border-background/40 bg-background/10 text-background hover:bg-background hover:text-foreground sm:w-auto">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-5 w-5" /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>

            <div id="quote" className="scroll-mt-28 rounded-xl border border-border bg-background p-5 text-foreground shadow-2xl sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Event planning enquiry</p>
              <h2 className="mt-2 font-display text-2xl font-black sm:text-3xl">Tell Us About Your Team Event</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Start with what you know. Venue and objective can stay open for discussion.
              </p>

              {submitStatus === "success" ? (
                <div className="mt-7 rounded-lg border border-primary/25 bg-primary/10 p-5" role="status">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                  <h3 className="mt-3 font-display text-xl font-bold">Your event brief has been sent.</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    A planner will review the details and reply with the next practical step.
                  </p>
                </div>
              ) : (
                <form className="mt-6 space-y-4" onSubmit={handleQuoteSubmit} onFocus={handleFormStart} noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-1.5 text-sm font-semibold">
                      Name <span className="text-destructive">*</span>
                      <Input
                        name="name"
                        value={quoteForm.name}
                        onChange={(event) => handleFieldChange("name", event.target.value)}
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label className="space-y-1.5 text-sm font-semibold">
                      Work email <span className="text-destructive">*</span>
                      <Input
                        name="email"
                        type="email"
                        value={quoteForm.email}
                        onChange={(event) => handleFieldChange("email", event.target.value)}
                        autoComplete="email"
                        required
                      />
                    </label>
                    <label className="space-y-1.5 text-sm font-semibold">
                      Estimated pax <span className="text-destructive">*</span>
                      <Input
                        name="pax"
                        value={quoteForm.pax}
                        onChange={(event) => handleFieldChange("pax", event.target.value)}
                        placeholder="e.g. 80"
                        inputMode="numeric"
                        required
                      />
                    </label>
                    <label className="space-y-1.5 text-sm font-semibold">
                      Date or timing <span className="text-destructive">*</span>
                      <Input
                        name="timing"
                        value={quoteForm.timing}
                        onChange={(event) => handleFieldChange("timing", event.target.value)}
                        placeholder="e.g. 18 Sep, afternoon"
                        required
                      />
                    </label>
                    <label className="space-y-1.5 text-sm font-semibold">
                      Phone <span className="font-normal text-muted-foreground">(optional)</span>
                      <Input
                        name="phone"
                        type="tel"
                        value={quoteForm.phone}
                        onChange={(event) => handleFieldChange("phone", event.target.value)}
                        autoComplete="tel"
                      />
                    </label>
                    <label className="space-y-1.5 text-sm font-semibold">
                      Venue preference <span className="font-normal text-muted-foreground">(optional)</span>
                      <Input
                        name="venue"
                        value={quoteForm.venue}
                        onChange={(event) => handleFieldChange("venue", event.target.value)}
                        placeholder="Indoor, outdoor or undecided"
                      />
                    </label>
                  </div>
                  <label className="block space-y-1.5 text-sm font-semibold">
                    What should the event achieve? <span className="font-normal text-muted-foreground">(optional)</span>
                    <Textarea
                      name="objective"
                      value={quoteForm.objective}
                      onChange={(event) => handleFieldChange("objective", event.target.value)}
                      placeholder="Bonding, onboarding, morale, collaboration, celebration..."
                      rows={3}
                    />
                  </label>
                  <label className="sr-only" aria-hidden="true">
                    Company website
                    <input value={honeypot} onChange={(event) => setHoneypot(event.target.value)} tabIndex={-1} autoComplete="off" />
                  </label>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="team-building-consent"
                      checked={quoteForm.privacyConsent}
                      onCheckedChange={(checked) => handleFieldChange("privacyConsent", checked === true)}
                    />
                    <label htmlFor="team-building-consent" className="text-xs leading-5 text-muted-foreground">
                      I agree to Elluminate using these details to respond to my enquiry. Read the{" "}
                      <Link to="/privacy-policy" className="font-semibold text-primary hover:underline">privacy policy</Link>.
                    </label>
                  </div>
                  {formError && <p className="text-sm font-medium text-destructive" role="alert">{formError}</p>}
                  <Button type="submit" variant="primary" size="xl" className="w-full" disabled={submitStatus === "submitting"}>
                    {submitStatus === "submitting" ? "Sending Enquiry..." : "Send My Team Building Enquiry"}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">No obligation. We will use your brief to discuss the event and next steps.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        <SocialProofSection />

        <section className="bg-background py-20 lg:py-28">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">The planning problem</p>
                <h2 className="mt-4 max-w-xl font-display text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  You probably do not need more activity names.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                  You need to know what will work for this group, in this venue, on this date, for this reason.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                {[
                  ["Different people", "Teams vary in confidence, mobility, seniority and appetite for competition."],
                  ["Different spaces", "A ballroom, office, park and city route each create a different set of practical options."],
                  ["Different reasons", "Onboarding, morale, collaboration and celebration should not produce the same programme."],
                  ["One event to get right", "The format must be easy to explain, practical to run and comfortable for people to join."],
                ].map(([title, copy]) => (
                  <div key={title} className="bg-background p-7 sm:p-8">
                    <h3 className="font-display text-xl font-bold">{title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/35 py-20 lg:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">A better starting point</p>
              <h2 className="mt-4 font-display text-3xl font-black sm:text-4xl lg:text-5xl">
                Generic team building vs. team building planned properly
              </h2>
            </div>
            <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-lg border border-border bg-background shadow-sm">
              <div className="grid grid-cols-2 border-b border-border text-sm font-bold sm:text-base">
                <div className="p-5 text-muted-foreground sm:p-7">Standard activity catalogue</div>
                <div className="border-l border-border bg-primary/10 p-5 text-primary sm:p-7">The Elluminate planning approach</div>
              </div>
              {comparisonRows.map(([standard, elluminate]) => (
                <div key={standard} className="grid grid-cols-2 border-b border-border last:border-b-0">
                  <div className="p-5 text-sm leading-6 text-muted-foreground sm:p-7 sm:text-base">{standard}</div>
                  <div className="flex gap-3 border-l border-border p-5 text-sm font-medium leading-6 sm:p-7 sm:text-base">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {elluminate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20 lg:py-28">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">How it works</p>
              <h2 className="mt-4 font-display text-3xl font-black sm:text-4xl lg:text-5xl">One brief. One sensible planning path.</h2>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article key={step.number} className="border-t-2 border-primary pt-6">
                  <p className="font-display text-4xl font-black text-primary/25">{step.number}</p>
                  <h3 className="mt-5 font-display text-2xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-foreground py-20 text-background lg:py-28">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">See the work</p>
              <h2 className="mt-4 font-display text-3xl font-black sm:text-4xl lg:text-5xl">Real teams. Real movement. Real event energy.</h2>
              <p className="mt-5 text-lg leading-8 text-background/72">
                Activity footage gives you a better sense of pace, participation and facilitation than a list of programme names.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
                <a href="#quote" onClick={() => handleCtaClick("video_section")}>Plan My Team Building Event <ArrowRight /></a>
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg border border-background/15 bg-black shadow-2xl">
              <video className="aspect-video w-full object-cover" controls preload="metadata" poster={cloudinaryImage(heroImage, { width: 1200 })}>
                <source src="/videos/elluminate-showreel.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section id="activities" className="bg-background py-20 lg:py-28">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Activity directions</p>
                <h2 className="mt-4 font-display text-3xl font-black sm:text-4xl lg:text-5xl">Physical first. Virtual when the team needs it.</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  These are starting points, not a test you need to pass before enquiring. We can help narrow the fit.
                </p>
              </div>
              <div className="flex flex-wrap gap-2" aria-label="Filter team-building activities">
                {activityFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActivityFilter(filter)}
                    className={`rounded-md border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      activityFilter === filter ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredActivities.map((activity) => {
                const service = servicesData[activity.slug];
                return (
                  <article key={activity.slug} className="group overflow-hidden rounded-lg border border-border bg-background transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="aspect-[16/10] overflow-hidden bg-secondary">
                      <img
                        src={cloudinaryImage(service?.hero.backgroundImage || heroImage, { width: 800 })}
                        alt={`${activity.title} team-building activity`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        width={800}
                        height={500}
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{activity.category}</p>
                      <h3 className="mt-2 font-display text-2xl font-bold">{activity.title}</h3>
                      <p className="mt-3 min-h-[4.75rem] leading-7 text-muted-foreground">{activity.description}</p>
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                        <Link to={`/services/${activity.slug}`} className="text-sm font-semibold text-muted-foreground hover:text-primary">View activity</Link>
                        <a href="#quote" onClick={() => handleCtaClick(`activity_${activity.slug}`)} className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
                          Ask if this fits <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/35 py-20 lg:py-28">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Practical planning</p>
                <h2 className="mt-4 font-display text-3xl font-black sm:text-4xl lg:text-5xl">What shapes the event plan and quote</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  You do not need every answer today. These are the details we work through to make the recommendation and scope useful.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                {planningDetails.map(({ icon: Icon, title, copy }) => (
                  <div key={title} className="bg-background p-7">
                    <Icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4 rounded-lg border border-primary/25 bg-primary/10 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <p className="max-w-3xl leading-7">
                  For outdoor plans, discuss weather exposure, shelter and fallback options early. The available response depends on the activity, venue and event scope.
                </p>
              </div>
              <Button asChild variant="primary" className="shrink-0">
                <a href="#quote" onClick={() => handleCtaClick("planning_details")}>Send Event Details</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 lg:py-28">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What teams have said</p>
              <h2 className="mt-4 font-display text-3xl font-black sm:text-4xl lg:text-5xl">Feedback from events delivered through our shared history</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure key={`${testimonial.author}-${testimonial.company}`} className="rounded-lg border border-border bg-background p-7 shadow-sm">
                  <blockquote className="text-lg leading-8">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-muted-foreground">
              Elluminate and Team Elevate are operated by EXSTATIC PTE LTD. These reviews and the related event history originated from work delivered under Team Elevate and are shown with that attribution.
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/35 py-20 lg:py-28">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Questions before you enquire</p>
              <h2 className="mt-4 font-display text-3xl font-black sm:text-4xl lg:text-5xl">Corporate team-building FAQ</h2>
            </div>
            <div className="mt-12 divide-y divide-border rounded-lg border border-border bg-background px-6 sm:px-8">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold">
                    {faq.question}
                    <span className="text-2xl font-normal text-primary transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground py-20 text-background lg:py-28">
          <div className="container mx-auto px-6 text-center">
            <Sparkles className="mx-auto h-8 w-8 text-primary" />
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-black sm:text-4xl lg:text-6xl">
              Plan a team-building activity your people can actually get into.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-background/72">
              Send your pax, date, venue preference and event goal. We will help you shape the right activity direction.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                <a href="#quote" onClick={() => handleCtaClick("final_cta")}>Plan My Team Building Event <ArrowRight /></a>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full border-background/35 bg-transparent text-background hover:bg-background hover:text-foreground sm:w-auto">
                <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Elluminate</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-background/70">
              <a href="tel:+6588352482" className="inline-flex items-center gap-2 hover:text-background"><Phone className="h-4 w-4" /> +65 8835 2482</a>
              <a href="mailto:info@elluminate.sg" className="inline-flex items-center gap-2 hover:text-background"><Mail className="h-4 w-4" /> info@elluminate.sg</a>
              <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4" /> EXSTATIC PTE LTD</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
