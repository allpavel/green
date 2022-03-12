import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`;

const SEO = ({ title, description }) => {
    const { site: { siteMetadata } } = useStaticQuery(query);
    const metaDescription = description || siteMetadata.description;
    return (
        <Helmet>
            <html lang="en" />
            <title>{`${title} | ${siteMetadata.title}`}</title>
            <meta
                name="description"
                content={metaDescription}
            />
        </Helmet>
    );
};

export default SEO;
