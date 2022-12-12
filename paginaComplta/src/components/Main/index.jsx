import React from 'react';
import './Main.css'
import { Header } from '../Header/index'
import {Seccion1} from '../Seccion1/index'
import {Seccion2} from '../Seccion2/index'
import {Seccion3} from '../Seccion3/index'
import {Seccion4} from '../Seccion4/index'
import {Seccion5} from '../Seccion5/index'
import {Seccion6} from '../Seccion6/index'
import {Imagenes} from '../pages/Imgenes/index'
import {Videoss} from '../pages/Videoss/index'
import {Descripcion} from '../pages/Descripcion/index'
import { Footer } from '../Footer/index'
import {Route,Routes,BrowserRouter,NavLink} from 'react-router-dom'


const Main = () => {
    return(
        <div>
            <Header/>
            <Seccion1/>
            <Seccion2/>
            <Seccion3/>
            <Seccion4/>
            <BrowserRouter>
                <Seccion5/>
                <Routes>
                    <Route path='/' element={<Imagenes/>}/>
                    <Route path='/Videos' element={<Videoss/>}/>
                    <Route path='/Descripcion' element={<Descripcion/>}/>
                </Routes>
            </BrowserRouter>
            <Seccion6/>
            <Footer/>
        </div>
    )
}

export { Main }