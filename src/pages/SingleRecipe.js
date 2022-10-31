import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";

// our api
const api = "http://localhost:5000/recipes";

const SingleRecipe = ({ recipe, loadRecipes }) => {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  // filter recipes
  const selectedRecipe = recipe.find((recip) => recip.id === Number(recipeId));

  // destructuring
  const {
    id,
    ingredients,
    foodname,
    image,
    total_time_string,
    servings,
    country,
    description,
  } = selectedRecipe;

  // link to the spoaecific url
  const shareUrl = `http://localhost:5000/recipe/${id}`;

  // ingredients
  let ingredientList = ingredients.map((ingredient, index) => (
    <li key={index}>
      <p>{ingredient}</p>
    </li>
  ));

  const handleDelete = async (id) => {
    if (window.confirm(`Are you sure want to delete "${foodname}"`)) {
      axios.delete(`${api}/${id}`);
      toast.success("Deleted Successfully");
      navigate("/recipe");
      setTimeout(() => loadRecipes(), 500);
    }
    toast.error("Be keen on what you want to delete");

  };

  const handleUpdate = () => {};

  return (
    <div className="single">
      <div
        className="left"
        style={{
          backgroundImage: `url(
            https://recipes.eerieemu.com${image}
          )`,
          height: "auto",
        }}
      >
        <Link to="/recipe">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "#ffffff", cursor: "pointer", fontSize: "40px" }}
          />
        </Link>
        <div className="left-socials">
          <div className="left-line"></div>
          <FacebookShareButton
            className="left-socials-icon"
            url={shareUrl}
            quote={foodname}
            hashtag={"#recipes"}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <TwitterShareButton className="left-socials-icon" url={shareUrl}>
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton className="left-socials-icon" url={shareUrl}>
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>

          <div className="left-line" style={{ marginTop: "0.6em" }}></div>
        </div>
      </div>
      <div className="right">
        <div className="right-header">
          <div className="d-flex align-items-center justify-content-between p-4">
            <div className="">
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "50rem",
                  height: "25px",
                  width: "25px",
                  padding: "5px",
                }}
                onClick={() => handleUpdate(id)}
              >
                <BsPencilSquare />
              </span>
            </div>
            <div className="">
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "50rem",
                  height: "25px",
                  width: "25px",
                  padding: "5px",
                }}
                onClick={() => handleDelete(id)}
              >
                <AiOutlineDelete />
              </span>
            </div>
          </div>
          <div className="right-name">
            <h2>{foodname}</h2>
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
      </div>
    </div>
  );
};

export default SingleRecipe;
