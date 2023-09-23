import React, { ReactNode } from "react";

import { graphql, useStaticQuery } from "gatsby"
import JsonLdGenerator from "./../../components/GeneratorJsonLD"; // Asegúrate de importar el componente




export interface Wp {
  seo: SEO;
}

export interface SEO {
  schema: Schema;
}

export interface Schema {
  companyName:       string;
  companyOrPerson:   string;
  homeUrl:           string;
  inLanguage:        string;
  personName:        null;
  siteName:          string;
  siteUrl:           string;
  wordpressSiteName: string;
}

export interface Extensions {
}


export interface Extensions {
}

interface SeoMetaTagsProps {
  data: {
    slug:string;
    featuredImage:{
      node:{
        localFile:{
          childImageSharp:{
            gatsbyImageData:{
              images:{
                fallback:[]
              }
            }
          }
        }
      }
    }
    seo: {
      title: string;
      description: string;
      canonical: string;
      opengraphUrl: string;
      opengraphType: string;
      opengraphTitle: string;
      metaDesc:string;
      opengraphDescription: string;
      opengraphImage: string;
      twitterTitle: string;
      twitterDescription: string;
      metaRobotsNofollow:string;
      metaRobotsNoindex:string;
      breadcrumbs: {
        text: string;
        url: string;
      }[];
      schema:{
        raw:string
      };
    };
  };
  // site:any;
  children?: ReactNode;
}
/* interface SEOData {
  title: string;
  metaDesc: string;
  // image: string;
  // url: string;
  // twitterUsername: string;
} */

export const SEO: React.FC<SeoMetaTagsProps> = ({ data, children}) => {
  const urlWeb : string | undefined = process.env.SITE_URL;
  
 
  
  
  // const { title: defaultTitle, metaDesc: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata();
  const {
    title,
    canonical,
    opengraphUrl,
    opengraphType,
    opengraphTitle,
    opengraphDescription,
    opengraphImage,
    twitterTitle,
    twitterDescription,
    breadcrumbs,
    metaDesc,
    schema,
    metaRobotsNofollow,
    metaRobotsNoindex,
  } = data.seo;

  const {
    slug
  } = data
  
  
  const localFileImage = data.featuredImage?.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src;
  
  const logoImage = useStaticQuery(graphql`
  query {
    logoSectionImage: allFile(
      filter: {
        extension: { regex: "/(png)/" }
        absolutePath: { regex: "/images/pages/" }
        name: { eq: "logo" }
      }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 915, quality: 70) {
            aspectRatio
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }    
  }
`);
 
const srcLogo = logoImage.logoSectionImage.nodes[0].childImageSharp.fluid.src;

  const dataLD =  {
    articleId: `${urlWeb}/#article`,
    articleUrl: `${urlWeb}/blog/${slug}`,
    articleTitle: {title},
    articleDescription: {metaDesc},
    articleImageId: `${urlWeb}/#primaryimage`,
    articleImageUrl: `${urlWeb}${localFileImage}`,
    articleDatePublished: "2023-09-01T18:20:40+00:00",
    articleDateModified: "2023-09-02T16:53:21+00:00",
    authorName: "Edson Huamani",
    // authorId: "/#/schema/person/0663e995a0a3c73a0714cf38bcba32ec",
    organizationId: `/#organization`,
    organizationName: "SunquPacha",
    organizationDescription: "Agencia de Desarrollo Web en Perú",
    organizationLogoUrl: `${urlWeb}${srcLogo}`,
  };

    //console.log(`${urlWeb}/blog${canonical}`);
    

  return (
    <>
      <html lang="es" />

      <title>{title}</title>
      <meta name="description" content={metaDesc} />

        {/* <link rel="canonical" href={`${urlWeb}${canonical}`} /> */}

        <meta property="og:url" content={`${urlWeb}/blog/${slug}`} />
        <meta property="og:type" content={opengraphType} />
        <meta property="og:title" content={opengraphTitle} />
        <meta property="og:description" content={opengraphDescription} />
        <meta property="og:image" content={`${urlWeb}${localFileImage}`} />

        <meta name="robots" content={`${metaRobotsNoindex}, ${metaRobotsNofollow}`}/>


        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta property="twitter:image" content={`${urlWeb}${localFileImage}`} />


        
        <JsonLdGenerator data={dataLD} urlWeb={urlWeb} /> 

      {children}
    </>
  );
};