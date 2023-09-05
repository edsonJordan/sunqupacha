import path from "path";
import { GatsbyNode } from "gatsby";
import { QueryResult } from "./types"; // Ajusta la ruta según la ubicación real de tus definiciones de tipo

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<QueryResult>(`
  {
    allWpPost {
      nodes {
        slug
        title
        content
        date(formatString: "D MMM, YYYY ")
        author {
          node {
            id
          }
        }
        categories{
          nodes{
            name
            contentNodes{             
              nodes{
                slug
                contentTypeName
              }
            }
          }
        }
        featuredImage {          
          node{
            localFile{
              childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 800 # Ajusta el ancho según tus necesidades
              )
            }
            }
            sourceUrl
            altText
          }
        }
        seo {
            readingTime
            canonical
            cornerstone
            focuskw
            fullHead
            metaDesc
            metaKeywords
            metaRobotsNofollow
            metaRobotsNoindex
            opengraphAuthor
            opengraphDescription
            opengraphModifiedTime
            opengraphPublishedTime
            opengraphPublisher
            opengraphSiteName
            opengraphTitle
            readingTime
            opengraphUrl
            opengraphType
            title
            twitterDescription
            twitterTitle
            schema{
              articleType
              pageType
              raw
            }
            breadcrumbs {
              text
              url
            }
          }
      }
    }
  }
  `);
  const siteData = await graphql<QueryResult>(`
  {
    wp{
      seo{
       schema {
          companyName
          companyOrPerson
          homeUrl
          inLanguage
          personName
          siteName
          siteUrl
          wordpressSiteName
        } 
      }
    }
  }
  `);
 

  const categories = await graphql<QueryResult>(`
  {
    allWpCategory{
       nodes{
         name
         slug
         uri
         posts{
           nodes{
             title
             excerpt
             slug
             uri
           }
           
         }
       }
     }
   }
  `);

  if (result.errors) {
    throw result.errors;
  }
  if (siteData.errors) {
    throw result.errors;
  }
 if (categories.errors) {
    throw result.errors;
  }
  // Obtén la plantilla de la página de publicación
  const postTemplate = path.resolve("src/templates/post.tsx"); // Ajusta la ruta según tu proyecto
  const categorieTemplate = path.resolve("src/templates/categoria.tsx"); 
  
  

  // Itera sobre los nodos y crea las páginas dinámicas
  result.data.allWpPost.nodes.forEach((postNode:any) => {
    createPage({
      path: `blog/${postNode.slug}`, // Define la ruta de la página
      component: postTemplate,
      context: {
        slug: postNode.slug,
        data:postNode,
        site:siteData.data.wp
        // Otros datos de contexto que necesitas
      },
    });
  });

  // console.log(categories);

  categories.data.allWpCategory.nodes.forEach((categorieNode:any) => {
    createPage({
      path: `categoria/${categorieNode.slug}`, // Define la ruta de la página
      component: categorieTemplate,
      context: {
        slug: categorieNode.slug,
        data:categorieNode,
        // Otros datos de contexto que necesitas
      },
    });
  });

};