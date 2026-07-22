import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Crown, PackagePlus, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

const planningPaths = [
  {
    number: "01",
    eyebrow: "Ready to run",
    title: "I know the activity",
    description: "You already know what the team wants to play. We will confirm the essentials and get the plan moving.",
    inclusions: ["Choose the experience", "Confirm the date and group size", "Lock in the venue and timing"],
    accent: "#2A8DFF",
    accentSoft: "rgba(42, 141, 255, 0.14)",
    icon: Zap,
    cta: "Plan This Activity",
    prefill: "I know which activity I want. Please help me confirm the date, group size, venue and timing.",
  },
  {
    number: "02",
    eyebrow: "Make it yours",
    title: "I want the activity plus extras",
    description: "Start with a proven format, then add the details that make the whole day feel like your company event.",
    inclusions: ["Add food, venue or transport", "Bring in prizes and custom touches", "Shape the pace and event flow"],
    accent: "#EC1D65",
    accentSoft: "rgba(236, 29, 101, 0.14)",
    icon: PackagePlus,
    cta: "Tailor My Event",
    prefill: "I have an activity in mind and would like help adding the venue, food, transport or other event extras.",
  },
  {
    number: "03",
    eyebrow: "Built around you",
    title: "I need something created around us",
    description: "Bring us the goal or the spark of an idea. We will shape the concept, logistics and signature moments together.",
    inclusions: ["Create the original concept", "Design the experience and assets", "Produce the complete event plan"],
    accent: "#8B5CF6",
    accentSoft: "rgba(139, 92, 246, 0.15)",
    icon: Crown,
    cta: "Create With Us",
    prefill: "I would like a custom experience built around our people, goals and event brief.",
  },
] as const;

export const TrafficLightSection = () => {
  const { openContactModal } = useContactModal();
  const reduceMotion = useReducedMotion();

  return (
    <section id="planning-path" className="relative overflow-hidden bg-[#071a2a] py-20 text-white sm:py-24">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:52px_52px]" />
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
            One brief. Three ways to build it.
          </span>
          <h2 className="font-display text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
            Start Where You Are. <span className="text-[#2A8DFF]">We&rsquo;ll Take It From There.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Choose the route that sounds most like your event today. Nothing is locked in until we shape the brief together.
          </p>
        </motion.header>

        <div className="relative mx-auto grid max-w-7xl gap-5 lg:grid-cols-3 lg:items-stretch">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-[linear-gradient(90deg,transparent,#2A8DFF_18%,#EC1D65_50%,#8B5CF6_82%,transparent)] opacity-70 lg:block"
          />

          {planningPaths.map((path, index) => {
            const PathIcon = path.icon;

            return (
              <motion.article
                key={path.title}
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
                className="group relative flex min-h-[27rem] flex-col overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0d2437]/95 p-7 shadow-[0_24px_70px_rgba(0,0,0,.24)] sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-70 blur-[90px] transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: path.accentSoft }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 bottom-0 font-display text-[9rem] font-black leading-none text-white/[0.025]"
                >
                  {path.number}
                </span>

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10"
                    style={{ backgroundColor: path.accentSoft, color: path.accent }}
                  >
                    <PathIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="text-[0.67rem] font-bold uppercase tracking-[0.2em] text-white/[0.62]">
                    {path.eyebrow}
                  </span>
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="font-display text-3xl font-black leading-[1.02] text-white sm:text-[2rem]">{path.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-[0.95rem]">{path.description}</p>
                </div>

                <ul className="relative z-10 mt-7 space-y-3 border-t border-white/10 pt-6">
                  {path.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-semibold text-white/[0.82]">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: path.accentSoft, color: path.accent }}
                      >
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mt-auto pt-8">
                  <Button
                    type="button"
                    size="lg"
                    onClick={() => openContactModal({ additionalDetails: path.prefill })}
                    className="group/button min-h-12 w-full justify-between border-0 px-6 text-white hover:brightness-105"
                    style={{ backgroundColor: path.accent }}
                  >
                    {path.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" aria-hidden="true" />
                  </Button>
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
            Still not sure? Tell us about the people, the date and what the day should achieve. We&rsquo;ll narrow it down with you.
          </span>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              openContactModal({ additionalDetails: "I would like help choosing the right planning route for my event." })
            }
            className="group min-h-12 w-full shrink-0 border-white/25 bg-transparent px-7 text-white hover:bg-white hover:text-[#071a2a] sm:w-auto"
          >
            Help Me Choose
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
