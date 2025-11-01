import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
}

export default function PortfolioCard({ title, category, image, onClick }: PortfolioCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate transition-all duration-300 group cursor-pointer"
      onClick={onClick}
      data-testid={`card-portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="font-serif text-xl font-bold text-white mb-2" data-testid={`text-portfolio-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {title}
            </h3>
            <Badge variant="secondary" className="bg-primary/90 text-white" data-testid={`badge-portfolio-category-${category.toLowerCase()}`}>
              {category}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
