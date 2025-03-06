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
  const [showCategories, setShowCategories] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-purple-900 to-black p-8 relative">
      <div
        className="absolute top-4 left-4 z-10"
        onMouseEnter={() => setShowCategories(true)}
        onMouseLeave={() => setShowCategories(false)}
      >
        <Button variant="outline" className="flex items-center gap-2 text-white bg-purple-700 hover:bg-purple-600 px-6 py-3 text-lg shadow-lg rounded-xl">
          <Grid className="w-6 h-6" /> Categories
        </Button>
        {showCategories && (
          <div className="absolute top-full mt-2 w-48 bg-white text-black p-3 rounded-xl shadow-lg">
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="p-3 hover:bg-gray-200 cursor-pointer rounded-lg">
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="relative w-full max-w-6xl h-screen flex items-center justify-center">
        <Carousel className="w-full h-full">
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Card className="w-full h-full flex items-center justify-center bg-purple-800 text-white text-center rounded-xl shadow-lg p-10">
                <CardContent className="flex flex-col items-center">
                  <img src={category.image} alt={category.name} className="w-96 h-96 object-cover" />
                  <h2 className="text-4xl font-bold mt-6">{category.name}</h2>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </Carousel>
        <Button
          variant="ghost"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-4 rounded-full"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-12 h-12" />
        </Button>
        <Button
          variant="ghost"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-4 rounded-full"
          onClick={handleNext}
        >
          <ChevronRight className="w-12 h-12" />
        </Button>
      </div>
      <Button variant="secondary" className="absolute bottom-10 px-8 py-4 text-xl shadow-lg rounded-xl">Select</Button>
    </div>
  );
};

export default OutfitCarousel;
