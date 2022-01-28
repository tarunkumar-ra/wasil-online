import React, { useState } from "react";

import "../Sass/searchbar.scss";

const Searchbar = () => {
  const [menu, setMenu] = useState(false);

  const handleclickmenuopen = () => {
    setMenu(true);
  };

  const handleclickmenu2closed = () => {
    setMenu(false);
  };

  return (
    <>
      <div className="container">
        <div className="searchbar">
          <div className="menu_icons">
            <i
              className="fas fa-bars"
              style={{ ...{ fontSize: "24px" }, color: "black" }}
              onClick={handleclickmenuopen}
            ></i>
            <div className={menu ? "menubar" : "menubar2"}>
              <div style={{ marginLeft: "25px", marginTop: "5px" }}>
                <img
                  src={process.env.PUBLIC_URL + "items/logo.png"}
                  alt="logo.png"
                />
              </div>
              <div className="cross_icons">
                <i
                  onClick={handleclickmenu2closed}
                  class="far fa-times-circle"
                ></i>
              </div>
              <div>
                <ul
                  className="menu_ul"
                  style={{
                    listStyle: "none",
                    marginTop: "-25px",
                  }}
                >
                  <li style={{ paddingTop: "29px" }}>
                    <i class="fas fa-home"></i>&nbsp;&nbsp;Home
                  </li>
                  <li style={{ paddingTop: "29px" }}>
                    <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Shop
                  </li>
                  <li style={{ paddingTop: "29px" }}>
                    <i class="fas fa-exclamation-circle"></i>&nbsp;&nbsp;About
                    us
                  </li>
                  <li style={{ paddingTop: "29px" }}>
                    <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Offers
                  </li>
                  <li style={{ paddingTop: "29px" }}>
                    <i class="fas fa-question-circle"></i>&nbsp;&nbsp;FAQ
                  </li>
                  <li style={{ paddingTop: "29px" }}>
                    <i class="far fa-heart"></i>&nbsp;&nbsp;Wish List
                  </li>
                  <li style={{ paddingTop: "29px" }}>
                    <i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;Sell With Us
                  </li>
                  <li style={{ paddingTop: "29px" }}>
                    <i class="fas fa-id-card"></i>&nbsp;&nbsp;Contact
                  </li>
                  <li style={{ paddingTop: "29px" }}>
                    <i class="fas fa-wallet"></i>&nbsp;&nbsp;Wallet
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="wasilonline_logo">
            <img
              src={process.env.PUBLIC_URL + "items/logo.png"}
              className="logo_wasionline"
              width="100px"
              height="39px"
              alt="logo.png"
            />
          </div>

          <div className="option">
            <span className="location">Your&nbsp;Location</span>
            <span className="select_option">Select&nbsp;a&nbsp;Location</span>
            <i className="fas fa-chevron-down  arrowIcons"></i>
          </div>

          <div className="search_box">
            <form>
              <input type="text" placeholder="Search" />
              <div className="search_btn">
                <i className="fas fa-search  searchicons"></i>
              </div>
            </form>
          </div>

          <div className="images_user_cart">
            <img
              src={process.env.PUBLIC_URL + "items/User.png"}
              alt="User.png"
              className="user_icon"
            />
            <h5 className="cart_data">$0.00</h5>
            <img
              src={process.env.PUBLIC_URL + "items/cart.png"}
              alt="cart.png"
              className="user_cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
