import { motion } from "framer-motion";
import { Play, Download, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CredibilitySection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-secondary/50">
      {/* Background decorative elements */}
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
          <div className="relative bg-white border border-border rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-500 group">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-sky-400 to-primary rounded-t-2xl" />

            {/* Content */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Elluminate Activity Catalog 2026
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed font-display">
                  Explore our complete range of team building activities, training programs, and retreat options in our comprehensive catalog:
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {[
                    "Full activity catalog with descriptions",
                    "Training programs and workshops",
                    "Retreat packages and destinations",
                    "Client testimonials and success stories",
                    "Pricing guidelines and packages",
                    "Booking process and FAQs",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground font-display">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group/btn font-display font-bold"
                >
                  <Download className="w-5 h-5 mr-2 group-hover/btn:animate-bounce" />
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const VideoSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              See Elluminate in Action
            </h3>
          </div>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 cursor-pointer group">
            {/* Thumbnail placeholder */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200)" }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:bg-primary transition-colors duration-300">
                  <Play className="w-8 h-8 text-primary group-hover:text-white fill-current ml-1 transition-colors duration-300" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
