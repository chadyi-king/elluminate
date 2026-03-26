import { motion, AnimatePresence } from "framer-motion";
import { Star, Calendar, Users, Award } from "lucide-react";
import { useState, useEffect } from "react";

// Real client logos - aligned with brand list used across the site
const defaultClientLogos = [
  { id: 1, name: "DBS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/DBS_Bank_Logo.svg/400px-DBS_Bank_Logo.svg.png" },
  { id: 2, name: "OCBC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/OCBC_Bank_logo.svg/400px-OCBC_Bank_logo.svg.png" },
  { id: 3, name: "UOB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/UOB_Logo.svg/400px-UOB_Logo.svg.png" },
  { id: 4, name: "Singtel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Singtel_logo_2021.svg/400px-Singtel_logo_2021.svg.png" },
  { id: 5, name: "Grab", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Grab_Logo.svg/400px-Grab_Logo.svg.png" },
  { id: 6, name: "Shopee", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/400px-Shopee.svg.png" },
  { id: 7, name: "NTUC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/NTUC_FairPrice_logo.svg/400px-NTUC_FairPrice_logo.svg.png" },
  { id: 8, name: "GovTech", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/GovTech_Singapore_Logo.svg/400px-GovTech_Singapore_Logo.svg.png" },
  { id: 9, name: "Sentosa", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Sentosa_logo.svg/400px-Sentosa_logo.svg.png" },
  { id: 10, name: "SP Group", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/SP_Group_logo.svg/400px-SP_Group_logo.svg.png" },
  { id: 11, name: "SMRT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SMRT_Corporation_Logo.svg/400px-SMRT_Corporation_Logo.svg.png" },
  { id: 12, name: "Prudential", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Prudential_plc_logo.svg/400px-Prudential_plc_logo.svg.png" },
  { id: 13, name: "Marina Bay Sands", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Marina_Bay_Sands_Logo.svg/400px-Marina_Bay_Sands_Logo.svg.png" },
  { id: 14, name: "CapitaLand", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/CapitaLand_logo.svg/400px-CapitaLand_logo.svg.png" },
  { id: 15, name: "Singapore Airlines", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/400px-Singapore_Airlines_Logo_2.svg.png" },
  { id: 16, name: "Changi Airport", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Changi_Airport_Group_logo.svg/400px-Changi_Airport_Group_logo.svg.png" },
  { id: 17, name: "StarHub", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/StarHub_Logo.svg/400px-StarHub_Logo.svg.png" },
  { id: 18, name: "POSB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/POSB_Bank_logo.svg/400px-POSB_Bank_logo.svg.png" },
  { id: 19, name: "Great Eastern", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Great_Eastern_logo.svg/400px-Great_Eastern_logo.svg.png" },
  { id: 20, name: "AIA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/AIA_Group_logo.svg/400px-AIA_Group_logo.svg.png" },
  { id: 21, name: "HSBC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/400px-HSBC_logo_%282018%29.svg.png" },
  { id: 22, name: "Standard Chartered", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Standard_Chartered_%282021%29.svg/400px-Standard_Chartered_%282021%29.svg.png" },
  { id: 23, name: "Maybank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Maybank_logo.svg/400px-Maybank_logo.svg.png" },
  { id: 24, name: "M1", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/M1_Limited_logo.svg/400px-M1_Limited_logo.svg.png" },
];

const normalize = (s: string) => s.toLowerCase().replace(/[\s\-_\.]/g, "");

const stats = [
  {
    icon: Calendar,
    number: "1,000+",
    label: "Events Executed",
    description: "Across all corporate formats.",
  },
  {
    icon: Users,
    number: "100,000+",
    label: "Participants Impacted",
    description: "Singapore & regional teams.",
  },
  {
    icon: Award,
    number: "8+",
    label: "Years Delivering",
    description: "Consistent experiences for teams across Singapore.",
  },
];

// Split logos into groups of 24 (4 rows x 6 columns) for carousel
const logoGroups = [
  clientLogos.slice(0, 24),
  clientLogos.slice(0, 24),
  clientLogos.slice(0, 24),
];

export const SocialProofSection = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % logoGroups.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-secondary/30">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Logo Wall - 4x6 Grid Auto-scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-center text-primary text-sm tracking-[0.3em] uppercase font-display font-semibold mb-10">
            Trusted By Leading Brands
          </h3>

          {/* Logo Carousel - 4 rows x 6 columns */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGroup}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4"
              >
                {logoGroups[currentGroup].map((logo) => (
                  <div
                    key={logo.id}
                    className="group aspect-[3/2] bg-white border border-border rounded-xl flex items-center justify-center hover:border-primary/40 hover:shadow-lg transition-all duration-300 p-3 relative overflow-hidden"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                    <img 
                      src={logo.logo} 
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<span class="text-foreground text-xs font-display font-bold relative z-10">${logo.name}</span>`;
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-6">
            {logoGroups.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentGroup(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentGroup 
                    ? "bg-primary w-6" 
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Google Rating Panel - Centered with stars on top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative bg-white border border-border rounded-2xl px-8 py-8 overflow-hidden max-w-xl mx-auto shadow-lg">
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Stars on top */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  >
                    <Star
                      className="w-10 h-10 text-yellow-400 fill-yellow-400"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Rating text below stars */}
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-display font-black text-foreground">
                  4.8 / 5.0
                </span>
              </div>
              
              <p className="text-muted-foreground font-display">
                Based on <span className="text-primary font-bold">600+</span> Google Reviews
              </p>
              
              <p className="text-muted-foreground/80 text-sm font-display">
                Trusted by companies all across Singapore.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Event Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="relative inline-block mb-3">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary">
                    {stat.number}
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-display font-bold text-foreground mb-2">
                  {stat.label}
                </h4>
                <p className="text-muted-foreground text-sm font-display">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
