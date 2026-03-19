import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle,
} from "lucide-react";
import elluminateLogo from "@/assets/logos/elluminate-logo.png";

const topActivities = [
  { name: "Amazing Race", path: "/services/amazing-race" },
  { name: "CSI-Bones", path: "/services/csi-bones" },
  { name: "Cultural Race", path: "/services/cultural-race" },
  { name: "Treasure Heist", path: "/services/treasure-heist" },
  { name: "Sotong Game", path: "/services/sotong-game" },
  { name: "Nerfwar", path: "/services/nerfwar" },
  { name: "Archery Tag", path: "/services/archery-tag" },
  { name: "Running Man", path: "/services/running-man" },
  { name: "Amazing Race Virtual", path: "/services/amazing-race-virtual" },
  { name: "Overseas Retreats", path: "/services/overseas-retreats" },
  { name: "MBTI Profiling", path: "/services/mbti" },
  { name: "DISC Assessment", path: "/services/disc" },
  { name: "Workshops", path: "/services/workshops" },
  { name: "Youth Camps", path: "/services/youth-camps" },
  { name: "Student Workshops", path: "/services/student-workshops" },
];

// Social links removed - no active accounts for Elluminate yet

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-display font-bold text-background">
                <span className="text-primary">E</span>lluminate
              </span>
            </Link>
            
            <p className="text-background/70 text-sm leading-relaxed">
              Team building, retreats, training, and corporate event experiences designed to strengthen culture and create lasting connection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-background font-display font-semibold text-lg mb-6">
              Top Activities
            </h4>
            <ul className="space-y-2">
              {topActivities.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary text-xs transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-background font-display font-semibold text-lg mb-6">
              Contact Us
            </h4>
            
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-background/70 text-sm">
                    165 Bukit Merah Central #05-3667,<br />
                    Singapore 150165
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+6588062446"
                  className="flex items-center gap-3 text-background/70 hover:text-primary text-sm transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +65 8806 2446
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@elluminate.sg"
                  className="flex items-center gap-3 text-background/70 hover:text-primary text-sm transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  hello@elluminate.sg
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6588062446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-primary text-sm transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-background font-display font-semibold text-lg mb-6">
              Find Us
            </h4>
            <div className="relative rounded-xl overflow-hidden border border-background/10 h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8186833089384!2d103.8168!3d1.2878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19756d49ca91%3A0x8b98bd0e4f8f5c3d!2s165%20Bukit%20Merah%20Central%2C%20Singapore%20150165!5e0!3m2!1sen!2ssg!4v1699000000000!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elluminate Location"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Elluminate. All rights reserved.
            </p>
            <p className="text-background/40 text-sm">
              8+ Years Delivering Experiences — Since 2017
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};