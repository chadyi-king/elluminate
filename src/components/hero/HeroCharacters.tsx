import { motion, useReducedMotion } from "framer-motion";

import charBlueMan from "@/assets/hero/char-blue-man-real-v2.webp";
import charRedWoman from "@/assets/hero/char-red-woman-real-v2.webp";
import charGreenWoman from "@/assets/hero/char-green-woman-real-v2.webp";
import charYellowBoy from "@/assets/hero/char-yellow-boy-real-v2.webp";

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
    {/*
      Keep the cast close enough to frame the promise, while the foreground pair masks the
      lower edge of the upper pair. The yellow figure deliberately overlaps the green figure
      so her source image never reads as a waist-level cut-out.
    */}
    <CharacterFigure
      image={charBlueMan}
      posClass="left-[-1.5%] top-[1%] 2xl:left-[1%]"
      delay={0.1}
      width={500}
      height={500}
      sizeClass="h-[clamp(28rem,35vw,40rem)] w-[clamp(28rem,35vw,40rem)]"
      zIndex={16}
      softenLowerEdge
      isLCP
    />

    <CharacterFigure
      image={charRedWoman}
      posClass="bottom-[1.75rem] left-[-2%] 2xl:left-[0.5%]"
      delay={0.2}
      width={480}
      height={500}
      sizeClass="h-[clamp(27rem,34vw,39rem)] w-[clamp(26rem,33vw,38rem)]"
      zIndex={22}
    />

    <CharacterFigure
      image={charGreenWoman}
      posClass="right-[-1.5%] top-[1%] 2xl:right-[0.75%]"
      delay={0.15}
      width={480}
      height={500}
      sizeClass="h-[clamp(27rem,34vw,39rem)] w-[clamp(26rem,33vw,38rem)]"
      zIndex={15}
      softenLowerEdge
    />

    <CharacterFigure
      image={charYellowBoy}
      posClass="bottom-[1.75rem] right-[-1%] 2xl:right-[2%]"
      delay={0.25}
      width={440}
      height={480}
      sizeClass="h-[clamp(24rem,31vw,35rem)] w-[clamp(23rem,30vw,34rem)]"
      zIndex={23}
    />
  </div>
);
