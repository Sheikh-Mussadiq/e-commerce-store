import React from "react";

const CollectionOfProducts = ({ products }) => {
  console.log("collectiion: ", products);
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">Collection of Products</h1>
    </div>
  );
};

export default CollectionOfProducts;
