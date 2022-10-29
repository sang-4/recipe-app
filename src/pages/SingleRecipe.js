import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBookmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const SingleRecipe = ({ recipe }) => {
  const { recipeId } = useParams();

  // filter recipes 
  const selectedRecipe = recipe.find((recip) => recip.id === Number(recipeId));
 
  // destructuring
  const {
    ingredients,
    name,
    image_path,
    total_time_string,
    servings,
    country,
    description,
  } = selectedRecipe;

  // ingredients 
  let ingredientList = ingredients.map((ingredient) => (
    <li>
      <p>{ingredient}</p>
    </li>
  ));

  return (
    <div className="single">
      <div
        className="left"
        style={{
          backgroundImage: `url(
            https://recipes.eerieemu.com${image_path}
          )`,
        }}
      >
        <Link to="/recipe">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "#ffffff", cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="right">
        <div className="right-header">
          <div className="right-name">
            <h2>{name}</h2>
            <div className="icons">
              <FontAwesomeIcon icon={faBookmark} />
              <FontAwesomeIcon icon={faHeart} style={{ marginLeft: "20" }} />
            </div>
          </div>
          <div className="right-details">
            <h4>
              Serves: <span>{servings}</span>
            </h4>
            <h4>
              Time: <span>{total_time_string}</span>
            </h4>
            <h4>
              Country: <span>{country}</span>
            </h4>
          </div>
          <div className="right-details-desc">
            <p>{description}</p>
          </div>
          <div className="right-selectors">
            <p className="new">Ingredients</p>
            <Link to="/procedure" >Procedure</Link>
          </div>
        </div>

        <div className="right-bottom">
          <div className="bottom one">
            <ul>{ingredientList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
