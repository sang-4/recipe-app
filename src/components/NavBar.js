import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Images/recipe-sharing-logo.png";

import Register from "../pages/Register";

const NavBar = () => {
  // modal 
  const [show, setShow] = useState(false);

  // open & close modal functions 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // navLinks
  const links = [
    { id: 1, link: "Recipe", resourceLink: "/recipe" },
    { id: 2, link: "Products", resourceLink: "/products" },
    { id: 3, link: "Tutorials", resourceLink: "/tutorials" },
    { id: 4, link: "About Us", resourceLink: "/about" },
  ];

  return (
    <>
      {" "}
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="my-2 d-flex"
      >
        <Link to="/" title="Welcome Recipe Sharing App">
          <img src={logo} alt="recipe sharing logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="nav__link">
            {links.map(({ id, link, resourceLink }) => (
              <NavLink className="nav__link" to={resourceLink} key={id}>
                <span className="link__title">{link}</span>
              </NavLink>
            ))}
            <Link
              className="nav__link nav__linkRegister"
              to="/Register"
              onClick={handleShow}
            >
              <span className="link__titleRegister d-flex align-items-center justify-content-center">
                Register
              </span>
            </Link>
            <Link className="nav__link nav__linkLogin me-4">
              <span className="link__titleLogin d-flex align-items-center justify-content-center">
                Sign in
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* register Modal */}
      <Register handleClose={handleClose} show={show} />
    </>
  );
};

export default NavBar;
