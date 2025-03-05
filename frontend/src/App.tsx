import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
<<<<<<< HEAD:frontend/src/App.jsx
import { ArrowLeft, ArrowRight, ShoppingCart, CreditCard, ChevronDown } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
=======
import { ArrowLeft, ArrowRight, ShoppingCart, CreditCard } from "lucide-react";
import React from "react";
>>>>>>> 03f8aa383df0517a4cabfa8ed28ca6d6209116a8:frontend/src/App.tsx

const App = () => {
  const categories = ["Full Body", "Top Body", "Head", "Pants", "Foot"];
  const products = [
    { id: "product-1", name: "Basic T-Shirt", price: "₹450", image: "/shirt.png", sizes: ["XS", "S", "M", "L", "XL", "XXL"], colors: ["White", "Black", "Blue"] },
  ];
  const [currentProduct, setCurrentProduct] = useState(0);
  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState(products[0].sizes[2]);
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0]);

  const nextProduct = () => setCurrentProduct((prev) => (prev + 1) % products.length);
  const prevProduct = () => setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);

  const addToCart = () => {
    setCart([...cart, { ...products[currentProduct], size: selectedSize, color: selectedColor }]);
  };

  return (
    <div id="virtual-tryon-container" className="min-h-screen bg-[#0B0C3D] text-white flex flex-col items-center p-6">
      
      <h1 id="virtual-tryon-header" className="text-2xl font-bold mb-4">VIRTUAL TRY-ON</h1>
      
      
      <Tabs id="category-tabs" defaultValue="Top Body" className="mb-6">
        <TabsList id="category-tabs-list" className="flex gap-2 p-2 rounded-lg bg-white/10">
          {categories.map((category) => (
            <TabsTrigger key={category} id={`category-${category.toLowerCase().replace(' ', '-')}`} value={category} className="text-white">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      
      <Card id="product-viewer" className="bg-white/10 p-6 w-[400px] flex flex-col items-center rounded-xl relative">
        <div id="prev-product" className="absolute left-6 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={prevProduct}>
          <ArrowLeft size={32} />
        </div>
        <img id="product-image" src={products[currentProduct].image} alt="Product" className="w-48 mb-4" />
        <div id="next-product" className="absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={nextProduct}>
          <ArrowRight size={32} />
        </div>
        
        <CardContent id="product-info" className="text-center">
          <h2 id="product-name" className="text-xl font-bold">{products[currentProduct].name}</h2>
          <p id="product-price" className="text-lg text-gray-300">{products[currentProduct].price}</p>
          
          
          <Select id="size-dropdown" onValueChange={setSelectedSize} defaultValue={selectedSize}>
            <SelectTrigger id="size-trigger" className="mt-4 bg-white/20 text-white flex items-center">
              <SelectValue placeholder="Select Size" />
              <ChevronDown className="ml-2" />
            </SelectTrigger>
            <SelectContent id="size-options" className="bg-white text-black">
              {products[currentProduct].sizes.map((size) => (
                <SelectItem key={size} id={`size-${size.toLowerCase()}`} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          
          <Select id="color-dropdown" onValueChange={setSelectedColor} defaultValue={selectedColor}>
            <SelectTrigger id="color-trigger" className="mt-4 bg-white/20 text-white flex items-center">
              <SelectValue placeholder="Select Color" />
              <ChevronDown className="ml-2" />
            </SelectTrigger>
            <SelectContent id="color-options" className="bg-white text-black">
              {products[currentProduct].colors.map((color) => (
                <SelectItem key={color} id={`color-${color.toLowerCase()}`} value={color}>{color}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          
          <div id="action-buttons" className="flex gap-4 mt-6">
            <Button id="add-to-cart" onClick={addToCart} className="bg-blue-500 flex items-center gap-2">
              <ShoppingCart size={16} /> Add To Cart
            </Button>
            <Button id="checkout" className="bg-green-500 flex items-center gap-2">
              <CreditCard size={16} /> Check Out
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
