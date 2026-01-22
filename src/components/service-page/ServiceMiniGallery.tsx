import { motion } from "framer-motion";

interface ServiceMiniGalleryProps {
  title?: string;
  images: { src: string; alt: string }[];
}

export const ServiceMiniGallery = ({
  title = "Race Highlights",
  images,
}: ServiceMiniGalleryProps) => {
  return (
    <section className="py-14 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground text-center mb-8">
          {title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.slice(0, 3).map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border bg-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
