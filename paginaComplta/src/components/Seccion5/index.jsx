import React from 'react';

import './Seccion5.css'
import {NavLink} from 'react-router-dom'

const Seccion5 = () => {
    return(
        <section className="scinco" id="scinco">
            <h6>Portfolio</h6>
            <h3>Mis Proyectos Mas Recientes</h3>
            <div className='navbar'>
                <nav>
                    <NavLink to='/' className='navlink' >Imagenes</NavLink>
                    <NavLink to='/videos' className='navlink'>Imagenes</NavLink>
                    <NavLink to='/historia' className='navlink'>Imagenes</NavLink>
                </nav>
            </div>
        </section>
    )
}

export { Seccion5 }