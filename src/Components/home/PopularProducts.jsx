import React from "react";
import { products } from "../../MockData";
import { Plus } from "lucide-react";

const PopularProducts = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Most Popular Products
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-lg text-black">{product.price}</p>
                  <button className="bg-black text-white px-4 py-2 rounded-full">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
