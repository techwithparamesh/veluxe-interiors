import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";
import mandirImage from "/images/portfolio/pooja1.jpg";

export default function PoojaMandir() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Pooja Mandir Designs"
        subtitle="Elegant pooja mandir designs crafted for serenity and spiritual ambiance in your home"
        backgroundImage={mandirImage}
        height="min-h-[400px]"
        primaryCTA={{ text: "Get Price Estimate", href: "/book-consultation" }}
      />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            <h2 className="font-serif text-3xl font-bold mb-4">Why Choose Our Pooja Mandir Designs?</h2>
            <ul className="list-disc pl-6 text-lg text-muted-foreground mb-4">
              <li>Custom designs to fit your space and style</li>
              <li>Premium materials for lasting beauty</li>
              <li>Intricate craftsmanship and detailing</li>
              <li>Options for traditional and modern aesthetics</li>
              <li>Integrated lighting and storage solutions</li>
            </ul>
            <p className="text-muted-foreground">Transform your home with a pooja mandir that brings peace, elegance, and spiritual ambiance to your living space.</p>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={mandirImage} alt="Pooja Mandir" className="rounded-lg shadow" />
            {/* Add more images here if available */}
          </div>
        </div>
      </section>
    </div>
  );
}
