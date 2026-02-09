import { motion } from "framer-motion";

interface ServiceBehindScenesProps {
  content: string;
  backgroundImage: string;
}

export const ServiceBehindScenes = ({ content, backgroundImage }: ServiceBehindScenesProps) => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/90" />
      
      {/* Gold glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
            Behind the Magic
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed italic">
            "{content}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};
