import React from 'react'
import HeroBanner2 from "./../../images/pages/hero-banner-2.svg";
import CtaForm from '../cta/ctaForm';

type Props = {}

const SectionWhySunqupacha = (props: Props) => {
  return (
    <section className="section section-hero " >
        <div className="section__content section--banner">
          <div className="text-banner">
            <h2 className="section__title about tittleBanner ">
              ¿Por qué SunquPacha?
            </h2>
            <p>
            Impulsamos el éxito de emprendedores peruanos mediante soluciones digitales de impacto. Con una década de experiencia, comprendemos tus desafíos y aspiraciones.<br/> 
            Nos distingue la excelencia y el profesionalismo.Creamos sitios web potentes y estrategias efectivas para tu crecimiento. <br/>
            Nuestro equipo tiene pasión por la innovación digital. Acompañamos tu viaje hacia nuevas alturas en el mundo en línea. Tu éxito es nuestra misión.
            </p>
            <CtaForm/>
          </div>
          <div className="flex justify-center">
            <HeroBanner2 
              className="object-contain h-fit mobile:w-64 laptop:w-10/12 "  alt="¿porque sunqupacha?"/>
          </div>
        

        </div>
      </section>
  )
}


export default SectionWhySunqupacha