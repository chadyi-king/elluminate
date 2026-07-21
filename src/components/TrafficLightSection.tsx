import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Crown, PackagePlus, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

const planningLanes = [
  {
    color: "#26D07C",
    tint: "#EAFBF3",
    icon: Zap,
    label: "Green lane",
    title: "Ready to roll",
    description: "You know the activity you want. Keep the route simple and get the team playing.",
    steps: [
      { number: "01", title: "Pick the experience", copy: "Choose the activity, date and group size." },
      { number: "02", title: "Lock in the essentials", copy: "Confirm the venue, timing and event-day brief." },
    ],
  },
  {
    color: "#FFC400",
    tint: "#FFF8DD",
    icon: PackagePlus,
    label: "Amber lane",
    title: "Make it your own",
    description: "Start with an activity, then layer in the details that turn it into your event.",
    steps: [
      { number: "03", title: "Add the good stuff", copy: "Bring in food, transport, venue support or prizes." },
      { number: "04", title: "Shape the flow", copy: "Tune the pace, missions and facilitation around your people." },
    ],
  },
  {
    color: "#FF4F4F",
    tint: "#FFF0F0",
    icon: Crown,
    label: "Red lane",
    title: "Build something new",
    description: "Come with the big idea. We will help turn it into a complete experience from scratch.",
    steps: [
      { number: "05", title: "Create the concept", copy: "Develop the theme, format and signature moments together." },
      { number: "06", title: "Bring it to life", copy: "Produce the assets, logistics and show-ready event plan." },
    ],
  },
];

export const TrafficLightSection = () => {
  const { openContactModal } = useContactModal();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f7faff] py-20 sm:py-24">
      <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(42,141,255,.16)_1px,transparent_0)] [background-size:34px_34px]" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-sky-200/35 blur-[110px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-200/30 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">From idea to event day</span>
          <h2 className="font-display text-4xl font-black leading-none text-foreground sm:text-5xl lg:text-6xl">
            Choose Your <span className="text-primary">Planning Lane</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Keep it simple, add a few extras or build the whole thing from scratch. Start wherever your event is today.
          </p>
        </motion.header>

        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {planningLanes.map((lane, laneIndex) => {
            const LaneIcon = lane.icon;

            return (
              <motion.article
                key={lane.label}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : laneIndex * 0.08 }}
                className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-[0_22px_60px_rgba(41,70,120,.10)] sm:p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: lane.color }} />
                <div className="flex items-start gap-4 pt-2">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: lane.tint, color: lane.color }}>
                    <LaneIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em]" style={{ color: lane.color }}>{lane.label}</p>
                    <h3 className="mt-1 font-display text-2xl font-black text-foreground">{lane.title}</h3>
                  </div>
                </div>

                <p className="mt-4 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">{lane.description}</p>

                <div className="relative mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <span className="pointer-events-none absolute left-[calc(25%-1px)] right-[calc(25%-1px)] top-6 hidden h-px sm:block lg:hidden xl:block" style={{ backgroundColor: `${lane.color}55` }} />
                  {lane.steps.map((step) => (
                    <div key={step.number} className="relative rounded-[1.35rem] border p-4" style={{ borderColor: `${lane.color}35`, backgroundColor: lane.tint }}>
                      <span className="relative z-10 inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-black text-white" style={{ backgroundColor: lane.color }}>
                        {step.number}
                      </span>
                      <h4 className="mt-4 font-display text-base font-black text-foreground">{step.title}</h4>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">{step.copy}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.15 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Not sure which lane fits? That is exactly what the first conversation is for.
          </span>
          <Button variant="hero" size="lg" onClick={openContactModal} className="group min-h-12 px-7">
            Plan My Event
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
