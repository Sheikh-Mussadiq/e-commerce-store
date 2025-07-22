import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductDetails from "../Components/productdetails/ProductDetails";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProducts(data);
        console.log("ProductDetailsPage:", data);
        // Handle the fetched products data here
      } catch (error) {
        setError(error);
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div>
      <Navbar />
      <ProductDetails
        id={id}
        products={products}
        loading={loading}
        error={error}
      />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
