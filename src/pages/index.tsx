import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, useStaticQuery } from "gatsby";

//Transversales
import Header from "./../components/sections/header";
import Footer from "./../components/sections/footer";

//Sections
import SectionBannerIndex from "../components/sections/section-bannerIndex";
import SectionBookEmail from "../components/sections/section-bookEmail";
import SectionTestimonial from "../components/sections/section-testimonial"
import SectionLastsBlogs from "../components/sections/section-lastsBlogs"
import SectionWorks from "../components/sections/section-works";
import SectionWhySunqupacha from "../components/sections/section-whySunqupacha"

// Utils
import LazyLoadOnScroll from '../utils/LazyLoadOnScroll';
import { SeoStatic } from "../components/sections/seoStatic";


const IndexPage: React.FC<PageProps> = () => {

  
  
  return (
    <>
    <Header />
    <main className="main" >
      <SectionBannerIndex/>
      <LazyLoadOnScroll component={SectionWorks}/>
      <LazyLoadOnScroll component={SectionBookEmail}/>
      <LazyLoadOnScroll component={SectionTestimonial}/>
      <LazyLoadOnScroll component={SectionLastsBlogs}/>
      <LazyLoadOnScroll component={SectionWhySunqupacha}/>
    </main>
    <Footer/>
    </>
  )
}

export default IndexPage

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
      title={"Transformamos tus ideas en sitios web impactantes - SunquPacha"}
      metaDesc="Impulsa tu presencia en línea con SunquPacha. Desarrollo web impactantes y estrategias digitales sólidas para hacer crecer tu negocio."
      titleSection="Agencia de Desarrollo Web en Perú"
      opengraphDescription="Impulsa tu presencia en línea con SunquPacha. Desarrollo web impactantes y estrategias digitales sólidas para hacer crecer tu negocio."
      ogimage={imagenSection}
      tittleTwitter="Diseño Web Creativo en Perú"
      metaTwitter="Ofrecemos servicios de diseño web y marketing digital en Perú. Transformamos tus ideas en sitios web impactantes y aplicamos estrategias efectivas para tu éxito en línea."
      logoImage={imagenLogo}
      canonical=""
      
  >
    </SeoStatic>

  )
}
