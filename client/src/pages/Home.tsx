import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageSquare, Palette, Hammer, CheckCircle } from "lucide-react";
import heroImage from '@assets/generated_images/Hero_luxury_living_room_fc22130e.png';
import kitchenImage from '@assets/generated_images/Modular_kitchen_showcase_1a562f6f.png';
import wardrobeImage from '@assets/generated_images/Luxury_wardrobe_design_e3a8830a.png';
import livingRoomImage from '@assets/generated_images/Portfolio_modern_apartment_b45b9e03.png';
import tvUnitImage from '/images/portfolio/tv-unit1.jpg';
import poojaMandirImage from '/images/portfolio/pooja1.jpg';
import bedroomImage from '@assets/generated_images/Master_bedroom_luxury_23d563b4.png';
import testimonial1 from '@assets/generated_images/Client_testimonial_portrait_female_5b47373d.png';
import testimonial2 from '@assets/generated_images/Client_testimonial_portrait_male_5dc8044c.png';

export default function Home() {
  const services = [
    {
      title: "Modular Kitchen",
      description: "Contemporary kitchen designs that blend functionality with aesthetic appeal, featuring premium materials and smart storage solutions.",
      image: kitchenImage,
      link: "/modular-kitchen",
    },
    {
      title: "TV Unit",
      description: "Modern TV unit designs that maximize style and storage, seamlessly integrating with your living space.",
      image: tvUnitImage,
      link: "/tv-unit",
    },
    {
      title: "Bedroom",
      description: "Tranquil bedroom designs that prioritize comfort and elegance, creating your personal sanctuary for rest and rejuvenation.",
      image: bedroomImage,
      link: "/bedroom",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Tirupati, Andhra Pradesh",
      image: testimonial1,
      testimonial: "Veluxe Interiors transformed our home beyond our expectations. The attention to detail and quality of work is exceptional. Highly recommended!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Tirupati, Andhra Pradesh",
      image: testimonial2,
      testimonial: "Professional team, creative designs, and flawless execution. Our modular kitchen is now the heart of our home. Thank you Veluxe!",
      rating: 5,
    },
  ];

  const processSteps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We begin with understanding your vision, requirements, and budget through a detailed consultation.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Our expert designers create customized 3D designs and mood boards tailored to your preferences.",
    },
    {
      icon: Hammer,
      title: "Execution",
      description: "Skilled craftsmen bring the designs to life with premium materials and meticulous attention to detail.",
    },
    {
      icon: CheckCircle,
      title: "Delivery",
      description: "Final walkthrough and handover of your beautifully transformed space, ready to enjoy.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Transform Your Space Into Luxury"
        subtitle="Expert interior design services crafted with precision and elegance for discerning homeowners"
        backgroundImage={heroImage}
        primaryCTA={{ text: "Book Consultation", href: "/book-consultation" }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4" data-testid="text-services-heading">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored to elevate every space in your home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a href="/services">
              <button className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/80 transition">View All</button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4" data-testid="text-process-heading">
              Our Design Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A seamless journey from concept to completion, ensuring excellence at every step
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} {...step} step={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4" data-testid="text-testimonials-heading">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by hundreds of satisfied homeowners across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6" data-testid="text-cta-heading">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation with our design experts today
          </p>
          <Link href="/book-consultation">
            <Button size="lg" className="rounded-full px-8" data-testid="button-cta-book">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
