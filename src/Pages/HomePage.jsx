import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/home/Hero";
import FeaturedProducts from "../Components/home/FeaturedProducts";
import RangeOfCategories from "../Components/home/RangeOfCategories";
import PopularProducts from "../Components/home/PopularProducts";
import Faqs from "../Components/home/Faqs";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <RangeOfCategories />
      <PopularProducts />
      <Faqs />
    </div>
  );
};

export default HomePage;
