import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const AboutImg = () => (
  //render an image via Gatsby's StaticImage component
  <StaticImage
    alt="profile picture"
    src="../../images/profile.jpg"
    placeholder="blurred"
    layout="fixed"
    width={350}
  />
);

export default AboutImg;
