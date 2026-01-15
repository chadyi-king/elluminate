import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

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

const STORAGE_KEY = "contact_form_draft";

const getInitialFormData = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        name: parsed.name || "",
        email: parsed.email || "",
        phone: parsed.phone || "",
        eventCategory: parsed.eventCategory || "",
        organisation: parsed.organisation || "",
        organisationType: parsed.organisationType || "",
        expectedAttendees: parsed.expectedAttendees || "",
        additionalCustomisation: parsed.additionalCustomisation || "",
        gameCustomisation: parsed.gameCustomisation || "",
        addOnServices: parsed.addOnServices || [],
        additionalDetails: parsed.additionalDetails || "",
        privacyConsent: false,
      };
    }
  } catch (e) {
    console.error("Error loading form data from localStorage:", e);
  }
  return {
    name: "",
    email: "",
    phone: "",
    eventCategory: "",
    organisation: "",
    organisationType: "",
    expectedAttendees: "",
    additionalCustomisation: "",
    gameCustomisation: "",
    addOnServices: [] as string[],
    additionalDetails: "",
    privacyConsent: false,
  };
};

const getInitialDate = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.expectedDate) {
        return new Date(parsed.expectedDate);
      }
    }
  } catch (e) {
    console.error("Error loading date from localStorage:", e);
  }
  return undefined;
};

export const ContactModal = () => {
  const { isOpen, closeContactModal } = useContactModal();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(getInitialDate);
  const [formData, setFormData] = useState(getInitialFormData);

  // Save to localStorage whenever form data changes
  useEffect(() => {
    const dataToSave = {
      ...formData,
      expectedDate: selectedDate?.toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }, [formData, selectedDate]);

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
      organisation: "",
      organisationType: "",
      expectedAttendees: "",
      additionalCustomisation: "",
      gameCustomisation: "",
      addOnServices: [],
      additionalDetails: "",
      privacyConsent: false,
    });
    setSelectedDate(undefined);
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
            <div className="relative p-4 sm:p-6 border-b border-primary/10 flex-shrink-0">
              <button
                onClick={closeContactModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-primary">
                Let Our Team Elevate Your Experience
              </h2>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">Let's create something extraordinary together</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1 scrollbar-gold">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-gray-700 text-sm mb-1">
                    Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-gray-300 focus:border-primary text-gray-900"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-1">
                    Email <span className="text-primary">*</span>
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white border-gray-300 focus:border-primary text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Phone <span className="text-primary">*</span>
                </label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white border-gray-300 focus:border-primary text-gray-900"
                  placeholder="+65 9123 4567"
                />
              </div>

              {/* Event Category */}
              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Event Category <span className="text-primary">*</span>
                </label>
                <select
                  required
                  value={formData.eventCategory}
                  onChange={(e) => setFormData({ ...formData, eventCategory: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:border-primary focus:outline-none"
                >
                  <option value="">Select event category</option>
                  {eventCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Expected Date with Calendar Picker */}
              <div>
                <label className="block text-gray-700 text-sm mb-1">Expected Date of Event</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white border-gray-300 hover:bg-gray-50 hover:border-primary text-gray-900",
                        !selectedDate && "text-gray-500"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                      {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white border-gray-200" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Organisation */}
              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Organisation <span className="text-primary">*</span>
                </label>
                <Input
                  required
                  value={formData.organisation}
                  onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                  className="bg-white border-gray-300 focus:border-primary text-gray-900"
                  placeholder="Company / Organisation Name"
                />
              </div>

              {/* Type of Organisation */}
              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Type of Organisation <span className="text-primary">*</span>
                </label>
                <select
                  required
                  value={formData.organisationType}
                  onChange={(e) => setFormData({ ...formData, organisationType: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:border-primary focus:outline-none"
                >
                  <option value="">Select organisation type</option>
                  {organisationTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Expected Number of Attendees */}
              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Expected Number of Attendees <span className="text-primary">*</span>
                </label>
                <Input
                  required
                  type="number"
                  min="1"
                  value={formData.expectedAttendees}
                  onChange={(e) => setFormData({ ...formData, expectedAttendees: e.target.value })}
                  className="bg-white border-gray-300 focus:border-primary text-gray-900"
                  placeholder="e.g., 150"
                />
              </div>

              {/* Additional Customisation */}
              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Additional Customisation <span className="text-primary">*</span>
                </label>
                <select
                  required
                  value={formData.additionalCustomisation}
                  onChange={(e) => setFormData({ ...formData, additionalCustomisation: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:border-primary focus:outline-none"
                >
                  <option value="">Select option</option>
                  {customisationOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Game Customisation */}
              <div>
                <label className="block text-gray-700 text-sm mb-1">Game Customisation</label>
                <select
                  value={formData.gameCustomisation}
                  onChange={(e) => setFormData({ ...formData, gameCustomisation: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:border-primary focus:outline-none"
                >
                  <option value="">Select option</option>
                  {gameCustomisationOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Add-on Services */}
              <div>
                <label className="block text-gray-700 text-sm mb-2">Add-on Services</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {addOnServices.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center gap-2 p-2 rounded-md border cursor-pointer transition-colors ${
                        formData.addOnServices.includes(service)
                          ? "border-primary bg-primary/10"
                          : "border-gray-300 hover:border-primary/40"
                      }`}
                    >
                      <Checkbox
                        checked={formData.addOnServices.includes(service)}
                        onCheckedChange={() => toggleAddOnService(service)}
                        className="border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <span className="text-gray-700 text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-gray-700 text-sm mb-1">Additional Details</label>
                <Textarea
                  value={formData.additionalDetails}
                  onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                  className="bg-white border-gray-300 focus:border-primary min-h-[80px] sm:min-h-[100px] text-gray-900"
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
                  className="border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-0.5"
                />
                <span className="text-gray-600 text-sm">
                  I confirm and agree to the storing and processing of my personal data as described in the privacy statement.
                </span>
              </label>

              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 transition-all"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Inquiry
              </Button>
            </form>

            {/* Quick Contact */}
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex-shrink-0">
              <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500">
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