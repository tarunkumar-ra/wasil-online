import React, { Component } from "react";

import "../Sass/vegi_images_sliders.scss";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default class Vegitabletablesimagesslider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <Slider className="vegtablesimagestables_sliders" {...settings}>
          <img
            src={process.env.PUBLIC_URL + "items/home-card/01card.jpg"}
            alt="01card.jpg"
          />

          <img
            src={process.env.PUBLIC_URL + "items/home-card/02card.jpg"}
            alt="02card.jpg"
          />

          <img
            src={process.env.PUBLIC_URL + "items/home-card/03card.jpg"}
            alt="03card.jpg"
          />

          <img
            src={process.env.PUBLIC_URL + "items/home-card/01card.jpg"}
            alt="01card.jpg"
          />

          <img
            src={process.env.PUBLIC_URL + "items/home-card/02card.jpg"}
            alt="02card.jpg"
          />

          <img
            src={process.env.PUBLIC_URL + "items/home-card/03card.jpg"}
            alt="03card.jpg"
          />

          <img
            src={process.env.PUBLIC_URL + "items/home-card/01card.jpg"}
            alt="01card.jpg"
          />

          <img
            src={process.env.PUBLIC_URL + "items/home-card/02card.jpg"}
            alt="02card.jpg"
          />

          <img
            src={process.env.PUBLIC_URL + "items/home-card/03card.jpg"}
            alt="03card.jpg"
          />
        </Slider>
      </div>
    );
  }
}
