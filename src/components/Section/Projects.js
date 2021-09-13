import React, { useContext, Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";
import Video from "../Video/Video";
import * as projectsStyles from "../../styles/Component/projects.module.scss";
import * as buttonStyles from "../../styles/UI/button.module.scss";
import * as typographyStyles from "../../styles/UI/typography.module.scss";

import PortfolioContext from "../../context/context";

const Projects = () => {
  const { projectsData } = useContext(PortfolioContext);
  const { projects } = projectsData;

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
                      bottom={true}
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
                      bottom={true}
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
                            <Video
                              fileId={project.fileId}
                              title={project.title}
                            />
                          </div>
                        </a>
                      </div>
                    </Fade>
                  </Col>
                </Row>
                <Row className={projectsStyles.projectsTechnologiesHeader}>
                  <Col sm={12}>
                    <Fade
                      bottom={true}
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
                      bottom={true}
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
