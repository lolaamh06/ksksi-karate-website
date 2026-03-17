import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Achievements", path: "/achievements" },
  { name: "Branches", path: "/branches" },
  { name: "Trainers", path: "/trainers" },
  { name: "Gallery", path: "/gallery" },
  { name: "Events", path: "/events" },
  { name: "Join", path: "/join" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-primary text-xl font-bold mb-3">KEN-BU-KAI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Shito Ryu Karate School of India. Training warriors since 2010.
              Discipline, Respect, Excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-3 text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-3 text-foreground">Follow Us</h4>
            <div className="flex gap-3 mb-4">
              <a href="https://www.instagram.com/ksksi_hq?igsh=MTFvNGdlb3F5eG42bA==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@renshivijayan5995?si=kLitujQrc0i5Kkrp" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Affiliated with World Karate Federation & Karate India Organization
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Ken-Bu-Kai Shito Ryu Karate School of India — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
