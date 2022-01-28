import React from "react";
import ControlledCarousel from "../Collection/Collection_slider";
import Freshfood from "../Freshfood/freshfood";
import ImageSlider from "../ImageSlider/Slider";
import Navigation from "../Navbar2/navbar2";
import NewsProducts from "../NewsProducts/NewsProducts";
import OriginalLemon from "../Original Lemon/OriginalLemon";
import Product from "../Products/Product";

const Home = () => {
  return (
    <>
      <Navigation />
      <ControlledCarousel />
      <ImageSlider />
      <Product />
      <Freshfood />
      <NewsProducts />
      <OriginalLemon />
    </>
  );
};

export default Home;
