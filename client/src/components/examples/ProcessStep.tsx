import ProcessStep from '../ProcessStep';
import { MessageSquare } from 'lucide-react';

export default function ProcessStepExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProcessStep
        icon={MessageSquare}
        title="Consultation"
        description="We begin with understanding your vision, requirements, and budget through a detailed consultation."
        step={1}
      />
    </div>
  );
}
