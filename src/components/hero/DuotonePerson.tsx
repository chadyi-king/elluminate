import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface DuotonePersonProps {
  image: string;
  position: "left" | "center" | "right";
  duotoneColor: string; // HSL color for duotone effect
  glowColor: string; // Glow color
  delay?: number;
}

export const DuotonePerson = ({
  image,
  position,
  duotoneColor,
  glowColor,
  delay = 0,
}: DuotonePersonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const positionStyles = {
    left: "left-[5%] sm:left-[10%] md:left-[15%]",
    center: "left-1/2 -translate-x-1/2",
    right: "right-[5%] sm:right-[10%] md:right-[15%]",
  };

  // Calculate hue rotation for duotone effect based on color
  const getHueRotation = (color: string) => {
    if (color.includes("214")) return "190deg"; // Blue
    if (color.includes("340") || color.includes("350")) return "320deg"; // Pink/Red
    if (color.includes("160") || color.includes("140")) return "90deg"; // Green
    return "0deg";
  };

  return (
    <motion.div
      className={`absolute bottom-0 ${positionStyles[position]} z-10`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect behind person */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl -z-10"
        style={{ backgroundColor: glowColor }}
        animate={{
          opacity: isHovered ? 0.6 : 0.3,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Lightbulb above head */}
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2"
        animate={{
          scale: isHovered ? 1.3 : 1,
          filter: isHovered
            ? "drop-shadow(0 0 20px rgba(255, 200, 0, 0.9))"
            : "drop-shadow(0 0 5px rgba(255, 200, 0, 0.3))",
        }}
        transition={{ duration: 0.3 }}
      >
        <Lightbulb
          className="w-8 h-8 sm:w-10 sm:h-10"
          style={{
            color: isHovered ? "#FFD700" : "#999",
            fill: isHovered ? "#FFD700" : "transparent",
          }}
        />
      </motion.div>

      {/* Person image with duotone effect */}
      <motion.div
        className="relative w-32 h-48 sm:w-40 sm:h-60 md:w-48 md:h-72 lg:w-56 lg:h-80"
        animate={{
          filter: isHovered
            ? "grayscale(0%) sepia(0%) hue-rotate(0deg) saturate(100%)"
            : `grayscale(100%) sepia(100%) hue-rotate(${getHueRotation(duotoneColor)}) saturate(200%) brightness(0.9)`,
        }}
        transition={{ duration: 0.4 }}
        style={{ cursor: "pointer" }}
      >
        <img
          src={image}
          alt="Team member"
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>
    </motion.div>
  );
};
