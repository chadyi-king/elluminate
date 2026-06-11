import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import elluminateLogo from "@/assets/logos/elluminate-logo.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useContactModal } from "@/contexts/ContactModalContext";
import {
  physicalTeamBuildingServices,
  virtualTeamBuildingServices,
  retreatServices,
  trainingServices } from
"@/data/siteScope";

interface DropdownProps {
  label: string;
  items: {name: string;slug: string;}[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  parentPath?: string;
  subGroups?: {title: string;items: {name: string;slug: string;}[];}[];
}

const NavDropdown = ({ label, items, isOpen, onToggle, onClose, parentPath, subGroups }: DropdownProps) => {
  return (
    <div
      className="relative"
      onMouseEnter={() => {if (!isOpen) onToggle();}}
      onMouseLeave={onClose}>
      
      <div className="flex items-center gap-1.5 py-2">
        {parentPath ?
        <Link
          to={parentPath}
          onClick={onClose}
          className="text-[8.4px] font-medium uppercase tracking-[0.15em] text-foreground/70 transition-colors duration-300 hover:text-primary">

          {label}
        </Link> :
        <button
          onClick={onToggle}
          className="text-[8.4px] font-medium uppercase tracking-[0.15em] text-foreground/70 transition-colors duration-300 hover:text-primary">

          {label}
        </button>
        }
        <button
          type="button"
          onClick={onToggle}
          aria-label={`Open ${label} menu`}
          className="text-foreground/70 transition-colors duration-300 hover:text-primary">

          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-full left-0 mt-0 pt-2 z-50`}>
          
            <div className={`bg-background border border-border rounded-xl shadow-card overflow-hidden ${
          subGroups ? "w-[860px]" : "w-64"}`
          }>
              {subGroups ?
            <div className="p-4">
                  <div className="grid grid-cols-2 gap-8">
                    {subGroups.map((group) =>
                <div key={group.title}>
                        <div className={`px-2 py-2 text-xs font-semibold uppercase tracking-wider ${
                  group.title === "Physical Team Building" ? "text-primary" : group.title === "Virtual Team Building" ? "text-purple-600" : "text-muted-foreground"}`
                  }>
                          {group.title}
                        </div>
                        <div className="grid grid-cols-2 gap-x-2">
                          {group.items.map((item) =>
                    <Link
                      key={item.slug}
                      to={`/services/${item.slug}`}
                      onClick={onClose}
                      className="block rounded-lg px-2 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
                      
                              {item.name}
                            </Link>
                    )}
                        </div>
                      </div>
                )}
                  </div>
                </div> :

            <div className="py-2 max-h-80 overflow-y-auto scrollbar-blue">
                  {items.map((item) =>
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                onClick={onClose}
                className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
                
                      {item.name}
                    </Link>
              )}
                </div>
            }
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

};

type ComingSoonTopic = "large-scale" | "school";

const comingSoonContent: Record<ComingSoonTopic, { label: string; title: string; body: string }> = {
  "large-scale": {
    label: "Large Scale",
    title: "Large Scale Experiences",
    body: "This section is coming soon. For now, tell us what you are planning and the Elluminate team will recommend the right format."
  },
  school: {
    label: "School",
    title: "School Programmes",
    body: "This section is coming soon. For school or cohort enquiries, send us the basic details and we will follow up."
  }
};

interface ComingSoonNavButtonProps {
  topic: ComingSoonTopic;
  variant?: "desktop" | "mobile";
  onSelect: (topic: ComingSoonTopic) => void;
}

const ComingSoonNavButton = ({ topic, variant = "desktop", onSelect }: ComingSoonNavButtonProps) => {
  const { label } = comingSoonContent[topic];

  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={() => onSelect(topic)}
        className="w-full py-2 text-left font-medium text-foreground transition-colors hover:text-primary">

        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(topic)}
      className="text-[8.4px] font-medium uppercase tracking-[0.15em] text-foreground/70 transition-colors duration-300 hover:text-primary">

      {label}
    </button>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [comingSoonTopic, setComingSoonTopic] = useState<ComingSoonTopic | null>(null);
  const location = useLocation();
  const { openContactModal } = useContactModal();

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinkClass = (path: string) =>
  `transition-colors duration-300 text-[8.4px] tracking-[0.15em] font-medium ${
  isActive(path) ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`;

  const handleComingSoonSelect = (topic: ComingSoonTopic, closeMobile = false) => {
    setOpenDropdown(null);
    if (closeMobile) setIsOpen(false);
    setComingSoonTopic(topic);
  };

  const handleComingSoonCta = () => {
    setComingSoonTopic(null);
    openContactModal();
  };

  const activeComingSoon = comingSoonTopic ? comingSoonContent[comingSoonTopic] : null;


  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 pt-[10px] bg-white/[0.82] backdrop-blur-sm py-[15px]">
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className={`${navLinkClass('/')} uppercase`}>
              Home
            </Link>
            <Link to="/about" className={`${navLinkClass('/about')} uppercase`}>
              About
            </Link>
            <NavDropdown
              label="Team Building"
              items={[]}
              isOpen={openDropdown === 'team-building'}
              onToggle={() => handleDropdownToggle('team-building')}
              onClose={handleDropdownClose}
              parentPath="/services/team-building"
              subGroups={[
              { title: "Physical Team Building", items: physicalTeamBuildingServices },
              { title: "Virtual Team Building", items: virtualTeamBuildingServices }]
              } />
            
            <NavDropdown
              label="Retreats"
              items={retreatServices}
              isOpen={openDropdown === 'retreats'}
              onToggle={() => handleDropdownToggle('retreats')}
              onClose={handleDropdownClose} />
            
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex items-center group">
            <img src={elluminateLogo} alt="Elluminate" className="h-24 w-auto ml-[70px]" />
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavDropdown
              label="Training"
              items={trainingServices}
              isOpen={openDropdown === 'training'}
              onToggle={() => handleDropdownToggle('training')}
              onClose={handleDropdownClose} />
            
            <ComingSoonNavButton topic="large-scale" onSelect={handleComingSoonSelect} />
            <ComingSoonNavButton topic="school" onSelect={handleComingSoonSelect} />
            <Button
              variant="primary"
              size="sm"
              onClick={openContactModal}>
              
              PLAN MY EVENT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground">
            
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-t border-border overflow-hidden">
          
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-primary transition-colors py-2 font-medium">
              
                Home
              </Link>
              <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-primary transition-colors py-2 font-medium">
              
                About
              </Link>
              
              {/* Team Building Section */}
              <div className="border-t border-border pt-4">
                <Link
                to="/services/team-building"
                onClick={() => setIsOpen(false)}
                className="mb-3 block rounded-lg border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">

                  Team Building
                </Link>
                <span className="text-primary text-sm font-semibold mb-2 block">Team Building - Physical</span>
                {physicalTeamBuildingServices.map((item) =>
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                onClick={() => setIsOpen(false)}
                className="block text-foreground/70 hover:text-primary py-1.5 pl-4 text-sm">
                
                    {item.name}
                  </Link>
              )}
              </div>

              <div className="border-t border-border pt-4">
                <span className="text-purple-600 text-sm font-semibold mb-2 block">Team Building - Virtual</span>
                {virtualTeamBuildingServices.map((item) =>
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                onClick={() => setIsOpen(false)}
                className="block text-foreground/70 hover:text-primary py-1.5 pl-4 text-sm">
                
                    {item.name}
                  </Link>
              )}
              </div>

              {/* Retreats Section */}
              <div className="border-t border-border pt-4">
                <span className="text-primary text-sm font-semibold mb-2 block">Retreats</span>
                {retreatServices.map((item) =>
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                onClick={() => setIsOpen(false)}
                className="block text-foreground/70 hover:text-primary py-1.5 pl-4 text-sm">
                
                    {item.name}
                  </Link>
              )}
              </div>

              {/* Training Section */}
              <div className="border-t border-border pt-4">
                <span className="text-primary text-sm font-semibold mb-2 block">Training</span>
                {trainingServices.map((item) =>
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                onClick={() => setIsOpen(false)}
                className="block text-foreground/70 hover:text-primary py-1.5 pl-4 text-sm">
                
                    {item.name}
                  </Link>
              )}
              </div>

              {/* Coming Soon */}
              <div className="border-t border-border pt-4">
                <ComingSoonNavButton
                  topic="large-scale"
                  variant="mobile"
                  onSelect={(topic) => handleComingSoonSelect(topic, true)} />
                <ComingSoonNavButton
                  topic="school"
                  variant="mobile"
                  onSelect={(topic) => handleComingSoonSelect(topic, true)} />
              </div>
              
              <Button
              variant="primary"
              className="mt-4"
              onClick={() => {
                setIsOpen(false);
                openContactModal();
              }}>
              
                PLAN MY EVENT
              </Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>

      <Dialog
        open={comingSoonTopic !== null}
        onOpenChange={(open) => {
          if (!open) setComingSoonTopic(null);
        }}>

        <DialogContent className="max-w-md border-primary/10">
          {activeComingSoon &&
          <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-primary">
                  {activeComingSoon.title}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed text-foreground/70">
                  {activeComingSoon.body}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="gap-2 sm:justify-start sm:space-x-0">
                <Button variant="primary" onClick={handleComingSoonCta}>
                  PLAN MY EVENT
                </Button>
                <DialogClose asChild>
                  <Button variant="outline">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </>
          }
        </DialogContent>
      </Dialog>
    </motion.nav>);

};
