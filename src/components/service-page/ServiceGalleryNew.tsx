import { motion } from "framer-motion";

interface ServiceGalleryNewProps {
  images: string[];
  accentColor: string;
}

export const ServiceGalleryNew = ({ images, accentColor }: ServiceGalleryNewProps) => {
  return (
    <section className="py-24 bg-background-deep relative overflow-hidden">
      {/* Background glow with accent color */}
      <motion.div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ backgroundColor: `${accentColor}08` }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Experience Gallery
          </h2>
          <motion.div 
            className="w-24 h-0.5 mx-auto"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
          />
          <p className="text-white/50 max-w-2xl mx-auto mt-4">
            A glimpse into the extraordinary experiences we create
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(0, 8).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? 'row-span-2' : ''
              } ${
                index === 2 ? 'col-span-2' : ''
              }`}
              style={{ aspectRatio: index === 0 || index === 5 ? '3/4' : index === 2 ? '2/1' : '1/1' }}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Accent overlay on hover */}
              <motion.div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${accentColor}40 0%, transparent 70%)` }}
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
