import React from "react";
import Navbar from "./Component/Navbar/navbar";
import Footer from "./Component/Footer/Footer";
import ControlledCarousel from "./Component/Collection/Collection_slider";
import Searchbar from "./Component/Searchbar/Search";
import Product from "./Component/Products/Product";
import Freshfood from "./Component/Freshfood/freshfood";
import NewsProducts from "./Component/NewsProducts/NewsProducts";
import Home from "./Component/home/Home";
import Singleproducts from "./Component/singleProducts/Singleproducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/controlled-carousel"
            element={<ControlledCarousel />}
          />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/freshfood" element={<Freshfood />} />
          <Route exact path="/news-products" element={<NewsProducts />} />
          <Route exact path="/single-products" element={<Singleproducts />} />
          <Route exact path="/footer" element={<Footer />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
