import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { OurTeam } from "@/components/OurTeam";
import { SEO } from "@/components/SEO";
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

// Import generated event photos
import teamCelebration from "@/assets/events/team-celebration-1.jpg";
import dinnerDance from "@/assets/events/dinner-dance-1.jpg";
import teamBuildingOutdoor from "@/assets/events/team-building-outdoor-1.jpg";
import overseasRetreat from "@/assets/events/overseas-retreat-1.jpg";

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
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
    description: "Cinematic, memorable concepts that tell your brand's story",
    details:
      "We approach every event as a blank canvas, designing experiences that are visually stunning, emotionally resonant, and uniquely tailored to your objectives.",
  },
  {
    name: "Authentic",
    icon: Heart,
    description: "Genuine human connection at the heart of every experience",
    details:
      "We believe the best events create real moments between real people. Our facilitation style prioritizes authentic interactions over scripted activities.",
  },
  {
    name: "Lasting",
    icon: Globe,
    description: "Enduring impact that extends far beyond the event day",
    details:
      "The measure of a great event isn't just the applause at the end—it's the conversations that happen weeks later.",
  },
  {
    name: "Exceptional",
    icon: Award,
    description: "Flawless execution and premium quality in every detail",
    details: "From the first handshake to the final farewell, every touchpoint is crafted to exceed expectations.",
  },
  {
    name: "Boundless",
    icon: Rocket,
    description: "Whatever you dream, we deliver—no limits, no boundaries",
    details:
      "We don't believe in 'impossible.' Whether it's transforming a warehouse into a tropical paradise or orchestrating a 5,000-person conference, we bring any idea to life.",
  },
  {
    name: "Eccentric",
    icon: Sparkles,
    description: "A splash of creative fun and uniqueness in every event",
    details:
      "We embrace the unexpected. Our events have personality—surprise moments, playful twists, and delightful details.",
  },
];

const features = [
  {
    icon: Users,
    title: "Team Building That Actually Works",
    description:
      "We design activities that go beyond icebreakers. Every game, challenge, and debrief is built to strengthen real team dynamics and communication.",
  },
  {
    icon: Lightbulb,
    title: "Training With Real Takeaways",
    description:
      "Our MBTI, DISC, and workshop sessions are practical, interactive, and tailored to your team's growth areas. No death-by-PowerPoint.",
  },
  {
    icon: Mic,
    title: "Experienced Facilitators, Not Just Hosts",
    description:
      "Our facilitators are trained to read the room, adapt on the fly, and bring out the best in every participant.",
  },
  {
    icon: Sparkles,
    title: "Customised to Your Team's Needs",
    description:
      "No two teams are the same. We tailor every programme to your objectives, group size, and team culture.",
  },
];

