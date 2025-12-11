import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80", title: "Gala Night", category: "Dinner & Dance", industry: "Finance", year: "2024" },
  { id: 2, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80", title: "Team Challenge", category: "Team Building", industry: "Technology", year: "2023" },
  { id: 3, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", title: "Product Reveal", category: "Product Launches", industry: "Consumer Goods", year: "2024" },
  { id: 4, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80", title: "Awards Night", category: "Awards Ceremonies", industry: "Insurance", year: "2023" },
  { id: 5, src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80", title: "Festival Vibes", category: "Immersive Experiences", industry: "Entertainment", year: "2024" },
  { id: 6, src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80", title: "Concert Setup", category: "AV, Stage & Production", industry: "Media", year: "2023" },
  { id: 7, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80", title: "Conference", category: "Team Building", industry: "Consulting", year: "2024" },
  { id: 8, src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80", title: "VIP Launch", category: "Product Launches", industry: "Luxury Retail", year: "2023" },
  { id: 9, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", title: "Team Bonding", category: "Overseas Retreats", industry: "Logistics", year: "2024" },
  { id: 10, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", title: "Workshop", category: "Team Building", industry: "Healthcare", year: "2023" },
  { id: 11, src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80", title: "Celebration", category: "Awards Ceremonies", industry: "Manufacturing", year: "2024" },
  { id: 12, src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80", title: "Networking", category: "Brand Activations", industry: "F&B", year: "2023" },
];

interface PhotoGalleryProps {
  filter: string | null;
}

export const PhotoGallery = ({ filter }: PhotoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = filter
    ? galleryImages.filter((img) => img.category === filter)
    : galleryImages;

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
      const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
      const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const selectedImageData = selectedImage
    ? filteredImages.find((img) => img.id === selectedImage)
    : null;

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
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
            Photo Gallery
          </h2>
          <motion.div 
            className="w-24 h-0.5 mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 65% 52%), transparent)" }}
          />
        </motion.div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(image.id)}
              className={`relative cursor-pointer group overflow-hidden rounded-lg ${
                index === 0 || index === 5 ? "row-span-2" : ""
              } ${index === 2 ? "col-span-2" : ""}`}
              style={{ aspectRatio: index === 0 || index === 5 ? "3/4" : index === 2 ? "2/1" : "1/1" }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white font-display font-bold text-lg">{image.title}</h3>
                  <span className="text-primary text-sm">{image.industry} • {image.year}</span>
                </div>
              </div>

              {/* Gold glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "inset 0 0 30px hsl(43 65% 52% / 0.3)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 p-2 text-white hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 p-2 text-white hover:text-primary transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImageData.src}
                alt={selectedImageData.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-white font-display font-bold text-xl">{selectedImageData.title}</h3>
                <span className="text-primary">{selectedImageData.industry} • {selectedImageData.year}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
