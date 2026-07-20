import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/images/services/amazing-race/gallery-5.jpg", alt: "Team gathered at the finish of an outdoor city challenge" },
  { src: "/images/services/csi-bones/gallery-1.jpg", alt: "Participants examining evidence during an indoor mystery" },
  { src: "/images/services/local-retreats/gallery-4.jpg", alt: "Colleagues sharing a moment during a local retreat" },
  { src: "/images/services/amazing-race/gallery-6.jpg", alt: "Team working through an outdoor checkpoint challenge" },
  { src: "/images/services/csi-bones/gallery-3.jpg", alt: "Corporate group collaborating during a CSI challenge" },
  { src: "/images/services/monopoly-dash/hero.jpg", alt: "Participants taking part in an outdoor team activity" },
  { src: "/images/services/local-retreats/gallery-6.jpg", alt: "Company group enjoying time together away from the office" },
  { src: "/images/services/amazing-race/gallery-3.jpg", alt: "Teams competing together during an outdoor race" },
  { src: "/images/services/cultural-race/gallery-5.jpg", alt: "Participants following a clue during a Singapore discovery challenge" },
  { src: "/images/services/csi-bones/gallery-5.jpg", alt: "Team discussing clues around an investigation table" },
  { src: "/images/services/overseas-retreats/gallery-3.jpg", alt: "Colleagues exploring together during an overseas retreat" },
  { src: "/images/services/overseas-retreats/gallery-6.jpg", alt: "Team taking part in an outdoor retreat activity" },
  { src: "/images/services/monopoly-dash/gallery-2.jpg", alt: "Team members comparing cards during a tabletop challenge" },
  { src: "/images/services/csi-bones/gallery-6.jpg", alt: "Participants solving a mystery activity together" },
  { src: "/images/services/local-retreats/gallery-3.jpg", alt: "Participants gathering for a local retreat activity" },
  { src: "/images/services/workshops/gallery-6.jpg", alt: "A busy facilitated workshop in progress" },
  { src: "/images/services/workshops/gallery-5.jpg", alt: "Colleagues building and testing ideas during a workshop" },
  { src: "/images/services/youth-camps/gallery-1.jpg", alt: "Young participants working together during a group programme" },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const lightboxOpen = selectedImage !== null;

  const shiftRail = (direction: -1 | 1) => {
    railRef.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.82, 920), behavior: reduceMotion ? "auto" : "smooth" });
  };

  const nextImage = () => setSelectedImage((current) => (current === null ? 0 : (current + 1) % galleryImages.length));
  const prevImage = () => setSelectedImage((current) => (current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length));

  useEffect(() => {
    if (!lightboxOpen) return;

    restoreFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelectedImage(null);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedImage((current) => (current === null ? 0 : (current + 1) % galleryImages.length));
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedImage((current) => (current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length));
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled])") ?? []);
      if (focusable.length === 0) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && (activeElement === first || !dialogRef.current?.contains(activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreFocusRef.current?.focus();
    };
  }, [lightboxOpen]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background py-20 sm:py-24">
      <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-100/30 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Caught in the Moment</span>
          <h2 className="font-display text-4xl font-black leading-none text-foreground sm:text-5xl lg:text-6xl">
            The Energy, <span className="text-primary">Unfiltered</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Races, retreats, workshops and team moments from across our events.
          </p>
        </motion.header>

        <div className="mb-5 flex justify-end gap-2">
          <button type="button" onClick={() => shiftRail(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition hover:border-primary hover:text-primary" aria-label="Show previous event photos">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => shiftRail(1)} className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105" aria-label="Show more event photos">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div
          ref={railRef}
          className="grid snap-x snap-mandatory grid-flow-col grid-rows-2 auto-cols-[82%] gap-3 overflow-x-auto pb-4 [scrollbar-width:none] sm:auto-cols-[46%] lg:auto-cols-[31%] [&::-webkit-scrollbar]:hidden"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : (index % 6) * 0.04 }}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-[4/3] snap-start overflow-hidden rounded-[1.4rem] bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
              aria-label={`Open event photo ${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                width={720}
                height={540}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
            </motion.button>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <motion.div
          ref={dialogRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#06131e]/95 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Event photo viewer"
          tabIndex={-1}
        >
          <button ref={closeButtonRef} type="button" className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20" onClick={() => setSelectedImage(null)} aria-label="Close event photo">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6" onClick={(event) => { event.stopPropagation(); prevImage(); }} aria-label="Previous event photo">
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6" onClick={(event) => { event.stopPropagation(); nextImage(); }} aria-label="Next event photo">
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
          <motion.img
            key={selectedImage}
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            initial={reduceMotion ? false : { scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};
