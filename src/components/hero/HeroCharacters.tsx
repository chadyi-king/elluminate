import { useState } from "react";
import { motion } from "framer-motion";

import charBlueMan from "@/assets/hero/char-blue-man.png";
import charRedWoman from "@/assets/hero/char-red-woman.png";
import charGreenWoman from "@/assets/hero/char-green-woman.png";
import charYellowBoy from "@/assets/hero/char-yellow-boy.png";

interface CharacterProps {
  image: string;
  posClass: string;
  glowColor: string;
  duotone: string;
  delay: number;
  size: { w: number; h: number };
  zIndex: number;
  showBottomFade?: boolean;
  clipPadding?: { top?: number; right?: number; bottom?: number; left?: number };
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
  clipPadding,
}: CharacterProps) => {
  const [hovered, setHovered] = useState(false);

  // Build clip-path inset to tighten the interactive area
  const inset = clipPadding
    ? `inset(${clipPadding.top ?? 0}px ${clipPadding.right ?? 0}px ${clipPadding.bottom ?? 0}px ${clipPadding.left ?? 0}px)`
    : undefined;

  return (
    <motion.div
      className={`absolute hidden lg:block pointer-events-auto ${posClass}`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: size.w,
        height: size.h,
        zIndex,
        clipPath: inset,
      }}
    >
      {/* Radial glow behind figure on hover */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[90%]"
        style={{
          zIndex: -1,
          background: `radial-gradient(ellipse 90% 85% at 50% 80%, ${glowColor}, transparent 72%)`,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45 }}
      />

      {/* Character image with duotone → full color on hover */}
      <motion.div
        className="w-full h-full"
        animate={{
          filter: hovered ? "none" : duotone,
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.45 }}
      >
        <img
          src={image}
          alt="Team member"
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>

      {/* Fade-to-white gradient at bottom — only if enabled */}
      {showBottomFade && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, white 85%)",
          }}
        />
      )}
    </motion.div>
  );
};

export const HeroCharacters = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 25 }}>
    {/* TOP-LEFT — Blue man: shifted down 100px, no bottom fade, trimmed right 20px */}
    <CharacterFigure
      image={charBlueMan}
      posClass="left-[-4%] xl:left-[-1%] top-[-5%]"
      glowColor="hsla(214, 85%, 50%, 0.45)"
      duotone="grayscale(0.8) sepia(0.3) hue-rotate(175deg) saturate(1.2) brightness(0.88)"
      delay={0.1}
      size={{ w: 480, h: 500 }}
      zIndex={20}
      showBottomFade={false}
      clipPadding={{ right: 20 }}
    />

    {/* BOTTOM-LEFT — Red woman: moved up ~15px, trimmed right 30px */}
    <CharacterFigure
      image={charRedWoman}
      posClass="left-[-4%] xl:left-[-1%] bottom-[-14%]"
      glowColor="hsla(4, 80%, 50%, 0.35)"
      duotone="grayscale(0.8) sepia(0.3) hue-rotate(315deg) saturate(1.2) brightness(0.85)"
      delay={0.2}
      size={{ w: 480, h: 500 }}
      zIndex={25}
      showBottomFade={true}
      clipPadding={{ right: 30 }}
    />

    {/* TOP-RIGHT — Green woman: shifted down 100px, no bottom fade, trimmed left 15px */}
    <CharacterFigure
      image={charGreenWoman}
      posClass="right-[-4%] xl:right-[-1%] top-[-5%]"
      glowColor="hsla(145, 55%, 35%, 0.45)"
      duotone="grayscale(0.8) sepia(0.3) hue-rotate(100deg) saturate(1.2) brightness(0.85)"
      delay={0.15}
      size={{ w: 480, h: 500 }}
      zIndex={20}
      showBottomFade={false}
      clipPadding={{ left: 15 }}
    />

    {/* BOTTOM-RIGHT — Yellow boy: moved up ~30px, left ~8px, trimmed left 20px */}
    <CharacterFigure
      image={charYellowBoy}
      posClass="right-[-4%] xl:right-[-1%]"
      glowColor="hsla(44, 95%, 52%, 0.35)"
      duotone="grayscale(0.8) sepia(0.3) hue-rotate(6deg) saturate(1.1) brightness(0.87)"
      delay={0.25}
      size={{ w: 440, h: 480 }}
      zIndex={25}
      showBottomFade={true}
      clipPadding={{ left: 20 }}
    />
  </div>
);
