import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Monitor, Plane, GraduationCap, Users } from "lucide-react";

type Side = "left" | "right";
type Slot = "far-left" | "left" | "right" | "far-right";

interface PlaceholderHumanProps {
  slot: Slot;
  tone: string;
  glow: string;
  delay: number;
}

interface BulbChipProps {
  icon: typeof Users;
  label: string;
  tone: string;
  delay: number;
}

const bulbIconMap = [Users, Monitor, Plane, GraduationCap] as const;

const slotPosition = {
  "far-left": "left-[0%] sm:left-[3%] xl:left-[2%]",
  left: "left-[14%] sm:left-[17%] xl:left-[15%]",
  right: "right-[14%] sm:right-[17%] xl:right-[15%]",
  "far-right": "right-[0%] sm:right-[3%] xl:right-[2%]",
};

const slotTilt = {
  "far-left": "-rotate-7",
  left: "-rotate-4",
  right: "rotate-4",
  "far-right": "rotate-7",
};

const BulbChip = ({ icon: Icon, label, tone, delay }: BulbChipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      type="button"
      className="group flex flex-col items-center gap-2 focus:outline-none"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/88 shadow-lg backdrop-blur-sm transition-all duration-300 sm:h-20 sm:w-20"
        style={{ boxShadow: isHovered ? `0 0 0 10px ${tone}20, 0 20px 40px ${tone}25` : `0 14px 28px ${tone}18` }}
      >
        <div
          className="absolute inset-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle, ${tone}45 0%, transparent 70%)` }}
        />
        <Icon className="relative z-10 h-8 w-8 text-white" style={{ color: tone }} strokeWidth={2.1} />
      </div>
      <div
        className="flex h-4 w-8 items-end justify-center rounded-b-full"
        style={{ backgroundColor: tone, opacity: 0.9 }}
      />
      <span
        className="text-[9px] font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-transform duration-300 group-hover:-translate-y-0.5"
        style={{ color: tone }}
      >
        {label}
      </span>
    </motion.button>
  );
};

const PlaceholderHuman = ({ slot, tone, glow, delay }: PlaceholderHumanProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute top-[110px] z-20 hidden xl:block pointer-events-auto ${slotPosition[slot]}`}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-x-10 bottom-10 -z-10 h-48 rounded-full blur-3xl"
          animate={{
            opacity: isHovered ? 0.65 : 0.22,
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.35 }}
          style={{ background: glow }}
        />

        <motion.div
          className={`relative flex flex-col items-center ${slotTilt[slot]} select-none`}
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="relative flex h-[245px] w-[190px] items-start justify-center sm:h-[285px] sm:w-[230px]">
            <motion.div
              className="absolute top-2 flex items-center gap-2"
              animate={{
                y: isHovered ? -7 : 0,
                x: slot.includes("left") ? 8 : -8,
              }}
              transition={{ duration: 0.35 }}
            >
              <Lightbulb
                className="h-9 w-9 sm:h-10 sm:w-10"
                style={{
                  color: isHovered ? tone : "rgba(148, 163, 184, 0.85)",
                  fill: isHovered ? tone : "transparent",
                  filter: isHovered ? `drop-shadow(0 0 18px ${tone}aa)` : `drop-shadow(0 0 6px ${tone}40)`,
                }}
              />
            </motion.div>

            <motion.div
              className="absolute top-[42px] h-[170px] w-[120px] sm:h-[210px] sm:w-[148px]"
              animate={{
                filter: isHovered
                  ? "grayscale(0%) saturate(120%) brightness(1.05)"
                  : "grayscale(100%) saturate(0%) brightness(0.92)",
                scale: isHovered ? 1.01 : 1,
              }}
              transition={{ duration: 0.35 }}
              style={{
                boxShadow: isHovered ? `0 0 0 16px ${tone}16, 0 0 45px ${tone}20` : `0 0 0 10px ${tone}10`,
              }}
            >
              <div
                className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rounded-full"
                style={{
                  background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.98) 0%, ${tone}12 52%, ${tone}26 100%)`,
                }}
              />

              <div
                className="absolute left-1/2 top-[54px] h-24 w-[104px] -translate-x-1/2 rounded-[42px_42px_18px_18px]"
                style={{ background: `linear-gradient(180deg, ${tone}18 0%, rgba(255,255,255,0.9) 100%)` }}
              />

              <motion.div
                className="absolute left-[7px] top-[62px] h-3 w-[68px] origin-right rounded-full"
                animate={{ rotate: isHovered ? 18 : 26, x: slot.includes("left") ? 0 : 4 }}
                style={{ backgroundColor: tone }}
              />
              <motion.div
                className="absolute right-[7px] top-[62px] h-3 w-[68px] origin-left rounded-full"
                animate={{ rotate: isHovered ? -18 : -26, x: slot.includes("left") ? -4 : 0 }}
                style={{ backgroundColor: tone }}
              />

              <motion.div
                className="absolute bottom-[8px] left-[18px] h-20 w-4 rounded-full"
                animate={{ rotate: isHovered ? 15 : 8 }}
                style={{ backgroundColor: tone }}
              />
              <motion.div
                className="absolute bottom-[8px] right-[18px] h-20 w-4 rounded-full"
                animate={{ rotate: isHovered ? -15 : -8 }}
                style={{ backgroundColor: tone }}
              />

              <motion.div
                className="absolute top-[88px] h-1.5 w-20 rounded-full"
                animate={{ x: slot.includes("left") ? 6 : -6, opacity: isHovered ? 1 : 0.6 }}
                style={{ backgroundColor: tone }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const HeroPlaceholderHumans = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 top-0 z-10 hidden xl:block pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_62%)]" />

      <PlaceholderHuman
        slot="far-left"
        tone="hsl(45, 100%, 50%)"
        glow="radial-gradient(circle, hsla(45, 100%, 50%, 0.35) 0%, transparent 70%)"
        delay={0.15}
      />
      <PlaceholderHuman
        slot="left"
        tone="hsl(340, 82%, 52%)"
        glow="radial-gradient(circle, hsla(340, 82%, 52%, 0.3) 0%, transparent 70%)"
        delay={0.25}
      />
      <PlaceholderHuman
        slot="right"
        tone="hsl(196, 100%, 45%)"
        glow="radial-gradient(circle, hsla(196, 100%, 45%, 0.3) 0%, transparent 70%)"
        delay={0.2}
      />
      <PlaceholderHuman
        slot="far-right"
        tone="hsl(156, 72%, 42%)"
        glow="radial-gradient(circle, hsla(156, 72%, 42%, 0.3) 0%, transparent 70%)"
        delay={0.3}
      />

      <div className="absolute bottom-[18px] left-0 right-0 z-30 hidden xl:block pointer-events-auto">
        {bulbIconMap.map((Icon, index) => {
          const tones = [
            "hsl(45, 100%, 50%)",
            "hsl(340, 82%, 52%)",
            "hsl(196, 100%, 45%)",
            "hsl(156, 72%, 42%)",
          ];
          const positions = ["12%", "36%", "64%", "88%"];

          return (
            <motion.div
              key={index}
              className="absolute -translate-x-1/2"
              style={{ left: positions[index] }}
            >
              <BulbChip
                icon={Icon}
                label={["Build", "Lead", "Move", "Learn"][index]}
                tone={tones[index]}
                delay={0.45 + index * 0.06}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};