import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

export default function ProcessStep({ icon: Icon, title, description, step }: ProcessStepProps) {
  return (
    <Card className="p-8 text-center relative">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
        <span className="text-white text-sm font-bold" data-testid={`text-step-number-${step}`}>{step}</span>
      </div>
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-primary" data-testid={`icon-step-${step}`} />
      </div>
      <h3 className="font-serif text-xl font-bold mb-3" data-testid={`text-step-title-${step}`}>{title}</h3>
      <p className="text-muted-foreground" data-testid={`text-step-description-${step}`}>{description}</p>
    </Card>
  );
}
