import React from 'react';
import { useState } from 'react';
import './Header.css'

const Header = () => {
    return(
        <div>
            <header>
                <h1 className="harriba">Facundo</h1>  
                <nav className='navheader' id='uls77'>
                    <ul className='uls7' >
                        <li><a href="#suno" className="ah">Inicio</a></li>
                        <li><a href="#sdos" className="ah">Conoceme</a></li>
                        <li><a href="#stres" className="ah">Servicios</a></li>
                        <li><a href="#scuatro" className="ah">Resumen</a></li>
                        <li><a href="#scinco" className="ah">Portfoli</a>o</li>
                        <li><a href="#ssiete" className="ah">Buscador</a>o</li>
                        <li><a href="#snueve" className="ah">Contacto</a></li>
                    </ul>
                    
                </nav>   
                <div id='uls777'>
                    <a href="https://www.facebook.com/facu.vassallo.9" target="_blank"><i className="fa-brands fa-facebook fc"></i></a>
                    <a href="https://twitter.com/vassallo_1" target="_blank"><i className="fa-brands fa-twitter tw"></i></a>
                    <a href="https://www.instagram.com/facundovassallo/" target="_blank"><i className="fa-brands fa-instagram ig"></i></a>
                </div>
                <div >
                    <a href="" className="burger" id='as7' onClick={()=>{
                        uls77.style.display= 'flex'
                        uls777.style.display= 'flex'
                        as7.style.display= 'none'
                        spans7.style.display= 'flex'     
                    }}><i className="fa-solid fa-bars"></i></a>
                    <span className='spans7' id='spans7' onClick={()=>{
                        uls77.style.display= 'none'
                        uls777.style.display= 'none'
                        spans7.style.display= 'none'

                    }}>X</span>
                </div>
            </header>
        </div>
    )
}

export { Header }