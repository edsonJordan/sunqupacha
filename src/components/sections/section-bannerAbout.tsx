import React from 'react'

import HeroBanner from "./../../images/pages/banner-about.svg";
import BaseBanner from "./../../images/pages/base-hero.svg";
import CtaForm from '../cta/ctaForm';


type Props = {}

const SectionBannerAbout = (props: Props) => {
  return (
    <section className="section section-hero " >
      <div className="section__content section--banner">
        <div className="text-banner">
          <h1 className="section__title tittleBanner ">
          <span>Consistencia - Impulso - Innovación - Pasión</span>
          </h1>
          <p>
            En un mundo digital competitivo y en constante evolución, es imperativo mantenerse en la cima y estar informado, ser muy visible entre los resultados de búsqueda y los feeds, y ser receptivo a su audiencia.
          </p>
          <CtaForm/>
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
    
  )
}


export default SectionBannerAbout