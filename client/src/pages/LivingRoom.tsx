import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import heroImage from '@assets/generated_images/Portfolio_modern_apartment_b45b9e03.png';

export default function LivingRoom() {
  const features = [
    "Custom furniture and seating arrangements",
    "Entertainment unit and media wall designs",
    "Accent walls and decorative elements",
    "Lighting design for ambiance",
    "Storage solutions and display units",
    "Premium upholstery and finishes",
  ];

  const elements = [
    { name: "TV Units", description: "Modern entertainment centers with cable management" },
    { name: "Seating", description: "Comfortable sofas and chairs in premium fabrics" },
    { name: "Lighting", description: "Ambient, task, and accent lighting solutions" },
    { name: "Storage", description: "Display cabinets and hidden storage options" },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Living Room Design"
        subtitle="Create the perfect space for relaxation and entertainment"
        backgroundImage={heroImage}
        height="min-h-[500px]"
        primaryCTA={{ text: "Get Price Estimate", href: "/book-consultation" }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6 text-center" data-testid="text-overview-heading">
            Your Living Space Reimagined
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Transform your living room into a sophisticated space that reflects your style and meets your lifestyle needs. Our designs combine comfort, functionality, and aesthetic appeal to create the perfect gathering space for family and friends.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="text-features-heading">
            Design Elements
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
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="text-elements-heading">
            Key Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {elements.map((element) => (
              <Card key={element.name} className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold mb-2" data-testid={`text-element-name-${element.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {element.name}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-element-description-${element.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {element.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6" data-testid="text-cta-heading">
            Ready to Transform Your Living Room?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get expert design advice and a customized quote for your project
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
