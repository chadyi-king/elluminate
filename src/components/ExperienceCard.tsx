import type { CSSProperties } from "react";
import { ArrowRight, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { getServiceCardPresentation } from "@/data/serviceCardCatalog";

export type ExperienceCardVariant = "featured" | "compact";

interface ExperienceCardProps {
  slug: string;
  variant?: ExperienceCardVariant;
  className?: string;
}

export const ExperienceCard = ({ slug, variant = "featured", className }: ExperienceCardProps) => {
  const card = getServiceCardPresentation(slug);
  if (!card) return null;

  const Icon = card.icon;
  const compact = variant === "compact";
  const style = {
    "--experience-accent": card.accent,
    borderColor: `${card.accent}3d`,
    background: `linear-gradient(180deg, #ffffff 34%, ${card.accent}16 100%)`,
  } as CSSProperties;

  return (
    <article
      className={cn(
        "group h-full overflow-hidden rounded-[1.4rem] border shadow-[0_14px_45px_rgba(20,40,80,0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none",
        !compact && "rounded-[1.6rem]",
        className,
      )}
      style={style}
    >
      <Link
        to={`/services/${card.slug}`}
        aria-label={`See the ${card.title} experience`}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-primary/30"
      >
        <div className={cn("relative overflow-hidden", compact ? "aspect-[16/9]" : "aspect-[16/10]") }>
          <img
            src={card.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
          />
          <div
            className="absolute inset-0 bg-[var(--experience-accent)] opacity-20 transition-opacity duration-300 group-hover:opacity-[0.27] motion-reduce:transition-none"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" aria-hidden="true" />
          <span
            className={cn(
              "absolute left-4 top-4 flex items-center justify-center rounded-2xl text-white shadow-lg ring-1 ring-white/25",
              compact ? "h-10 w-10" : "h-11 w-11",
            )}
            style={{ backgroundColor: card.accent }}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] truncate whitespace-nowrap rounded-full border border-white/25 bg-slate-950/55 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
            {card.category}
          </span>
        </div>

        <div className={cn("flex flex-1 flex-col", compact ? "p-4" : "p-5 sm:p-6") }>
          <h3
            title={card.title}
            className={cn(
              "truncate whitespace-nowrap font-display font-black leading-tight text-foreground",
              compact ? "text-lg" : "text-xl sm:text-[1.28rem]",
            )}
          >
            {card.shortTitle}
          </h3>
          <p className={cn("mt-3 text-muted-foreground", compact ? "line-clamp-2 min-h-10 text-xs leading-5" : "line-clamp-2 min-h-11 text-sm leading-[1.4rem]") }>
            {card.hook}
          </p>

          <div className="mt-4 flex min-h-7 flex-wrap items-center gap-2">
            <span
              className="inline-flex max-w-full items-center gap-1.5 truncate rounded-full px-2.5 py-1 text-[0.66rem] font-bold text-foreground/75"
              style={{ backgroundColor: `${card.accent}1f` }}
            >
              <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
              <span className="truncate">{card.setting}</span>
            </span>
            <span
              className="inline-flex max-w-full items-center gap-1.5 truncate rounded-full px-2.5 py-1 text-[0.66rem] font-bold text-foreground/75"
              style={{ backgroundColor: `${card.accent}1f` }}
            >
              <Zap className="h-3 w-3 shrink-0" aria-hidden="true" />
              <span className="truncate">{card.energy}</span>
            </span>
          </div>

          <span className={cn("mt-auto inline-flex items-center gap-2 pt-5 text-sm font-black", compact && "text-xs")} style={{ color: card.accent }}>
            See the Experience
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
};
