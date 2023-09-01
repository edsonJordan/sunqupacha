import React from 'react'
import BaseBanner from "./../../images/pages/base-hero.svg";
import HeroBanner2 from "./../../images/pages/services.svg";
type Props = {}

const SectionBannerServices= (props: Props) => {
  return (
    <section className="section section-hero " >
        <div className="section__content section--banner">
          <div className="text-banner">
            <h1 className="section__title tittleBanner ">
            <span>Servicios</span>
            </h1>
            <p>
              Estamos comprometidos con el éxito digital de los emprendedores en Perú. Ofrecemos una amplia gama de servicios diseñados para elevar tu presencia en línea y llevar tu negocio al siguiente nivel.
            </p>
            <a  className="btn solid banner__call" href="#">Contactanos</a>
          </div>
          <div className="flex justify-center">
            <HeroBanner2 
              className="object-contain h-fit mobile:w-64 laptop:w-8/12 "  alt="A kitten"/>
          </div>
        

        </div>
        <BaseBanner
            className="banner-base  "
          />
    </section>
  )
}
export default SectionBannerServices