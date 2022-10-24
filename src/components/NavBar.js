import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

// images 
import logo from "../assets/Images/recipe-sharing-logo.png";

// pages
import Register from "../pages/Register";
import Login from "../pages/Login";

const NavBar = () => {
  // modal states
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // register open & close modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // login open & close modal
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  // navLinks
  const links = [
    { id: 1, link: "Recipe", resourceLink: "/recipe" },
    { id: 2, link: "Products", resourceLink: "/products" },
    { id: 3, link: "Tutorials", resourceLink: "/tutorials" },
    { id: 4, link: "About Us", resourceLink: "/about" },
  ];

  return (
    <>
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
            <Link className="nav__link nav__linkRegister" onClick={handleShow}>
              <span className="link__titleRegister d-flex align-items-center justify-content-center">
                Register
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* register Modal */}
      <Register
        handleClose={handleClose}
        handleLoginShow={handleLoginShow}
        show={show}
      />

      {/* login Modal */}
      <Login
        handleLoginClose={handleLoginClose}
        handleShow={handleShow}
        showLogin={showLogin}
      />
    </>
  );
};

export default NavBar;