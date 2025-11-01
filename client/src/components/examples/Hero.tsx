import Hero from '../Hero';
import heroImage from '@assets/generated_images/Hero_luxury_living_room_fc22130e.png';

export default function HeroExample() {
  return (
    <Hero
      title="Transform Your Space Into Luxury"
      subtitle="Expert interior design services crafted with precision and elegance"
      backgroundImage={heroImage}
      primaryCTA={{ text: "Get Started", href: "/book-consultation" }}
      secondaryCTA={{ text: "View Portfolio", href: "/portfolio" }}
    />
  );
}
