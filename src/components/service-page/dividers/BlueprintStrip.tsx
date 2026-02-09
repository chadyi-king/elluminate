import * as React from "react";

type StripDirection = "downRight" | "downLeft";

interface BlueprintStripProps {
  direction?: StripDirection;
  accentColor: string;
  className?: string;
}

/** Builder Cross divider: heavy blueprint grid with measurement markers. */
export const BlueprintStrip = ({ direction = "downRight", accentColor, className }: BlueprintStripProps) => {
  const rotation = direction === "downRight" ? "rotate(-2deg)" : "rotate(2deg)";
  return (
    <div className={"relative -mx-4 my-10 overflow-hidden " + (className ?? "")}>
      <div aria-hidden className="relative h-14 w-[120%] -translate-x-[10%]" style={{ transform: rotation }}>
        {/* Blue-tinted background like blueprint paper */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #0a1628, #0d1f3c)",
          }}
        />
        
        {/* Fine grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `repeating-linear-gradient(90deg, rgba(59,130,246,0.15) 0 1px, transparent 1px 16px), repeating-linear-gradient(0deg, rgba(59,130,246,0.15) 0 1px, transparent 1px 16px)`,
            opacity: 1,
          }}
        />

        {/* Major grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `repeating-linear-gradient(90deg, rgba(59,130,246,0.35) 0 1px, transparent 1px 64px), repeating-linear-gradient(0deg, rgba(59,130,246,0.3) 0 1px, transparent 1px 48px)`,
            opacity: 1,
          }}
        />

        {/* Accent rails */}
        <div className="absolute left-0 right-0 top-2 h-[6px]" style={{ backgroundColor: accentColor }} />
        <div className="absolute left-0 right-0 bottom-2 h-[6px]" style={{ backgroundColor: accentColor }} />
      </div>
    </div>
  );
};
