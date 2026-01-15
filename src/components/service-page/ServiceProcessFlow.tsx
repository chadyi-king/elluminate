import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceProcessFlowProps {
  steps: ProcessStep[];
  accentColor: string;
}

export const ServiceProcessFlow = ({ steps, accentColor }: ServiceProcessFlowProps) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${accentColor}15 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            HOW IT WORKS
          </h2>
          <motion.div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            From inquiry to celebration, we handle every detail to ensure your event is a success.
          </p>
        </motion.div>

        {/* Desktop Process Flow - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <motion.div 
              className="absolute top-12 left-0 right-0 h-1 rounded-full"
              style={{ backgroundColor: `${accentColor}30` }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="relative"
                >
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 mx-auto w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
                    style={{ 
                      backgroundColor: accentColor,
                      boxShadow: `0 8px 32px ${accentColor}40`
                    }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                    
                    {/* Step Number */}
                    <div 
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center font-display font-bold text-sm"
                      style={{ color: accentColor }}
                    >
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center mt-6">
                    <h3 
                      className="font-display font-bold text-lg mb-2"
                      style={{ color: accentColor }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Flow - Vertical */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Connecting Line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-1 rounded-full"
              style={{ backgroundColor: `${accentColor}30` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                      style={{ 
                        backgroundColor: accentColor,
                        boxShadow: `0 4px 20px ${accentColor}40`
                      }}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Step Number */}
                    <div 
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center font-display font-bold text-xs"
                      style={{ color: accentColor }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 
                      className="font-display font-bold text-lg mb-1"
                      style={{ color: accentColor }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
