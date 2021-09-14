import React from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import * as welcomeStyles from "../../styles/Component/welcome.module.scss";
import * as buttonStyles from "../../styles/UI/button.module.scss";
import * as typographyStyles from "../../styles/UI/typography.module.scss";

const Welcome = () => {
  return (
    <section id="welcome" className={`${welcomeStyles.welcome} 'jumbotron'`}>
      <Container>
        <Fade bottom={true} duration={1000} delay={500} distance="30px">
          <h1 className={welcomeStyles.welcomeTitle}>
            Hi, my name is
            <span className={typographyStyles.textColorMain}>
              {" "}
              Tyler Ridings
            </span>
            .
            <br />
            Welcome to my portfolio page!{" "}
          </h1>
        </Fade>
        <Fade bottom={true} duration={1000} delay={1000} distance="30px">
          <p className={welcomeStyles.welcomeCta}>
            <span
              className={`${buttonStyles.ctaBtn} ${buttonStyles.ctaBtnWelcome}`}
            >
              <Link to="about" smooth duration={1000}>
                About Me
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Welcome;
