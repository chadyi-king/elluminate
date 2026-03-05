import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, Phone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    onClose();
    setFormData({ name: "", email: "", company: "", phone: "", eventType: "", message: "" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl max-w-lg w-full border border-gray-200 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-200">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-display font-bold text-primary">
                Plan Your Event
              </h2>
              <p className="text-gray-600 mt-1">Let's create something extraordinary together</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm mb-1">Your Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-gray-50 border-gray-300 focus:border-primary text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-1">Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-50 border-gray-300 focus:border-primary text-gray-900"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm mb-1">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-gray-50 border-gray-300 focus:border-primary text-gray-900"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-1">Phone</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-gray-50 border-gray-300 focus:border-primary text-gray-900"
                    placeholder="+65 9123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-1">Event Type</label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:border-primary focus:outline-none"
                >
                  <option value="">Select event type</option>
                  <option value="Team Building">Team Building</option>
                  <option value="Dinner & Dance">Dinner & Dance</option>
                  <option value="Awards Ceremony">Awards Ceremony</option>
                  <option value="Product Launch">Product Launch</option>
                  <option value="Corporate Retreat">Corporate Retreat</option>
                  <option value="Brand Activation">Brand Activation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-1">Tell us about your event *</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-gray-50 border-gray-300 focus:border-primary min-h-[100px] text-gray-900"
                  placeholder="Share your vision, expected pax, preferred dates, venue ideas..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-black hover:bg-gray-900 hover:text-white transition-all"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Inquiry
              </Button>
            </form>

            {/* Quick Contact */}
            <div className="px-6 pb-6">
              <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500">
                <a href="mailto:hello@elluminate.sg" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> hello@elluminate.sg
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
