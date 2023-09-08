require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SunquPacha`,
    siteUrl: `https://sunqupacha.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://sunqupacha.com/',
        sitemap: 'https://sunqupacha.com/sitemap.xml',
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          },
          production: {
            policy: [{userAgent: '*', allow: '/'}]
          }
        }
      }
    }
    ,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-8K94PR2RE9", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        /* gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        }, */
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          /* respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0, */
        },
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "635580070875733",
        
      },
    },
    {
      
    resolve: 'gatsby-source-wordpress',
    
    options: {
      url: process.env.WPGRAPHQL_URL,
      protocol: `http`,
        hostingWPCOM: false,
        // useACF: true,
    }
    
  }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  {
    resolve: `gatsby-plugin-preload-fonts`,
    options: {
      // crossOrigin: `anonymous`,
      // crossOrigin: `use-credentials`,
     
    },
  },
  
  "gatsby-transformer-sharp", 
  "gatsby-plugin-postcss", 
  /* {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Roboto`,
          variants: [`400`,`500`,`700`, `900`]
        },
      ],
    },
  }, */
  // "gatsby-plugin-google-gtag", 
  "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /src/
      }
    }
  }
  ]
};

export default config;
