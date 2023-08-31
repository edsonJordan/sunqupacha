import React from 'react';

import HeroBanner from "./../images/pages/Industries.svg";
import BaseBanner from "./../images/pages/base-hero.svg";

import Saas from "./../images/pages/saas.svg";
import B2b from "./../images/pages/b2b.svg";
import Ecommerce from "./../images/pages/e-commerce-solution.svg";

//Transversales
import Header from "./../components/sections/header";
import Footer from "./../components/sections/footer";

//Sections
import SectionWhySunqupacha from "../components/sections/section-whySunqupacha";
import SectionContactEmail from "../components/sections/section-contactEmail";


const Industries: React.FC = () => {
  return (
    <>
    <Header />
    <main className="main">
    <section className="section section-hero " >
        <div className="section__content section--banner">
          <div className="text-banner">
            <h1 className="section__title tittleBanner ">
            <span>Industrias y experiencia</span>
            </h1>
            <p>
              Una agencia especializada en generación de leads que te guía por todo el camino hacia el crecimiento. Ayudamos a una amplia gama de clientes B2B, SaaS y comercio electrónico a optimizar y maximizar su marketing digital. Generamos clientes potenciales ilimitados para su negocio utilizando una estrategia única y probada. A lo largo del camino, tendrá una visión general completa.
            </p>
            
          </div>
          <div className="flex justify-center">
            <HeroBanner 
              className="object-contain h-fit mobile:w-64 laptop:w-8/12 "  alt="A kitten"/>
          </div>
        

        </div>
        <BaseBanner
            className="banner-base  "
          />
    </section>
    <section className="section section--pageblog industries">
      <div className="content content--blog">   
        <div className="grid-blog">
              <article className="card card--specialitst">
                <div className="card-header">
                  <Saas/>
                  <h2>
                    Saas
                  </h2>                    
                </div>
                <div className="card-body">
                  <p >
                    Ayudamos a una amplia gama de empresas de SaaS a aumentar su generación de leads en línea.
                  </p>
                </div>
              </article> 
              <article className="card card--specialitst">
                <div className="card-header">
                  <B2b/>
                  <h2>
                    B2B
                  </h2>                    
                </div>
                <div className="card-body">
                  <p >
                    Publicidad de embudo profesional optimizada para generar leads para B2B.

                  </p>
                </div>
              </article> 
              <article className="card card--specialitst">
                <div className="card-header">
                  <Ecommerce/>
                  <h2>
                    E-Commerce
                  </h2>                    
                </div>
                <div className="card-body">
                  <p >
                    Haga crecer su empresa de comercio electrónico y permítanos ayudarlo a atraer y convertir más clientes.
                  </p>
                </div>
              </article> 
        </div>
        
      </div>
    </section>
    <section className="section section--contrato">
      <div className="content content-contrato">
          <h2>¿Qué sucede cuando contrato SunquPacha?</h2>
          <p>
          Cuando contratas a sunqupacha, obtienes un 
          equipo de marketing digital externo que impulsa 
          todo tu marketing digital hacia resultados medibles. 
          La estrategia de marketing que diseñamos se basa en las 
          necesidades y objetivos comerciales de su empresa, y mantenemos 
          un diálogo continuo para mantenernos actualizados. El trabajo se 
          planifica cada tres meses y lo lleva a cabo un director de proyecto 
          de sunqupacha. Los especialistas que forman parte del equipo se ajustan cuando es necesario, en función de cuál es el enfoque. Contamos con especialistas en la mayoría de los aspectos del marketing digital y nos aseguramos de que siempre tenga acceso a la experiencia que necesita para tener éxito. El punto de partida de todo el trabajo son sus objetivos comerciales, que se traducen en cifras clave que medimos y le informamos. De esta manera, obtiene un seguimiento que tiene una conexión clara con lo que usted y la empresa desean obtener de la inversión que realiza en nosotros. Obtienes todo esto a un precio fijo mensual que corresponde aproximadamente a un empleado.
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

export default Industries;