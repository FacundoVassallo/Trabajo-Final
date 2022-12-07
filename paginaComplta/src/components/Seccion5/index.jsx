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
                    <NavLink to='/videos' className='navlink'>Video</NavLink>
                    <NavLink to='/Descripcion' className='navlink'>Historia</NavLink>
                </nav>
            </div>
        </section>
    )
}

export { Seccion5 }