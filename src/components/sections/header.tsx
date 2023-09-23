import React, { useState } from 'react'
import Amburguesa from "./../../images/pages/menu-hamburguesa.svg";

import { Link } from 'gatsby'
import Logo from "./../../images/pages/logo.svg";
import { StaticImage } from 'gatsby-plugin-image';
const Header: React.FC = () => {
    const [statusMenu, setStatusMenu] = useState<boolean>(false);
  return (
    <header className='header' >   
        <nav className='navigation'>  
            <div className='flex items-center justify-between'>
            <Link className='logo' title='Nuestra página de Inicio' to="/">
                <StaticImage
                      src="./../../images/pages/logo-tiny.png" // Ruta relativa a la carpeta "src/images"
                      className=' w-12 object-contain'
                      alt="Logo SunquPacha"
                      title='SunquPacha: Agencia de Desarrollo Web en Perú'
                      placeholder="blurred" // Puedes cambiar esto a "none" o "tracedSVG" según tus preferencias
                      // layout="fixed"
                      width={200} // Ancho deseado de la imagen
                      height={202} // Altura deseada de la imagen
                    />
                {/* <Logo className=" h-full w-full" alt="Logo SunquPacha"/> */}
                SunquPacha
            </Link>
                <Amburguesa onClick={()=>{setStatusMenu(!statusMenu)}}  className="icon-menu "/>
            </div>
            <ul className={statusMenu ? "navigation__list active":"navigation__list "}>
                <li>
                    <Link title='Nuestra página de Inicio ' className='navigation__link' to="/">Inicio</Link>
                </li>
                <li>
                    <Link title='Nuestros servicios' className='navigation__link' to="/servicios">Servicios</Link>
                </li>
                <li>
                    <Link title='Las industrias que dominamos' className='navigation__link' to="/industrias">Industrias</Link>
                </li>
                
                <li>
                    <Link title='Nuestro Blog' className='navigation__link' to="/blog">Blog</Link>
                </li>
                <li>
                    <Link title='Acerca de Nosotros' className='navigation__link' to="/nosotros">Acerca de Nosotros</Link>
                </li>
                <li>
                    <Link title='Formulario para contactarnos' className='btn pill' to="/contactenos">Contactanos</Link>
                </li>
                
                
            </ul>
        </nav>
    </header>
  )
}

export default Header