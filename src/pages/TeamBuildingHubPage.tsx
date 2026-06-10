import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Filter,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import elluminateLogo from "@/assets/logos/elluminate-logo.png";
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
import { servicesData, type ServiceData } from "@/data/servicesData";

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
  filters: ActivityFilter[];
  fit: string;
  intensity: string;
  quoteCue: string;
};

const pageUrl = "https://elluminate.sg/services/team-building";
const seoTitle = "Team Building Singapore - 3 Matched Options & Prices | Elluminate";
const seoDescription =
  "Skip the 50-activity catalogue. Tell us your headcount, date and venue, then request 3 best-fit team building options with prices from Elluminate.";
const whatsappUrl =
  "https://wa.me/6588352482?text=Hi%20Elluminate%2C%20I%27d%20like%20help%20shortlisting%20team%20building%20options.";
const contactPhone = "+65 8835 2482";
const contactEmail = "info@elluminate.sg";

const heroService = servicesData["amazing-race"];
const heroImage = heroService.hero.backgroundImage;

const filters: ActivityFilter[] = ["All", "Outdoor", "Indoor", "High energy", "Low exertion", "Virtual"];

const activityCards: ActivityCard[] = [
  {
    slug: "amazing-race",
    filters: ["All", "Outdoor", "High energy"],
    fit: "Outdoor race-style bonding for teams that want movement, puzzle-solving, and a shared finish line.",
    intensity: "High energy",
    quoteCue: "Strong when you have a large group, an outdoor venue, and a team that wants momentum.",
  },
  {
    slug: "csi-bones",
    filters: ["All", "Indoor", "Low exertion"],
    fit: "Indoor mystery format for teams that prefer thinking, collaboration, and a controlled venue setup.",
    intensity: "Lower exertion",
    quoteCue: "Useful when you need teamwork without heavy physical activity.",
  },
  {
    slug: "cultural-race",
    filters: ["All", "Outdoor", "High energy"],
    fit: "A discovery-led race format for teams that want a Singapore route with clues and group missions.",
    intensity: "Moderate to high",
    quoteCue: "Works well when the venue can be a district, precinct, or outdoor route.",
  },
  {
    slug: "minute-to-win-it",
    filters: ["All", "Indoor", "High energy"],
    fit: "Fast station challenges for teams that want laughter, rotations, and easy participation.",
    intensity: "High energy",
    quoteCue: "Good when you need a compact indoor format with visible energy.",
  },
  {
    slug: "monopoly-dash",
    filters: ["All", "Indoor", "High energy"],
    fit: "Strategy-meets-movement activity for teams that want competition without making the brief too complex.",
    intensity: "Moderate to high",
    quoteCue: "A good middle lane when your team wants games, planning, and movement.",
  },
  {
    slug: "amazing-race-virtual",
    filters: ["All", "Virtual", "Low exertion"],
    fit: "Hosted virtual team building for remote, hybrid, or multi-office teams that still need a shared activity.",
    intensity: "Low exertion",
    quoteCue: "Use this when the team cannot gather in one physical venue.",
  },
];

const processSteps = [
  {
    title: "Send the messy brief",
    copy: "Share headcount, date or timing window, venue preference, and what the session needs to achieve.",
    icon: Users,
  },
  {
    title: "Get 3 matched directions",
    copy: "Elluminate narrows the activity lane by space, energy level, group profile, and practical constraints.",
    icon: Sparkles,
  },
  {
    title: "Confirm the event shape",
    copy: "You review the quote assumptions, preferred activity, schedule, and setup notes before locking details.",
    icon: BadgeCheck,
  },
];

