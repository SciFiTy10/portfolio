module.exports = {
  siteMetadata: {
    title: "Ty's Portfolio",
    charSet: "utf-8",
    lang: "en",
    name: "viewport",
    content: "width=device-width, initial-scale=1",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/image/",
      },
      __key: "images",
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
  ],
};
