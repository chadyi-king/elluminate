import { motion } from "framer-motion";

const behindScenes = [
  { id: 1, title: "Amazing Race briefing", image: "/images/services/amazing-race/gallery-2.jpg" },
  { id: 2, title: "CSI-Bones investigation", image: "/images/services/csi-bones/gallery-2.jpg" },
  { id: 3, title: "Minute To Win It station", image: "/images/services/minute-to-win-it/gallery-3.jpg" },
  { id: 4, title: "Monopoly Dash challenge", image: "/images/services/monopoly-dash/gallery-4.jpg" },
  { id: 5, title: "Workshop team challenge", image: "/images/services/workshops/gallery-1.jpg" },
  { id: 6, title: "Cultural Race checkpoint", image: "/images/services/cultural-race/gallery-4.jpg" },
  { id: 7, title: "Local retreat activity", image: "/images/services/local-retreats/gallery-3.jpg" },
  { id: 8, title: "Overseas retreat group", image: "/images/services/overseas-retreats/gallery-1.jpg" },
];

export const BehindTheScenes = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
          style={{ backgroundImage: "url(/images/services/workshops/gallery-1.jpg)" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-primary md:text-4xl">
            Behind the Scenes
          </h2>
          <motion.div
            className="mx-auto h-0.5 w-24"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 65% 52%), transparent)" }}
          />
          <p className="mt-4 text-white/60">Briefings, checkpoints, facilitation and the activity in motion.</p>
        </motion.div>
      </div>

      <div className="-mx-6 overflow-x-auto px-6 pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-4"
          style={{ minWidth: "max-content" }}
        >
          {behindScenes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                width={576}
                height={384}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display font-bold text-white">{item.title}</h3>
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: "inset 0 0 20px hsl(43 65% 52% / 0.3)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
