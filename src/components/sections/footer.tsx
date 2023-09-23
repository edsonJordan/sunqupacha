import { Link } from 'gatsby'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='footer' >   
        <div className='navigation'>  
            <ul className='footer__list'>
                <li>
                <Link   title='Sunqupacha: Inicio' className='logo__text' to="/">SunquPacha</Link>

                </li>
                <li>
                    <Link   title='Sunqupacha: nuestros servicios' className='navigation__link' to="/servicios">Servicios</Link>
                </li>
                <li>
                    <Link title='Sunqupacha: experiencias en industrias'className='navigation__link' to='/industrias'  >Industrias</Link>
                </li>
                <li>
                    <Link title='Sunqupacha: acerca de nosotros'  className='navigation__link' to='/nosotros'>Acerca de Nosotros</Link>
                    
                </li>
                <li>
                    <Link title='Sunqupacha: nuestro blog'  className='navigation__link' to='/blog'>Blog</Link>
                    
                </li>
                
            </ul>            
            <ul className='footer__list'>
                
                <li>
                    <p className='navigation__link title' >Compañia</p>
                </li>
                <li>
                    <Link title='Nuestra politica de privacidad' className='navigation__link' to='/politica'>Política de privacidad</Link>
                    
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