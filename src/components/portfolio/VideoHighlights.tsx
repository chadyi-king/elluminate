import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  { id: 1, title: "2024 Showreel", thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800", isMain: true },
  { id: 2, title: "Tech Summit 2024", thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", isMain: false },
  { id: 3, title: "Annual Gala Night", thumbnail: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800", isMain: false },
  { id: 4, title: "Team Building Retreat", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800", isMain: false },
  { id: 5, title: "Product Launch Event", thumbnail: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800", isMain: false },
  { id: 6, title: "Awards Ceremony", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", isMain: false },
  { id: 7, title: "Festival Experience", thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800", isMain: false },
];

export const VideoHighlights = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const mainVideo = videos.find((v) => v.isMain);
  const otherVideos = videos.filter((v) => !v.isMain);

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-background-deep">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-metallic-gold mb-4">
            Video Highlights
          </h2>
          <motion.div 
            className="w-24 h-0.5 mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 65% 52%), transparent)" }}
          />
        </motion.div>

        {/* Main Video */}
        {mainVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div
              onClick={() => setSelectedVideo(mainVideo.id)}
              className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
            >
              <img
                src={mainVideo.thumbnail}
                alt={mainVideo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-primary flex items-center justify-center"
                  style={{ boxShadow: "0 0 40px hsl(43 65% 52% / 0.5)" }}
                >
                  <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                </motion.div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-display font-bold text-white">{mainVideo.title}</h3>
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Carousel */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6">
          <div className="flex gap-4" style={{ minWidth: "max-content" }}>
            {otherVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedVideo(video.id)}
                className="relative w-64 aspect-video rounded-lg overflow-hidden cursor-pointer group flex-shrink-0"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="w-5 h-5 text-black ml-0.5" fill="currentColor" />
                  </motion.div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                  <h4 className="text-sm font-medium text-white">{video.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl w-full aspect-video bg-black rounded-lg flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder for actual video player */}
              <div className="text-center">
                <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-white/70">Video player placeholder</p>
                <p className="text-primary text-sm mt-2">
                  {videos.find((v) => v.id === selectedVideo)?.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
