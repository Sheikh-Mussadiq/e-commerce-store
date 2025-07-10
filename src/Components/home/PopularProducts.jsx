import React from "react";
import { ArrowRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PopularProducts = ({ products, loading }) => {
  const popularProducts = products.sort(
    (a, b) => b.rating.count - a.rating.count
  );
  console.log(popularProducts);
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-[1440px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Most Popular Products
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/products")}
              className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
            >
              View All <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            <div className="flex justify-center items-center h-86 w-86">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            popularProducts.slice(0, 8).map((product) => (
              <div
                key={product.id || `product-${Math.random()}`}
                className="overflow-hidden rounded-lg"
              >
                <div className="h-60 bg-gray-200 rounded-xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-black">
                    {product.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-lg text-black">{product.price}</p>
                    <button className="bg-black text-white px-4 py-2 rounded-full">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
