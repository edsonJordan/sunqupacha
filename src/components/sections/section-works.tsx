import React from 'react'


import Hero1 from "./../../images/pages/hero1.svg";
import Hero2 from "./../../images/pages/hero2.svg";
import Hero3 from "./../../images/pages/hero3.svg";
import Hero4 from "./../../images/pages/hero4-2.svg";
import { StaticImage } from "gatsby-plugin-image";

type Props = {}

const SectionWorks = (props: Props) => {
  return (
    <section className="section section--work ">
        <div className="section__content content--work">
          <h2 className="tittle" >
            Nuestros objetivos
          </h2>
          <div className="cards__work">
              <article className="card">
                <div className="card__content">
                  <div className="card__image">
                    {/* <Hero1
                      className="image"
                    /> */}
                     <StaticImage
                      src="./../../images/pages/hero1.jpg" // Ruta relativa a la carpeta "src/images"
                      alt="Mi imagen"
                      className='h-full object-cover'
                      placeholder="blurred" // Puedes cambiar esto a "none" o "tracedSVG" según tus preferencias
                      // layout="fixed"
                      width={942} // Ancho deseado de la imagen
                      height={971} // Altura deseada de la imagen
                    />
                  </div>                  
                  <div className="text__card">
                    <h3 className="card__tittle" >
                      Metas
                    </h3>
                    <p>
                      Nos dedicamos a ayudarte a alcanzar tus metas en línea. Ya sea que estés buscando aumentar tus ventas, mejorar la visibilidad de tu marca o expandir tu alcance, trabajamos contigo para definir y lograr tus objetivos digitales.
                    </p>
                  </div>
                </div>
              </article>
              <article className="card">
                <div className="card__content">
                  <div className="card__image">
                  {/* <Hero2
                      className="image"
                    /> */}
                    <StaticImage
                      src="./../../images/pages/hero2.jpg" // Ruta relativa a la carpeta "src/images"
                      
                      alt="Mi imagen"
                      className='w-full object-contain '
                      placeholder="blurred" // Puedes cambiar esto a "none" o "tracedSVG" según tus preferencias
                      // layout="fixed"
                      width={942} // Ancho deseado de la imagen
                      height={971} // Altura deseada de la imagen
                    />
                  </div>                  
                    <div className="text__card">
                      <h3 className="card__tittle" >
                          Competidores
                        </h3>
                        <p>
                        En un mundo digital competitivo, te brindamos una ventaja. Nuestro enfoque en estrategias de desarrollo web y marketing digital te ayudará a destacarte entre tus competidores. Creamos soluciones únicas que te permiten sobresalir y captar la atención de tu audiencia.
                        </p>
                      </div>
                  </div>
                </article>
                <article className="card">
                  <div className="card__content">
                    <div className="card__image">
                    <StaticImage
                      src="./../../images/pages/hero3.jpg" // Ruta relativa a la carpeta "src/images"
                      
                      alt="Mi imagen"
                      className='w-full object-cover '
                      placeholder="blurred" // Puedes cambiar esto a "none" o "tracedSVG" según tus preferencias
                      // layout="fixed"
                      width={497} // Ancho deseado de la imagen
                      height={518} // Altura deseada de la imagen
                    />
                    {/* <Hero3
                        className="image"
                      /> */}
                    </div>               
                  <div className="text__card">
                    <h3 className="card__tittle" >
                      Estrategia
                    </h3>
                    <p>
                    Nuestras estrategias están diseñadas para impulsar tu presencia en línea. Desde el diseño de sitios web impactantes hasta la implementación de técnicas de marketing digital efectivas, trabajamos en conjunto para crear una estrategia sólida que respalde tus objetivos comerciales y te brinde resultados medibles
                    </p>
                  </div>
                  </div>
                </article>
                <article className="card">
                  <div className="card__content">
                    <div className="card__image">
                  {/* <Hero4
                     className="image"
                    /> */}
                    <StaticImage
                      src="./../../images/pages/hero4.jpg" // Ruta relativa a la carpeta "src/images"
                      
                      alt="Mi imagen"
                      className=' w-full object-cover '
                      placeholder="blurred" // Puedes cambiar esto a "none" o "tracedSVG" según tus preferencias
                      // layout="fixed"
                      width={360} // Ancho deseado de la imagen
                      height={295} // Altura deseada de la imagen
                    />
                  </div>
                  <div className="text__card">
                    <h3 className="card__tittle" >
                      Lanzamiento
                    </h3>
                    <p>
                        El lanzamiento exitoso de tu presencia en línea es crucial. En SunquPacha, te apoyamos en cada paso del camino. Desde la conceptualización y desarrollo hasta la implementación y promoción, garantizamos un lanzamiento exitoso y una presencia en línea impactante que atraiga a tu público objetivo en Perú y más allá.
                    </p>
                  </div>
                </div>                
              </article>
          </div>
        </div>
      </section>
  )
}


export default SectionWorks