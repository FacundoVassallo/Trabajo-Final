import React from 'react';
import './Seccion1.css';
import foto from '../img/imagentp3.jpeg'


const Seccion1 = () => {
    return(
        <div>
            <section className="suno" id="suno">
                <div className="dcs1">
                    <div className="ds1">
                        <h2 className="h2s1">Hola, soy freelancer</h2>
                        <h1 className="hs1"><b>Developer</b><b>|</b></h1>
                        <h5 className="h5s1">Buenos Aires, Argentina.</h5>
                        <a href="#scinco" className="as1"><button className="bs1">Mis Trabajos</button></a>
                        <a href="#snueve" className="a2s1"><button className="b2s1"><u className="us1">Contactame</u> <i className="fa-solid fa-arrow-down"></i></button></a>
                    </div>
                    <div className="d2s1">
                        <img src={foto} alt="" className='dimgs1'/>
                    </div>
                </div>
                <div className="d3s1">
                    <i className="fa-solid fa-arrow-down flecha"></i>
                </div>
            </section>
        </div>
    )
}

export { Seccion1 }