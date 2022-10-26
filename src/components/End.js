import React from "react";

function End() {
  return (
    <div className="end">
      <div className="end-container">
        <h2>Start Your Journey</h2>
        <div className="end-buttons">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-6  col-md-4 col-lg-3 my-2 text-center text-center">
              <button>Register</button>
            </div>
            <div className="col-12 col-sm-6  col-md-4 col-lg-3 my-2 text-center">
              <button>Explore</button>
            </div>
            <div className="col-12 col-sm-6  col-md-4 col-lg-3 my-2 text-center">
              <button>Buy</button>
            </div>
            <div className="col-12 col-sm-6  col-md-4 col-lg-3 my-2 text-center">
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default End;
