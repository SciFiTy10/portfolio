import React, { useEffect, useContext, useState, Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../components/Title";
import ProjectImg from "../components/Image/ProjectImg";
import * as projectsStyles from "../styles/Component/projects.module.scss";
import * as buttonStyles from "../styles/UI/button.module.scss";
import * as typographyStyles from "../styles/UI/typography.module.scss";

import PortfolioContext from "../context/context";

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { projectsData } = useContext(PortfolioContext);
  const { projects } = projectsData;

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
          {projects.map((project) => {
            return (
              <Fragment key={project.id}>
                <Row>
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
                          {project.title}
                        </h3>
                        <div>
                          <p>{project.description}</p>
                          <p className="mb-4"></p>
                        </div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${buttonStyles.ctaBtn} ${buttonStyles.ctaBtnWelcome}`}
                          href={project.source}
                        >
                          Source Code
                        </a>
                        {project.url && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${buttonStyles.ctaBtn} ${typographyStyles.textColorMain}`}
                            href={project.url}
                          >
                            See Live
                          </a>
                        )}
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
                          href={project.source}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <div
                            className={
                              projectsStyles.projectWrapperImageThumbnail
                            }
                          >
                            <ProjectImg title={project.title} />
                          </div>
                        </a>
                      </div>
                    </Fade>
                  </Col>
                </Row>
                <Row className={projectsStyles.projectsTechnologiesHeader}>
                  <Col sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <h5>
                        <strong>Technologies</strong>
                      </h5>
                    </Fade>
                  </Col>
                </Row>
                <Row className={projectsStyles.projectsTechnologiesBody}>
                  <Col sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <ul>
                        {project.technologies.map((technology) => {
                          return (
                            <li key={technology.id}>
                              <strong>{technology.name}</strong>
                              {" - "}
                              {technology.text}
                            </li>
                          );
                        })}
                      </ul>
                    </Fade>
                  </Col>
                </Row>
              </Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
