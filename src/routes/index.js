import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout 
import MainLayout from '../layouts/Main/index'

// pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import Recipe from "../pages/Recipe";
import Tutorials from "../pages/Tutorials";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Error from "../pages/Error";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
