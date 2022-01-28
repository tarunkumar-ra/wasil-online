import React from "react";

import Vegitablesimageslider from "../Vegitable_slider/vegitable_image_slider";

import Vegitablesfreshimageslider from "../vegi_image_slider/vegi_image_slider";

import Vegitabletablesimagesslider from "../vegitables_images_tables_slider/vegitables_images_tables_slider";

const ImageSlider = () => {
  return (
    <>
      <div className="container">
        <Vegitablesimageslider />
        <Vegitablesfreshimageslider />
        <Vegitabletablesimagesslider />
      </div>
    </>
  );
};
export default ImageSlider;
