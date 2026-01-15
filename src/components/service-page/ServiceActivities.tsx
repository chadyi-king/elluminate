import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

interface ServiceActivitiesProps {
  activities: string[];
  accentColor: string;
  sectionTitle?: string;
}

export const ServiceActivities = ({ activities, accentColor, sectionTitle = "ACTIVITY TYPES" }: ServiceActivitiesProps) => {
  const { openContactModal } = useContactModal();
  
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Light background */}
      <div className="absolute inset-0 bg-gray-50">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920)` }}
        />
      </div>
      
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 right-0 w-[400px] h-[300px] rounded-full blur-[100px]"
        style={{ backgroundColor: `${accentColor}15` }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2"
          >
            {sectionTitle}
          </h2>
          <motion.div 
            className="w-20 h-0.5 mx-auto"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
          />
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div 
                className="relative px-4 py-3 rounded-lg border text-center transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: `${accentColor}40`,
                  backgroundColor: `${accentColor}10`
                }}
              >
                <span 
                  className="text-sm font-display font-medium"
                  style={{ color: accentColor }}
                >
                  {activity}
                </span>
                
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `0 0 20px ${accentColor}30` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* And Many More + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p 
            className="text-lg font-display font-medium mb-6"
            style={{ color: `${accentColor}CC` }}
          >
            And Many More...
          </p>
          <Button
            onClick={openContactModal}
            className="px-8 py-3 font-display font-semibold tracking-wide transition-all duration-300"
            style={{ 
              backgroundColor: accentColor,
              color: '#000'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = accentColor;
              e.currentTarget.style.border = `2px solid ${accentColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = accentColor;
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.border = 'none';
            }}
          >
            Contact Us For More Details
          </Button>
        </motion.div>
      </div>
    </section>
  );
};