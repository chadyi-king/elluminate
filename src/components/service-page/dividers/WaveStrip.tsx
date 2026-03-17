import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface WaveStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

export const WaveStrip = ({ direction = "downRight", accentColor, className }: WaveStripProps) => {
  const rotate = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";

  return (
    <div className={`relative w-full h-14 overflow-hidden my-[-1px] ${className ?? ""}`}>
      <div
        className="absolute inset-0"
        style={{
          transform: rotate,
          transformOrigin: "center center",
          top: "-10%",
          bottom: "-10%",
          left: "-2%",
          right: "-2%",
          background: `linear-gradient(180deg, ${accentColor}08, ${accentColor}15, ${accentColor}08)`,
        }}
      >
        {/* Flowing wave lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 56">
          <path
            d="M0 28 Q100 10, 200 28 T400 28 T600 28 T800 28 T1000 28 T1200 28"
            fill="none"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeOpacity="0.25"
          />
          <path
            d="M0 20 Q150 38, 300 20 T600 20 T900 20 T1200 20"
            fill="none"
            stroke={accentColor}
            strokeWidth="1"
            strokeOpacity="0.15"
          />
          <path
            d="M0 36 Q120 18, 240 36 T480 36 T720 36 T960 36 T1200 36"
            fill="none"
            stroke={accentColor}
            strokeWidth="1"
            strokeOpacity="0.15"
          />
        </svg>

        {/* Soft particle dots */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle 2px, ${accentColor}20 100%, transparent 100%),
              radial-gradient(circle 1.5px, ${accentColor}15 100%, transparent 100%)
            `,
            backgroundSize: "100px 40px, 70px 35px",
            backgroundPosition: "20px 10px, 50px 25px",
          }}
        />

        {/* Top and bottom accent rails */}
        <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}40, ${accentColor}80, ${accentColor}40, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-[6px]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}40, ${accentColor}80, ${accentColor}40, transparent)` }} />
      </div>
    </div>
  );
};
