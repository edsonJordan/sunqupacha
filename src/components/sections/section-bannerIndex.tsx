import React from 'react'

import HeroBanner from "./../../images/pages/hero-index.svg";
import BaseBanner from "./../../images/pages/base-hero.svg";


type Props = {}

const SectionBannerIndex = (props: Props) => {
  return (
    <section className="section section-hero " >
    <div className="section__content section--banner">
      <div className="text-banner">
        <h1 className="section__title tittleBanner ">
        <span>Te ayudamos a aumentar </span> tus <span>conversiones.</span>
        </h1>
        <p>
          Destacado en las principales publicaciones de todo el mundo.
        </p>
        <a  className="btn solid banner__call" href="#">Contactanos</a>
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


export default SectionBannerIndex