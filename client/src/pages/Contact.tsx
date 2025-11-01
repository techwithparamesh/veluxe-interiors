import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import heroImage from '@assets/generated_images/Portfolio_dining_room_67faebd9.png';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@veluxeinteriors.com", "design@veluxeinteriors.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Design Street", "Mumbai, India 400001"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our design experts"
        backgroundImage={heroImage}
        height="min-h-[400px]"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6" data-testid="text-contact-heading">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Have a question or want to discuss your project? Fill out the form and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-6" data-testid="text-info-heading">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" data-testid={`icon-${info.title.toLowerCase()}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2" data-testid={`text-${info.title.toLowerCase()}-title`}>
                          {info.title}
                        </h3>
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-muted-foreground" data-testid={`text-${info.title.toLowerCase()}-detail-${index}`}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-visit-heading">
            Visit Our Experience Center
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            See our designs, materials, and finishes in person. Schedule an appointment for a personalized tour.
          </p>
          <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160992347!2d72.74109995!3d19.082197799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Veluxe Interiors Location"
              data-testid="map-location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
