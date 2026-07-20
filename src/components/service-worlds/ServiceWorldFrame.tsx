import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Compass,
  FileSearch,
  Fingerprint,
  Map,
  MapPin,
  Route,
  ScanSearch,
} from "lucide-react";

type ServiceWorldSlug = "amazing-race" | "csi-bones";

interface ServiceWorldFrameProps {
  slug?: string;
  children: ReactNode;
}

interface ServiceWorldBriefingProps {
  slug?: string;
  accentColor: string;
}

interface BriefingItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface WorldConfig {
  dataValue: "expedition" | "forensics";
  eyebrow: string;
  title: string;
  railLabel: string;
  railMeta: string;
  items: BriefingItem[];
}

const worldConfigs: Record<ServiceWorldSlug, WorldConfig> = {
  "amazing-race": {
    dataValue: "expedition",
    eyebrow: "Field brief",
    title: "How the mission moves",
    railLabel: "Field route",
    railMeta: "Checkpoints active",
    items: [
      { label: "Format", value: "Checkpoint race", icon: MapPin },
      { label: "Player rhythm", value: "Move · solve · collaborate", icon: Route },
      { label: "Route brief", value: "Shaped around your venue", icon: Compass },
    ],
  },
  "csi-bones": {
    dataValue: "forensics",
    eyebrow: "Case file",
    title: "How the investigation unfolds",
    railLabel: "Evidence log",
    railMeta: "Case file active",
    items: [
      { label: "Format", value: "Team investigation", icon: FileSearch },
      { label: "Player rhythm", value: "Examine · connect · decide", icon: ScanSearch },
      { label: "Environment", value: "Indoor-friendly mystery", icon: Fingerprint },
    ],
  },
};

const getWorldConfig = (slug?: string) =>
  slug === "amazing-race" || slug === "csi-bones" ? worldConfigs[slug] : null;

const worldTextureStyles = `
  [data-service-world="expedition"] .service-world-page > section {
    background-image:
      radial-gradient(circle at 12px 12px, rgba(255, 196, 0, 0.075) 0 1.25px, transparent 1.5px),
      linear-gradient(118deg, transparent 0 49.75%, rgba(255, 196, 0, 0.035) 50%, transparent 50.25%);
    background-size: 38px 38px, 220px 220px;
  }

  [data-service-world="forensics"] .service-world-page > section {
    background-image:
      linear-gradient(rgba(38, 208, 124, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(38, 208, 124, 0.035) 1px, transparent 1px),
      repeating-linear-gradient(0deg, transparent 0 5px, rgba(255, 255, 255, 0.012) 6px);
    background-size: 48px 48px, 48px 48px, 100% 6px;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-service-world] *,
    [data-service-world] *::before,
    [data-service-world] *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export function ServiceWorldFrame({ slug, children }: ServiceWorldFrameProps) {
  const world = getWorldConfig(slug);

  if (!world) {
    return <>{children}</>;
  }

  const isExpedition = world.dataValue === "expedition";
  const RailIcon = isExpedition ? Map : Fingerprint;

  return (
    <div
      data-service-world={world.dataValue}
      className="relative isolate overflow-x-clip"
    >
      <style>{worldTextureStyles}</style>

      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-y-0 z-30 hidden w-px xl:block ${
          isExpedition ? "left-5 bg-[#ffc400]/35" : "right-5 bg-[#26d07c]/35"
        }`}
      />

      <aside
        aria-hidden="true"
        className={`pointer-events-none fixed top-1/2 z-30 hidden -translate-y-1/2 items-center gap-3 xl:flex ${
          isExpedition
            ? "left-3 -rotate-90 text-[#5d4a00] dark:text-[#ffe070]"
            : "right-2 rotate-90 text-[#075a34] dark:text-[#76f2b6]"
        }`}
      >
        <RailIcon className="h-4 w-4" strokeWidth={1.75} />
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.34em]">
          {world.railLabel}
        </span>
        <span className="h-px w-10 bg-current opacity-50" />
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-70">
          {world.railMeta}
        </span>
      </aside>

      {children}
    </div>
  );
}

