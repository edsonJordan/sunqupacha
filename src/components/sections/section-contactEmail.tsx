import React, { useState } from 'react'

import Facebook from "./../../images/pages/facebook.svg";
import Twitter from "./../../images/pages/twitter.svg";
import Instagram from "./../../images/pages/instagram.svg";
import Whatsapp from "./../../images/pages/whatsapp.svg";
import Messenger from "./../../images/pages/messenger.svg";
type Props = {}

const SectionContactEmail = (props: Props) => {

  const [statusFacebook, setStatusFacebook]= useState<Boolean>(false);
  const [statusWhatsApp, setStatusWhatsApp]= useState<Boolean>(false);

  function reemplazarEspaciosConMas(s: string): string {
    return s.replace(/ /g, '+');
  }

 /*  function textWhatsapp(): string {
    // Realiza alguna operación en el texto
    return `https://wa.me/51948 890 811?text=Hola+Sunqupacha.+%C2%BFMe+interesa+saber+de+${reemplazarEspaciosConMas(texto)}%3F`;
  } */


  return (
    <section  id="section--contact"  className="section section--contact">
      <div className="content content--contact">
        <div className="card--contact">
          <div className="contact--text">
            <h2 className="tittle">Cuéntanos Tu Historia</h2>
            <p className='text-left text-normalgray' >Tu visión es el motor de tu negocio y estamos ansiosos por escucharla. Cuéntanos más sobre tu proyecto, tus desafíos y tus metas, y juntos encontraremos la estrategia perfecta para impulsar tu emprendimiento hacia el éxito.</p>
            <div className="items--social">
                <div className='icon-contact'>
                    <Messenger  
                    onClick={()=>{setStatusFacebook(!statusFacebook);  setStatusWhatsApp(false)}} 
                    width={42}/>
                    <div  className={statusFacebook ? "tooltiptext show":"tooltiptext" } >
                        <a href="https://m.me/SunquPacha?ref=¡Hola%20SunquPacha!%20Me%20interesa%20el%20servicio%20de%20marketing%20digital."
                          onClick={()=>{setStatusFacebook(false); } }>
                          ¿Marketin Digital ?
                          </a>
                        <a href="https://m.me/SunquPacha?ref=¡Hola%20SunquPacha!%20Me%20interesa%20el%20servicio%20de%20creación%20de%20páginas%20web."
                         onClick={()=>{setStatusFacebook(false)}}>
                          ¿Creacion de paginas web ?
                        </a>
                        <a href="https://m.me/SunquPacha?ref=¡Hola%20SunquPacha!%20Me%20gustaría%20obtener%20soporte."
                         onClick={()=>{setStatusFacebook(false)}}>
                          ¿Soporte ?
                        </a>
                    </div>
                </div>
                <div className='icon-contact'>
                    <Whatsapp  
                    onClick={()=>{setStatusWhatsApp(!statusWhatsApp);setStatusFacebook(false)  }} 
                    width={42}/>
                    <div  className={statusWhatsApp ? "tooltiptext show":"tooltiptext" } >
                        <a 
                        href='https://wa.me/51948 890 811?text=Hola+Sunqupacha.+Me+interesa+saber+mas+de+Marketing+Digital.+' 
                          onClick={()=>{setStatusWhatsApp(false); } }>
                          ¿Marketin Digital ?
                          </a>
                        <a 
                        href='https://wa.me/51948 890 811?text=Hola+Sunqupacha.+Estoy+interesad@+en+Creacion+de+paginas+web.+' 
                          onClick={()=>{setStatusWhatsApp(false)}}>
                          ¿Creacion de paginas web ?
                        </a>
                        <a 
                        href='https://wa.me/51948 890 811?text=Hola+Sunqupacha.+Deseo+tener+servicio+de+soporte.+' 
                          onClick={()=>{setStatusWhatsApp(false)}}>
                          ¿Soporte ?
                        </a>
                    </div>
                </div>
              {/* <Twitter width={32}/>
              <Instagram width={32}/>
              <a href="#">
                <Whatsapp width={42}/>
              </a>
              <a href="#">
                <Messenger width={42}/>
              </a> */}
              
            </div>
          </div>
          <form name="lead"  method="POST" className="form form--contact" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="form-name" value="lead" />
            <div className="form-group">
              <input type="text" name="Name" required placeholder="Nombre" id="name" />
            </div>
            <div className="form-group">
              <input type="text" name="Email" required placeholder="Email" id="email" />
            </div>
            <div className="form-group">
              <input type="text" name="Subject" required placeholder="Asunto" id="asunto" />
            </div>
            <div className="form-group">
              <textarea name="Mensaje" id="message" required placeholder="message">
              </textarea>
            </div>

            <div className="form-group">
              <button className="btn solid" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}


export default SectionContactEmail