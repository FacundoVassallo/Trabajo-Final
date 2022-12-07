import React from 'react';
import './Seccion2.css'

const Seccion2 = () => {
    return(
        <div>
            <section className="sdos" id="sdos">
                <h6 className="h6s2">Sobre Mi</h6>
                <h3 className="h3s2"><b>Conoceme Más</b></h3>
                <div className="contenedor1s2">
                    <div className="d1s2">
                        <h4 className="h4s2">Hola, soy <b className="bs2">Facundo Vassallo</b></h4>
                        <p className="ps2">Soy un futuro diseñador y desarrollador, apasionado por el diseño web. Disfruto desarrollando sitios web simples, limpios y elegantes que brindan un valor real al usuario final. busco sefuir aprendiendo y mejorando para relizar un trabajo excepcional. Entregar el trabajo dentro del tiempo y el presupuesto que cumpla con los requisitos del cliente es mi lema.</p>
                    </div>
                    <div className="d2s2">
                        <div className="sd1s2"><h1 className="h1s2">1</h1></div>
                        <h4 className="h4s2">Años de <b>Experiencia</b></h4>
                    </div>
                </div>
                
                <div className="d3s2">
                    <table>
                        <tr>
                            <th>Nombre:</th>
                            <th>Email:</th>
                        </tr>
                        <tr>
                            <td><b>Facundo Vassallo</b></td>
                            <td><b>Facu.vassallo@outlook.com</b></td>

                        </tr>
                    </table>
                    <table>
                        <tr>

                            <th>fecha de nacimiento:</th>
                            <th>Locacion:</th>
                        </tr>
                        <tr>
                            <td><b>3 may, 2000</b></td>
                            <td><b>Buenos Aires, Argentina</b></td>
                        </tr>
                    </table>
                </div>
            </section>
        </div>
    )
}

export { Seccion2 }