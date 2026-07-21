import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Compass,
  Eye,
  Heart,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  Users,
  WandSparkles,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OurTeam } from "@/components/OurTeam";
import { ClientTestimonialsCarousel } from "@/components/ClientTestimonialsCarousel";
import { SEO } from "@/components/SEO";
import { OrganizationSchema } from "@/components/StructuredData";
import { getRouteSeo } from "@/data/seoRoutes";

const aboutSeo = getRouteSeo("/about");

const values = [
  {
    title: "Creative",
    tagline: "Every brief deserves its own spark.",
    description: "We shape the concept, challenges and little surprises around your people, so the day feels made for your team rather than pulled from a template.",
    icon: Lightbulb,
    color: "#2A8DFF",
  },
  {
    title: "Authentic",
    tagline: "Real connection beats forced fun.",
    description: "We make room for different personalities to take part without putting anyone on the spot. The best moments feel natural, never staged.",
    icon: Heart,
    color: "#26B982",
  },
  {
    title: "Lasting",
    tagline: "Create the moments people retell.",
    description: "The best events keep popping up in conversation: the comeback, the inside joke and the teammate nobody expected to win. We design with those moments in mind.",
    icon: Award,
    color: "#F4B400",
  },
  {
    title: "Exceptional",
    tagline: "Big moments depend on small details.",
    description: "From the first brief to the final cue, we think through pace, setup, facilitation and handovers. Smooth delivery lets everyone else stay present.",
    icon: Sparkles,
    color: "#F25F5C",
  },
  {
    title: "Boundless",
    tagline: "Start with the ambition. We’ll find the way.",
    description: "We explore what is possible across the venue, timeline and group before settling for the obvious. Then we turn the boldest workable idea into a plan the team can actually deliver.",
    icon: Rocket,
    color: "#8B5CF6",
  },
  {
    title: "Eccentric",
    tagline: "Leave room for the unexpected.",
    description: "A playful twist, themed mission or theatrical reveal can become the part everyone talks about. We keep it fun without letting the theme take over.",
    icon: WandSparkles,
    color: "#EC4899",
  },
];

const differentiators = [
  {
    title: "No Cookie-Cutter Packages",
    description: "We shape the format around your group’s personalities, mobility, goals and venue instead of squeezing everyone into the same programme.",
    icon: Users,
  },
  {
    title: "A Creative World for Every Experience",
    description: "An Amazing Race should feel like an expedition; CSI-Bones should feel like an investigation. The structure stays clear while each activity gets its own story, rhythm and identity.",
    icon: Compass,
  },
  {
    title: "Facilitators Who Read the Room",
    description: "We know when to lift the energy, when to slow down and how to bring quieter participants in without forcing the moment.",
    icon: Eye,
  },
  {
    title: "One Team From Brief to Event Day",
    description: "Activities, timing, setup, movement and wet-weather backups are planned together, so your organisers are not left chasing loose ends.",
    icon: Target,
  },
  {
    title: "Professional Without Feeling Stiff",
    description: "You get clear communication and organised delivery, while the event itself stays playful, warm and full of personality.",
    icon: Zap,
  },
  {
    title: "More Than a Good Time",
    description: "The laughter matters, but so do the moments when someone steps up, listens better or solves a problem with the team.",
    icon: Sparkles,
  },
];

