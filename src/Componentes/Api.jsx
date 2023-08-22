
import { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";

import "../CSS/Api.css";





const Api = () => {

    const nombreUsuario = localStorage.getItem('nombreUsuario');
    const saborHelado = localStorage.getItem('saborHelado');

    const [personajes, setPersonajes] = useState([]);

    const saboresHelado = [
        "Vainilla",
        "Chocolate",
        "Fresa",
        "Menta",
        "Caramelo",
        "Café",
        "Mango",
        "Coco",
        "Limón",
        "Nuez",
        "Americana",
        "Tiramisú",
        "Pistacho",
        "Avellana",
        "Piña",
        "Banana",
        "Maracuyá",
        "Arándano",
        "Melocotón",
        "Frutilla"
];
    

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(respuesta => respuesta.json())
            .then(respuesta => setPersonajes(respuesta.results))


    })









    






    return (
        <>
            <h1>Rick y Morty de HELADOS</h1>
            <h2>Hola {nombreUsuario} si tu helado favorito es {saborHelado} eres:</h2>


            <div className=" Padre container">
                            {personajes.map((personaje,index) => (
                            
                            <div  key={personaje.id} className="Hijo">
                            
                                <img src={personaje.image} alt="personaje" />
                            
                                <h3>{saboresHelado[index % saboresHelado.length]}</h3>
                            
                                <p>{personaje.name}</p>

                            </div>
                            ))}
                        </div>


        </>
    );
};







export default Api; 