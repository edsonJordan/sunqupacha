import React from 'react'
import HeroBanner2 from "./../../images/pages/hero-banner-2.svg";

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
              Para conseguir clientes, es imperativo ser visto por la masa. Cada empresa exitosa es única y necesita estrategias de marketing digital contrastantes. Reserva una reunión con nosotros y te ayudaremos a encontrar la estrategia correcta para tu empresa
            </p>
            <a  className="btn solid banner__call" href="#">Contactanos</a>
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