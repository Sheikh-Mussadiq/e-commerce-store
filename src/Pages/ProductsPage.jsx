import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CollectionOfProducts from "../Components/CollectionOfProducts/CollectionOfProducts";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log("ProductsPage:", data);
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
    <div>
      <Navbar />
      <CollectionOfProducts products={products} />
      <Footer />
    </div>
  );
};

export default ProductPage;
