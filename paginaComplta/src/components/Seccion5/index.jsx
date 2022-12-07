import React from 'react';
import fotos from '../img/imgitalia.jpg';
import './Seccion5.css'

const Seccion5 = () => {
    return(
        <div>
            <section className="scinco" id="scinco">
            <h6>Portfolio</h6>
            <h3>Mis Proyectos Mas Recientes</h3>
            <div className="ds5">
                <div className="dimgs5 d111">
                    <img src={fotos} alt="" className="imgs5"/>
                </div>
                <div className="dimgs5 d222">
                    <img src={fotos} alt="" className="imgs5"/>
                </div>
                <div className="dimgs5 d333">
                    <img src={fotos} alt="" className="imgs5"/>
                </div>
                <div className="dimgs5 d444">
                    <img src={fotos} alt="" className="imgs5"/>
                </div>
                <div className="dimgs5 d555">
                    <img src={fotos} alt="" className="imgs5"/>
                </div>
                <div className="dimgs5 d666">
                    <img src={fotos} alt="" className="imgs5"/>
                </div>
            </div>
        </section>
        </div>
    )
}

export { Seccion5 }