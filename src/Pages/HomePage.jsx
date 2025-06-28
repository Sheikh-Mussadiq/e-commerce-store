import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/home/Hero";
import FeaturedProducts from "../Components/home/FeaturedProducts";
import RangeOfCategories from "../Components/home/RangeOfCategories";
import PopularProducts from "../Components/home/PopularProducts";
import Faqs from "../Components/home/Faqs";
import Footer from "../Components/Footer";

const HomePage = () => {
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
        console.log("Fetched products:", data);
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
      <Hero />
      <FeaturedProducts products={products} loading={loading} error={error} />
      <RangeOfCategories products={products} loading={loading} error={error} />
      <PopularProducts products={products} loading={loading} />
      <Faqs />
      <Footer />
    </div>
  );
};

export default HomePage;
