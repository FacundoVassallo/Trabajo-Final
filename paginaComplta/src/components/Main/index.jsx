import React from 'react';
import './Main.css'
import { Header } from '../Header/index'
import {Seccion1} from '../Seccion1/index'
import {Seccion2} from '../Seccion2/index'
import {Seccion3} from '../Seccion3/index'
import {Seccion4} from '../Seccion4/index'
import {Seccion6} from '../Seccion6/index'


const Main = () => {
    return(
        <div>
            <Header/>
            <Seccion1/>
            <Seccion2/>
            <Seccion3/>
            <Seccion4/>
            <Seccion6/>
        </div>
    )
}

export { Main }