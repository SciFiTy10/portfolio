import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ProjectImg = () => (
  <StaticImage
    alt="profile picture"
    src="../../images/profile.jpg"
    placeholder="blurred"
  />
);

export default ProjectImg;
