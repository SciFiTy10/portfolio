import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../components/Title";
import AboutImg from "../components/Image/AboutImg";
import * as aboutStyles from "../styles/Component/about.module.scss";

const About = () => {
  //const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about" className={aboutStyles.about}>
      <Container>
        <Title title="About Me" />
        <Row className={aboutStyles.aboutWrapper}>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className={aboutStyles.aboutWrapperImage}>
                <AboutImg />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className={aboutStyles.aboutWrapperInfo}>
                <p className={aboutStyles.aboutWrapperInfoText}>
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi neque, ipsa animi maiores repellendu
                  distinctioaperiam earum dolor voluptatum consequatur
                  blanditiis inventore debitis fuga numquam voluptate architecto
                  itaque molestiae."
                </p>
                <p className={aboutStyles.aboutWrapperInfoText}>
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi neque, ipsa animi maiores repellendu
                  distinctioaperiam earum dolor voluptatum consequatur
                  blanditiis inventore debitis fuga numquam voluptate architecto
                  itaque molestiae."
                </p>
                <p className={aboutStyles.aboutWrapperInfoText}>
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
