import React from "react";

import Dashboardnavbar from "../dashboard-navbar/dashboardnavbar";

import style from "../singleProducts/single.module.scss";

import  Desciption   from "../single_products_Description/description";

import  RelatedProducts  from  "../Related-Products/related-Products";

const Singleproducts = () => {
  return (
    <>
      <Dashboardnavbar />
      <div className={style.single_products_bg}>
        <div className="container">
          <div className={style.product_bdcolor}>
            <div className="row">
              <div className="col-lg-6">
                <div className={style.pro_img}>
                  <div className={style.product_pd}>
                    <div className={style.products_multiimages}>
                    
                    <div  >
                      <img
                        className={style.images}
                        src={
                          process.env.PUBLIC_URL + "items/product-side-img.png"
                        }
                        alt="items/product-side-img.png"
                      />
                    </div>

                    <div className={style.products_multiimages}>
                      <img
                        className={style.images}
                        src={
                          process.env.PUBLIC_URL + "items/product-side-img.png"
                        }
                        alt="items/product-side-img.png"
                      />
                    </div>

                    <div className={style.products_multiimages}>
                      <img
                        className={style.images}
                        src={
                          process.env.PUBLIC_URL + "items/product-side-img.png"
                        }
                        alt="items/product-side-img.png"
                      />
                    </div>

                    <div className={style.products_multiimages}>
                      <img
                        className={style.images}
                        src={
                          process.env.PUBLIC_URL + "items/product-side-img.png"
                        }
                        alt="items/product-side-img.png"
                      />
                    </div>
                  </div>

                  </div>

                  <div className={style.single_page_image}>
                    <img
                      src={process.env.PUBLIC_URL + "items/main-products.png"}
                      alt="items/main-products.png"
                      className={style.images2}
                    />
                  </div>
                  
                </div>
                <div  className={ style.single_pd_pd_images } >
                <div  className={ style.single_pd_pd_images2 }  >
                  <div   className={ style.sig_images } ><img
                  src={
                    process.env.PUBLIC_URL + "items/product-side-img.png"
                  }
                  alt="items/product-side-img.png"  className={ style.images }
                /></div>
                  <div  className={ style.sig_images }><img
                  src={
                    process.env.PUBLIC_URL + "items/product-side-img.png"  
                  }    className={ style.images }
                  alt="items/product-side-img.png"
                /></div>
                  <div  className={ style.sig_images } ><img
                  src={
                    process.env.PUBLIC_URL + "items/product-side-img.png"
                  }
                  alt="items/product-side-img.png"  className={ style.images }
                /></div>
                  <div  className={ style.sig_images } ><img
                  src={
                    process.env.PUBLIC_URL + "items/product-side-img.png"
                  }  
                  alt="items/product-side-img.png"  className={ style.images }
                /></div>
                  </div>
              </div>
              </div>
              <div className="col-lg-6">
                <div className={style.single_products_bd}>
                  <div className={style.single_pro_desciption}>
                    <h5 className={style.pro_about}>
                      <span>Home</span>
                      <span className={style.slash1}>/</span>
                      <span className={style.baby}>Baby&nbsp;& &nbsp;Toys</span>
                      <span className={style.slash2}>/</span>
                      <span className={style.outdoor}>Outdoor&nbsp;Play</span>
                    </h5>
                    <h4 className={style.intex_swim}>Intex-Swim Vest</h4>
                    <span className={style.priceall}>
                      <h6 className={style.removeprice}>$22.00</h6>
                      &nbsp;&nbsp;&nbsp;
                      <h5 className={style.right_price}>$20.00</h5>
                    </span>
                    <div className={style.about_stock}>
                      2&nbsp;in&nbsp;stock
                    </div>
                    <div className={style.pos_neg}>
                      <div className={style.pos_neg2}>
                        <div className={style.negitive}>-</div>
                        <div className={style.counting}>1</div>
                        <div className={style.positive}>+</div>
                      </div>
                      <div className={style.addtocart}>ADD TO CART</div>
                    </div>

                    <div className={style.select_option}>
                      <div>
                        <select
                          className={style.select_color}
                          defaultValue="color"
                        >
                          <option>red</option>
                          <option>blue</option>
                          <option>black</option>
                          <option>yellow</option>
                        </select>
                      </div>
                      <div>
                        <select
                          className={style.select_size}
                          defaultValue="size"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>

                    <div className={style.wishlist}>
                      <div className={style.far}>
                        <i class="far fa-heart"></i>
                      </div>
                      &nbsp;&nbsp;
                      <div className={style.addtowishlist}>Add to Wishlist</div>
                    </div>

                    <div className={style.sku_category}>
                      <div className={style.sku}>
                        <span className={style.sku_1}>SKU&nbsp;:</span>
                        &nbsp;&nbsp;
                        <span className={style.intex}>INTEX-58660</span>
                      </div>
                      <div className={style.outdoor}>
                        <span className={style.cate}>
                          Category&nbsp;&nbsp;:
                        </span>
                        &nbsp;&nbsp;
                        <span className={style.outdoor2}>
                          Outdoor&nbsp;Play
                        </span>
                      </div>
                    </div>

                    <div className={style.share}>
                      <span className={style.share2}>Share:&nbsp;&nbsp;</span>
                      <span className={style.facebook}>
                        <i class="fab fa-facebook-f"></i>
                      </span>
                      &nbsp;&nbsp;
                      <span className={style.twitter}>
                        <i class="fab fa-twitter"></i>
                      </span>
                      &nbsp;&nbsp;
                      <span className={style.linked}>
                        <i class="fab fa-linkedin-in"></i>
                      </span>
                      &nbsp;
                      <span className={style.pinterest}>
                        <i class="fab fa-pinterest"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  className={ style.prod_bottom } ></div>
        </div>
      </div>
      <Desciption/>
      <RelatedProducts/>
    </>
  );
};
export default Singleproducts;
