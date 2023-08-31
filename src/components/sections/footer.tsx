import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='footer' >   
        <div className='navigation'>  
            <ul className='footer__list'>
                <a className='logo' href="#">
                    SunquPacha
                </a>
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
                
            </ul>            
            <ul className='footer__list'>
                
                <li>
                    <p className='navigation__link title' >Compañia</p>
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
                
            </ul>
            <ul className='footer__list'>
                <li>
                    <p className='navigation__link title' >Servicios</p>
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
                
            </ul>
        </div>
    </footer>
  )
}

export default Footer