import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  testimonial: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  location,
  image,
  testimonial,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="p-8">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "fill-primary text-primary" : "text-muted"}
            data-testid={`icon-star-${i + 1}`}
          />
        ))}
      </div>
      <p className="font-accent text-lg text-muted-foreground mb-6 italic" data-testid="text-testimonial-quote">
        "{testimonial}"
      </p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
          data-testid="img-testimonial-avatar"
        />
        <div>
          <h4 className="font-semibold" data-testid="text-testimonial-name">{name}</h4>
          <p className="text-sm text-muted-foreground" data-testid="text-testimonial-location">{location}</p>
        </div>
      </div>
    </Card>
  );
}
