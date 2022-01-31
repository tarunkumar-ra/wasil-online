import React from "react";

import style from "../Related-Products/related-products.module.scss";

import styled from "../Related-Products/related_products_sliders.module.scss";

import Slider from "react-slick";

const RelatedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className={style.rel_pro_bg}>
        <div className="container">
          <h4>Related Products</h4>
          <div className={style.related_products}>
            <Slider className={styled.related_image_slider} {...settings}>
              <div className={styled.pro_ducts_1}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className={styled.products_images}
                  />
                </div>
                <div>
                  <div className={styled.related_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G *50 Pcs</p>
                    <span className={styled.images_contents}>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={styled.remove_price}>$9.35</span>
                      &nbsp;&nbsp;
                      <span className={styled.right_price}>$12.00</span>
                    </p>
                    <div className={styled.cart2}>
                      <div className={styled.addtocart2}>Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styled.pro_ducts_1}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className={styled.products_images}
                  />
                </div>
                <div>
                  <div className={styled.related_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G *50 Pcs</p>
                    <span className={styled.images_contents}>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={styled.remove_price}>$9.35</span>
                      &nbsp;&nbsp;
                      <span className={styled.right_price}>$12.00</span>
                    </p>
                    <div className={styled.cart2}>
                      <div className={styled.addtocart2}>Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styled.pro_ducts_1}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className={styled.products_images}
                  />
                </div>
                <div className={styled.related_contents}>
                  <p>Gandour Dabke Original Lemon 26.7G *50 Pcs</p>
                  <span className={styled.images_contents}>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.png"
                    />
                  </span>
                  <p>
                    <span className={styled.remove_price}>$9.35</span>
                    &nbsp;&nbsp;
                    <span className={styled.right_price}>$12.00</span>
                  </p>
                  <div className={styled.cart2}>
                    <div className={styled.addtocart2}>Add to Cart</div>
                  </div>
                </div>
              </div>
              <div className={styled.pro_ducts_1}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className={styled.products_images}
                  />
                </div>
                <div className={styled.related_contents}>
                  <p>Gandour Dabke Original Lemon 26.7G *50 Pcs</p>
                  <span className={styled.images_contents}>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.png"
                    />
                  </span>
                  <p>
                    <span className={styled.remove_price}>$9.35</span>
                    &nbsp;&nbsp;
                    <span className={styled.right_price}>$12.00</span>
                  </p>
                  <div className={styled.cart2}>
                    <div className={styled.addtocart2}>Add to Cart</div>
                  </div>
                </div>
              </div>
              <div className={styled.pro_ducts_1}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="item-1.jpg"
                    className={styled.products_images}
                  />
                </div>
                <div className={styled.related_contents}>
                  <p>Gandour Dabke Original Lemon 26.7G *50 Pcs</p>
                  <span className={styled.images_contents}>
                    <img
                      src={process.env.PUBLIC_URL + "items/stars.png"}
                      alt="stars.png"
                    />
                  </span>
                  <p>
                    <span className={styled.remove_price}>$9.35</span>
                    &nbsp;&nbsp;
                    <span className={styled.right_price}>$12.00</span>
                  </p>
                  <div className={styled.cart2}>
                    <div className={styled.addtocart2}>Add to Cart</div>
                  </div>
                </div>
              </div>
            </Slider>

            <div className={style.products}>
              <div className={style.products1}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="items/item-1.jpg"
                    className={style.images}
                  />
                </div>
                <div className={style.products_contents}>
                  <div className={style.contents}>
                    <p>Gandour Dabke Original Lemon 26.7G *50 Pcs</p>
                    <p>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </p>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      &nbsp;&nbsp;
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.cart}>
                      <div className={style.add_to_cart}>Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.products1}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="items/item-1.jpg"
                    className={style.images}
                  />
                </div>
                <div className={style.products_contents}>
                  <div className={style.contents}>
                    <p>Gandour Dabke Original Lemon 26.7G *50 Pcs</p>
                    <p>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </p>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      &nbsp;&nbsp;
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.cart}>
                      <div className={style.add_to_cart}>Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.products1}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="items/item-1.jpg"
                    className={style.images}
                  />
                </div>
                <div className={style.products_contents}>
                  <div className={style.contents}>
                    <p>Gandour Dabke Original Lemon 26.7G *50 Pcs</p>
                    <p>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </p>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      &nbsp;&nbsp;
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.cart}>
                      <div className={style.add_to_cart}>Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.products1}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="items/item-1.jpg"
                    className={style.images}
                  />
                </div>
                <div className={style.products_contents}>
                  <div className={style.contents}>
                    <p>Gandour Dabke Original Lemon 26.7G *50 Pcs</p>
                    <p>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </p>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      &nbsp;&nbsp;
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.cart}>
                      <div className={style.add_to_cart}>Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.products1}>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                    alt="items/item-1.jpg"
                    className={style.images}
                  />
                </div>
                <div className={style.products_contents}>
                  <div className={style.contents}>
                    <p>Gandour Dabke Original Lemon 26.7G *50 Pcs</p>
                    <p>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </p>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      &nbsp;&nbsp;
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.cart}>
                      <div className={style.add_to_cart}>Add to Cart</div>
                    </div>
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
export default RelatedProducts;
