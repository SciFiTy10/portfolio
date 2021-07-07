import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const BookImg = () => (
  <StaticImage
    alt="profile picture"
    src="../../images/a_cool_guide_to_life.jpg"
    placeholder="blurred"
    layout="fixed"
    width={350}
  />
);

export default BookImg;
