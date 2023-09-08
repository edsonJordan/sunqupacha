// src/templates/post.tsx
import React from "react";
// import { graphql } from "gatsby";// Ajusta la importación según tu estructura de carpetas
import cheerio from "cheerio";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

//Transversales
import Header from "./../components/sections/header";
import Footer from "./../components/sections/footer";
import { SEO } from "../components/sections/seo"


interface Heading {
  tagName: string;
  text: string;
  id:string | null;
  link: string | "#";
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




const PostTemplate = ({ pageContext }) => {
    const {data, seo} = pageContext

  const headings = extractHeadingsFromHTML(data.content);
    // console.log(headings);
    // const image = getImage(data.featuredImage.node.localFile.childImageSharp.gatsbyImageData);
    const image = data.featuredImage ? getImage(data.featuredImage.node.localFile.childImageSharp.gatsbyImageData) : "";
    const altText = data.featuredImage ?  data.featuredImage.node.altText : "Imagen alt"
    // console.log(data.featuredImage);
    
    
  return (
    <>
    <Header/>
    <main className="main blog" >
      <section className="section section--blog">
          <div className="migaja">
           
          </div>
          <div className="content content--blog">
            <div className="breadcrumbs">
              {
                data.seo.breadcrumbs.map((element, index)=>{
                  return (
                    <a key={index+"breadcrumbs"} href={element.url} className="breadcrumbs-item">
                      {element.text}
                    </a>
                  )
                })
              }
            </div>
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
                <div className="info-blog" >
                  <div className="tags-blog">
                    {
                      data.categories.nodes.map((element, index)=>(
                        <div key={index+"tag"} className="tag-blog">
                          <p>
                            {element.name}  
                          </p> 
                      </div>
                      ))
                    }
                      
                    
                  </div>
                  <div className="fecha-blog">
                    {data.date}
                  </div>
                  <div className="time-read">
                    {data.seo.readingTime}min de lectura
                  </div>
                </div>
                <h1 className="tittle">{data.title}</h1> 
                {
                  image !==null ?<GatsbyImage image={image} alt={altText} /> :"Sin imagen"
                }
                     
                <div className="content-blog"  dangerouslySetInnerHTML={{ __html: data.content }}/>
              </div>
            </div>
          </div>
        <div/>
      </section>
    </main>
    <Footer/>
    </>
  );
};



export default PostTemplate;

export const Head = ({ pageContext }) => {
  // const { seo } = pageContext.data; 
  return (
    <SEO 
        data={pageContext.data}
        site={pageContext.site}
        // wp={pageContext.wp}
      // head={seo}
    />
  )
}