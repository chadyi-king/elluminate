import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  ClipboardList,
  Coffee,
  Compass,
  Crosshair,
  Eye,
  Fingerprint,
  Flag,
  Gamepad2,
  Hammer,
  HeartPulse,
  Landmark,
  Lightbulb,
  Monitor,
  PartyPopper,
  Plane,
  TentTree,
  Trophy,
} from "lucide-react";

import {
  getServiceExperienceContent,
  type ServiceExperienceVariant,
} from "@/data/serviceExperienceContent";
import adventurePair from "@/assets/service-characters/adventure-pair.webp";
import creativePair from "@/assets/service-characters/creative-pair.webp";
import detectivePair from "@/assets/service-characters/detective-pair.webp";

interface ServiceExperienceJourneyProps {
  slug: string;
  serviceTitle: string;
  accentColor: string;
  accentColorSecondary?: string;
  fallbackImages?: string[];
}

interface VariantTheme {
  label: string;
  icon: LucideIcon;
  sectionClassName: string;
  cardClassName: string;
  pattern: string;
}

const dotPattern = "radial-gradient(circle at 1px 1px, rgba(255,255,255,.16) 1px, transparent 1.2px)";
const gridPattern = "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)";
const diagonalPattern = "repeating-linear-gradient(125deg, transparent 0 28px, rgba(255,255,255,.055) 29px, transparent 30px 58px)";

const variantThemes: Record<ServiceExperienceVariant, VariantTheme> = {
  expedition: {
    label: "Route Builder",
    icon: Compass,
    sectionClassName: "bg-[#07160f] text-white",
    cardClassName: "rounded-[1.8rem] border-dashed",
    pattern: dotPattern,
  },
  investigation: {
    label: "Case Sequence",
    icon: Fingerprint,
    sectionClassName: "bg-[#071411] text-white",
    cardClassName: "rounded-md",
    pattern: gridPattern,
  },
  intrigue: {
    label: "Social Game",
    icon: Eye,
    sectionClassName: "bg-[#160b22] text-white",
    cardClassName: "rounded-[2rem]",
    pattern: diagonalPattern,
  },
  storybook: {
    label: "Story Chapters",
    icon: BookOpen,
    sectionClassName: "bg-[#201026] text-white",
    cardClassName: "rounded-[2.4rem_1rem_2.4rem_1rem]",
    pattern: dotPattern,
  },
  arena: {
    label: "Challenge Card",
    icon: Trophy,
    sectionClassName: "bg-[#171014] text-white",
    cardClassName: "rounded-[0.7rem]",
    pattern: diagonalPattern,
  },
  maker: {
    label: "Build Plan",
    icon: Hammer,
    sectionClassName: "bg-[#071525] text-white",
    cardClassName: "rounded-lg",
    pattern: gridPattern,
  },
  arcade: {
    label: "Game Rounds",
    icon: Gamepad2,
    sectionClassName: "bg-[#120b27] text-white",
    cardClassName: "rounded-[1.4rem]",
    pattern: gridPattern,
  },
  strategy: {
    label: "Game Board",
    icon: Landmark,
    sectionClassName: "bg-[#102017] text-white",
    cardClassName: "rounded-[1.2rem]",
    pattern: dotPattern,
  },
  tactical: {
    label: "Mission Phases",
    icon: Crosshair,
    sectionClassName: "bg-[#101419] text-white",
    cardClassName: "rounded-[0.6rem]",
    pattern: diagonalPattern,
  },
  "virtual-console": {
    label: "Live Session",
    icon: Monitor,
    sectionClassName: "bg-[#080f25] text-white",
    cardClassName: "rounded-xl",
    pattern: gridPattern,
  },
  retreat: {
    label: "Retreat Rhythm",
    icon: Coffee,
    sectionClassName: "bg-[#10221f] text-white",
    cardClassName: "rounded-[2rem]",
    pattern: dotPattern,
  },
  travel: {
    label: "Journey Plan",
    icon: Plane,
    sectionClassName: "bg-[#0b2031] text-white",
    cardClassName: "rounded-[1.8rem]",
    pattern: diagonalPattern,
  },
  profiling: {
    label: "Discovery Path",
    icon: ClipboardList,
    sectionClassName: "bg-[#12142a] text-white",
    cardClassName: "rounded-[1.5rem]",
    pattern: gridPattern,
  },
  learning: {
    label: "Learning Flow",
    icon: Lightbulb,
    sectionClassName: "bg-[#171526] text-white",
    cardClassName: "rounded-[1.6rem]",
    pattern: dotPattern,
  },
  wellness: {
    label: "Reset Sequence",
    icon: HeartPulse,
    sectionClassName: "bg-[#10241f] text-white",
    cardClassName: "rounded-[2.2rem]",
    pattern: dotPattern,
  },
  leadership: {
    label: "Decision Path",
    icon: Flag,
    sectionClassName: "bg-[#101723] text-white",
    cardClassName: "rounded-[1.2rem]",
    pattern: gridPattern,
  },
  festival: {
    label: "Programme Map",
    icon: PartyPopper,
    sectionClassName: "bg-[#24101c] text-white",
    cardClassName: "rounded-[2rem]",
    pattern: diagonalPattern,
  },
  camp: {
    label: "Camp Trail",
    icon: TentTree,
    sectionClassName: "bg-[#142014] text-white",
    cardClassName: "rounded-[1.8rem]",
    pattern: dotPattern,
  },
};

