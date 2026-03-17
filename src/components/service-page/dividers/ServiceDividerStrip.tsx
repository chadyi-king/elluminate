import * as React from "react";
import { RaceTrackStrip } from "@/components/service-page/RaceTrackStrip";
import { PoliceTapeStrip } from "@/components/service-page/dividers/PoliceTapeStrip";
import { ArrowStrip } from "@/components/service-page/dividers/ArrowStrip";
import { MoneyStrip } from "@/components/service-page/dividers/MoneyStrip";
import { VaultStrip } from "@/components/service-page/dividers/VaultStrip";
import { TimerStrip } from "@/components/service-page/dividers/TimerStrip";
import { FoamDartStrip } from "@/components/service-page/dividers/FoamDartStrip";
import { BlueprintStrip } from "@/components/service-page/dividers/BlueprintStrip";
import { RouteStrip } from "@/components/service-page/dividers/RouteStrip";
import { GelBeadsStrip } from "@/components/service-page/dividers/GelBeadsStrip";
import { SquidStrip } from "@/components/service-page/dividers/SquidStrip";
import { LaserStrip } from "@/components/service-page/dividers/LaserStrip";
import { ConfettiStrip } from "@/components/service-page/dividers/ConfettiStrip";
import { SpotlightStrip } from "@/components/service-page/dividers/SpotlightStrip";
import { RibbonStrip } from "@/components/service-page/dividers/RibbonStrip";
import { WaveStrip } from "@/components/service-page/dividers/WaveStrip";

export type DividerVariant =
  | "raceTrack"
  | "policeTape"
  | "arrow"
  | "money"
  | "vault"
  | "timer"
  | "foamDart"
  | "blueprint"
  | "route"
  | "gelBeads"
  | "squid"
  | "laser"
  | "confetti"
  | "spotlight"
  | "ribbon"
  | "wave";

export type DividerDirection = "downRight" | "downLeft";

interface ServiceDividerStripProps {
  variant?: DividerVariant;
  direction?: DividerDirection;
  accentColor: string;
  className?: string;
}

export const ServiceDividerStrip = ({
  variant = "raceTrack",
  direction = "downRight",
  accentColor,
  className,
}: ServiceDividerStripProps) => {
  switch (variant) {
    case "policeTape":
      return <PoliceTapeStrip direction={direction} accentColor={accentColor} className={className} />;
    case "arrow":
      return <ArrowStrip direction={direction} accentColor={accentColor} className={className} />;
    case "money":
      return <MoneyStrip direction={direction} accentColor={accentColor} className={className} />;
    case "vault":
      return <VaultStrip direction={direction} accentColor={accentColor} className={className} />;
    case "timer":
      return <TimerStrip direction={direction} accentColor={accentColor} className={className} />;
    case "foamDart":
      return <FoamDartStrip direction={direction} accentColor={accentColor} className={className} />;
    case "blueprint":
      return <BlueprintStrip direction={direction} accentColor={accentColor} className={className} />;
    case "route":
      return <RouteStrip direction={direction} accentColor={accentColor} className={className} />;
    case "gelBeads":
      return <GelBeadsStrip direction={direction} accentColor={accentColor} className={className} />;
    case "squid":
      return <SquidStrip direction={direction} accentColor={accentColor} className={className} />;
    case "laser":
      return <LaserStrip direction={direction} accentColor={accentColor} className={className} />;
    case "confetti":
      return <ConfettiStrip direction={direction} accentColor={accentColor} className={className} />;
    case "spotlight":
      return <SpotlightStrip direction={direction} accentColor={accentColor} className={className} />;
    case "ribbon":
      return <RibbonStrip direction={direction} accentColor={accentColor} className={className} />;
    case "wave":
      return <WaveStrip direction={direction} accentColor={accentColor} className={className} />;
    case "raceTrack":
    default:
      return <RaceTrackStrip direction={direction} accentColor={accentColor} className={className} />;
  }
};
