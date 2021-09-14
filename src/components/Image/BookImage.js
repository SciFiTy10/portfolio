import React from "react";
import a_cool_guide_to_life from "../../image/a_cool_guide_to_life.jpg";

const BookImg = () => {
  return (
    <img
      src={a_cool_guide_to_life}
      alt="a cool guide to life"
      placeholder="blurred"
      layout="fixed"
      width={350}
    />
  );
};

export default BookImg;
