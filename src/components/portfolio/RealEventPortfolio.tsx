import { motion } from "framer-motion";

const eventMedia = [
  { title: "Amazing Race", type: "Outdoor team building", image: "/images/services/amazing-race/gallery-1.jpg", href: "/services/amazing-race" },
  { title: "CSI-Bones", type: "Indoor mystery challenge", image: "/images/services/csi-bones/gallery-2.jpg", href: "/services/csi-bones" },
  { title: "Minute To Win It", type: "Facilitated station games", image: "/images/services/minute-to-win-it/gallery-3.jpg", href: "/services/minute-to-win-it" },
  { title: "Monopoly Dash", type: "Strategy and race format", image: "/images/services/monopoly-dash/gallery-4.jpg", href: "/services/monopoly-dash" },
  { title: "Company Workshop", type: "Indoor collaborative format", image: "/images/services/workshops/gallery-1.jpg", href: "/services/workshops" },
  { title: "Overseas Retreat", type: "Company retreat experience", image: "/images/services/overseas-retreats/gallery-1.jpg", href: "/services/overseas-retreats" },
];

export const RealEventPortfolio = () => (
  <section className="relative bg-black py-20 md:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Event evidence</p>
        <h2 className="mb-5 font-display text-3xl font-bold text-white md:text-5xl">See the formats in motion</h2>
        <p className="text-base leading-relaxed text-white/65 md:text-lg">
          These are event images and footage from activities, workshops and retreats delivered by our operating team.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/50">
          Elluminate and Team Elevate are operated by EXSTATIC PTE LTD. Selected event history shown was delivered under Team Elevate.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-5 overflow-hidden rounded-xl border border-primary/20 bg-white/5"
      >
        <video
          className="aspect-video w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster="/images/services/amazing-race/gallery-6.jpg"
        >
          <source src="/videos/elluminate-showreel.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        <div className="border-t border-white/10 px-5 py-4">
          <h3 className="font-display text-xl font-bold text-white">Elluminate event showreel</h3>
          <p className="mt-1 text-sm text-white/55">Highlights from team activities and company experiences.</p>
        </div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {eventMedia.map((item, index) => (
          <motion.a
            key={item.title}
            href={item.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <img
              src={item.image}
              alt={`${item.title} event in progress`}
              loading="lazy"
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{item.type}</p>
              <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
