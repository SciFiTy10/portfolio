import React from "react";
import a_cool_guide_to_life from "../../images/a_cool_guide_to_life.jpg";

const BookImg = () => {
  //render an image for my book
  return (
    <img src={a_cool_guide_to_life} alt="portfolio page" className="shadow" />
  );
};

export default BookImg;
