import React from "react";

import "../Sass/freshfood.scss";

const Freshfood = () => {
  return (
    <>
      <div className="container">
        <div className="fresh_food">
          <img
            src={process.env.PUBLIC_URL + "items/getfreesfood.jpg"}
            alt="getfreesfood.jpg"
            className="food_images"
          />
        </div>
      </div>
    </>
  );
};
export default Freshfood;
