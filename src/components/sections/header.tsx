import React, { useState } from 'react'
import Amburguesa from "./../../images/pages/menu-hamburguesa.svg";

import { Link } from 'gatsby'
import Logo from "./../../images/pages/logo.svg";
const Header: React.FC = () => {
    const [statusMenu, setStatusMenu] = useState<boolean>(true);
  return (
    <header className='header' >   
        <nav className='navigation'>  
            <div className='flex items-center justify-between'>
            <Link className='logo' to="/">
                <Logo className=" h-full w-full" alt="Logo SunquPacha"/>
                SunquPacha
            </Link>
                <Amburguesa onClick={()=>{setStatusMenu(!statusMenu)}}  className="icon-menu "/>
            </div>
            <ul className={statusMenu ? "navigation__list ":"navigation__list none"}>
                <li>
                    <Link className='navigation__link' to="/">Inicio</Link>
                </li>
                <li>
                    <Link className='navigation__link' to="/servicios">Servicios</Link>
                </li>
                <li>
                    <Link className='navigation__link' to="/industrias">Industrias</Link>
                </li>
                <li>
                    <Link className='navigation__link' to="/nosotros">Acerca de Nosotros</Link>
                </li>
                <li>
                    <Link className='navigation__link' to="/blog">Blog</Link>
                </li>
                <li>
                    <Link className='btn pill' to="/contacto">Contactanos</Link>
                </li>
                
            </ul>
        </nav>
    </header>
  )
}

export default Header