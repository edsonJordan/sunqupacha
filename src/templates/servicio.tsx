import React from 'react'

import cheerio from "cheerio";
import { GatsbyImage, getImage } from "gatsby-plugin-image";



//Transversales
import Header from "./../components/sections/header";
import Footer from "./../components/sections/footer";
import { SEO } from "../components/sections/seo"


//Icons Share
import Email from "./../images/pages/email.svg";
import Twitter from "./../images/pages/twitter-share.svg";
import Link from "./../images/pages/link-alt.svg";
import Facebook from "./../images/pages/facebook-share.svg";



interface Heading {
    tagName: string;
    text: string;
    id:string | null;
    link: string | "#";
  }

  const copyToClipboard = (urlToCopy:string) => {
    navigator.clipboard.writeText(urlToCopy)
      .then(() => {
        alert('Enlace copiado al portapapeles');
      })
      .catch((error) => {
        console.error('Error al copiar el enlace:', error);
        alert('Error al copiar el enlace. Por favor, inténtalo de nuevo.');
      });
    } 
  

  function extractHeadingsFromHTML(htmlContent: string): Heading[] {
    const $ = cheerio.load(htmlContent);
    const headings: Heading[] = [];
  
    // Buscar y extraer elementos de encabezado h1, h2, h3 y h4
    $("h1, h2, h3, h4").each((index, element) => {
      const id = $(element).attr("id"); // Extraer el atributo "id"
      const link = id ? `#${id}` : "#";
      headings.push({
        tagName: element.tagName,
        text: $(element).text(),
        id: id || null, // Establecer el atributo "id" o nulo si no existe
        link,
      });
    });
  
    return headings;
  }
  

  const ServicioTemplate = ({ pageContext }) => {


    const {data, seo} = pageContext

     const headings = extractHeadingsFromHTML(data.content);
   
      const image = data.featuredImage ? getImage(data.featuredImage.node.localFile.childImageSharp.gatsbyImageData) : "";
      const altText = data.featuredImage ?  data.featuredImage.node.altText : "Imagen alt"
      
        const articleSeo = data.seo
      const urlWeb : string | undefined = process.env.SITE_URL;
   
      
    
  
  
   

  return (
    <>
     <Header/>
    <main className="main blog servicio" >
      <section className="section section--blog">
          
          <div className="content content--blog">
            
            <div className="main--blog">
              <nav className="table-of-contents">
                <p className="tittle-table" >Tabla de contenido</p>
                <ul >
                {headings.map((heading, index) => (
                  <li key={index+"heading"} className={`table-of-contents-item ${heading.tagName}`}>
                    <a href={heading.link}>{heading.text}</a>
                  </li>
                ))}
                </ul>
              </nav>          
              <div className="article-blog">
                <div className="article__content">
                <h1 className="tittle">{data.title}</h1>
                  <div className="info-blog" >
                    <div className="fecha-blog">
                      {data.date}
                    </div>
                    <div className="time-read">
                      {data.seo.readingTime}min de lectura
                    </div>                  
                  </div>
                   
                  {
                    image !==null ?<GatsbyImage objectFit="contain" objectPosition="0% 50%" image={image} alt={altText} /> :"Sin imagen"
                  }                     
                  <div className="content-blog"  dangerouslySetInnerHTML={{ __html: data.content }}/>
                  

                </div>
                <div className="social__share">
                    <button title="Copiar Link de articulo" className="icon"  onClick={(e) => {
                          e.preventDefault(); // Evita que el enlace navegue a una nueva página
                          copyToClipboard(`${urlWeb}${articleSeo.opengraphUrl}`);
                  }}
                    >
                      <Link/>
                    </button>
                    <a title="Compartir Articulo por facebook" className="icon" rel="nofollow noopener noreferrer" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${urlWeb}${articleSeo.opengraphUrl}`}>
                      <Facebook/>
                    </a>
                    <a title="Compartir Articulo por twitter" target="_blank" rel="nofollow noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${articleSeo.opengraphTitle}&url=${urlWeb}${articleSeo.opengraphUrl}`} className="icon">
                      <Twitter/>
                    </a>
                    <a title="Compartir Articulo por email" className="icon" rel="nofollow noopener noreferrer" target="_blank" href={`mailto:?subject=${articleSeo.opengraphTitle};body=Article:%20${urlWeb}${articleSeo.opengraphUrl}`}>
                      <Email/>
                    </a>                  
                </div>
              </div>
            </div>
          </div>
        <div/>
      </section>
    </main>
    <Footer/>
    </>
  )
}


export default ServicioTemplate;


export const Head = ({ pageContext }) => {
    // const { seo } = pageContext.data; 
    return (
      <SEO 
          data={pageContext.data}
          // site={pageContext.site}
          // wp={pageContext.wp}
        // head={seo}
      />
    )
  }