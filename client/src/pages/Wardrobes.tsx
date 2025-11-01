import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import heroImage from '@assets/generated_images/Luxury_wardrobe_design_e3a8830a.png';

export default function Wardrobes() {
  const features = [
    "Custom-designed to fit your space perfectly",
    "Premium finishes in wood, laminate, and glass",
    "Organized interiors with smart compartments",
    "Soft-close mechanisms for doors and drawers",
    "LED lighting options for enhanced visibility",
    "Mirror panels and decorative elements",
  ];

  const types = [
    { name: "Walk-in Wardrobe", description: "Spacious luxury closets with seating areas" },
    { name: "Sliding Door", description: "Space-saving designs with smooth operation" },
    { name: "Hinged Door", description: "Classic style with full-access opening" },
    { name: "Open Wardrobe", description: "Modern display-style storage solutions" },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Wardrobe Solutions"
        subtitle="Elegant storage solutions that combine style with functionality"
        backgroundImage={heroImage}
        height="min-h-[500px]"
        primaryCTA={{ text: "Get Price Estimate", href: "/book-consultation" }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6 text-center" data-testid="text-overview-heading">
            Organized Luxury
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Our custom wardrobe solutions maximize your storage space while adding elegance to your bedroom. Each design is tailored to your specific needs, ensuring optimal organization and easy access to your belongings.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="text-features-heading">
            Premium Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" data-testid={`icon-feature-${index}`} />
                <span data-testid={`text-feature-${index}`}>{feature}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="text-types-heading">
            Wardrobe Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((type) => (
              <Card key={type.name} className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold mb-2" data-testid={`text-type-name-${type.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {type.name}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-type-description-${type.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {type.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6" data-testid="text-cta-heading">
            Design Your Perfect Wardrobe
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a consultation to explore customization options and get a detailed quote
          </p>
          <Link href="/book-consultation">
            <Button size="lg" className="rounded-full px-8" data-testid="button-cta-consultation">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
