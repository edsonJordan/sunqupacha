import React from "react";

interface JsonLdGeneratorProps  {
  data: {
    articleId: string;
    articleUrl: string;
    articleTitle: string;
    articleDescription: string;
    articleImageId: string;
    articleImageUrl: string;
    articleDatePublished: string;
    articleDateModified: string;
    authorName: string;
    authorId: string;
    organizationId: string;
    organizationName: string;
    organizationDescription: string;
    organizationLogoUrl: string;
  };
  urlWeb:string
}

const JsonLdGenerator: React.FC<JsonLdGeneratorProps > = ({ data, urlWeb }) => {
  const {
    articleId,
    articleUrl,
    articleTitle,
    articleDescription,
    articleImageId,
    articleImageUrl,
    articleDatePublished,
    articleDateModified,
    authorName,
    authorId,
    organizationId,
    organizationName,
    organizationDescription,
    organizationLogoUrl,
  } = data;

  // console.log(articleDescription);
  
    
  // console.log(articleUrl);
    

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Article", "BlogPosting"],
        "@id": articleUrl,
        isPartOf: {
          "@id": urlWeb,
        },
        author: {
          name: authorName,
          "@id": authorId,
        },
        headline: articleTitle,
        datePublished: articleDatePublished,
        dateModified: articleDateModified,
        mainEntityOfPage: {
          "@id": articleUrl,
        },
        wordCount: 757, // Cambia esto al valor real si es necesario
        commentCount: 0, // Cambia esto al valor real si es necesario
        publisher: {
          "@id": organizationId,
        },
        image: {
          "@id": articleImageUrl,
        },
        thumbnailUrl: articleImageUrl,
        articleSection: ["Agencia digital"], // Cambia esto si es necesario
        inLanguage: "es", // Cambia esto si es necesario
        potentialAction: [
          {
            "@type": "CommentAction",
            name: "Comment",
            target: [`${articleUrl}#respond`],
          },
        ],
      },
      {
        "@type": ["WebPage", "ItemPage"],
        "@id": articleUrl,
        url: articleUrl,
        name: articleTitle,
        // 
        isPartOf: {
          "@id": `${urlWeb}`, // Cambia esto al valor correcto
        },
        primaryImageOfPage: {
          "@id": articleImageUrl,
        },
        image: {
          "@id": articleImageUrl,
        },
        thumbnailUrl: articleImageUrl,
        datePublished: articleDatePublished,
        dateModified: articleDateModified,
        description: articleDescription,
        breadcrumb: {
          "@id": `${urlWeb}/#breadcrumb`, // Cambia esto al valor correcto
        },
        inLanguage: "es", // Cambia esto si es necesario
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [articleUrl],
          },
        ],
      },
      {
        "@type": "ImageObject",
        inLanguage: "es", // Cambia esto si es necesario
        "@id": articleImageId,
        url: articleImageUrl,
        contentUrl: articleImageUrl,
        width: 2560, // Cambia esto al valor real
        height: 1707, // Cambia esto al valor real
        caption: "Agencias digitales en Perú", // Cambia esto al valor real
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${urlWeb}/#breadcrumb`, // Cambia esto al valor correcto
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Portada", // Cambia esto al valor real
            item: "/", // Cambia esto al valor real
          },
          {
            "@type": "ListItem",
            position: 2,
            name: articleTitle,
          },
        ],
      },
      {
        "@type": "WebSite",        
        "@id": `${urlWeb}/#website` , // Cambia esto al valor correcto
        url: "/", // Cambia esto al valor real
        name: organizationName,
        description: organizationDescription,
        publisher: {
          "@id": organizationId,
        },
        alternateName: "Somos una agencia digital que pone a disposición las ventajas de un mundo tecnológico en tus manos", // Cambia esto al valor real
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "es", // Cambia esto si es necesario
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: organizationName,
        alternateName: "Tú puedes conseguirlo todo", // Cambia esto al valor real
        url: "/", // Cambia esto al valor real
        logo: {
          "@type": "ImageObject",
          inLanguage: "es", // Cambia esto si es necesario
          "@id": `${organizationLogoUrl}`, // Cambia esto al valor correcto
          url: organizationLogoUrl,
          contentUrl: organizationLogoUrl,
          width: 678, // Cambia esto al valor real
          height: 695, // Cambia esto al valor real
          caption: organizationName, // Cambia esto al valor real
        },
        image: {          
          "@id": `${organizationLogoUrl}`, // Cambia esto al valor correcto
        },
        sameAs: [
          "https://www.facebook.com/SunquPacha/",
          "https://twitter.com/SunquP", // Cambia o agrega más redes sociales si es necesario
        ],
      },
      {
        "@type": "Person",
        "@id": authorId,
        name: authorName,
        image: {
          "@type": "ImageObject",
          inLanguage: "es", // Cambia esto si es necesario
          "@id": `${urlWeb}/#/schema/person/image/`, // Cambia esto al valor correcto
          // url: "http://0.gravatar.com/avatar/31197ff8b93898ffb1a2b97e4ec4c868?s=96&d=mm&r=g", // Cambia esto al valor real
          // contentUrl: "http://0.gravatar.com/avatar/31197ff8b93898ffb1a2b97e4ec4c868?s=96&d=mm&r=g", // Cambia esto al valor real
          caption: authorName,
        },
        sameAs: [
          `${urlWeb}`, // Cambia esto al valor real
        ],
        // url: `${urlWeb}/blog/author/admin/`, // Cambia esto al valor real
      },
    ],
  };
  
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default JsonLdGenerator;