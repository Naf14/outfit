import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Grid } from "lucide-react";

const categories = [
  { name: "T-Shirts", image: "/images/tshirt.png" },
  { name: "Jeans", image: "/images/jeans.png" },
  { name: "Jackets", image: "/images/jacket.png" },
];

const OutfitCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 to-black p-4">
      <Button variant="outline" className="mb-6 flex items-center gap-2 text-white">
        <Grid className="w-5 h-5" /> Categories
      </Button>
      <div className="relative w-full max-w-md">
        <Carousel className="w-full">
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Card className="p-6 bg-purple-800 text-white text-center rounded-xl shadow-lg">
                <CardContent className="flex flex-col items-center">
                  <img src={category.image} alt={category.name} className="w-40 h-40 object-cover" />
                  <h2 className="text-xl font-bold mt-4">{category.name}</h2>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </Carousel>
        <Button
          variant="ghost"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
        <Button
          variant="ghost"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white"
          onClick={handleNext}
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>
      <Button variant="secondary" className="mt-6">Select</Button>
    </div>
  );
};

export default OutfitCarousel;
