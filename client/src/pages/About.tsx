import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Award, Users, Target, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from '@assets/generated_images/Portfolio_home_office_8bc17bef.png';

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000; // 2 seconds animation

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, isVisible]);

  return <>{count}{suffix}</>;
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering superior quality in every project we undertake.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to bring their vision to life.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail in design and execution.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by our love for creating beautiful, functional spaces.",
    },
  ];

  const stats = [
    { number: 20, label: "Projects Completed", suffix: "+" },
    { number: 5, label: "Years Experience", suffix: "+" },
    { number: 98, label: "Client Satisfaction", suffix: "%" },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="About Veluxe Interiors"
        subtitle="Creating exceptional living spaces that inspire and delight"
        backgroundImage={heroImage}
        height="min-h-[400px]"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6 text-center" data-testid="text-our-story-heading">
            Our Story
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p data-testid="text-story-paragraph-1">
              Founded in 2020, Veluxe Interiors has been at the forefront of luxury interior design in India. Our journey began with a simple mission: to transform ordinary spaces into extraordinary experiences.
            </p>
            <p data-testid="text-story-paragraph-2">
              With over 5 years of expertise, we've successfully completed more than 20 projects across residential and commercial spaces. Our team of skilled designers and craftsmen work together to deliver interiors that reflect your personality while incorporating the latest design trends.
            </p>
            <p data-testid="text-story-paragraph-3">
              At Veluxe, we believe that great design is not just about aesthetics—it's about creating spaces that enhance your lifestyle, productivity, and well-being. Every project is approached with fresh perspective, innovative solutions, and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto" ref={statsRef}>
          <h2 className="font-serif text-4xl font-bold mb-16 text-center" data-testid="text-achievements-heading">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-5xl font-bold text-primary mb-2" data-testid={`text-stat-number-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <AnimatedCounter 
                    target={stat.number} 
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </div>
                <div className="text-muted-foreground" data-testid={`text-stat-label-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-16 text-center" data-testid="text-values-heading">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" data-testid={`icon-value-${value.title.toLowerCase()}`} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3" data-testid={`text-value-title-${value.title.toLowerCase()}`}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-value-description-${value.title.toLowerCase()}`}>
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
