module.exports = {
  siteMetadata: {
    title: `Raghav Kanwal`,
    menuLinks: [
      {
        name: "home",
        link: "/"
      },
      {
        name: "page2",
        link: "/page-2"
      },
      {
        name: "resume",
        link: "/resume"
      }
    ],
    description: `Raghav Kanwal | Frontend engineer`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `raghavkanwal-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#b7410e`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b7410e`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "raghavkanwal.dev",
        acl: null
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",
    
      /* Plugin options */
      options: {
    
        /* Font loading mode */
        mode: "async",
    
        /* Enable font loading listener to handle FOUT */
        enableListener: true,
    
        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],
    
        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        // custom: [
        //   {
        //     /* Exact name of the font as defied in @font-face CSS rule */
        //     name: ["Font Awesome 5 Brands", "Font Awesome 5 Free"],
        //     /* Path to the font CSS file inside the "static" folder with @font-face definition */
        //     file: "/fonts/fontAwesome/css/all.min.css",
        //   },
        // ],
    
        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
          /* Exact name of the font as defied in @font-face CSS rule */
          name: "Roboto",
          /* URL to the font CSS file with @font-face definition */
          file: "https://fonts.googleapis.com/css2?family=Roboto:300,400,700&display=swap",
          },
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "M Plus Rounded 1c",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap",
          },
        ],
      },
    }
  ],
}
