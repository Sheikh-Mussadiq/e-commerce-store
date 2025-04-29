import React from "react";
import { Plus } from "lucide-react";
import { products } from "../../MockData";

const FeaturedProducts = () => {
  console.log(products);
  return (
    <>
      <section
        id="featured-products"
        className="max-w-7xl mx-auto mt-10 mb-10 px-10"
      >
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Featured Products</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </header>
        <div className="flex flex-row flex-wrap gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop"
                alt="Product"
                className="h-86 w-86 rounded-xl object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500">{product.price}</p>
                  <button className="bg-black text-white px-4 py-2 rounded-full">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
