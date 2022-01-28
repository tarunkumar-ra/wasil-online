import React, { Component } from "react";

import "../Sass/NewsProducts.scss";

import Slider from "react-slick";

import "../Sass/newproducts_image_slider.scss";

class NewsProducts extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <div className="container">
          <div className="News_Products">
            <div className="product-heading">
              <h4
                className="Trending_product_heading"
                style={{
                  ...{
                    fontSize: "15px",
                    position: "relative",
                    marginLeft: "33px",
                    fontWeight: "600",
                    marginTop: "-12px",
                  },
                }}
              >
                TRENDING PRODUCTS
              </h4>

              <h2>NEW PRODUCTS</h2>
            </div>

            <div className="biskits_product">
              <div>
                <div className="biskits_image">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-2.jpg"}
                    alt="item-2"
                  />
                </div>
                <div className="biskets_title">
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                  </p>
                  <span className="remove_price">$9.35</span>
                  <span className="correct_price">$12.30</span>
                </div>
              </div>

              <div>
                <div className="biskits_image">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-2.jpg"}
                    alt="item-2"
                  />
                </div>
                <div className="biskets_title">
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                  </p>
                  <span className="remove_price">$9.35</span>
                  <span className="correct_price">$12.30</span>
                </div>
              </div>

              <div>
                <div className="biskits_image">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-2.jpg"}
                    alt="item-2"
                  />
                </div>
                <div className="biskets_title">
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                  </p>
                  <span className="remove_price">$9.35</span>
                  <span className="correct_price">$12.30</span>
                </div>
              </div>

              <div>
                <div className="biskits_image">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-2.jpg"}
                    alt="item-2"
                  />
                </div>
                <div className="biskets_title">
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                  </p>
                  <span className="remove_price">$9.35</span>
                  <span className="correct_price">$12.30</span>
                </div>
              </div>

              <div>
                <div className="biskits_image">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-2.jpg"}
                    alt="item-2"
                  />
                </div>
                <div className="biskets_title">
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                  </p>
                  <span className="remove_price">$9.35</span>
                  <span className="correct_price">$12.30</span>
                </div>
              </div>

              <div>
                <div className="biskits_image">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-2.jpg"}
                    alt="item-2"
                  />
                </div>
                <div className="biskets_title">
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                  </p>
                  <span className="remove_price">$9.35</span>
                  <span className="correct_price">$12.30</span>
                </div>
              </div>

              <div>
                <div className="biskits_image">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-2.jpg"}
                    alt="item-2"
                  />
                </div>
                <div className="biskets_title">
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                  </p>
                  <span className="remove_price">$9.35</span>
                  <span className="correct_price">$12.30</span>
                </div>
              </div>
              <div>
                <div className="biskits_image">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-2.jpg"}
                    alt="item-2"
                  />
                </div>
                <div className="biskets_title">
                  <p style={{ fontSize: "12px", fontWeight: "600" }}>
                    Gandour&nbsp;Dabke &nbsp;Original &nbsp;Lemon&nbsp;26.7G
                  </p>
                  <span className="remove_price">$9.35</span>
                  <span className="correct_price">$12.30</span>
                </div>
              </div>
            </div>

            <div>
              <div className="gandour_d-1">
                <div className="gandour_dabke">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="newproducts_images"
                  />
                  <div className="gandour_title">
                    <p style={{ ...{ fontSize: "12px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "12px" } }}>IN&nbsp;STOCK</p>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.jpg"
                    />
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>

                <div className="gandour_dabke">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="newproducts_images"
                  />
                  <div className="gandour_title">
                    <p style={{ ...{ fontSize: "12px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "12px" } }}>IN&nbsp;STOCK</p>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.jpg"
                    />
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>

                <div className="gandour_dabke">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="newproducts_images"
                  />
                  <div className="gandour_title">
                    <p style={{ ...{ fontSize: "12px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "12px" } }}>IN&nbsp;STOCK</p>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.jpg"
                    />
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>

                <div className="gandour_dabke">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="newproducts_images"
                  />
                  <div className="gandour_title">
                    <p style={{ ...{ fontSize: "12px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "12px" } }}>IN&nbsp;STOCK</p>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.jpg"
                    />
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>
              </div>

              <div className="gandour_d-2">
                <div className="gandour_dabke">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="newproducts_images"
                  />
                  <div className="gandour_title">
                    <p style={{ ...{ fontSize: "12px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "12px" } }}>IN&nbsp;STOCK</p>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.jpg"
                    />
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>

                <div className="gandour_dabke">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="newproducts_images"
                  />
                  <div className="gandour_title">
                    <p style={{ ...{ fontSize: "12px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "12px" } }}>IN&nbsp;STOCK</p>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.jpg"
                    />
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>

                <div className="gandour_dabke">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="newproducts_images"
                  />
                  <div className="gandour_title">
                    <p style={{ ...{ fontSize: "12px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "12px" } }}>IN&nbsp;STOCK</p>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.jpg"
                    />
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>

                <div className="gandour_dabke">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="newproducts_images"
                  />
                  <div className="gandour_title">
                    <p style={{ ...{ fontSize: "12px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "12px" } }}>IN&nbsp;STOCK</p>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.jpg"
                    />
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="pro_headings">New Products</h2>
            <Slider className="Dabke_Original" {...settings}>
              <div>
                <div className="gandour_dabke2">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="slide_image"
                  />
                  <div className="gandour_title2">
                    <p style={{ ...{ fontSize: "11px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "11px" } }}>IN&nbsp;STOCK</p>
                    <p className="image_set">
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.jpg"
                      />
                    </p>
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gandour_dabke2">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="slide_image"
                  />
                  <div className="gandour_title2">
                    <p style={{ ...{ fontSize: "11px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "11px" } }}>IN&nbsp;STOCK</p>
                    <p className="image_set">
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.jpg"
                      />
                    </p>
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gandour_dabke2">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="slide_image"
                  />
                  <div className="gandour_title2">
                    <p style={{ ...{ fontSize: "11px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "11px" } }}>IN&nbsp;STOCK</p>
                    <p className="image_set">
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.jpg"
                      />
                    </p>
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gandour_dabke2">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="slide_image"
                  />
                  <div className="gandour_title2">
                    <p style={{ ...{ fontSize: "11px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "11px" } }}>IN&nbsp;STOCK</p>
                    <p className="image_set">
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.jpg"
                      />
                    </p>
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gandour_dabke2">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="slide_image"
                  />
                  <div className="gandour_title2">
                    <p style={{ ...{ fontSize: "11px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "11px" } }}>IN&nbsp;STOCK</p>
                    <p className="image_set">
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.jpg"
                      />
                    </p>
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gandour_dabke2">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="slide_image"
                  />
                  <div className="gandour_title2">
                    <p style={{ ...{ fontSize: "11px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "11px" } }}>IN&nbsp;STOCK</p>
                    <p className="image_set">
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.jpg"
                      />
                    </p>
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gandour_dabke2">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="slide_image"
                  />
                  <div className="gandour_title2">
                    <p style={{ ...{ fontSize: "11px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "11px" } }}>IN&nbsp;STOCK</p>
                    <p className="image_set">
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.jpg"
                      />
                    </p>
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gandour_dabke2">
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className="slide_image"
                  />
                  <div className="gandour_title2">
                    <p style={{ ...{ fontSize: "11px" } }}>
                      Gandour&nbsp;Dabke&nbsp; Original
                      Lemon&nbsp;26.7G&nbsp;*50&nbsp;Pcs
                    </p>
                    <p style={{ ...{ fontSize: "11px" } }}>IN&nbsp;STOCK</p>
                    <p className="image_set">
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.jpg"
                      />
                    </p>
                    <div className="price_tag">
                      <span className="rem_pri">$9.35</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="real_pri">$12.30</span>
                    </div>
                    <div className="add_to_cart">Add to Cart</div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
export default NewsProducts;
