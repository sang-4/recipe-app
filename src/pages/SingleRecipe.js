import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBookmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SingleRecipe = ({ recipe }) => {
  const { recipeId } = useParams();

  // filter recipes
  const selectedRecipe = recipe.find((recip) => recip.id === Number(recipeId));

  // destructuring
  const {
    id,
    ingredients,
    name,
    image_path,
    total_time_string,
    servings,
    country,
    description,
  } = selectedRecipe;

  // link to the spoaecific url 
  const shareUrl = `http://localhost:5000/recipe/${id}`;

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
            <p>Procedure</p>
          </div>
        </div>
        <div className="right-bottom">
          <div className="bottom one">
            <ul>{ingredientList}</ul>
          </div>
        </div>
        <div className="d-flex gap-4 align-items-center">
          <h4 className="ms-4">Share Recipe</h4>
          <div className="">
            <FacebookShareButton
              url={shareUrl}
              quote={name}
              hashtag={"#recipes"}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
          </div>
          <div className="">
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
          </div>
          <div className="">
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
