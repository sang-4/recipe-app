import React from "react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default index;
