import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Chocolate from "../Assets/imagenes/TarjetaChocolate.jpg";
import Portada from "../Assets/imagenes/Helado2PORTADA.jpg";
import Cliente from "../Assets/imagenes/HeladoCliente.jpg";


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

import Carousel from 'react-bootstrap/Carousel';



import Carruzel1 from "../Assets/imagenes-carruzel/Carruzel-Helado.jpg";
import Carruzel2 from "../Assets/imagenes-carruzel/Carruzel-Helado2.jpg";
import Carruzel3 from "../Assets/imagenes-carruzel/Carruzel-Helado3.jpg";
import '../CSS/Home.css';

import React, { useState } from 'react';




function Home() {

    const [nombre, setNombre] = useState('');



    const Registro = () => {

        Swal.fire(
            `Bienvenido, ${nombre}!`
        )

    }

    const RegistroNombre = (event) => {
        setNombre(event.target.value);
    };







    return (
        <>
            <h1>OccO Helados</h1>

            <Carousel className='container'>
                <Carousel.Item interval={1000}>
                    <img text="First slide" src={Carruzel1} className='Carruzel' />
                    <Carousel.Caption>
                        
                        <h2 className='imagen1'>Helado Artesanal</h2>
                        <p className='parrafo1'>elaborado en el día</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img text="Second slide" src={Carruzel2} className='Carruzel' />
                    <Carousel.Caption>
                        
                        <h2 className='imagen2'>Te tienta siempre</h2>
                        <p className='parrafo2'>durante todo el año</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img text="Third slide" src={Carruzel3} className='Carruzel' />
                    <Carousel.Caption>
                        
                        <h2 className='imagen3'>Variedad</h2>
                        <p className='parrafo3'>llegamos directo a tu corazón</p>
                            
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>





            <p className='container'>Del fuego al hielo, así puede resumirse la historia de Franco Savino y Nicolás Ciampa, creadores de la heladería Occo. Es que estos dos amigos -que luego incluyeron a Romeo Bontempi en el negocio- trabajaban como chefs y se pasaron de bando para transformarse en maestros heladeros. Su pasado se deja entrever en algunos sabores como zapallo, coco y curry; naranja, zanahoria y jengibre, o vainilla y lavanda.
            La primera sucursal, en Colegiales, abrió en 2012. "Queríamos hacer helados con una vuelta de rosca, con ingredientes no tradicionales, nuestro concepto era «el helado como arte»", explica Ciampa.
            Hoy cuentan con otros cuatro locales y mantienen la premisa, aunque esos sabores arriesgados no son los más pedidos. A la hora de elegir, el público prefiere lo clásico con solo media vuelta de tuerca. Los favoritos son el Cheese Limón (helado a base de queso con galletitas italianas de limón), el dulce de leche de la casa (con dulce de leche natural y merengues) y la chocotorta Occo (base de dulce de leche y queso crema con dulce de leche natural y baño de Chocolinas).
            Pero no: es una heladería hecha y derecha, y ahí están los helados para probarlo. Cuando el joven chef Franco Savino (28) inauguró Occo, se aseguró de tener los sabores que a todos les gustan, pero además otros que sólo se pudieran degustar allí. Así nacieron los sabores “genuinos”, como el chocolate picante con una mezcla de pimienta rosa, ají jalapeño, cardamomo, canela y gajos de pimienta en almíbar. “Una adaptación del chocolate con peperocino italiano”, aclara Savino.

            Otros gustos particulares son el cheese limón, que recuerda a las tradicionales galletitas de limón rellenas; coco y manzanilla, cuya idea nació en la ducha, a partir de los componentes de un champú; o coco y banana, un mix creado para buscarle destino a un pedido excesivo de plátanos. Estas elaboraciones pueden imaginarse como si se tratara de creaciones de pastelería. “O como si fueran platos salados”, dice el chef. Así es que surgieron el chocolate que pica y también el de Castilla, un chocolate blanco con nueces, castañas de cajú y una pizca de azafrán.</p>



            <div className='contenedor'>
                <div>
                    <img src={Chocolate} alt="helados" className="imagen-helados" />

                </div>
                <div>
                    <img src={Portada} alt="helados" className="imagen-helados" />

                </div>
                <div>
                    <img src={Cliente} alt="helados" className="imagen-helados" />
                </div>
            </div>






            <div className='Formulario'onSubmit={Registro}>
                <h3>Registrate para recibir ofertas exclusivas:</h3>
                <Form>
                    <div className='container d-flex justify-content-center'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Pepe" required value={nombre}
                                onChange={RegistroNombre} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </div>

                    <div className='container d-flex justify-content-center'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </div>



                    <Button variant="secondary" type="submit" className='text-warning'>
                        Cargar
                    </Button>
                </Form>

            </div>

        </>
    );
}
/*use un formulario de boostrap y edite su configuracio cambiandole a class container,
 d-flex justify-content-center para centrar el contenido */

export default Home;