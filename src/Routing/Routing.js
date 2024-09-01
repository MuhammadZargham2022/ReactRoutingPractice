import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../modules/Home';
import Products from '../modules/Products';
import Services from '../modules/Services';
import Resources from '../modules/Resources';
import About from '../modules/About';
import Contact from '../modules/Contact';


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