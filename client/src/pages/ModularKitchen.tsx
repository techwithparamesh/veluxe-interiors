import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import heroImage from '@assets/generated_images/Modular_kitchen_showcase_1a562f6f.png';

export default function ModularKitchen() {
  const features = [
    "Premium quality materials and hardware",
    "Customized layouts for optimal space utilization",
    "Modern designs with sleek finishes",
    "Smart storage solutions",
    "Durable and easy-to-maintain surfaces",
    "Professional installation by expert craftsmen",
  ];

  const styles = [
    { name: "Contemporary", description: "Clean lines and minimalist aesthetics" },
    { name: "Traditional", description: "Classic elegance with ornate details" },
    { name: "Modern", description: "Sleek, functional, and innovative" },
    { name: "Transitional", description: "Perfect blend of classic and contemporary" },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Modular Kitchen Design"
        subtitle="Contemporary kitchens that blend functionality with stunning aesthetics"
        backgroundImage={heroImage}
        height="min-h-[500px]"
        primaryCTA={{ text: "Get Price Estimate", href: "/book-consultation" }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6 text-center" data-testid="text-overview-heading">
            Transform Your Kitchen
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Our modular kitchens are designed to elevate your cooking experience with smart layouts, premium materials, and contemporary aesthetics. Each kitchen is tailored to your lifestyle and space requirements.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="text-features-heading">
            Key Features
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
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="text-styles-heading">
            Design Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style) => (
              <Card key={style.name} className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold mb-2" data-testid={`text-style-name-${style.name.toLowerCase()}`}>
                  {style.name}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-style-description-${style.name.toLowerCase()}`}>
                  {style.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6" data-testid="text-cta-heading">
            Ready to Design Your Dream Kitchen?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a personalized quote and free consultation from our experts
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
