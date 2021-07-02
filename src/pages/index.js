import React from "react";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Projects from "../components/Projects";
import Books from "../components/Books";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// markup
const IndexPage = () => {
  return (
    <main>
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
