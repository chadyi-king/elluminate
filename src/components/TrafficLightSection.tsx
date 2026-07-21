import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Crown, PackagePlus, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

const planningPaths = [
  {
    eyebrow: "Ready to run",
    title: "I know the activity",
    description: "You already know what the team wants to play. We will confirm the essentials and get the plan moving.",
    inclusions: ["Choose the experience", "Confirm date and group size", "Lock in venue and timing"],
    accent: "#2A8DFF",
    signal: "#26D07C",
    glow: "rgba(42,141,255,.2)",
    icon: Zap,
    cta: "Choose an Activity",
    link: "/services/team-building",
  },
  {
    eyebrow: "Make it yours",
    title: "I want the activity plus extras",
    description: "Start with a proven format, then add the details that make the whole day feel like your company event.",
    inclusions: ["Add food, venue or transport", "Bring in prizes and custom touches", "Shape the pace and event flow"],
    accent: "#EC1D65",
    signal: "#FFC400",
    glow: "rgba(236,29,101,.22)",
    icon: PackagePlus,
    cta: "Tailor My Event",
    featured: true,
  },
  {
    eyebrow: "Built around you",
    title: "I need something created from scratch",
    description: "Bring us the goal or the spark of an idea. We will build the concept, assets, logistics and signature moments.",
    inclusions: ["Create the original concept", "Design the experience and assets", "Produce the complete event plan"],
    accent: "#8B3DE0",
    signal: "#FF6B5E",
    glow: "rgba(139,61,224,.24)",
    icon: Crown,
    cta: "Create With Us",
  },
] as const;

export const TrafficLightSection = () => {
  const { openContactModal } = useContactModal();
  const reduceMotion = useReducedMotion();

  return (
    <section id="planning-path" className="relative overflow-hidden bg-[#071a2a] py-20 text-white sm:py-24">
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-sky-500/20 blur-[125px]" />
      <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-500/[0.13] blur-[135px]" />
      <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[125px]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-sky-200">
            One event. Three levels of build.
          </span>
          <h2 className="font-display text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
            How Far Do You Want Us to <span className="text-[#2A8DFF]">Take It?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Choose a proven activity, add the extras that make it yours, or let us create the whole experience from scratch.
          </p>
        </motion.header>

        <div className="relative mx-auto grid max-w-7xl gap-4 lg:grid-cols-3 lg:items-stretch">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-px bg-[linear-gradient(90deg,transparent,#2A8DFF_18%,#FFC400_50%,#8B3DE0_82%,transparent)] opacity-80 lg:block"
          />

          {planningPaths.map((path, index) => {
            const PathIcon = path.icon;
            const isFeatured = "featured" in path && path.featured;

            return (
              <motion.article
                key={path.title}
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
                className={`group relative flex min-h-[31rem] flex-col overflow-hidden border bg-[#0d2437]/95 p-7 shadow-[0_24px_70px_rgba(0,0,0,.24)] transition-transform duration-300 sm:p-8 ${
                  isFeatured
                    ? "rounded-[2.6rem] border-amber-300/35 lg:-translate-y-3 lg:shadow-[0_32px_90px_rgba(236,29,101,.18)]"
                    : "rounded-[2.15rem] border-white/10"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-80 blur-[95px] transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: path.glow }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-4 bottom-0 font-display text-[10rem] font-black leading-none text-white/[0.025] sm:text-[12rem]"
                >
                  0{index + 1}
                </span>

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]"
                    style={{ color: path.accent }}
                  >
                    <PathIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-2 text-[0.67rem] font-bold uppercase tracking-[0.2em] text-white/65">
                    <span className="h-2.5 w-2.5 rounded-full shadow-[0_0_12px_currentColor]" style={{ backgroundColor: path.signal, color: path.signal }} />
                    {path.eyebrow}
                  </span>
                </div>

                <div className="relative z-10 mt-9">
                  <h3 className="font-display text-3xl font-black leading-[1.02] text-white sm:text-[2rem]">{path.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-[0.95rem]">{path.description}</p>
                </div>

                <ul className="relative z-10 mt-8 space-y-3 border-t border-white/10 pt-6">
                  {path.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-semibold text-white/80">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${path.accent}24`, color: path.accent }}
                      >
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mt-auto pt-8">
                  {"link" in path ? (
                    <Button asChild variant="hero" size="lg" className="group/button min-h-12 w-full justify-between px-6">
                      <Link to={path.link}>
                        {path.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" aria-hidden="true" />
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={openContactModal}
                      className="group/button min-h-12 w-full justify-between px-6"
                      style={{ backgroundColor: path.accent }}
                    >
                      {path.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" aria-hidden="true" />
                    </Button>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.12 }}
          className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.055] px-6 py-5 text-center sm:flex-row sm:text-left"
        >
          <span className="inline-flex max-w-2xl items-center gap-3 text-sm font-semibold text-slate-300">
            <Sparkles className="h-5 w-5 shrink-0 text-[#FFC400]" aria-hidden="true" />
            Not sure which level fits? Tell us about the people and the day. We&rsquo;ll help you find the right starting point.
          </span>
          <Button variant="outline" size="lg" onClick={openContactModal} className="group min-h-12 w-full shrink-0 border-white/25 bg-transparent px-7 text-white hover:bg-white hover:text-[#071a2a] sm:w-auto">
            Help Me Choose
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
