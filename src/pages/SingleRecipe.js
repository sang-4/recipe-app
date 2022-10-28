import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import "../assets/Styles/index.css"

const SingleRecipe = () => {
  return <div className="single">
    <div className="left" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400")' }}>
      <FontAwesomeIcon icon={faArrowLeft} style ={{color: "#ffffff", cursor: "pointer"}} />
    </div>
    <div className="right">
      <div className="right-header">
        <div className="right-name">
          <h2>Cheese Burger</h2>
          <div className="icons">
          <FontAwesomeIcon icon={faBookmark}/>
          <FontAwesomeIcon icon={faHeart} style={{marginLeft: "20"}}/>
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
            <li> 2 pounds freshly ground chuck, (at least 80% lean, a.k.a. 80/20)</li>
            <li>1 tablespoon onion powder</li>
            <li>1 teaspoon salt</li>
            <li>1 teaspoon freshly ground black pepper</li>
            <li>12 slices deli-counter American cheese</li>
          </ul>
          <h3>To garnish</h3>
          <ul>
            <li>ketchup</li>
            <li>thousand island dressing</li>
            <li>mayonnaise</li>
            <li>sliced red onion</li>
            <li>sliced tomatoes</li>
            <li>sliced pickles</li>
            <li>fresh lettuce leaves</li>
          </ul>
        </div>
       
      </div>
    </div>
  </div>;
};

export default SingleRecipe;
