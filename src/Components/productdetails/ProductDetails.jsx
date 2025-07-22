import React, { useEffect } from "react";

const ProductDetails = ({ id, products, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!products) return <div>No products found</div>;

  useEffect(() => {
    console.log("ProductDetails:", id);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-40">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <img
                src={products.image}
                alt={products.title}
                className="w-full h-80 object-contain bg-gray-100 rounded-lg"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20">
                <img
                  src={products.image}
                  alt={products.title}
                  className="w-full h-full object-contain bg-gray-100 rounded-lg"
                />
              </div>
              <div className="w-20 h-20">
                <img
                  src={products.image}
                  alt={products.title}
                  className="w-full h-full object-contain bg-gray-100 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold mb-2">{products.title}</h1>
          <div className="flex items-center mb-4">
            <p className="text-xl font-bold text-gray-900">${products.price}</p>
            <div className="ml-2 flex items-center">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm text-gray-500 ml-1">
                ({products.rating?.count || 0} reviews)
              </span>
            </div>
          </div>
          <p className="text-gray-600 mb-6">{products.description}</p>

          <div className="mb-6">
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600">Category: {products.category}</li>
              <li className="text-gray-600">
                In stock: {products.rating?.count || "Available"}
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-1 text-lg">-</button>
              <span className="px-3 py-1">1</span>
              <button className="px-3 py-1 text-lg">+</button>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-md flex-grow">
              Add to Cart
            </button>
          </div>
          <button className="w-full bg-gray-100 text-black font-medium py-2 rounded-md mb-4">
            Buy Now
          </button>

          <div className="text-sm text-gray-500">
            <div className="flex items-center mb-2">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                ></path>
              </svg>
              Free standard shipping on all orders over $25
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Delivery in 3-7 working days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
