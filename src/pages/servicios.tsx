import Header from "./../components/sections/header";
import Footer from "./../components/sections/footer";

import React from 'react';

//Sections
import SectionBannerService from "../components/sections/section-bannerServices";
import SectionGridServices from "../components/sections/section-gridServices";
import SectionContactEmail from "../components/sections/section-contactEmail";
import SectionWhySunqupacha from "../components/sections/section-whySunqupacha"



const Specialists: React.FC = () => {
 



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
          Cuando decides trabajar con SunquPacha, estás eligiendo el camino hacia el éxito en línea como emprendedor peruano. Nuestro enfoque abarca desde la contratación hasta la entrega del producto, y más allá, para asegurarte una experiencia integral y beneficiosa.

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

export default Specialists;