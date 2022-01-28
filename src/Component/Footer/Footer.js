import React, { Fragment } from "react";

import MarkunreadIcon from "@mui/icons-material/Markunread";

import style from "../Sass/Footer.module.scss";

import styled from "styled-components";

import { Button } from "reactstrap";

const Footer = (props) => {
  return (
    <>
      <div className={style.footer}>
        <div className="container">
          <div className={style.search_bar_centents}>
            <div className={style.searchbar}>
              <MarkunreadIcon
                className={style.markicons}
                style={{ color: "#0baf4d" }}
              />

              <form>
                <input
                  type="text"
                  defaultValue=""
                  placeholder="Email Address"
                  className={style.email_input}
                />
                <Button
                  className={style.search_button}
                  style={{ backgroundColor: "#0baf4d" }}
                >
                  Search
                </Button>
              </form>
              <h1 className={style.letters}>SIGN UP FOR NEWSLETTERS</h1>
            </div>
          </div>

          <div className={style.navibar_footer}>
            <ul>
              <li className={style.store2}>STORE LOCATION</li>
              <li>
                Mathaf , Blvd&nbsp;Pierre&nbsp;Gemayel&nbsp;Le&nbsp;Bureau
              </li>
              <li>
                Building , 3rd&nbsp;Floor,&nbsp;Beirut&nbsp;,&nbsp;Lebanon
              </li>
              <li>
                <i
                  className="fas fa-envelope-square"
                  style={{ fontSize: "25px", borderRadius: "10px" }}
                ></i>
                <TitleEmail>&nbsp;Support@wasilonline.com</TitleEmail>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <Titlecall>
                  +&nbsp;961&nbsp;81&nbsp;492&nbsp;154&nbsp;,&nbsp;+&nbsp;961&nbsp;81&nbsp;492&nbsp;156
                </Titlecall>
              </li>
            </ul>

            <ul className={style.information}>
              <li className={style.info2}>INFORMATION</li>
              <li>About&nbsp;us</li>
              <li>Check&nbsp;out</li>
              <li>Service</li>
              <li>Privacy&nbsp;Policy</li>
              <li>Terms&nbsp;and&nbsp;Conditions</li>
            </ul>

            <ul className={style.Account}>
              <li className={style.Account2}>My&nbsp;Account</li>
              <li>My&nbsp;Account</li>
              <li>Contact</li>
              <li>Shopping&nbsp;card</li>
              <li>Shop</li>
            </ul>

            <ul className={style.christmas}>
              <li className={style.christmas2}>Christmas&nbsp;Season</li>
              <li>Deekeneh</li>
              <li>Health&nbsp;Care</li>
              <li>Beauty&nbsp;Fashion</li>
              <li>Baby&nbsp;Toys</li>
              <li>Baby&nbsp;Stationary</li>
            </ul>

            <ul className={style.Categories3}>
              <li className={style.Electronices}>Electronics</li>
              <li>Gifts</li>
              <li>Deserts</li>
              <li>Mountena</li>
              <li>Bundles</li>
            </ul>
          </div>

          <div className={style.wasilonline}>
            <div className="container">
              <div className={style.resversed}>
                © 2021 Wasil Online. All Rights Reserved
              </div>
              <div className={style.payments_image_div}>
                <img
                  src={process.env.PUBLIC_URL + "items/card-1.png"}
                  alt="payments.png"
                />
                <img
                  src={process.env.PUBLIC_URL + "items/card-2.png"}
                  alt="payments.png"
                />
                <img
                  src={process.env.PUBLIC_URL + "items/card-3.png"}
                  alt="payments.png"
                />
                <img
                  src={process.env.PUBLIC_URL + "items/card-4.png"}
                  alt="payments.png"
                />
                <img
                  src={process.env.PUBLIC_URL + "items/card-5.png"}
                  alt="payments.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

const TitleEmail = styled.span`
  position: relative;
  top: -4px;
  left: 7px;
`;

const Titlecall = styled.span`
  left: 14px;
  position: relative;
`;
