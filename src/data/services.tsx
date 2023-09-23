import { graphql, useStaticQuery } from "gatsby";

export const useServiciosData = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpServicio {
        nodes {
          slug
          title
          uri
          excerpt
          featuredImageId
          iconimage {
            fieldGroupName
            iconimage {
              id
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    
                    width: 120 
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allWpServicio.nodes;
};