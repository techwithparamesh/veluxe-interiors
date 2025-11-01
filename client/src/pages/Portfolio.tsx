import { useState } from "react";
import Hero from "@/components/Hero";
import PortfolioCard from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import heroImage from '@assets/generated_images/Portfolio_luxury_bathroom_496d06de.png';
import image1 from '@assets/generated_images/Portfolio_modern_apartment_b45b9e03.png';
import image2 from '@assets/generated_images/Portfolio_dining_room_67faebd9.png';
import image3 from '@assets/generated_images/Portfolio_home_office_8bc17bef.png';
import image4 from '@assets/generated_images/Modular_kitchen_showcase_1a562f6f.png';
import image5 from '@assets/generated_images/Luxury_wardrobe_design_e3a8830a.png';
import image6 from '@assets/generated_images/Master_bedroom_luxury_23d563b4.png';
import image7 from '@assets/generated_images/Hero_luxury_living_room_fc22130e.png';
import image8 from '@assets/generated_images/Portfolio_luxury_bathroom_496d06de.png';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Kitchen", "Wardrobe", "Living Room", "Bedroom", "Bathroom"];

  const projects = [
    { title: "Contemporary Kitchen Design", category: "Kitchen", image: image4 },
    { title: "Modern Living Space", category: "Living Room", image: image1 },
    { title: "Elegant Dining Room", category: "Living Room", image: image2 },
    { title: "Executive Home Office", category: "Living Room", image: image3 },
    { title: "Luxury Walk-in Closet", category: "Wardrobe", image: image5 },
    { title: "Master Bedroom Suite", category: "Bedroom", image: image6 },
    { title: "Sophisticated Living Area", category: "Living Room", image: image7 },
    { title: "Spa-Inspired Bathroom", category: "Bathroom", image: image8 },
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Hero
        title="Our Portfolio"
        subtitle="Explore our collection of beautifully designed spaces"
        backgroundImage={heroImage}
        height="min-h-[400px]"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category === "all" ? "All Projects" : category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.title}
                title={project.title}
                category={project.category}
                image={project.image}
                onClick={() => console.log(`Viewing ${project.title}`)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground" data-testid="text-no-projects">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
