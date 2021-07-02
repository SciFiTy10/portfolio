import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import * as footerStyles from "../styles/Component/footer.module.scss";
import { FaAngleUp, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`${footerStyles.footer} ${"navbar-static-bottom"}`}>
      <Container>
        <span className={footerStyles.backToTop}>
          <Link to="welcome" smooth duration={1000}>
            <FaAngleUp />
          </Link>
        </span>
        <div className={footerStyles.socialLinks}>
          <a
            href="https://github.com/SciFiTy10"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-ridings-24804585/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
