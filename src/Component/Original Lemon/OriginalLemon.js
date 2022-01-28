import React, { Component } from "react";

import style from "../Sass/Original.module.scss";

import Carousel from "react-bootstrap/Carousel";

import styled from "../Sass/Original_lemon_next_slider.module.scss";

class OriginalLemon extends Component {
  render() {
    return (
      <>
        <div className={style.originalfluitlg}>
          <div className="container">
            <div className={style.slide_products}>
              <Carousel className={style.carousel}>
                <Carousel.Item interval={1000}>
                  <div>
                    <div>
                      <p className={style.testimonial}>Testimonial</p>
                      <p className={style.best_marketplace}>
                        The Best Marketplace
                      </p>
                      <p className={style.paragraph_lorem}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing aliqua. Lorem ipsum dolor sit amet,
                      </p>
                    </div>

                    <div className={style.hr_images_details}>
                      <img
                        src={process.env.PUBLIC_URL + "items/hr.png"}
                        alt="hr.png"
                      />
                      <div className={style.hr_abouts_names_tiles}>
                        <p style={{ color: "red", fontWeight: "700" }}>
                          Charlotte Smith
                        </p>
                        <p>Wed Censtoriy</p>
                      </div>
                    </div>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <div>
                    <div>
                      <p className={style.testimonial}>Testimonial</p>
                      <p className={style.best_marketplace}>
                        The Best Marketplace
                      </p>
                      <p className={style.paragraph_lorem}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing aliqua. Lorem ipsum dolor sit amet,
                      </p>
                    </div>

                    <div className={style.hr_images_details}>
                      <img
                        src={process.env.PUBLIC_URL + "items/hr.png"}
                        alt="hr.png"
                      />
                      <div className={style.hr_abouts_names_tiles}>
                        <p style={{ color: "red", fontWeight: "700" }}>
                          Charlotte Smith
                        </p>
                        <p>Wed Censtoriy</p>
                      </div>
                    </div>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <div>
                    <div>
                      <p className={style.testimonial}>Testimonial</p>
                      <p className={style.best_marketplace}>
                        The Best Marketplace
                      </p>
                      <p className={style.paragraph_lorem}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing aliqua. Lorem ipsum dolor sit amet,
                      </p>
                    </div>

                    <div className={style.hr_images_details}>
                      <img
                        src={process.env.PUBLIC_URL + "items/hr.png"}
                        alt="hr.png"
                      />
                      <div className={style.hr_abouts_names_tiles}>
                        <p style={{ color: "red", fontWeight: "700" }}>
                          Charlotte Smith
                        </p>
                        <p>Wed Censtoriy</p>
                      </div>
                    </div>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              <div className={style.products_contents_images}>
                <div className={style.products_lemon1}>
                  <div className={style.products_images}>
                    <div className={style.products_contents}>
                      <img
                        src={process.env.PUBLIC_URL + "items/item-3.png"}
                        alt="item-3.png"
                      />
                    </div>
                    <div>
                      <p>Gandour Dabke Original Lemon 26.7G</p>
                    </div>
                  </div>
                  <div className={style.products_images}>
                    <div className={style.products_contents}>
                      <img
                        src={process.env.PUBLIC_URL + "items/item-3.png"}
                        alt="item-3.png"
                      />
                    </div>
                    <div>
                      <p>Gandour Dabke Original Lemon 26.7G</p>
                    </div>
                  </div>
                  <div className={style.products_images}>
                    <div className={style.products_contents}>
                      <div className={style.products_contents}>
                        <img
                          src={process.env.PUBLIC_URL + "items/item-3.png"}
                          alt="item-3.png"
                        />
                      </div>
                    </div>
                    <div>
                      <p>Gandour Dabke Original Lemon 26.7G</p>
                    </div>
                  </div>
                  <div className={style.products_images}>
                    <div className={style.products_contents}>
                      <img
                        src={process.env.PUBLIC_URL + "items/item-3.png"}
                        alt="item-3.png"
                      />
                    </div>
                    <div>
                      <p>Gandour Dabke Original Lemon 26.7G</p>
                    </div>
                  </div>
                </div>
                <div className={style.products_lemon2}>
                  <div className={style.products_images2}>
                    <div className={style.products_contents2}>
                      <img
                        src={process.env.PUBLIC_URL + "items/item-3.png"}
                        alt="item-3.png"
                      />
                    </div>
                    <div>
                      <p>Gandour Dabke Original Lemon 26.7G</p>
                    </div>
                  </div>
                  <div className={style.products_images2}>
                    <div className={style.products_contents2}>
                      <img
                        src={process.env.PUBLIC_URL + "items/item-3.png"}
                        alt="item-3.png"
                      />
                    </div>
                    <div>
                      <p>Gandour Dabke Original Lemon 26.7G</p>
                    </div>
                  </div>
                  <div className={style.products_images2}>
                    <div className={style.products_contents2}>
                      <img
                        src={process.env.PUBLIC_URL + "items/item-3.png"}
                        alt="item-3.png"
                      />
                    </div>
                    <div>
                      <p>Gandour Dabke Original Lemon 26.7G</p>
                    </div>
                  </div>
                  <div className={style.products_images2}>
                    <div className={style.products_contents2}>
                      <img
                        src={process.env.PUBLIC_URL + "items/item-3.png"}
                        alt="item-3.png"
                      />
                    </div>
                    <div>
                      <p>Gandour Dabke Original Lemon 26.7G</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Carousel className={styled.carousel}>
              <Carousel.Item interval={1000}>
                <div>
                  <div>
                    <p className={styled.testimonal}>Testimonial</p>
                    <p className={styled.Marketplace}>The Best Marketplace</p>
                    <p className={styled.testi_content}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      aliqua. Lorem ipsum dolor sit amet,
                    </p>
                  </div>

                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/hr.png"}
                      alt="hr.png"
                    />
                    <div className={styled.hr_content}>
                      <p className={styled.hr_nameds}>Charlotte Smith</p>
                      <p>Wed Censtoriy</p>
                    </div>
                  </div>
                </div>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <div>
                  <div>
                    <p className={styled.testimonal}>Testimonial</p>
                    <p className={styled.Marketplace}>The Best Marketplace</p>
                    <p className={styled.testi_content}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      aliqua. Lorem ipsum dolor sit amet,
                    </p>
                  </div>

                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/hr.png"}
                      alt="hr.png"
                    />
                    <div className={styled.hr_content}>
                      <p className={styled.hr_nameds}>Charlotte Smith</p>
                      <p>Wed Censtoriy</p>
                    </div>
                  </div>
                </div>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <div>
                  <div>
                    <p className={styled.testimonal}>Testimonial</p>
                    <p className={styled.Marketplace}>The Best Marketplace</p>
                    <p className={styled.testi_content}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      aliqua. Lorem ipsum dolor sit amet,
                    </p>
                  </div>

                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "items/hr.png"}
                      alt="hr.png"
                    />
                    <div className={styled.hr_content}>
                      <p className={styled.hr_nameds}>Charlotte Smith</p>
                      <p>Wed Censtoriy</p>
                    </div>
                  </div>
                </div>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <div className={styled.debke_content}>
              <div className={styled.products_dabke_image}>
                <div>
                  <div className={styled.lemo_image_debke}>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-3.png"}
                      alt="item-3.png"
                    />
                  </div>
                  <div className={styled.debke_image_content}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                  </div>
                </div>
              </div>

              <div className={styled.products_dabke_image}>
                <div>
                  <div className={styled.lemo_image_debke}>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-3.png"}
                      alt="item-3.png"
                    />
                  </div>
                  <div className={styled.debke_image_content}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                  </div>
                </div>
              </div>

              <div className={styled.products_dabke_image}>
                <div>
                  <div className={styled.lemo_image_debke}>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-3.png"}
                      alt="item-3.png"
                    />
                  </div>
                  <div className={styled.debke_image_content}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                  </div>
                </div>
              </div>

              <div className={styled.products_dabke_image}>
                <div>
                  <div className={styled.lemo_image_debke}>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-3.png"}
                      alt="item-3.png"
                    />
                  </div>
                  <div className={styled.debke_image_content}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                  </div>
                </div>
              </div>

              <div className={styled.products_dabke_image}>
                <div>
                  <div className={styled.lemo_image_debke}>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-3.png"}
                      alt="item-3.png"
                    />
                  </div>
                  <div className={styled.debke_image_content}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                  </div>
                </div>
              </div>

              <div className={styled.products_dabke_image}>
                <div>
                  <div className={styled.lemo_image_debke}>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-3.png"}
                      alt="item-3.png"
                    />
                  </div>
                  <div className={styled.debke_image_content}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                  </div>
                </div>
              </div>

              <div className={styled.products_dabke_image}>
                <div>
                  <div className={styled.lemo_image_debke}>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-3.png"}
                      alt="item-3.png"
                    />
                  </div>
                  <div className={styled.debke_image_content}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                  </div>
                </div>
              </div>

              <div className={styled.products_dabke_image}>
                <div>
                  <div className={styled.lemo_image_debke}>
                    <img
                      src={process.env.PUBLIC_URL + "items/item-3.png"}
                      alt="item-3.png"
                    />
                  </div>
                  <div className={styled.debke_image_content}>
                    <p>Gandour Dabke Original Lemon 26.7G</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default OriginalLemon;
