import React from 'react';
import { HeadFC, graphql, useStaticQuery } from "gatsby";


//Transversales
import Header from "./../components/sections/header";
import Footer from "./../components/sections/footer";

//Sections
import SectionBannerService from "../components/sections/section-bannerServices";
import SectionGridServices from "../components/sections/section-gridServices";
import SectionContactEmail from "../components/sections/section-contactEmail";
import SectionWhySunqupacha from "../components/sections/section-whySunqupacha"
import { SeoStatic } from "../components/sections/seoStatic";

//data 



const Services: React.FC = () => {
 
/*   const servicios = imagesPage
  console.log(servicios); */

  
  return (
    <>
    <Header />
    <main className="main">
    <SectionBannerService/>
    <SectionGridServices/>
    <section className="section section--contrato">
      <div className="content content-contrato">
          <h2>¿Qué sucede cuando contrato SunquPacha?</h2>
          <p>
          Cuando decides trabajar con SunquPacha, estás eligiendo el camino hacia el éxito en línea como emprendedor. Nuestro enfoque abarca desde la contratación hasta la entrega del producto, y más allá, para asegurarte una experiencia integral y beneficiosa.

          Desde el momento en que decides unirte a nosotros, te convertimos en una prioridad. Escuchamos tus objetivos y desafíos específicos, y diseñamos estrategias personalizadas que se adapten a tus necesidades. Trabajamos incansablemente para convertir tus ideas en realidad digital, creando sitios web impactantes y aplicando estrategias digitales sólidas.

          Pero no te dejamos solo después de la entrega. Continuamos acompañándote, brindando soporte y ajustando estrategias para asegurarnos de que tu éxito en línea sea sostenible. Obtendrás resultados medibles y tangibles: tu presencia en línea se fortalecerá, tu audiencia crecerá y tu negocio prosperará.

          En SunquPacha, estamos aquí para hacerte sobresalir en el competitivo mundo digital y llevarte a donde deseas estar. Tu éxito es nuestra misión, y nuestro enfoque es tu crecimiento continuo
          </p>
      </div>
    </section>
    <SectionContactEmail/>
    <SectionWhySunqupacha/>
    </main>
    <Footer/>
    </>
  );
};

export default Services;


export const Head: HeadFC = () => {
  const imagesPage = useStaticQuery(graphql`
  query {
    logoSectionImage: allFile(
      filter: {
        extension: { regex: "/(png)/" }
        absolutePath: { regex: "/images/pages/" }
        name: { eq: "logo-section-services" }
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
    allWpServicio{
      nodes{
        slug
        title
        excerpt
        featuredImageId
        iconimage{
          fieldGroupName
          iconimage {
            id            
            localFile{
              childImageSharp{
                gatsbyImageData
              }
            }
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
      title={"Servicios - SunquPacha"}
      metaDesc="Sitios web impactantes y optimizamos la visibilidad con estrategias SEO . Conecta con tu audiencia y alcanza tus objetivos hoy mismo. "
      titleSection="Servicios"
      opengraphDescription="Sitios web impactantes y optimizamos la visibilidad con estrategias SEO . Conecta con tu audiencia y alcanza tus objetivos hoy mismo."
      ogimage={imagenSection}
      tittleTwitter="Diseño Web Creativo en Perú"
      metaTwitter="Servicios de diseño web y marketing digital en Perú. Transformamos tus ideas en sitios web impactantes y aplicamos estrategias efectivas para tu éxito en línea."
      logoImage={imagenLogo}
      canonical="/servicios"
      slug="/servicios"
  >
    </SeoStatic>

  )
}