const faqs = [
  {
    question: "What is corporate team building?",
    answer:
      "Corporate team building is a planned activity for company groups to build connection, communication, and shared energy outside normal work. Elluminate focuses this page on facilitated team activities for Singapore-based corporate groups.",
  },
  {
    question: "Do I need to choose the activity before enquiring?",
    answer:
      "No. Send your headcount, timing, venue preference, and objective first. Elluminate can recommend suitable physical or virtual formats before you commit to a specific activity.",
  },
  {
    question: "Can this work indoors or outdoors?",
    answer:
      "Yes, depending on group size, venue rules, weather exposure, and activity objective. The quote brief asks for your venue preference so the shortlist can fit the actual planning conditions.",
  },
  {
    question: "How much does team building cost?",
    answer:
      "Pricing depends on the selected activity, pax, duration, location, facilitation requirements, and setup needs. The pricing section gives visible starting points from existing Elluminate activity data, and the quote brief helps turn those into a more relevant estimate.",
  },
  {
    question: "What if our team has mixed fitness levels?",
    answer:
      "Say that in the objective field. Elluminate can point you toward lower-exertion indoor formats, mixed-energy challenge formats, or virtual options when a highly physical activity is not the right fit.",
  },
  {
    question: "What should I include to get useful options?",
    answer:
      "Include the expected pax, target date or month, indoor or outdoor preference, venue constraints, budget context if available, and whether the goal is bonding, communication, morale, onboarding, or celebration.",
  },
];

const clientLogos = [
  {
    name: "DBS Bank",
    logo: "https://res.cloudinary.com/dtc4yob5i/image/upload/v1755437098/LOGO_-_DBS_BANK_lotzvq.jpg",
  },
  {
    name: "OCBC Bank",
    logo: "https://res.cloudinary.com/dtc4yob5i/image/upload/v1755437098/LOGO_-_OCBC_BANK_fiqfir.jpg",
  },
  {
    name: "UOB",
    logo: "https://res.cloudinary.com/dtc4yob5i/image/upload/v1755437098/LOGO_-_UOB_BANK_uf0idu.jpg",
  },
  {
    name: "Singtel",
    logo: "https://res.cloudinary.com/dtc4yob5i/image/upload/v1755437099/LOGO_-_SINGTEL_owkdjq.png",
  },
  {
    name: "Grab",
    logo: "https://res.cloudinary.com/dtc4yob5i/image/upload/v1755437098/LOGO_-_GRAB_vjl3ro.jpg",
  },
  {
    name: "Shopee",
    logo: "https://res.cloudinary.com/dtc4yob5i/image/upload/v1755437098/LOGO_-_SHOPEE_f6jhxi.png",
  },
  {
    name: "GovTech",
    logo: "https://res.cloudinary.com/dtc4yob5i/image/upload/v1755437098/LOGO_-_GOVTECH_d1l3ei.png",
  },
  {
    name: "CapitaLand",
    logo: "https://res.cloudinary.com/dtc4yob5i/image/upload/v1755437098/LOGO_-_CAPITALAND_sodb2p.png",
  },
];

const testimonials = [
  {
    quote:
      "They brought creativity and professionalism to our corporate retreat, and the event flowed smoothly from start to finish.",
    name: "Sarah Chen",
    role: "HR Director, TechCorp Singapore",
  },
  {
    quote:
      "From concept to execution, the team understood what we wanted our people to experience and kept the activity engaging.",
    name: "Michael Tan",
    role: "Events Manager, GovTech Singapore",
  },
  {
    quote:
      "The activities were fun yet meaningful, and our staff were still talking about the experience after the session.",
    name: "Rachel Lim",
    role: "Training Manager, SMRT Corporation",
  },
];

const teamMembers = [
  {
    name: "Edmund Sim",
    role: "Founder and Lead Facilitator",
    image: "https://res.cloudinary.com/dtc4yob5i/image/upload/v1755097052/20240515_110335_ymetac.webp",
  },
  {
    name: "Afifah Camut",
    role: "Senior Event Facilitator",
    image:
      "https://res.cloudinary.com/dtc4yob5i/image/upload/v1758005178/photo_6093742547983970352_y_hm4fsw.jpg",
  },
  {
    name: "Lisa Ong",
    role: "Sales Manager",
    image: "https://res.cloudinary.com/dtc4yob5i/image/upload/v1758005170/IMG-20250602-WA0032_egpsam.jpg",
  },
];

