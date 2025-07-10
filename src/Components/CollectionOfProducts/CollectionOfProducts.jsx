import React, { useState, useMemo } from "react";
import CategoriesSelector from "./categoriesSelector";
import PriceRange from "./PriceRange";
import SearchBar from "./SearchBar";

const CollectionOfProducts = ({ products }) => {
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (selectedPriceRanges.length === 0) return products;

    return products.filter((product) => {
      return selectedPriceRanges.some(
        (range) => product.price >= range.min && product.price <= range.max
      );
    });
  }, [products, selectedPriceRanges]);

  const handlePriceRangeChange = (ranges) => {
    setSelectedPriceRanges(ranges);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Collection of Products</h1>

      <div className="flex gap-8">
        <div className="w-1/4">
          <CategoriesSelector />
          <div className="mt-6">
            <PriceRange onPriceRangeChange={handlePriceRangeChange} />
          </div>
        </div>

        <div className="w-3/4">
          <div className="mb-6">
            <SearchBar />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionOfProducts;
