import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface PoliceTapeStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** CSI-themed divider: bold warning/police tape with "CAUTION" text. */
export const PoliceTapeStrip = ({
  direction = "downRight",
  accentColor,
  className,
}: PoliceTapeStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        {/* Black/yellow diagonal stripe background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(45deg, #000 0 14px, #FFD600 14px 28px)",
            opacity: 0.85,
          }}
        />

        {/* Accent color rails */}
        <div className="absolute left-0 right-0 top-1 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-1 h-[6px]" style={{ backgroundColor: accentColor }} />

        {/* Repeating "CAUTION" text overlay */}
        <div
          className="absolute inset-0 flex items-center overflow-hidden"
        >
          <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex gap-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="text-xs font-black tracking-[0.3em] uppercase mx-8"
                style={{ color: "#FFD600", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
              >
                ⚠ CAUTION DO NOT CROSS ⚠
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
