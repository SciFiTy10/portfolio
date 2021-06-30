import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const BookImg = () => (
  <StaticImage
    alt="profile picture"
    src="../../images/profile.jpg"
    placeholder="blurred"
    layout="fixed"
    width={700}
    height={350}
  />
);

export default BookImg;
