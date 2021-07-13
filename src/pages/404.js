import * as React from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";

import * as welcomeStyles from "../styles/Component/welcome.module.scss";
import * as buttonStyles from "../styles/UI/button.module.scss";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <section className={`${welcomeStyles.welcome} 'jumbotron'`}>
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className={`${welcomeStyles.welcomeTitle} 'text-center'`}>
              Sorry, this path does not exist{" "}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p
              className={`${welcomeStyles.welcomeCta} 'justify-content-center'`}
            >
              <Link
                className={`${buttonStyles.ctaBtn} ${buttonStyles.ctaBtnWelcome}`}
                to="/"
              >
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </main>
  );
};

export default NotFoundPage;
