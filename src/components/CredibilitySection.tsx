import { motion } from "framer-motion";
import { Play, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CredibilitySection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Event Showreel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border-gold/20 hover:border-primary/40 transition-all duration-500 cursor-pointer">
              {/* Thumbnail placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-background-deep to-card" />
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: "url(/placeholder.svg)" }}
              />
              
              {/* Gold glow overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-primary/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Glow ring */}
                  <motion.div
                    className="absolute inset-0 -m-4 rounded-full bg-primary/30 blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <div className="relative w-20 h-20 rounded-full bg-primary/90 border-2 border-primary-soft/50 flex items-center justify-center group-hover:shadow-gold transition-all duration-300">
                    <Play className="w-8 h-8 text-background-deep fill-background-deep ml-1" />
                  </div>
                </motion.div>
              </div>
              
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-deep/90 to-transparent">
                <h3 className="text-xl font-serif text-primary-soft group-hover:text-metallic-gold transition-colors">
                  Watch How We Elevate Experiences
                </h3>
              </div>

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </motion.div>

          {/* Downloadable PDF */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-full relative bg-card/50 border-2 border-primary/30 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 group">
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/50 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/50 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-2xl" />

              {/* Content */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:shadow-gold transition-all duration-300">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif text-metallic-gold mb-3">
                    Team Elevate Event Solutions Pack 2025
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    Explore our complete range of services, past event showcases, and pricing guidelines in our comprehensive solutions pack.
                  </p>
                  
                  <Button variant="gold" size="lg" className="group/btn">
                    <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                    Download PDF
                  </Button>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
