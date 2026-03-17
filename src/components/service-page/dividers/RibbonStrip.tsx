import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface RibbonStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

export const RibbonStrip = ({ direction = "downRight", accentColor, className }: RibbonStripProps) => {
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
          background: `linear-gradient(135deg, ${accentColor}12, ${accentColor}06, ${accentColor}12)`,
        }}
      >
        {/* Satin ribbon texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 0%, ${accentColor}08 10%, ${accentColor}15 50%, ${accentColor}08 90%, transparent 100%),
              repeating-linear-gradient(0deg, transparent, transparent 4px, ${accentColor}06 4px, ${accentColor}06 5px)
            `,
          }}
        />

        {/* Trophy/star repeating pattern */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `
              radial-gradient(circle 2px, ${accentColor}35 100%, transparent 100%),
              radial-gradient(circle 1px, ${accentColor}20 100%, transparent 100%)
            `,
            backgroundSize: "60px 20px, 30px 30px",
            backgroundPosition: "15px 10px, 0px 5px",
          }}
        />

        {/* Award rosette circles */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle 8px, transparent 5px, ${accentColor}10 5.5px, ${accentColor}10 6.5px, transparent 7px)
            `,
            backgroundSize: "120px 56px",
            backgroundPosition: "30px center",
          }}
        />

        {/* Gold accent rails */}
        <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, ${accentColor}, ${accentColor}60, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-[6px]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, ${accentColor}, ${accentColor}60, transparent)` }} />

        {/* Center gold line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2" style={{ background: `linear-gradient(90deg, transparent 5%, ${accentColor}30 30%, ${accentColor}50 50%, ${accentColor}30 70%, transparent 95%)` }} />
      </div>
    </div>
  );
};
