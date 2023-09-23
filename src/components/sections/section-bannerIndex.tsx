import React from 'react'

import HeroBanner from "./../../images/pages/hero-index.svg";
import BaseBanner from "./../../images/pages/base-hero.svg";
import CtaForm from '../cta/ctaForm';


type Props = {}

const SectionBannerIndex = (props: Props) => {
  return (
    <section className="section section-hero " >
    <div className="section__content section--banner">
      <div className="text-banner">
        
        <h1 className="section__title tittleBanner ">
          <span>Agencia de Desarrollo   </span> Web <span>   en Perú.</span>
        </h1>
        <p>
        Transformamos tus ideas en sitios web impactantes aplicando estrategias digitales sólidas. Refuerza tu presencia en línea y alcanza tus objetivos con nosotros.
        </p>
        <CtaForm/>
      </div>
      <div className="flex justify-center">
        <HeroBanner 
          className="object-contain h-fit mobile:w-64 laptop:w-8/12 "  alt="Sunqupacha: Herramientas que utilizamos para nuestros servicios"/>
      </div>   
    </div>
    <BaseBanner
        className="banner-base  "
      />
  </section>
    
  )
}


export default SectionBannerIndex