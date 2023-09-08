import React from 'react'
import BaseBanner from "./../../images/pages/base-hero.svg";
import HeroBanner2 from "./../../images/pages/hero1-banner.svg";
type Props = {}

const SectionBannerContact= (props: Props) => {

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    // Realiza alguna acción, como desplazarte a una sección de destino
    const targetSection = document.getElementById('section--contact');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="section section-hero " >
        <div className="section__content section--banner">
          <div className="text-banner">
            <h1 className="section__title tittleBanner ">
            <span>Conecta con Nosotros</span>
            </h1>
            <p>
            La comunicación es clave. Estamos aquí para responder a tus preguntas, discutir tus ideas y colaborar en tu éxito. No dudes en ponerte en contacto con nosotros en cualquier momento.
            </p>
            <a  className="btn solid banner__call" onClick={handleAnchorClick}>Contáctenos</a>
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
export default SectionBannerContact