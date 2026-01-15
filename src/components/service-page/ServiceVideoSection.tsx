import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface ServiceVideoSectionProps {
  title: string;
  subtitle?: string;
  videoUrl?: string;
  thumbnailImage?: string;
  accentColor: string;
}

export const ServiceVideoSection = ({
  title,
  subtitle,
  videoUrl,
  thumbnailImage,
  accentColor,
}: ServiceVideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoUrl) {
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${accentColor} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
          <motion.div
            className="w-20 h-0.5 mx-auto mt-4"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            }}
          />
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2"
            style={{ borderColor: `${accentColor}30` }}
          >
            {isPlaying && videoUrl ? (
              <iframe
                src={videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                {/* Thumbnail / Placeholder */}
                {thumbnailImage ? (
                  <img
                    src={thumbnailImage}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}20 0%, ${accentColor}40 50%, ${accentColor}20 100%)`,
                    }}
                  >
                    {/* Abstract pattern for placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4 opacity-20">
                        {[...Array(9)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-16 h-16 rounded-lg"
                            style={{ backgroundColor: accentColor }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Play Button */}
                <motion.button
                  onClick={handlePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                >
                  <div
                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: accentColor,
                      boxShadow: `0 0 30px ${accentColor}60`,
                    }}
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" />
                    
                    {/* Pulse animation rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ borderColor: accentColor, borderWidth: 2 }}
                      animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ borderColor: accentColor, borderWidth: 2 }}
                      animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    />
                  </div>
                </motion.button>

                {/* Video not available text */}
                {!videoUrl && (
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-white/80 text-sm bg-black/50 px-4 py-2 rounded-full">
                      Video coming soon
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
