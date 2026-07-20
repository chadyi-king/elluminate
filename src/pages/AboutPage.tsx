import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { OurTeam } from "@/components/OurTeam";
import { SEO } from "@/components/SEO";
import { getRouteSeo } from "@/data/seoRoutes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OrganizationSchema } from "@/components/StructuredData";
import { useContactModal } from "@/contexts/ContactModalContext";
import {
  Target,
  Eye,
  Heart,
  Sparkles,
  Award,
  Zap,
  Users,
  Lightbulb,
  Mic,
  Star,
  Quote,
  Rocket,
  Globe,
  ArrowRight,
} from "lucide-react";

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(end);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!startOnView || isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [end, duration, isInView, startOnView]);

  return { count, ref };
};

// Values (CALEBE without spelling it out)
const values = [
  {
    name: "Creative",
    icon: Lightbulb,
    description: "Ideas shaped around the people, purpose, and setting",
    details:
      "We use the event brief to decide where creative detail will improve participation, clarity, or the overall flow.",
  },
  {
    name: "Authentic",
    icon: Heart,
    description: "Participation that feels human rather than forced",
    details:
      "We plan for different personalities and energy levels so more people have a sensible way to take part.",
  },
  {
    name: "Lasting",
    icon: Globe,
    description: "A clear shared experience people can refer back to",
    details:
      "The event should have a clear opening, meaningful participation, and a finish that gives the group a shared reference point.",
  },
  {
    name: "Exceptional",
    icon: Award,
    description: "Careful attention to the operating details",
    details: "We surface venue, timing, setup, facilitation, and logistics questions before they become event-day surprises.",
  },
  {
    name: "Boundless",
    icon: Rocket,
    description: "Flexible thinking within a practical event plan",
    details:
      "We explore what is possible within the available time, venue, group profile, scope, and operating requirements.",
  },
  {
    name: "Eccentric",
    icon: Sparkles,
    description: "Enough personality to make the experience feel distinct",
    details:
      "Themes, challenges, and facilitation can bring character to the event without losing sight of the people attending.",
  },
];

const features = [
  {
    icon: Users,
    title: "Start With the Event Brief",
    description:
      "Group size, venue, timing, participant profile, and objective guide the activity direction from the beginning.",
  },
  {
    icon: Lightbulb,
    title: "Choose the Format Around the Audience",
    description:
      "Physical, virtual, retreat, and workshop formats each suit different people, settings, and internal goals.",
  },
  {
    icon: Mic,
    title: "Plan the Facilitation and Flow",
    description:
      "Briefing, team allocation, pacing, scoring, transitions, and the close are considered as one event experience.",
  },
  {
    icon: Sparkles,
    title: "Discuss the Practical Details Early",
    description:
      "Venue fit, setup, weather considerations, timing, and logistics are easier to solve before the final format is confirmed.",
  },
];

