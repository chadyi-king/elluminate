import { motion } from "framer-motion";

const activities = [
  { name: "Amazing Race", color: "#FFC400" },
  { name: "CSI Investigation", color: "#26D07C" },
  { name: "Cultural Race", color: "#FF4F4F" },
  { name: "Archery Tag", color: "#2A8DFF" },
  { name: "Laser Tag", color: "#2A8DFF" },
  { name: "Creative Workshops", color: "#A768FF" },
  { name: "Wellness", color: "#62E2C4" },
  { name: "Adventure Challenges", color: "#FF8A3D" },
  { name: "Virtual Escape Room", color: "#26D07C" },
  { name: "Overseas Retreats", color: "#2A8DFF" },
];

export const MarqueeBanner = () => {
  // Duplicate for seamless loop
  const duplicatedActivities = [...activities, ...activities, ...activities];

  return (
    <div className="relative overflow-hidden py-6 bg-gradient-to-r from-primary via-primary-deep to-primary">
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
      
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedActivities.map((activity, index) => (
          <div 
            key={`${activity.name}-${index}`}
            className="flex items-center gap-3"
          >
            <span
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: activity.color }}
            />
            <span 
              className="text-lg md:text-xl font-display font-bold tracking-wide"
              style={{ color: activity.color }}
            >
              {activity.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
