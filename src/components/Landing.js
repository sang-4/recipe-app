import React from "react"
import "./Landing.css"
import Hero from "./Hero"
import Middle from "./Middle"
import End from "./End"

function Landing() {
    return (
        <div className="landing">
            <Hero/>
            <Middle/>
            <End/>   
        </div>
    )
}

export default Landing