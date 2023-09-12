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
      {/* <form name="subcripcion"  method="POST" action='./' className="form form--contact" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="form-name" value="subcripcion" />
          <input type="text" name="Email" placeholder="Email" id="email" />          
          <button className="btn pill" type="submit">Reserva mi reunión gratuita</button>
      </form> */}
          <form name="subcripcion"  method="POST" className="form form--contact" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="form-name" value="subcripcion" />            
            <div className="form-group">
              <input type="text" name="Email" required required placeholder="Email" id="email" />
            </div>
            <div className="form-group">
              <button className="btn solid" type="submit">Reserva mi reunión gratuita</button>
            </div>
          </form>
      </div>
    </div>
  </section>
  )
}


export default SectionBookEmail