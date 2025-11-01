import TestimonialCard from '../TestimonialCard';
import clientImage from '@assets/generated_images/Client_testimonial_portrait_female_5b47373d.png';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-2xl">
      <TestimonialCard
        name="Priya Sharma"
        location="Mumbai, India"
        image={clientImage}
        testimonial="Veluxe Interiors transformed our home beyond our expectations. The attention to detail and quality of work is exceptional. Highly recommended!"
        rating={5}
      />
    </div>
  );
}
