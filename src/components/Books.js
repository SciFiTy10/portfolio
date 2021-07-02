import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";
import BookImg from "./Image/BookImg";
import * as booksStyles from "../styles/Component/books.module.scss";
import * as buttonStyles from "../styles/UI/button.module.scss";

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
    <section id="books" className={booksStyles.books}>
      <Container>
        <div className={booksStyles.bookWrapper}>
          <Title title="Books" />
          <Row key="1">
            <Col lg={4} sm={12}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className={booksStyles.bookWrapperText}>
                  <h3 className={booksStyles.bookWrapperTextTitle}>
                    Book Title
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
                    className={`${buttonStyles.ctaBtn} ${buttonStyles.ctaBtnWelcome}`}
                    href="https://www.amazon.com/COOL-Guide-Life-Tyler-Ridings/dp/B08YQCQ96P/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
                  >
                    Buy
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
                <div className={booksStyles.bookWrapperImage}>
                  <a
                    href="#!"
                    target="_blank"
                    aria-label="Book Link"
                    rel="noopener noreferrer"
                  >
                    <div className={booksStyles.bookWrapperImageThumbnail}>
                      <BookImg />
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
