import React from 'react'

import Startup from "./../../images/pages/startup.svg";

import Promotion from "./../../images/pages/promotion.svg";
import Writer from "./../../images/pages/writer.svg";

type Props = {}

const SectionGridServices = (props: Props) => {
  return (
    <section className="section section--services">
        <div className="content content--blog ">
          <div className="grid-blog service">
            <div className="card card--service">
              <div className="card-header">
                      <Promotion/>
                      <h2>
                      Facebook Marketing
                      </h2>                    
              </div>
              <div className="card-body">
                      <p >
                        Contenido
                      </p>
              </div>
              <div className="card-footer">
                      <a href="#" className="btn pill">
                        ver mas
                      </a>
              </div>
            </div>

            <div className="card card--service">
              <div className="card-header">
                      <Promotion/>
                      <h2>
                      Facebook Marketing
                      </h2>                    
              </div>
              <div className="card-body">
                      <p >
                        Contenido
                      </p>
              </div>
              <div className="card-footer">
                      <a href="#" className="btn pill">
                        ver mas
                      </a>
              </div>
            </div>

            <div className="card card--service">
              <div className="card-header">
                      <Startup/>
                      <h2>
                      Facebook Marketing
                      </h2>                    
              </div>
              <div className="card-body">
                      <p >
                        Contenido
                      </p>
              </div>
              <div className="card-footer">
                      <a href="#" className="btn pill">
                        ver mas
                      </a>
              </div>
            </div>

            <div className="card card--service">
              <div className="card-header">
                      <Writer/>
                      <h2>
                      Facebook Marketing
                      </h2>                    
              </div>
              <div className="card-body">
                      <p >
                        Contenido
                      </p>
              </div>
              <div className="card-footer">
                      <a href="#" className="btn pill">
                        ver mas
                      </a>
              </div>
            </div>
          </div>
          
        </div>
    </section>
  )
}


export default SectionGridServices