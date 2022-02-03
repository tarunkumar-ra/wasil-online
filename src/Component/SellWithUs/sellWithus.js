import React from "react";

import style from "../SellWithUs/sell.module.scss";

import CardImagesellwithus from "../sellwith/sellwith_image_us";

import Navigation from "../Navbar2/navbar2";

const SellWithUs = () => {
  return (
    <>
      <Navigation />
      <div className="row">
        <div className="col">
          <div className={style.images}>
            <div className="container">
              <div className={style.Million_Text}>
                <div className={style.million_content}>
                  <h2 className={style.Shoppers_Text}>
                    Millions Of Shoppers Can’t Wait To See What You Have In
                    Store
                  </h2>

                  <div className={style.sellbutton}>SELL WITH US</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.best_images_section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={style.best_images}>
                <img
                  src={process.env.PUBLIC_URL + "items/open.png"}
                  className={style.open_images}
                  alt="open.png"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={style.best_fees_text}>
                <div className={style.best_content}>
                  <h2 className={style.best_start}>BEST FEES TO START</h2>
                  <p className={style.Affordable}>
                    Affordable, Transparent, and Secure
                  </p>
                  <p className={style.cost_list}>
                    It doesn’t cost a thing to list up your products, and you
                    only pay after your stuff sells. It’s just a small percent
                    of the money you earn.
                  </p>
                </div>

                <div className={style.Power_support_lowfees_images}>
                  <div className={style.power_full}>
                    <img
                      src={process.env.PUBLIC_URL + "items/Powerfull.png"}
                      alt="Powerfull.png"
                      className={style.powerfull}
                    />
                    <p className={style.powerfull_text}>Powerful Tools</p>
                  </div>
                  <div className={style.support_image}>
                    <img
                      src={process.env.PUBLIC_URL + "items/Support.png"}
                      alt="Support.png"
                      className={style.support}
                    />
                    <p className={style.support_text}>24/7 Support</p>
                  </div>
                  <div className={style.Lowfees_image}>
                    <img
                      src={process.env.PUBLIC_URL + "items/Lowfees.png"}
                      alt="Lowfees.png"
                      className={style.Lowfees}
                    />
                    <p className={style.Lowfees_text}>Low Fees</p>
                  </div>
                </div>
                <div className={style.sellus_btn}>SELL WITH US</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardImagesellwithus />
    </>
  );
};
export default SellWithUs;
