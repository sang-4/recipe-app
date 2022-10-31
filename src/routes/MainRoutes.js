import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// layout
import MainLayout from "../layouts/Main/index";

// pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import Recipe from "../pages/Recipe";
import Tutorials from "../pages/Tutorials";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Error from "../pages/Error";
import SingleRecipe from "../pages/SingleRecipe";
import AddRecipe from "../pages/AddRecipe";
import Procedure from "../pages/Procedure";
import Dash from "../pages/Dash";

// routes
import ProtectedRoute from "./ProtectedRoute";

// our api
const api = "http://localhost:5000/recipes";

const MainRoutes = () => {
  const [recipe, setRecipe] = useState([]);
  const [user, setUser] = useState("");

  // call loadRecipes function
  useEffect(() => {
    loadRecipes();
  }, []);

  // fetch recipes from api
  const loadRecipes = async () => {
    const response = await axios.get(api);

    setRecipe(response.data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="recipe" element={<Recipe recipe={recipe} />} />
          <Route
            path="recipe/:recipeId"
            element={<SingleRecipe loadRecipes={loadRecipes} recipe={recipe} />}
          />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login setUser={setUser} />} />

          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dash user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="addrecipe"
            element={<AddRecipe loadRecipes={loadRecipes} />}
          />
          <Route path="procedure" element={<Procedure recipe={recipe} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
