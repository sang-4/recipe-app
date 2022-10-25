import React from "react"
import pan from "../assets/Images/pan-spray.png"


function Hero(){
    return(
        <div className="hero">
                <div className="hero-text">
                    <div className="text">
                        <h1>Cooks'</h1>
                        <h1>Creations</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="buttons">
                            <button className="btn-get">Get recipe</button>
                            <button className="btn-add">Add recipe</button>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-sect">
                        <div className="hero-blob"></div>
                        <div className="image-sect image">
                            <img src={pan} alt="pan-spray"/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Hero