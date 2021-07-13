import React from "react";
import Welcome from "../Welcome";
import About from "../About";
import Projects from "../Projects";
import Books from "../Books";
import Contact from "../Contact";
import Footer from "../Footer";
import {
  aboutData,
  projectsData,
  bookData,
  contactData,
  linkedIn,
  github,
} from "../../Data/data";
import PortfolioContext from "../../context/context";
const MainLayout = () => {
  return (
    //provide context data for child components
    <PortfolioContext.Provider
      value={{
        aboutData,
        projectsData,
        bookData,
        contactData,
        linkedIn,
        github,
      }}
    >
      <Welcome />
      <About />
      <Projects />
      <Books />
      <Contact />
      <Footer />
    </PortfolioContext.Provider>
  );
};

export default MainLayout;
