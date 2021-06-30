import React from "react";
import Fade from "react-reveal/Fade";
import * as typographyStyles from "../styles/UI/typography.module.scss";

const Title = ({ title }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2 className={typographyStyles.sectionTitle}>{title}</h2>
  </Fade>
);

export default Title;
