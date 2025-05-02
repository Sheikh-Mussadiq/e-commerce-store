import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/home/Hero";
import FeaturedProducts from "../Components/home/FeaturedProducts";
import RangeOfCategories from "../Components/home/RangeOfCategories";
import PopularProducts from "../Components/home/PopularProducts";
import Faqs from "../Components/home/Faqs";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <RangeOfCategories />
      <PopularProducts />
      <Faqs />
      <Footer />
    </div>
  );
};

export default HomePage;
