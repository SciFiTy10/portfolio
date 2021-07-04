import React from "react";

import { Helmet } from "react-helmet";
import MainLayout from "../components/layouts/MainLayout";
import { useStaticQuery, graphql } from "gatsby";

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          charSet
          content
          lang
          name
          title
        }
      }
    }
  `);
  return (
    <main>
      <Helmet>
        <meta charSet={data.site.siteMetadata.charSet} />
        <title>{data.site.siteMetadata.title}</title>
        <html lang={data.site.siteMetadata.lang} />
        <meta
          name={data.site.siteMetadata.name}
          content={data.site.siteMetadata.content}
        />
      </Helmet>
      <MainLayout />
    </main>
  );
};

export default IndexPage;
