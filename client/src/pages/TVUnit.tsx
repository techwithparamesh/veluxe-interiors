import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";
import tvImage from "/images/portfolio/tv-unit1.jpg";

export default function TVUnit() {
  return (
    <div className="min-h-screen">
      <Hero
        title="TV Unit Designs"
        subtitle="Modern TV unit designs that maximize style and storage, seamlessly integrating with your living space"
        backgroundImage={tvImage}
        height="min-h-[400px]"
        primaryCTA={{ text: "Get Price Estimate", href: "/book-consultation" }}
      />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            <h2 className="font-serif text-3xl font-bold mb-4">Why Choose Our TV Unit Designs?</h2>
            <ul className="list-disc pl-6 text-lg text-muted-foreground mb-4">
              <li>Custom designs to fit your space and style</li>
              <li>Premium materials for lasting beauty</li>
              <li>Smart storage and cable management</li>
              <li>Options for wall-mounted and freestanding units</li>
              <li>Integrated lighting and display shelves</li>
            </ul>
            <p className="text-muted-foreground">Upgrade your living room with a TV unit that blends functionality, style, and modern aesthetics.</p>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={tvImage} alt="TV Unit" className="rounded-lg shadow" />
            {/* Add more images here if available */}
          </div>
        </div>
      </section>
    </div>
  );
}
