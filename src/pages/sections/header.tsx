import React, { useState } from 'react'
import Amburguesa from "./../../images/pages/menu-hamburguesa.svg";

const Header: React.FC = () => {
    const [statusMenu, setStatusMenu] = useState<boolean>(true);

   


  return (
    <header className='header' >   
        <nav className='navigation'>  
            <div className='flex items-center justify-between'>
                <a className='logo' href="#">
                    SunquPacha
                </a>
                <Amburguesa onClick={()=>{setStatusMenu(!statusMenu)}}  className="icon-menu "/>
            </div>
            <ul className={statusMenu ? "navigation__list ":"navigation__list none"}>
                <li>
                    <a className='navigation__link' href="#">Servicios</a>
                </li>
                <li>
                    <a className='navigation__link' href="#">Industrias</a>
                </li>
                <li>
                    <a className='navigation__link' href="#">Acerca de Nosotros</a>
                </li>
                <li>
                    <a className='navigation__link' href="#">Blog</a>
                </li>
                <li>
                    <a className='btn pill' href="#">Contactanos</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header