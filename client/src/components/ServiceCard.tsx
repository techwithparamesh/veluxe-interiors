import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 group">
      <Link href={link}>
        <div className="aspect-[4/3] overflow-hidden cursor-pointer">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            data-testid={`img-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </div>
      </Link>
      <div className="p-6 border-t-4 border-primary">
        <h3 className="font-serif text-2xl font-bold mb-3" data-testid={`text-service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-4" data-testid={`text-service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        <Link href={link}>
          <Button
            variant="ghost"
            className="group/btn p-0 h-auto hover:bg-transparent"
            data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <span className="text-primary font-medium">Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
