import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import { Card } from "@/components/ui/card";
import { Calendar, Video, Users } from "lucide-react";
import heroImage from '@assets/generated_images/Portfolio_home_office_8bc17bef.png';

export default function BookConsultation() {
  const consultationTypes = [
    {
      icon: Users,
      title: "In-Person Consultation",
      description: "Visit our experience center or we'll come to your location to assess the space and discuss your requirements in detail.",
    },
    {
      icon: Video,
      title: "Virtual Consultation",
      description: "Connect with our designers via video call from the comfort of your home. Share photos and discuss your vision online.",
    },
    {
      icon: Calendar,
      title: "Site Visit",
      description: "Our team visits your property to take measurements, assess the space, and provide on-site design recommendations.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Book a Consultation"
        subtitle="Take the first step towards your dream home"
        backgroundImage={heroImage}
        height="min-h-[400px]"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4" data-testid="text-consultation-types-heading">
              Consultation Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the consultation format that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {consultationTypes.map((type) => (
              <Card key={type.title} className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-primary" data-testid={`icon-${type.title.toLowerCase().replace(/\s+/g, '-')}`} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3" data-testid={`text-type-title-${type.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {type.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-type-description-${type.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {type.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4" data-testid="text-booking-form-heading">
              Schedule Your Free Consultation
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will contact you within 24 hours to confirm your appointment
            </p>
          </div>
          <Card className="p-8">
            <BookingForm />
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-6 text-center" data-testid="text-what-to-expect-heading">
            What to Expect
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2" data-testid="text-step-1-title">1. Initial Discussion</h3>
              <p className="text-muted-foreground" data-testid="text-step-1-description">
                We'll discuss your vision, budget, timeline, and specific requirements for your project.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2" data-testid="text-step-2-title">2. Space Assessment</h3>
              <p className="text-muted-foreground" data-testid="text-step-2-description">
                Our designers will evaluate your space and provide preliminary design recommendations.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2" data-testid="text-step-3-title">3. Design Proposal</h3>
              <p className="text-muted-foreground" data-testid="text-step-3-description">
                Receive a detailed proposal with 3D visualizations, material samples, and cost estimates.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
