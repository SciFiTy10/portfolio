import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../components/Title";
import ProjectImg from "../components/Image/ProjectImg";
import * as projectsStyles from "../styles/Component/projects.module.scss";
import * as buttonStyles from "../styles/UI/button.module.scss";
import * as typographyStyles from "../styles/UI/typography.module.scss";

const Projects = () => {
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
    <section id="projects" className={projectsStyles.projects}>
      <Container>
        <div className={projectsStyles.projectWrapper}>
          <Title title="Projects" />
          <Row key="1">
            <Col lg={4} sm={12}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className={projectsStyles.projectWrapperText}>
                  <h3 className={projectsStyles.projectWrapperTextTitle}>
                    Project Title
                  </h3>
                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi neque, ipsa animi maiores repellendu
                      distinctioaperiam earum dolor voluptatum consequatur
                      blanditiis inventore debitis fuga numquam voluptate
                      architecto itaque molestiae.
                    </p>
                    <p className="mb-4"></p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonStyles.ctaBtn} ${typographyStyles.textColorMain}`}
                    href="https://github.com/SciFiTy10/portfolio"
                  >
                    Source Code
                  </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className={projectsStyles.projectWrapperImage}>
                  <a
                    href="#!"
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={projectsStyles.projectWrapperImageThumbnail}
                    >
                      <ProjectImg />
                    </div>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
