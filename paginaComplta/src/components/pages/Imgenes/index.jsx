import React from 'react';
import fotos1 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/imgitalia.jpg';
import fotos2 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img2.jpg';
import fotos3 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img3.jpg';
import fotos4 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img4.jpg';
import fotos5 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img5.jpg';
import fotos6 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img6.jpg';
import './Imagenes.css'




const Imagenes = () => {

    function imagengrande (foto){
        const num=Number(foto)
        console.log(num)
        if(num==1){
            return fotos1
        }else{
            if(foto==2){
                return fotos2
            }else{
                if(foto==3){
                    return fotos3
                }else{
                    if(foto==4){
                        return fotos4
                    }else{
                        if(foto==5){
                            return fotos5
                        }else{
                            return fotos6
                        }
                    }
                }
            }
        }
    }
    
    
    return(
        
        <div className="imgcinco">
            <div className='ful_img' id='fulImgBox'>
                <img src={imagengrande()} id='fulImg' alt="" />
                <span onClick={()=>{
                    fulImgBox.style.display= 'none'
                }}>X</span>
            </div>   
            <div className="ds5">
                <div className="dimgs5 d111">
                    <img src={fotos1} alt="" className="imgs5" onClick={()=>{
                    fulImgBox.style.display= 'flex'
                    
                    imagengrande(1)
                }}/>
                </div>
                <div className="dimgs5 d222">
                    <img src={fotos2} alt="" className="imgs5" onClick={()=>{  
                    fulImgBox.style.display= 'flex'
                    imagengrande(2)

                }}/>
                </div>
                <div className="dimgs5 d333">
                    <img src={fotos3} alt="" className="imgs5" onClick={()=>{ 
                    fulImgBox.style.display= 'flex'
                    imagengrande(3)
                }}/>
                </div>
                <div className="dimgs5 d444">
                    <img src={fotos4} alt="" className="imgs5" onClick={()=>{
                    fulImgBox.style.display= 'flex'
                    imagengrande(4)
                }}/>
                </div>
                <div className="dimgs5 d555">
                    <img src={fotos5} alt="" className="imgs5" onClick={()=>{
                    fulImgBox.style.display= 'flex'
                    imagengrande(5)
                }}/>
                </div>
                <div className="dimgs5 d666">
                    <img src={fotos6} alt="" className="imgs5" onClick={()=>{
                    fulImgBox.style.display= 'flex'
                    imagengrande(6)
                }}/>
                </div>
            </div>
        </div>
        
    )
}

export { Imagenes }