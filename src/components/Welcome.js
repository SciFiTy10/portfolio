import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import * as welcomeStyles from "../styles/Component/welcome.module.scss";
import * as buttonStyles from "../styles/UI/button.module.scss";

const Welcome = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <section id={welcomeStyles.welcome} className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className={welcomeStyles.welcomeTitle}>
            Hi, my name is
            <span className={welcomeStyles.textColorMain}> Tyler Ridings</span>!
            <br />
            I'm a{" "}
            <span className={welcomeStyles.textColorMain}>
              software developer
            </span>{" "}
            and an
            <span className={welcomeStyles.textColorMain}> author. </span>
            <br />
            Welcome to my portfolio!
          </h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className={welcomeStyles.welcomeCta}>
            <span
              className={`${buttonStyles.ctaBtn} ${buttonStyles.ctaBtnWelcome}`}
            >
              <Link to="about" smooth duration={1000}>
                Know more
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Welcome;
