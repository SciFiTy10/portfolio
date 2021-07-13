import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../components/Title";
import AboutImg from "../components/Image/AboutImg";
import * as aboutStyles from "../styles/Component/about.module.scss";
import PortfolioContext from "../context/context";

const About = () => {
  const { aboutData } = useContext(PortfolioContext);
  const { paragraphs } = aboutData;

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
          <Col lg={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className={aboutStyles.aboutWrapperImage}>
                <AboutImg />
              </div>
            </Fade>
          </Col>
          <Col lg={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className={aboutStyles.aboutWrapperInfo}>
                {paragraphs.map((paragraph) => {
                  return (
                    <p
                      className={aboutStyles.aboutWrapperInfoText}
                      key={paragraph.id}
                    >
                      {paragraph.text}
                    </p>
                  );
                })}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
