import React from "react"
import "./End.css"
import EndButton from "./EndButton"

function End(){
    return(
        <div className="end">
                <div className="end-container">
                    <h2>Start Your Journey</h2>
                   <EndButton/>
                    <div className="end-contact">
                        <div className="contact-one">
                            <p className="contact-head">Cooks' Creations</p>
                        </div>
                        <div className="contact-two">
                            <p className="contact-head">Extras</p>
                            <p style={{ cursor: "pointer" }}>Our Products</p>
                            <p style={{ cursor: "pointer" }}>News</p>
                            <p style={{ cursor: "pointer" }}>Blog</p>
                            <p style={{ cursor: "pointer" }}>Join Us</p>
                        </div>
                        <div className="contact-three">
                            <p className="contact-head">Contacts</p>
                            <p>Address: 21070, 00100</p>
                            <p>Tel: +254799820376</p>
                            <p>Email: Recipe@gmail.com</p>
                        </div>
                        <div className="contact-four">
                            <p className="contact-head">Subscription</p>
                            <form>
                                <input type="text" placeholder="Enter email " required />
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default End 