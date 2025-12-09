import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const corporateServices = [
  { name: "Corporate Team Building", slug: "team-building" },
  { name: "Company Retreats", slug: "company-retreats" },
  { name: "Dinner & Dance", slug: "dinner-and-dance" },
  { name: "Awards Ceremonies", slug: "awards-ceremonies" },
  { name: "Corporate Anniversaries", slug: "corporate-anniversaries" },
  { name: "Leadership Offsites", slug: "leadership-offsites" },
  { name: "Product Launch Events", slug: "product-launch" },
  { name: "Brand Activations", slug: "brand-activations" },
  { name: "Client Appreciation", slug: "client-appreciation" },
  { name: "Town Halls", slug: "town-halls" },
];

const immersiveServices = [
  { name: "Immersive Experiences", slug: "immersive-experiences" },
  { name: "Wellness Events", slug: "wellness-events" },
  { name: "Event Concept Development", slug: "event-concept" },
  { name: "Stage & AV Production", slug: "stage-production" },
  { name: "Custom Theme Creation", slug: "custom-themes" },
  { name: "Emcee / Photo / Video", slug: "emcee-services" },
];

const experienceServices = [
  { name: "Family Fun Days", slug: "family-fun-days" },
  { name: "Corporate Carnivals", slug: "corporate-carnivals" },
  { name: "VIP Gala Experiences", slug: "vip-gala" },
  { name: "Company Retreats", slug: "company-retreats" },
];

interface DropdownProps {
  label: string;
  items: { name: string; slug: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const NavDropdown = ({ label, items, isOpen, onToggle, onClose }: DropdownProps) => {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        onMouseEnter={onToggle}
        className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wider uppercase font-display font-bold py-2"
      >
        {label}
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onMouseLeave={onClose}
            className="absolute top-full left-0 mt-2 w-64 bg-background-deep border border-border-gold/30 rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="py-2 max-h-80 overflow-y-auto">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  onClick={onClose}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors font-display"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border-gold/20"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wider uppercase font-display font-bold"
            >
              Home
            </a>
            <a
              href="/#why-us"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wider uppercase font-display font-bold"
            >
              About
            </a>
            <NavDropdown
              label="Corporate"
              items={corporateServices}
              isOpen={openDropdown === 'corporate'}
              onToggle={() => handleDropdownToggle('corporate')}
              onClose={handleDropdownClose}
            />
            <NavDropdown
              label="Immersive"
              items={immersiveServices}
              isOpen={openDropdown === 'immersive'}
              onToggle={() => handleDropdownToggle('immersive')}
              onClose={handleDropdownClose}
            />
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
            <span className="text-primary/70 text-xs tracking-[0.4em] uppercase font-display font-bold">
              Team
            </span>
            <span className="text-metallic-gold font-display text-2xl tracking-[0.2em] font-black -mt-1">
              ELEVATE
            </span>
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavDropdown
              label="Experience"
              items={experienceServices}
              isOpen={openDropdown === 'experience'}
              onToggle={() => handleDropdownToggle('experience')}
              onClose={handleDropdownClose}
            />
            <a
              href="/#portfolio"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wider uppercase font-display font-bold"
            >
              Portfolio
            </a>
            <Button variant="gold-outline" size="sm" className="font-display font-bold">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary ml-auto"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background-deep border-t border-border-gold/20 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wider uppercase font-display font-bold py-2"
              >
                Home
              </a>
              <a
                href="/#why-us"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wider uppercase font-display font-bold py-2"
              >
                About
              </a>
              
              {/* Corporate Dropdown */}
              <div className="border-t border-border-gold/20 pt-4">
                <span className="text-primary text-xs tracking-wider uppercase font-display font-bold mb-2 block">Corporate</span>
                {corporateServices.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm py-1.5 pl-4 font-display"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Immersive Dropdown */}
              <div className="border-t border-border-gold/20 pt-4">
                <span className="text-primary text-xs tracking-wider uppercase font-display font-bold mb-2 block">Immersive</span>
                {immersiveServices.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm py-1.5 pl-4 font-display"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Experience Dropdown */}
              <div className="border-t border-border-gold/20 pt-4">
                <span className="text-primary text-xs tracking-wider uppercase font-display font-bold mb-2 block">Experience</span>
                {experienceServices.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm py-1.5 pl-4 font-display"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <a
                href="/#portfolio"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wider uppercase font-display font-bold py-2 border-t border-border-gold/20 pt-4"
              >
                Portfolio
              </a>
              
              <Button variant="gold-outline" className="mt-4 font-display font-bold">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
