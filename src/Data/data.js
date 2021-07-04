//about
export const aboutData = {
  img: "profile.jpg",
  paragraphs: [
    {
      id: 1,
      text: `I'm a professional software developer who loves to 
      solve challenging problems in order to make people's
      lives easier. I'm somebody who looks forward to being
      stumped because it generates a new learning opportunity.
      There is always a better way to build a solution, and that keeps me motivated to 
      improve my craft as a developer. 
      `,
    },
    {
      id: 2,
      text: `When I'm not programming, one of my favorite things to do
      is to write. In 2020, I published a book called "A COOL Guide To Life"
      which you can check out in the "Books" section below. Writing and 
      programming go hand-in-hand because they both push you to 
      structure your thoughts. I believe the experience of 
      producing well written code is a similar experience to producing
      good writing: it's best achieved when you do a lot of it.`,
    },
  ],
};

//projects
export const projectsData = {
  projects: [
    {
      id: 1,
      title: "Portfolio Page",
      description: `This application is a Gatsby project I built to show
      off my current and future projects. It is a static, single page application
      which holds details about me, my projects, and the books I've written.`,
      source: "https://github.com/SciFiTy10/portfolio",
      url: "",
      technologies: [
        {
          id: 1,
          name: "Gatsby.js",
          text: "a frontend framework for developing and testing my application",
        },
        {
          id: 2,
          name: "Gatsby Cloud",
          text: "an application for building, deploying, and hosting my application",
        },
        {
          id: 3,
          name: "React",
          text: "a library for creating reusable UI components",
        },
        {
          id: 4,
          name: "GraphQL",
          text: "a query language I used with Gatsby to look up site metadata and image files",
        },
        {
          id: 5,
          name: "SCSS",
          text: "a CSS pre-processor which allows me to write style sheets using nested styles and variables",
        },
        {
          id: 6,
          name: "CSS Modules",
          text: "allows me to scope my CSS classes and ids to specific components",
        },
        {
          id: 7,
          name: "React Reveal",
          text: "an animation library for React for managing animations for my components",
        },
        {
          id: 8,
          name: "React Bootstrap/Bootstrap",
          text: "a UI libary/component package I used to manage flexible rows and columns",
        },
        {
          id: 9,
          name: "React Icons",
          text: "an icon package which allowed me to use React components to include icons in my application",
        },
      ],
    },
    {
      id: 2,
      title: "Most Popular NYT Articles",
      description: `This is an Angular application which displays the most popular articles 
      from the New York Times API. Articles can be filtered by 
      the most emailed, the most shared to Facebook, and the most viewed.`,
      source: "https://github.com/SciFiTy10/MostPopularNYTArticles",
      url: "",
      technologies: [
        {
          id: 1,
          name: "Angular",
          text: "a frontend framework I used for developing UI components, client-side routing, and injection of services",
        },
        {
          id: 2,
          name: "Typescript",
          text: "a superset of Javascript I used for defining interfaces",
        },
        {
          id: 3,
          name: "Angular Material UI",
          text: "a UI component library I used which follows Google's material design spec for styling.",
        },
        {
          id: 4,
          name: "Angular Flex Layout",
          text: "a module I used for managing flexible rows and columns within my application UI",
        },
      ],
    },
    {
      id: 3,
      title: "Talk Like Snoop (Alexa Skill)",
      description: `This is an Alexa skill which takes the user's input and converts
      each word to how Snoop Dogg would say it. For example if the 
      user’s input is “say on the contrary, that chicken was bad” 
      the skill returns “on the contrizzle that chickizzle was bizzad."`,
      source: "https://github.com/SciFiTy10/talkLikeSnoop",
      url: "https://www.amazon.com/SciFiTy-Talk-Like-Snoop/dp/B07K1SHLJ8/ref=sr_1_1?dchild=1&keywords=talk+like+snoop&qid=1625369746&s=digital-skills&sr=1-1",
      technologies: [
        {
          id: 1,
          name: "Python",
          text: "a scripting language I used to write the skill. Application logic is separated into modules which perform specific functions",
        },
        {
          id: 2,
          name: "AWS Lambda",
          text: "a serverless application service I used to host the backend of my Alexa skill",
        },
        {
          id: 3,
          name: "Alexa Developer Console",
          text: "a development environment I used to define voice intents, as well as develop, and deploy the frontend of my Alexa skill",
        },
      ],
    },
  ],
};

//books
export const bookData = {
  books: [
    {
      id: 1,
      title: "A COOL Guide To Life",
      description: `This book is a collections of ideas, stories, lessons, and values
      which I believe are timeless. I wrote this during the COVID-19 pandemic
      right after my son was born. I thought a lot about if something 
      were to happen to me, what would I want my kids to know about life? This was
      a lot of fun to put together and I even taught myself how to use pixel art
      drawing software in order to design the cover and illustrations.`,
      url: "https://www.amazon.com/COOL-Guide-Life-Tyler-Ridings/dp/B08YQCQ96P/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=",
    },
  ],
};

//contact
export const contactData = {
  text: "To request a copy of my resume, please contact me via LinkedIn",
};

//linkedIn
export const linkedIn = {
  url: "https://www.linkedin.com/in/tyler-ridings-24804585/",
};

//Github
export const github = {
  url: "https://github.com/SciFiTy10",
};
