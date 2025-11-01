import ServiceCard from '../ServiceCard';
import kitchenImage from '@assets/generated_images/Modular_kitchen_showcase_1a562f6f.png';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        title="Modular Kitchen"
        description="Contemporary kitchen designs that blend functionality with aesthetic appeal, featuring premium materials and smart storage solutions."
        image={kitchenImage}
        link="/modular-kitchen"
      />
    </div>
  );
}
