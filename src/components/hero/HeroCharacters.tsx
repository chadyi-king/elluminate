import { motion, useReducedMotion } from "framer-motion";

import charBlueMan from "@/assets/hero/char-blue-man.webp";
import charRedWoman from "@/assets/hero/char-red-woman.webp";
import charGreenWoman from "@/assets/hero/char-green-woman.webp";
import charYellowBoy from "@/assets/hero/char-yellow-boy.webp";

interface CharacterProps {
  image: string;
  posClass: string;
  delay: number;
  width: number;
  height: number;
  sizeClass: string;
  zIndex: number;
  softenLowerEdge?: boolean;
  isLCP?: boolean;
}

const CharacterFigure = ({
  image,
  posClass,
  delay,
  width,
  height,
  sizeClass,
  zIndex,
  softenLowerEdge = false,
  isLCP = false,
}: CharacterProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`pointer-events-auto absolute hidden xl:block ${sizeClass} ${posClass}`}
      initial={reduceMotion ? false : { opacity: 0, y: 42 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease: "easeOut" }}
      style={{ zIndex }}
    >
      <motion.div
        className="h-full w-full"
        whileHover={reduceMotion ? undefined : { y: -4, scale: 1.015 }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        style={{
          filter: "drop-shadow(0 20px 28px rgba(15, 23, 42, 0.14))",
          ...(softenLowerEdge
            ? {
                WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 82%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, #000 0%, #000 82%, transparent 100%)",
              }
            : {}),
        }}
      >
        <img
          src={image}
          alt=""
          width={width}
          height={height}
          className="h-full w-full object-contain object-bottom"
          {...(isLCP
            ? { loading: "eager" as const, decoding: "sync" as const }
            : { loading: "eager" as const, decoding: "async" as const })}
        />
      </motion.div>
    </motion.div>
  );
};

export const HeroCharacters = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {/* Upper figures fade into the foreground figures so their source-image edges never read as hard cut-outs. */}
    <CharacterFigure
      image={charBlueMan}
      posClass="left-[-5%] top-[4%] 2xl:left-[-2%]"
      delay={0.1}
      width={500}
      height={500}
      sizeClass="h-[clamp(22rem,28vw,31.25rem)] w-[clamp(22rem,28vw,31.25rem)]"
      zIndex={16}
      softenLowerEdge
      isLCP
    />

    <CharacterFigure
      image={charRedWoman}
      posClass="bottom-[2.1rem] left-[-5%] 2xl:left-[-2%]"
      delay={0.2}
      width={480}
      height={500}
      sizeClass="h-[clamp(22rem,27vw,30rem)] w-[clamp(21rem,26vw,29rem)]"
      zIndex={22}
    />

    <CharacterFigure
      image={charGreenWoman}
      posClass="right-[-6%] top-[3%] 2xl:right-[-2%]"
      delay={0.15}
      width={480}
      height={500}
      sizeClass="h-[clamp(22rem,27vw,30rem)] w-[clamp(21rem,26vw,29rem)]"
      zIndex={15}
      softenLowerEdge
    />

    <CharacterFigure
      image={charYellowBoy}
      posClass="bottom-[2.4rem] right-[-5%] 2xl:right-[-2%]"
      delay={0.25}
      width={440}
      height={480}
      sizeClass="h-[clamp(20rem,25vw,28rem)] w-[clamp(19rem,24vw,27rem)]"
      zIndex={23}
    />
  </div>
);
