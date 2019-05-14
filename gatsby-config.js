module.exports = {
  siteMetadata: {
    title: `Roly Reyes`,
    description: `Roly Reyes' weblog.`,
    author: `Roly Reyes`,
    siteUrl: `https://rolyreyes.com/`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { fileAbsolutePath: { regex: "/content/posts/" } }
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Roly Reyes",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roly Reyes' weblog`,
        short_name: `Roly's weblog`,
        start_url: `/`,
        background_color: `#111`,
        theme_color: `#111`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `snippet`,
        path: `${__dirname}/content/snippets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 75,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-prismjs`,
                  options: {
                    // Class prefix for <pre> tags containing syntax highlighting;
                    // defaults to 'language-' (eg <pre class="language-js">).
                    // If your site loads Prism into the browser at runtime,
                    // (eg for use with libraries like react-live),
                    // you may use this to prevent Prism from re-processing syntax.
                    // This is an uncommon use-case though;
                    // If you're unsure, it's best to use the default value.
                    classPrefix: "language-",
                    // This is used to allow setting a language for inline code
                    // (i.e. single backticks) by creating a separator.
                    // This separator is a string and will do no white-space
                    // stripping.
                    // A suggested value for English speakers is the non-ascii
                    // character '›'.
                    inlineCodeMarker: null,
                    // This lets you set up language aliases.  For example,
                    // setting this to '{ sh: "bash" }' will let you use
                    // the language "sh" which will highlight using the
                    // bash highlighter.
                    aliases: {},
                    // This toggles the display of line numbers globally alongside the code.
                    // To use it, add the following line in src/layouts/index.js
                    // right after importing the prism color scheme:
                    //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                    // Defaults to false.
                    // If you wish to only show line numbers on certain code blocks,
                    // leave false and use the {numberLines: true} syntax below
                    showLineNumbers: false,
                    // If setting this to true, the parser won't handle and highlight inline
                    // code used in markdown i.e. single backtick code like `this`.
                    noInlineHighlight: false,
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
