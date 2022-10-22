import React from "react"
import "./End.css"
import EndButton from "./EndButton"
import EndContact from "./EndContact"
import Footer from "./Footer"

function End() {
    return (
        <div className="end">
            <div className="end-container">
                <h2>Start Your Journey</h2>
                <EndButton />
                <EndContact />
                <Footer/>
            </div>
        </div>
    )
}

export default End 