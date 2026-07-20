import { motion, useReducedMotion } from "framer-motion";
import awardsCeremony from "@/assets/events/awards-ceremony-1.jpg";
import brandActivation from "@/assets/events/brand-activation-1.jpg";
import dinnerDance from "@/assets/events/dinner-dance-1.jpg";
import familyFunDay from "@/assets/events/family-fun-day-1.jpg";
import immersiveExperience from "@/assets/events/immersive-experience-1.jpg";
import overseasRetreat from "@/assets/events/overseas-retreat-1.jpg";
import productLaunch from "@/assets/events/product-launch-1.jpg";
import teamBuildingOutdoor from "@/assets/events/team-building-outdoor-1.jpg";
import teamCelebration from "@/assets/events/team-celebration-1.jpg";
import townHall from "@/assets/events/town-hall-1.jpg";
import heroAmazingRace from "@/assets/hero/amazing-race.jpg";
import heroOverseasRetreat from "@/assets/hero/overseas-retreat.jpg";
import heroCreativeWorkshop from "@/assets/hero/creative-workshop.jpg";
import heroCsiInvestigation from "@/assets/hero/csi-investigation.jpg";
import heroWellnessActivity from "@/assets/hero/wellness-activity.jpg";
import heroAdventureChallenge from "@/assets/hero/adventure-challenge.jpg";
import heroTeamCelebration from "@/assets/hero/team-celebration.jpg";
import heroCulturalRace from "@/assets/hero/cultural-race.jpg";

const allPhotos = [
  { src: awardsCeremony, alt: "Corporate awards ceremony event in Singapore" },
  { src: brandActivation, alt: "Brand activation experiential marketing event Singapore" },
  { src: dinnerDance, alt: "Company dinner and dance gala Singapore" },
  { src: familyFunDay, alt: "Corporate family fun day team building Singapore" },
  { src: immersiveExperience, alt: "Immersive themed experience corporate event" },
  { src: overseasRetreat, alt: "Overseas corporate retreat team bonding" },
  { src: productLaunch, alt: "Product launch event Singapore" },
  { src: teamBuildingOutdoor, alt: "Outdoor team building activity Singapore" },
  { src: teamCelebration, alt: "Team celebration corporate event" },
  { src: townHall, alt: "Corporate town hall meeting event" },
  { src: heroAmazingRace, alt: "Amazing Race team building activity Singapore" },
  { src: heroOverseasRetreat, alt: "Corporate overseas retreat experience" },
  { src: heroCreativeWorkshop, alt: "Creative workshop team building Singapore" },
  { src: heroCsiInvestigation, alt: "CSI investigation team building game" },
  { src: heroWellnessActivity, alt: "Corporate wellness activity team event" },
  { src: heroAdventureChallenge, alt: "Adventure challenge outdoor team building" },
  { src: heroTeamCelebration, alt: "Team celebration event corporate Singapore" },
  { src: heroCulturalRace, alt: "Cultural race heritage team building Singapore" },
];

const columns = [
  allPhotos.slice(0, 5),
  allPhotos.slice(5, 10),
  allPhotos.slice(10, 14),
  allPhotos.slice(14, 18),
  allPhotos.slice(1, 6),
];

export const PhotoWall = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="flex h-[190%] -translate-y-1/4 gap-2 opacity-85">
        {columns.map((column, columnIndex) => (
          <motion.div
            key={columnIndex}
            className={`${columnIndex > 2 ? "hidden md:flex" : "flex"} min-w-0 flex-1 flex-col gap-2`}
            animate={
              reduceMotion
                ? undefined
                : { y: columnIndex % 2 === 0 ? ["0%", "-8%", "0%"] : ["-8%", "0%", "-8%"] }
            }
            transition={{ duration: 34 + columnIndex * 4, repeat: Infinity, ease: "linear" }}
          >
            {[...column, ...column].map((photo, photoIndex) => (
              <div key={`${columnIndex}-${photoIndex}`} className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <img
                  src={photo.src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={360}
                  height={480}
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/[0.72] to-white/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.65] via-white/20 to-white/[0.65]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_24%,white_78%)]" />
    </div>
  );
};
