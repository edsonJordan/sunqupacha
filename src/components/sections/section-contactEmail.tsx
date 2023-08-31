import React from 'react'

import Facebook from "./../../images/pages/facebook.svg";
import Twitter from "./../../images/pages/twitter.svg";
import Instagram from "./../../images/pages/instagram.svg";

type Props = {}

const SectionContactEmail = (props: Props) => {
  return (
    <section className="section section--contact">
      <div className="content content--contact">
        <div className="card--contact">
          <div className="contact--text">
            <h2 className="tittle">Hablemos de su ¡estrategia de mercadeo!</h2>
            <div className="items--social">
              <Facebook/>
              <Twitter/>
              <Instagram/>
            </div>
          </div>
          <form action="" className="form form--contact">
            <div className="form-group">
              <input type="text" name="Name" placeholder="Nombre" id="name" />
            </div>
            <div className="form-group">
              <input type="text" name="Email" placeholder="Email" id="email" />
            </div>
            <div className="form-group">
              <input type="text" name="Subject" placeholder="Asunto" id="asunto" />
            </div>
            <div className="form-group">
              <textarea name="Mensaje" id="message" placeholder="message">
              </textarea>
            </div>
            <div className="form-group">
              <input className="btn solid" type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}


export default SectionContactEmail