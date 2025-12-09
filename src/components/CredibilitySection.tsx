import { motion } from "framer-motion";
import { Play, Download, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CredibilitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background-deep via-[hsl(43,18%,10%)] to-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Downloadable PDF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/50 rounded-2xl p-8 md:p-12 hover:border-primary/70 transition-all duration-500 group">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-3 border-t-3 border-primary rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-3 border-t-3 border-primary rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-3 border-b-3 border-primary rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-3 border-b-3 border-primary rounded-br-2xl" />

            {/* Content */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:shadow-gold transition-all duration-300">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-black text-metallic-gold mb-4">
                  Team Elevate Event Solutions Pack 2026
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed font-display">
                  Explore our complete range of services, past event showcases, and pricing guidelines in our comprehensive solutions pack. This document includes:
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {[
                    "Full service catalog with descriptions",
                    "Portfolio of past events and case studies",
                    "Pricing guidelines and packages",
                    "Client testimonials and reviews",
                    "Team profiles and credentials",
                    "Terms and booking process",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground font-display">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="gold" 
                  size="lg" 
                  className="group/btn font-display font-bold bg-primary hover:bg-primary-ember text-background-deep border-none"
                >
                  <Download className="w-5 h-5 mr-2 group-hover/btn:animate-bounce" />
                  Download PDF
                </Button>
              </div>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const VideoSection = () => {
  return (
    <section className="py-16 bg-background-deep relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border-gold/20 hover:border-primary/40 transition-all duration-500 cursor-pointer group">
            {/* Thumbnail placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-background-deep to-card" />
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200)" }}
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
                  className="absolute inset-0 -m-6 rounded-full bg-primary/30 blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="relative w-24 h-24 rounded-full bg-primary/90 border-2 border-primary-soft/50 flex items-center justify-center group-hover:shadow-gold transition-all duration-300">
                  <Play className="w-10 h-10 text-background-deep fill-background-deep ml-1" />
                </div>
              </motion.div>
            </div>
            
            {/* Title overlay - now above the video */}
            <div className="absolute top-0 left-0 right-0 p-8 bg-gradient-to-b from-background-deep/95 to-transparent">
              <h3 className="text-2xl md:text-3xl font-display font-black text-primary-soft group-hover:text-metallic-gold transition-colors text-center uppercase tracking-wide">
                WATCH HOW WE ELEVATE EXPERIENCES
              </h3>
            </div>

            {/* Border glow on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
