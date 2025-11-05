import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

// Social icons
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-accent border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-gradient-gold mb-4">
              Veluxe Interiors
            </h3>
            <p className="text-muted-foreground text-sm">
              Transforming spaces into luxurious sanctuaries with expert craftsmanship and timeless design.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid={`link-footer-${item.toLowerCase()}`}>
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Modular Kitchen", "TV Unit", "Bedroom", "Pooja Mandir", "Living Room/Hall", "Wardrobes"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid={`link-footer-service-${item.toLowerCase().replace(/ /g, "-")}`}>
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span data-testid="text-footer-phone">+91 9908547461</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span data-testid="text-footer-phone-2">+91 7569021484</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span data-testid="text-footer-email">veluxeinteriors1@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span data-testid="text-footer-address">11-34, Yagappareddy Kandriga, Tirupati, Andhra Pradesh, 517561</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center flex flex-col items-center gap-4">
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <div className="flex gap-4 justify-center">
              <a href="https://wa.me/917569021484" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 transition-colors">
                  <FaWhatsapp size={28} className="text-green-600" />
                </span>
              </a>
              <a href="https://www.facebook.com/share/1KSWvvdFps/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors">
                  <FaFacebookF size={28} className="text-blue-600" />
                </span>
              </a>
              <a href="https://www.instagram.com/veluxe_interiors?igsh=bW80OTBxbGJicHRp&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-pink-200 via-yellow-100 to-purple-200 hover:from-pink-300 hover:to-purple-300 transition-colors">
                  <FaInstagram size={28} className="text-pink-600" />
                </span>
              </a>
              <a href="mailto:veluxeinteriors1@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 hover:bg-red-200 transition-colors">
                  <SiGmail size={28} className="text-red-500" />
                </span>
              </a>
              {/**
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 hover:bg-red-200 transition-colors">
                  <FaYoutube size={28} className="text-red-600" />
                </span>
              </a>
              */}
            </div>
          </div>
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © 2025 Veluxe Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
