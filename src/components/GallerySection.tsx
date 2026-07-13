import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const eventImages = [
  {
    src: "/images/services/amazing-race/gallery-1.jpg",
    alt: "Colleagues completing an outdoor Amazing Race challenge",
    title: "Amazing Race",
    category: "Outdoor team building",
  },
  {
    src: "/images/services/csi-bones/gallery-1.jpg",
    alt: "Participants examining evidence during a CSI-Bones activity",
    title: "CSI-Bones",
    category: "Indoor team building",
  },
  {
    src: "/images/services/minute-to-win-it/gallery-2.jpg",
    alt: "A group taking part in a Minute To Win It station game",
    title: "Minute To Win It",
    category: "High-energy stations",
  },
  {
    src: "/images/services/monopoly-dash/gallery-1.jpg",
    alt: "Teams gathered for a Monopoly Dash challenge",
    title: "Monopoly Dash",
    category: "Strategy race",
  },
  {
    src: "/images/services/overseas-retreats/gallery-1.jpg",
    alt: "Company group photographed together during an overseas retreat",
    title: "Overseas Retreat",
    category: "Company retreat",
  },
  {
    src: "/images/services/overseas-retreats/gallery-3.jpg",
    alt: "Colleagues sharing an activity during a company retreat",
    title: "Retreat Programme",
    category: "Offsite experience",
  },
  {
    src: "/images/services/workshops/gallery-1.jpg",
    alt: "Participants engaged in a facilitated company workshop",
    title: "Facilitated Workshop",
    category: "Training",
  },
  {
    src: "/images/services/running-man/gallery-1.jpg",
    alt: "A company group taking part in a Running Man team activity",
    title: "Running Man",
    category: "Team challenge",
  },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((current) => (current === null ? 0 : (current + 1) % eventImages.length));
  const previousImage = () =>
    setSelectedImage((current) => (current === null ? 0 : (current - 1 + eventImages.length) % eventImages.length));

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">From the event archive</p>
          <h2 className="mt-4 font-display text-3xl font-black text-foreground md:text-5xl">
            Company experiences, as they actually happened.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Team challenges, facilitated workshops and retreats delivered across different settings and levels of activity.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {eventImages.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              onClick={() => setSelectedImage(index)}
              className={`group relative overflow-hidden rounded-lg bg-secondary text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary ${
                index === 0 || index === 4 ? "col-span-2 row-span-2" : ""
              }`}
              aria-label={`Open photo: ${image.title}`}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
                  <p className="text-xs font-semibold text-sky-200">{image.category}</p>
                  <h3 className="mt-1 font-display text-sm font-bold text-white md:text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={eventImages[selectedImage].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close photo viewer"
            >
              <X aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-6"
              aria-label="Previous photo"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6"
              aria-label="Next photo"
            >
              <ChevronRight aria-hidden="true" />
            </button>

            <div className="max-w-6xl" onClick={(event) => event.stopPropagation()}>
              <img
                src={eventImages[selectedImage].src}
                alt={eventImages[selectedImage].alt}
                className="max-h-[78vh] max-w-full rounded-lg object-contain"
              />
              <div className="mt-4 text-center text-white">
                <p className="font-display text-lg font-bold">{eventImages[selectedImage].title}</p>
                <p className="mt-1 text-sm text-white/65">{eventImages[selectedImage].category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
