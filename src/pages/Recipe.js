import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// our api
const api = "";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);

  // call loadRecipes function 
  useEffect(() => {
    loadRecipes();
  }, []);

  // fetch recipes from api 
  const loadRecipes = async () => {
    const response = await axios.get(api);

    setRecipe(response.data);
  };

  // function to truncate the words to the secified number 
  const truncate = (str, no_of_words) => {
    return str.split(" ").splice(0, no_of_words).join(" ");
  };

  return (
    <div>
      <div className="row card__recipe ">
        {recipe.map(({ id, name, description, image_path }) => (
          <>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="">
                <Card className="card_container">
                  <Link to={`/recipe/${id}`} className="recipe__link">
                    <Card.Img
                      variant="top"
                      src={`https://recipes.eerieemu.com${image_path}`}
                    />
                    <Card.Body>
                      <Card.Title className="recipe__title">
                        {name}
                      </Card.Title>
                      <Card.Text className="recipe__description">
                        {truncate(description, 30)}...
                      </Card.Text>
                    </Card.Body>

                    <Card.Body>
                      <Link to={`/recipe/${id}`} className="see__more">See more 👀</Link>
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
