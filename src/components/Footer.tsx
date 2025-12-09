import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Team Building", path: "/services/team-building" },
    { name: "Dinner & Dance", path: "/services/dinner-and-dance" },
    { name: "Awards Ceremonies", path: "/services/awards-ceremonies" },
    { name: "Brand Activations", path: "/services/brand-activations" },
    { name: "VIP Gala", path: "/services/vip-gala" },
    { name: "Family Fun Days", path: "/services/family-fun-days" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Case Studies", path: "/#case-studies" },
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
              Singapore's premier corporate event specialists. Transforming visions into extraordinary experiences since 2017.
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
            <h4 className="text-primary-soft font-serif text-lg mb-6 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-primary/50" />
            </h4>
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
            <h4 className="text-primary-soft font-serif text-lg mb-6 relative">
              Company
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-primary/50" />
            </h4>
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
            <h4 className="text-primary-soft font-serif text-lg mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-primary/50" />
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+6512345678"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5 text-primary/60" />
                  </div>
                  +65 1234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@teamelevate.sg"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5 text-primary/60" />
                  </div>
                  hello@teamelevate.sg
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6512345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-3.5 h-3.5 text-primary/60" />
                  </div>
                  WhatsApp
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-primary/60" />
                  </div>
                  <span>
                    123 Event Street, #01-01<br />
                    Singapore 123456
                  </span>
                </div>
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
              8 Years of Excellence — Since 2017
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
