import React, { Fragment } from "react";

import "../Sass/navigation.scss";

import  { Link }  from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="container">
        <div className="navigation">
          <ul>
            <span>
              <i class="fas fa-bars"></i>&nbsp;&nbsp;ALL CATEGORIES&nbsp;&nbsp;
              <i class="fas fa-chevron-down"></i>
            </span>
            <li>
              <Link to="/"><i class="fas fa-home"></i>&nbsp;&nbsp;Home</Link>
            </li>
            <li>
              <Link to="/Shop"><i class="fas fa-briefcase"></i>&nbsp;&nbsp;Shop</Link>
            </li>
            <li>
              <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Offers
            </li>
            <Link to="/sellWithUs"><li>
              <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Sell With Us
            </li></Link>
            <li>
              <i class="fas fa-id-card"></i>&nbsp;&nbsp;Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navigation;
