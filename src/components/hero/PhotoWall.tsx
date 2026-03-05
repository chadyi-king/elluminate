import { motion } from "framer-motion";

// Import all event photos for the photo wall
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

// Hero images
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
  { src: heroAmazingRace, alt: "Amazing race team building activity Singapore" },
  { src: heroOverseasRetreat, alt: "Corporate overseas retreat experience" },
  { src: heroCreativeWorkshop, alt: "Creative workshop team building Singapore" },
  { src: heroCsiInvestigation, alt: "CSI investigation team building game" },
  { src: heroWellnessActivity, alt: "Corporate wellness activity team event" },
  { src: heroAdventureChallenge, alt: "Adventure challenge outdoor team building" },
  { src: heroTeamCelebration, alt: "Team celebration event corporate Singapore" },
  { src: heroCulturalRace, alt: "Cultural race heritage team building Singapore" },
];

// Create columns for the photo wall
const columns = [
  allPhotos.slice(0, 5),
  allPhotos.slice(5, 10),
  allPhotos.slice(10, 14),
  allPhotos.slice(14, 18),
  allPhotos.slice(0, 5), // Repeat for more coverage
];

export const PhotoWall = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Photo grid with animated columns */}
      <div className="flex gap-2 h-[200%] -translate-y-1/4">
        {columns.map((column, colIndex) => (
          <motion.div
            key={colIndex}
            className="flex-1 flex flex-col gap-2"
            animate={{
              y: colIndex % 2 === 0 ? ["0%", "-10%", "0%"] : ["-10%", "0%", "-10%"],
            }}
            transition={{
              duration: 30 + colIndex * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Double the photos for seamless loop */}
            {[...column, ...column].map((photo, photoIndex) => (
              <div
                key={photoIndex}
                className="relative w-full aspect-[3/4] rounded-lg overflow-hidden"
              >
              <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading={photoIndex < 3 ? "eager" : "lazy"}
                  {...(photoIndex === 0 ? { fetchPriority: "high" as const } : {})}
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Overlay gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50" />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, white 80%)",
        }}
      />
    </div>
  );
};
