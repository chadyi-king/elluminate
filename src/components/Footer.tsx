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

const quickLinks = [
  { name: "About Us", path: "/#why-us" },
  { name: "Blog", path: "/blog" },
  { name: "Online Team Building", path: "/services/team-building" },
  { name: "Company Retreats", path: "/services/company-retreats" },
  { name: "Amazing Race Virtual", path: "/services/team-building" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-background-deep border-t border-border-gold/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              {/* Logo placeholder - matching reference image style */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/20 border-2 border-primary rounded-lg flex items-center justify-center mb-2">
                  <span className="text-primary font-display font-black text-3xl">TE</span>
                </div>
                <span className="text-primary font-display text-sm tracking-wider font-bold">
                  TEAM
                </span>
                <span className="text-metallic-gold font-display text-xl tracking-[0.2em] font-black">
                  ELEVATE
                </span>
                <span className="text-primary/60 text-[10px] tracking-wider font-display">
                  BUILD . INSPIRE . RAISE
                </span>
              </div>
            </Link>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-display">
              We are the Corporate Events arm of
            </p>
            <p className="text-primary font-display font-bold mb-1">
              EXSTATIC PTE LTD
            </p>
            <p className="text-primary/70 text-sm font-display mb-6">
              [UEN No. 202243915R]
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background-deep hover:bg-primary-ember transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-display font-bold text-lg mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-px bg-primary" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300 font-display"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="lg:col-span-2">
            <h4 className="text-foreground font-display font-bold text-lg mb-6 relative">
              Address
              <span className="absolute -bottom-2 left-0 w-12 h-px bg-primary" />
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <ul className="space-y-4">
                <li>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm font-display">
                      165 BUKIT MERAH CENTRAL#05-3667,<br />
                      SINGAPORE 150165
                    </span>
                  </div>
                </li>
                <li>
                  <a
                    href="tel:+6588062446"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors duration-300 font-display"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    +65 8806 2446
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:teamelevate@exstatic.one"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors duration-300 font-display"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    teamelevate@exstatic.one
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6588062446"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary text-sm transition-colors duration-300 font-display"
                  >
                    <MessageCircle className="w-5 h-5 text-primary" />
                    WhatsApp Us
                  </a>
                </li>
              </ul>

              {/* Map placeholder */}
              <div className="relative rounded-lg overflow-hidden border border-border-gold/30 bg-card/50 h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8186833089384!2d103.8168!3d1.2878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19756d49ca91%3A0x8b98bd0e4f8f5c3d!2s165%20Bukit%20Merah%20Central%2C%20Singapore%20150165!5e0!3m2!1sen!2ssg!4v1699000000000!5m2!1sen!2ssg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Team Elevate Location"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-border-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground/60 text-xs font-display">
              © {new Date().getFullYear()} Team Elevate. All rights reserved.
            </p>
            <p className="text-muted-foreground/40 text-xs font-display">
              8 Years of Excellence — Since 2017
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
