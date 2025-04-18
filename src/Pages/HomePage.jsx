import React from "react";
import Navbar from "../Components/home/Navbar";
import Hero from "../Components/home/Hero";
import FeaturedProducts from "../Components/home/FeaturedProducts";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
