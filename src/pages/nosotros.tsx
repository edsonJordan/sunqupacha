import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {  graphql, useStaticQuery } from "gatsby";
import { SeoStatic } from '../components/sections/seoStatic';



//Transversales
import Header from "./../components/sections/header";
import Footer from "./../components/sections/footer";

import About1 from "./../images/pages/about1.svg";
import About2 from "./../images/pages/about2.svg";


//Sections 
import SectionBannerAbout from "../components/sections/section-bannerAbout";
import SectionContactEmail from "../components/sections/section-contactEmail";
import SectionWhySunqupacha from "../components/sections/section-whySunqupacha";
import SectionLastsBlogs from "../components/sections/section-lastsBlogs";


const About: React.FC<PageProps> = () => {
  return (
    <>
    <Header />
    <main className="main" >
    <SectionBannerAbout/>
      <section className="section section--about">
        <div className="content content--about">
            <h2>
              ¡Haga la diferencia para su negocio!
            </h2>
            <div className="card--about">
                <p>
                  Entendemos que no todas las empresas tienen un departamento interno 
                  que esté siempre actualizado y realice un seguimiento de los algoritmos, 
                  las tendencias y los cambios dentro del marketing digital, pero creemos 
                  firmemente que todas las empresas deberían tener a alguien que lo haga. 
                  <br/>
                  Por lo tanto, iniciamos la agencia de marketing digital sunqupacha, 
                  para ofrecer a las empresas soluciones completamente personalizadas para 
                  satisfacer sus necesidades y objetivos comerciales. 
                  <br/>
                  Adaptamos estrategias 
                  de marketing de alto rendimiento destinadas a servir y beneficiar a su empresa 
                  a largo plazo. sunqupacha es una agencia profesional de marketing digital con 
                  un equipo altamente motivado.
                </p>
                <About1/>
            </div>
            <div className="card--about">
              <p>
                La mayoría de nosotros tenemos una profunda experiencia práctica trabajando directamente 
                con y para Google y Google Ads. Nuestros maestros de marketing también tienen experiencia 
                con anuncios de Facebook y SEO. 
                <br/>
                Nuestro equipo vive y respira soluciones de marketing digital 
                innovadoras, rápidas e inteligentes. Queremos ayudar a tantas empresas como sea posible a encontrar 
                nuevos clientes potenciales y volver a interactuar con los antiguos para superar con creces las expectativas de 
                crecimiento. 
                <br/>
                Reserve una reunión con nosotros hoy, de forma gratuita, y hablaremos sobre cómo podemos 
                implementar una estrategia de marketing sólida y exhaustiva.
              </p>
              <About2/>
            </div>
        </div>
      </section>
      <SectionContactEmail/>
      <SectionLastsBlogs/>
      <SectionWhySunqupacha/>
    </main>
    <Footer/>
    </>
  )
}

export default About
export const Head: HeadFC = () => {
  const imagesPage = useStaticQuery(graphql`
  query {
    logoSectionImage: allFile(
      filter: {
        extension: { regex: "/(png)/" }
        absolutePath: { regex: "/images/pages/" }
        name: { eq: "logo-section" }
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
    
    logoImage: allFile(
      filter: {
        extension: { regex: "/(png)/" }
        absolutePath: { regex: "/images/" }
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
  const imagenSection = imagesPage.logoSectionImage.nodes[0].childImageSharp.fluid.src;
  const imagenLogo = imagesPage.logoImage.nodes[0].childImageSharp.fluid.src;
  return (
  <SeoStatic 
      title={"Nosotros - SunquPacha"}
      metaDesc="Consistencia, Impulso, Innovación y Pasión en un mundo digital competitivo. Mantén la cima y conecta con tu audiencia."
      titleSection="Servicios"
      opengraphDescription="Consistencia, Impulso, Innovación y Pasión en un mundo digital competitivo. Mantén la cima y conecta con tu audiencia."
      ogimage={imagenSection}
      tittleTwitter="Diseño Web Creativo en Perú"
      metaTwitter="Servicios de diseño web y marketing digital en Perú. Transformamos tus ideas en sitios web impactantes y aplicamos estrategias efectivas para tu éxito en línea."
      logoImage={imagenLogo}
      canonical="/industrias"
  >
    </SeoStatic>

  )
}