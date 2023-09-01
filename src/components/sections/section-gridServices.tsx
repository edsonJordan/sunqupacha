import React from 'react'

import Startup from "./../../images/pages/startup.svg";

import Promotion from "./../../images/pages/promotion.svg";
import Writer from "./../../images/pages/writer.svg";

type Props = {}

const SectionGridServices = (props: Props) => {
  return (
    <section className="section section--services">
        <div className="content content--blog ">
          <div className="grid-blog service">
            <div className="card card--service">
              <div className="card-header">
                      <Startup/>
                      <h2>
                        Desarrollo web Impactante
                      </h2>                    
              </div>
              <div className="card-body">
                      <p >
                      Creamos sitios web impactantes y funcionales que cautivan a tu audiencia y reflejan la esencia de tu negocio. Cada diseño es único y se adapta a tus necesidades, brindándote una plataforma sólida para atraer y convertir clientes.
                      </p>
              </div>
              <div className="card-footer">
                      <a href="#" className="btn pill">
                        ver mas
                      </a>
              </div>
            </div>
            <div className="card card--service">
              <div className="card-header">
                      <Writer/>
                      <h2>
                        Posicionamiento Web para Crecimiento Sostenible
                      </h2>                    
              </div>
              <div className="card-body">
                      <p >
                      Impulsa tu presencia en línea a largo plazo con estrategias de posicionamiento SEO. A través de técnicas probadas, mejoramos tu visibilidad en los motores de búsqueda para atraer tráfico orgánico y valioso.
                      En SunquPacha, no solo te brindamos servicios, sino también soluciones estratégicas que se adaptan a tus objetivos y desafíos. 
                      </p>
              </div>
              <div className="card-footer">
                      <a href="#" className="btn pill">
                        ver mas
                      </a>
              </div>
            </div>
            <div className="card card--service">
              <div className="card-header">
                      <Promotion/>
                      <h2>
                        Google Ads para Resultados Rápidos
                      </h2>                    
              </div>
              <div className="card-body">
                      <p >
                          Aprovecha la potencia de Google Ads para llegar instantáneamente a tu público objetivo. Nuestros expertos en publicidad en línea optimizarán tus campañas para maximizar el retorno de inversión y aumentar la visibilidad de tu marca.
                      </p>
              </div>
              <div className="card-footer">
                      <a href="#" className="btn pill">
                        ver mas
                      </a>
              </div>
            </div>

            <div className="card card--service">
              <div className="card-header">
                      <Promotion/>
                      <h2>
                        Facebook Ads para Conexiones Significativas:
                      </h2>                    
              </div>
              <div className="card-body">
                      <p >
                        Conecta de manera efectiva con tu audiencia a través de anuncios en Facebook. Creamos anuncios atractivos que generan interacción y ayudan a construir relaciones sólidas con tus clientes potenciales.
                      </p>
              </div>
              <div className="card-footer">
                      <a href="#" className="btn pill">
                        ver mas
                      </a>
              </div>
            </div>

            

            
          </div>
          
        </div>
    </section>
  )
}


export default SectionGridServices