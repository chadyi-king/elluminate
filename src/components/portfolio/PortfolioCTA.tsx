import { ArrowRight, CalendarDays, Mail, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioCTAProps {
  onOpenContact: () => void;
}

export const PortfolioCTA = ({ onOpenContact }: PortfolioCTAProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-foreground py-20 text-background sm:py-24">
      <img
        src="/images/services/overseas-retreats/gallery-4.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        width={1200}
        height={900}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/62" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Your event, next</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-black leading-tight text-background sm:text-5xl">
              Planning something similar, or something entirely different?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-background/76">
              Send the details you already have. We will help shape an activity direction around your group, venue, timing and event goal.
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
                className="w-full border-background/50 text-background hover:border-background hover:bg-background hover:text-foreground sm:w-auto"
              >
                <a href="https://wa.me/6588352482" target="_blank" rel="noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

          <div className="border-l border-background/15 pl-0 lg:pl-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Useful details to send</p>
            <ul className="mt-6 space-y-5">
              <li className="flex items-center gap-4 text-base font-semibold text-background/84">
                <Users className="h-5 w-5 shrink-0 text-primary" />
                Expected group size
              </li>
              <li className="flex items-center gap-4 text-base font-semibold text-background/84">
                <CalendarDays className="h-5 w-5 shrink-0 text-primary" />
                Preferred date or timing window
              </li>
              <li className="flex items-center gap-4 text-base font-semibold text-background/84">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                Venue preference and event goal
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
