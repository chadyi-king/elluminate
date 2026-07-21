import type { LucideIcon } from "lucide-react";
import { ClipboardList, Compass, Fingerprint, Map, PanelsTopLeft } from "lucide-react";

import {
  getServiceQuickFacts,
  type ServiceQuickFactsTheme,
} from "@/data/serviceQuickFacts";

interface ServiceQuickFactsProps {
  slug: string;
  accentColor: string;
}

interface ThemeConfig {
  icon: LucideIcon;
  sectionClassName: string;
  eyebrowClassName: string;
  headingClassName: string;
  introClassName: string;
  labelClassName: string;
  valueClassName: string;
  pattern: string;
  patternSize: string;
  markerClassName: string;
}

const themeConfigs: Record<ServiceQuickFactsTheme, ThemeConfig> = {
  expedition: {
    icon: Compass,
    sectionClassName: "bg-[#07150f] text-white",
    eyebrowClassName: "text-white/60",
    headingClassName: "text-white",
    introClassName: "text-white/70",
    labelClassName: "text-white/50",
    valueClassName: "text-white",
    pattern:
      "radial-gradient(circle at 1px 1px, rgba(255,255,255,.13) 1px, transparent 1.25px), repeating-linear-gradient(125deg, transparent 0 52px, rgba(255,255,255,.035) 53px, transparent 54px 104px)",
    patternSize: "26px 26px, auto",
    markerClassName: "rounded-full border-dashed",
  },
  investigation: {
    icon: Fingerprint,
    sectionClassName: "bg-[#061411] text-white",
    eyebrowClassName: "text-white/60",
    headingClassName: "text-white",
    introClassName: "text-white/70",
    labelClassName: "text-white/50",
    valueClassName: "text-white",
    pattern:
      "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
    patternSize: "42px 42px",
    markerClassName: "rounded-[0.18rem] border-solid",
  },
  strategy: {
    icon: PanelsTopLeft,
    sectionClassName: "bg-[#101824] text-white",
    eyebrowClassName: "text-white/60",
    headingClassName: "text-white",
    introClassName: "text-white/70",
    labelClassName: "text-white/50",
    valueClassName: "text-white",
    pattern:
      "linear-gradient(45deg, rgba(255,255,255,.035) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.035) 75%), linear-gradient(45deg, rgba(255,255,255,.035) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.035) 75%)",
    patternSize: "56px 56px",
    markerClassName: "rounded-sm border-double",
  },
  retreat: {
    icon: Map,
    sectionClassName: "bg-[#f3efe6] text-[#12211e]",
    eyebrowClassName: "text-[#12211e]/60",
    headingClassName: "text-[#12211e]",
    introClassName: "text-[#12211e]/70",
    labelClassName: "text-[#12211e]/50",
    valueClassName: "text-[#12211e]",
    pattern:
      "repeating-linear-gradient(0deg, transparent 0 39px, rgba(18,33,30,.055) 40px), radial-gradient(circle at 1px 1px, rgba(18,33,30,.07) 1px, transparent 1.2px)",
    patternSize: "auto, 24px 24px",
    markerClassName: "rounded-full border-solid",
  },
  training: {
    icon: ClipboardList,
    sectionClassName: "bg-[#f3f4fa] text-[#101725]",
    eyebrowClassName: "text-[#101725]/60",
    headingClassName: "text-[#101725]",
    introClassName: "text-[#101725]/70",
    labelClassName: "text-[#101725]/50",
    valueClassName: "text-[#101725]",
    pattern:
      "repeating-linear-gradient(0deg, transparent 0 35px, rgba(16,23,37,.055) 36px), linear-gradient(90deg, transparent 0 7%, rgba(16,23,37,.06) 7% 7.1%, transparent 7.1%)",
    patternSize: "auto",
    markerClassName: "rounded-md border-solid",
  },
};

export function ServiceQuickFacts({ slug, accentColor }: ServiceQuickFactsProps) {
  const content = getServiceQuickFacts(slug);
  if (!content) return null;

  const theme = themeConfigs[content.theme];
  const ThemeIcon = theme.icon;
  const titleId = `${slug}-quick-facts-title`;

  return (
    <section
      id="quick-facts"
      aria-labelledby={titleId}
      className={`relative isolate overflow-hidden border-y ${theme.sectionClassName}`}
      style={{ borderColor: `${accentColor}55` }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ backgroundImage: theme.pattern, backgroundSize: theme.patternSize }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full blur-[110px]"
        style={{ backgroundColor: `${accentColor}24` }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-14 lg:px-8">
        <div>
          <header className="max-w-3xl xl:grid xl:max-w-none xl:grid-cols-[minmax(18rem,28rem)_minmax(20rem,34rem)] xl:items-end xl:justify-between xl:gap-12">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center border-2 ${theme.markerClassName}`}
                  style={{ borderColor: accentColor, color: accentColor, backgroundColor: `${accentColor}12` }}
                >
                  <ThemeIcon className="h-5 w-5" />
                </span>
                <p className={`font-mono text-[10px] font-bold uppercase tracking-[0.28em] ${theme.eyebrowClassName}`}>
                  {content.eyebrow}
                </p>
              </div>
              <h2 id={titleId} className={`font-display text-3xl font-black leading-[1.04] sm:text-4xl ${theme.headingClassName}`}>
                {content.heading}
              </h2>
            </div>
            <p className={`mt-4 max-w-lg text-sm leading-6 sm:text-base xl:mb-0.5 xl:mt-0 ${theme.introClassName}`}>{content.intro}</p>
          </header>

          <dl
            className="mt-9 grid border-y md:grid-cols-2 xl:grid-flow-col xl:auto-cols-fr xl:grid-cols-none"
            style={{ borderColor: `${accentColor}42` }}
          >
            {content.facts.map((fact, index) => (
              <div
                key={`${fact.label}-${fact.value}`}
                className="group relative min-w-0 border-t px-1 py-5 first:border-t-0 md:px-6 md:py-6 md:[&:nth-child(2)]:border-t-0 md:[&:nth-child(even)]:border-l xl:border-l xl:border-t-0 xl:px-5 xl:py-5 xl:first:border-l-0"
                style={{ borderColor: `${accentColor}32` }}
              >
                <dt className={`font-mono text-[9px] font-bold uppercase tracking-[0.2em] ${theme.labelClassName}`}>
                  <span
                    aria-hidden="true"
                    className={`mb-5 flex h-7 w-7 items-center justify-center border font-mono text-[9px] font-black ${theme.markerClassName}`}
                    style={{ borderColor: `${accentColor}9a`, color: accentColor, backgroundColor: `${accentColor}12` }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{fact.label}</span>
                </dt>
                <dd className={`mt-2 break-words font-display text-xl font-black leading-tight md:text-2xl xl:text-xl ${theme.valueClassName}`}>
                  {fact.value}
                  {fact.detail ? <span className={`mt-2 block font-sans text-xs font-normal leading-5 ${theme.introClassName}`}>{fact.detail}</span> : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
