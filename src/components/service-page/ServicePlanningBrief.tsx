import {
  Accessibility,
  ArrowRight,
  BrainCircuit,
  Bus,
  CalendarClock,
  Camera,
  Check,
  ClipboardCheck,
  Clock3,
  CloudSun,
  Dumbbell,
  Gauge,
  Gift,
  Hotel,
  Laptop,
  ListChecks,
  MapPin,
  MapPinned,
  Medal,
  Mic2,
  MonitorUp,
  PackageCheck,
  Palette,
  Plane,
  Plus,
  Route,
  SlidersHorizontal,
  Sparkles,
  Swords,
  Trophy,
  Users,
  UsersRound,
  UtensilsCrossed,
  Wifi,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import adventurePair from "@/assets/service-characters/adventure-pair.webp";
import creativePair from "@/assets/service-characters/creative-pair.webp";
import detectivePair from "@/assets/service-characters/detective-pair.webp";
import type {
  ServiceFamily,
  ServicePackageOption,
  ServicePlanningFact,
} from "@/data/servicePageBlueprints";
import type { AddOn } from "@/data/servicesData";

interface ServicePlanningBriefProps {
  slug: string;
  family: ServiceFamily;
  title: string;
  accentColor: string;
  facts: readonly ServicePlanningFact[];
  /** Opt-in treatment for the approved activity-page batch. */
  variant?: "legacy" | "activity-v2";
  packages?: readonly ServicePackageOption[];
  addOns?: readonly AddOn[];
  actorSrc?: string;
  plannerGuidance?: string;
}

const actorByFamily: Record<ServiceFamily, string> = {
  physical: adventurePair,
  equipment: adventurePair,
  virtual: creativePair,
  retreat: creativePair,
  training: detectivePair,
};

const plannerCopy: Record<ServiceFamily, string> = {
  physical: "Give us the people, place and pace. We will shape the practical route from there.",
  equipment: "Tell us who is playing and where. We will plan the match flow, gear and safety briefing.",
  virtual: "Share the group, platform and timing. We will prepare the joining flow and live hosting.",
  retreat: "Start with the dates, purpose and group. Destination and programme decisions come next.",
  training: "Begin with the audience and the change you want. We will shape the framework and exercises around it.",
};

const factIconMatchers: readonly [RegExp, LucideIcon][] = [
  [/group|player|participant|pax/i, Users],
  [/duration|hour|timing/i, Clock3],
  [/setting|venue|location/i, MapPinned],
  [/booking|lead time|notice/i, CalendarClock],
  [/intensity|energy|pace/i, Gauge],
  [/weather|rain/i, CloudSun],
  [/access/i, Accessibility],
  [/custom/i, SlidersHorizontal],
  [/match|format/i, Swords],
  [/team size|crew/i, UsersRound],
  [/gear|equipment|provided/i, PackageCheck],
  [/platform/i, MonitorUp],
  [/device/i, Laptop],
  [/technical|hosting|connection/i, Wifi],
  [/travel|flight/i, Plane],
  [/accommodation|hotel|stay/i, Hotel],
  [/programme|inclusion/i, ListChecks],
  [/framework|profile|assessment/i, BrainCircuit],
  [/exercise|activity/i, Dumbbell],
  [/takeaway|outcome/i, ClipboardCheck],
];

const addOnIconMatchers: readonly [RegExp, LucideIcon][] = [
  [/photo|photograph|recap|highlight|coverage/i, Camera],
  [/evidence|case file|question set|mission card|game curation|customisation/i, ClipboardCheck],
  [/set dressing|theming|styled/i, Palette],
  [/leaderboard|ceremony/i, Trophy],
  [/field layout|room layout/i, MapPinned],
  [/materials/i, PackageCheck],
  [/name tag/i, UsersRound],
  [/snack/i, UtensilsCrossed],
  [/transport|bus|transfer/i, Bus],
  [/medal|prize|troph/i, Medal],
  [/food|cater|refreshment/i, UtensilsCrossed],
  [/venue|location/i, MapPin],
  [/route/i, Route],
  [/emcee|host|microphone/i, Mic2],
  [/brand|design|creative/i, Palette],
  [/gift|pack/i, Gift],
  [/award|champion/i, Trophy],
  [/travel|flight/i, Plane],
  [/hotel|stay|accommodation/i, Hotel],
];

function matchIcon(label: string, matchers: readonly [RegExp, LucideIcon][], fallback: LucideIcon) {
  return matchers.find(([pattern]) => pattern.test(label))?.[1] ?? fallback;
}

export function ServicePlanningBrief({
  slug,
  family,
  title,
  accentColor,
  facts,
  variant = "legacy",
  packages = [],
  addOns = [],
  actorSrc,
  plannerGuidance,
}: ServicePlanningBriefProps) {
  const { openContactModal } = useContactModal();

  if (variant === "activity-v2") {
    const visibleFacts = facts.slice(0, 6);

    return (
      <section
        id="planning-brief"
        aria-label={`${title} planning brief`}
        className="relative scroll-mt-28 overflow-hidden border-y border-slate-200 bg-[#f7f9fc] py-10 sm:py-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${accentColor}1f 1px, transparent 1.2px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(30,60,110,0.10)] lg:grid lg:grid-cols-[minmax(14rem,0.72fr)_minmax(0,2.28fr)]">
            <div className="relative hidden min-h-full overflow-hidden border-r border-slate-200 bg-[linear-gradient(160deg,#ffffff_0%,#f4f7fb_62%,#edf2f8_100%)] p-6 text-slate-950 lg:flex lg:flex-col">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-70"
                style={{ background: `radial-gradient(circle at 16% 16%, ${accentColor}25, transparent 44%)` }}
              />
              <div className="relative z-10">
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em]"
                  style={{ borderColor: `${accentColor}70`, backgroundColor: `${accentColor}18`, color: accentColor }}
                >
                  <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                  Planning brief
                </span>
                <h2 className="mt-5 font-display text-3xl font-black leading-[1.04]">
                  Plan {title} with the useful details first.
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {plannerGuidance ?? plannerCopy[family]}
                </p>
              </div>
              <img
                src={actorSrc ?? actorByFamily[family]}
                alt=""
                loading="lazy"
                decoding="async"
                className="pointer-events-none absolute -bottom-5 left-1/2 h-[17rem] w-auto max-w-none -translate-x-1/2 object-contain object-bottom opacity-95 drop-shadow-[0_14px_22px_rgba(15,23,42,0.12)]"
              />
            </div>

            <div className="p-4 sm:p-6 lg:p-7">
              <header className="mb-5 lg:hidden">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em]" style={{ color: accentColor }}>
                  <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                  Planning brief
                </span>
                <h2 className="mt-2 font-display text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                  Plan {title} with the useful details first.
                </h2>
              </header>

              {packages.length > 0 ? (
                <div className="grid items-stretch gap-3 md:grid-cols-3">
                  {packages.slice(0, 3).map((option) => (
                    <article
                      key={option.id}
                      className="flex h-full min-w-0 flex-col rounded-[1.35rem] border border-slate-200 bg-[#f8fafc] p-4"
                    >
                      <span className="h-1.5 w-12 rounded-full" style={{ backgroundColor: option.color || accentColor }} aria-hidden="true" />
                      <h3 className="mt-3 min-h-[3rem] font-display text-xl font-black leading-tight text-slate-950">
                        {option.title}
                      </h3>
                      <p className="min-h-7 text-sm font-black" style={{ color: accentColor }}>
                        {option.price ?? "Tailored quote"}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-slate-600">{option.description}</p>
                      <ul className="mt-3 flex-1 space-y-2">
                        {option.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-xs font-semibold leading-5 text-slate-700">
                            <span
                              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: `${accentColor}1f`, color: accentColor }}
                            >
                              <Check className="h-3 w-3" aria-hidden="true" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        type="button"
                        className="group mt-4 min-h-11 w-full justify-between px-4 text-xs sm:text-sm"
                        style={{ backgroundColor: accentColor }}
                        onClick={() => openContactModal({ serviceSlug: slug, packageId: option.id })}
                      >
                        Choose {option.title}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Button>
                    </article>
                  ))}
                </div>
              ) : null}

              <dl className={`grid grid-cols-2 gap-3 ${packages.length > 0 ? "mt-4" : ""} lg:grid-cols-3`}>
                {visibleFacts.map((fact, index) => {
                  const FactIcon = matchIcon(fact.label, factIconMatchers, Sparkles);
                  const isLongestFinalFact = index === visibleFacts.length - 1;

                  return (
                    <div
                      key={`${fact.label}-${fact.value}`}
                      className={`flex min-w-0 flex-col items-center rounded-[1.1rem] border border-slate-200 bg-white px-3 py-3.5 text-center ${
                        isLongestFinalFact && visibleFacts.length % 2 !== 0 ? "col-span-2 lg:col-span-1" : ""
                      }`}
                    >
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
                      >
                        <FactIcon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <dt className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.13em] text-slate-500">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 break-words font-display text-sm font-black leading-snug text-slate-950 sm:text-base">
                        {fact.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>

              {addOns.length > 0 ? (
                <div className="mt-4 rounded-[1.25rem] border border-slate-200 bg-slate-50/80 p-3.5">
                  <p className="text-center text-[0.62rem] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Optional additions
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
                    {addOns.map((addOn) => {
                      const AddOnIcon = matchIcon(`${addOn.icon} ${addOn.title}`, addOnIconMatchers, Plus);
                      return (
                        <div
                          key={addOn.title}
                          className="flex min-h-[5.25rem] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-2 py-3 text-center"
                          title={addOn.description}
                        >
                          <AddOnIcon className="h-4 w-4" style={{ color: accentColor }} aria-hidden="true" />
                          <span className="mt-2 text-xs font-bold leading-tight text-slate-700">{addOn.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="planning-brief"
      aria-label={`${title} planning brief`}
      className="relative overflow-hidden border-y border-slate-200 bg-[#f7f9fc] py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${accentColor}1f 1px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full blur-[110px]"
        style={{ backgroundColor: `${accentColor}1d` }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(30,60,110,0.10)] lg:grid lg:grid-cols-[minmax(18rem,1fr)_minmax(0,2fr)]">
          <div className="relative hidden min-h-[34rem] overflow-hidden border-r border-slate-200 bg-[linear-gradient(160deg,#ffffff_0%,#f4f7fb_58%,#eef3f9_100%)] p-8 text-slate-950 lg:flex lg:flex-col">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{ background: `radial-gradient(circle at 14% 18%, ${accentColor}24, transparent 42%)` }}
            />
            <div className="relative z-10">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em]"
                style={{ borderColor: `${accentColor}70`, backgroundColor: `${accentColor}18`, color: accentColor }}
              >
                <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                Planning brief
              </span>
              <h2 className="mt-6 font-display text-4xl font-black leading-[1.02]">
                Plan {title} with the useful details first.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-7 text-slate-600">{plannerCopy[family]}</p>
            </div>

            <img
              src={actorByFamily[family]}
              alt=""
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute -bottom-8 -left-6 h-[21rem] w-auto max-w-none object-contain object-bottom opacity-95 drop-shadow-[0_18px_26px_rgba(15,23,42,0.12)]"
            />
          </div>

          <div className="p-5 sm:p-7 lg:p-9">
            <header className="mb-7 lg:hidden">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em]" style={{ color: accentColor }}>
                <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                Planning brief
              </span>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight text-slate-950">
                Plan {title} with the useful details first.
              </h2>
            </header>

            <dl className="grid grid-cols-2 gap-3 lg:grid-cols-3">
              {facts.map((fact, index) => {
                const isLongestFinalFact = index === facts.length - 1;

                return (
                  <div
                    key={`${fact.label}-${fact.value}`}
                    className={`min-w-0 rounded-[1.25rem] border border-slate-200 bg-[#fbfcfe] p-4 sm:p-5 ${
                      isLongestFinalFact ? "col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <dt className="flex items-center gap-2 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-slate-500">
                      <span
                        aria-hidden="true"
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-black"
                        style={{ backgroundColor: `${accentColor}1d`, color: accentColor }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {fact.label}
                    </dt>
                    <dd className="mt-3 break-words font-display text-base font-black leading-snug text-slate-950 sm:text-lg">
                      {fact.value}
                    </dd>
                  </div>
                );
              })}
            </dl>

            <p className="mt-6 flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
              <Sparkles className="mt-1 h-4 w-4 shrink-0" style={{ color: accentColor }} aria-hidden="true" />
              These are starting points for the planning conversation. Your final format and quote follow the confirmed brief.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