const characterPairByVariant: Record<ServiceExperienceVariant, string> = {
  expedition: adventurePair,
  investigation: detectivePair,
  intrigue: detectivePair,
  storybook: creativePair,
  arena: adventurePair,
  maker: creativePair,
  arcade: creativePair,
  strategy: adventurePair,
  tactical: detectivePair,
  "virtual-console": creativePair,
  retreat: creativePair,
  travel: adventurePair,
  profiling: creativePair,
  learning: creativePair,
  wellness: creativePair,
  leadership: creativePair,
  festival: creativePair,
  camp: adventurePair,
};

export function ServiceExperienceJourney({
  slug,
  serviceTitle,
  accentColor,
  accentColorSecondary,
  fallbackImages = [],
}: ServiceExperienceJourneyProps) {
  const content = getServiceExperienceContent(slug);
  const reduceMotion = useReducedMotion();

  if (!content) return null;

  const theme = variantThemes[content.variant];
  const characterPair = characterPairByVariant[content.variant];
  const ThemeIcon = theme.icon;
  const images = Array.from(
    new Set([content.image?.src, ...fallbackImages].filter((image): image is string => Boolean(image))),
  ).slice(0, content.stages.length);
  const titleId = `${slug}-experience-journey-title`;
  const secondaryAccent = accentColorSecondary ?? accentColor;

  return (
    <section
      id="experience-journey"
      aria-labelledby={titleId}
      className={`relative isolate overflow-hidden px-4 py-20 md:py-24 ${theme.sectionClassName}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: theme.pattern, backgroundSize: theme.pattern === gridPattern ? "48px 48px" : "30px 30px" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full blur-[140px]"
        style={{ backgroundColor: `${accentColor}2e` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full blur-[140px]"
        style={{ backgroundColor: `${secondaryAccent}24` }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="relative mx-auto mb-12 max-w-[96rem] xl:mb-0 xl:min-h-[27rem] 2xl:min-h-[31rem]">
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, x: -24, y: 18 }}
            whileInView={{ opacity: 0.98, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            className="pointer-events-none absolute -bottom-4 -left-16 z-[1] hidden h-[27rem] w-[21rem] overflow-hidden xl:block 2xl:left-0 2xl:h-[31rem] 2xl:w-[24rem]"
          >
            <img
              src={characterPair}
              alt=""
              className="absolute bottom-0 left-0 h-full w-auto max-w-none object-contain object-bottom"
            />
          </motion.div>

          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, x: 24, y: 18 }}
            whileInView={{ opacity: 0.98, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            className="pointer-events-none absolute -bottom-4 -right-16 z-[1] hidden h-[27rem] w-[21rem] overflow-hidden xl:block 2xl:right-0 2xl:h-[31rem] 2xl:w-[24rem]"
          >
            <img
              src={characterPair}
              alt=""
              className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom"
            />
          </motion.div>

          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.55 }}
            className="relative z-10 mx-auto max-w-[42rem] text-center xl:pt-8"
          >
            <span
              className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.28em]"
              style={{ borderColor: `${accentColor}70`, backgroundColor: `${accentColor}14`, color: accentColor }}
            >
              <ThemeIcon className="h-4 w-4" aria-hidden="true" />
              {theme.label}
            </span>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/55">{content.eyebrow}</p>
            <h2 id={titleId} className="mt-4 font-display text-4xl font-black leading-[1.03] md:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">{content.intro}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{content.motif}</p>
          </motion.header>
        </div>

        <ol className="relative z-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.stages.map((stage, index) => {
            const image = images[index];
            return (
              <motion.li
                key={stage.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: reduceMotion ? 0 : 0.48, delay: reduceMotion ? 0 : (index % 3) * 0.06 }}
                className={`group relative min-h-[23rem] overflow-hidden border bg-black/25 backdrop-blur-sm ${theme.cardClassName}`}
                style={{ borderColor: `${accentColor}42` }}
              >
                {image ? (
                  <>
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-80 motion-reduce:transition-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f] via-[#050a0f]/80 to-[#050a0f]/10" />
                  </>
                ) : (
                  <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute -right-10 -top-10 h-48 w-48 rounded-full border opacity-30"
                      style={{ borderColor: accentColor }}
                    />
                    <div
                      className="absolute bottom-10 left-10 h-px w-2/3 opacity-50"
                      style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
                    />
                    <ThemeIcon className="absolute right-8 top-8 h-24 w-24 opacity-[0.08]" style={{ color: accentColor }} />
                  </div>
                )}

                <div className="relative flex h-full min-h-[23rem] flex-col justify-end p-6 sm:p-7">
                  <div className="mb-auto flex items-center justify-between gap-4">
                    <span
                      className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border bg-black/35 px-3 font-mono text-xs font-bold backdrop-blur-md"
                      style={{ borderColor: `${accentColor}7a`, color: accentColor }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ThemeIcon className="h-5 w-5" style={{ color: accentColor }} aria-hidden="true" />
                  </div>
                  <p className="font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-white/55">
                    {theme.label} {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-black leading-tight text-white sm:text-3xl">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/72">{stage.description}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>

        <div className="mx-auto mt-10 flex max-w-3xl items-center gap-4 text-white/45" aria-hidden="true">
          <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${accentColor})` }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em]">Six moments in {serviceTitle}</span>
          <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${secondaryAccent}, transparent)` }} />
        </div>
      </div>
    </section>
  );
}
