import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div>
            <footer className='footerr'>
                <h4 className="h4footer">Copyright <i className="fa-regular fa-copyright copyfooter"></i>
                2022 <u className="ufooter">Facundo</u>. All Rights Reserved.</h4>
                <h4 className="h4footer">Designed by <u className="ufooter">Facundo Vassallo</u></h4>
            </footer>
        </div>
    )
}

export { Footer }