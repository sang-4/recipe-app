import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
import axios from "axios";

// our api
const api = "http://localhost:3000/recipes";

// initial data state
const initialState = {
  foodname: "",
  description: "",
  ingredients: "",
  country: "",
  people: "",
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

  const handleChange1 = (e) => {
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
          onChange={handleChange1}
        />
        <br />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          placeholder="full description:"
          value={description}
          onChange={handleChange1}
        />
        <br />
        <label>Ingredients:</label>
        <input
          type="text"
          name="ingredients"
          value={ingredients}
          placeholder="onions, ginger, eggs,..."
          onChange={handleChange1}
        />

        <br />
        <label>Procedure:</label>
        <textarea
          type="text"
          name="instructions"
          placeholder="write your Procedure:"
          value={instructions}
          onChange={handleChange1}
        />

        <div className="short">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={country}
            placeholder="country"
            onChange={handleChange1}
          />
          <br />
          <label>People:</label>
          <input
            type="number"
            name="servings"
            value={servings}
            placeholder="2"
            onChange={handleChange1}
          />

          <br />

          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={rating}
            placeholder="0 - 10"
            onChange={handleChange1}
          />
          <br />

          <label>Images:</label>
          <input
            type="file"
            name="image"
            value={image}
            placeholder="0 - 10"
            onChange={handleChange1}
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
