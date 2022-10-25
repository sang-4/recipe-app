import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="page__not__found">
      <h1 className="error__header abril">4🍔4</h1>
      <h3>OOPSIE POOPSIE</h3>
      <h5>This not the page you are looking for ?</h5>
      <h6>Go to 👇</h6>
      <button className="btn btn-primary">
        <Link className="error__home__btn" to="/">
          Home
        </Link>
      </button>
    </div>
  );
};

export default Error;
