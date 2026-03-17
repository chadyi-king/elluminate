import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const wordData = [
  { text: "TEAM", color: "hsl(214, 100%, 56%)" }, // Blue
  { text: "LEADERS", color: "hsl(156, 72%, 42%)" }, // Green
  { text: "SCHOOL", color: "hsl(33, 100%, 50%)" }, // Orange
  { text: "CLASS", color: "hsl(340, 82%, 52%)" }, // Pink
  { text: "STUDENTS", color: "hsl(270, 100%, 70%)" }, // Purple
  { text: "PEOPLE", color: "hsl(160, 70%, 45%)" }, // Green
  { text: "CULTURE", color: "hsl(192, 90%, 48%)" }, // Cyan
  { text: "WORKPLACE", color: "hsl(221, 83%, 58%)" }, // Indigo blue
  { text: "COHORTS", color: "hsl(43, 96%, 53%)" }, // Amber
  { text: "TEACHERS", color: "hsl(12, 91%, 58%)" }, // Coral
  { text: "MANAGERS", color: "hsl(282, 73%, 60%)" }, // Violet
  { text: "CONNECTION", color: "hsl(188, 90%, 42%)" }, // Teal
  { text: "RETREATS", color: "hsl(200, 98%, 39%)" }, // Deep sky
];

interface RotatingWordProps {
  onWordChange?: (index: number) => void;
}

export const RotatingWord = ({ onWordChange }: RotatingWordProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % wordData.length;
        onWordChange?.(next);
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [onWordChange]);

  // Call onWordChange on mount with initial index
  useEffect(() => {
    onWordChange?.(0);
  }, []);

  return (
    <span className="inline-block relative min-w-[40vw] sm:min-w-[31vw] md:min-w-[26vw] lg:min-w-[22vw]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-block px-3 py-1 sm:px-4 sm:py-1 rounded-xl font-black text-[7vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[5vw] leading-none"
          style={{
            backgroundColor: wordData[currentIndex].color,
            color: "white",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          {wordData[currentIndex].text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
