import React from "react";
import talk_like_snoop from "../../images/talk_like_snoop.jpg";
import most_popular_nyt_articles from "../../images/most_popular_nyt_articles.jpg";
import portfolio_page from "../../images/portfolio.jpg";

const ProjectImg = ({ title }) => {
  //define inline styling for project images
  const styles = {
    width: "100%",
  };
  //switch to determine what image to render
  switch (title) {
    case "Portfolio Page":
      return (
        <img
          src={portfolio_page}
          alt="portfolio page"
          className="shadow"
          style={styles}
        />
      );
    case "Talk Like Snoop (Alexa Skill)":
      return (
        <img
          src={talk_like_snoop}
          alt="talk like snoop (alexa skill)"
          className="shadow"
          style={{ style: "height: 50%;" }}
        />
      );
    case "Most Popular NYT Articles":
      return (
        <img
          src={most_popular_nyt_articles}
          alt="most popular nyt articles"
          className="shadow"
          style={styles}
        />
      );
  }
};

export default ProjectImg;
