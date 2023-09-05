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
      breadcrumbs: {
        text: string;
        url: string;
      }[];
      schema:{
        raw:string
      };
    };
  };
  site:any;
  children?: ReactNode;
}
/* interface SEOData {
  title: string;
  metaDesc: string;
  // image: string;
  // url: string;
  // twitterUsername: string;
} */

export const SEO: React.FC<SeoMetaTagsProps> = ({ data, site, children}) => {
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
  } = data.seo;


  // console.log(site);
  
  
  const jsonLdData = JSON.parse(schema.raw);
  const dataLD =  {
    articleId: `${urlWeb}/#article`,
    articleUrl: `${urlWeb}/blog/agencias-digitales-en-peru-estrategias-clave-para-emprendedores/`,
    articleTitle: "Agencias Digitales en Perú: Éxito en el Posicionamiento SEO",
    articleDescription: "Descripción de tu artículo",
    articleImageId: `${urlWeb}/#primaryimage`,
    articleImageUrl: `${urlWeb}/static/6536fe44aca1e31d048bded3d7aba714/agencias-digitales-en-peru-scaled.jpg`,
    articleDatePublished: "2023-09-01T18:20:40+00:00",
    articleDateModified: "2023-09-02T16:53:21+00:00",
    authorName: "admin",
    authorId: "/#/schema/person/0663e995a0a3c73a0714cf38bcba32ec",
    organizationId: `/#organization`,
    organizationName: "SunquPacha",
    organizationDescription: "Descripción de la organización",
    organizationLogoUrl: `${urlWeb}/static/f4cbb280b57eebbd0da070197606b71e/logo.png`,
  };



  return (
    <>
      <html lang="es" />
      <meta name="description" content={metaDesc} />
        <link rel="canonical" href={`${urlWeb}${canonical}`} />
        {/* OpenGraph meta tags */}
        <meta property="og:url" content={`${urlWeb}${canonical}`} />
        <meta property="og:type" content={opengraphType} />
        <meta property="og:title" content={opengraphTitle} />
        <meta property="og:description" content={opengraphDescription} />
        {/* Falta ver este tema */}
        {/* <meta property="og:image" content={`${canonical}${opengraphImage}`} /> */}

        {/* Twitter meta tags */}
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <title>{title}</title>
        {/* Breadcrumbs */}
        <JsonLdGenerator data={dataLD} urlWeb={urlWeb} /> 
      {children}
    </>
  );
};