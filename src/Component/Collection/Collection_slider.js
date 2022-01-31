import React, { useState } from "react";

import "../Sass/collection_slider.scss";

import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/items/banner-1.png"}
          alt="banner-1.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/items/banner-1.png"}
          alt="banner-1.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/items/banner-1.png"}
          alt="banner-1.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/items/61f7ad49493ddbanner-2.png"}
          alt="61f7ad49493ddbanner-2.jpg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/items/61f7bcad7f094banner-3.png"}
          alt="61f7bcad7f094banner-3.png"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
