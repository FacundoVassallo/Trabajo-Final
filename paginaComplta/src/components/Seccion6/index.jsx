import React from 'react';
import './Seccion6.css'

const Seccion6 = () => {
    return(
        <div>
            <section className="snueve" id="snueve">
                <div className="d1s9">
                    <h3 className="h3s9">Mantengamonos en Contacto</h3>
                    <p className="ps9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullam aut eos, libero eveniet inventore totam fugit eligendi dolore sunt, possimus maxime. Consequatur ipsa aliquid deleniti quae quibusdam, reprehenderit omnis.</p>
                    <h5 className="h5s9">Vivo en:</h5>
                    <p className="ps9">Constitucion 1160, Merlo, Bs. As., ARG.</p>
                    <h5 className="h5s9">Telefono</h5>
                    <p className="ps9">(+54) 11-5736-9366</p>
                    <div>
                        <a href="https://twitter.com/vassallo_1" target="_blank"><i className="fa-brands fa-twitter ico"></i></a>
                        <a href="https://www.facebook.com/facu.vassallo.9" target="_blank"><i className="fa-brands fa-facebook ico"></i></a>
                        <a href="https://www.instagram.com/facundovassallo/" target="_blank"><i className="fa-brands fa-instagram ico"></i></a>
                        <a href="https://github.com/FacundoVassallo" target="_blank"><i className="fa-brands fa-github ico"></i></a>
                    </div>
                    
                </div>
                <div className="d2s9">
                    <h3 className="h3s9">¿Evaluar tu Proyecto?</h3>
                    <form action="">
                        <label for=""><b>Ingrese su nombre:</b></label>
                        <input type="text" name="nombre"/>
                        <label for=""><b>Ingrese su email:</b></label>
                        <input type="email" name="email"/>
                        <label for=""><b>Como puedo ayudarte:</b></label>
                        <textarea name="comentario"></textarea>
                        <button type="submit" className="b1s9">Enviar <i className="fa-solid fa-arrow-right flecha2"/></button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export { Seccion6 }