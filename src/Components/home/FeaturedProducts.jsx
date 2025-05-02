import React, { useContext } from "react";
import { Plus } from "lucide-react";
import { ProductsContext } from "../../Context/ProductsContent";

const FeaturedProducts = () => {
  const { products, loading } = useContext(ProductsContext);
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
          {loading ? (
            <div className="flex justify-center items-center h-86 w-86">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : (
            products.map((product, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <img
                  src={product.image}
                  alt="Product"
                  className="h-86 w-86 rounded-xl object-cover"
                />
                <div className="p-4">
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
