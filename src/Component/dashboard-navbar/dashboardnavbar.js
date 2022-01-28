import React from "react";

import style from "../dashboard-navbar/dashboardnavbar.module.scss";

const Dashboardnavbar = () => {
  return (
    <>
      <div className="container">
        <div className={style.nav_bg}>
          <ul>
            <li className={style.category}>
              <i class="fas fa-bars"></i>&nbsp;&nbsp;ALL CATEGORY&nbsp;&nbsp;
              <i class="fas fa-chevron-down"></i>
            </li>
            <li className={style.home}>Home</li>
            <li className={style.shop}>
              Shop&nbsp;<i class="fas fa-chevron-down"></i>
            </li>
            <li className={style.meats}>
              <i class="fas fa-hamburger"></i>&nbsp;Meats and Seafood
            </li>
            <li className={style.beakery}>
              <i class="fas fa-birthday-cake"></i>&nbsp;Beakery
            </li>
            <li className={style.beverage}>
              <i class="fas fa-coffee"></i>&nbsp;Beverages
            </li>
            <li className={style.contact}>
              <i class="fas fa-address-book"></i>&nbsp;Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Dashboardnavbar;
