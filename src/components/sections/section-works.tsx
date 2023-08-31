import React from 'react'


import Hero1 from "./../../images/pages/hero1.svg";
import Hero2 from "./../../images/pages/hero2.svg";
import Hero3 from "./../../images/pages/hero3.svg";
import Hero4 from "./../../images/pages/hero4.svg";

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
                    <Hero1
                      className="image"
                    />
                  </div>                  
                  <div className="text__card">
                    <h3 className="card__tittle" >
                      Metas
                    </h3>
                    <p>Para ayudar a su empresa a crecer, queremos entender sus objetivos. Con eso, podemos proporcionarle una hoja de ruta completa para lograrlos.
                    </p>
                  </div>
                </div>
              </article>
              <article className="card">
                <div className="card__content">
                  <div className="card__image">
                  <Hero2
                      className="image"
                    />
                  </div>                  
                    <div className="text__card">
                      <h3 className="card__tittle" >
                        Metas
                      </h3>
                      <p>Para ayudar a su empresa a crecer, queremos entender sus objetivos. Con eso, podemos proporcionarle una hoja de ruta completa para lograrlos.
                      </p>
                    </div>
                </div>
              </article>
              <article className="card">
                <div className="card__content">
                  <div className="card__image">
                  <Hero3
                      className="image"
                    />
                  </div>               
                <div className="text__card">
                  <h3 className="card__tittle" >
                    Metas
                  </h3>
                  <p>Para ayudar a su empresa a crecer, queremos entender sus objetivos. Con eso, podemos proporcionarle una hoja de ruta completa para lograrlos.
                  </p>
                </div>
                </div>
              </article>
              <article className="card">
                <div className="card__content">
                  <div className="card__image">
                  <Hero4
                     className="image"
                    />
                  </div>
                  <div className="text__card">
                    <h3 className="card__tittle" >
                      Metas
                    </h3>
                    <p>Para ayudar a su empresa a crecer, queremos entender sus objetivos. Con eso, podemos proporcionarle una hoja de ruta completa para lograrlos.
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