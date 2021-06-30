import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const AboutImg = () => (
  <StaticImage
    alt="profile picture"
    src="../../images/profile.jpg"
    placeholder="blurred"
    layout="fixed"
    width={350}
  />
);

export default AboutImg;
