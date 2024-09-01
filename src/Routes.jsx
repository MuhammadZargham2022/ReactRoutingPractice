import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./modules/Home";
import Products from "./modules/Products";
import Services from "./modules/Services";

const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="services" element={<Services />} />
          {/* <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default Routess;
