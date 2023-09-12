import React from 'react'


type Props = {}

const SectionWhoAreWe = (props: Props) => {
  return (
    <section className="section section--email ">
    <div className="content content--email">
      <h2 className="tittle">
        Reserve una consulta gratuita de marketing digital 
      </h2>
      <div className="form form--email">
        <form  data-netlify-recaptcha="true"  name="cita" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="cita" />

          <input type="email" name="email" id="email" required placeholder="Ingrese su correo" />
          <div data-netlify-recaptcha="true"></div>
          <button className="btn pill" type="submit">Reserva mi reunión gratuita</button>

          {/* <input className="btn pill" type="submit" value="Reserva mi reunión gratuita" /> */}
        </form>
      </div>
    </div>
  </section>
  )
}


export default SectionWhoAreWe