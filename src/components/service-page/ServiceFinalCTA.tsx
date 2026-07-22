import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

interface ServiceFinalCTAProps {
  accentColor: string;
  headline?: string;
  subtext?: string;
  buttonLabel?: string;
  serviceSlug?: string;
}

export const ServiceFinalCTA = ({
  accentColor,
  headline = "Ready to Build Your Event?",
  subtext,
  buttonLabel = "Build My Event",
  serviceSlug,
}: ServiceFinalCTAProps) => {
  const { openContactModal } = useContactModal();
  
  return (
    <section className="py-20 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.18)_1px,transparent_1.2px)] [background-size:34px_34px]" />
      
      {/* Accent gradient spotlight */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full blur-[150px]"
        style={{ backgroundColor: `${accentColor}15` }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
            {headline}
          </h2>
          {subtext ? <p className="mx-auto -mt-3 mb-9 max-w-2xl text-base leading-7 text-white/70 md:text-lg">{subtext}</p> : null}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="xl"
              className="text-lg font-display font-semibold"
              style={{ 
                backgroundColor: accentColor, 
                color: '#000',
                borderColor: accentColor 
              }}
              onClick={() => openContactModal({ serviceSlug })}
            >
              {buttonLabel}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
