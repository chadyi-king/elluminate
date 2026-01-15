import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const wordData = [
  { text: "TEAM", color: "hsl(214, 100%, 56%)" }, // Blue
  { text: "SELF", color: "hsl(33, 100%, 50%)" }, // Orange
  { text: "SCHOOL", color: "hsl(340, 82%, 52%)" }, // Pink
  { text: "CLASS", color: "hsl(270, 100%, 70%)" }, // Purple
  { text: "WORKPLACE", color: "hsl(160, 70%, 45%)" }, // Green
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
    <span className="inline-block relative min-w-[180px] sm:min-w-[220px] md:min-w-[280px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-block px-3 py-1 rounded-lg font-black"
          style={{
            backgroundColor: wordData[currentIndex].color,
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          {wordData[currentIndex].text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
