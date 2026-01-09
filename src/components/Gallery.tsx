import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "Všechny prostory" },
    { id: "main-studio", name: "Hlavní fotografické studio" },
    { id: "backdrop", name: "Opona" },
    { id: "equipment", name: "Vybavení" },
    { id: "lounge", name: "Zázemí" },
    { id: "kitchen", name: "Kuchyňka" },
    { id: "floorplan", name: "Půdorys" }
  ];

  // Studio photos showcasing the space
  const studioPhotos = [
    { id: 1, category: "main-studio", title: "Hlavní fotografické studio", type: "Studio prostor", image: "/lovable-uploads/17472854-1c1b-4479-a0a0-7d17159043a6.png" },
    { id: 2, category: "backdrop", title: "Opona", type: "Pozadí", image: "/lovable-uploads/67f3c55f-3436-4ec6-83af-86d82be920f6.png" },
    { id: 3, category: "equipment", title: "Vybavení", type: "Technika", image: "/lovable-uploads/c24cc692-1d03-4fb6-845e-2575ccef615d.png" },
    { id: 4, category: "lounge", title: "Zázemí", type: "Odpočinkový prostor", image: "/lovable-uploads/65e41134-cc60-424b-83cd-7ba112c3b3ca.png" },
    { id: 5, category: "kitchen", title: "Kuchyňka", type: "Občerstvení", image: "/lovable-uploads/edd97dff-dd78-475e-b5ac-bde8653bdf9e.png" },
    { id: 6, category: "floorplan", title: "Půdorys", type: "Dispozice studia", image: "/lovable-uploads/336b89ea-bd81-469c-8a19-69c1c1db7f63.png" },
  ];

  const filteredPhotos = activeFilter === "all" 
    ? studioPhotos 
    : studioPhotos.filter(photo => photo.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Naše <span className="text-studio-gold">galerie</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Podívejte se, jak vypadají naše studio prostory a vybavení.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={activeFilter === category.id 
                  ? "bg-studio-gold hover:bg-studio-gold/90 text-white" 
                  : "border-studio-gold text-studio-gold hover:bg-studio-gold hover:text-white"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <Card 
              key={photo.id} 
              className="group overflow-hidden border-0 bg-gradient-to-br from-studio-warm-gray to-white hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    photo.category === "lounge" ? "object-left" : 
                    photo.category === "kitchen" ? "object-left" : 
                    "object-center"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="bg-white/90 text-studio-charcoal">
                    {photo.type}
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-studio-gold transition-colors duration-300">
                  {photo.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;