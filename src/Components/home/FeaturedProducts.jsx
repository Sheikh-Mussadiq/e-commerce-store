import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
    },
  ];
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop"
                alt="Product"
                className="max-w-86 min-h-86 rounded-xl object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
