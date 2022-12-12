import React from 'react';
import axios from 'axios';
import './Seccion7.css'
import { useState } from 'react';
import { useEffect } from 'react';

function Seccion7() {
    const [parsonajes,setPersonajes]=useState([])
    const [pagina,setPagina]=useState(1)
    useEffect(()=>{
        const obtenerPersonajes = async()=>{
            const response =await axios.get(`https://rickandmortyapi.com/api/character/?page=${pagina}`)

            setPersonajes(response.data.results)
        }
        obtenerPersonajes()
    },[pagina])

    const busqueda=(e)=>{
        const resultadoBusqueda = parsonajes.filter(elemento=>elemento.name.toLowerCase().includes(e.target.value))

        setPersonajes(resultadoBusqueda)
    }


    return(
        <div className='contenedor' id='ssiete'>
            <h3 className='h3s7'>Buscador De Rick And Morty</h3>
                <div>
                    <input className='inputs7' type="text" name='' id='' placeholder='Ingrese nombre a buscar' onChange={(e)=>busqueda(e)}/>
                </div>
            <div className='contenedor2'>
                {parsonajes.map((elemento)=>(
                    <div key={elemento.id} className='divpj'>
                        <h2>{elemento.name}</h2>
                        <img src={elemento.image} />
                    </div>
                ))}
            </div>
            <div>
                <button className='botons7' onClick={()=>setPagina(pagina-1)}>Anterior</button>
                <button className='botons7' onClick={()=>setPagina(pagina+1)}>Siguiente</button>
            </div>
        </div>
    )
}

export { Seccion7 }