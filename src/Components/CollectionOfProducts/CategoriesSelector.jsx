import React, { useEffect, useState } from "react";

const CategoriesSelector = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log("Selected Category:", category);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`
        );
        const data = await response.json();
        setCategories(data);
        console.log("Categories:", data);
        // Handle the fetched products data here
      } catch (error) {
        setError(error);
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <aside className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-4 h-fit w-full">
        <h2 className="text-2xl font-bold">Categories</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          categories.map((category) => (
            <div key={category}>
              <button
                className="bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-800"
                onClick={() => handleCategoryClick(category)}
                disabled={selectedCategory === category}
              >
                {category}
              </button>
            </div>
          ))
        )}
      </aside>
    </>
  );
};

export default CategoriesSelector;
