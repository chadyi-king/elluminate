import { ArrowRight, Compass, Monitor, Plane, Search, Sparkles, Target } from "lucide-react";

import type { ServiceFamily } from "@/data/servicePageBlueprints";
import type { ServiceExperienceStage } from "@/data/serviceExperienceContent";

interface ServiceTransitionStripProps {
  slug: string;
  family: ServiceFamily;
  accentColor: string;
  stages: readonly ServiceExperienceStage[];
}

const iconByFamily = {
  physical: Compass,
  equipment: Target,
  virtual: Monitor,
  retreat: Plane,
  training: Sparkles,
} satisfies Record<ServiceFamily, typeof Compass>;

export function ServiceTransitionStrip({ slug, family, accentColor, stages }: ServiceTransitionStripProps) {
  const Icon = iconByFamily[family];
  const beats = stages.slice(0, 3);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#071a2a] px-4 py-8 text-white" aria-labelledby={`${slug}-transition-title`}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <h2 id={`${slug}-transition-title`} className="sr-only">Three beats of the experience</h2>
        <ol className="grid gap-3 md:grid-cols-3">
          {beats.map((beat, index) => (
            <li key={beat.title} className="group relative flex min-h-24 items-center gap-4 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.06] px-4 py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10" style={{ backgroundColor: `${accentColor}1f`, color: accentColor }}>
                {index === 1 ? <Search className="h-5 w-5" aria-hidden="true" /> : <Icon className="h-5 w-5" aria-hidden="true" />}
              </span>
              <div className="min-w-0">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/50">Beat {String(index + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-display text-base font-black leading-tight text-white">{beat.title}</p>
              </div>
              {index < beats.length - 1 ? <ArrowRight className="absolute right-3 h-4 w-4 text-white/25 md:-right-2" aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

