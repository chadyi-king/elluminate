import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-display font-semibold mb-4 block">
            See Us In Action
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground">
            Watch How We Bring{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Teams Together
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-base md:text-lg">
            A quick look at the energy, facilitation, and production style behind Elluminate experiences.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
            {!isPlaying ? (
              <>
                {/* Placeholder thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary to-primary/90 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                      <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-white/30 transition-colors">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-2">Elluminate Showreel</h3>
                    <p className="text-white/80">1,000+ Events | 100,000+ Participants | 8+ Years</p>
                  </div>
                </div>
                {/* Play button overlay */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 w-full h-full"
                  aria-label="Play video"
                />
              </>
            ) : (
              <div className="absolute inset-0 bg-foreground flex items-center justify-center">
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline controls>
                  <source
                    src="https://res.cloudinary.com/dw1q8nz8z/video/upload/f_auto,q_auto/v1775443680/Elevate-Home-Video_stionp.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
