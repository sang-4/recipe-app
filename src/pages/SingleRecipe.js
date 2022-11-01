import React, { useState } from "react";
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
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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

const SingleRecipe = ({ recipe, loadRecipes }) => {
  const [inputs, setInputs] = useState(initialState);

  const [show, setAddRecipeShow] = useState(false);

  const handleAddRecipeClose = () => setAddRecipeShow(false);
  const handleAddRecipeShow = () => setAddRecipeShow(true);

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
    rating,
    instructions,
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
    } else {
      toast.error("Be keen on what you want to delete");
    }
  };

  const handleUpdate = () => {};

  const handleChange = (e) => {
    let { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="single">
      <div
        className="left"
        style={{
          backgroundImage: `url(
            ${image}
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
            <div className="" onClick={handleAddRecipeShow}>
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

      {/* add recipe modal */}
      <>
        <Modal
          show={show}
          onHide={handleAddRecipeClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="AddRecipe">
              <form>
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
                <Button className="btn btn-primary border m-4" variant="contained" type="submit">
                  Update
                </Button>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default SingleRecipe;
