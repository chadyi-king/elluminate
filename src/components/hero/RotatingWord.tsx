import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const wordData = [
  { text: "TEAM", color: "hsl(214, 100%, 56%)" },
  { text: "LEADERS", color: "hsl(156, 72%, 42%)" },
  { text: "SCHOOL", color: "hsl(33, 100%, 50%)" },
  { text: "CLASS", color: "hsl(340, 82%, 52%)" },
  { text: "STUDENTS", color: "hsl(270, 100%, 70%)" },
  { text: "PEOPLE", color: "hsl(160, 70%, 45%)" },
  { text: "CULTURE", color: "hsl(192, 90%, 48%)" },
  { text: "WORKPLACE", color: "hsl(221, 83%, 58%)" },
  { text: "COHORTS", color: "hsl(43, 96%, 53%)" },
  { text: "TEACHERS", color: "hsl(12, 91%, 58%)" },
  { text: "MANAGERS", color: "hsl(282, 73%, 60%)" },
  { text: "CONNECTION", color: "hsl(188, 90%, 42%)" },
  { text: "RETREATS", color: "hsl(200, 98%, 39%)" },
];

export const RotatingWord = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => {
        return (previous + 1) % wordData.length;
      });
    }, 2500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex min-h-[3rem] min-w-[min(86vw,19rem)] items-center justify-center sm:min-h-[3.5rem] sm:min-w-[20rem] lg:min-w-[22rem]">
      <motion.span
        key={currentIndex}
        initial={reduceMotion ? false : { opacity: 1, y: 8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
        className="inline-block max-w-[88vw] whitespace-nowrap rounded-[1rem] px-4 py-1.5 font-black leading-none text-white shadow-lg sm:px-5"
        style={{
          backgroundColor: wordData[currentIndex].color,
          fontSize: "clamp(1.8rem, 6vw, 3.4rem)",
          textShadow: "0 3px 14px rgba(0,0,0,0.2)",
        }}
      >
        {wordData[currentIndex].text}
      </motion.span>
    </span>
  );
};
