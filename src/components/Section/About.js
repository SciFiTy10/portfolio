import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";
import Video from "../Video/Video";
import * as aboutStyles from "../../styles/Component/about.module.scss";
import PortfolioContext from "../../context/context";

const About = () => {
  const { aboutData } = useContext(PortfolioContext);
  const { title, fileId, paragraphs } = aboutData;

  return (
    <section id="about" className={aboutStyles.about}>
      <Container>
        <Title title="About Me" />
        <Row className={aboutStyles.aboutWrapper}>
          <Col lg={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className={aboutStyles.aboutWrapperImage}>
                <Video fileId={fileId} title={title} />
              </div>
            </Fade>
          </Col>
          <Col lg={6} sm={12}>
            <Fade bottom={true} duration={1000} delay={1000} distance="30px">
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
