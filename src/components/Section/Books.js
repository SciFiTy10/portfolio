import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";
import BookImage from "../Image/BookImage";
import * as booksStyles from "../../styles/Component/books.module.scss";
import * as buttonStyles from "../../styles/UI/button.module.scss";
import PortfolioContext from "../../context/context";

const Books = () => {
  const { bookData } = useContext(PortfolioContext);
  const { books } = bookData;
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
          {books.map((book) => {
            return (
              <Row key={book.id}>
                <Col lg={4} sm={12}>
                  <Fade
                    bottom={true}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className={booksStyles.bookWrapperText}>
                      <h3 className={booksStyles.bookWrapperTextTitle}>
                        {book.title}
                      </h3>
                      <div>
                        <p>{book.description}</p>
                        <p className="mb-4"></p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonStyles.ctaBtn} ${buttonStyles.ctaBtnWelcome}`}
                        href={book.url}
                      >
                        Buy
                      </a>
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
                    <div className={booksStyles.bookWrapperImage}>
                      <a
                        href={book.url}
                        target="_blank"
                        aria-label="Book Link"
                        rel="noopener noreferrer"
                      >
                        <div className={booksStyles.bookWrapperImageThumbnail}>
                          <BookImage />
                        </div>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Books;
