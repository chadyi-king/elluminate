import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

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
  flip?: boolean;
  size: { w: number; h: number };
}

const CharacterFigure = ({
  image,
  posClass,
  tone,
  glowColor,
  duotone,
  delay,
  flip = false,
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
      {/* Radial glow behind figure */}
      <motion.div
        className="absolute inset-x-0 bottom-0 -z-10 h-[80%]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45 }}
        style={{
          background: `radial-gradient(ellipse 85% 80% at 50% 85%, ${glowColor}, transparent 72%)`,
        }}
      />

      {/* Lightbulb near pointing finger */}
      <motion.div
        className="absolute z-30"
        style={{
          [flip ? "left" : "right"]: "12%",
          top: "2%",
        }}
        animate={{
          y: hovered ? -10 : 0,
          scale: hovered ? 1.3 : 1,
        }}
        transition={{ duration: 0.35, type: "spring", stiffness: 280, damping: 16 }}
      >
        <Lightbulb
          style={{
            width: 40,
            height: 40,
            color: hovered ? "#FFD700" : "rgba(170, 170, 170, 0.6)",
            fill: hovered ? "#FFD700" : "transparent",
            filter: hovered
              ? "drop-shadow(0 0 14px rgba(255, 218, 0, 1)) drop-shadow(0 0 32px rgba(255, 200, 0, 0.65))"
              : "drop-shadow(0 0 3px rgba(170, 170, 170, 0.25))",
            transition: "color 0.35s ease, fill 0.35s ease, filter 0.35s ease",
          }}
        />
      </motion.div>

      {/* Character image with duotone filter */}
      <motion.div
        className="w-full h-full"
        animate={{
          filter: hovered
            ? "brightness(1.05) saturate(1.08)"
            : duotone,
          scale: hovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.45 }}
      >
        <img
          src={image}
          alt="Team member"
          className="w-full h-full object-contain object-bottom"
          style={{
            transform: flip ? "scaleX(-1)" : undefined,
          }}
        />

        {/* Subtle color ring on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{
            boxShadow: hovered
              ? `inset 0 0 40px ${tone}20, 0 0 0 1.5px ${tone}30`
              : "none",
          }}
          transition={{ duration: 0.4 }}
          style={{ borderRadius: "40% / 48%" }}
        />
      </motion.div>
    </motion.div>
  );
};

export const HeroCharacters = () => (
  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
    {/* LEFT SIDE — Blue man (top) leaning inward */}
    <CharacterFigure
      image={charBlueMan}
      posClass="left-[-2%] xl:left-[0%] top-[6%]"
      tone="hsl(214, 85%, 50%)"
      glowColor="hsla(214, 85%, 50%, 0.35)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(175deg) saturate(2.5) brightness(0.86)"
      delay={0.1}
      size={{ w: 190, h: 340 }}
    />

    {/* LEFT SIDE — Red woman (bottom) leaning inward */}
    <CharacterFigure
      image={charRedWoman}
      posClass="left-[1%] xl:left-[4%] bottom-[2%]"
      tone="hsl(4, 80%, 50%)"
      glowColor="hsla(4, 80%, 50%, 0.35)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(315deg) saturate(2.5) brightness(0.84)"
      delay={0.2}
      size={{ w: 180, h: 330 }}
    />

    {/* RIGHT SIDE — Green woman (top) flipped, leaning inward */}
    <CharacterFigure
      image={charGreenWoman}
      posClass="right-[-2%] xl:right-[0%] top-[6%]"
      tone="hsl(145, 55%, 35%)"
      glowColor="hsla(145, 55%, 35%, 0.35)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(100deg) saturate(2.5) brightness(0.84)"
      delay={0.15}
      flip={true}
      size={{ w: 180, h: 330 }}
    />

    {/* RIGHT SIDE — Yellow boy (bottom) flipped, leaning inward */}
    <CharacterFigure
      image={charYellowBoy}
      posClass="right-[1%] xl:right-[4%] bottom-[2%]"
      tone="hsl(44, 95%, 52%)"
      glowColor="hsla(44, 95%, 52%, 0.35)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(6deg) saturate(2.1) brightness(0.88)"
      delay={0.25}
      flip={true}
      size={{ w: 160, h: 300 }}
    />
  </div>
);
