import React from "react";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Projects from "../components/Projects";

// markup
const IndexPage = () => {
  return (
    <main>
      <Welcome />
      <About />
      <Projects />
    </main>
  );
};

export default IndexPage;
