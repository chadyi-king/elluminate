import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const corporateServices = [
  { name: "Corporate Team Building", slug: "team-building" },
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
  { name: "Overseas Retreats", slug: "company-retreats" },
  { name: "Grand Opening", slug: "grand-opening" },
  { name: "Summits", slug: "summits" },
  { name: "Government Events", slug: "government-events" },
  { name: "Private Events", slug: "private-events" },
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
        className="flex items-center gap-1 text-primary hover:text-white transition-colors duration-300 text-[10px] tracking-[0.1em] uppercase font-display font-semibold py-2"
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
            className="absolute top-full left-0 mt-2 w-56 bg-background-deep border border-border-gold/30 rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="py-2 max-h-80 overflow-y-auto">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  onClick={onClose}
                  className="block px-4 py-2 text-[10px] tracking-[0.05em] text-primary hover:text-white hover:bg-primary/10 transition-colors font-display"
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
  const [showComingSoon, setShowComingSoon] = useState(false);
  const location = useLocation();

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path) || location.hash === path;
  };

  const navLinkClass = (path: string) => 
    `transition-colors duration-300 text-[10px] tracking-[0.1em] uppercase font-display font-semibold ${
      isActive(path) ? 'text-white' : 'text-primary hover:text-white'
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border-gold/20"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center gap-4 flex-1">
              <a
                href="/"
                className={navLinkClass('/')}
              >
                Home
              </a>
              <Link
                to="/about"
                className={navLinkClass('/about')}
              >
                About
              </Link>
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
            <Link to="/" className="flex flex-col items-center flex-shrink-0 mx-4">
              <span className="text-primary/80 text-[8px] tracking-[0.35em] uppercase font-display font-bold">
                Team
              </span>
              <span className="text-metallic-gold font-display text-lg tracking-[0.12em] font-black -mt-0.5">
                ELEVATE
              </span>
              <span className="text-primary/60 text-[7px] tracking-[0.25em] uppercase font-display font-medium -mt-0.5">
                Experience
              </span>
            </Link>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
              <NavDropdown
                label="Experience"
                items={experienceServices}
                isOpen={openDropdown === 'experience'}
                onToggle={() => handleDropdownToggle('experience')}
                onClose={handleDropdownClose}
              />
              <a
                href="/#portfolio"
                className={navLinkClass('/#portfolio')}
              >
                Portfolio
              </a>
              <button
                onClick={() => setShowComingSoon(true)}
                className="text-primary hover:text-white transition-colors duration-300 text-[10px] tracking-[0.1em] uppercase font-display font-semibold"
              >
                Enhance
              </button>
              <Button variant="gold" size="sm" className="font-display font-semibold text-[10px] tracking-[0.1em] hover:bg-background hover:text-primary hover:border-primary border border-transparent">
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
                  className="text-primary hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase font-display font-semibold py-2"
                >
                  Home
                </a>
                <a
                  href="/#why-us"
                  onClick={() => setIsOpen(false)}
                  className="text-primary hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase font-display font-semibold py-2"
                >
                  About
                </a>
                
                {/* Corporate Dropdown */}
                <div className="border-t border-border-gold/20 pt-4">
                  <span className="text-white text-xs tracking-wider uppercase font-display font-semibold mb-2 block">Corporate</span>
                  {corporateServices.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/services/${item.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block text-primary hover:text-white transition-colors duration-300 text-sm py-1.5 pl-4 font-display"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Immersive Dropdown */}
                <div className="border-t border-border-gold/20 pt-4">
                  <span className="text-white text-xs tracking-wider uppercase font-display font-semibold mb-2 block">Immersive</span>
                  {immersiveServices.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/services/${item.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block text-primary hover:text-white transition-colors duration-300 text-sm py-1.5 pl-4 font-display"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Experience Dropdown */}
                <div className="border-t border-border-gold/20 pt-4">
                  <span className="text-white text-xs tracking-wider uppercase font-display font-semibold mb-2 block">Experience</span>
                  {experienceServices.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/services/${item.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block text-primary hover:text-white transition-colors duration-300 text-sm py-1.5 pl-4 font-display"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <a
                  href="/#portfolio"
                  onClick={() => setIsOpen(false)}
                  className="text-primary hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase font-display font-semibold py-2 border-t border-border-gold/20 pt-4"
                >
                  Portfolio
                </a>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowComingSoon(true);
                  }}
                  className="text-primary hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase font-display font-semibold py-2 text-left"
                >
                  Enhancing Events
                </button>
                
                <Button variant="gold-outline" className="mt-4 font-display font-semibold">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Coming Soon Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="bg-background-deep border-border-gold/30 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold text-metallic-gold text-center">
              Coming Soon
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="text-muted-foreground font-display">
              Our blog <span className="text-primary font-semibold">Enhancing Events</span> is currently under development.
            </p>
            <p className="text-muted-foreground/80 font-display mt-2 text-sm">
              Stay tuned for insights, tips, and behind-the-scenes content!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};