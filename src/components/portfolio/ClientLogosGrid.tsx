import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const clients = [
  { id: 1, name: "Tech Solutions", logo: "TS", event: "Annual D&D 2024", description: "Full event management for 500 pax dinner & dance" },
  { id: 2, name: "Global Finance", logo: "GF", event: "Team Retreat 2024", description: "3-day overseas retreat in Bali with team building" },
  { id: 3, name: "Healthcare Corp", logo: "HC", event: "Awards Night", description: "Premium awards ceremony with red carpet theme" },
  { id: 4, name: "Retail Brand", logo: "RB", event: "Product Launch", description: "Immersive product launch with AR experiences" },
  { id: 5, name: "Insurance Partners", logo: "IP", event: "Corporate Gala", description: "Elegant gala dinner with live entertainment" },
  { id: 6, name: "Engineering Co", logo: "EC", event: "Team Building", description: "Adventure-based team building program" },
  { id: 7, name: "Pharma Group", logo: "PG", event: "Conference 2024", description: "Hybrid conference with global streaming" },
  { id: 8, name: "Luxury Hotels", logo: "LH", event: "Staff Appreciation", description: "Themed appreciation party for 800 staff" },
  { id: 9, name: "Bank Asia", logo: "BA", event: "Annual Summit", description: "Executive summit with keynote speakers" },
  { id: 10, name: "Tech Startup", logo: "TS", event: "Launch Party", description: "Startup launch with investor networking" },
  { id: 11, name: "Media Corp", logo: "MC", event: "Awards Show", description: "TV-style awards show production" },
  { id: 12, name: "Construction Ltd", logo: "CL", event: "Safety Day", description: "Engaging safety awareness event" },
  { id: 13, name: "Logistics Hub", logo: "LH", event: "Town Hall", description: "Interactive town hall for 1000+ staff" },
  { id: 14, name: "Food & Bev", logo: "FB", event: "Brand Activation", description: "Pop-up brand experience event" },
  { id: 15, name: "Auto Group", logo: "AG", event: "Car Launch", description: "Premium vehicle launch experience" },
  { id: 16, name: "Property Dev", logo: "PD", event: "Sales Gala", description: "Luxury property sales launch event" },
  { id: 17, name: "Consulting Firm", logo: "CF", event: "Partner Retreat", description: "Executive retreat with strategy sessions" },
  { id: 18, name: "Energy Corp", logo: "EC", event: "Anniversary", description: "50th anniversary celebration gala" },
  { id: 19, name: "Telecom Co", logo: "TC", event: "Product Demo", description: "Interactive product demonstration event" },
  { id: 20, name: "Education Inst", logo: "EI", event: "Graduation", description: "Premium graduation ceremony" },
  { id: 21, name: "Sports Brand", logo: "SB", event: "Athlete Meet", description: "Exclusive athlete meet & greet" },
  { id: 22, name: "Fashion House", logo: "FH", event: "Fashion Show", description: "Runway show with VIP experience" },
  { id: 23, name: "Airlines", logo: "AL", event: "Staff Party", description: "Themed party for cabin crew" },
  { id: 24, name: "Shipping Co", logo: "SC", event: "Fleet Launch", description: "New fleet christening ceremony" },
];

export const ClientLogosGrid = () => {
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-background-deep">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-metallic-gold mb-4">
            Trusted By
          </h2>
          <motion.div 
            className="w-24 h-0.5 mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 65% 52%), transparent)" }}
          />
        </motion.div>

        {/* 6x4 Logo Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              onClick={() => setSelectedClient(client)}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-background-card rounded-lg border border-primary/10 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10"
                style={{ boxShadow: "0 0 0 0 hsl(43 65% 52% / 0)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 20px hsl(43 65% 52% / 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 0 hsl(43 65% 52% / 0)";
                }}
              >
                <span className="text-xl md:text-2xl font-display font-bold text-white/50 group-hover:text-primary transition-colors">
                  {client.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Client Detail Modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedClient(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-background-card rounded-xl p-6 max-w-md w-full border border-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedClient(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary">
                    {selectedClient.logo}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {selectedClient.name}
                  </h3>
                  <span className="text-primary text-sm">{selectedClient.event}</span>
                </div>
              </div>

              <p className="text-white/70">{selectedClient.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
