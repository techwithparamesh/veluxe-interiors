import PortfolioCard from '../PortfolioCard';
import portfolioImage from '@assets/generated_images/Portfolio_modern_apartment_b45b9e03.png';

export default function PortfolioCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <PortfolioCard
        title="Modern Luxury Apartment"
        category="Living Room"
        image={portfolioImage}
        onClick={() => console.log('Portfolio item clicked')}
      />
    </div>
  );
}
