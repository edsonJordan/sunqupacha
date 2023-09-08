import React from 'react'


type Props = {}

const SectionBookEmail = (props: Props) => {
  return (
    <section className="section section--email ">
    <div className="content content--email">
      <h2 className="tittle">
        Reserve una consulta gratuita de marketing digital 
      </h2>
      <div className="form form--email">
        <form name="contact" method="POST" className="form form--contact" data-netlify="true">
          <input type="email" name="email" id="email" placeholder="Ingrese su correo" />
          <input className="btn pill" type="submit" value="Reserva mi reunión gratuita" />
        </form>
      </div>
    </div>
  </section>
  )
}


export default SectionBookEmail