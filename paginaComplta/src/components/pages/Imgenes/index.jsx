import React from 'react';
import fotos from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/imgitalia.jpg';
import fotos2 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img2.jpg';
import fotos3 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img3.jpg';
import fotos4 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img4.jpg';
import fotos5 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img5.jpg';
import fotos6 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img6.jpg';
import './Imagenes.css'

const Imagenes = () => {
    return(
        
        <div className="imgcinco">   
            <div className="ds5">
                <div className="dimgs5 d111">
                    <img src={fotos} alt="" className="imgs5"/>
                </div>
                <div className="dimgs5 d222">
                    <img src={fotos2} alt="" className="imgs5"/>
                </div>
                <div className="dimgs5 d333">
                    <img src={fotos3} alt="" className="imgs5"/>
                </div>
                <div className="dimgs5 d444">
                    <img src={fotos4} alt="" className="imgs5"/>
                </div>
                <div className="dimgs5 d555">
                    <img src={fotos5} alt="" className="imgs5"/>
                </div>
                <div className="dimgs5 d666">
                    <img src={fotos6} alt="" className="imgs5"/>
                </div>
            </div>
        </div>
        
    )
}

export { Imagenes }