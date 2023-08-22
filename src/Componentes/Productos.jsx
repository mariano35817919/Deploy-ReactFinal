import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Helados1 from '../Assets/imagenes/Helados1.jpg';
import "../CSS/Productos.css";
import Chocolate from "../Assets/imagenes/TarjetaChocolate.jpg";
import Chocolate2 from "../Assets/imagenes/Chocolate2.jpg";
import Torta from "../Assets/imagenes/TarjetaTortas.jpg";
import Torta2 from "../Assets/imagenes/Torta2Tarjeta.jpg";
import Helado2 from "../Assets/imagenes/TarjetaHelado.jpg";




import imagenesHelado from "../Data.js/Data-Helados";
import imagenesChocolates from '../Data.js/Data-Chocolates';
import imagenesTortas from '../Data.js/Data-Tortas';



import React, { useState } from 'react';








const Productos = () => {
    const [mostrarHelados, setMostrarHelados] = useState(false);
    const [mostrarChocolates, setMostrarChocolates] = useState(false);
    const [mostrarTortas, setMostrarTortas] = useState(false);

    const handleMostrarHelados = () => {
        setMostrarHelados(!mostrarHelados);
        setMostrarChocolates(false);
        setMostrarTortas(false);

        
    };

    const handleMostrarChocolates = () => {
        setMostrarChocolates(!mostrarChocolates);
        setMostrarHelados(false); 
        setMostrarTortas(false);
    };

    const handleMostrarTortas = () => {
        setMostrarTortas(!mostrarTortas);
        setMostrarHelados(false); 
        setMostrarChocolates(false);
    };
    
        return (
            <>
                <h1 className='Titulo'>Conozca nuestros productos</h1>
                <div className="container">
                    <Card style={{ width: '18rem' }}className="border border-warning">
                        <Card.Img variant="top" src={Helados1} />
                        <Card.Body className='text-dark ' style={{ backgroundImage: `url(${Helado2})` }}>
                            <Card.Title className="bg-warning font-weight-bolder border border-warning">Helado</Card.Title>
                            <Button variant="warning" onClick={handleMostrarHelados}>mostrar</Button>
                        </Card.Body>
                    </Card>
    
                    <Card style={{ width: '18.9rem' }} className='border border-warning'>
                        <Card.Img variant="top" src={Chocolate2} />
                        <Card.Body style={{ backgroundImage: `url(${Chocolate})` }}>
                            <Card.Title className=' bg-warning font-weight-bolder border border-warning' >Chocolate</Card.Title>
                            <Button variant="warning" onClick={handleMostrarChocolates}>mostrar</Button>
                        </Card.Body>
                    </Card>
    
                    <Card style={{ width: '18rem' }} className="border border-warning">
                        <Card.Img variant="top" src={Torta2} />
                        <Card.Body className='text-dark' style={{ backgroundImage: `url(${Torta})` }}>
                            <Card.Title className=' bg-warning font-weight-bolder border border-warning'>Torta</Card.Title>
                            <Button variant="warning" onClick={handleMostrarTortas}>mostrar</Button>
                        </Card.Body>
                    </Card>
                </div>
                    
                
                    
                    {mostrarHelados && (
                        <div className="Padre container">
                            {imagenesHelado.map(helado => (
                            
                            <div  key={helado.id} className="Hijo">
                            
                                <img src={helado.imagen} alt="imagen de helado" />
                            
                                <h3>{helado.nombre}</h3>
                            
                                <p>Precio: ${helado.precio}</p>

                            </div>
                            ))}
                        </div>
                    )}

                    {mostrarChocolates && (
                        <div className="Padre2">
                            {imagenesChocolates.map(chocolate => (
                            
                            <div key={chocolate.id} className="Hijo2">
                            
                                <img src={chocolate.imagen} alt="imagen de chocolate" />
                            
                            
                                <h3>{chocolate.nombre}</h3>
                            
                                <p>Precio: ${chocolate.precio}</p>

                            
                            </div>
                            
                            ))}
                        </div>
                    )}

                    {mostrarTortas && (
                        <div className="Padre3">
                            {imagenesTortas.map(torta => (
                            
                            <div key={torta.id} className="Hijo3">
                                
                                <img src={torta.imagen} alt="imagen de torta" />
                                
                                <h3>{torta.nombre}</h3>
                                <p>Precio: ${torta.precio}</p>
                            
                            </div>
                            ))}
                        </div>
                    )}
                
            </>
        );
    }
    

    




export default Productos;
