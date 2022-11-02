import React from "react";
import "../assets/Styles/index.css";
import {
  faArrowRight,
  faBookmark,
  faHeart,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Dash({ user }) {
  const navigate = useNavigate();
  const avatars = [
    "https://t3.ftcdn.net/jpg/04/91/73/76/360_F_491737640_tzzQnoHBICFQmY5ZdBOicUHzQEyW0CDo.jpg",
    "https://img.favpng.com/4/6/8/corn-on-the-cob-maize-sweet-corn-cartoon-png-favpng-QaEd3CLgQhWnVzmV5LRKsn11b.jpg",
    "https://www.citypng.com/public/uploads/preview/cartoon-potato-character-holding-a-fries-cup-11646751276cbft8zfryd.png",
    "https://www.kindpng.com/picc/m/36-361215_object-redundancy-chicken-leg-clipart-png-download-animated.png",
  ];
  return (
    <div className="dash">
      <div className="grid one">
        <div class="one-content">
          <h1>Hello {user?.username}!</h1>
          <p>Let's cook :</p>
        </div>
      </div>
      <div className="grid two">
        <div className="grid-profile">
          <img
            alt="recipe_pic"
            src={avatars[Math.floor(Math.random() * avatars.length)]}
          />
          <h3 className="profile-name">{user?.username}</h3>
        </div>

        <div className="profile-details">
          <div className="detail posts">
            <h3>0</h3>
            <p>posts</p>
          </div>
          <div className="profile-line"></div>
          <div className="detail likes">
            <h3>0</h3>
            <p>likes</p>
          </div>
          <div className="profile-line"></div>
          <div className="detail saves">
            <h3>0</h3>
            <p>saves</p>
          </div>
        </div>

        <div className="posted">
          <h3>Your Posts</h3>
          <div className="single-post">
            <div className="single-post-image">
              <img
                alt="recipe_pic"
                src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className="single-post-details">
              <div className="post-name">
                <h4>Chocolate cake</h4>
              </div>
              <div className="post-icons">
                <FontAwesomeIcon icon={faHeart} />
                <p>0</p>
                <FontAwesomeIcon icon={faBookmark} />
                <p>0</p>
              </div>
            </div>
          </div>
          <div className="single-post">
            <div className="single-post-image">
              <img
                alt="recipe_pic"
                src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className="single-post-details">
              <div className="post-name">
                <h4>Chocolate cake mousse cake new p</h4>
              </div>
              <div className="post-icons">
                <FontAwesomeIcon icon={faHeart} />
                <p>0</p>
                <FontAwesomeIcon icon={faBookmark} />
                <p>0</p>
              </div>
            </div>
          </div>
          <div className="single-post">
            <div className="single-post-image">
              <img
                alt="recipe_pic"
                src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className="single-post-details">
              <div className="post-name">
                <h4>Chocolate cake</h4>
              </div>
              <div className="post-icons">
                <FontAwesomeIcon icon={faHeart} />
                <p>0</p>
                <FontAwesomeIcon icon={faBookmark} />
                <p>0</p>
              </div>
            </div>
          </div>
          <div className="post-more">
            <p>See more</p>
          </div>
        </div>

        <div className="grid-two-button">
          <span onClick={() => navigate("/addrecipe")}>
            <button>Post recipe</button>
          </span>
        </div>
      </div>
      <div className="grid three">
        <div className="liked-recipes">
          <div className="liked-recipes-name">
            <h3>Liked Recipes</h3>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="liked-recipes-images">
            <div className="recipe-one">
              <img
                alt="recipe_pic"
                src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="recipe-name-icon">
                <h4 className="recipe-name">pizza</h4>
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
            <div className="recipe-one">
              <img
                alt="recipe_pic"
                src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="recipe-name-icon">
                <h4 className="recipe-name">pizza</h4>
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
            <div className="recipe-one">
              <img
                alt="recipe_pic"
                src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="recipe-name-icon">
                <h4 className="recipe-name">pizza</h4>
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid four">
        <div className="liked-recipes">
          <div className="liked-recipes-name">
            <h3>Saved Recipes</h3>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="liked-recipes-images">
            <div className="recipe-one">
              <img
                alt="recipe_pic"
                src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="recipe-name-icon">
                <h4 className="recipe-name">pizza</h4>
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
            <div className="recipe-one">
              <img
                alt="recipe_pic"
                src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="recipe-name-icon">
                <h4 className="recipe-name">pizza</h4>
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
            <div className="recipe-one">
              <img
                alt="recipe_pic"
                src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="recipe-name-icon">
                <h4 className="recipe-name">pizza</h4>
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
