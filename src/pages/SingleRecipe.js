import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBookmark, faHeart} from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF, FaTwitter , FaTelegram} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";
import React, {useState} from "react";
import "../assets/Styles/index.css"

const SingleRecipe = () => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  

  return <div className="single">
    <div className="left" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400")' }}>
      <FontAwesomeIcon icon={faArrowLeft} style ={{color: "#ffffff", cursor: "pointer"}} />
      <div className="left-socials">
     <FaFacebookF/>
     <AiFillInstagram/>
     <FaTwitter/>
     <FaTelegram/>
     <CiMail/>
      </div>
    </div>
    <div className="right">
      <div className="right-header">
        <div className="right-name">
          <h2>Cheese Burger</h2>
          <div className="icons">
          <FontAwesomeIcon icon={faBookmark}/>
          <FontAwesomeIcon icon={faHeart} style={{marginLeft: "20", cursor: "pointer"}} />
          </div>
          
        </div>
        <div className="right-details">
          <h4>Serves: <span>2</span></h4>
          <h4>Time: <span>65 min</span></h4>
          <h4>Country: <span>Mexico</span></h4>
        </div>
        <div className="right-details-desc">
          <p>all connections to the npm registry - including for package installation - must use TLS 1.2 or higher. </p>
        </div>
        <div className="right-selectors">
          <p className="new">Ingredients</p>
          <p>Procedure</p>
        </div>
      </div>

      <div className="right-bottom">
        <div className="bottom one">
          <ul>
            <li> <p>2 pounds freshly ground chuck, (at least 80% lean, a.k.a. 80/20)</p></li>
            <li><p>1 tablespoon onion powder</p></li>
            <li><p>1 teaspoon salt</p></li>
            <li><p>1 teaspoon freshly ground black pepper</p></li>
            <li><p>12 slices deli-counter American cheese</p></li>
          </ul>
          <h5>To garnish</h5>
          <ul>
            <li><p>ketchup</p></li>
            <li><p>thousand island dressing</p></li>
            <li><p>mayonnaise</p></li>
            <li><p>sliced red onion</p></li>
            <li><p>sliced tomatoes</p></li>
            <li><p>sliced pickles</p></li>
            <li><p>fresh lettuce leaves</p></li>
          </ul>
        </div>
       
      </div>
    </div>
  </div>;
};

export default SingleRecipe;
