import React from 'react';
import Instagram from "../Assets/iconos/instagram.svg";
import Twitter from "../Assets/iconos/twitter.svg";
import Mapa from "../Assets/iconos/mapa.svg"
import "../CSS/Footer.css";


function Footer() {
    return (
        <>
    
        
        <div className='espacio'>
        <footer className="py-3 my-4">
            <ul className="nav justify-content-around border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <a href="https://www.google.com.ar/maps/place/French+2695,+C1425AWC+CABA/@-34.5892775,-58.4041627,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcca9beb47858f:0xd6615befebb07e6d!8m2!3d-34.5892819!4d-58.4015878!16s%2Fg%2F11c26wdswx?entry=ttu" className="nav-link px-2 text-body-secondary" target='_blank'>
                        <img src={Mapa}  alt="Mapa" width="24" height="24" />
                    </a>
                </li>
                
                <li className="nav-item">
                    <a href="https://www.instagram.com/occohelados/" className="nav-link px-2 text-body-secondary"  target='_blank'>
                        <img src={Instagram} alt="Instagram" width="24" height="24" />
                    </a>
                </li>

                
                <li className="nav-item">
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Frapanui_choco" className="nav-link px-2 text-body-secondary"  target='_blank'>
                        <img src={Twitter} alt="Twitter" width="24" height="24" />
                    </a>
                </li>
                
                
            </ul>
            <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
        </footer>
        </div>
        
        </>
        
    )
}


export default Footer; 