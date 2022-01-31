import React from "react";

import style from "../all-Products/allProducts.module.scss";

const AllProducts = () => {
  return (
    <>
      <div className={style.bg_border}>
        <div className="container">
          <div className={style.AllProducts_images_contents}>
            <div className={style.pro_details_images}>
              <div className={style.store_category}>
                <ul>
                  <li className={style.category}>Store Category</li>
                  <li>Clothing & Apparel</li>
                  <li>Consumer Electrics</li>
                  <li>Computers & Technologies</li>
                  <li>Garden & Kitchen</li>
                  <li>Health & Beauty</li>
                  <li>Speakers</li>
                  <li>Calculators</li>
                </ul>
              </div>
              <div className={style.banner_images}>
                <img
                  src={process.env.PUBLIC_URL + "items/side-banner.png"}
                  alt="side-banner.png"
                />
              </div>
            </div>

            <div className={style.AllProducts_images}>
              <div className={style.wasil_online}>
                <img
                  src={process.env.PUBLIC_URL + "items/MyStore.png"}
                  alt="MyStore.png"
                  className={style.store_images}
                />
                <h1 className={style.text_wasil}>Wasil-Online</h1>
              </div>

              <div className={style.all_products_card}>
                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>

                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>

                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>

                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>

                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>

                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>

                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>

                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>

                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>

                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>

                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>
                <div className={style.products_card}>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-1.jpg"}
                      alt="item-1.jpg"
                      className={style.card_images}
                    />
                  </div>
                  <div className={style.card_products_contents}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                    <p className={style.in_stock}>IN STOCK</p>
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + "items/stars.png"}
                        alt="stars.png"
                      />
                    </span>
                    <p>
                      <span className={style.remove_price}>$9.35</span>
                      <span className={style.right_price}>$12.00</span>
                    </p>
                    <div className={style.add_cart}>
                      <div className={style.add_to_cart}>Add to cart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.stor_cate}>
            <div>
              <ul>
                <li className={style.stor_cat}>Store Category</li>
                <li>Clothing & Apparel</li>
                <li>Consumer Electrics</li>
                <li>Computers & Technologies</li>
                <li>Garden & Kitchen</li>
                <li>Health & Beauty</li>
                <li>Speakers</li>
                <li>Calculators</li>
              </ul>
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "items/side-banner.png"}
                alt="side-banner.png"
                className={style.side_banner}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllProducts;
