import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import axios from "axios";

// our api
const api = "http://localhost:5000/recipes";

// initial data state
const initialState = {
  foodname: "",
  description: "",
  ingredients: "",
  country: "",
  servings: "",
  rating: "",
  instructions: "",
  image: "",
};

const AddRecipe = ({ loadRecipes }) => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState(initialState);

  const {
    foodname,
    description,
    ingredients,
    country,
    servings,
    rating,
    image,
    instructions,
  } = inputs;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !foodname ||
      !description ||
      !ingredients ||
      !country ||
      !servings ||
      !rating ||
      !image ||
      !instructions
    ) {
      toast.error("please fill all input fields");
    } else {
      // post recipe to our api endpoint
      axios.post(api, inputs);

      // show success message after post to the db
      toast.success("Added successfully");

      // restore input fields to default
      setInputs(initialState);

      // navigate back to homepage
      navigate("/recipe");

      // call recipe render function
      setTimeout(() => loadRecipes(), 500);
    }
  };

  return (
    <Container className="AddRecipe">
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="foodname"
          placeholder="name:"
          value={foodname}
          onChange={handleChange}
        />
        <br />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          placeholder="full description:"
          value={description}
          onChange={handleChange}
        />
        <br />
        <label>Ingredients:</label>
        <input
          type="text"
          name="ingredients"
          value={ingredients}
          placeholder="onions, ginger, eggs,..."
          onChange={handleChange}
        />

        <br />
        <label>Write your procedure instructions:</label>
        <textarea
          type="text"
          name="instructions"
          placeholder="write your instructions:"
          value={instructions}
          onChange={handleChange}
        />

        <div className="short">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={country}
            placeholder="country"
            onChange={handleChange}
          />
          <br />
          <label>servings:</label>
          <input
            type="number"
            name="servings"
            value={servings}
            placeholder="2"
            onChange={handleChange}
          />

          <br />

          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={rating}
            placeholder="0 - 10"
            onChange={handleChange}
          />
          <br />

          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={image}
            placeholder="Paste image url/link"
            onChange={handleChange}
          />
        </div>
      </form>
      <Button variant="contained" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default AddRecipe;
