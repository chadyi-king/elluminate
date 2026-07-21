import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import elluminateLogo from "@/assets/logos/elluminate-logo.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useContactModal } from "@/contexts/ContactModalContext";
import {
  equipmentActivityServices,
  physicalTeamBuildingServices,
  retreatServices,
  trainingServices,
  virtualTeamBuildingServices,
} from "@/data/siteScope";

interface ServiceLink {
  name: string;
  slug: string;
}

interface NavGroup {
  title?: string;
  items: ServiceLink[];
  accentClassName?: string;
  columns?: 1 | 2;
}

interface DropdownProps {
  label: string;
  items: ServiceLink[];
  isOpen: boolean;
  isActive?: boolean;
  onToggle: () => void;
  onClose: () => void;
  parentPath: string;
  subGroups?: NavGroup[];
}

const NavDropdown = ({
  label,
  items,
  isOpen,
  isActive = false,
  onToggle,
  onClose,
  parentPath,
  subGroups,
}: DropdownProps) => {
  const hasGroups = Boolean(subGroups?.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (!isOpen) onToggle();
      }}
      onMouseLeave={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          onClose();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onClose();
        }
      }}
    >
      <div className="flex h-10 items-center gap-1">
        <Link
          to={parentPath}
          onClick={onClose}
          className={`whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
            isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
          }`}
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          aria-label={`${isOpen ? "Close" : "Open"} ${label} activities`}
          aria-expanded={isOpen}
          aria-controls={`desktop-${label.toLowerCase().replace(/\s+/g, "-")}-activities`}
          className="rounded-full p-1 text-foreground/70 transition-colors duration-300 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className={`absolute top-full z-50 pt-2 ${hasGroups ? "-left-[18rem]" : "left-0"}`}
          >
            <div
              id={`desktop-${label.toLowerCase().replace(/\s+/g, "-")}-activities`}
              className={`overflow-hidden rounded-xl border border-border bg-background shadow-card ${
                hasGroups ? "w-[920px] max-w-[calc(100vw-3rem)]" : "w-64"
              }`}
              aria-label={`${label} activities`}
            >
              {subGroups ? (
                <div className="grid grid-cols-[1.35fr_.65fr_1fr] gap-5 p-5">
                  {subGroups.map((group) => (
                    <div key={group.title ?? "activities"} className="min-w-0">
                      {group.title && (
                        <div
                          className={`mb-2 border-b border-border/70 px-2 pb-2 text-[11px] font-bold uppercase tracking-[0.14em] ${
                            group.accentClassName ?? "text-muted-foreground"
                          }`}
                        >
                          {group.title}
                        </div>
                      )}
                      <div className={group.columns === 2 ? "grid grid-cols-2 gap-x-1" : "grid grid-cols-1"}>
                        {group.items.map((item) => (
                          <Link
                            key={item.slug}
                            to={`/services/${item.slug}`}
                            onClick={onClose}
                            className="rounded-lg px-2 py-2 text-[13px] leading-snug text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="max-h-80 overflow-y-auto py-2 scrollbar-blue">
                  {items.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/services/${item.slug}`}
                      onClick={onClose}
                      className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/30"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface MobileFamilyAccordionProps {
  label: string;
  parentPath: string;
  groups: NavGroup[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

const MobileFamilyAccordion = ({
  label,
  parentPath,
  groups,
  isOpen,
  onToggle,
  onNavigate,
}: MobileFamilyAccordionProps) => {
  const panelId = `mobile-${label.toLowerCase().replace(/\s+/g, "-")}-activities`;

  return (
    <div className="border-t border-border py-1">
      <div className="flex items-center gap-2">
        <Link
          to={parentPath}
          onClick={onNavigate}
          className="flex-1 py-3 text-left font-semibold text-foreground transition-colors hover:text-primary"
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          aria-label={`${isOpen ? "Collapse" : "Expand"} ${label} activities`}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="rounded-full p-2 text-foreground/70 transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pb-4 pl-3">
              {groups.map((group, groupIndex) => (
                <div key={group.title ?? `${label}-${groupIndex}`}>
                  {group.title && (
                    <span
                      className={`mb-1 block text-xs font-bold uppercase tracking-[0.12em] ${
                        group.accentClassName ?? "text-muted-foreground"
                      }`}
                    >
                      {group.title}
                    </span>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-3">
                    {group.items.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/services/${item.slug}`}
                        onClick={onNavigate}
                        className="rounded-md py-2 pl-3 pr-2 text-sm text-foreground/70 transition-colors hover:bg-primary/5 hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type ComingSoonTopic = "large-scale" | "school";

const comingSoonContent: Record<ComingSoonTopic, { label: string; title: string; body: string }> = {
  "large-scale": {
    label: "Large Scale",
    title: "Large Scale Experiences",
    body: "This section is coming soon. For now, tell us what you are planning and the Elluminate team will recommend the right format.",
  },
  school: {
    label: "School",
    title: "School Programmes",
    body: "This section is coming soon. For school or cohort enquiries, send us the basic details and we will follow up.",
  },
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
        className="w-full py-3 text-left font-medium text-foreground transition-colors hover:text-primary"
      >
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(topic)}
      className="inline-flex h-10 items-center whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/70 transition-colors duration-300 hover:text-primary"
    >
      {label}
    </button>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenFamily, setMobileOpenFamily] = useState<string | null>(null);
  const [comingSoonTopic, setComingSoonTopic] = useState<ComingSoonTopic | null>(null);
  const location = useLocation();
  const { openContactModal } = useContactModal();

  const teamBuildingItems = [
    ...physicalTeamBuildingServices,
    ...equipmentActivityServices,
    ...virtualTeamBuildingServices,
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown((current) => (current === dropdown ? null : dropdown));
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileOpenFamily(null);
  };

  const handleMobileMenuToggle = () => {
    if (isOpen) setMobileOpenFamily(null);
    setIsOpen((current) => !current);
  };

  const handleMobileFamilyToggle = (family: string) => {
    setMobileOpenFamily((current) => (current === family ? null : family));
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const isFamilyActive = (parentPath: string, services: ServiceLink[]) =>
    location.pathname.startsWith(parentPath) ||
    services.some((service) => location.pathname === `/services/${service.slug}`);

  const navLinkClass = (path: string) =>
    `inline-flex h-10 items-center whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
      isActive(path) ? "text-primary" : "text-foreground/70 hover:text-primary"
    }`;

  const handleComingSoonSelect = (topic: ComingSoonTopic, closeMobile = false) => {
    setOpenDropdown(null);
    if (closeMobile) closeMobileMenu();
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
      className="sticky top-0 z-50 border-b border-border/60 bg-white/[0.88] backdrop-blur-md"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="hidden h-24 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center xl:grid">
          <div className="flex items-center justify-self-end gap-4 pr-6 2xl:gap-6 2xl:pr-8">
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={navLinkClass("/about")}>
              About
            </Link>
            <NavDropdown
              label="Team Building"
              items={[]}
              isOpen={openDropdown === "team-building"}
              isActive={isFamilyActive("/services/team-building", teamBuildingItems)}
              onToggle={() => handleDropdownToggle("team-building")}
              onClose={handleDropdownClose}
              parentPath="/services/team-building"
              subGroups={[
                {
                  title: "Physical",
                  items: physicalTeamBuildingServices,
                  accentClassName: "text-primary",
                  columns: 2,
                },
                {
                  title: "Activities",
                  items: equipmentActivityServices,
                  accentClassName: "text-activity-orange",
                },
                {
                  title: "Virtual",
                  items: virtualTeamBuildingServices,
                  accentClassName: "text-purple-600",
                  columns: 2,
                },
              ]}
            />
            <NavDropdown
              label="Retreats"
              items={retreatServices}
              isOpen={openDropdown === "retreats"}
              isActive={isFamilyActive("/services/retreats", retreatServices)}
              onToggle={() => handleDropdownToggle("retreats")}
              onClose={handleDropdownClose}
              parentPath="/services/retreats"
            />
          </div>

          <Link
            to="/"
            aria-label="Elluminate home"
            className="relative z-10 flex items-center justify-self-center"
          >
            <img src={elluminateLogo} alt="Elluminate" className="h-20 max-h-full w-auto object-contain 2xl:h-[5.5rem]" />
          </Link>

          <div className="flex items-center justify-self-start gap-4 pl-6 2xl:gap-6 2xl:pl-8">
            <NavDropdown
              label="Training"
              items={trainingServices}
              isOpen={openDropdown === "training"}
              isActive={isFamilyActive("/services/training", trainingServices)}
              onToggle={() => handleDropdownToggle("training")}
              onClose={handleDropdownClose}
              parentPath="/services/training"
            />
            <ComingSoonNavButton topic="large-scale" onSelect={handleComingSoonSelect} />
            <ComingSoonNavButton topic="school" onSelect={handleComingSoonSelect} />
            <Button variant="primary" size="sm" onClick={openContactModal} className="h-10 whitespace-nowrap">
              PLAN MY EVENT
            </Button>
          </div>
        </div>

        <div className="relative flex h-24 items-center xl:hidden">
          <Link
            to="/"
            aria-label="Elluminate home"
            className="absolute left-1/2 flex -translate-x-1/2 items-center"
          >
            <img src={elluminateLogo} alt="Elluminate" className="h-20 max-h-full w-auto object-contain" />
          </Link>
          <button
            type="button"
            onClick={handleMobileMenuToggle}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            className="ml-auto rounded-full p-2 text-foreground transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background xl:hidden"
          >
            <div className="container mx-auto max-h-[calc(100vh-7rem)] overflow-y-auto px-6 py-5">
              <div className="flex flex-col">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="py-3 font-medium text-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="py-3 font-medium text-foreground transition-colors hover:text-primary"
                >
                  About
                </Link>
                <MobileFamilyAccordion
                  label="Team Building"
                  parentPath="/services/team-building"
                  groups={[
                    {
                      title: "Physical",
                      items: physicalTeamBuildingServices,
                      accentClassName: "text-primary",
                    },
                    {
                      title: "Activities",
                      items: equipmentActivityServices,
                      accentClassName: "text-activity-orange",
                    },
                    {
                      title: "Virtual",
                      items: virtualTeamBuildingServices,
                      accentClassName: "text-purple-600",
                    },
                  ]}
                  isOpen={mobileOpenFamily === "team-building"}
                  onToggle={() => handleMobileFamilyToggle("team-building")}
                  onNavigate={closeMobileMenu}
                />
                <MobileFamilyAccordion
                  label="Retreats"
                  parentPath="/services/retreats"
                  groups={[{ items: retreatServices }]}
                  isOpen={mobileOpenFamily === "retreats"}
                  onToggle={() => handleMobileFamilyToggle("retreats")}
                  onNavigate={closeMobileMenu}
                />
                <MobileFamilyAccordion
                  label="Training"
                  parentPath="/services/training"
                  groups={[{ items: trainingServices }]}
                  isOpen={mobileOpenFamily === "training"}
                  onToggle={() => handleMobileFamilyToggle("training")}
                  onNavigate={closeMobileMenu}
                />

                <div className="border-t border-border py-1">
                  <ComingSoonNavButton
                    topic="large-scale"
                    variant="mobile"
                    onSelect={(topic) => handleComingSoonSelect(topic, true)}
                  />
                  <ComingSoonNavButton
                    topic="school"
                    variant="mobile"
                    onSelect={(topic) => handleComingSoonSelect(topic, true)}
                  />
                </div>

                <Button
                  variant="primary"
                  className="mt-5"
                  onClick={() => {
                    closeMobileMenu();
                    openContactModal();
                  }}
                >
                  PLAN MY EVENT
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog
        open={comingSoonTopic !== null}
        onOpenChange={(open) => {
          if (!open) setComingSoonTopic(null);
        }}
      >
        <DialogContent className="max-w-md border-primary/10">
          {activeComingSoon && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-primary">{activeComingSoon.title}</DialogTitle>
                <DialogDescription className="text-base leading-relaxed text-foreground/70">
                  {activeComingSoon.body}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="gap-2 sm:justify-start sm:space-x-0">
                <Button variant="primary" onClick={handleComingSoonCta}>
                  PLAN MY EVENT
                </Button>
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.nav>
  );
};
