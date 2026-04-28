import { useState } from "react";
import { motion } from "framer-motion";

import charBlueMan from "@/assets/hero/char-blue-man.webp";
import charRedWoman from "@/assets/hero/char-red-woman.webp";
import charGreenWoman from "@/assets/hero/char-green-woman.webp";
import charYellowBoy from "@/assets/hero/char-yellow-boy.webp";

interface CharacterProps {
  image: string;
  posClass: string;
  glowColor: string;
  duotone: string;
  delay: number;
  size: { w: number; h: number };
  zIndex: number;
  showBottomFade?: boolean;
  isLCP?: boolean;
}

const CharacterFigure = ({
  image,
  posClass,
  glowColor,
  duotone,
  delay,
  size,
  zIndex,
  showBottomFade = true,
  isLCP = false,
}: CharacterProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`absolute hidden lg:block pointer-events-auto ${posClass}`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: size.w, height: size.h, zIndex }}
    >
      {/* Character image with duotone → full color on hover + outline glow via drop-shadow */}
      <motion.div
        className="w-full h-full"
        animate={{
          filter: hovered ? `drop-shadow(0 0 18px ${glowColor}) drop-shadow(0 0 40px ${glowColor})` : duotone,
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.45 }}
      >
        <img
          src={image}
          alt="Team member"
          width={size.w}
          height={size.h}
          className="w-full h-full object-contain object-bottom"
          {...(isLCP
            ? { loading: "eager" as const, fetchPriority: "high" as any, decoding: "sync" as const }
            : { loading: "lazy" as const, decoding: "async" as const })}
        />
      </motion.div>

      {/* Fade-to-white gradient at bottom to mask cut-off — only for bottom characters */}
      {showBottomFade && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 85%, white 95%)",
          }}
        />
      )}
    </motion.div>
  );
};

export const HeroCharacters = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* TOP-LEFT — Blue man */}
    <CharacterFigure
      image={charBlueMan}
      posClass="left-[-4%] xl:left-[-1%] top-[18%]"
      glowColor="hsla(214, 85%, 50%, 0.45)"
      duotone="grayscale(0.8) sepia(0.3) hue-rotate(175deg) saturate(1.2) brightness(0.88)"
      delay={0.1}
      size={{ w: 500, h: 500 }}
      zIndex={20}
      showBottomFade={false}
    />

    {/* BOTTOM-LEFT — Red woman */}
    <CharacterFigure
      image={charRedWoman}
      posClass="left-[-4%] xl:left-[-1%] bottom-[-8%]"
      glowColor="hsla(4, 80%, 50%, 0.35)"
      duotone="grayscale(0.8) sepia(0.3) hue-rotate(315deg) saturate(1.2) brightness(0.85)"
      delay={0.2}
      size={{ w: 480, h: 500 }}
      zIndex={25}
    />

    {/* TOP-RIGHT — Green woman */}
    <CharacterFigure
      image={charGreenWoman}
      posClass="right-[-4%] xl:right-[-1%] top-[20%]"
      glowColor="hsla(145, 55%, 35%, 0.45)"
      duotone="grayscale(0.8) sepia(0.3) hue-rotate(100deg) saturate(1.2) brightness(0.85)"
      delay={0.15}
      size={{ w: 480, h: 500 }}
      zIndex={20}
      showBottomFade={false}
    />

    {/* BOTTOM-RIGHT — Yellow boy */}
    <CharacterFigure
      image={charYellowBoy}
      posClass="right-[-4%] xl:right-[-1%] bottom-[-1%]"
      glowColor="hsla(44, 95%, 52%, 0.35)"
      duotone="grayscale(0.8) sepia(0.3) hue-rotate(6deg) saturate(1.1) brightness(0.87)"
      delay={0.25}
      size={{ w: 440, h: 480 }}
      zIndex={25}
    />
  </div>
);
