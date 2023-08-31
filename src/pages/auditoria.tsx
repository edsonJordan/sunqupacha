import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Header from "./../components/sections/header";
import Footer from "./../components/sections/footer";


import 'react-multi-carousel/lib/styles.css';

//Sectios 
import SectionBannerAudits from "../components/sections/section-bannerAudits";
import SectionContactEmail from "../components/sections/section-contactEmail";
import SectionWhySunqupacha from "../components/sections/section-whySunqupacha";
import SectionLastsBlogs from "../components/sections/section-lastsBlogs";



const Audits: React.FC<PageProps> = () => {
  const [newTask, setNetTast]=React.useState('');
  return (
    <>
    <Header />
    <main className="main" >
      <SectionBannerAudits/>
      <section className="section section--contrato">
        <div className="content content-contrato">
            <h2>
              ¿Qué sucede cuando contrato SunquPacha?
            </h2>
            <p>
              Cuando contratas a SunquPacha, obtienes un equipo de marketing digital externo que impulsa todo tu marketing digital hacia resultados medibles. La estrategia de marketing que diseñamos se basa en las necesidades y objetivos comerciales de su empresa, y mantenemos un diálogo continuo para mantenernos actualizados. El trabajo se planifica cada tres meses y lo lleva a cabo un director de proyecto de SunquPacha. Los especialistas que forman parte del equipo se ajustan cuando es necesario, en función de cuál es el enfoque. Contamos con especialistas en la mayoría de los aspectos del marketing digital y nos aseguramos de que siempre tenga acceso a la experiencia que necesita para tener éxito. El punto de partida de todo el trabajo son sus objetivos comerciales, que se traducen en cifras clave que medimos y le informamos. De esta manera, obtiene un seguimiento que tiene una conexión clara con lo que usted y la empresa desean obtener de la inversión que realiza en nosotros. Obtienes todo esto a un precio fijo mensual que corresponde aproximadamente a un empleado
            </p>
        </div>
      </section>
      <SectionContactEmail/>
      <SectionLastsBlogs/>
      <SectionWhySunqupacha/>
    </main>
    <Footer/>
    </>
  )
}

export default Audits

export const Head: HeadFC = () => <title>Home Page</title>
