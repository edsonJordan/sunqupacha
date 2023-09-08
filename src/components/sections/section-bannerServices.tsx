import React from 'react'
import BaseBanner from "./../../images/pages/base-hero.svg";
import HeroBanner2 from "./../../images/pages/services.svg";
import CtaForm from '../cta/ctaForm';
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
                Creamos sitios web impactantes y optimizamos la visibilidad en línea a través de estrategias SEO, Google Ads y Facebook Ads. Conecta con tu audiencia y alcanza tus objetivos hoy mismo.
            </p>
            <CtaForm/>
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