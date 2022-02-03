import React, { useState } from "react";

import style from "../checkout/checkout.module.scss";

import Navigation from "../Navbar2/navbar2";

const Checkout = () => {
  const [bank, setBank] = useState(false);

  const [wallet, setWallet] = useState(true);

  const [cash, setCash] = useState(false);

  const [paypal, setPaypal] = useState(false);

  const handleclickbank = () => {
    setBank(true);
    setWallet(false);
    setCash(false);
    setPaypal(false);
  };

  const handleclickwallet = () => {
    setBank(false);
    setWallet(true);
    setCash(false);
    setPaypal(false);
  };

  const handleclickcash = () => {
    setBank(false);
    setWallet(false);
    setCash(true);
    setPaypal(false);
  };

  const handleclickpaypal = () => {
    setBank(false);
    setWallet(false);
    setCash(false);
    setPaypal(true);
  };

  return (
    <>
      <Navigation />
      <div className={style.Checkout_bg}>
        <div className="container">
          <div className={style.billing}>
            <div className={style.billing_details}>Billing Details</div>
          </div>

          <div className={style.Checkout_bd}>
            <div>
              <div className={style.checkout_form}>
                <form>
                  <div className={style.name_input}>
                    <input
                      type="text"
                      placeholder="First name"
                      defaultValue=""
                      className={style.inputfiled}
                    />
                  </div>
                  <div className={style.name_input}>
                    <input
                      type="text"
                      placeholder="Last name"
                      defaultValue=""
                      className={style.inputfiled}
                    />
                  </div>
                  <div className={style.name_input}>
                    <input
                      type="text"
                      placeholder="Company name"
                      defaultValue=""
                      className={style.inputfiled}
                    />
                  </div>

                  <div className={style.name_input}>
                    <input
                      type="text"
                      placeholder="Country / region"
                      defaultValue=""
                      className={style.inputfiled}
                    />
                  </div>

                  <div className={style.name_input}>
                    <input
                      type="text"
                      placeholder="Street address"
                      defaultValue=""
                      className={style.inputfiled}
                    />
                  </div>

                  <div className={style.name_input}>
                    <input
                      type="text"
                      placeholder="Town / city"
                      defaultValue=""
                      className={style.inputfiled}
                    />
                  </div>

                  <div className={style.name_input}>
                    <input
                      type="text"
                      placeholder="Postcode"
                      className={style.inputfiled}
                      defaultValue=""
                    />
                  </div>

                  <div className={style.name_input}>
                    <input
                      type="text"
                      className={style.inputfiled}
                      placeholder="Phone"
                      defaultValue=""
                    />
                  </div>

                  <div className={style.name_input}>
                    <input
                      type="text"
                      className={style.inputfiled}
                      placeholder="Email address"
                      defaultValue=""
                    />
                  </div>
                </form>
              </div>

              <div className={style.different_address}>
                <div className={style.different_input}>
                  <input type="checkbox" />
                  <h3 className={style.ship_differ_address}>
                    Ship to a different address?
                  </h3>
                </div>
                <div className={style.address_bg}>
                  <p className={style.order}>Order notes </p>
                  <textarea
                    type="text"
                    className={style.address}
                    placeholder=" Notes about your order, e.g. special notes for delivery."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className={style.your_order}>
              <div className={style.order}>
                <div>Your Order</div>
              </div>

              <div className={style.pro_sub}>
                <div className={style.Product}>Product</div>
                <div className={style.substotal}>Subtotal</div>
              </div>
              <div className={style.touch}>
                <div className={style.touch_up}>Touch up cosmetics</div>
                <div className={style.price}>$20.00</div>
              </div>
              <div className={style.subtotal}>
                <div className={style.subs_total}>Subtotal</div>
                <div className={style.prices_dollars}>$20.00</div>
              </div>
              <div className={style.shipp_flate}>
                <div className={style.shipping}>Shipping</div>
                <div className={style.flate}>Flate eate $10.00</div>
              </div>
              <div className={style.Total}>
                <div className={style.totals}>Total</div>
                <div className={style.price2}>$30.00</div>
              </div>

              <div>
                <div className={style.direct}>
                  <div className={style.bank_direct}>
                    <span className={style.btn_direct}>
                      <input
                        id="349"
                        type="radio"
                        value="1"
                        name="question1"
                        className={style.radio_btn}
                        onClick={handleclickbank}
                      />
                    </span>
                    <label
                      for="349"
                      className={style.transfer}
                      onClick={handleclickbank}
                    >
                      Direct Bank Transfer
                    </label>
                  </div>
                  <div
                    className={
                      bank
                        ? style.direct_transfer_content
                        : style.direct_transfer_content2
                    }
                  >
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </div>
                </div>

                <div className={style.wallet}>
                  <div className={style.bank_wallet}>
                    <span className={style.btn_wallet}>
                      <input
                        id="350"
                        type="radio"
                        value="2"
                        name="question1"
                        className={style.radio_wallet_btn}
                        onClick={handleclickwallet}
                      />
                    </span>
                    <label
                      for="350"
                      className={style.transfer_wallet}
                      onClick={handleclickwallet}
                    >
                      Wallet
                    </label>
                  </div>
                  <div
                    className={
                      wallet
                        ? style.wallet_transfer_content
                        : style.wallet_transfer_content2
                    }
                  >
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </div>
                </div>

                <div className={style.cash}>
                  <div className={style.bank_cash}>
                    <span className={style.btn_cash}>
                      <input
                        id="348"
                        type="radio"
                        value="3"
                        name="question1"
                        className={style.radio_cash_btn}
                        onClick={handleclickcash}
                      />
                    </span>
                    <label
                      for="348"
                      className={style.cash_wallet}
                      onClick={handleclickcash}
                    >
                      Cash on delivery
                    </label>
                  </div>
                  <div
                    className={
                      cash
                        ? style.cash_transfer_content
                        : style.cash_transfer_content2
                    }
                  >
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </div>
                </div>

                <div className={style.paypal}>
                  <div className={style.bank_paypal}>
                    <span className={style.btn_paypal}>
                      <input
                        id="347"
                        type="radio"
                        value="4"
                        name="question1"
                        className={style.radio_paypal_btn}
                        onClick={handleclickpaypal}
                      />
                    </span>
                    <label
                      for="347"
                      className={style.transfer_paypal}
                      onClick={handleclickpaypal}
                    >
                      Paypal
                    </label>
                    <img
                      src={process.env.PUBLIC_URL + "items/payments.png"}
                      alt="payments.png"
                      className={style.payments_images}
                      onClick={handleclickpaypal}
                    />
                  </div>
                  <div
                    className={
                      paypal ? style.paypal_content : style.paypal_content2
                    }
                  >
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </div>
                </div>
              </div>

              <div className={style.place}>
                <div className={style.place_order}>PLACE ORDER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