const galleryImages = [
  servicesData["amazing-race"].gallery?.[0] || servicesData["amazing-race"].hero.backgroundImage,
  servicesData["csi-bones"].gallery?.[0] || servicesData["csi-bones"].hero.backgroundImage,
  servicesData["cultural-race"].hero.backgroundImage,
  servicesData["minute-to-win-it"].hero.backgroundImage,
  servicesData["monopoly-dash"].hero.backgroundImage,
  servicesData["amazing-race-virtual"].hero.backgroundImage,
];

const safeFooterLinks = [
  { name: "Team Building Overview", path: "/services/team-building" },
  { name: "Amazing Race", path: "/services/amazing-race" },
  { name: "CSI-Bones", path: "/services/csi-bones" },
  { name: "Cultural Race", path: "/services/cultural-race" },
  { name: "Minute To Win It", path: "/services/minute-to-win-it" },
  { name: "Monopoly Dash", path: "/services/monopoly-dash" },
  { name: "Amazing Race Virtual", path: "/services/amazing-race-virtual" },
  { name: "Fit In Your Team", path: "/services/fit-in-your-team" },
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

const getServicePrice = (service: ServiceData) => {
  if (service.pricing?.startingPrice) {
    return `From $${service.pricing.startingPrice}/${service.pricing.unit || "pax"}`;
  }

  const packagePrice = service.packages?.find((tier) => tier.price || tier.pricePrefix);
  if (packagePrice?.price) {
    return `${packagePrice.pricePrefix ? `${packagePrice.pricePrefix} ` : ""}$${packagePrice.price}`;
  }

  return "Quote based on brief";
};

const getServiceTitle = (service: ServiceData) => service.title || service.hero.title;

const getServiceImage = (service: ServiceData, width: number) =>
  cloudinaryImage(service.overview.backgroundImage || service.hero.backgroundImage, { width });

const buildBriefDetails = (form: QuoteFormState) =>
  [
    "Team Building Quote Brief",
    `Name: ${form.name.trim()}`,
    `Work email: ${form.email.trim()}`,
    `Pax/headcount: ${form.pax.trim()}`,
    `Date or timing window: ${form.timing.trim()}`,
    `Venue preference: ${form.venue.trim()}`,
    `Team objective: ${form.objective.trim()}`,
    "Requested output: 3 suitable activity options with indicative prices.",
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
      pushLandingEvent("form_start", { field_group: "team_activity_brief" });
      setFormStarted(true);
    }
  };

  const handleCtaClick = (location: string) => {
    pushLandingEvent("cta_click", { cta_location: location, cta_text: "Get My Free Quote" });
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
      setFormError("Please complete the brief and consent checkbox so we can prepare useful options.");
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("submitting");

    const attribution = getAttribution();
    const submissionPage =
      typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "/services/team-building";
    const submissionId = crypto.randomUUID();
    const additionalDetails = buildBriefDetails(quoteForm);

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
          recipientEmail: contactEmail,
          idempotencyKey: `team-building-quote-${submissionId}`,
          replyTo: quoteForm.email.trim(),
          templateData: {
            submissionId,
            name: quoteForm.name.trim(),
            email: quoteForm.email.trim(),
            phone: "Not provided",
            eventCategory: "Physical Team Building",
            expectedAttendees: quoteForm.pax.trim(),
            expectedDate: quoteForm.timing.trim(),
            organisation: "Not provided",
            organisationType: "Not provided",
            additionalDetails,
            submissionPage,
            formName: "team_building_quote_brief",
          },
        },
      });

      setQuoteForm(initialQuoteForm);
      setSubmitStatus("success");
    } catch (error) {
      console.error("Team building quote brief submission failed", error);
      setFormError("Something went wrong while sending the brief. Please try again or contact us directly.");
      setSubmitStatus("error");
    }
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://elluminate.sg" },
    { name: "Services", url: "https://elluminate.sg/services" },
    { name: "Team Building", url: pageUrl },
  ];

  return (
    <div className="min-h-screen bg-[#f7faff] text-[#0a1b33]">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords="team building Singapore, corporate team building, team bonding activities Singapore, company team building activities, indoor outdoor team building"
        canonical={pageUrl}
        ogImage={cloudinaryImage(heroImage, { width: 1200 })}
      />
      <OrganizationSchema type="LocalBusiness" />
      <ServiceSchema
        serviceName="Corporate Team Building Singapore"
        description={seoDescription}
        url={pageUrl}
        image={cloudinaryImage(heroImage, { width: 1200 })}
        serviceType="Corporate Team Building"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <header className="sticky top-0 z-50 border-b border-[#e4eaf2] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Elluminate home">
            <img src={elluminateLogo} alt="Elluminate" className="h-12 w-auto" width={96} height={48} />
            <span className="hidden text-xs font-semibold uppercase tracking-[0.28em] text-[#46566b] sm:inline">
              Elluminate
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-[#e4eaf2] bg-[#f7faff] px-2 py-2 text-sm font-semibold text-[#46566b] lg:flex">
            {[
              { label: "Activities", href: "#activities" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Pricing", href: "#pricing" },
              { label: "Reviews", href: "#reviews" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition-colors hover:bg-white hover:text-[#0a1b33] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            asChild
            className="rounded-xl bg-[#c24e00] px-5 text-sm font-bold text-white shadow-lg shadow-[#f4730c]/20 hover:bg-[#a63d00] focus-visible:ring-[#2563eb] sm:text-base"
          >
            <a href="#quote" onClick={() => handleCtaClick("sticky_header")}>
              Get My Free Quote
            </a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#0a1b33] text-white">
          <div className="absolute inset-0">
            <img
              src={cloudinaryImage(heroImage, { width: 1800 })}
              alt="Corporate team building activity in Singapore"
              className="h-full w-full object-cover opacity-35"
              width={1800}
              height={1100}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(10,27,51,0.95)_0%,rgba(10,27,51,0.82)_44%,rgba(10,27,51,0.35)_100%)]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1.02fr_0.88fr] lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#ffc83d]">
                <ShieldCheck className="h-4 w-4" />
                For HR & admin planners
              </div>

              <h1 className="font-display text-4xl font-black leading-[0.96] tracking-normal text-white sm:text-5xl lg:text-7xl">
                Team building your team will actually rave about on Monday.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
                Send us your messy headcount, date, venue, and team goal. Elluminate turns the brief into 3 suitable
                corporate team building options with prices, so you do not have to browse a 50-activity catalogue.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="rounded-xl bg-[#c24e00] px-7 py-6 text-base font-extrabold text-white shadow-xl shadow-[#f4730c]/25 hover:bg-[#a63d00] focus-visible:ring-[#ffc83d]"
                >
                  <a href="#quote" onClick={() => handleCtaClick("hero_primary")}>
                    Get My Free Quote <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-white/35 bg-white/10 px-7 py-6 text-base font-bold text-white hover:bg-white hover:text-[#0a1b33] focus-visible:ring-[#ffc83d]"
                >
                  <a href="#activities">See Activity Fit</a>
                </Button>
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-3">
                {["Indoor, outdoor, or virtual", "Built around pax and venue", "Quote-ready recommendations"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3">
                      <CheckCircle2 className="h-4 w-4 text-[#ffc83d]" />
                      <span>{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <form
              id="quote"
              onSubmit={handleQuoteSubmit}
              onFocus={handleFormStart}
              className="rounded-3xl border border-white/15 bg-white p-5 text-[#0a1b33] shadow-2xl shadow-black/30 sm:p-7"
            >
              <div className="mb-6">
                <div className="mb-3 inline-flex rounded-full bg-[#ffc83d]/25 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0a1b33]">
                  Team Activity Brief
                </div>
                <h2 className="font-display text-2xl font-black leading-tight sm:text-3xl">
                  Get 3 matched options and prices.
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#46566b]">
                  Free & no obligation · Takes 60 seconds · A real planner replies with next steps.
                </p>
              </div>

              <div className="grid gap-4">
                <div>
                  <label htmlFor="quote-name" className="mb-2 block text-sm font-bold text-[#0a1b33]">
                    Name
                  </label>
                  <Input
                    id="quote-name"
                    name="name"
                    autoComplete="name"
                    value={quoteForm.name}
                    onChange={(event) => handleFieldChange("name", event.target.value)}
                    placeholder="Your name"
                    className="h-12 rounded-xl border-[#e4eaf2] focus-visible:ring-[#2563eb]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="quote-email" className="mb-2 block text-sm font-bold text-[#0a1b33]">
                    Work email
                  </label>
                  <Input
                    id="quote-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={quoteForm.email}
                    onChange={(event) => handleFieldChange("email", event.target.value)}
                    placeholder="name@company.com"
                    className="h-12 rounded-xl border-[#e4eaf2] focus-visible:ring-[#2563eb]"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-pax" className="mb-2 block text-sm font-bold text-[#0a1b33]">
                      Pax / headcount
                    </label>
                    <Input
                      id="quote-pax"
                      name="pax"
                      value={quoteForm.pax}
                      onChange={(event) => handleFieldChange("pax", event.target.value)}
                      placeholder="e.g. 80 pax"
                      className="h-12 rounded-xl border-[#e4eaf2] focus-visible:ring-[#2563eb]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-timing" className="mb-2 block text-sm font-bold text-[#0a1b33]">
                      Date or timing window
                    </label>
                    <Input
                      id="quote-timing"
                      name="timing"
                      value={quoteForm.timing}
                      onChange={(event) => handleFieldChange("timing", event.target.value)}
                      placeholder="e.g. late Aug"
                      className="h-12 rounded-xl border-[#e4eaf2] focus-visible:ring-[#2563eb]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-venue" className="mb-2 block text-sm font-bold text-[#0a1b33]">
                    Venue preference
                  </label>
                  <Input
                    id="quote-venue"
                    name="venue"
                    value={quoteForm.venue}
                    onChange={(event) => handleFieldChange("venue", event.target.value)}
                    placeholder="Office, hotel ballroom, park, or need suggestions"
                    className="h-12 rounded-xl border-[#e4eaf2] focus-visible:ring-[#2563eb]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="quote-objective" className="mb-2 block text-sm font-bold text-[#0a1b33]">
                    Team objective
                  </label>
                  <Textarea
                    id="quote-objective"
                    name="objective"
                    value={quoteForm.objective}
                    onChange={(event) => handleFieldChange("objective", event.target.value)}
                    placeholder="Bonding, cross-team collaboration, morale, onboarding, celebration..."
                    className="min-h-24 rounded-xl border-[#e4eaf2] focus-visible:ring-[#2563eb]"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="honeypot"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <label className="flex items-start gap-3 rounded-xl bg-[#f7faff] p-3 text-sm leading-6 text-[#46566b]">
                  <Checkbox
                    name="privacyConsent"
                    checked={quoteForm.privacyConsent}
                    onCheckedChange={(checked) => handleFieldChange("privacyConsent", checked === true)}
                    className="mt-1 border-[#2563eb] data-[state=checked]:bg-[#2563eb]"
                  />
                  <span>
                    I consent to Elluminate contacting me about this team building enquiry using the details provided.
                  </span>
                </label>

                {formError && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {formError}
                  </p>
                )}

                {submitStatus === "success" && (
                  <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                    Brief received. We will review your team details and reply with next steps.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={submitStatus === "submitting"}
                  className="h-14 rounded-xl bg-[#c24e00] text-base font-extrabold text-white hover:bg-[#a63d00] focus-visible:ring-[#2563eb]"
                >
                  {submitStatus === "submitting" ? "Sending..." : "Send Me 3 Options + Prices"}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </section>

        <section className="border-b border-[#e4eaf2] bg-white py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.22em] text-[#46566b]">
              Existing Elluminate client-logo source material
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="flex h-20 items-center justify-center rounded-2xl border border-[#e4eaf2] bg-white px-4"
                >
                  <img
                    src={cloudinaryImage(client.logo, { width: 180 })}
                    alt={client.name}
                    width={140}
                    height={56}
                    loading="lazy"
                    className="max-h-12 w-auto object-contain grayscale transition duration-200 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7faff] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">
                FOR HR & ADMIN PLANNERS
              </p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                The hard part is not finding activities. It is choosing the right one.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Pax changes after the first brief.",
                "The venue may limit noise, movement, weather exposure, or setup time.",
                "Leadership wants energy, but the team has mixed comfort levels.",
                "A catalogue gives options, but not a confident recommendation.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[#e4eaf2] bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-[#2563eb]" />
                  <p className="text-base font-semibold leading-7 text-[#46566b]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">How It Works</p>
                <h2 className="font-display max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                  Give us the constraints. We turn them into a sensible activity shortlist.
                </h2>
              </div>
              <Button asChild className="rounded-xl bg-[#c24e00] text-white hover:bg-[#a63d00] focus-visible:ring-[#2563eb]">
                <a href="#quote" onClick={() => handleCtaClick("how_it_works")}>
                  Get My Free Quote
                </a>
              </Button>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative overflow-hidden rounded-3xl bg-[#0a1b33] p-7 text-white">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffc83d] text-[#0a1b33]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-display text-6xl font-black text-white/10">0{index + 1}</span>
                    </div>
                    <h3 className="font-display text-2xl font-black">{step.title}</h3>
                    <p className="mt-4 text-base leading-7 text-white/75">{step.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="activities" className="bg-[#f7faff] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">
                  MOST-BOOKED FORMATS
                </p>
                <h2 className="font-display max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                  Start with the format that fits your team, not a generic activity list.
                </h2>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#e4eaf2] bg-white px-3 py-2 text-sm font-bold text-[#46566b]">
                <Filter className="h-4 w-4 text-[#2563eb]" />
                Filter by constraint
              </div>
            </div>

            <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActivityFilter(filter)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 ${
                    activityFilter === filter
                      ? "border-[#0a1b33] bg-[#0a1b33] text-white"
                      : "border-[#e4eaf2] bg-white text-[#46566b] hover:border-[#2563eb] hover:text-[#0a1b33]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {filteredActivities.map((activity) => {
                const service = servicesData[activity.slug];
                return (
                  <article key={activity.slug} className="group overflow-hidden rounded-3xl border border-[#e4eaf2] bg-white shadow-sm">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={getServiceImage(service, 720)}
                        alt={getServiceTitle(service)}
                        width={720}
                        height={540}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#0a1b33]">
                        {activity.intensity}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="font-display text-2xl font-black">{getServiceTitle(service)}</h3>
                        <span className="rounded-full bg-[#ffc83d]/25 px-3 py-1 text-xs font-black text-[#0a1b33]">
                          {getServicePrice(service)}
                        </span>
                      </div>
                      <p className="text-base leading-7 text-[#46566b]">{activity.fit}</p>
                      <p className="mt-4 rounded-2xl bg-[#f7faff] p-4 text-sm font-semibold leading-6 text-[#46566b]">
                        {activity.quoteCue}
                      </p>
                      <a
                        href="#quote"
                        onClick={() => handleCtaClick(`activity_${activity.slug}`)}
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#c24e00] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#a63d00] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2"
                      >
                        Check fit <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">
                The catalogue way vs. the Elluminate way
              </p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                A better route than scrolling through every possible activity.
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-[#e4eaf2] bg-[#f7faff] p-7">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#46566b]">
                  The catalogue way
                </p>
                <h2 className="font-display text-3xl font-black">Browse first, decide later.</h2>
                <ul className="mt-6 space-y-4 text-base leading-7 text-[#46566b]">
                  <li className="flex gap-3">
                    <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-[#46566b]" />
                    You compare too many formats before the brief is clear.
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-[#46566b]" />
                    Indoor/outdoor fit and venue rules only get checked late.
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-[#46566b]" />
                    The final choice can feel like guesswork.
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl bg-[#0a1b33] p-7 text-white">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#ffc83d]">
                  The Elluminate way
                </p>
                <h2 className="font-display text-3xl font-black">Brief first, shortlist second.</h2>
                <ul className="mt-6 space-y-4 text-base leading-7 text-white/78">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ffc83d]" />
                    We look at pax, timing, venue, energy level, and team objective together.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ffc83d]" />
                    You get a smaller set of practical directions with price context.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#ffc83d]" />
                    The event conversation starts closer to a workable plan.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7faff] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">
                A Friday afternoon, handled end to end
              </p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                A sample timeline for a corporate team building session.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#46566b]">
                Every programme changes by venue and activity. This gives planners a practical sense of how the day can
                be shaped once the brief is clear.
              </p>
            </div>
            <div className="space-y-4">
              {[
                ["1:30 PM", "Facilitator setup and arrival checks"],
                ["2:00 PM", "Team briefing, safety notes, and activity framing"],
                ["2:20 PM", "Main challenge rounds or race route begins"],
                ["4:15 PM", "Debrief, score reveal, and closing moment"],
                ["4:30 PM", "Wrap-up, photos, and venue handback"],
              ].map(([time, copy]) => (
                <div key={time} className="flex gap-4 rounded-2xl border border-[#e4eaf2] bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded-xl bg-[#ffc83d] text-sm font-black text-[#0a1b33]">
                    {time}
                  </div>
                  <p className="self-center text-base font-semibold leading-7 text-[#46566b]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">Who this fits</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Different buyers, same need: a clean recommendation that can be explained internally.
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "Companies & MNCs",
                  copy: "For HR, admin, culture, and department teams planning bonding days, offsites, or staff engagement activities.",
                },
                {
                  title: "Government & Statutory Boards",
                  copy: "For planners who need clear activity assumptions, group logistics, and practical communication before approval.",
                },
                {
                  title: "Schools & Institutions",
                  copy: "For staff or student-facing planners who need facilitated group activities shaped around space, timing, and participant profile.",
                },
              ].map((segment) => (
                <article key={segment.title} className="rounded-3xl border border-[#e4eaf2] bg-[#f7faff] p-7">
                  <h3 className="font-display text-2xl font-black">{segment.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#46566b]">{segment.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0a1b33] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#ffc83d]">
                Facilitators who can read a room
              </p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                The activity only works when the room is actually led.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                Existing team photos and roles are used here as source material. The promise stays practical: clear
                briefing, paced activity flow, and a human planner helping you pick the right lane.
              </p>
              <Button asChild className="mt-8 rounded-xl bg-[#c24e00] text-white hover:bg-[#a63d00] focus-visible:ring-[#ffc83d]">
                <a href="#quote" onClick={() => handleCtaClick("facilitators")}>
                  Get My Free Quote
                </a>
              </Button>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {teamMembers.map((member) => (
                <article key={member.name} className="overflow-hidden rounded-3xl border border-white/10 bg-white/8">
                  <img
                    src={cloudinaryImage(member.image, { width: 420 })}
                    alt={member.name}
                    width={420}
                    height={520}
                    loading="lazy"
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-xl font-black">{member.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">
                  Real events, real laughter
                </p>
                <h2 className="font-display max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                  Use believable service-in-action visuals, not abstract decoration.
                </h2>
              </div>
              <Button asChild className="rounded-xl bg-[#c24e00] text-white hover:bg-[#a63d00] focus-visible:ring-[#2563eb]">
                <a href="#quote" onClick={() => handleCtaClick("gallery")}>
                  Get My Free Quote
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
              {galleryImages.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className={`overflow-hidden rounded-3xl border border-[#e4eaf2] ${
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

        <section id="reviews" className="bg-[#f7faff] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">Reviews</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Existing review copy, used without adding new claims.
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="rounded-3xl border border-[#e4eaf2] bg-white p-7 shadow-sm">
                  <blockquote className="text-lg font-semibold leading-8 text-[#0a1b33]">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-[#e4eaf2] pt-5">
                    <p className="font-display text-lg font-black">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-[#46566b]">{testimonial.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">
                  Know the ballpark before you enquire
                </p>
                <h2 className="font-display max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                  Starting points from existing activity data.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[#46566b]">
                Final quote depends on pax, date, venue, setup, facilitation needs, and the selected format.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {activityCards.slice(0, 6).map((activity) => {
                const service = servicesData[activity.slug];
                return (
                  <article key={`price-${activity.slug}`} className="rounded-3xl border border-[#e4eaf2] bg-[#f7faff] p-7">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#46566b]">{activity.intensity}</p>
                    <h3 className="mt-3 font-display text-2xl font-black">{getServiceTitle(service)}</h3>
                    <p className="mt-5 text-3xl font-black text-[#2563eb]">{getServicePrice(service)}</p>
                    <p className="mt-4 text-sm leading-6 text-[#46566b]">{activity.quoteCue}</p>
                    <a
                      href="#quote"
                      onClick={() => handleCtaClick(`pricing_${activity.slug}`)}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#c24e00] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#a63d00] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2"
                    >
                      Check fit <ArrowRight className="h-4 w-4" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f7faff] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-1">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">
                Booked it. Boss-proof it.
              </p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Practical planning reassurance, not big promises.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
              {[
                {
                  icon: CalendarDays,
                  title: "Timing clarity",
                  copy: "Share the date or month early so availability and event flow can be discussed before details harden.",
                },
                {
                  icon: MapPin,
                  title: "Venue fit",
                  copy: "Tell us the venue type, space limits, indoor/outdoor preference, and any wet-weather concerns.",
                },
                {
                  icon: Users,
                  title: "Pax reality",
                  copy: "Expected headcount helps us avoid formats that feel too crowded, too quiet, or too complicated.",
                },
                {
                  icon: Clock3,
                  title: "Objective match",
                  copy: "Different goals call for different energy. Bonding, morale, communication, and celebration do not need the same format.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-[#e4eaf2] bg-white p-6">
                    <Icon className="h-7 w-7 text-[#2563eb]" />
                    <h3 className="mt-5 font-display text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#46566b]">{item.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#2563eb]">FAQ</p>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">
                Questions planners usually ask before requesting a quote.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-[#e4eaf2] bg-[#f7faff] p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-black text-[#0a1b33]">
                    {faq.question}
                    <span className="rounded-full bg-white p-2 text-[#2563eb] transition group-open:rotate-90">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-4 text-base leading-7 text-[#46566b]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0a1b33] px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/8 p-8 text-center shadow-2xl shadow-black/20 sm:p-12">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#ffc83d]">Final quote brief</p>
            <h2 className="font-display text-3xl font-black leading-tight sm:text-6xl">
              Your team's best afternoon this year starts with a 60-second brief.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Share pax, timing, venue preference, and objective. We will use that to suggest activity directions that
              make sense for your actual event.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-xl bg-[#c24e00] px-8 py-6 text-base font-extrabold text-white hover:bg-[#a63d00] focus-visible:ring-[#ffc83d]"
              >
                <a href="#quote" onClick={() => handleCtaClick("final_cta")}>
                  Get My Free Quote <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <a
                href={`tel:${contactPhone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ffc83d] focus:ring-offset-2 focus:ring-offset-[#0a1b33]"
              >
                <Phone className="h-4 w-4" />
                {contactPhone}
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ffc83d] focus:ring-offset-2 focus:ring-offset-[#0a1b33]"
              >
                <Mail className="h-4 w-4" />
                {contactEmail}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ffc83d] focus:ring-offset-2 focus:ring-offset-[#0a1b33]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
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
        className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-[#25d366]/30 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 md:bottom-6"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <div className="sticky bottom-0 z-40 border-t border-[#e4eaf2] bg-white/95 px-4 py-3 shadow-2xl backdrop-blur-xl md:hidden">
        <a
          href="#quote"
          onClick={() => handleCtaClick("mobile_sticky")}
          className="flex h-12 items-center justify-center rounded-xl bg-[#c24e00] text-sm font-extrabold text-white shadow-lg shadow-[#f4730c]/25 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2"
        >
          Get My Free Quote
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
