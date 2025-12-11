import { motion } from "framer-motion";

const blobs = [
  { color: "#FFC400", size: 300, x: "10%", y: "20%", delay: 0 },
  { color: "#26D07C", size: 250, x: "80%", y: "30%", delay: 2 },
  { color: "#A768FF", size: 200, x: "70%", y: "70%", delay: 4 },
  { color: "#2A8DFF", size: 350, x: "20%", y: "75%", delay: 1 },
  { color: "#FF8A3D", size: 180, x: "50%", y: "10%", delay: 3 },
  { color: "#62E2C4", size: 220, x: "90%", y: "60%", delay: 5 },
];

interface FloatingBlobsProps {
  opacity?: number;
  className?: string;
}

export const FloatingBlobs = ({ opacity = 0.15, className = "" }: FloatingBlobsProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            backgroundColor: blob.color,
            opacity: opacity,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay,
          }}
        />
      ))}
    </div>
  );
};
