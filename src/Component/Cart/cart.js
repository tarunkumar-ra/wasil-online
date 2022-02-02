import React from "react";

import { Link } from "react-router-dom";

import style from "../Cart/cart.module.scss";

import Navigation from "../Navbar2/navbar2";

const Cart = () => {
  return (
    <>
      <Navigation />
      <div className={style.cart_bg}>
        <div className="container">
          <div className={style.cart}>
            <div className={style.cart_table}>
              <div className={style.table}>
                <span className={style.Products}>Delete</span>
                <span className={style.Products}>Product</span>
                <span className={style.price}>Price</span>
                <span>Quantity</span>
                <span className={style.subtotal}>Subtotal</span>
              </div>

              <div className={style.table_data}>
                <span>
                  <i class="fas fa-trash-alt"></i>
                </span>
                <span>
                  <img
                    src={process.env.PUBLIC_URL + "items/item-2.jpg"}
                    alt="item-2.jpg"
                    className={style.cart_images}
                  />
                  &nbsp;&nbsp;&nbsp;Biskits
                </span>
                <span className={style.priceses}>$10.00</span>
                <div className={style.cart_incresed}>
                  <div className={style.descresd}>-</div>
                  <div className={style.numbers}>5</div>
                  <div className={style.incresced}>+</div>
                </div>
                <span className={style.sub_title}>$50.00</span>
              </div>

              <div className={style.cuponcode_update_cart}>
                <div className={style.apply}>
                  <div className={style.coupon}>
                    <div className={style.apply_coupon}>
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        defaultValue=""
                        className={style.coupon_codes}
                      />
                      <div className={style.btn_apply}>Apply Coupon</div>
                    </div>
                  </div>

                  <div className={style.cart_btn_update}>
                    <div className={style.update_cart}>UPDATE CART</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.cart_total}>
              <div className={style.cart_Total2}>
                <span className={style.carttotals5}>Cart Total</span>
              </div>
              <div className={style.sub_total}>
                <span className={style.sub_total22}>Subtotal</span>
                <span>$98.00</span>
              </div>

              <div className={style.Shipping}>
                <div className={style.ship}>Shipping</div>
                <div className={style.ship_content}>
                  <p>Flate rate: $10.00 </p>
                  <p>Shipping options will be</p>
                  <p>updated during checkout</p>
                  <p style={{ color: "#0baf4d" }}>
                    Calcuate Shipping
                    <img
                      src={process.env.PUBLIC_URL + "items/truck8.png"}
                      alt="items/truck8.png"
                    />
                  </p>
                </div>
              </div>

              <div className={style.totals}>
                <div className={style.totals2}>Total</div>
                <div className={style.price_totals}>$108.00</div>
              </div>

              <div className={style.Proceed}>
                <div className={style.checkout}>
                  <Link to="/checkout">PROCEED TO CHECKOUT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
