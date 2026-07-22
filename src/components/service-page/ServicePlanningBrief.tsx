import { ClipboardCheck, Sparkles } from "lucide-react";

import adventurePair from "@/assets/service-characters/adventure-pair.webp";
import creativePair from "@/assets/service-characters/creative-pair.webp";
import detectivePair from "@/assets/service-characters/detective-pair.webp";
import type { ServiceFamily, ServicePlanningFact } from "@/data/servicePageBlueprints";

interface ServicePlanningBriefProps {
  slug: string;
  family: ServiceFamily;
  title: string;
  accentColor: string;
  facts: readonly ServicePlanningFact[];
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

export function ServicePlanningBrief({
  slug,
  family,
  title,
  accentColor,
  facts,
}: ServicePlanningBriefProps) {
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