// TODO(content): Keep a permission/evidence checklist for client logo usage before adding or restoring brand proof.
const allClientLogos = [
  {
    name: "DBS",
    logo: "/images/client-logos/dbs_bank_logo_p1zixs.png",
  },
  {
    name: "OCBC",
    logo: "/images/client-logos/logo-ocbc.svg_khvach.png",
  },
  {
    name: "UOB",
    logo: "/images/client-logos/uob_logo_n4hrvh.png",
  },
  {
    name: "Singtel",
    logo: "/images/client-logos/singtel_logo_nmsek6.svg",
  },
  {
    name: "Grab",
    logo: "/images/client-logos/grab-logo_h3i5lc.jpg",
  },
  {
    name: "Shopee",
    logo: "/images/client-logos/shopee-logo_sce8bs_r7xa9k.png",
  },
  {
    name: "NTUC",
    logo: "/images/client-logos/ntuc_logo_v2xyjl.png",
  },
  {
    name: "GovTech",
    logo: "/images/client-logos/govtech_logo_lctwtl.png",
  },
  {
    name: "Sentosa",
    logo: "/images/client-logos/sentosa-logo_pcriws.webp",
  },
  {
    name: "SP Group",
    logo: "/images/client-logos/sp_group_logo_zbi2wt.svg",
  },
  {
    name: "SMRT",
    logo: "/images/client-logos/smrt_logo_hdwk9d.png",
  },
  {
    name: "Prudential",
    logo: "/images/client-logos/prudentialgroup_logo_keiccj.png",
  },
  {
    name: "Marina Bay Sands",
    logo: "/images/client-logos/marina_bay_sands_logo_hx5ui7.png",
  },
  {
    name: "CapitaLand",
    logo: "/images/client-logos/capitaland_logo_lswm7l.png",
  },
  {
    name: "Singapore Airlines",
    logo: "/images/client-logos/singapore-airlines-logo_jzs3bh_mngdzj.png",
  },
  {
    name: "Changi Airport",
    logo: "/images/client-logos/changi_logo_uwhp7y.svg",
  },
  {
    name: "StarHub",
    logo: "/images/client-logos/starhub_logo_cdoeat.svg",
  },
  {
    name: "M1",
    logo: "/images/client-logos/m1_logo_mbjg9i.svg",
  },
  {
    name: "POSB",
    logo: "/images/client-logos/posb_logo_eiozw9.png",
  },
  {
    name: "Great Eastern",
    logo: "/images/client-logos/great_eastern_logo_ice1ox.png",
  },
  {
    name: "AIA",
    logo: "/images/client-logos/aia-logo_x4n6n4.png",
  },
  {
    name: "HSBC",
    logo: "/images/client-logos/hsbc-logo_clxve1_hjk23e.png",
  },
  {
    name: "Standard Chartered",
    logo: "/images/client-logos/standard_chartered_logo_u1hs4g.png",
  },
  {
    name: "Maybank",
    logo: "/images/client-logos/maybank_logo_glhtjo.png",
  },
];

const approvedClientLogoNames = new Set([
  "DBS",
  "Singtel",
  "GovTech",
  "CapitaLand",
  "Singapore Airlines",
  "Changi Airport",
]);

const clientLogos = allClientLogos.filter((client) => approvedClientLogoNames.has(client.name));

const testimonials = [
  {
    quote: "All of us had a real fun blast and we have nothing but good things to say about the facilitators and the games!",
    company: "Darren Tey, Operations Manager at Lonza",
    logo: "/logo.png",
  },
  {
    quote: "All our different departments have enjoyed the activities, from our newest members to our management teams.",
    company: "Farzanah Begum, Senior Officer for Development and Engagement at SIMTech",
    logo: "/logo.png",
  },
];

const AboutPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const eventsCounter = useCountUp(1000, 2500);
  const participantsCounter = useCountUp(100000, 3000);
  const reviewsCounter = useCountUp(800, 2000);
  const yearsCounter = useCountUp(8, 1500);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SEO
        {...getRouteSeo("/about")}
        keywords="about Elluminate, Singapore team building company, school programmes Singapore, training workshops Singapore"
      />
      <OrganizationSchema />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      {/* SECTION 1 - HERO BANNER - Dynamic Split Layout */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 pb-16">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-background to-sky-500/[0.06]" />
        <FloatingBlobs opacity={0.08} className="z-0" />

        {/* Large lightbulb watermark */}
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none z-0">
          <Lightbulb className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] text-primary" strokeWidth={0.5} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-primary text-sm tracking-[0.3em] uppercase font-display mb-4"
              >
                About Elluminate
              </motion.p>

              {/* Gradient accent bar */}
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-sky-400 to-primary rounded-full mb-6" />

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1] tracking-tight"
              >
                <span className="text-foreground">Where Teams</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-sky-400 to-primary bg-clip-text text-transparent">
                  Come Alive
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-muted-foreground/90 font-sans mb-8 max-w-md leading-relaxed"
              >
                We plan team building and company experiences around the people attending, the event objective, the
                venue, and the time available.
              </motion.p>

              {/* Stats Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {[
                  { value: "1000+", label: "Events" },
                  { value: "100,000+", label: "Participants" },
                  { value: "8+", label: "Years" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 shadow-sm"
                  >
                    <span className="text-lg font-display font-bold text-primary">{stat.value}</span>
                    <span className="text-xs text-muted-foreground font-sans">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <p className="mb-8 max-w-xl text-xs leading-5 text-muted-foreground">
                Cumulative figures shown across Team Elevate and Elluminate under EXSTATIC PTE LTD, as at July 2026.
              </p>

              <motion.button
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-sky-500 text-primary-foreground font-display font-medium text-sm tracking-wider rounded-full shadow-blue hover:shadow-blue-intense transition-all duration-500 group"
                onClick={openContactModal}
              >
                Plan My Event
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right Side - Photo Collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative h-[400px] md:h-[500px] lg:h-[550px] hidden md:block"
            >
              {/* Main large photo */}
              <motion.div
                className="absolute top-0 right-0 w-[65%] h-[65%] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 z-20"
                whileHover={{ scale: 1.02, rotate: 0 }}
                initial={{ rotate: 2 }}
                animate={{ rotate: 2 }}
              >
                <img src="/images/services/amazing-race/gallery-1.jpg" alt="Company team completing an outdoor challenge" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>

              {/* Bottom-left photo */}
              <motion.div
                className="absolute bottom-4 left-0 w-[50%] h-[50%] rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 z-30"
                whileHover={{ scale: 1.02, rotate: 0 }}
                initial={{ rotate: -3 }}
                animate={{ rotate: -3 }}
              >
                <img
                  src="/images/services/csi-bones/gallery-1.jpg"
                  alt="Corporate group examining clues during an indoor activity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent" />
              </motion.div>

              {/* Top-left smaller photo */}
              <motion.div
                className="absolute top-8 left-[5%] w-[40%] h-[35%] rounded-xl overflow-hidden shadow-lg border-2 border-white/20 z-10"
                whileHover={{ scale: 1.02, rotate: 0 }}
                initial={{ rotate: -2 }}
                animate={{ rotate: -2 }}
              >
                <img src="/images/services/cultural-race/gallery-5.jpg" alt="Team members at a Cultural Race checkpoint" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent" />
              </motion.div>

              {/* Bottom-right accent photo */}
              <motion.div
                className="absolute bottom-0 right-[5%] w-[35%] h-[30%] rounded-xl overflow-hidden shadow-lg border-2 border-white/20 z-10"
                whileHover={{ scale: 1.02, rotate: 0 }}
                initial={{ rotate: 3 }}
                animate={{ rotate: 3 }}
              >
                <img src="/images/services/overseas-retreats/gallery-1.jpg" alt="Company retreat group experience" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-500/15 to-transparent" />
              </motion.div>

              {/* Decorative glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-primary/15 to-sky-400/15 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* SECTION 2 - OUR STORY */}
      <section className="py-24 relative">
        {/* Background Image - Asian corporate setting */}
        <div className="absolute inset-0">
          <img src="/images/services/amazing-race/gallery-4.jpg" alt="Corporate team-building event" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-2">Our Story</h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-primary-ember mb-8" />

              <div className="space-y-5 text-muted-foreground font-sans leading-relaxed">
                <p>
                  Elluminate is the team-building and company-experiences brand operated by EXSTATIC PTE LTD alongside
                  Team Elevate.
                </p>
                <p>
                  Team Elevate carries the earlier operating history. Elluminate builds on that experience with a
                  clearer focus on planning team activities around the people, purpose, venue, and timing.
                </p>
                <p>
                  Across the shared Team Elevate and Elluminate history, the team has delivered{" "}
                  <span className="text-primary font-medium">1,000+ events</span> involving more than{" "}
                  <span className="text-primary font-medium">100,000 participants</span>. Historical reviews and event
                  evidence are labelled with their original Team Elevate attribution.
                </p>
              </div>
            </motion.div>

            {/* Image Column - Asian team celebration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-sky-500/20 shadow-blue">
                <img
                  src="/images/services/minute-to-win-it/gallery-3.jpg"
                  alt="Participants during an indoor station activity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-transparent to-primary/15 blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* SECTION 3 - MISSION, VISION & VALUES */}
      <section className="py-24 relative bg-slate-950">
        {/* Background */}
        <div className="absolute inset-0">
          <img src="/images/services/cultural-race/gallery-6.jpg" alt="Team activity background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Mission, Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-slate-900/80 backdrop-blur-md border border-white/15 rounded-2xl p-8 hover:border-sky-400/40 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-sky-500 flex items-center justify-center mb-5 shadow-blue">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-3">Our Mission</h3>
                  <p className="text-slate-200 font-sans leading-relaxed mb-3">
                    To help organisations plan team experiences that fit the people attending and the practical reality
                    of the event.
                  </p>
                  <p className="text-slate-300/80 font-sans text-sm leading-relaxed">
                    We connect activity direction, facilitation, venue fit, timing, and logistics in one clear planning
                    conversation.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative bg-slate-900/80 backdrop-blur-md border border-white/15 rounded-2xl p-8 hover:border-sky-400/40 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-sky-500 flex items-center justify-center mb-5 shadow-blue">
                    <Eye className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-3">Our Vision</h3>
                  <p className="text-slate-200 font-sans leading-relaxed mb-3">
                    To make company team building easier to choose, explain internally, and run with confidence.
                  </p>
                  <p className="text-slate-300/80 font-sans text-sm leading-relaxed">
                    We want planners to understand why a format fits their group before the event is confirmed, not
                    after everyone arrives.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Values Section - Without CALEBE title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                  Our <span className="text-primary">Values</span>
                </h3>
                <p className="text-slate-200 font-sans max-w-xl mx-auto text-sm">
                  These are the principles that guide how we craft every experience for you.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {values.map((value, index) => (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group relative bg-slate-950/90 backdrop-blur-md border border-white/15 rounded-xl p-5 hover:border-sky-400/40 hover:shadow-blue transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-sky-500 flex items-center justify-center shadow-blue">
                          <value.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <h4 className="text-lg font-display font-bold text-white">{value.name}</h4>
                      </div>
                      <p className="text-sky-200 font-sans text-sm mb-2">{value.description}</p>
                      <p className="text-slate-300/80 font-sans text-xs leading-relaxed">{value.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* OUR TEAM SECTION */}
      <OurTeam />

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* SECTION 4 - WHAT MAKES US DIFFERENT */}
      <section className="py-24 relative">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/services/csi-bones/gallery-2.jpg"
            alt="Facilitated company team activity"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/95" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              What Makes Us <span className="text-primary">Different</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/75 backdrop-blur-sm border border-sky-500/15 rounded-xl p-6 hover:border-sky-500/35 hover:shadow-blue transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-sky-500 flex items-center justify-center mb-4 shadow-blue group-hover:shadow-blue-intense transition-shadow duration-500">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground/80 font-sans text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* SECTION 5 - IMAGE STRIP */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/70 to-white">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              A Glimpse <span className="text-primary">Behind The Scenes</span>
            </h2>
            <p className="text-muted-foreground/80 font-sans text-sm md:text-base leading-relaxed">
              From high-energy team building and training to school programmes and retreats, our work is designed to
              feel engaging in the moment and memorable after it ends.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {
                src: "/images/services/amazing-race/gallery-1.jpg",
                alt: "Outdoor team challenge",
              },
              {
                src: "/images/services/csi-bones/gallery-1.jpg",
                alt: "Indoor investigation activity",
              },
              {
                src: "/images/services/minute-to-win-it/gallery-3.jpg",
                alt: "Indoor station challenge",
              },
              {
                src: "/images/services/monopoly-dash/gallery-2.jpg",
                alt: "Facilitated beach activity",
              },
            ].map((image, index) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-sky-500/15 bg-white/70 shadow-sm"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* SECTION 6 - KEY METRICS */}
      <section className="py-24 relative bg-gradient-to-br from-primary/[0.08] via-primary/[0.03] to-transparent">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/services/amazing-race/gallery-4.jpg"
            alt="Company event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              ref={eventsCounter.ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-semibold text-primary mb-2">
                {eventsCounter.count.toLocaleString()}+
              </div>
              <p className="text-muted-foreground/80 font-sans text-sm">Cumulative Events</p>
            </motion.div>

            <motion.div
              ref={participantsCounter.ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-semibold text-primary mb-2">
                {participantsCounter.count.toLocaleString()}+
              </div>
              <p className="text-muted-foreground/80 font-sans text-sm">Cumulative Participants</p>
            </motion.div>

            <motion.div
              ref={reviewsCounter.ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-semibold text-primary mb-2 flex items-center justify-center gap-2">
                4.8 <Star className="w-8 h-8 fill-primary text-primary" />
              </div>
              <p className="text-muted-foreground/80 font-sans text-sm">{reviewsCounter.count}+ Team Elevate Reviews</p>
              <p className="text-muted-foreground/60 font-sans text-xs italic mt-1">
                via{" "}
                <a
                  href="https://www.google.com/search?q=team+elevate+singapore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Team Elevate
                </a>
              </p>
            </motion.div>

            <motion.div
              ref={yearsCounter.ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-semibold text-primary mb-2">
                {yearsCounter.count}+
              </div>
              <p className="text-muted-foreground/80 font-sans text-sm">Years of Shared Operating History</p>
            </motion.div>
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-5 text-muted-foreground">
            Cumulative Team Elevate and Elluminate history under EXSTATIC PTE LTD, as at July 2026. Google reviews
            remain attributed to their original Team Elevate source.
          </p>
        </div>
      </section>

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* SECTION 6 - CLIENT LOGOS CAROUSEL */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services/cultural-race/gallery-5.jpg"
            alt="Company team activity"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/95" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-3">
              Selected Organisations From Our <span className="text-primary">Shared Event History</span>
            </h2>
          </motion.div>

          {/* Infinite Logo Carousel */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -100 * clientLogos.length] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-28 h-16 bg-white/75 backdrop-blur-sm border border-sky-500/15 rounded-lg p-3 flex items-center justify-center hover:border-sky-500/35 transition-all duration-500"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-all duration-500 filter sepia saturate-[3] hue-rotate-[15deg] brightness-[0.85] hover:sepia-0 hover:saturate-100 hover:hue-rotate-0 hover:brightness-100"
                  />
                </div>
              ))}
            </motion.div>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-muted-foreground">
            Selected organisation history across Team Elevate and Elluminate under EXSTATIC PTE LTD.
          </p>
        </div>
      </section>

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* SECTION 7 - TESTIMONIALS */}
      <section className="py-24 relative bg-slate-950">
        <div className="absolute inset-0">
          <img src="/images/services/minute-to-win-it/gallery-4.jpg" alt="Facilitated company activity" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
              What Teams Said Through <span className="text-primary">Team Elevate</span>
            </h2>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="relative overflow-hidden min-h-[250px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.company}-${index}`}
                  initial={false}
                  animate={{
                    opacity: currentTestimonial === index ? 1 : 0,
                    scale: currentTestimonial === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 ${currentTestimonial === index ? "block" : "hidden"}`}
                >
                  <div className="bg-slate-900/80 backdrop-blur-md border border-white/15 rounded-xl p-8 text-center h-full flex flex-col justify-center">
                    <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" />
                    <p className="text-lg md:text-xl text-white font-sans leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white border border-white/20 p-2 flex items-center justify-center">
                        <img
                          src={testimonial.logo}
                          alt={testimonial.company}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <span className="text-sky-200 font-display font-medium text-sm">{testimonial.company}</span>
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      Originally published by Team Elevate
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-1.5 mt-6 flex-wrap max-w-lg mx-auto">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? "bg-primary w-5" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Credibility Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/15 via-primary/25 to-primary/15 border border-primary/30 rounded-xl p-6 text-center max-w-md mx-auto"
          >
            <div className="flex items-center justify-center gap-1.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg font-display font-medium text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              800+ Team Elevate Reviews | 4.8 Google Rating
            </p>
            <p className="text-xs md:text-sm text-white/80 italic mt-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Original review source:{" "}
              <a
                href="https://www.google.com/search?q=team+elevate+singapore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Team Elevate
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* SECTION 8 - FINAL CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services/amazing-race/gallery-1.jpg"
            alt="Company team-building event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-primary/25 via-primary/10 to-transparent blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl font-display font-medium text-foreground mb-4">
              Ready to Plan Your Next <span className="text-primary">Company Experience</span>?
            </h2>
            <p className="text-muted-foreground/80 font-sans mb-8">
              Whether you are planning team building, a workshop, or a retreat, start with the people, objective,
              venue, and timing.
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-sky-500 text-primary-foreground font-display font-medium tracking-wider rounded-full shadow-blue hover:shadow-blue-intense hover:bg-background hover:text-primary border border-transparent hover:border-primary transition-all duration-500"
              onClick={openContactModal}
            >
              Plan My Event
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
