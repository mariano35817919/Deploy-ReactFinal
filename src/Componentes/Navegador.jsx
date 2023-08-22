
import React from 'react';
import heladoLogo from "../Assets/imagenes/heladoLogo.png";
import "../CSS/Navegador.css";
import {Link} from "react-router-dom";

function Navegador() {
    return (
        <>
        <nav className="container">
            <Link to="./">
            <a href="#" className="logo">
                <img src={heladoLogo} alt="Logo" className="logo-image" />
            </a>
            </Link>
            <Link to="./">Home</Link>
            <Link to="./Productos">Productos</Link>
            <Link to="./Formulario">Formulario</Link>
            <Link to="./Api">API</Link>
            
        </nav>
            <hr/>
            </>
        
    );
}

export default Navegador;
