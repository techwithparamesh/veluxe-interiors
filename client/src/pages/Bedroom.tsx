import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import heroImage from '@assets/generated_images/Master_bedroom_luxury_23d563b4.png';

export default function Bedroom() {
  const features = [
    "Custom bed frames and headboards",
    "Integrated wardrobe solutions",
    "Bedside tables and storage units",
    "Ambient lighting and mood control",
    "Premium fabrics and soft furnishings",
    "Window treatments and privacy solutions",
  ];

  const designs = [
    { name: "Master Suite", description: "Luxurious retreats with en-suite bathrooms" },
    { name: "Guest Bedroom", description: "Comfortable and welcoming spaces" },
    { name: "Kids' Room", description: "Playful, functional, and safe designs" },
    { name: "Teen Bedroom", description: "Stylish spaces that grow with them" },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Bedroom Design"
        subtitle="Create your personal sanctuary for rest and relaxation"
        backgroundImage={heroImage}
        height="min-h-[500px]"
        primaryCTA={{ text: "Get Price Estimate", href: "/book-consultation" }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6 text-center" data-testid="text-overview-heading">
            Your Personal Retreat
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Design a bedroom that promotes relaxation and reflects your personal style. Our bedroom designs combine comfort, functionality, and elegance to create the perfect environment for rest and rejuvenation.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="text-features-heading">
            Design Features
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
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="text-designs-heading">
            Bedroom Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designs.map((design) => (
              <Card key={design.name} className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold mb-2" data-testid={`text-design-name-${design.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {design.name}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-design-description-${design.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {design.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6" data-testid="text-cta-heading">
            Design Your Dream Bedroom
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Connect with our designers to bring your vision to life
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
