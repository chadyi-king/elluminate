import { motion } from "framer-motion";

// Import team background image (team photo)
import teamBuildingOutdoor from "@/assets/events/team-building-outdoor-1.jpg";

const teamMembers = [
  { name: "Edmund Sim", title: "Director", image: "/images/our_team/edmund.png" },
  { name: "Afifah Camut", title: "Senior Sales Manager", image: "/images/our_team/afifah.png" },
  { name: "Lisa Ong", title: "Senior Events Manager", image: "/images/our_team/lisa.png" },
  { name: "MJ", title: "Operations & Design Executive", image: "/images/our_team/mj.png" },
  { name: "Ayume", title: "Operations Executive", image: "/images/our_team/ayume.png" },
  { name: "Louise Cabales", title: "Admin Manager", image: "/images/our_team/louise.png" },
  { name: "Peggy Har", title: "Finance Manager", image: "/images/our_team/peggy.png" },
  { name: "Jencen Ramos", title: "Finance Executive", image: "/images/our_team/jencen.png" },
  { name: "Jemwell Ramos", title: "IT Executive", image: "/images/our_team/jemwell.png" },
  { name: "Peace Chan", title: "Marketing & Sales Executive", image: "/images/our_team/peace.png" },
];

// TODO(content): Confirm public roles for Caleb E and Christian Je Suis before restoring their team cards.

export const OurTeam = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={teamBuildingOutdoor}
          alt="Elluminate team building background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-3">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground/80 font-sans max-w-xl mx-auto text-sm">
            The ten verified team members supporting planning, events, operations, administration, finance,
            technology, marketing, and sales across Elluminate and the shared EXSTATIC PTE LTD operation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <div className="aspect-square overflow-hidden rounded-xl border border-border-gold/30 group-hover:border-primary/50 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.title} at Elluminate`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-foreground font-display font-medium text-sm mb-1">{member.name}</h3>
              <p className="text-primary/80 text-xs font-sans">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
