import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

/**
 * HeroCharacters — 4 real character cutouts framing the hero.
 *
 * SETUP: Save your AI-generated 4-person image (black background) to:
 *   public/hero-characters.png
 *
 * The image should show all four characters side-by-side in a single frame.
 * CSS background-position is used to crop and display each person individually.
 * A CSS mask fades out the black background edges so figures blend into the hero.
 *
 * When you have proper transparent-background PNG cutouts (one per person),
 * swap in individual <img> tags instead — the hover logic is identical.
 */

const MASK =
  "radial-gradient(ellipse 64% 96% at 50% 44%, black 25%, rgba(0,0,0,0.9) 42%, rgba(0,0,0,0.45) 62%, transparent 82%)";

interface CharacterProps {
  posClass: string;
  bgPosX: string;
  tone: string;
  glowColor: string;
  duotone: string;
  delay: number;
  /** true = person points toward right (inner edge is right) */
  pointsRight: boolean;
}

const CharacterFigure = ({
  posClass,
  bgPosX,
  tone,
  glowColor,
  duotone,
  delay,
  pointsRight,
}: CharacterProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`absolute bottom-0 z-20 hidden xl:block pointer-events-auto ${posClass}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Radial glow behind figure — only visible on hover */}
      <motion.div
        className="absolute inset-x-0 bottom-0 -z-10 h-[80%]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45 }}
        style={{
          background: `radial-gradient(ellipse 85% 80% at 50% 85%, ${glowColor}, transparent 72%)`,
        }}
      />

      {/* Lightbulb above the pointing hand */}
      <motion.div
        className="absolute z-30"
        style={{
          [pointsRight ? "right" : "left"]: "8px",
          top: "8%",
        }}
        animate={{
          y: hovered ? -10 : 0,
          scale: hovered ? 1.3 : 1,
        }}
        transition={{ duration: 0.35, type: "spring", stiffness: 280, damping: 16 }}
      >
        <Lightbulb
          style={{
            width: 46,
            height: 46,
            color: hovered ? "#FFD700" : "rgba(170, 170, 170, 0.6)",
            fill: hovered ? "#FFD700" : "transparent",
            filter: hovered
              ? "drop-shadow(0 0 14px rgba(255, 218, 0, 1)) drop-shadow(0 0 32px rgba(255, 200, 0, 0.65))"
              : "drop-shadow(0 0 3px rgba(170, 170, 170, 0.25))",
            transition: "color 0.35s ease, fill 0.35s ease, filter 0.35s ease",
          }}
        />
      </motion.div>

      {/* Character image with crop, mask, and duotone filter */}
      <motion.div
        style={{ width: 218, height: 590 }}
        animate={{
          filter: hovered
            ? "brightness(1.05) saturate(1.08)"
            : duotone,
          scale: hovered ? 1.025 : 1,
        }}
        transition={{ duration: 0.45 }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('/hero-characters.png')",
            backgroundSize: "400% auto",
            backgroundPositionX: bgPosX,
            backgroundPositionY: "top",
            backgroundRepeat: "no-repeat",
            WebkitMaskImage: MASK,
            maskImage: MASK,
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
    {/* Man — navy suit, far left, angled slightly off-screen */}
    <CharacterFigure
      posClass="left-[0%] -translate-x-[6%]"
      bgPosX="0%"
      tone="hsl(214, 85%, 50%)"
      glowColor="hsla(214, 85%, 50%, 0.45)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(175deg) saturate(2.5) brightness(0.86)"
      delay={0.1}
      pointsRight={true}
    />

    {/* Woman in green polo — left of center text */}
    <CharacterFigure
      posClass="left-[13%]"
      bgPosX="33%"
      tone="hsl(145, 55%, 35%)"
      glowColor="hsla(145, 55%, 35%, 0.4)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(100deg) saturate(2.5) brightness(0.84)"
      delay={0.2}
      pointsRight={true}
    />

    {/* Corporate trainer in red — right of center text */}
    <CharacterFigure
      posClass="right-[13%]"
      bgPosX="66%"
      tone="hsl(4, 80%, 50%)"
      glowColor="hsla(4, 80%, 50%, 0.4)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(315deg) saturate(2.5) brightness(0.84)"
      delay={0.15}
      pointsRight={false}
    />

    {/* School student in yellow — far right, angled slightly off-screen */}
    <CharacterFigure
      posClass="right-[0%] translate-x-[6%]"
      bgPosX="100%"
      tone="hsl(44, 95%, 52%)"
      glowColor="hsla(44, 95%, 52%, 0.4)"
      duotone="grayscale(1) sepia(0.7) hue-rotate(6deg) saturate(2.1) brightness(0.88)"
      delay={0.25}
      pointsRight={false}
    />
  </div>
);
