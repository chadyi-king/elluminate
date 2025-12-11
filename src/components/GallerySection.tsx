import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import event images
import eventAwardsCeremony from "@/assets/events/awards-ceremony-1.jpg";
import eventBrandActivation from "@/assets/events/brand-activation-1.jpg";
import eventDinnerDance from "@/assets/events/dinner-dance-1.jpg";
import eventFamilyFunDay from "@/assets/events/family-fun-day-1.jpg";
import eventImmersiveExperience from "@/assets/events/immersive-experience-1.jpg";
import eventOverseasRetreat from "@/assets/events/overseas-retreat-1.jpg";
import eventProductLaunch from "@/assets/events/product-launch-1.jpg";
import eventTeamBuildingOutdoor from "@/assets/events/team-building-outdoor-1.jpg";
import eventTeamCelebration from "@/assets/events/team-celebration-1.jpg";
import eventTownHall from "@/assets/events/town-hall-1.jpg";

const galleryImages = [
  { src: eventAwardsCeremony, alt: "Awards Ceremony", category: "Celebrations" },
  { src: eventBrandActivation, alt: "Brand Activation", category: "Corporate" },
  { src: eventDinnerDance, alt: "Dinner & Dance", category: "Celebrations" },
  { src: eventFamilyFunDay, alt: "Family Fun Day", category: "Team Building" },
  { src: eventImmersiveExperience, alt: "Immersive Experience", category: "Events" },
  { src: eventOverseasRetreat, alt: "Overseas Retreat", category: "Retreats" },
  { src: eventProductLaunch, alt: "Product Launch", category: "Corporate" },
  { src: eventTeamBuildingOutdoor, alt: "Outdoor Team Building", category: "Team Building" },
  { src: eventTeamCelebration, alt: "Team Celebration", category: "Celebrations" },
  { src: eventTownHall, alt: "Town Hall Meeting", category: "Corporate" },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-display font-semibold mb-4 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-6">
            Event <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into the memorable experiences we've created for teams across Singapore.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className={`aspect-square ${index === 0 || index === 5 ? "md:aspect-square" : ""}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-display font-semibold px-2 py-1 rounded-full bg-primary/20 text-primary-foreground mb-2 inline-block">
                      {image.category}
                    </span>
                    <h4 className="text-white font-display font-bold text-sm md:text-base">
                      {image.alt}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.img
            key={selectedImage}
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="font-display font-bold text-lg">{galleryImages[selectedImage].alt}</p>
            <p className="text-white/60 text-sm">{galleryImages[selectedImage].category}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};
