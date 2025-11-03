import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Accordion } from "@/components/ui/accordion";
import FAQItem from "@/components/FAQItem";
import kitchenImage from '@assets/generated_images/Modular_kitchen_showcase_1a562f6f.png';
import wardrobeImage from '@assets/generated_images/Luxury_wardrobe_design_e3a8830a.png';
import livingRoomImage from '@assets/generated_images/Portfolio_modern_apartment_b45b9e03.png';
import bedroomImage from '@assets/generated_images/Master_bedroom_luxury_23d563b4.png';
import heroImage from '@assets/generated_images/Portfolio_dining_room_67faebd9.png';

export default function Services() {
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
      image: livingRoomImage,
      link: "/tv-unit",
    },
    {
      title: "Bedroom",
      description: "Tranquil bedroom designs that prioritize comfort and elegance, creating your personal sanctuary for rest and rejuvenation.",
      image: bedroomImage,
      link: "/bedroom",
    },
    {
      title: "Pooja Mandir",
      description: "Elegant pooja mandir designs crafted for serenity and spiritual ambiance in your home.",
      image: wardrobeImage,
      link: "/pooja-mandir",
    },
    {
      title: "Living Room/Hall",
      description: "Sophisticated living spaces that combine comfort and style, creating the perfect environment for relaxation and entertainment.",
      image: livingRoomImage,
      link: "/living-room",
    },
    {
      title: "Wardrobes",
      description: "Custom wardrobe solutions with elegant finishes, organized interiors, and space-efficient designs tailored to your needs.",
      image: wardrobeImage,
      link: "/wardrobes",
    },
  ];

  const faqs = [
    {
      question: "What services does Veluxe Interiors offer?",
      answer: "We offer comprehensive interior design services including modular kitchens, wardrobes, living room design, bedroom design, and complete home interior solutions. Each service is customized to your specific requirements and preferences.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A modular kitchen typically takes 4-6 weeks, while complete home interiors can take 3-6 months from design to completion. We provide a detailed timeline during the consultation.",
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a complimentary initial consultation to understand your requirements and provide preliminary design ideas. This allows us to assess your space and discuss your vision without any commitment.",
    },
    {
      question: "What is included in your design packages?",
      answer: "Our packages include 3D design visualizations, material selection, project management, skilled installation, and post-installation support. We provide transparent pricing with no hidden costs.",
    },
    {
      question: "Do you provide warranty on your work?",
      answer: "Yes, we provide comprehensive warranty coverage on all our work, including materials and installation. The warranty period varies by service and materials used, which we'll detail during your consultation.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Our Services"
        subtitle="Comprehensive interior design solutions for every space in your home"
        backgroundImage={heroImage}
        height="min-h-[400px]"
        primaryCTA={{ text: "Get Price Estimate", href: "/book-consultation" }}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4" data-testid="text-services-heading">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we handle every aspect of your interior design project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4" data-testid="text-faq-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our services and process
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                value={`faq-${index}`}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
