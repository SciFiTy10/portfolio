import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import * as footerStyles from "../../styles/Component/footer.module.scss";
import { FaAngleUp, FaGithub, FaLinkedin } from "react-icons/fa";
import PortfolioContext from "../../context/context";

const Footer = () => {
  const { github, linkedIn } = useContext(PortfolioContext);
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
            href={github.url}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="github"
          >
            <FaGithub />
          </a>
          <a
            href={linkedIn.url}
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
