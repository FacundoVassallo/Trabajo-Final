import React from 'react';
import './Videoss.css';
import video from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/Video/videoita.mp4'

const Videoss = () => {
    return(
        <div className='vidcinco'>
            <video width='1000' autoPlay playsInline muted controls >
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    )
}

export { Videoss }