import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Mail, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Team Building", path: "/services/team-building" },
    { name: "Dinner & Dance", path: "/services/dinner-and-dance" },
    { name: "Awards Ceremonies", path: "/services/awards-ceremonies" },
    { name: "Brand Activations", path: "/services/brand-activations" },
    { name: "VIP Gala", path: "/services/vip-gala" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Process", path: "/#journey" },
    { name: "Contact", path: "/#contact" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="bg-background-deep border-t border-border-gold/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-primary/60 text-[10px] tracking-[0.4em] uppercase font-sans block">
                Team
              </span>
              <span className="text-metallic-gold font-serif text-2xl tracking-[0.3em] font-bold">
                ELEVATE
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transforming visions into extraordinary experiences. Where moments become masterpieces.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-soft font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-primary-soft font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-soft font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@teamelevate.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-primary/60" />
                  hello@teamelevate.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6512345678"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-primary/60" />
                  +65 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-border-gold/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground/60 text-xs">
              © {new Date().getFullYear()} Team Elevate. All rights reserved.
            </p>
            <p className="text-muted-foreground/40 text-xs">
              Crafting extraordinary experiences since 2015
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
