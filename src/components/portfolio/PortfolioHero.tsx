import { ArrowDown, ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioHeroProps {
  onOpenContact: () => void;
}

export const PortfolioHero = ({ onOpenContact }: PortfolioHeroProps) => {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-foreground text-background">
      <img
        src="/images/services/amazing-race/gallery-1.jpg"
        alt="A company team working together during an outdoor challenge"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
        width={1200}
        height={900}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/20" />

      <div className="container relative z-10 mx-auto flex min-h-[78vh] items-end px-6 pb-14 pt-28 sm:items-center sm:pb-20 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary backdrop-blur-sm">
            <PlayCircle className="h-4 w-4" />
            Real event portfolio
          </p>
          <h1 className="max-w-[13ch] font-display text-[2.7rem] font-black leading-[0.98] tracking-normal text-background sm:text-6xl">
            Real teams. Real moments. Built around the brief.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-background/82 sm:text-xl sm:leading-8">
            Explore team challenges, facilitated activity formats and company retreats captured during actual event delivery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={onOpenContact} variant="hero" size="xl" className="w-full sm:w-auto">
              Plan My Event
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              asChild
              variant="primary-outline"
              size="xl"
              className="w-full border-background/60 text-background hover:border-background hover:bg-background hover:text-foreground sm:w-auto"
            >
              <a href="#event-work">
                Explore The Work
                <ArrowDown className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-background/72">
            <span>Indoor and outdoor formats</span>
            <span>Facilitated team challenges</span>
            <span>Company retreats</span>
          </div>
        </div>
      </div>
    </section>
  );
};
