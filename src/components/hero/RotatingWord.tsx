import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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
    if (reduceMotion) return undefined;

    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => {
        return (previous + 1) % wordData.length;
      });
    }, 2500);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const currentWord = wordData[currentIndex];

  return (
    <span className="relative inline-grid min-h-[3rem] min-w-[min(86vw,19rem)] place-items-center sm:min-h-[3.5rem] sm:min-w-[20rem] lg:min-w-[22rem]">
      <motion.span
        initial={false}
        animate={{ backgroundColor: currentWord.color }}
        transition={{ duration: reduceMotion ? 0 : 0.46, ease: [0.22, 1, 0.36, 1] }}
        className="relative inline-grid max-w-[88vw] min-w-[min(86vw,19rem)] place-items-center overflow-hidden whitespace-nowrap rounded-[1rem] px-4 py-1.5 font-black leading-none text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] sm:min-w-[20rem] sm:px-5 lg:min-w-[22rem]"
        style={{
          backgroundColor: currentWord.color,
          fontSize: "clamp(1.8rem, 6vw, 3.4rem)",
          textShadow: "0 3px 14px rgba(0,0,0,0.2)",
          perspective: 700,
        }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            key={currentWord.text}
            initial={reduceMotion ? false : { opacity: 0, y: 22, rotateX: -38, filter: "blur(7px)" }}
            animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -20, rotateX: 32, filter: "blur(6px)" }}
            transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="block origin-center"
          >
            {currentWord.text}
          </motion.span>
        </AnimatePresence>

        {!reduceMotion && (
          <motion.span
            key={`shine-${currentWord.text}`}
            aria-hidden="true"
            initial={{ x: "-180%", opacity: 0 }}
            animate={{ x: "250%", opacity: [0, 0.32, 0] }}
            transition={{ duration: 0.72, delay: 0.08, ease: "easeOut" }}
            className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent"
          />
        )}
      </motion.span>
    </span>
  );
};