const clientLogos = [
  {
    name: "DBS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/DBS_Bank_Logo.svg/400px-DBS_Bank_Logo.svg.png",
  },
  {
    name: "OCBC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/OCBC_Bank_logo.svg/400px-OCBC_Bank_logo.svg.png",
  },
  {
    name: "UOB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/UOB_Logo.svg/400px-UOB_Logo.svg.png",
  },
  {
    name: "Singtel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Singtel_logo_2021.svg/400px-Singtel_logo_2021.svg.png",
  },
  {
    name: "Grab",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Grab_Logo.svg/400px-Grab_Logo.svg.png",
  },
  { name: "Shopee", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/400px-Shopee.svg.png" },
  {
    name: "NTUC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/NTUC_FairPrice_logo.svg/400px-NTUC_FairPrice_logo.svg.png",
  },
  {
    name: "GovTech",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/GovTech_Singapore_Logo.svg/400px-GovTech_Singapore_Logo.svg.png",
  },
  {
    name: "Sentosa",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Sentosa_logo.svg/400px-Sentosa_logo.svg.png",
  },
  {
    name: "SP Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/SP_Group_logo.svg/400px-SP_Group_logo.svg.png",
  },
  {
    name: "SMRT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SMRT_Corporation_Logo.svg/400px-SMRT_Corporation_Logo.svg.png",
  },
  {
    name: "Prudential",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Prudential_plc_logo.svg/400px-Prudential_plc_logo.svg.png",
  },
  {
    name: "Marina Bay Sands",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Marina_Bay_Sands_Logo.svg/400px-Marina_Bay_Sands_Logo.svg.png",
  },
  {
    name: "CapitaLand",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/CapitaLand_logo.svg/400px-CapitaLand_logo.svg.png",
  },
  {
    name: "Singapore Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/400px-Singapore_Airlines_Logo_2.svg.png",
  },
  {
    name: "Changi Airport",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Changi_Airport_Group_logo.svg/400px-Changi_Airport_Group_logo.svg.png",
  },
  {
    name: "StarHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/StarHub_Logo.svg/400px-StarHub_Logo.svg.png",
  },
  {
    name: "M1",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/M1_Limited_logo.svg/400px-M1_Limited_logo.svg.png",
  },
  {
    name: "POSB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/POSB_Bank_logo.svg/400px-POSB_Bank_logo.svg.png",
  },
  {
    name: "Great Eastern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Great_Eastern_logo.svg/400px-Great_Eastern_logo.svg.png",
  },
  {
    name: "AIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/AIA_Group_logo.svg/400px-AIA_Group_logo.svg.png",
  },
  {
    name: "HSBC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/400px-HSBC_logo_%282018%29.svg.png",
  },
  {
    name: "Standard Chartered",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Standard_Chartered_%282021%29.svg/400px-Standard_Chartered_%282021%29.svg.png",
  },
  {
    name: "Maybank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Maybank_logo.svg/400px-Maybank_logo.svg.png",
  },
];

const testimonials = [
  {
    quote:
      "Elluminate delivered the best team-building event we've ever had. The energy was incredible and our team is still talking about it months later.",
    company: "Shopee Singapore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/400px-Shopee.svg.png",
  },
  {
    quote:
      "Professional, energetic, and flawless execution. They understood our corporate culture perfectly and designed an experience that resonated with everyone.",
    company: "SP Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/SP_Group_logo.svg/400px-SP_Group_logo.svg.png",
  },
  {
    quote:
      "Immersive activities with meaningful takeaways. Our employees left feeling connected and inspired. Highly recommend for any corporate event.",
    company: "NTUC Enterprise",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/NTUC_FairPrice_logo.svg/400px-NTUC_FairPrice_logo.svg.png",
  },
  {
    quote:
      "The attention to detail was extraordinary. Every moment was carefully crafted to engage and inspire our team.",
    company: "DBS Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/DBS_Bank_Logo.svg/400px-DBS_Bank_Logo.svg.png",
  },
  {
    quote: "Our D&D was transformed into an unforgettable night. The production quality was cinema-level!",
    company: "Singtel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Singtel_logo_2021.svg/400px-Singtel_logo_2021.svg.png",
  },
  {
    quote: "They brought creativity and professionalism in equal measure. Our team bonding has never been stronger.",
    company: "Grab",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Grab_Logo.svg/400px-Grab_Logo.svg.png",
  },
  {
    quote: "From concept to execution, everything was seamless. The facilitators were absolutely phenomenal.",
    company: "GovTech Singapore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/GovTech_Singapore_Logo.svg/400px-GovTech_Singapore_Logo.svg.png",
  },
  {
    quote: "The best investment we made for our company retreat. Every activity had purpose and every moment counted.",
    company: "OCBC Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/OCBC_Bank_logo.svg/400px-OCBC_Bank_logo.svg.png",
  },
  {
    quote:
      "Elluminate exceeded all expectations. Our 500-person event ran like clockwork with incredible energy throughout.",
    company: "UOB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/UOB_Logo.svg/400px-UOB_Logo.svg.png",
  },
  {
    quote: "Creative, organized, and truly memorable. This was the highlight of our corporate calendar.",
    company: "Marina Bay Sands",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Marina_Bay_Sands_Logo.svg/400px-Marina_Bay_Sands_Logo.svg.png",
  },
  {
    quote: "The immersive experience they created was unlike anything we'd seen before. Absolutely world-class.",
    company: "Singapore Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/400px-Singapore_Airlines_Logo_2.svg.png",
  },
  {
    quote: "Professional hosts who kept our entire team engaged from start to finish. Highly recommended!",
    company: "Prudential",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Prudential_plc_logo.svg/400px-Prudential_plc_logo.svg.png",
  },
  {
    quote: "Our town hall was transformed into an inspiring experience. The production quality was outstanding.",
    company: "CapitaLand",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/CapitaLand_logo.svg/400px-CapitaLand_logo.svg.png",
  },
  {
    quote: "They took our vague ideas and turned them into a spectacular reality. Creative geniuses!",
    company: "StarHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/StarHub_Logo.svg/400px-StarHub_Logo.svg.png",
  },
  {
    quote: "The team building activities were fun yet meaningful. Our staff couldn't stop talking about it.",
    company: "SMRT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SMRT_Corporation_Logo.svg/400px-SMRT_Corporation_Logo.svg.png",
  },
  {
    quote: "Exceptional service from planning to execution. They made our anniversary celebration truly special.",
    company: "Great Eastern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Great_Eastern_logo.svg/400px-Great_Eastern_logo.svg.png",
  },
  {
    quote:
      "The level of customization and creativity was impressive. Every detail was perfectly aligned with our brand.",
    company: "AIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/AIA_Group_logo.svg/400px-AIA_Group_logo.svg.png",
  },
  {
    quote: "Our product launch was a massive success thanks to Elluminate's vision and execution.",
    company: "M1",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/M1_Limited_logo.svg/400px-M1_Limited_logo.svg.png",
  },
  {
    quote: "From the initial consultation to the final bow, professionalism and passion were evident at every step.",
    company: "HSBC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/400px-HSBC_logo_%282018%29.svg.png",
  },
  {
    quote: "They understand corporate events like no one else. Our leadership offsite was transformative.",
    company: "Standard Chartered",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Standard_Chartered_%282021%29.svg/400px-Standard_Chartered_%282021%29.svg.png",
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
  const reviewsCounter = useCountUp(600, 2000);
  const yearsCounter = useCountUp(8, 1500);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us | Elluminate"
        description="Learn how Elluminate designs team building, school programmes, retreats, and training that strengthen culture, energise people, and create lasting impact across Singapore."
        keywords="about Elluminate, Singapore team building company, school programmes Singapore, training workshops Singapore"
        canonical="https://elluminate.sg/about"
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
                We design team building, school programmes, retreats, and training that feel seamless to run and
                meaningful to attend.
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
                <img
                  src="https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1773824034/photo_2023-06-28_14-02-04_bx1oal.jpg"
                  alt="Team Celebration"
                  className="w-full h-full object-cover"
                />
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
                  src="https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1773824011/photo_2023-06-28_14-02-00_anwttt.jpg"
                  alt="Outdoor Team Building"
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
                <img
                  src="https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1773824016/photo_2023-06-28_14-02-02-2_xghvi6.jpg"
                  alt="Dinner & Dance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent" />
              </motion.div>

              {/* Bottom-right accent photo */}
              <motion.div
                className="absolute bottom-0 right-[5%] w-[35%] h-[30%] rounded-xl overflow-hidden shadow-lg border-2 border-white/20 z-10"
                whileHover={{ scale: 1.02, rotate: 0 }}
                initial={{ rotate: 3 }}
                animate={{ rotate: 3 }}
              >
                <img
                  src="https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1773824009/IMG_2246-scaled_dp6pbh.jpg"
                  alt="Overseas Retreat"
                  className="w-full h-full object-cover"
                />
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
          <img
            src="https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1775545183/About-Us_ai3ync.webp"
            alt="Asian Corporate Team"
            className="w-full h-full object-cover"
          />
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
                  Elluminate was founded in Singapore with one belief: great team experiences should create real
                  connection, not just fill an agenda.
                </p>
                <p>
                  Since 2017, we have helped organisations, schools, and student groups turn team building, retreats,
                  celebrations, and training days into experiences people genuinely remember.
                </p>
                <p>
                  Today, our team brings together creative design, facilitation, and on-ground execution to deliver{" "}
                  <span className="text-primary font-medium">1,000+ events</span> for more than{" "}
                  <span className="text-primary font-medium">100,000 participants</span> across Singapore and the
                  region.
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
                  src="https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1775545183/About-Us_ai3ync.webp"
                  alt="Asian Team Celebration"
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
          <img
            src="https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1773823919/20230206_175035-scaled_us5gpm.jpg"
            alt="Event Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/92" />
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
                    To design experiences that bring people together, strengthen culture, and make every event feel
                    worth attending.
                  </p>
                  <p className="text-slate-300/80 font-sans text-sm leading-relaxed">
                    We combine thoughtful strategy, strong facilitation, and polished execution so teams leave more
                    connected than when they arrived.
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
                    To be the partner teams trust when the experience needs to feel engaging, well-run, and genuinely
                    memorable.
                  </p>
                  <p className="text-slate-300/80 font-sans text-sm leading-relaxed">
                    We believe the best experiences do more than entertain. They support culture, confidence,
                    leadership, and long-term connection across workplaces and classrooms.
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
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop"
            alt="Event Production"
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
                src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1774361398/AmazingRace_4_ehjyb5.jpg",
                alt: "Team celebration moment",
              },
              {
                src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1774361396/AmazingRace_9_rpn4ys.jpg",
                alt: "Dinner and dance experience",
              },
              {
                src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1774361395/AmazingRace_8_s4xwfc.jpg",
                alt: "Outdoor team building activity",
              },
              {
                src: "https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1774360192/AmazingRace_15_hspv90.heic",
                alt: "Retreat experience",
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
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&h=1080&fit=crop"
            alt="Conference"
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
              <p className="text-muted-foreground/80 font-sans text-sm">Events Delivered</p>
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
              <p className="text-muted-foreground/80 font-sans text-sm">Participants Engaged</p>
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
              <p className="text-muted-foreground/80 font-sans text-sm">{reviewsCounter.count}+ Reviews</p>
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
              <p className="text-muted-foreground/80 font-sans text-sm">Years Delivering Experiences</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* SECTION 6 - CLIENT LOGOS CAROUSEL */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1920&h=1080&fit=crop"
            alt="Event"
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
              Trusted By <span className="text-primary">Leading Brands</span>
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
        </div>
      </section>

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* SECTION 7 - TESTIMONIALS */}
      <section className="py-24 relative bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1774361385/AmazingRace_33_scwscr.jpg"
            alt="Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
              What Our <span className="text-primary">Clients Say</span>
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
            <p className="text-lg font-display font-medium text-foreground">600+ Reviews • 4.8-Star Google Rating</p>
          </motion.div>
        </div>
      </section>

      {/* Blue Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* SECTION 8 - FINAL CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop"
            alt="Celebration"
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
              Ready to Plan Your Next <span className="text-primary">Team or School Experience</span>?
            </h2>
            <p className="text-muted-foreground/80 font-sans mb-8">
              Whether you are planning team building, training, a retreat, or a school programme, we can help you shape
              the right format.
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
