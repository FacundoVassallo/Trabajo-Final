import React from 'react';
import fotos from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/imgitalia.jpg';
import './Imagenes.css'

const Imagenes = () => {
    return(
        
        <div className="imgcinco">   
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
        </div>
        
    )
}

export { Imagenes }