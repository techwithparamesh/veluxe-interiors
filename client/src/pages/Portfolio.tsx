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

  const categories = [
    "all",
    "Kitchen",
    "TV Unit",
    "Bedroom",
    "Pooja Mandir",
    "Living Room/Hall"
  ];

  const projects = [
    // Kitchen
    { title: "Kitchen 1", category: "Kitchen", image: "/images/portfolio/kitchen.jpg" },
    { title: "Kitchen 2", category: "Kitchen", image: "/images/portfolio/kitchen1.jpg" },
    { title: "Kitchen 3", category: "Kitchen", image: "/images/portfolio/kitchen3.jpg" },
    { title: "Kitchen 4", category: "Kitchen", image: "/images/portfolio/kitchen5.jpg" },
    { title: "Kitchen 5", category: "Kitchen", image: "/images/portfolio/kitchen6.jpg" },

    // TV Unit
    { title: "TV Unit 1", category: "TV Unit", image: "/images/portfolio/tv-unit.jpg" },
    { title: "TV Unit 2", category: "TV Unit", image: "/images/portfolio/tv-unit1.jpg" },
    { title: "TV Unit 3", category: "TV Unit", image: "/images/portfolio/tv-unit2.jpg" },
    { title: "TV Unit 4", category: "TV Unit", image: "/images/portfolio/tv-unit3.jpg" },
    { title: "TV Unit 5", category: "TV Unit", image: "/images/portfolio/tv-unit5.jpg" },

    // Bedroom
    { title: "Bedroom 1", category: "Bedroom", image: "/images/portfolio/bedroom11.jpg" },
    { title: "Bedroom 2", category: "Bedroom", image: "/images/portfolio/bedroom12.jpg" },
    { title: "Bedroom 3", category: "Bedroom", image: "/images/portfolio/bedroom16.jpg" },
    { title: "Bedroom 4", category: "Bedroom", image: "/images/portfolio/bedroom17.jpg" },
    { title: "Bedroom 5", category: "Bedroom", image: "/images/portfolio/bedroom18.jpg" },

    // Pooja Mandir
    { title: "Pooja Mandir 1", category: "Pooja Mandir", image: "/images/portfolio/pooja.jpg" },
    { title: "Pooja Mandir 2", category: "Pooja Mandir", image: "/images/portfolio/pooja1.jpg" },
    { title: "Pooja Mandir 3", category: "Pooja Mandir", image: "/images/portfolio/pooja2.jpg" },
    { title: "Pooja Mandir 4", category: "Pooja Mandir", image: "/images/portfolio/pooja3.jpg" },
    { title: "Pooja Mandir 5", category: "Pooja Mandir", image: "/images/portfolio/pooja4.jpg" },

    // Living Room/Hall
    { title: "Living Room 1", category: "Living Room/Hall", image: "/images/portfolio/living-room1.jpg" },
    { title: "Living Room 2", category: "Living Room/Hall", image: "/images/portfolio/living-room2.jpg" },
    { title: "Living Room 3", category: "Living Room/Hall", image: "/images/portfolio/living-room4.jpg" },

    // Dining (if you want to show as Living Room/Hall or separate)
    { title: "Dining 1", category: "Living Room/Hall", image: "/images/portfolio/dine.jpg" },
    { title: "Dining 2", category: "Living Room/Hall", image: "/images/portfolio/dine1.jpg" },
    { title: "Dining 3", category: "Living Room/Hall", image: "/images/portfolio/dine3.jpg" },
    { title: "Dining 4", category: "Living Room/Hall", image: "/images/portfolio/dine5.jpg" },
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
