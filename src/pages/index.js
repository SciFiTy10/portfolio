import React from "react";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Projects from "../components/Projects";
import Books from "../components/Books";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ty's Portfolio</title>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Welcome />
      <About />
      <Projects />
      <Books />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
