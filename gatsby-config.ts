import path from "path"

module.exports = {
    siteMetadata: {
        title: `TongZ`,
        description: `TongZ's personal website`,
        author: `iamtongton@gmail.com`,
        siteUrl: `https://tongz.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.resolve("./src/images"),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: path.resolve("./src/pages"),
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // maxWidth: 590,
                        },
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // { // PWA manifest
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: `gatsby-starter-default`,
        //         short_name: `starter`,
        //         start_url: `/`,
        //         background_color: `#663399`,
        //         // This will impact how browsers show your PWA/website
        //         // https://css-tricks.com/meta-theme-color-and-trickery/
        //         // theme_color: `#663399`,
        //         display: `minimal-ui`,
        //         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        //     },
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                // Override the file regex for Sass
                // sassRuleTest: /\.global\.s(a|c)ss$/,
                // Override the file regex for CSS modules
                sassRuleModulesTest: /\.module\.s(a|c)ss$/,
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true, // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                tailwind: true, // Enable tailwindcss support
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
                purgeCSSOptions: {
                    content: [path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}")],
                    // https://purgecss.com/configuration.html#options
                    // safelist: ['safelist'], // Don't remove this selector
                },
                // More options defined here https://purgecss.com/configuration.html#options
            },
        },
    ],
}
