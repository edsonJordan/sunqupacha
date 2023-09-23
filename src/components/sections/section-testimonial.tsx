import React from 'react'

import Carousel from 'react-multi-carousel';
import Arrowright from "./../../images/pages/arrow-right-active.svg";
import Arrowleft from "./../../images/pages/arrow-left-active.svg";
import { StaticImage } from 'gatsby-plugin-image';

type Props = {}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
     
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
     
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
     
  }
};



const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous, carouselState }) => {
  const {
    currentSlide,
    totalItems,
    slidesToShow
  } = carouselState;

  return (
    <div className="carousel-button-group">
      <button
        aria-label="go to previous slide"
        className={  currentSlide === 0 ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left" }
        onClick={() => previous()}
      >
        <Arrowleft/>
      </button>
      <button
        aria-label="go to next slide"
        className={ currentSlide === totalItems - slidesToShow ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right" }
        onClick={() => next()}
      >
        <Arrowright/>
      </button>
    </div>
  );
};

const CustomButtonGroup: React.FC<CarouselButtonGroupProps> = ({ next, previous, carouselState }) => {
  return <ButtonGroup
    
      next={next} 
      previous={previous} 
      carouselState={carouselState} 
   />;
};
const SectionTestimonial = (props: Props) => {
  return (
    <section className="section section--testimonial ">
        <div className="content content--testimonial">
          <h2 className="tittle" >
            Nuestros testimonios
          </h2>
          <div className="content--testimonials">
          <Carousel 
          responsive={responsive}
          showDots={false}
          arrows={false}
          additionalTransfrom={0}
          itemClass={"react-carousel-item"}
          minimumTouchDrag={80}
          partialVisible
          renderButtonGroupOutside
          customButtonGroup={<CustomButtonGroup />}
        >
            <article className="testimonial ">
              <StaticImage 
                className="testimonial__image"
                src="./../../images/testimonials/ana-lopes.jpg"
                alt="Testimonio de Ana López trabajando con Sunqupacha"
                title="Ana López, fundadora de una tienda en línea exitosa en Perú"
              />
              <div className="text-testimonial">
                  <p>
                      SunquPacha ha sido un verdadero aliado en mi viaje. Su equipo creó un sitio web que no solo luce increíble, sino que también es fácil de usar para mis clientes. Gracias a su experiencia en marketing digital, he visto un aumento notable en las ventas. Si eres un emprendedor como yo en Perú, no dudes en trabajar con ellos.
                  </p>
                  <h3>— Ana López - fundadora de una tienda en línea</h3>
              </div>
            </article>
            <article className="testimonial ">
              <StaticImage 
                className="testimonial__image"
                src="./../../images/testimonials/pedro-rodriguez.jpg"
                alt="Testimonio de Pedro Rodríguez trabajando con Sunqupacha"
                title="Pedro Rodríguez, el capitan de su propio barco emprendedor"
              />
              <div className="text-testimonial">
                  <p>
                    SunquPacha no solo diseñó un sitio web que representa perfectamente mi negocio, sino que también lo optimizó para el éxito en línea. Con su ayuda, he navegado hacia un aumento en las ventas que nunca pensé posible. Si eres un emprendedor en Perú, te recomiendo encarecidamente que confíes en SunquPacha para llevar tu negocio al siguiente nivel.
                  </p>
                  <h3>— Pedro Rodríguez - el capitán de mi propio barco emprendedor.</h3>
              </div>
            </article>
            <article className="testimonial ">
              <StaticImage 
                className="testimonial__image"
                src="./../../images/testimonials/mariana-gonzales.jpg"
                alt="Testimonio de Mariana González trabajando con Sunqupacha"
                title="Mariana González, emprendedora en busca del crecimiento"
              />
              <div className="text-testimonial">
                  <p>
                  Siempre estoy en busca de oportunidades para crecer. SunquPacha ha sido mi socio de confianza en este viaje. Han creado una presencia en línea sólida para mi negocio, y gracias a su experiencia en marketing digital, mi base de clientes sigue creciendo. Si buscas resultados reales para tu empresa, SunquPacha es la elección obvia.
                  </p>
                  <h3>— Mariana González - Emprendedora</h3>
              </div>
            </article>
            <article className="testimonial ">
              <StaticImage 
                className="testimonial__image"
                src="./../../images/testimonials/luis-torres.jpg"
                alt="Testimonio de Luis Torres trabajando con Sunqupacha"
                title="Luis Torres, joven emprendedor apasionado por su negocio"
              />
              <div className="text-testimonial">
                  <p>
                      Con SunquPacha, he encontrado un equipo que comparte esa pasión y ha llevado mi negocio a nuevas alturas. Desde el diseño de mi sitio web hasta la gestión de mis campañas de marketing, su dedicación es evidente. Como emprendedor en Perú, te digo que SunquPacha es más que una agencia digital, son tu socio en el éxito.
                  </p>
                  <h3>— Luis Torres - mi emprendimiento es mi pasión</h3>
              </div>
            </article>
          </Carousel>
          </div>
        </div>
      </section>
  )
}


export default SectionTestimonial