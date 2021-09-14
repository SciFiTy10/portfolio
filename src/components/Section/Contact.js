import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import Title from "./Title";
import * as contactStyles from "../../styles/Component/contact.module.scss";
import * as buttonStyles from "../../styles/UI/button.module.scss";
import PortfolioContext from "../../context/context";

const Contact = () => {
  const { contactData, linkedIn } = useContext(PortfolioContext);
  const { text } = contactData;
  const { url } = linkedIn;
  return (
    <section id="contact" className={contactStyles.contact}>
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className={contactStyles.contactWrapper}>
            <p className={contactStyles.contactWrapperText}>{text}</p>
          </div>
          <div className={contactStyles.contactWrapper}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonStyles.ctaBtn} ${buttonStyles.ctaBtnResume}`}
              href={url}
            >
              Let's Chat
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
