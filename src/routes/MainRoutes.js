import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// layout
import MainLayout from "../layouts/Main/Index";

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
import EditProfile from "../pages/EditProfile";


// routes
import ProtectedRoute from "./ProtectedRoute";

// our api
const api = "http://localhost:3000/recipes";

const api2 = "http://127.0.0.1:3000/user";

const MainRoutes = () => {
  const [recipe, setRecipe] = useState([]);
  const [user, setUser] = useState(null);

  // call loadRecipes function
  useEffect(() => {
    loadRecipes();
  }, []);

  // fetch recipes from api
  const loadRecipes = async () => {
    const response = await axios.get(api);

    setRecipe(response.data);
  };

  useEffect(() => {
    fetch(api2).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    console.log(user);
  }, [user]);

  console.log("i am a ", user);

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
          <Route path="profile" element={<EditProfile />} />
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
