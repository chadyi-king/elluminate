import { motion } from "framer-motion";

// Import team background image (team photo)
import teamBuildingOutdoor from "@/assets/events/team-building-outdoor-1.jpg";

const teamMembers = [
  { name: "Edmund Sim", title: "Director" },
  { name: "Afifah Camut", title: "Senior Sales Manager" },
  { name: "Lisa Ong", title: "Senior Events Manager" },
  { name: "MJ", title: "Operations & Design Executive" },
  { name: "Ayume", title: "Operations Executive" },
  { name: "Louise Cabales", title: "Admin Manager" },
  { name: "Peggy Har", title: "Finance Manager" },
  { name: "Jencen Ramos", title: "Finance Executive" },
  { name: "Jemwell Ramos", title: "IT Executive" },
  { name: "Peace Chan", title: "Marketing & Sales Executive" },
  { name: "Caleb E", title: "Basement Worker" },
  { name: "Christian Je Suis", title: "Spiritual Advisor" },
];

// Generate a branded initials avatar (SVG data URL) for each team member.
// This keeps the section visually consistent while local team photos are unavailable.
const PALETTE = ["#1F7CFF", "#0F5BD1", "#2A8DFF", "#1466E0", "#3D8BFF", "#0A4FB8"];

function initialsAvatar(name: string, idx: number) {
  const parts = name.trim().split(/\s+/);
  const initials = (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
  const bg = PALETTE[idx % PALETTE.length];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${bg}"/>
          <stop offset="100%" stop-color="#0A1F3D"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#g)"/>
      <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
            font-family="Anton, Impact, sans-serif" font-size="180" fill="#ffffff" letter-spacing="4">
        ${initials.toUpperCase()}
      </text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const OurTeam = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={teamBuildingOutdoor} alt="Elluminate team building background" className="w-full h-full object-cover" />
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
            The planners, facilitators, and creative minds behind each Elluminate experience.
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
                    src={initialsAvatar(member.name, index)}
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
