import React from "react";
import './Product.css'
const nike = require('../img/Nike.png')

const Home = () => {
  return (
      <div className="main">
    <div className="container">
      <div className="imgBx">
          <img src={nike}  alt="shoe" />
      </div>
      <div className="details">
        <div className="content">
          <h2> Nike Air Max 270</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>$150.99</h3>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};


export default Home;
