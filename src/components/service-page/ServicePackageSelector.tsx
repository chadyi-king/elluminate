import { ArrowRight, Check, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import type { AddOn } from "@/data/servicesData";
import type { ServicePackageOption } from "@/data/servicePageBlueprints";

interface ServicePackageSelectorProps {
  serviceSlug: string;
  serviceTitle: string;
  accentColor: string;
  packages: readonly ServicePackageOption[];
  addOns: readonly AddOn[];
}

export function ServicePackageSelector({
  serviceSlug,
  serviceTitle,
  accentColor,
  packages,
  addOns,
}: ServicePackageSelectorProps) {
  const { openContactModal } = useContactModal();
  if (packages.length === 0) return null;

  return (
    <section className="bg-white px-4 py-16 sm:py-20" aria-labelledby={`${serviceSlug}-packages-title`}>
      <div className="container mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: accentColor }}>Choose your starting point</span>
          <h2 id={`${serviceSlug}-packages-title`} className="mt-3 font-display text-3xl font-black text-slate-950 sm:text-5xl">
            Start with the level of planning you need.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Pick a starting package for {serviceTitle}. The confirmed quote follows your date, group and final inclusions.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          {packages.map((option) => (
            <article key={option.id} className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6 shadow-[0_16px_45px_rgba(30,60,100,0.08)]">
              <span className="h-2 w-16 rounded-full" style={{ backgroundColor: option.color || accentColor }} aria-hidden="true" />
              <h3 className="mt-6 font-display text-2xl font-black text-slate-950">{option.title}</h3>
              {option.price ? <p className="mt-2 text-lg font-black" style={{ color: accentColor }}>{option.price}</p> : null}
              <p className="mt-4 text-sm leading-6 text-slate-600">{option.description}</p>
              <ul className="mt-6 space-y-3">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${accentColor}1f`, color: accentColor }}>
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                type="button"
                className="group mt-8 min-h-12 justify-between px-5"
                style={{ backgroundColor: accentColor }}
                onClick={() => openContactModal({ serviceSlug, packageId: option.id })}
              >
                Choose {option.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </article>
          ))}
        </div>

        {addOns.length > 0 ? (
          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Optional additions</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {addOns.map((addOn) => (
                <span key={addOn.title} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-semibold text-slate-700" title={addOn.description}>
                  <Plus className="h-3.5 w-3.5" style={{ color: accentColor }} aria-hidden="true" />
                  {addOn.title}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