const AboutPage = () => {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : delay },
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO {...aboutSeo} keywords="about Elluminate Singapore, team building company Singapore, event facilitators" />
      <OrganizationSchema type="LocalBusiness" />
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(145deg,#f8fbff_0%,#eef6ff_58%,#ffffff_100%)] py-16 sm:py-24">
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-300/[0.15] blur-3xl" />
          <div className="container relative z-10 mx-auto px-5 sm:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <motion.div {...reveal()}>
                <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.26em] text-primary">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  About Elluminate
                </span>
                <h1 className="font-display text-5xl font-black leading-[0.92] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
                  Where Teams <span className="text-primary">Come Alive</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                  We create team experiences with enough energy to pull people in, enough thought to bring them together, and enough personality to stay with them after the day ends.
                </p>
              </motion.div>

              <motion.div {...reveal(0.1)} className="grid grid-cols-[1.25fr_0.75fr] gap-3 sm:gap-4">
                <div className="relative row-span-2 min-h-[390px] overflow-hidden rounded-[2rem] shadow-2xl sm:min-h-[520px]">
                  <img src="/images/services/battle-of-the-olympians/gallery-3.jpg" alt="A team laughing together during a high-energy outdoor challenge" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a2a]/[0.45] via-transparent to-transparent" />
                </div>
                <div className="min-h-[188px] overflow-hidden rounded-[1.6rem] sm:min-h-[252px]">
                  <img
                    src="/images/services/battle-of-the-olympians/gallery-1.jpg"
                    alt="Teammates laughing through a lively piggyback challenge"
                    className="h-full w-full scale-[1.06] object-cover object-[48%_44%]"
                  />
                </div>
                <div className="min-h-[188px] overflow-hidden rounded-[1.6rem] sm:min-h-[252px]">
                  <img src="/images/about/about-1.jpg" alt="A large company group celebrating together after an event" className="h-full w-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div {...reveal()} className="relative">
                <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(20,40,80,0.16)]">
                  <img src="/images/about/about-5.jpg" alt="Event crew together after a programme" className="aspect-[4/3] w-full object-cover" />
                </div>
                <div className="absolute -bottom-7 -right-3 hidden w-48 overflow-hidden rounded-[1.5rem] border-8 border-white shadow-xl sm:block lg:-right-8">
                  <img src="/images/about/about-2.jpg" alt="Participants gathered in teams" className="aspect-square w-full object-cover" />
                </div>
              </motion.div>

              <motion.div {...reveal(0.08)}>
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.26em] text-primary">Our Story</span>
                <h2 className="font-display text-4xl font-black leading-tight text-foreground sm:text-5xl">It starts when people step out of routine.</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
                  <p>
                    Put people into a good challenge and the usual office roles start to loosen. Someone unexpected takes the lead, quieter teammates speak up, and people discover new ways of working together.
                  </p>
                  <p>
                    We bring that spark to company experiences across Singapore, from high-energy races and playful investigations to retreats and facilitated workshops. Every programme starts with the people in the room, then we shape the story, pace and practical details around them.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#071a2a] py-20 text-white sm:py-24">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />
          <div className="container relative z-10 mx-auto grid gap-5 px-5 sm:px-6 lg:grid-cols-2">
            <motion.article {...reveal()} className="rounded-[2rem] border border-white/[0.12] bg-white/[0.07] p-7 sm:p-10">
              <Target className="mb-8 h-9 w-9 text-sky-300" aria-hidden="true" />
              <h2 className="font-display text-4xl font-black">Our Mission</h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                To create company experiences that help people loosen up, show up and connect beyond their job titles. We bring together the right activity, facilitation, venue and flow so the day feels effortless to join and memorable to be part of.
              </p>
            </motion.article>
            <motion.article {...reveal(0.08)} className="rounded-[2rem] border border-white/[0.12] bg-white/[0.07] p-7 sm:p-10">
              <Eye className="mb-8 h-9 w-9 text-violet-300" aria-hidden="true" />
              <h2 className="font-display text-4xl font-black">Our Vision</h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                We want more companies to treat shared experiences as part of building a strong team, not just a once-a-year outing. Every group should leave with more energy, stronger relationships and at least one story worth retelling at work.
              </p>
            </motion.article>
          </div>
        </section>

        <section className="bg-[#f7f9fc] py-20 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6">
            <motion.header {...reveal()} className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-display text-4xl font-black text-foreground sm:text-5xl">Our Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">Six ways we keep the spark alive.</p>
            </motion.header>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.article
                    key={value.title}
                    {...reveal(index * 0.04)}
                    className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_14px_45px_rgba(20,40,80,0.07)]"
                  >
                    <span className="relative mb-8 flex h-12 w-12 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: value.color }}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="relative font-display text-2xl font-black text-foreground">{value.title}</h3>
                    <p className="relative mt-2 font-bold text-foreground/[0.72]">{value.tagline}</p>
                    <p className="relative mt-4 text-sm leading-6 text-muted-foreground">{value.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <OurTeam />

        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6">
            <motion.header {...reveal()} className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.26em] text-primary">What Makes Us Different</span>
              <h2 className="font-display text-4xl font-black text-foreground sm:text-5xl">Energy with intention.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">The fun is visible. The thinking behind it is what makes the day work.</p>
            </motion.header>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
              <motion.article key={item.title} {...reveal(index * 0.04)} className="rounded-[1.8rem] border border-primary/10 bg-blue-50/[0.55] p-7">
                    <Icon className="mb-7 h-7 w-7 text-primary" aria-hidden="true" />
                    <h3 className="font-display text-2xl font-black leading-tight text-foreground">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <ClientTestimonialsCarousel theme="light" />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
