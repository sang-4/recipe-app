import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Search from "../components/Search";


// our api
const api = "http://localhost:5000/recipes";

const Recipe = () => {
  // recipe state
  const [recipe, setRecipe] = useState([]);


  // search filter state
  const [searchRecipeInput, setSearchRecipeInput] = useState("");
  const [filteredRecipe, setFilteredRecipe] = useState([]);

  // function to truncate the words to the secified number
  const truncate = (str, no_of_words) => {
    return str.split(" ").splice(0, no_of_words).join(" ");
  };

  // search filter
  const searchItems = (searchValue) => {
    setSearchRecipeInput(searchValue);
    if (searchRecipeInput !== "") {
      const filteredRecipeData = recipe.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchRecipeInput.toLowerCase());
      });
      setFilteredRecipe(filteredRecipeData);
    } else {
      setFilteredRecipe(recipe);
    }
  };

  return (
    <div>
      <div className="row my-4">
        <div className="col-md-6 col-lg-8"></div>
        <div className="col-md-6 col-lg-4">
          <Search searchItems={searchItems} />
        </div>
      </div>
      <hr />
      <div className="row card__recipe ">
        {searchRecipeInput.length > 1
          ? filteredRecipe.map(({ id, foodname, description, image }) => (
              <>
                <div className="col-sm-6 col-md-4 col-lg-3" key={id}>
                  <div className="">
                    <Card className="card_container">
                      <Link to={`/recipe/${id}`} className="recipe__link">
                        <Card.Img variant="top" src={`https://recipes.eerieemu.com${image}`} />
                        <Card.Body>
                          <Card.Title className="recipe__title">
                            {foodname}
                          </Card.Title>
                          <Card.Text className="recipe__description">
                            {truncate(description, 30)}...
                          </Card.Text>
                        </Card.Body>

                        <Card.Body>
                          <Link to={`/recipe/${id}`} className="see__more">
                            See more 👀
                          </Link>
                        </Card.Body>
                      </Link>
                    </Card>
                  </div>
                </div>
              </>
            ))
          : recipe.map(({ id, foodname, description, image }) => (
              <>
                <div className="col-sm-6 col-md-4 col-lg-3" key={id}>
                  <div className="">
                    <Card className="card_container">
                      <Link to={`/recipe/${id}`} className="recipe__link">
                        <Card.Img variant="top" src={`https://recipes.eerieemu.com${image}`} />
                        <Card.Body>
                          <Card.Title className="recipe__title">
                            {foodname}
                          </Card.Title>
                          <Card.Text className="recipe__description">
                            {truncate(description, 30)}...
                          </Card.Text>
                        </Card.Body>

                        <Card.Body>
                          <Link to={`/recipe/${id}`} className="see__more">
                            See more 👀
                          </Link>
                        </Card.Body>
                      </Link>
                    </Card>
                  </div>
                </div>
              </>
            ))}
      </div>
    </div>
  );
};

export default Recipe;
