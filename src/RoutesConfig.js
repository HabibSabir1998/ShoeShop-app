import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import ProductItem from "./Components/ProductItem";
import NavBar from "./Components/NavBar";

function RouteConfig() {
  
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductItem />} />
          <Route path="*" element={() => <h2>404 Not Found</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouteConfig;
