import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

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
              {["Modular Kitchen", "Wardrobes", "Living Room", "Bedroom"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid={`link-footer-service-${item.toLowerCase().replace(" ", "-")}`}>
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
                <span data-testid="text-footer-phone">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span data-testid="text-footer-email">info@veluxeinteriors.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span data-testid="text-footer-address">123 Design Street, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © 2025 Veluxe Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
