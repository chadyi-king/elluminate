import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CalendarCheck2,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  HeartHandshake,
  LayoutGrid,
  MonitorPlay,
  Quote,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  TriangleAlert,
  UserRoundCheck,
  UsersRound,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { ClientTestimonialsCarousel } from "@/components/ClientTestimonialsCarousel";
import { BreadcrumbSchema, FAQSchema, OrganizationSchema, ServiceSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import { cloudinaryImage } from "@/lib/media";
import { getCampaignPageConfig } from "@/data/campaignPageConfigs";
import { clientTestimonials, type ClientTestimonial } from "@/data/clientTestimonials";
import { getRouteSeo } from "@/data/seoRoutes";
import {
  equipmentActivityServices,
  physicalTeamBuildingServices,
  virtualTeamBuildingServices,
} from "@/data/siteScope";

type ActivityFilter = "All" | "Outdoor" | "Indoor" | "High energy" | "Lower intensity" | "Virtual";

type ActivityCard = {
  slug: string;
  title: string;
  filters: ActivityFilter[];
};

const campaignConfig = getCampaignPageConfig("team-building");
const pageUrl = `https://elluminate.sg${campaignConfig.path}`;
const teamBuildingSeo = getRouteSeo("/services/team-building");
const seoDescription = teamBuildingSeo?.description ?? campaignConfig.description;
const filters: ActivityFilter[] = ["All", "Outdoor", "Indoor", "High energy", "Lower intensity", "Virtual"];

const activityCards: ActivityCard[] = [
  {
    slug: "amazing-race",
    title: "Amazing Race",
    filters: ["All", "Outdoor", "High energy"],
  },
  {
    slug: "cultural-race",
    title: "Cultural Race",
    filters: ["All", "Outdoor", "High energy"],
  },
  {
    slug: "csi-bones",
    title: "CSI-Bones",
    filters: ["All", "Indoor", "Lower intensity"],
  },
  {
    slug: "minute-to-win-it",
    title: "Minute To Win It",
    filters: ["All", "Indoor", "High energy"],
  },
  {
    slug: "monopoly-dash",
    title: "Monopoly Dash",
    filters: ["All", "Outdoor", "High energy"],
  },
  {
    slug: "amazing-race-virtual",
    title: "Virtual Amazing Race",
    filters: ["All", "Virtual", "Lower intensity"],
  },
];

const catalogueGroups = [
  {
    title: "Story-led physical experiences",
    description: "Story, movement and shared missions for teams meeting in person.",
    items: physicalTeamBuildingServices,
    icon: Compass,
    accent: "#2A8DFF",
    tone: "border-blue-200 bg-blue-50/[0.7]",
  },
  {
    title: "Equipment activities",
    description: "Focused action formats built around specialist equipment and clear rules.",
    items: equipmentActivityServices,
    icon: Target,
    accent: "#D99B00",
    tone: "border-amber-200 bg-amber-50/[0.72]",
  },
  {
    title: "Virtual experiences",
    description: "Hosted online formats for remote, hybrid and multi-office teams.",
    items: virtualTeamBuildingServices,
    icon: MonitorPlay,
    accent: "#8B5CF6",
    tone: "border-violet-200 bg-violet-50/[0.7]",
  },
];

const proofMetrics = [
  { value: "5,000+", label: "events delivered", icon: CalendarCheck2, accent: "#2A8DFF" },
  { value: "100,000+", label: "participants", icon: UsersRound, accent: "#26B982" },
  { value: "8+ years", label: "planning and delivering events together", icon: Award, accent: "#F4B400" },
  { value: "24", label: "physical, equipment-led and virtual experiences", icon: LayoutGrid, accent: "#8B5CF6" },
];

const proofTestimonialIds = [
  "team-elevate-client-farzanah-begum-simtech",
  "team-elevate-google-jenniiloh",
  "team-elevate-google-joshua",
  "team-elevate-client-arianti-amalina-madame-tussauds",
];

const proofTestimonials = proofTestimonialIds
  .map((id) => clientTestimonials.find((testimonial) => testimonial.id === id))
  .filter((testimonial): testimonial is ClientTestimonial => Boolean(testimonial));

const stakes = [
  "Working time the whole group will not get back.",
  "The organiser's confidence when the room disengages.",
  "A rare chance for quieter voices and different departments to participate.",
  "People's enthusiasm for the next company event.",
];

const stakeMoments = [
  {
    marker: "01",
    title: "Protect the team's time",
    copy: "Give the session clear roles, momentum and a finish worth reaching.",
    image: "/images/services/amazing-race/gallery-1.jpg",
    alt: "Team members pulling together during an outdoor activity",
    icon: CalendarClock,
  },
  {
    marker: "02",
    title: "Protect the organiser's confidence",
    copy: "Use active facilitation to keep the experience moving.",
    image: "/images/services/amazing-race/gallery-7.jpg",
    alt: "Facilitator guiding a company team through an active checkpoint",
    icon: ShieldCheck,
  },
  {
    marker: "03",
    title: "Give quieter voices a role",
    copy: "Create more than one way for people to contribute.",
    image: "/images/services/csi-bones/gallery-3.jpg",
    alt: "Small team comparing clues together during an indoor mystery",
    icon: UserRoundCheck,
  },
  {
    marker: "04",
    title: "Keep people open to the next event",
    copy: "End with a shared result people are glad they joined.",
    image: "/images/services/builder-cross/gallery-5.jpg",
    alt: "Smiling company team beside the structure they built together",
    icon: HeartHandshake,
  },
];

const planningFlow = [
  {
    icon: UsersRound,
    title: "Fit the people",
    copy: "Consider pax, desired energy, accessibility needs, team mix and what the event should achieve.",
  },
  {
    icon: Compass,
    title: "Match the experience",
    copy: "Narrow the direction across physical, equipment-led and virtual formats instead of leaving you to decode the catalogue alone.",
  },
  {
    icon: Route,
    title: "Shape the flow",
    copy: "Connect the briefing, team allocation, pacing, scoring and shared finish as one experience.",
  },
  {
    icon: Sparkles,
    title: "Facilitate the room",
    copy: "Bring the activity concept, materials, equipment, facilitators and basic setup together for event day.",
  },
  {
    icon: ShieldCheck,
    title: "Protect the plan",
    copy: "Surface venue, movement, noise, access, weather and fallback considerations before confirmation.",
  },
];

const valueBefore = [
  "The activity direction around your brief",
  "Group and participant considerations",
  "Venue and format fit",
  "Briefing and team allocation",
  "Activity pacing and scoring",
  "Weather and fallback considerations where relevant",
];

const valueStandard = [
  "Activity concept",
  "Playing materials and equipment",
  "Facilitators",
  "Basic setup",
  "Scoring",
  "A free public venue or route where the selected format uses one",
];

const valueOptional = [
  "Paid venue",
  "Catering",
  "Transport",
  "Photography",
  "Prizes",
  "Branding",
  "Printed reports",
  "Substantial customisation",
];

const riskReducers = [
  "No payment at enquiry",
  "No need to choose an activity first",
  "Review the direction and quote before confirming",
];

const activityFirstApproach = [
  "Pick a package from a list.",
  "Fit the group around the chosen format.",
  "Leave participation and pacing to event day.",
  "Solve venue and contingency questions after the choice.",
];

const elluminateApproach = [
  "Start with the people, purpose, place and timing.",
  "Narrow the format around the team.",
  "Design the roles and energy so more people can take part.",
  "Connect briefing, team allocation, pacing, scoring and the shared finish.",
  "Surface venue and fallback questions before confirmation.",
];

const strongFit = [
  "You know the desired outcome but not the right activity.",
  "Your group includes different departments, seniority levels, energy levels or accessibility considerations.",
  "You are deciding between indoor, outdoor, physical or virtual formats.",
  "You want facilitated delivery rather than only equipment.",
  "You want venue, flow, setup and contingency questions surfaced before confirmation.",
];

const differentFit = [
  "You only want the cheapest bare-equipment rental.",
  "You intend to run the entire event yourself.",
  "You only need someone to book a venue.",
  "You want a fixed package without discussing the people attending.",
  "The lowest quote is the only factor in your decision.",
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

const enquiryValue = [
  "A clearer activity direction based on your team and objective",
  "The practical questions worth solving before confirmation",
  "A connected recommendation and quote you can review internally",
];

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

const gallery = [
  {
    src: "/images/services/amazing-race/gallery-5.jpg",
    alt: "Corporate team working together during an outdoor challenge",
    caption: "Pulling together: outdoor team challenge",
  },
  {
    src: "/images/services/csi-bones/gallery-4.jpg",
    alt: "Corporate participants examining clues during an indoor mystery activity",
    caption: "Comparing clues: indoor investigation",
  },
  {
    src: "/images/services/minute-to-win-it/gallery-6.jpg",
    alt: "Company group taking part in an indoor station challenge",
    caption: "Rotating through stations: indoor format",
  },
  {
    src: "/images/services/monopoly-dash/gallery-5.jpg",
    alt: "Team members completing a facilitated outdoor challenge",
    caption: "Sharing the same finish: facilitated outdoor format",
  },
];

const faqs = [
  {
    question: "We do not know which activity to choose.",
    answer:
      "That is a valid starting point. Share your estimated pax, timing, venue preference and event objective. Elluminate can narrow the activity direction from there.",
  },
  {
    question: "Our team has very different personalities and energy levels.",
    answer:
      "Include that in the brief. Desired intensity, movement, seated or lower-movement roles, team mix and venue access can be discussed before the direction is confirmed.",
  },
  {
    question: "Will quieter colleagues be left out?",
    answer:
      "No format can guarantee how every individual will respond. The planning goal is to choose roles, pacing and challenges that give more than one kind of participant a way to contribute.",
  },
  {
    question: "Is submitting the brief a commitment?",
    answer:
      "No. Elluminate reviews the details, clarifies open questions and discusses the direction and quote before confirmation.",
  },
  {
    question: "Can you support remote or multi-office teams?",
    answer:
      "Yes. Elluminate offers facilitated virtual formats alongside physical activities in Singapore.",
  },
];

const pushLandingEvent = (payload: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;

  const trackingWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.dataLayer.push({
    event: "cta_click",
    page_path: "/services/team-building",
    form_name: "plan_my_event",
    ...payload,
  });
};

const TeamBuildingHubPage = () => {
  const heroHeadline = "Team Building Your People Won't Quietly Dread";
  const { openContactModal } = useContactModal();
  const reduceMotion = useReducedMotion();
  const [activityFilter, setActivityFilter] = useState<ActivityFilter>("All");

  const revealWord = (delay: number, direction: -1 | 1) => ({
    initial: reduceMotion ? false : { opacity: 0, x: direction * 64 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.48,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  const revealPhoto = (delay: number, x: number, rotate: number) => ({
    initial: reduceMotion ? false : { opacity: 0, x, y: 54, rotate: rotate + Math.sign(x) * 5 },
    animate: { opacity: 1, x: 0, y: 0, rotate },
    transition: {
      duration: reduceMotion ? 0 : 0.58,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  const filteredActivities = useMemo(() => {
    if (activityFilter === "All") return activityCards;
    return activityCards.filter((activity) => activity.filters.includes(activityFilter));
  }, [activityFilter]);

  const trackCtaClick = (location: string, ctaText: string) => {
    pushLandingEvent({ cta_location: location, cta_text: ctaText });
  };

  const openPlanMyEvent = (location: string, ctaText = "Build My Team Experience", additionalDetails?: string) => {
    trackCtaClick(location, ctaText);
    openContactModal({
      eventCategory: "Physical Team Building",
      serviceSlug: "team-building",
      additionalDetails:
        additionalDetails ?? "I would like help choosing the right team-building experience for my group.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO {...teamBuildingSeo} ogImage="https://elluminate.sg/images/services/amazing-race/hero.jpg" />
      <OrganizationSchema type="LocalBusiness" />
      <ServiceSchema name={campaignConfig.h1} description={seoDescription} slug="team-building" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://elluminate.sg/" },
          { name: "Team Building", url: pageUrl },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-[#fffdf8] text-[#0b1f3a]">
          <div className="container relative mx-auto px-4 pb-6 pt-7 sm:px-7 lg:min-h-[930px] lg:px-10 lg:pb-6 lg:pt-0">
            <div
              aria-hidden="true"
              className="absolute inset-x-6 bottom-6 top-[205px] hidden overflow-hidden rounded-[3rem] bg-[#69c9ec] lg:block xl:top-[225px]"
            >
              <div className="absolute left-[29%] top-[23%] h-12 w-44 rounded-full bg-white">
                <span className="absolute -top-6 left-7 h-14 w-14 rounded-full bg-white" />
                <span className="absolute -top-9 left-[4.25rem] h-20 w-20 rounded-full bg-white" />
                <span className="absolute -top-5 right-6 h-12 w-12 rounded-full bg-white" />
              </div>
              <div className="absolute right-[27%] top-[32%] h-12 w-44 rounded-full bg-white">
                <span className="absolute -top-6 left-8 h-14 w-14 rounded-full bg-white" />
                <span className="absolute -top-9 left-[4.5rem] h-20 w-20 rounded-full bg-white" />
                <span className="absolute -top-5 right-7 h-12 w-12 rounded-full bg-white" />
              </div>
              <div className="absolute left-[35%] top-[58%] h-10 w-36 rounded-full bg-white">
                <span className="absolute -top-5 left-6 h-12 w-12 rounded-full bg-white" />
                <span className="absolute -top-7 right-7 h-16 w-16 rounded-full bg-white" />
              </div>
            </div>

            <p className="relative z-50 inline-flex rounded-full border border-[#dce6f3] bg-white px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.2em] text-primary shadow-sm sm:text-xs lg:absolute lg:left-1/2 lg:top-5 lg:-translate-x-1/2">
              Corporate Team Building Singapore
            </p>

            <h1
              aria-label={heroHeadline}
              className="relative z-20 mx-auto mt-5 max-w-3xl text-center font-display font-black uppercase leading-[0.68] tracking-[-0.055em] text-[#0b1f3a] lg:absolute lg:inset-0 lg:mt-0 lg:max-w-none lg:tracking-[-0.08em]"
            >
              <span className="flex flex-col items-center gap-[2px] text-[clamp(3rem,13vw,4.4rem)] lg:absolute lg:bottom-[725px] lg:left-[2.5%] lg:top-auto lg:w-[40%] lg:items-start lg:text-left lg:text-[clamp(5.6rem,7vw,7.2rem)] xl:bottom-[705px] xl:text-[clamp(7rem,8.25vw,8.8rem)]">
                <motion.span {...revealWord(0.06, -1)} className="block">
                  Team
                </motion.span>
                <motion.span {...revealWord(0.13, -1)} className="block">
                  Building
                </motion.span>
              </span>
              <span className="mt-3 flex flex-col items-center gap-[2px] text-[clamp(2.5rem,11vw,3.8rem)] text-[#348fbe] lg:absolute lg:left-[2.5%] lg:top-[215px] lg:mt-0 lg:w-[40%] lg:items-start lg:text-left lg:text-[clamp(4.8rem,6.2vw,6.5rem)] lg:text-white lg:[text-shadow:0_2px_0_rgba(11,31,58,0.14)] xl:top-[235px] xl:text-[clamp(6.2rem,7.5vw,8rem)]">
                <motion.span {...revealWord(0.2, -1)} className="block">
                  Your
                </motion.span>
                <motion.span {...revealWord(0.27, -1)} className="block">
                  People
                </motion.span>
              </span>
              <span className="mt-3 flex flex-col items-center gap-[2px] text-[clamp(2.5rem,11vw,3.8rem)] lg:absolute lg:bottom-[725px] lg:right-[2.5%] lg:top-auto lg:mt-0 lg:w-[40%] lg:items-end lg:text-right lg:text-[clamp(5rem,6.5vw,6.7rem)] xl:bottom-[705px] xl:text-[clamp(6.5rem,7.7vw,8.3rem)]">
                <motion.span {...revealWord(0.34, 1)} className="block">
                  Won&apos;t
                </motion.span>
                <motion.span {...revealWord(0.41, 1)} className="block">
                  Quietly
                </motion.span>
              </span>
              <span className="mt-1 block text-[clamp(3.5rem,15vw,5rem)] text-[#348fbe] lg:absolute lg:right-[2.5%] lg:top-[215px] lg:mt-0 lg:w-[40%] lg:text-right lg:text-[clamp(6.6rem,8.7vw,8.8rem)] lg:text-white lg:[text-shadow:0_2px_0_rgba(11,31,58,0.14)] xl:top-[235px] xl:text-[clamp(8.2rem,10.2vw,10.4rem)]">
                <motion.span {...revealWord(0.48, 1)} className="block">
                  Dread
                </motion.span>
              </span>
            </h1>

            <div className="relative mt-6 flex flex-col overflow-hidden rounded-[2.5rem] bg-[#69c9ec] px-4 pb-5 pt-5 shadow-[0_30px_90px_rgba(11,31,58,0.18)] sm:px-6 sm:pb-6 lg:static lg:mt-0 lg:block lg:overflow-visible lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none">
              <div aria-hidden="true" className="absolute -left-16 top-44 h-12 w-40 rounded-full bg-white lg:hidden">
                <span className="absolute -top-7 left-10 h-16 w-16 rounded-full bg-white" />
                <span className="absolute -top-8 right-7 h-20 w-20 rounded-full bg-white" />
              </div>
              <div aria-hidden="true" className="absolute -right-16 top-[17rem] h-12 w-40 rounded-full bg-white lg:hidden">
                <span className="absolute -top-7 left-8 h-16 w-16 rounded-full bg-white" />
                <span className="absolute -top-8 right-8 h-20 w-20 rounded-full bg-white" />
              </div>

              <div className="relative z-40 order-1 mx-auto mt-2 h-[520px] w-full max-w-[390px] sm:h-[620px] sm:max-w-[470px] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[1000px] lg:w-[585px] lg:max-w-none lg:-translate-x-1/2">
                <motion.figure
                  initial={reduceMotion ? false : { opacity: 0, y: 72 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.64,
                    delay: reduceMotion ? 0 : 0.36,
                    ease: "easeOut",
                  }}
                  className="h-full w-full"
                >
                  <img
                    src="/images/campaigns/team-building/hero-campaign-woman-v7.webp"
                    alt="Illustrative campaign visual of a fictional adult Asian professional holding a lit sparkler"
                    width={971}
                    height={1619}
                    decoding="async"
                    className="h-full w-full object-cover object-top drop-shadow-[0_30px_34px_rgba(11,31,58,0.2)] lg:object-contain lg:object-bottom"
                  />
                  <figcaption className="sr-only">
                    A fictional campaign model appears with a sparkler. The surrounding photographs show real
                    Elluminate team-building events.
                  </figcaption>
                </motion.figure>
              </div>

              <div
                className="relative z-50 order-2 -mt-20 grid grid-cols-2 gap-3 sm:-mt-24 lg:pointer-events-none lg:absolute lg:inset-0 lg:z-30 lg:mt-0 lg:block"
                aria-label="Real Elluminate team-building moments"
              >
                <motion.figure
                  {...revealPhoto(0.66, -84, -3)}
                  className="overflow-hidden rounded-[1.5rem] border-4 border-white bg-white shadow-2xl lg:absolute lg:left-[3.5%] lg:top-[48%] lg:w-[18%]"
                >
                  <img
                    src={cloudinaryImage("/images/services/amazing-race/cta.jpg", { width: 700 })}
                    alt="Team members coordinating a hands-on string challenge"
                    width={525}
                    height={700}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover object-[50%_48%]"
                  />
                </motion.figure>
                <motion.figure
                  {...revealPhoto(0.74, -54, 3)}
                  className="overflow-hidden rounded-[1.5rem] border-4 border-white bg-white shadow-2xl lg:absolute lg:left-[22.5%] lg:top-[53%] lg:w-[16.8%]"
                >
                  <img
                    src={cloudinaryImage("/images/services/battle-of-the-olympians/gallery-6.jpg", { width: 700 })}
                    alt="Colleagues reaching for a flying disc during a beach team challenge"
                    width={525}
                    height={700}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover object-[52%_48%]"
                  />
                </motion.figure>
                <motion.figure
                  {...revealPhoto(0.82, 54, -3)}
                  className="overflow-hidden rounded-[1.5rem] border-4 border-white bg-white shadow-2xl lg:absolute lg:right-[26%] lg:top-[51%] lg:w-[21%]"
                >
                  <img
                    src={cloudinaryImage("/images/services/cultural-race/gallery-7.jpg", { width: 700 })}
                    alt="Company group celebrating together after a team challenge"
                    width={525}
                    height={700}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover object-[52%_50%]"
                  />
                </motion.figure>
                <motion.figure
                  {...revealPhoto(0.9, 84, 3)}
                  className="overflow-hidden rounded-[1.5rem] border-4 border-white bg-white shadow-2xl lg:absolute lg:right-[3.5%] lg:top-[45%] lg:w-[22.5%]"
                >
                  <img
                    src={cloudinaryImage("/images/services/builder-cross/gallery-5.jpg", { width: 700 })}
                    alt="Corporate team smiling beside the structure they built together"
                    width={525}
                    height={700}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover object-[50%_38%]"
                  />
                </motion.figure>
              </div>

              <motion.blockquote
                initial={reduceMotion ? false : { opacity: 0, x: -36, y: 28 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : 0.96,
                  ease: "easeOut",
                }}
                className="relative z-[60] order-3 mt-5 rounded-[2rem] border border-white bg-[#fffdf8] px-6 py-6 shadow-[0_24px_70px_rgba(11,31,58,0.2)] sm:px-8 sm:py-7 lg:absolute lg:bottom-[50px] lg:left-[4.5%] lg:mt-0 lg:w-[31%] lg:px-7 lg:py-6"
              >
                <Quote aria-hidden="true" className="h-9 w-9 text-primary" />
                <p className="-mt-3 font-display text-lg font-semibold leading-7 text-[#263d5e] sm:text-xl sm:leading-8 lg:text-[1.05rem] lg:leading-7 xl:text-lg">
                  <span className="mr-0.5 inline-block align-baseline text-[2em] font-black uppercase leading-none text-primary">
                    B
                  </span>
                  ooking the day is easy. The harder part is getting the room involved. We match the activity, pacing and
                  facilitation to your people so more of them genuinely join in.
                </p>
                <Button
                  type="button"
                  variant="hero"
                  size="xl"
                  className="mt-5 w-full px-6 lg:h-auto lg:px-5 lg:py-4 xl:px-7"
                  onClick={() => openPlanMyEvent("hero_primary")}
                >
                  Build My Team Experience <ArrowRight />
                </Button>
              </motion.blockquote>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Why organisers trust us</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                  Your team&apos;s time should not be the test run.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4c5e76]">
                  Thousands of event days have taught us where participation drops, what different groups need and
                  which practical details decide whether the room joins in.
                </p>
              </div>
              <div className="min-w-0">
                <div className="grid snap-x snap-mandatory auto-cols-[82%] grid-flow-col gap-3 overflow-x-auto pb-3 sm:auto-cols-[48%] lg:grid-flow-row lg:grid-cols-3 lg:overflow-visible">
                  {proofTestimonials.slice(1).map((testimonial) => (
                    <blockquote
                      key={testimonial.id}
                      className="snap-start rounded-[1.4rem] border border-[#dce6f3] bg-[#f7faff] p-5 shadow-sm"
                    >
                      <Quote className="h-5 w-5 text-primary" aria-hidden="true" />
                      <p className="mt-3 line-clamp-3 text-sm font-semibold leading-6 text-[#263b58]">
                        {testimonial.excerpt}
                      </p>
                      <footer className="mt-4 text-xs leading-5 text-[#66758b]">
                        <span className="font-black text-[#0b1f3a]">{testimonial.displayName ?? testimonial.name}</span>
                        {testimonial.company ? `, ${testimonial.company}` : ""}
                      </footer>
                    </blockquote>
                  ))}
                </div>
                {proofTestimonials[0] ? (
                  <blockquote className="relative mt-1 overflow-hidden rounded-[2rem] bg-[#0b1f3a] p-7 text-white shadow-xl sm:p-9">
                    <span className="absolute right-7 top-3 font-display text-8xl font-black leading-none text-[#ffd85d]/80">
                      “
                    </span>
                    <p className="relative max-w-[90%] text-xl font-semibold leading-8">
                      {proofTestimonials[0].excerpt}
                    </p>
                    <footer className="relative mt-5 border-t border-white/[0.15] pt-5 text-sm leading-6 text-white/70">
                      <span className="font-bold text-white">
                        {proofTestimonials[0].displayName ?? proofTestimonials[0].name}
                      </span>
                      {proofTestimonials[0].role ? `, ${proofTestimonials[0].role}` : ""}
                      {proofTestimonials[0].company ? `, ${proofTestimonials[0].company}` : ""}
                    </footer>
                  </blockquote>
                ) : null}
              </div>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[#dce6f3] bg-[#dce6f3] sm:grid-cols-2 lg:grid-cols-4">
              {proofMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.value} className="flex flex-col items-center bg-[#f7faff] p-6 text-center sm:p-8">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm"
                      style={{ backgroundColor: metric.accent }}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <p
                      className="mt-5 font-display text-4xl font-black tracking-[-0.04em] sm:text-5xl"
                      style={{ color: metric.accent }}
                    >
                      {metric.value}
                    </p>
                    <p className="mx-auto mt-3 max-w-[15rem] text-sm font-semibold leading-6 text-[#4c5e76]">
                      {metric.label}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#fbf7ed] py-20 sm:py-28">
          <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#f37468]/10 blur-3xl" />
          <div className="container relative mx-auto px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#e45f55]">The quiet cost of getting it wrong</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#0b1f3a] sm:text-7xl">
                  The wrong activity costs more than the quote.
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4c5e76]">
                  Most team events do not fail loudly. They fail quietly. Familiar groups stay together. A few
                  confident people carry the activity. Everyone else politely waits for it to end. Then the organiser
                  returns to work wondering whether all that time, budget and coordination changed anything.
                </p>
              </div>
              <div className="relative min-h-[410px] overflow-hidden sm:min-h-[500px]">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-14 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-[#f7cba9]/70 blur-[1px] sm:h-[25rem] sm:w-[25rem]"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-[8%] top-[16%] h-20 w-20 rounded-full border-2 border-[#e45f55]/20"
                />
                <img
                  src="/images/campaigns/team-building/thoughtful-organiser-cutout-v2.webp"
                  alt=""
                  width={1024}
                  height={1536}
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-0 h-[39rem] w-auto max-w-none -translate-x-1/2 object-contain object-top drop-shadow-[0_24px_28px_rgba(11,31,58,0.2)] sm:h-[47rem]"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-[0_18px_45px_rgba(11,31,58,0.14)] backdrop-blur-md sm:inset-x-8 sm:bottom-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e45f55]">The organiser&apos;s question</p>
                  <p className="mt-2 font-display text-xl font-black leading-7 text-[#0b1f3a]">
                    Will people actually want to join in?
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
              <div className="flex flex-col rounded-[2rem] bg-[#0b1f3a] p-7 text-white shadow-2xl sm:p-9">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f37468] text-white shadow-lg">
                  <TriangleAlert className="h-7 w-7" aria-hidden="true" />
                </span>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-[#ffd85d]">What is at risk</p>
                <ul className="mt-7 space-y-5">
                  {stakes.map((stake, index) => (
                    <li key={stake} className="flex gap-4">
                      <span className="font-display text-xl font-black text-[#f37468]">0{index + 1}</span>
                      <span className="leading-7 text-white/[0.78]">{stake}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto border-t border-white/[0.15] pt-7 text-lg font-semibold leading-8">
                  No activity can force chemistry. A better-fit experience can give more people a reason, a role and a
                  shared finish.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stakeMoments.map((moment) => {
                  const Icon = moment.icon;
                  return (
                    <figure
                      key={moment.marker}
                      className="group relative min-h-[290px] overflow-hidden rounded-[1.6rem] bg-[#0b1f3a] shadow-xl"
                    >
                      <img
                        src={cloudinaryImage(moment.image, { width: 700 })}
                        alt={moment.alt}
                        width={700}
                        height={520}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/35 to-transparent" />
                      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffd85d] text-[#0b1f3a]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <p className="mt-3 font-display text-xl font-black">{moment.title}</p>
                        <p className="mt-2 text-sm leading-6 text-white/75">{moment.copy}</p>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#0b1f3a] py-20 text-white sm:py-28">
          <div className="absolute -left-36 -top-36 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-48 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#f37468]/[0.15] blur-3xl" />
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffd85d]">Why Elluminate is different</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.96] tracking-[-0.035em] sm:text-6xl">
                Activity-first planning starts with the package. We start with the people who have to enjoy it.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/[0.68]">
                That changes what gets decided before you sign: the format, roles, pacing, venue fit, facilitation and
                fallback all follow the brief.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.35fr_0.92fr] lg:items-center">
              <article className="rounded-[2rem] border border-white/[0.08] bg-[#121a28] p-7 text-white/75 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f37468]">The common package-first approach</p>
                <h3 className="mt-4 font-display text-3xl font-black leading-tight text-white">
                  Choose a package. Hope the people fit.
                </h3>
                <ul className="mt-7 space-y-4">
                  {activityFirstApproach.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-white/50">
                      <XCircle className="mt-1 h-4 w-4 shrink-0 text-[#f37468]/80" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="relative overflow-hidden rounded-[2.25rem] bg-white p-7 text-[#0b1f3a] shadow-2xl ring-4 ring-[#ffd85d] sm:p-10">
                <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
                <p className="relative text-xs font-black uppercase tracking-[0.2em] text-primary">The Elluminate way</p>
                <h3 className="relative mt-4 font-display text-4xl font-black leading-[1.02]">
                  Make the experience fit the people
                </h3>
                <ul className="relative mt-8 space-y-4">
                  {elluminateApproach.map((item) => (
                    <li key={item} className="flex gap-3 font-semibold leading-7 text-[#40536d]">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="relative mt-8 border-t border-[#dce6f3] pt-7 text-lg font-black leading-8">
                  You do not just receive a game. You receive a direction you can explain, compare and confidently
                  confirm.
                </p>
              </article>

              <article className="rounded-[2rem] bg-[#ffd85d] p-6 text-[#0b1f3a] shadow-xl sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b1f3a]/55">Our expertise sequence</p>
                <div className="mt-5 space-y-3">
                  {planningFlow.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-3 rounded-2xl border border-[#0b1f3a]/10 bg-white/40 px-3 py-3"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] text-[#ffd85d]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h4 className="font-display text-base font-black">{item.title}</h4>
                      </div>
                    );
                  })}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#fffaf0] py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">The value behind our planning</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                You are not paying for one activity. You are paying for a day that works.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5e76]">
                The right activity still needs the right roles, pacing, facilitation, setup, scoring and fallback. We
                connect those decisions before event day, so you are not left stitching the experience together
                yourself.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {[
                { number: "01", title: "Before the event, we help shape", items: valueBefore, tone: "bg-white" },
                { number: "02", title: "Standard activity delivery includes", items: valueStandard, tone: "bg-[#eaf3ff]" },
                { number: "03", title: "Optional additions when needed", items: valueOptional, tone: "bg-[#fff0e8]" },
              ].map((column) => (
                <article key={column.number} className={`rounded-[2rem] border border-[#dce6f3] p-7 shadow-sm sm:p-8 ${column.tone}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-5xl font-black text-primary/[0.15]">{column.number}</span>
                    <span className="h-3 w-3 rounded-full bg-[#f37468]" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-black leading-tight text-[#0b1f3a]">{column.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {column.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-[#40536d]">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#0b1f3a] text-white shadow-2xl">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-7 sm:p-10">
                  <p className="font-display text-2xl font-black leading-9 sm:text-3xl">
                    Instead of piecing together the game, equipment, facilitation, scoring and event flow separately,
                    you have one connected activity scope.
                  </p>
                  <Button
                    type="button"
                    variant="hero"
                    size="xl"
                    className="mt-8 w-full sm:w-auto"
                    onClick={() => openPlanMyEvent("value_stack_primary")}
                  >
                    Build My Team Experience <ArrowRight />
                  </Button>
                </div>
                <div className="grid gap-px bg-white/[0.12] sm:grid-cols-3 lg:grid-cols-1">
                  {riskReducers.map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-white/[0.06] px-6 py-5 text-sm font-semibold">
                      <ShieldCheck className="h-5 w-5 shrink-0 text-[#ffd85d]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="activities" className="scroll-mt-24 bg-white py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Find the right direction</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                  You do not have to choose from 24 activities alone.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#4c5e76]">
                  Start with the kind of participation your team needs. These formats are useful starting points;
                  Elluminate can narrow the direction around your people, venue, timing and objective.
                </p>
                <p className="mt-5 max-w-2xl rounded-2xl border-l-4 border-[#ffd85d] bg-[#fffaf0] px-5 py-4 text-sm font-semibold leading-6 text-[#40536d]">
                  Not sure whether the group needs indoor, outdoor, high-energy, lower-intensity or virtual? That is a
                  planning question, not homework for you.
                </p>
              </div>
              <div className="flex flex-wrap gap-2" aria-label="Filter activity formats">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActivityFilter(filter)}
                    aria-pressed={activityFilter === filter}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
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

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredActivities.map((activity) => (
                <ExperienceCard key={activity.slug} slug={activity.slug} variant="featured" />
              ))}
            </div>

            <div className="mt-16 rounded-[2.25rem] border border-[#dce6f3] bg-[#fbf7ed] p-6 shadow-sm sm:p-9">
              <div className="mx-auto max-w-4xl text-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">The full collection</p>
                  <h3 className="mt-3 font-display text-3xl font-black text-[#0b1f3a] sm:text-5xl">
                    24 team-building experiences. One brief to narrow them down.
                  </h3>
                  <p className="mx-auto mt-4 max-w-3xl leading-7 text-[#4c5e76]">
                    Explore 12 story-led physical experiences, 4 equipment activities and 8 virtual experiences. You
                    can browse every format, or send the brief without choosing one first.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openPlanMyEvent("full_catalogue_help", "Help me narrow it down")}
                  className="mt-6 inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-primary px-6 font-bold text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Help me narrow it down <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {catalogueGroups.map((group) => {
                  const Icon = group.icon;
                  const visibleItems = group.items.slice(0, 4);
                  const hiddenItems = group.items.slice(4);
                  return (
                  <article
                    key={group.title}
                    className={`flex h-full flex-col items-center rounded-[1.75rem] border p-6 text-center ${group.tone}`}
                  >
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-sm"
                      style={{ backgroundColor: group.accent }}
                    >
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h4 className="mt-5 font-display text-xl font-black text-foreground">{group.title}</h4>
                    <p className="mt-3 min-h-12 text-sm leading-6 text-[#5d6e84]">{group.description}</p>
                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      {visibleItems.map((item) => (
                        <Link
                          key={item.slug}
                          to={`/services/${item.slug}`}
                          className="rounded-full border border-foreground/10 bg-background px-3 py-1.5 text-xs font-semibold text-foreground/75 transition hover:border-primary/[0.35] hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    {hiddenItems.length > 0 ? (
                      <details className="group/details mt-5 w-full border-t border-foreground/10 pt-4">
                        <summary
                          className="cursor-pointer list-none text-sm font-black"
                          style={{ color: group.accent }}
                        >
                          View all {group.items.length}
                        </summary>
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                          {hiddenItems.map((item) => (
                            <Link
                              key={item.slug}
                              to={`/services/${item.slug}`}
                              className="rounded-full border border-foreground/10 bg-background px-3 py-1.5 text-xs font-semibold text-foreground/75 transition hover:border-primary/[0.35] hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <p className="mt-5 border-t border-foreground/10 pt-4 text-sm font-black" style={{ color: group.accent }}>
                        All {group.items.length} shown
                      </p>
                    )}
                  </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0b1f3a] py-20 text-white sm:py-28">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#ffd85d]/10 blur-3xl" />
          <div className="container relative mx-auto px-6 lg:px-12">
            <div className="relative mx-auto max-w-[96rem] xl:min-h-[24rem]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-5 -left-16 hidden h-[24rem] w-[19rem] overflow-hidden xl:block 2xl:left-0"
              >
                <img
                  src="/images/campaigns/team-building/energetic-adventure-man-cutout-v1.webp"
                  alt=""
                  width={583}
                  height={827}
                  loading="lazy"
                  decoding="async"
                  className="absolute bottom-0 left-0 h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_22px_28px_rgba(0,0,0,0.28)]"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-5 -right-16 hidden h-[24rem] w-[19rem] overflow-hidden xl:block 2xl:right-0"
              >
                <img
                  src="/images/campaigns/team-building/energetic-adventure-woman-cutout-v1.webp"
                  alt=""
                  width={502}
                  height={792}
                  loading="lazy"
                  decoding="async"
                  className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_22px_28px_rgba(0,0,0,0.28)]"
                />
              </div>

              <div className="relative z-10 mx-auto max-w-4xl text-center xl:pt-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffd85d]">Real event moments</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-6xl">
                  What good participation looks like is different for every team.
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/[0.68]">
                  An outdoor race, an indoor investigation, a station challenge and a virtual session should not
                  create the same kind of energy. The proof is in whether people have a clear way to join in.
                </p>
                <Link
                  to="/portfolio"
                  className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-6 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ffd85d]"
                >
                  Explore the portfolio <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none relative mx-auto mt-7 h-72 w-56 overflow-hidden xl:hidden"
              >
                <img
                  src="/images/campaigns/team-building/energetic-adventure-woman-cutout-v1.webp"
                  alt=""
                  width={502}
                  height={792}
                  loading="lazy"
                  decoding="async"
                  className="absolute bottom-0 left-1/2 h-[18rem] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_18px_24px_rgba(0,0,0,0.24)]"
                />
              </div>
            </div>

            <div className="mt-8 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 xl:mt-10">
              {gallery.map((item, index) => (
                <figure
                  key={item.src}
                  className={`group relative overflow-hidden rounded-[1.6rem] ${
                    index === 0
                      ? "sm:row-span-2 lg:col-span-2"
                      : index === 3
                        ? "lg:col-span-2"
                        : ""
                  }`}
                >
                  <img
                    src={cloudinaryImage(item.src, { width: index === 0 ? 1200 : 760 })}
                    alt={item.alt}
                    width={index === 0 ? 1200 : 760}
                    height={index === 0 ? 960 : 560}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/90 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-bold text-white">{item.caption}</figcaption>
                </figure>
              ))}
            </div>

          </div>
        </section>

        <ClientTestimonialsCarousel
          theme="dark"
          eyebrow="What organisers said afterwards"
          heading="Proof from people who watched the room join in"
          description="Real feedback from clients who trusted the team with their event."
          orderingSeed="team-building-client-stories"
        />

        <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Is Elluminate right for your event?</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                Elluminate is for organisers who want the whole experience handled properly.
              </h2>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[2rem] bg-[#0b1f3a] p-7 text-white shadow-xl sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#5ee5ad]">You are a strong fit if</p>
                <ul className="mt-7 space-y-4">
                  {strongFit.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-white/[0.78]">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#5ee5ad]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-[2rem] border border-[#efd9d5] bg-[#faf6f4] p-7 shadow-sm sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e45f55]">We may not be the right fit if</p>
                <ul className="mt-7 space-y-5">
                  {differentFit.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-[#40536d]">
                      <XCircle className="mt-1 h-5 w-5 shrink-0 text-[#f37468]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <p className="mx-auto mt-7 max-w-4xl rounded-2xl bg-[#eef7f4] px-6 py-5 text-center text-base font-bold leading-7 text-[#244b43]">
              If you only need equipment, there are simpler options. If you need the day to work for the people in it,
              we should talk.
            </p>

            <div className="mx-auto mt-16 max-w-5xl">
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details key={faq.question} className="group overflow-hidden rounded-2xl border border-[#dce6f3] bg-white open:bg-[#f7faff]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-display text-lg font-black text-[#0b1f3a] sm:px-7">
                      <span className="flex items-start gap-4">
                        <span className="mt-0.5 text-xs font-black tracking-[0.18em] text-primary">{String(index + 1).padStart(2, "0")}</span>
                        {faq.question}
                      </span>
                      <ChevronRight className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-90 motion-reduce:transition-none" />
                    </summary>
                    <p className="border-t border-[#dce6f3] px-5 py-5 leading-7 text-[#4c5e76] sm:px-7">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden bg-[#f7faff] py-20 sm:py-28">
          <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="container relative mx-auto px-6 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.48fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">How it works</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                  From rough brief to a team-building event you can confirm
                </h2>
              </div>
              <div className="relative mx-auto h-[20rem] w-full max-w-md overflow-hidden lg:-ml-28 lg:h-[25rem] lg:w-[calc(100%+7rem)] lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#dcecff] lg:h-72 lg:w-72"
                />
                <img
                  src="/images/campaigns/team-building/planning-facilitator-cutout-v1.webp"
                  alt=""
                  width={1536}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[-2rem] left-1/2 h-[21rem] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_26px_rgba(11,31,58,0.16)] lg:bottom-[-3.5rem] lg:left-auto lg:right-[-3.5rem] lg:h-[28rem] lg:translate-x-0"
                />
              </div>
            </div>
            <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
              <div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-primary via-[#ffd85d] to-[#f37468] lg:block" />
              {processSteps.map((step, index) => (
                <article key={step.title} className="relative rounded-[2rem] border border-[#dce6f3] bg-white p-7 shadow-sm sm:p-8">
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#0b1f3a] font-display text-xl font-black text-[#ffd85d] ring-8 ring-[#f7faff]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-black text-[#0b1f3a]">{step.title}</h3>
                  <p className="mt-4 leading-7 text-[#4c5e76]">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="relative isolate overflow-hidden bg-[#0b1f3a] px-6 py-20 text-white sm:py-28 lg:px-12">
          <div className="absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -right-28 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#f37468]/20 blur-3xl" />
          <div className="container mx-auto text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ffd85d] text-[#0b1f3a] shadow-xl">
              <ClipboardCheck className="h-7 w-7" />
            </span>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-[#ffd85d]">
              Before the calendar makes the decisions for you
            </p>
            <h2 className="mx-auto mt-5 max-w-5xl font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-6xl">
              Waiting does not make the plan easier. It leaves you with fewer good options.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/[0.7]">
              Share the brief while there is still room to match the activity to your people, compare suitable formats,
              solve venue fit and protect the flow before event day.
            </p>

            <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-white/[0.14] bg-white/[0.08] p-6 text-left backdrop-blur-sm sm:p-8">
              <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-[#ffd85d]">
                What you get from the first enquiry
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {enquiryValue.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.07] p-4 text-sm font-semibold leading-6 text-white/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#5ee5ad]" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="mx-auto mt-7 max-w-3xl text-base font-semibold leading-7 text-white/70">
              One brief connects the activity, participation plan, venue fit, facilitation and quote.
            </p>
            <p className="mx-auto mt-4 max-w-3xl font-display text-xl font-black leading-8 text-white">
              Bring us the brief. We will shape the whole experience around your team.
            </p>
            <Button
              type="button"
              variant="hero"
              size="xl"
              className="mt-8 w-full sm:w-auto"
              onClick={() => openPlanMyEvent("final_primary")}
            >
              Build My Team Experience <ArrowRight />
            </Button>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-[0.78fr_1.44fr_0.78fr] sm:gap-4">
              <figure className="overflow-hidden rounded-[1.5rem] border-4 border-white/10 bg-white/5 sm:rotate-[-2deg]">
                <img
                  src={cloudinaryImage("/images/services/battle-of-the-olympians/gallery-3.jpg", { width: 560 })}
                  alt="Colleagues laughing during an energetic team challenge"
                  width={560}
                  height={560}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover"
                />
              </figure>
              <figure className="col-span-2 overflow-hidden rounded-[1.5rem] border-4 border-white/10 bg-white/5 sm:col-span-1">
                <img
                  src={cloudinaryImage("/images/services/amazing-race/testimonial.jpg", { width: 900 })}
                  alt="Large company team gathered together after an Amazing Race experience"
                  width={900}
                  height={600}
                  loading="lazy"
                  className="aspect-[3/2] h-full w-full object-cover"
                />
              </figure>
              <figure className="overflow-hidden rounded-[1.5rem] border-4 border-white/10 bg-white/5 sm:rotate-[2deg]">
                <img
                  src={cloudinaryImage("/images/services/builder-cross/gallery-5.jpg", { width: 560 })}
                  alt="Team smiling proudly beside the structure they completed"
                  width={560}
                  height={700}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover object-[50%_35%]"
                />
              </figure>
            </div>
          </div>
        </section>
      </main>

      <Footer
        topActivityLinks={teamBuildingFooterLinks}
        bottomNote="Corporate team building, retreats, and training experiences in Singapore."
      />
    </div>
  );
};

export default TeamBuildingHubPage;
