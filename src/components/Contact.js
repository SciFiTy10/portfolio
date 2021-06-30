import React from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import Title from "../components/Title";
import * as contactStyles from "../styles/Component/contact.module.scss";
import * as buttonStyles from "../styles/UI/button.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={contactStyles.contact}>
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className={contactStyles.contactWrapper}>
            <p className={contactStyles.contactWrapperText}>
              To request a copy of my resume
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonStyles.ctaBtn} ${buttonStyles.ctaBtnResume}`}
              href="https://github.com/cobidev/react-simplefolio"
            >
              Let's Talk
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
