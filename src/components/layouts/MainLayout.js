import React from "react";
import Welcome from "../Welcome";
import About from "../About";
import Projects from "../Projects";
import Books from "../Books";
import Contact from "../Contact";
import Footer from "../Footer";
const MainLayout = () => {
  return (
    <div>
      <Welcome />
      <About />
      <Projects />
      <Books />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;
