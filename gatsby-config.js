module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.example.com`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true
        },
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/src/content/blog/`
      },
      __key: "blog"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "legal",
        "path": `${__dirname}/src/content/legal/`
      },
      __key: "legal"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": `${__dirname}/src/content/pages/`
      },
      __key: "content"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "services",
        "path": `${__dirname}/src/content/services/`
      },
      __key: "services"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "main",
        "path": `${__dirname}/src/content/main/`
      },
      __key: "main"
    },
  ]
};