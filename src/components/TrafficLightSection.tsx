import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Crown, PackagePlus, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

const planningPaths = [
  {
    signalColor: "#26D07C",
    brandAccent: "#2A8DFF",
    icon: Zap,
    signal: "Green signal",
    title: "I know the activity",
    description: "You have the format in mind. We keep the route quick, clear and ready for event day.",
    steps: [
      { number: "01", title: "Pick the experience", copy: "Share the activity, date and group size.", color: "#FFC400" },
      { number: "02", title: "Confirm the essentials", copy: "Lock in the venue, timing and event brief.", color: "#FF7A1A" },
    ],
  },
  {
    signalColor: "#FFC400",
    brandAccent: "#EC1D65",
    icon: PackagePlus,
    signal: "Amber signal",
    title: "I want the activity plus extras",
    description: "Start with a proven format, then add the details that make it feel like your company event.",
    steps: [
      { number: "03", title: "Add the good stuff", copy: "Bring in food, venue, transport or prizes.", color: "#EC1D65" },
      { number: "04", title: "Shape the flow", copy: "Tune the missions, pace and facilitation.", color: "#8B3DE0" },
    ],
  },
  {
    signalColor: "#FF4F4F",
    brandAccent: "#8B3DE0",
    icon: Crown,
    signal: "Red signal",
    title: "I need something built around us",
    description: "Bring us the ambition. We will turn it into a complete concept with its own signature moments.",
    steps: [
      { number: "05", title: "Create the concept", copy: "Build the theme, format and big idea together.", color: "#26B982" },
      { number: "06", title: "Bring it to life", copy: "Produce the assets, logistics and final show plan.", color: "#2A8DFF" },
    ],
  },
];

export const TrafficLightSection = () => {
  const { openContactModal } = useContactModal();
  const reduceMotion = useReducedMotion();

  return (
    <section id="planning-path" className="relative overflow-hidden bg-[#071a2a] py-20 text-white sm:py-24">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/25 blur-[120px]" />
      <div className="absolute right-[10%] top-0 h-72 w-72 rounded-full bg-pink-500/[0.14] blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />

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
          <h2 className="font-display text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
            Start Where You Are. <span className="text-[#2A8DFF]">We&rsquo;ll Take It From There.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Know exactly what you want, need a few extras, or only have the spark of an idea? There is a clear way forward.
          </p>
        </motion.header>

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] shadow-[0_28px_90px_rgba(0,0,0,.28)] backdrop-blur-sm">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[4.25rem] hidden h-[3px] bg-[linear-gradient(90deg,#2A8DFF_0%,#FFC400_24%,#EC1D65_52%,#8B3DE0_76%,#26B982_100%)] opacity-80 lg:block"
          />

          <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-white/10">
            {planningPaths.map((path, pathIndex) => {
              const PathIcon = path.icon;

              return (
                <motion.article
                  key={path.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : pathIndex * 0.08 }}
                  className="relative px-5 py-7 sm:px-7 sm:py-8 lg:px-6 xl:px-8"
                >
                  <span
                    className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#10283b] font-display text-lg font-black text-white shadow-[0_0_28px_rgba(42,141,255,.28)]"
                    style={{ backgroundColor: path.brandAccent }}
                  >
                    {String(pathIndex + 1).padStart(2, "0")}
                  </span>

                  <div className="mt-6 flex items-center justify-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full shadow-[0_0_12px_currentColor]" style={{ backgroundColor: path.signalColor, color: path.signalColor }} />
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/60">{path.signal}</span>
                  </div>

                  <div className="mt-5 text-center">
                    <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.08]" style={{ color: path.brandAccent }}>
                      <PathIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-black leading-tight">{path.title}</h3>
                    <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-300">{path.description}</p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {path.steps.map((step) => (
                      <div key={step.number} className="rounded-[1.35rem] border border-white/10 bg-[#071a2a]/70 p-4">
                        <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-black text-[#071a2a]" style={{ backgroundColor: step.color }}>
                          {step.number}
                        </span>
                        <h4 className="mt-4 font-display text-base font-black text-white">{step.title}</h4>
                        <p className="mt-2 text-xs leading-5 text-slate-400">{step.copy}</p>
                      </div>
                    ))}
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
            className="flex flex-col items-center justify-between gap-5 border-t border-white/10 bg-white/[0.035] px-6 py-6 text-center sm:flex-row sm:text-left lg:px-9"
          >
            <span className="inline-flex max-w-2xl items-center gap-3 text-sm font-semibold text-slate-300">
              <Sparkles className="h-5 w-5 shrink-0 text-[#FFC400]" aria-hidden="true" />
              Not sure which route fits? Tell us about the people and the day. We&rsquo;ll narrow it down with you.
            </span>
            <Button variant="hero" size="lg" onClick={openContactModal} className="group min-h-12 w-full shrink-0 px-7 sm:w-auto">
              Help Me Choose
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
