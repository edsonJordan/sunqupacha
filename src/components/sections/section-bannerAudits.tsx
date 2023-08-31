import React from 'react'

import HeroBanner from "./../../images/pages/banner-auditoria.svg";
import BaseBanner from "./../../images/pages/base-hero.svg";
import LinesBanner from "./../../images/pages/lines.svg";


type Props = {}

const SectionBannerAudits = (props: Props) => {
  return (
    <section className="section section-hero audit" >
        <div className="section__content section--banner">
          <div className="text-banner">
            <h1 className="section__title tittleBanner ">
            <span>¿Qué obtendrá </span> de la 
            <span> auditoría?</span>
            </h1>           
          </div>
          <div className="flex justify-center z-50">
            <HeroBanner 
              className="object-contain h-fit mobile:w-64 laptop:w-8/12 "  alt="A kitten"/>
          </div>
          <BaseBanner
            className="banner-base z-50"
          />
        </div>    
        <LinesBanner className="absolute z-40 desktop:left-0 desktop:bottom-3 left-0 max-w-full max-h-full"/>   
        <div className="grid-blog ">
         
          <article className="card">
            <div className="card-header">
              Paso 1
            </div>
            <div className="card-body">
              Puede obtener una auditoría gratuita de
              nuestra parte donde analizamos su presencia 
              actual en línea. Una vez que tengamos la información 
              de su parte, podemos configurar ideas y una estrategia 
              para mejorar su posicionamiento. Obtendrá un informe de, 
              por ejemplo, los términos de búsqueda para los que se muestra 
              su sitio web en Google, cómo llegan las personas a su sitio 
              web y desde qué tipo de dispositivo lo visitaron. Sólo necesitamos 
              el nombre de su sitio web y sus datos de contacto.
            </div>
          </article>
          <article className="card">
            <div className="card-header">
              Paso 2
            </div>
            <div className="card-body">
              Luego, recibirá un resumen en la bandeja de entrada de su correo electrónico dentro de 24 a 48 horas, donde le detallaremos los métodos para mejorar su presencia y marketing en línea. Sin preocupaciones, sin condiciones. Sin embargo, si desea continuar en colaboración con nosotros, háganoslo saber lo antes posible.
            </div>
          </article>
        </div>
    </section>
  )
}


export default SectionBannerAudits