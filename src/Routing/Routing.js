import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Services from '../Pages/Services';
import Resources from '../Pages/Resources';
import About from '../Pages/About';
import Contact from '../Pages/Contact';


function Routing() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/" element={<Products />} />
    <Route path="/services" element={<Services />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default Routing