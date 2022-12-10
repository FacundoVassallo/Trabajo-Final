import React from 'react';
import fotos1 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/imgitalia.jpg';
import fotos2 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img2.jpg';
import fotos3 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img3.jpg';
import fotos4 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img4.jpg';
import fotos5 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img5.jpg';
import fotos6 from '/Users/Facundo/Desktop/TrabajoFinal/paginaComplta/src/components/img/img6.jpg';
import './Imagenes.css'




const Imagenes = () => {

    
    return(
        
        <div className="imgcinco">
            <div className='ful_img' id='fulImgBox1'>
                <img src={fotos1} id='fulImg' alt="" />
                <span onClick={()=>{
                    fulImgBox1.style.display= 'none'
                }}>X</span>
            </div>
            <div className='ful_img' id='fulImgBox2'>
                <img src={fotos2} id='fulImg' alt="" />
                <span onClick={()=>{
                    fulImgBox2.style.display= 'none'
                }}>X</span>
            </div>
            <div className='ful_img' id='fulImgBox3'>
                <img src={fotos3} id='fulImg' alt="" />
                <span onClick={()=>{
                    fulImgBox3.style.display= 'none'
                }}>X</span>
            </div>
            <div className='ful_img' id='fulImgBox4'>
                <img src={fotos4} id='fulImg' alt="" />
                <span onClick={()=>{
                    fulImgBox4.style.display= 'none'
                }}>X</span>
            </div>
            <div className='ful_img' id='fulImgBox5'>
                <img src={fotos5} id='fulImg' alt="" />
                <span onClick={()=>{
                    fulImgBox5.style.display= 'none'
                }}>X</span>
            </div>
            <div className='ful_img' id='fulImgBox6'>
                <img src={fotos6} id='fulImg' alt="" />
                <span onClick={()=>{
                    fulImgBox6.style.display= 'none'
                }}>X</span>
            </div>   
            <div className="ds5">
                <div className="dimgs5 d111">
                    <img src={fotos1} alt="" className="imgs5" onClick={()=>{
                    fulImgBox1.style.display= 'flex'
                    
                }}/>
                </div>
                <div className="dimgs5 d222">
                    <img src={fotos2} alt="" className="imgs5" onClick={()=>{  
                    fulImgBox2.style.display= 'flex'
                }}/>
                </div>
                <div className="dimgs5 d333">
                    <img src={fotos3} alt="" className="imgs5" onClick={()=>{ 
                    fulImgBox3.style.display= 'flex'
                }}/>
                </div>
                <div className="dimgs5 d444">
                    <img src={fotos4} alt="" className="imgs5" onClick={()=>{
                    fulImgBox4.style.display= 'flex'
                }}/>
                </div>
                <div className="dimgs5 d555">
                    <img src={fotos5} alt="" className="imgs5" onClick={()=>{
                    fulImgBox5.style.display= 'flex'
                }}/>
                </div>
                <div className="dimgs5 d666">
                    <img src={fotos6} alt="" className="imgs5" onClick={()=>{
                    fulImgBox6.style.display= 'flex'
                }}/>
                </div>
            </div>
        </div>
        
    )
}

export { Imagenes }