import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

interface VideoItem {
  title: string;
  thumbnailImage?: string;
  videoUrl?: string;
}

interface ServiceVideoCarouselProps {
  title: string;
  subtitle?: string;
  videos: VideoItem[];
  accentColor: string;
}

export const ServiceVideoCarousel = ({
  title,
  subtitle,
  videos,
  accentColor,
}: ServiceVideoCarouselProps) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const maxScroll = Math.max(0, videos.length - 3);
  const canScrollLeft = scrollIndex > 0;
  const canScrollRight = scrollIndex < maxScroll;

  return (
    <section className="py-16 relative overflow-hidden bg-muted/30">
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
          <motion.div
            className="w-20 h-0.5 mx-auto mt-4"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            }}
          />
        </motion.div>

        {/* Video Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation arrows */}
          {canScrollLeft && (
            <button
              onClick={() => setScrollIndex((i) => Math.max(0, i - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => setScrollIndex((i) => Math.min(maxScroll, i + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          )}

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${scrollIndex * (100 / 3 + 1.33)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {videos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex-shrink-0 w-[calc(33.333%-0.667rem)]"
                >
                  <button
                    onClick={() => video.videoUrl && setActiveVideo(video)}
                    className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                  >
                    {/* Thumbnail */}
                    {video.thumbnailImage ? (
                      <img
                        src={video.thumbnailImage}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${accentColor}30 0%, ${accentColor}50 100%)`,
                        }}
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                    {/* Play icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: accentColor,
                          boxShadow: `0 0 20px ${accentColor}50`,
                        }}
                      >
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white text-sm font-medium leading-tight">
                        {video.title}
                      </p>
                      {!video.videoUrl && (
                        <span className="text-white/60 text-xs">Coming soon</span>
                      )}
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          {videos.length > 3 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxScroll + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setScrollIndex(i)}
                  className="w-2 h-2 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: i === scrollIndex ? accentColor : `${accentColor}40`,
                    transform: i === scrollIndex ? "scale(1.3)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-white/80 hover:text-white z-10"
              >
                <X className="w-6 h-6" />
              </button>
              {activeVideo.videoUrl ? (
                activeVideo.videoUrl.match(/\.(mp4|webm|ogg)/) ? (
                  <video
                    src={activeVideo.videoUrl}
                    className="w-full h-full"
                    controls
                    autoPlay
                  />
                ) : (
                  <iframe
                    src={activeVideo.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Video coming soon</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
