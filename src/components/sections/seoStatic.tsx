import React, { ReactNode } from "react";



interface SeoMetaTagsProps {
 
    title?: string;
    metaDesc?: string;
    titleSection?:string;
    children?:ReactNode;
    opengraphDescription? :string;
    ogimage?:string;
    tittleTwitter?:string;
    metaTwitter?:string;
    logoImage?:string;
    canonical?:string;
    noIndex?:boolean;
  // image: string;
  // url: string;
  // twitterUsername: string;
}

export const SeoStatic: React.FC<SeoMetaTagsProps> = ( {title, metaDesc, titleSection, opengraphDescription, ogimage, tittleTwitter,metaTwitter, logoImage, canonical, noIndex = false, children}) => {
  const urlWeb : string | undefined = process.env.SITE_URL;
  




  // console.log(site);
  
  const dataLD =  {
    "@context": "http://schema.org",
    "@type": "WebPage",
    Url: `${urlWeb}`,
    Title: `${title}`,
    Description: `${opengraphDescription}`,
    image: `${urlWeb}/${ogimage}`,
    datePublished: "2023-09-01T18:20:40+00:00",
    dateModified: "2023-09-02T16:53:21+00:00",
    authorName: "admin",
    organizationId: `/#organization`,
    organizationName: "SunquPacha",
    organizationDescription: "Agencia de Desarrollo Web en Perú.",
    organizationLogoUrl: `${urlWeb}${logoImage}`,
    "author": {
      "@type": "Person",
      "name": "admin"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SunquPacha",
      "description": "Agencia de Desarrollo Web en Perú.",
      "logo": {
        "@type": "ImageObject",
        "url": `${urlWeb}${logoImage}`
      }
    }
  };
  


  return (
    <>
      <html lang="es" />
      <meta name="description" content={metaDesc} />
      <title>{title}</title>
        <link rel="canonical" href={`${urlWeb}${canonical}`} />
        {/* OpenGraph meta tags */}
        <meta property="og:url" content={`${urlWeb}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={titleSection} />
        <meta property="og:description" content={opengraphDescription} />
        {/* Falta ver este tema */}
        <meta property="og:image" content={`${urlWeb}${ogimage}`} />

        {/* Twitter meta tags */}
        <meta name="twitter:title" content={tittleTwitter} />
        <meta name="twitter:description" content={metaTwitter} />
        <meta property="twitter:image" content={`${urlWeb}${ogimage}`} />
    
   
        {
            noIndex ? (
            <meta name="robots" content="noindex" />
          ) :  <meta name="robots" content="index, follow" />
        }
        
        {/* Breadcrumbs */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataLD) }} />
      {children}
    </>
  );
};