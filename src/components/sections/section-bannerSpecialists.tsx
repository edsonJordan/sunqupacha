import React from 'react'
import BaseBanner from "./../../images/pages/base-hero.svg";
import HeroBanner2 from "./../../images/pages/hero-banner-2.svg";
type Props = {}
const SectionBannerSpecialists= (props: Props) => {
  return (
    <section className="section section-hero blog" >
    <div className="section__content section--banner">
      <div className="text-banner">
        <h1 className="section__title about tittleBanner ">
          Especialistas de SunquPacha
        </h1>
        
      </div>
      <div className="flex justify-center">
        <HeroBanner2 
          className="object-contain h-fit mobile:w-64 laptop:w-10/12 "  alt="¿porque sunqupacha?"/>
      </div>   
    </div>
    <BaseBanner className="banner-base" />
    </section>
  )
}
export default SectionBannerSpecialists