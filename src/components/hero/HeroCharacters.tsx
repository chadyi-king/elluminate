import { useState } from "react";
import { motion } from "framer-motion";

import charBlueMan from "@/assets/hero/char-blue-man.png";
import charRedWoman from "@/assets/hero/char-red-woman.png";
import charGreenWoman from "@/assets/hero/char-green-woman.png";
import charYellowBoy from "@/assets/hero/char-yellow-boy.png";

interface CharacterProps {
  image: string;
  posClass: string;
  tone: string;
  glowColor: string;
  duotone: string;
  delay: number;
  size: { w: number; h: number };
}

const CharacterFigure = ({
  image,
  posClass,
  tone,
  glowColor,
  duotone,
  delay,
  size,
}: CharacterProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`absolute z-20 hidden lg:block pointer-events-auto ${posClass}`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: size.w, height: size.h }}
    >
      {/* Radial glow behind figure on hover */}
      <motion.div
        className="absolute inset-x-0 bottom-0 -z-10 h-[90%]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45 }}
        style={{
          background: `radial-gradient(ellipse 90% 85% at 50% 80%, ${glowColor}, transparent 72%)`,
        }}
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

      {/* Fade-to-white gradient at bottom to mask cut-off */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[25%] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, white 90%)",
        }}
      />
    </motion.div>
  );
};

export const HeroCharacters = () => (
  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
    {/* LEFT SIDE — Blue man (top) */}
    <CharacterFigure
      image={charBlueMan}
      posClass="left-[-6%] xl:left-[-3%] top-[2%]"
      tone="hsl(214, 85%, 50%)"
      glowColor="hsla(214, 85%, 50%, 0.4)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(175deg) saturate(2.5) brightness(0.86)"
      delay={0.1}
      size={{ w: 480, h: 820 }}
    />

    {/* LEFT SIDE — Red woman (bottom, overlapping top) */}
    <CharacterFigure
      image={charRedWoman}
      posClass="left-[2%] xl:left-[6%] bottom-[-5%]"
      tone="hsl(4, 80%, 50%)"
      glowColor="hsla(4, 80%, 50%, 0.4)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(315deg) saturate(2.5) brightness(0.84)"
      delay={0.2}
      size={{ w: 460, h: 800 }}
    />

    {/* RIGHT SIDE — Green woman (top) */}
    <CharacterFigure
      image={charGreenWoman}
      posClass="right-[-6%] xl:right-[-3%] top-[2%]"
      tone="hsl(145, 55%, 35%)"
      glowColor="hsla(145, 55%, 35%, 0.4)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(100deg) saturate(2.5) brightness(0.84)"
      delay={0.15}
      size={{ w: 460, h: 800 }}
    />

    {/* RIGHT SIDE — Yellow boy (bottom, overlapping top) */}
    <CharacterFigure
      image={charYellowBoy}
      posClass="right-[2%] xl:right-[6%] bottom-[-5%]"
      tone="hsl(44, 95%, 52%)"
      glowColor="hsla(44, 95%, 52%, 0.4)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(6deg) saturate(2.1) brightness(0.88)"
      delay={0.25}
      size={{ w: 420, h: 750 }}
    />
  </div>
);
