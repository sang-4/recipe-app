import React from "react"
import "./End.css"
import EndButton from "./EndButton"
import EndContact from "./EndContact"

function End() {
    return (
        <div className="end">
            <div className="end-container">
                <h2>Start Your Journey</h2>
                <EndButton />
                <EndContact />
            </div>
        </div>

    )
}

export default End 