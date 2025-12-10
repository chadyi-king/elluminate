import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useContactModal } from "@/contexts/ContactModalContext";

const eventCategories = [
  "Physical Team Bonding",
  "Virtual Team Bonding",
  "Dinner & Dance",
  "Awards Ceremony",
  "Product Launch",
  "Corporate Retreat",
  "Brand Activation",
  "Town Hall",
  "Wellness Event",
  "Immersive Experience",
  "Family Fun Day",
  "VIP Gala",
  "Other",
];

const organisationTypes = [
  "Corporate / MNC",
  "SME",
  "Government / Statutory Board",
  "Non-Profit / NGO",
  "Educational Institution",
  "Other",
];

const customisationOptions = [
  "Yes",
  "No",
  "Not Sure",
];

const gameCustomisationOptions = [
  "Standard Games",
  "Customised Games",
  "Branded Games",
  "Not Applicable",
];

const addOnServices = [
  "Emcee Services",
  "Photography",
  "Videography",
  "Stage & AV Production",
  "Custom Theming",
  "Catering Coordination",
  "Venue Sourcing",
  "None",
];

export const ContactModal = () => {
  const { isOpen, closeContactModal } = useContactModal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventCategory: "",
    expectedDate: "",
    organisation: "",
    organisationType: "",
    expectedAttendees: "",
    additionalCustomisation: "",
    gameCustomisation: "",
    addOnServices: [] as string[],
    additionalDetails: "",
    privacyConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the privacy policy to proceed.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    closeContactModal();
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventCategory: "",
      expectedDate: "",
      organisation: "",
      organisationType: "",
      expectedAttendees: "",
      additionalCustomisation: "",
      gameCustomisation: "",
      addOnServices: [],
      additionalDetails: "",
      privacyConsent: false,
    });
  };

  const toggleAddOnService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      addOnServices: prev.addOnServices.includes(service)
        ? prev.addOnServices.filter(s => s !== service)
        : [...prev.addOnServices, service],
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeContactModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-background-card rounded-2xl max-w-2xl w-full border border-primary/20 overflow-hidden my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-primary/10 flex-shrink-0">
              <button
                onClick={closeContactModal}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-display font-bold text-metallic-gold">
                Time to Elevate the Team!
              </h2>
              <p className="text-white/60 mt-1">Let's create something extraordinary together</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto flex-1">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-1">
                    Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-primary/20 focus:border-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-1">
                    Email <span className="text-primary">*</span>
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-primary/20 focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white/70 text-sm mb-1">
                  Phone <span className="text-primary">*</span>
                </label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary"
                  placeholder="+65 9123 4567"
                />
              </div>

              {/* Event Category */}
              <div>
                <label className="block text-white/70 text-sm mb-1">
                  Event Category <span className="text-primary">*</span>
                </label>
                <select
                  required
                  value={formData.eventCategory}
                  onChange={(e) => setFormData({ ...formData, eventCategory: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-background border border-primary/20 text-white focus:border-primary focus:outline-none"
                >
                  <option value="">Select event category</option>
                  {eventCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Expected Date */}
              <div>
                <label className="block text-white/70 text-sm mb-1">Expected Date of Event</label>
                <Input
                  type="date"
                  value={formData.expectedDate}
                  onChange={(e) => setFormData({ ...formData, expectedDate: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary"
                />
              </div>

              {/* Organisation */}
              <div>
                <label className="block text-white/70 text-sm mb-1">
                  Organisation <span className="text-primary">*</span>
                </label>
                <Input
                  required
                  value={formData.organisation}
                  onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary"
                  placeholder="Company / Organisation Name"
                />
              </div>

              {/* Type of Organisation */}
              <div>
                <label className="block text-white/70 text-sm mb-1">
                  Type of Organisation <span className="text-primary">*</span>
                </label>
                <select
                  required
                  value={formData.organisationType}
                  onChange={(e) => setFormData({ ...formData, organisationType: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-background border border-primary/20 text-white focus:border-primary focus:outline-none"
                >
                  <option value="">Select organisation type</option>
                  {organisationTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Expected Number of Attendees */}
              <div>
                <label className="block text-white/70 text-sm mb-1">
                  Expected Number of Attendees <span className="text-primary">*</span>
                </label>
                <Input
                  required
                  type="number"
                  min="1"
                  value={formData.expectedAttendees}
                  onChange={(e) => setFormData({ ...formData, expectedAttendees: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary"
                  placeholder="e.g., 150"
                />
              </div>

              {/* Additional Customisation */}
              <div>
                <label className="block text-white/70 text-sm mb-1">
                  Additional Customisation <span className="text-primary">*</span>
                </label>
                <select
                  required
                  value={formData.additionalCustomisation}
                  onChange={(e) => setFormData({ ...formData, additionalCustomisation: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-background border border-primary/20 text-white focus:border-primary focus:outline-none"
                >
                  <option value="">Select option</option>
                  {customisationOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Game Customisation */}
              <div>
                <label className="block text-white/70 text-sm mb-1">Game Customisation</label>
                <select
                  value={formData.gameCustomisation}
                  onChange={(e) => setFormData({ ...formData, gameCustomisation: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-background border border-primary/20 text-white focus:border-primary focus:outline-none"
                >
                  <option value="">Select option</option>
                  {gameCustomisationOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Add-on Services */}
              <div>
                <label className="block text-white/70 text-sm mb-2">Add-on Services</label>
                <div className="grid grid-cols-2 gap-2">
                  {addOnServices.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center gap-2 p-2 rounded-md border cursor-pointer transition-colors ${
                        formData.addOnServices.includes(service)
                          ? "border-primary bg-primary/10"
                          : "border-primary/20 hover:border-primary/40"
                      }`}
                    >
                      <Checkbox
                        checked={formData.addOnServices.includes(service)}
                        onCheckedChange={() => toggleAddOnService(service)}
                        className="border-primary/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <span className="text-white/80 text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-white/70 text-sm mb-1">Additional Details</label>
                <Textarea
                  value={formData.additionalDetails}
                  onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary min-h-[100px]"
                  placeholder="Share your vision, preferred venues, special requirements..."
                />
              </div>

              {/* Privacy Consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={formData.privacyConsent}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, privacyConsent: checked === true })
                  }
                  className="border-primary/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-0.5"
                />
                <span className="text-white/60 text-sm">
                  I confirm and agree to the storing and processing of my personal data as described in the privacy statement.
                </span>
              </label>

              <Button
                type="submit"
                className="w-full bg-primary text-black hover:bg-black hover:text-white hover:border hover:border-primary transition-all"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Inquiry
              </Button>
            </form>

            {/* Quick Contact */}
            <div className="px-6 pb-6 flex-shrink-0">
              <div className="flex flex-wrap gap-4 justify-center text-sm text-white/50">
                <a href="mailto:info@teamelevate.sg" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> info@teamelevate.sg
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
