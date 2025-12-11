import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  scale: number;
}

const colors = ["#FFC400", "#26D07C", "#FF4F4F", "#2A8DFF", "#A768FF", "#62E2C4", "#FF8A3D"];

interface ConfettiBurstProps {
  trigger: boolean;
  onComplete?: () => void;
}

export const ConfettiBurst = ({ trigger, onComplete }: ConfettiBurstProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const createParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * -200 - 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 720 - 360,
        scale: Math.random() * 0.5 + 0.5,
      });
    }

    setParticles(newParticles);

    setTimeout(() => {
      setParticles([]);
      onComplete?.();
    }, 2000);
  }, [onComplete]);

  useEffect(() => {
    if (trigger) {
      createParticles();
    }
  }, [trigger, createParticles]);

  return (
    <AnimatePresence>
      {particles.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-3 h-3 rounded-sm"
              style={{ backgroundColor: particle.color }}
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0,
                rotate: 0,
                opacity: 1 
              }}
              animate={{ 
                x: particle.x * 5, 
                y: particle.y,
                scale: particle.scale,
                rotate: particle.rotation,
                opacity: 0
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};
