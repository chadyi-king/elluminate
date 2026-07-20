import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import charBlueMan from "@/assets/hero/char-blue-man.webp";
import charRedWoman from "@/assets/hero/char-red-woman.webp";
import charGreenWoman from "@/assets/hero/char-green-woman.webp";
import charYellowBoy from "@/assets/hero/char-yellow-boy.webp";
import { ConfettiBurst } from "./ConfettiBurst";
import { PhotoWall } from "./hero/PhotoWall";
import { RotatingWord } from "./hero/RotatingWord";
import { HeroCharacters } from "./hero/HeroCharacters";

const sparkLetters = [
  { letter: "S", color: "hsl(45, 100%, 50%)" },
  { letter: "P", color: "hsl(25, 100%, 55%)" },
  { letter: "A", color: "hsl(340, 82%, 52%)" },
  { letter: "R", color: "hsl(270, 70%, 55%)" },
  { letter: "K", color: "hsl(160, 70%, 45%)" },
];

const mobileCharacters = [
  { image: charBlueMan, label: "Teams", color: "from-blue-100 to-blue-50" },
  { image: charGreenWoman, label: "Retreats", color: "from-emerald-100 to-emerald-50" },
  { image: charRedWoman, label: "Training", color: "from-rose-100 to-rose-50" },
  { image: charYellowBoy, label: "Schools", color: "from-amber-100 to-amber-50" },
];

export const HeroSection = () => {
  const { openContactModal } = useContactModal();
  const reduceMotion = useReducedMotion();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCTAClick = () => {
    if (reduceMotion) {
      openContactModal();
      return;
    }

    setShowConfetti(true);
    window.setTimeout(() => openContactModal(), 260);
  };

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay },
  });

  return (
    <section className="relative isolate flex min-h-[calc(100svh-88px)] flex-col items-center justify-start overflow-hidden bg-white lg:min-h-[820px]">
      <PhotoWall />
      <HeroCharacters />
      <ConfettiBurst trigger={showConfetti} onComplete={() => setShowConfetti(false)} />

      <div className="container relative z-30 mx-auto px-4 pb-20 pt-6 pointer-events-none sm:pt-7 lg:pt-5">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <motion.div
            {...reveal(0.08)}
            className="mb-1 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/65 shadow-sm backdrop-blur-md sm:text-[11px]"
          >
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Team building · Retreats · Training
          </motion.div>

          <div aria-hidden="true" className="mb-3 w-full font-display font-black leading-[0.88]">
            <motion.div {...reveal(0.14)} className="mb-1 text-primary">
              <span className="text-[clamp(1.1rem,3.8vw,2.15rem)] uppercase tracking-[0.12em]">Ignite the</span>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.2 }}
              className="mb-2 whitespace-nowrap"
            >
              {sparkLetters.map((item, index) => (
                <motion.span
                  key={item.letter}
                  className="inline-block cursor-default font-horizon text-[clamp(4.2rem,10.4vw,8rem)] tracking-[-0.055em]"
                  style={{ color: item.color }}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : 0.28 + index * 0.06 }}
                  whileHover={reduceMotion ? undefined : { y: -8, scale: 1.04 }}
                >
                  {item.letter}
                </motion.span>
              ))}
            </motion.div>

            <motion.div {...reveal(0.58)} className="flex flex-col items-center gap-2">
              <span className="text-[clamp(1.65rem,4.1vw,2.65rem)] uppercase tracking-[0.08em] text-foreground">
                Within your
              </span>
              <RotatingWord />
            </motion.div>
          </div>

          <motion.div {...reveal(0.68)} className="mb-5 grid w-full max-w-sm grid-cols-4 gap-2 px-1 lg:hidden">
            {mobileCharacters.map((character) => (
              <div key={character.label} className="min-w-0">
                <div className={`relative h-[76px] overflow-hidden rounded-[1.1rem] bg-gradient-to-b ${character.color} shadow-sm`}>
                  <img
                    src={character.image}
                    alt=""
                    className="h-full w-full object-contain object-bottom"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-[0.1em] text-foreground/60">
                  {character.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.h1
            {...reveal(0.74)}
            className="relative z-10 mb-2 max-w-[720px] font-display text-2xl font-black leading-[1.08] text-foreground md:text-[28px]"
          >
            Fun, Creative Company Experiences Planned Around Your People
          </motion.h1>

          <motion.p
            {...reveal(0.8)}
            className="relative z-10 mb-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            From team challenges and retreats to facilitated workshops, we shape the format around your group,
            objective, venue, and timing.
          </motion.p>

          <motion.div
            {...reveal(0.86)}
            className="pointer-events-auto relative z-30 flex w-full max-w-md flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center"
          >
            <Button variant="hero" size="lg" onClick={handleCTAClick} className="group min-h-12 px-7 text-base shadow-xl">
              <span>Plan My Event</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="min-h-12 border-2 border-primary/25 bg-white/90 px-7 text-base hover:border-primary hover:bg-white"
            >
              <a href="#services">Explore Experiences</a>
            </Button>
          </motion.div>

          <motion.button
            {...reveal(0.92)}
            type="button"
            onClick={() =>
              openContactModal({
                additionalDetails: "I would like help choosing the right experience for my group.",
              })
            }
            className="pointer-events-auto mt-4 text-sm font-semibold text-foreground/65 underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary"
          >
            Not sure which experience fits? Help me choose.
          </motion.button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-20 bg-gradient-to-t from-white via-white/75 to-transparent" />
    </section>
  );
};
