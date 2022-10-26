import React from "react";
import pan from "../assets/Images/pan-spray-new.png";

function Hero() {
  return (
    <div className="hero row">
      <div className="hero-text col-md-6">
        <div className="text mt-5">
          <h1>Cooks'</h1>
          <h1>Creations</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="buttons">
            <button className="btn-get">Get recipe</button>
            <button className="btn-add">Add recipe</button>
          </div>
        </div>
      </div>
      <div className="hero-image col-md-6">
        <div className="image-sect">
          <div className="hero-blob"></div>
          <div className="image-sect image">
            <img src={pan} alt="pan-spray" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
