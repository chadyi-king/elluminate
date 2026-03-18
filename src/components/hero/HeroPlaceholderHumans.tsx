import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Monitor, Plane, GraduationCap, Users } from "lucide-react";

type Side = "left" | "right";

interface PlaceholderHumanProps {
  side: Side;
  tone: string;
  glow: string;
  label: string;
  title: string;
  delay: number;
}

interface BulbChipProps {
  icon: typeof Users;
  label: string;
  tone: string;
  delay: number;
}

const bulbIconMap = [Users, Monitor, Plane, GraduationCap] as const;

const sidePosition = {
  left: "left-0 -translate-x-[10%] md:-translate-x-[6%]",
  right: "right-0 translate-x-[10%] md:translate-x-[6%]",
};

const sideTilt = {
  left: "-rotate-6",
  right: "rotate-6",
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
        className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/85 shadow-lg backdrop-blur-sm transition-all duration-300 sm:h-24 sm:w-24"
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
        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/70 transition-transform duration-300 group-hover:-translate-y-0.5"
        style={{ color: tone }}
      >
        {label}
      </span>
    </motion.button>
  );
};

const PlaceholderHuman = ({ side, tone, glow, label, title, delay }: PlaceholderHumanProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute bottom-8 z-20 hidden xl:block pointer-events-auto ${sidePosition[side]}`}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-x-6 bottom-0 -z-10 h-64 rounded-full blur-3xl"
          animate={{
            opacity: isHovered ? 0.65 : 0.22,
            scale: isHovered ? 1.06 : 1,
          }}
          transition={{ duration: 0.35 }}
          style={{ background: glow }}
        />

        <motion.div
          className={`relative flex flex-col items-center ${sideTilt[side]} select-none`}
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="mb-2 rounded-full border border-white/75 bg-white/85 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/65 shadow-lg backdrop-blur-sm">
            {label}
          </div>

          <div className="relative flex h-[360px] w-[240px] items-end justify-center sm:h-[420px] sm:w-[280px]">
            <motion.div
              className="absolute right-[8%] top-[5%] rounded-full border border-white/75 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/70 shadow-md"
              animate={{
                y: isHovered ? -10 : 0,
                opacity: isHovered ? 1 : 0.8,
              }}
            >
              {title}
            </motion.div>

            <motion.div
              className="absolute top-6 flex items-center gap-2"
              animate={{
                y: isHovered ? -8 : 0,
                x: side === "left" ? 10 : -10,
              }}
              transition={{ duration: 0.35 }}
            >
              <Lightbulb
                className="h-10 w-10 sm:h-12 sm:w-12"
                style={{
                  color: isHovered ? tone : "rgba(148, 163, 184, 0.85)",
                  fill: isHovered ? tone : "transparent",
                  filter: isHovered ? `drop-shadow(0 0 20px ${tone}aa)` : `drop-shadow(0 0 8px ${tone}40)`,
                }}
              />
              <div
                className="hidden h-px w-10 sm:block"
                style={{
                  background: `linear-gradient(90deg, transparent, ${tone}, transparent)`,
                  opacity: isHovered ? 1 : 0.45,
                }}
              />
            </motion.div>

            <motion.div
              className="absolute top-20 h-40 w-32 rounded-[42%_42%_38%_38%] border border-white/70 shadow-[0_20px_40px_rgba(15,23,42,0.08)] sm:h-48 sm:w-36"
              animate={{
                filter: isHovered
                  ? "grayscale(0%) saturate(120%) brightness(1.03)"
                  : "grayscale(100%) saturate(0%) brightness(0.92)",
                scale: isHovered ? 1.015 : 1,
              }}
              transition={{ duration: 0.35 }}
              style={{
                background: `linear-gradient(180deg, ${tone}22 0%, ${tone}10 36%, rgba(255,255,255,0.92) 100%)`,
                boxShadow: isHovered ? `0 0 0 14px ${tone}18, 0 0 50px ${tone}25` : `0 0 0 10px ${tone}10`,
              }}
            >
              <div
                className="absolute left-1/2 top-6 h-16 w-16 -translate-x-1/2 rounded-full border border-white/70 shadow-inner"
                style={{
                  background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.98) 0%, ${tone}12 56%, ${tone}35 100%)`,
                }}
              />

              <div
                className="absolute left-1/2 top-[78px] h-28 w-24 -translate-x-1/2 rounded-[34px_34px_20px_20px] border border-white/65"
                style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.45) 0%, ${tone}24 100%)` }}
              />
              <div
                className="absolute bottom-8 left-[14px] h-24 w-9 rounded-full border border-white/60"
                style={{ background: `linear-gradient(180deg, ${tone}15 0%, ${tone}35 100%)` }}
              />
              <div
                className="absolute bottom-8 right-[14px] h-24 w-9 rounded-full border border-white/60"
                style={{ background: `linear-gradient(180deg, ${tone}15 0%, ${tone}35 100%)` }}
              />

              <motion.div
                className="absolute left-[18px] top-[120px] h-2 w-20 origin-left rounded-full"
                animate={{ rotate: isHovered ? -18 : -26, x: side === "left" ? 0 : 6 }}
                style={{ backgroundColor: tone }}
              />
              <motion.div
                className="absolute right-[18px] top-[118px] h-2 w-22 origin-right rounded-full"
                animate={{ rotate: isHovered ? 18 : 24, x: side === "left" ? -6 : 0 }}
                style={{ backgroundColor: tone }}
              />

              <motion.div
                className="absolute bottom-14 left-6 h-2 w-24 origin-left rounded-full"
                animate={{ rotate: isHovered ? 18 : 12 }}
                style={{ backgroundColor: tone }}
              />
              <motion.div
                className="absolute bottom-12 right-6 h-2 w-24 origin-right rounded-full"
                animate={{ rotate: isHovered ? -16 : -10 }}
                style={{ backgroundColor: tone }}
              />

              <motion.div
                className="absolute -right-2 top-[154px] h-16 w-16 rounded-full border border-white/70"
                animate={{
                  opacity: isHovered ? 1 : 0.78,
                  scale: isHovered ? 1.04 : 1,
                }}
                style={{
                  background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.8) 0%, ${tone}88 100%)`,
                }}
              />
            </motion.div>
          </div>

          <motion.div
            className="-mt-10 flex items-center gap-3"
            animate={{ y: isHovered ? -8 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-16 w-px rounded-full" style={{ background: `linear-gradient(180deg, transparent, ${tone}, transparent)` }} />
            <div className="rounded-full border border-white/70 bg-white/85 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/70 shadow-md backdrop-blur-sm">
              Hover to light up
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const HeroPlaceholderHumans = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 top-0 z-10 hidden xl:block pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_58%)]" />

      <PlaceholderHuman
        side="left"
        tone="hsl(45, 100%, 50%)"
        glow="radial-gradient(circle, hsla(45, 100%, 50%, 0.35) 0%, transparent 70%)"
        label="Corporate"
        title="Man"
        delay={0.15}
      />
      <PlaceholderHuman
        side="left"
        tone="hsl(340, 82%, 52%)"
        glow="radial-gradient(circle, hsla(340, 82%, 52%, 0.3) 0%, transparent 70%)"
        label="People"
        title="Woman"
        delay={0.25}
      />
      <PlaceholderHuman
        side="right"
        tone="hsl(196, 100%, 45%)"
        glow="radial-gradient(circle, hsla(196, 100%, 45%, 0.3) 0%, transparent 70%)"
        label="Training"
        title="Trainer"
        delay={0.2}
      />
      <PlaceholderHuman
        side="right"
        tone="hsl(156, 72%, 42%)"
        glow="radial-gradient(circle, hsla(156, 72%, 42%, 0.3) 0%, transparent 70%)"
        label="School"
        title="Student"
        delay={0.3}
      />

      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-5 rounded-full border border-white/75 bg-white/88 px-5 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-md xl:bottom-12 xl:gap-7 xl:px-6 pointer-events-auto">
        {bulbIconMap.map((Icon, index) => {
          const tones = [
            "hsl(45, 100%, 50%)",
            "hsl(340, 82%, 52%)",
            "hsl(196, 100%, 45%)",
            "hsl(156, 72%, 42%)",
          ];

          return (
            <BulbChip
              key={index}
              icon={Icon}
              label={["Build", "Lead", "Move", "Learn"][index]}
              tone={tones[index]}
              delay={0.45 + index * 0.08}
            />
          );
        })}
      </div>
    </div>
  );
};