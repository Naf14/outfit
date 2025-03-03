import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, ShoppingCart, CreditCard } from "lucide-react";

const VirtualTryOn = () => {
  const categories = ["Full Body", "Top Body", "Head", "Pants", "Foot"];
  const products = [
    { name: "Basic T-Shirt", price: "₹450", image: "/shirt.png", size: "M", color: "White" },
  ];
  const [currentProduct, setCurrentProduct] = useState(0);

  const nextProduct = () => setCurrentProduct((prev) => (prev + 1) % products.length);
  const prevProduct = () => setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="min-h-screen bg-[#0B0C3D] text-white flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">VIRTUAL TRY-ON</h1>
      
      {/* Category Selector */}
      <Tabs defaultValue="Top Body" className="mb-6">
        <TabsList className="flex gap-2 p-2 rounded-lg bg-white/10">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="text-white">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Try-On Viewer */}
      <Card className="bg-white/10 p-6 w-[400px] flex flex-col items-center rounded-xl relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={prevProduct}>
          <ArrowLeft size={24} />
        </div>
        <img src={products[currentProduct].image} alt="Product" className="w-48 mb-4" />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={nextProduct}>
          <ArrowRight size={24} />
        </div>
        
        {/* Product Info */}
        <CardContent className="text-center">
          <h2 className="text-xl font-bold">{products[currentProduct].name}</h2>
          <p className="text-lg text-gray-300">{products[currentProduct].price}</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="outline">Size: {products[currentProduct].size}</Button>
            <Button variant="outline">Color: {products[currentProduct].color}</Button>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Button className="bg-blue-500 flex items-center gap-2"><ShoppingCart size={16} /> Add To Cart</Button>
            <Button className="bg-green-500 flex items-center gap-2"><CreditCard size={16} /> Check Out</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VirtualTryOn;

