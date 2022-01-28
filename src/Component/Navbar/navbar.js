import React, { Fragment } from "react";

import style from "../Sass/navbar.module.scss";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Navbar = () => {
  return (
    <>
      <div className={style.nav}>
        <div className="container">
          <div>
            <div>
              <ul className={style.account_track}>
                <li>My&nbsp;Account</li>&nbsp;&nbsp;
                <li className={style.order_tracking}>Order&nbsp;Tracking</li>
              </ul>
            </div>

            <div>
              <ul className={style.delivery}>
                <li className={style.secure_the_courier}>
                  100%&nbsp;Secure&nbsp;Delivery&nbsp;without&nbsp;Contacting&nbsp;The&nbsp;Courier
                </li>
                &nbsp;&nbsp;
                <li className={style.English}>
                  English
                  <span>
                    <ExpandMoreIcon style={{ fontSize: "18px" }} />
                  </span>
                </li>
                &nbsp;&nbsp;
                <li className={style.USD}>
                  USD
                  <span>
                    <ExpandMoreIcon style={{ fontSize: "18px" }} />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
