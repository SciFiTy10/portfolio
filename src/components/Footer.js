import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import * as footerStyles from "../styles/Component/footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${footerStyles.footer} ${"navbar-static-bottom"}`}>
      <Container>
        <span className={footerStyles.backToTop}>
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className={footerStyles.socialLinks}>
          <a
            key="1"
            href="https://github.com/cobidev/gatsby-simplefolio"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="github"
          >
            <i className="fa fa-refresh fa-inverse" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
