import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="row">
          <div className="col-lg-2">
            <h1 className="greatVibes fw-bold">ReCipe</h1>
          </div>
          <div className="col-lg-3">
            <div className="footer__Links">
              <h2>Extras</h2>
              <Link className="footer__Link" to="">
                Our Products
              </Link>
              <Link className="footer__Link" to="">
                News
              </Link>
              <Link className="footer__Link" to="">
                Blog
              </Link>
              <Link className="footer__Link" to="">
                Join Us
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="contact">
              <h2>Contacts</h2>
              <p className="footer__Address">Address: 21070, 00100</p>
              <p>
                Phone: <a href="tel:+254799820376">+254799820376</a>
              </p>
              <p>
                Gmail: <a href="mailto:Recipe@Gmail.Com">Recipe@Gmail.Com</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <h2>Subscription</h2>
            <div className="input__email mt-3">
              <span className="me-1">Email:</span>
              <input type="email" name="" id="" />
            </div>
            <div className="footer__Btn">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottom__Footer">
        <h5>Privacy Policy</h5>
        <h5>CopyRight &#64; 2022</h5>
      </div>
    </div>
  );
};

export default Footer;
