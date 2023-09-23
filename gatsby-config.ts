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
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/**/*.html": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/page-data/*.json": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/app-data.json": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/static/*": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable",
          ],
        },
      },
    }
    ,
   
    {
      // 2735675966651735
      // antiguo 635580070875733
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "2735675966651735",
        
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
  {
    resolve:"gatsby-plugin-sharp",
    options:{
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `dominantColor`,
        breakpoints: [320, 744, 1024, 1280, 1440],
      }
    }
  }
  , 
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
