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
}

const CharacterFigure = ({
  image,
  posClass,
  glowColor,
  duotone,
  delay,
  size,
  zIndex,
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

      {/* Fade-to-white gradient at bottom to mask cut-off */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, white 85%)",
        }}
      />
    </motion.div>
  );
};

export const HeroCharacters = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* TOP-LEFT — Blue man: frames "IGNITE THE SPARK" text on left */}
    <CharacterFigure
      image={charBlueMan}
      posClass="left-[-6%] xl:left-[-2%] top-[-8%]"
      glowColor="hsla(214, 85%, 50%, 0.45)"
      duotone="grayscale(1) sepia(0.4) hue-rotate(175deg) saturate(1.4) brightness(0.85)"
      delay={0.1}
      size={{ w: 500, h: 860 }}
      zIndex={20}
    />

    {/* BOTTOM-LEFT — Red woman: head aligns near subtitle zone, pushed further left out of frame */}
    <CharacterFigure
      image={charRedWoman}
      posClass="left-[-16%] xl:left-[-12%] bottom-[-18%]"
      glowColor="hsla(4, 80%, 50%, 0.45)"
      duotone="grayscale(1) sepia(0.4) hue-rotate(315deg) saturate(1.4) brightness(0.82)"
      delay={0.2}
      size={{ w: 480, h: 820 }}
      zIndex={25}
    />

    {/* TOP-RIGHT — Green woman: frames "IGNITE THE SPARK" text on right */}
    <CharacterFigure
      image={charGreenWoman}
      posClass="right-[-6%] xl:right-[-2%] top-[-8%]"
      glowColor="hsla(145, 55%, 35%, 0.45)"
      duotone="grayscale(1) sepia(0.4) hue-rotate(100deg) saturate(1.4) brightness(0.82)"
      delay={0.15}
      size={{ w: 480, h: 840 }}
      zIndex={20}
    />

    {/* BOTTOM-RIGHT — Yellow boy: head aligns near subtitle zone, pushed further right out of frame */}
    <CharacterFigure
      image={charYellowBoy}
      posClass="right-[-16%] xl:right-[-12%] bottom-[-18%]"
      glowColor="hsla(44, 95%, 52%, 0.45)"
      duotone="grayscale(1) sepia(0.4) hue-rotate(6deg) saturate(1.3) brightness(0.84)"
      delay={0.25}
      size={{ w: 440, h: 780 }}
      zIndex={25}
    />
  </div>
);
