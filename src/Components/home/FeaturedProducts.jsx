import React, { useMemo } from "react";
import { Plus } from "lucide-react";

const FeaturedProducts = ({ products, loading }) => {
  const featuredProducts = useMemo(() => {
    if (!products.length) return [];

    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];

    const selectedProducts = categories.map((category) => {
      return products.find((product) => product.category === category);
    });

    return selectedProducts.slice(0, 4);
  }, [products]);
  return (
    <>
      <section
        id="featured-products"
        className="max-w-[1440px] mx-auto mt-10 mb-10 px-10"
      >
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Featured Products</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-96">
          {loading ? (
            <div className="flex justify-center items-center h-86 w-86">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            featuredProducts.map((product) => (
              <div
                key={product.id || `product-${Math.random()}`}
                className="bg-white overflow-hidden rounded-xl"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-xl object-contain bg-gray-200 h-full"
                />
                <div className="p-4 mt-4">
                  <h2 className="text-lg font-bold">{product.title}</h2>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500">{product.price}</p>
                    <button className="bg-black text-white px-4 py-2 rounded-full">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
