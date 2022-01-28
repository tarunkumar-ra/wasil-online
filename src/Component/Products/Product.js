import React, { Component } from "react";

import Slider from "react-slick";

import { Link } from "react-router-dom";

import style from "../Sass/Products.module.scss";

import styled from "../Sass/Products_image_slider.module.scss";

class Product extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

    return (
      <>
        <div className="container">
          <h5 className={style.best_sellers}>BEST SELLERS</h5>
          <div className={style.Products}>
            <div className={style.products_banners_images}>
              <img
                src={process.env.PUBLIC_URL + "items/side-banner.png"}
                alt="side-banner.png"
              />
            </div>
            <div>
              <div className={style.products_items1}>
                <div className={style.products_images1}>
                  <div className={style.products_image}>
                    <Link to="/single-products">
                      <img
                        src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                        alt="item-1.jpg"
                        className={style.pro_images1}
                      />
                    </Link>
                  </div>
                  <div className={style.products_title}>
                    <p style={{ fontSize: "12px", fontWeight: "600" }}>
                      Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                    </p>
                    <p>In stock</p>
                    <p>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </p>
                    <span className={style.remove_price}>$9.35</span>
                    &nbsp;&nbsp;
                    <span className={style.correct_price}>$12.30</span>
                    <span className={style.add_to_cart}>Add to Cart</span>
                  </div>
                </div>
                <div className={style.products_images1}>
                  <div className={style.products_image}>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.pro_images1}
                    />
                  </div>
                  <div className={style.products_title}>
                    <p style={{ fontSize: "12px", fontWeight: "600" }}>
                      Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                    </p>
                    <p>In stock</p>
                    <p>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </p>
                    <span className={style.remove_price}>$9.35</span>
                    &nbsp;&nbsp;
                    <span className={style.correct_price}>$12.30</span>
                    <span className={style.add_to_cart}>Add to Cart</span>
                  </div>
                </div>

                <div className={style.products_images1}>
                  <div className={style.products_image}>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.pro_images1}
                    />
                  </div>
                  <div className={style.products_title}>
                    <p style={{ fontSize: "12px", fontWeight: "600" }}>
                      Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                    </p>
                    <p>In stock</p>
                    <p>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </p>
                    <span className={style.remove_price}>$9.35</span>
                    &nbsp;&nbsp;
                    <span className={style.correct_price}>$12.30</span>
                    <span className={style.add_to_cart}>Add to Cart</span>
                  </div>
                </div>

                <div className={style.products_images1}>
                  <div className={style.products_image}>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.pro_images1}
                    />
                  </div>
                  <div className={style.products_title}>
                    <p style={{ fontSize: "12px", fontWeight: "600" }}>
                      Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                    </p>
                    <p>In stock</p>
                    <p>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </p>
                    <span className={style.remove_price}>$9.35</span>
                    &nbsp;&nbsp;
                    <span className={style.correct_price}>$12.30</span>
                    <span className={style.add_to_cart}>Add to Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Slider className={styled.pro_slides} {...settings}>
            <div className={styled.produ_imag_cont}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                  alt="item-1.jpg"
                  className={styled.products_img}
                />
              </div>
              <div className={styled.iimages_contents}>
                <p style={{ fontSize: "12px", fontWeight: "600" }}>
                  Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                </p>
                <p>In stock</p>
                <p className={styled.rating_images}>
                  <img
                    src={process.env.PUBLIC_URL + "items/stars.png"}
                    alt="stars.png"
                  />
                </p>
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  $9.35
                </span>
                &nbsp;&nbsp;
                <span>$12.30</span>
                <span className={styled.add_to_cart_data}>Add To Cart</span>
              </div>
            </div>

            <div className={styled.produ_imag_cont}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                  alt="item-1.jpg"
                  className={styled.products_img}
                />
              </div>
              <div className={styled.iimages_contents}>
                <p style={{ fontSize: "12px", fontWeight: "600" }}>
                  Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                </p>
                <p>In stock</p>
                <p className={styled.rating_images}>
                  <img
                    src={process.env.PUBLIC_URL + "items/stars.png"}
                    alt="stars.png"
                  />
                </p>
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  $9.35
                </span>
                &nbsp;&nbsp;
                <span>$12.30</span>
                <span className={styled.add_to_cart_data}>Add To Cart</span>
              </div>
            </div>

            <div className={styled.produ_imag_cont}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                  alt="item-1.jpg"
                  className={styled.products_img}
                />
              </div>
              <div className={styled.iimages_contents}>
                <p style={{ fontSize: "12px", fontWeight: "600" }}>
                  Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                </p>
                <p>In stock</p>
                <p className={styled.rating_images}>
                  <img
                    src={process.env.PUBLIC_URL + "items/stars.png"}
                    alt="stars.png"
                  />
                </p>
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  $9.35
                </span>
                &nbsp;&nbsp;
                <span>$12.30</span>
                <span className={styled.add_to_cart_data}>Add To Cart</span>
              </div>
            </div>

            <div className={styled.produ_imag_cont}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                  alt="item-1.jpg"
                  className={styled.products_img}
                />
              </div>
              <div className={styled.iimages_contents}>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                  </p>
                  <p>In stock</p>
                  <p className={styled.rating_images}>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.png"
                    />
                  </p>
                  <span
                    style={{ color: "red", textDecoration: "line-through" }}
                  >
                    $9.35
                  </span>
                  &nbsp;&nbsp;
                  <span>$12.30</span>
                  <span className={styled.add_to_cart_data}>Add To Cart</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
export default Product;
