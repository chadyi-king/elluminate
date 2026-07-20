import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Quote, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

const clientStories = [
  {
    company: "Lonza",
    person: "Darren Tey, Operations Manager",
    title: "An experience people wanted to talk about",
    quote: "All of us had a real fun blast and we have nothing but good things to say about the facilitators and the games!",
    focus: ["High-energy games", "Facilitators who kept the room moving", "A shared experience the team enjoyed together"],
    accent: "#2A8DFF",
  },
  {
    company: "SIMTech",
    person: "Farzanah Begum, Senior Officer for Development and Engagement",
    title: "A day everyone could get into",
    quote: "All our different departments have enjoyed the activities, from our newest members to our management teams.",
    focus: ["Enjoyed across departments", "Worked for new joiners and management", "Brought different levels into the same experience"],
    accent: "#8B5CF6",
  },
];

export const CaseStudiesSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#071a2a] py-20 text-white sm:py-24">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[130px]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:54px_54px]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-sky-200">Client Stories</span>
          <h2 className="font-display text-4xl font-black leading-none sm:text-5xl lg:text-6xl">What Their Teams Remembered</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Two clients share what made the experience work for their teams.
          </p>
        </motion.header>

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          {clientStories.map((story, index) => (
            <motion.article
              key={story.company}
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : index * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.07] p-7 backdrop-blur-sm sm:p-9"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: story.accent }} />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-200">{story.company}</p>
                  <p className="mt-1 text-sm text-white/[0.55]">{story.person}</p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <Quote className="h-6 w-6 text-white/70" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="font-display text-3xl font-black leading-tight">{story.title}</h3>
                <blockquote className="mt-5 text-lg leading-8 text-white/[0.85]">&ldquo;{story.quote}&rdquo;</blockquote>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/[0.45]">What stood out</p>
                  <ul className="space-y-3">
                    {story.focus.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/[0.72]">
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.05] px-6 py-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-sky-200" aria-hidden="true" />
            <p className="text-sm text-white/[0.72]">Looking for the format that fits your own team?</p>
          </div>
          <Link to="/services/team-building" className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-sky-200">
            Explore Team Building
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
