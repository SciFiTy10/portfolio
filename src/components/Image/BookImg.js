import React from "react";
import a_cool_guide_to_life from "../../images/a_cool_guide_to_life.jpg";
import talk_like_snoop from "../../images/talk_like_snoop.jpg";
import most_popular_nyt_articles from "../../images/most_popular_nyt_articles.jpg";
import portfolio_page from "../../images/portfolio.jpg";
import { StaticImage } from "gatsby-plugin-image";

const BookImg = ({ title }) => {
  //switch to determine what image to render
  switch (title) {
    case "A COOL Guide To Life":
      return (
        <img
          src={a_cool_guide_to_life}
          alt="a cool guide to life"
          placeholder="blurred"
          layout="fixed"
          width={350}
        />
      );
    case "Talk Like Snoop (Alexa Skill)":
      return (
        <img
          src={talk_like_snoop}
          alt="talk like snoop (alexa skill)"
          placeholder="blurred"
          layout="fixed"
          width={350}
          height={322}
        />
      );
    case "Most Popular NYT Articles":
      return (
        <img
          src={most_popular_nyt_articles}
          alt="most popular nyt articles"
          placeholder="blurred"
          layout="fixed"
          width={620}
        />
      );
    case "Portfolio Page":
      return (
        <img
          src={portfolio_page}
          alt="portfolio page"
          placeholder="blurred"
          layout="fixed"
          width={620}
        />
      );
  }
};

export default BookImg;
