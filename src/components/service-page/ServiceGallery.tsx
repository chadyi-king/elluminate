import { motion } from "framer-motion";

interface ServiceGalleryProps {
  images: string[];
}

export const ServiceGallery = ({ images }: ServiceGalleryProps) => {
  return (
    <section className="py-24 bg-background-deep relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Event Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our past events and the magic we create
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 || index === 5 ? 'row-span-2' : ''
              } ${index === 2 ? 'col-span-2' : ''}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${image})`,
                  minHeight: index === 0 || index === 5 ? '400px' : '200px'
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/60 rounded-lg transition-colors duration-300" />
              
              <div 
                className="w-full"
                style={{ paddingBottom: index === 0 || index === 5 ? '200%' : '100%' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
