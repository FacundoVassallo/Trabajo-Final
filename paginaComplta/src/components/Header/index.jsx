import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <div>
            <header>
                <h1 className="harriba">Facundo</h1>
                <nav>
                    <ul>
                        <li><a href="#suno" className="ah">Inicio</a></li>
                        <li><a href="#sdos" className="ah">Conoceme</a></li>
                        <li><a href="#stres" className="ah">Servicios</a></li>
                        <li><a href="#scuatro" className="ah">Resumen</a></li>
                        <li><a href="#scinco" className="ah">Portfoli</a>o</li>
                        <li><a href="#snueve" className="ah">Contacto</a></li>
                        
                    </ul>
                </nav>
                    <a href="" className="burger"><i className="fa-solid fa-bars"></i></a>
                <div>
                    <a href="https://www.facebook.com/facu.vassallo.9" target="_blank"><i className="fa-brands fa-facebook fc"></i></a>
                    <a href="https://twitter.com/vassallo_1" target="_blank"><i className="fa-brands fa-twitter tw"></i></a>
                    <a href="https://www.instagram.com/facundovassallo/" target="_blank"><i className="fa-brands fa-instagram ig"></i></a>
                </div>
            </header>
        </div>
    )
}

export { Header }