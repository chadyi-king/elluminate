import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Send, Mail, CalendarIcon, Zap, Monitor, GraduationCap, Clock } from "lucide-react";
import elluminateWords from "@/assets/logos/elluminate-words.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, startOfDay } from "date-fns";
import { cn } from "@/lib/utils";
import { submitLead } from "@/lib/leadSubmission";
import { getServicePageBlueprint, type ServiceFamily } from "@/data/servicePageBlueprints";

const eventCategories = [
  "Physical Team Building",
  "Virtual Team Building",
  "Corporate Retreat",
  "Training Workshop",
  "School Programme",
  "Camp / Cohort Day",
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

const categoryByFamily: Record<ServiceFamily, string> = {
  physical: "Physical Team Building",
  equipment: "Physical Team Building",
  virtual: "Virtual Team Building",
  retreat: "Corporate Retreat",
  training: "Training Workshop",
};

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
  const { isOpen, modalContext, closeContactModal, restoreContactModalFocus } = useContactModal();
  const { toast } = useToast();
  const navigate = useNavigate();
  const honeypotRef = useRef<HTMLInputElement>(null);
  const injectedSelectionRef = useRef("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(getInitialDate);
  const [formData, setFormData] = useState(getInitialFormData);
  const selectedBlueprint = useMemo(
    () => (modalContext?.serviceSlug ? getServicePageBlueprint(modalContext.serviceSlug) : null),
    [modalContext?.serviceSlug],
  );
  const selectedPackage = useMemo(
    () => selectedBlueprint?.packages.find((option) => option.id === modalContext?.packageId),
    [modalContext?.packageId, selectedBlueprint],
  );
  const routeEventCategory = selectedBlueprint ? categoryByFamily[selectedBlueprint.family] : undefined;
  const activeEventCategory = modalContext?.eventCategory || routeEventCategory || formData.eventCategory;
  const isTeamBuildingInquiry =
    activeEventCategory === "Physical Team Building" || activeEventCategory === "Virtual Team Building";

  // Save to localStorage whenever form data changes
  useEffect(() => {
    const dataToSave = {
      ...formData,
      expectedDate: selectedDate?.toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }, [formData, selectedDate]);

  useEffect(() => {
    if (!isOpen || !modalContext) {
      return;
    }

    setFormData((prev) => {
      const selectionLines = selectedBlueprint
        ? [
            `Selected experience: ${selectedBlueprint.card.shortTitle}`,
            selectedPackage ? `Selected package: ${selectedPackage.title}` : "",
          ].filter(Boolean)
        : [];
      const selectionBlock = selectionLines.join("\n");
      let existingDetails = prev.additionalDetails
        .replace(/^Selected experience:.*(?:\r?\n)?/gim, "")
        .replace(/^Selected package:.*(?:\r?\n)?/gim, "")
        .replace(injectedSelectionRef.current, "")
        .trim();
      const shouldReplaceBrief =
        modalContext.additionalDetails?.startsWith("Team Activity Brief") &&
        existingDetails.includes("Team Activity Brief");

      if (shouldReplaceBrief) {
        existingDetails = modalContext.additionalDetails ?? existingDetails;
      } else if (modalContext.additionalDetails && !existingDetails.includes(modalContext.additionalDetails)) {
        existingDetails = [existingDetails, modalContext.additionalDetails].filter(Boolean).join("\n\n");
      }

      injectedSelectionRef.current = selectionBlock;

      return {
        ...prev,
        eventCategory: modalContext.eventCategory ?? routeEventCategory ?? prev.eventCategory,
        expectedAttendees: modalContext.expectedAttendees ?? prev.expectedAttendees,
        additionalDetails: [existingDetails, selectionBlock].filter(Boolean).join("\n\n"),
      };
    });
  }, [isOpen, modalContext, routeEventCategory, selectedBlueprint, selectedPackage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    if (!formData.privacyConsent) {
      toast({
        title: "Consent Required",
        description: "Please confirm that we may use these details to respond to your enquiry.",
        variant: "destructive",
      });
      return;
    }

    // Honeypot — bots fill hidden fields. Silently drop and behave as success.
    if (honeypotRef.current?.value) {
      closeContactModal();
      navigate("/thank-you-contact");
      return;
    }

    setIsSubmitting(true);

    const submissionPage =
      typeof window !== "undefined" ? window.location.pathname + window.location.search : null;

    try {
      await submitLead({
        formName: "plan_my_event",
        service: formData.eventCategory === "Corporate Retreat"
          ? "corporate_retreats"
          : formData.eventCategory === "Training Workshop"
            ? "corporate_training"
            : "company_experiences",
        submissionPage,
        emailKeyPrefix: "plan-my-event",
        fields: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          event_category: formData.eventCategory || null,
          organisation: formData.organisation.trim() || null,
          organisation_type: formData.organisationType || null,
          expected_attendees: formData.expectedAttendees || null,
          additional_customisation: formData.additionalCustomisation || null,
          game_customisation: formData.gameCustomisation || null,
          add_on_services: formData.addOnServices.length > 0 ? formData.addOnServices : null,
          additional_details: formData.additionalDetails.trim() || null,
          expected_date: selectedDate?.toISOString() || null,
        },
      });

      // Reset and redirect. The thank-you page is diagnostic-only; conversions fire above after insert success.
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
      localStorage.removeItem(STORAGE_KEY);
      navigate("/thank-you-contact");
    } catch (err) {
      console.error("Form submission error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again, or email us at info@elluminate.sg.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleAddOnService = (service: string) => {
    setFormData((prev) => {
      if (service === "None") {
        return {
          ...prev,
          addOnServices: prev.addOnServices.includes("None") ? [] : ["None"],
        };
      }

      const withoutNone = prev.addOnServices.filter((item) => item !== "None");
      return {
        ...prev,
        addOnServices: withoutNone.includes(service)
          ? withoutNone.filter((item) => item !== service)
          : [...withoutNone, service],
      };
    });
  };

  return (
    <DialogPrimitive.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeContactModal();
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/90"
          />
        </DialogPrimitive.Overlay>
        <DialogPrimitive.Content
          asChild
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            restoreContactModalFocus();
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex h-[100dvh] w-full max-w-4xl flex-row overflow-hidden bg-background-card outline-none sm:inset-auto sm:left-1/2 sm:top-1/2 sm:h-auto sm:max-h-[90vh] sm:w-[calc(100%-2rem)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:border sm:border-primary/20"
            aria-describedby="contact-modal-description"
          >
          {/* Left Branding Panel */}
          <div className="hidden md:flex min-h-0 w-[40%] flex-shrink-0 flex-col overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 p-5 relative lg:p-6">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" style={{ transform: "translate(50%,-50%)" }} />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" style={{ transform: "translate(-30%,30%)" }} />
            <div className="relative z-10 flex min-h-0 h-full flex-col">
              <div className="mb-2 mt-1">
                <img src={elluminateWords} alt="Elluminate - Take Flight & Shine" className="h-20 w-auto object-contain lg:h-24" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                Send the details that shape the right activity.
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                Share pax, date, venue, and goals so the enquiry starts with the planning facts that matter.
              </p>
              <div className="mb-4 flex flex-col gap-2 [@media(max-height:560px)]:hidden">
                {[
                  { icon: Zap, label: "Physical Team Building" },
                  { icon: Monitor, label: "Virtual Team Building" },
                  { icon: GraduationCap, label: "Training & Workshops" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-gray-300 text-sm">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mb-4 grid grid-cols-3 gap-2">
                {[
                  { value: "Pax", label: "Headcount" },
                  { value: "Date", label: "Timing" },
                  { value: "Goal", label: "Objective" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white/5 rounded-xl p-2.5 text-center border border-white/10">
                    <div className="text-primary font-bold text-base font-display leading-none">{value}</div>
                    <div className="text-gray-500 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-auto border-t border-white/10 pt-3">
                <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-2">
                  <Clock className="w-3 h-3 text-primary" />
                  <span>Include venue notes or constraints early if you have them</span>
                </div>
                <a
                  href="mailto:info@elluminate.sg"
                  className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@elluminate.sg
                </a>
              </div>
            </div>
          </div>
          {/* Right Form Panel */}
          <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
            {/* Header */}
            <div className="relative p-4 sm:p-6 border-b border-primary/10 flex-shrink-0">
              <DialogPrimitive.Close asChild>
                <button
                  className="absolute right-3 top-3 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-4 sm:top-4"
                  aria-label="Close enquiry form"
                >
                  <X className="w-6 h-6" />
                </button>
              </DialogPrimitive.Close>
              <DialogPrimitive.Title id="contact-modal-title" className="pr-10 text-xl font-display font-bold text-primary sm:text-2xl">
                {isTeamBuildingInquiry ? "Send Your Team Activity Brief" : "Tell Us About Your Event"}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description id="contact-modal-description" className="text-gray-600 mt-1 text-sm sm:text-base">
                {isTeamBuildingInquiry
                  ? "We’ve added your selected activity. Share the essentials and we’ll come back with the right next step."
                  : "Tell us your goals and we'll shape the right experience."}
              </DialogPrimitive.Description>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex-1 space-y-4 overflow-y-auto overscroll-contain p-4 scrollbar-gold sm:space-y-5 sm:p-6">
              {/* Honeypot — hidden from real users, bots fill it. Do not remove. */}
              <input
                ref={honeypotRef}
                type="text"
                name="website_url"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
              />
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-gray-700 text-sm mb-1">
                    Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-gray-300 focus:border-primary text-gray-900"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-gray-700 text-sm mb-1">
                    Work email <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
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
                <label htmlFor="contact-phone" className="block text-gray-700 text-sm mb-1">
                  Phone / WhatsApp <span className="text-primary">*</span>
                </label>
                <Input
                  id="contact-phone"
                  name="phone"
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
                <label htmlFor="contact-event-category" className="block text-gray-700 text-sm mb-1">
                  Event Category <span className="text-primary">*</span>
                </label>
                <select
                  id="contact-event-category"
                  name="eventCategory"
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
                <label htmlFor="contact-event-date" className="block text-gray-700 text-sm mb-1">Event date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="contact-event-date"
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
                      disabled={(date) => date < startOfDay(new Date())}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Organisation */}
              <div>
                <label htmlFor="contact-organisation" className="block text-gray-700 text-sm mb-1">
                  Organisation <span className="text-primary">*</span>
                </label>
                <Input
                  id="contact-organisation"
                  name="organisation"
                  required
                  value={formData.organisation}
                  onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                  className="bg-white border-gray-300 focus:border-primary text-gray-900"
                  placeholder="Company / Organisation Name"
                />
              </div>

              {/* Type of Organisation */}
              <div>
                <label htmlFor="contact-organisation-type" className="block text-gray-700 text-sm mb-1">
                  Type of Organisation <span className="text-primary">*</span>
                </label>
                <select
                  id="contact-organisation-type"
                  name="organisationType"
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
                <label htmlFor="contact-attendees" className="block text-gray-700 text-sm mb-1">
                  Estimated pax <span className="text-primary">*</span>
                </label>
                <Input
                  id="contact-attendees"
                  name="expectedAttendees"
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
                <label htmlFor="contact-customisation" className="block text-gray-700 text-sm mb-1">
                  How much customisation do you need? <span className="text-primary">*</span>
                </label>
                <select
                  id="contact-customisation"
                  name="additionalCustomisation"
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
              {isTeamBuildingInquiry && (
                <div>
                  <label htmlFor="contact-game-customisation" className="block text-gray-700 text-sm mb-1">Game customisation</label>
                  <select
                    id="contact-game-customisation"
                    name="gameCustomisation"
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
              )}

              {/* Add-on Services */}
              <div>
                <span className="block text-gray-700 text-sm mb-2">Optional add-ons</span>
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
                <label htmlFor="contact-additional-details" className="block text-gray-700 text-sm mb-1">Anything else we should plan around?</label>
                <Textarea
                  id="contact-additional-details"
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                  className="bg-white border-gray-300 focus:border-primary min-h-[80px] sm:min-h-[100px] text-gray-900"
                  placeholder="Share your vision, preferred venues, special requirements..."
                />
              </div>

              {/* Privacy Consent */}
              <label htmlFor="contact-privacy-consent" className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  id="contact-privacy-consent"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, privacyConsent: checked === true })
                  }
                  className="border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-0.5"
                />
                <span className="text-gray-600 text-sm">
                  I agree to Elluminate storing and processing these details so the team can respond to my enquiry.
                </span>
              </label>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white hover:bg-primary/90 transition-all"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send My Event Brief"}
              </Button>
              <a
                href="mailto:info@elluminate.sg"
                className="flex items-center justify-center gap-2 text-sm text-gray-500 transition-colors hover:text-primary md:hidden"
              >
                <Mail className="h-4 w-4" />
                Prefer email? info@elluminate.sg
              </a>
            </form>

          </div>
          </motion.div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
