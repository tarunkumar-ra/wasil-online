import React from "react";

import style from "../sellwith/sellwithimages.module.scss";

const CardImagesellwithus = () => {
  return (
    <>
      <div className={style.cardimagebg}>
        <div className="container">
          <div className="row">
            <div className={style.works}>
              <div>
                <h1 className={style.IT}>How IT WORKS</h1>
                <p className={style.guide}>Here's a step by step guide</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={style.Register}>
                <div>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/Register.png"}
                      alt="Register.png"
                    />
                  </div>
                  <div>
                    <p className={style.Register_paragraph}>
                      Register and list your products for free
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={style.Receive}>
                <div>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/Receive.png"}
                      alt="Receive.png"
                    />
                  </div>
                  <div>
                    <p className={style.Receive_paragraph}>
                      Receive orders and sell your product
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={style.package}>
                <div>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/package.png"}
                      alt="package.png"
                    />
                  </div>
                  <div>
                    <p className={style.package_paragraph}>
                      Package and deliver with ease
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={style.GetPayment}>
                <div>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/GetPayment.png"}
                      alt="GetPayment.png"
                    />
                  </div>
                  <div>
                    <p className={style.GetPayment_paragraph}>
                      Get payments and grow your busines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardImagesellwithus;