export function ServiceWorldBriefing({ slug, accentColor }: ServiceWorldBriefingProps) {
  const world = getWorldConfig(slug);

  if (!world) {
    return null;
  }

  const isExpedition = world.dataValue === "expedition";
  const TitleIcon = isExpedition ? Map : FileSearch;
  return (
    <section
      aria-labelledby={`${slug}-world-briefing-title`}
      className={`relative isolate overflow-hidden border-y px-4 py-7 md:py-9 ${
        isExpedition
          ? "border-[#ffc400]/45 bg-[#07160f] text-[#fff9dc]"
          : "border-[#26d07c]/45 bg-[#0b1110] text-[#f0fff7]"
      }`}
    >
      <WorldBackdrop world={world.dataValue} />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_2.2fr] lg:gap-10">
          <div className="flex items-start gap-4">
            <div
              className={`grid h-12 w-12 shrink-0 place-items-center border ${
                isExpedition
                  ? "rotate-45 rounded-[0.35rem] border-[#ffc400]/60 bg-[#ffc400]/10"
                  : "rounded-sm border-[#26d07c]/60 bg-[#26d07c]/10"
              }`}
            >
              <TitleIcon
                aria-hidden="true"
                className={`h-6 w-6 ${isExpedition ? "-rotate-45" : ""}`}
                style={{ color: accentColor }}
                strokeWidth={1.7}
              />
            </div>
            <div>
              <p
                className="font-mono text-[10px] font-bold uppercase tracking-[0.34em]"
                style={{ color: accentColor }}
              >
                {world.eyebrow}
              </p>
              <h2
                id={`${slug}-world-briefing-title`}
                className="mt-2 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl"
              >
                {world.title}
              </h2>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className={`absolute top-7 right-[16.66%] left-[16.66%] hidden border-t sm:block ${
                isExpedition ? "border-dashed border-[#ffc400]/35" : "border-[#26d07c]/25"
              }`}
            />
            <ol className="relative grid gap-3 sm:grid-cols-3">
              {world.items.map((item, index) => (
                <BriefingItemCard
                  key={item.label}
                  item={item}
                  index={index}
                  accentColor={accentColor}
                  world={world.dataValue}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BriefingItemCardProps {
  item: BriefingItem;
  index: number;
  accentColor: string;
  world: WorldConfig["dataValue"];
}

function BriefingItemCard({ item, index, accentColor, world }: BriefingItemCardProps) {
  const Icon = item.icon;
  const isExpedition = world === "expedition";

  return (
    <li
      className={`relative z-10 grid grid-cols-[auto_1fr] items-center gap-3 border p-3 backdrop-blur-sm ${
        isExpedition
          ? "rounded-full border-[#ffc400]/25 bg-[#10291d]/90 pr-5"
          : "rounded-sm border-[#26d07c]/25 bg-[#121b19]/95"
      }`}
    >
      <div
        className={`relative grid h-10 w-10 shrink-0 place-items-center border bg-[#07110e] ${
          isExpedition ? "rounded-full border-dashed" : "rounded-sm"
        }`}
        style={{ borderColor: `${accentColor}80`, color: accentColor }}
      >
        <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
        <span className="sr-only">Step {index + 1}</span>
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/55">
          {String(index + 1).padStart(2, "0")} · {item.label}
        </p>
        <p className="mt-1 text-sm font-semibold leading-tight text-white sm:text-[13px]">
          {item.value}
        </p>
      </div>
    </li>
  );
}

function WorldBackdrop({ world }: { world: WorldConfig["dataValue"] }) {
  if (world === "expedition") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffc400 1px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />
        <svg
          className="absolute -right-12 top-1/2 h-44 w-[58%] -translate-y-1/2 opacity-20"
          viewBox="0 0 700 160"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M10 120 C120 10 205 145 305 62 S510 18 690 98"
            stroke="#FFC400"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          {[10, 305, 690].map((cx, index) => (
            <g key={cx}>
              <circle cx={cx} cy={[120, 62, 98][index]} r="9" stroke="#FFC400" />
              <circle cx={cx} cy={[120, 62, 98][index]} r="3" fill="#FFC400" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(#26d07c 1px, transparent 1px), linear-gradient(90deg, #26d07c 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-[#26d07c]/30">
        <div className="absolute inset-8 rounded-full border border-dashed border-[#26d07c]/35" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#26d07c]/25" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-[#26d07c]/25" />
        <CheckCircle2 className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-[#26d07c]/45" />
      </div>
    </div>
  );
}
