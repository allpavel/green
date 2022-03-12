module.exports = {
    siteMetadata: {
        title: `Green`,
        description: `Kind upon beginning god image First you're own doesn't make beast i sixth seed. Two beginning form day face waters. Image air set first living set that creeping. That signs.`,
        author: `Alloyarov Pavel`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-anchor-links`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
};
