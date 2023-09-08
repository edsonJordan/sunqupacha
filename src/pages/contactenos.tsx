import React from 'react';
import type { HeadFC } from "gatsby"
import { graphql, useStaticQuery } from "gatsby";
import { SeoStatic } from "../components/sections/seoStatic";

//Transversales
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";

//Sections
import SectionBannerContact from "../components/sections/section-bannerContact";
import SectionContactEmail from "../components/sections/section-contactEmail";


// src/components/sections/section-contactEmail.tsx

const Contactenos: React.FC = () => {

  return (
    <>
    <Header />
    <main className="main">  
        <SectionBannerContact/>
        <SectionContactEmail  />
    </main>
    <Footer/>
    </>
  );
};

export default Contactenos;

export const Head: HeadFC = () => {
  const imagesPage = useStaticQuery(graphql`
  query {
    logoSectionImage: allFile(
      filter: {
        extension: { regex: "/(png)/" }
        absolutePath: { regex: "/images/pages/" }
        name: { eq: "logo-section-blog" }
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
      title={"Contacto- SunquPacha"}
      metaDesc="Pudes contactarnos para poder generar tus nuevos proyectos"
      titleSection="Conecta con Nosotros"
      opengraphDescription="Impulsa tu presencia en línea con SunquPacha. Desarrollo web impactantes y estrategias digitales sólidas para hacer crecer tu negocio."
      ogimage={imagenSection}
      tittleTwitter="Diseño Web Creativo en Perú"
      metaTwitter="Ofrecemos servicios de diseño web y marketing digital en Perú. Transformamos tus ideas en sitios web impactantes y aplicamos estrategias efectivas para tu éxito en línea."
      logoImage={imagenLogo}
      canonical="/contactenos"
  >
    </SeoStatic>

  )
}
