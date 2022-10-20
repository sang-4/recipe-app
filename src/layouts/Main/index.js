import React from "react";
import { Outlet } from "react-router-dom";

// components 
import Navbar from "../../components/NavBar";

const index = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default index;
