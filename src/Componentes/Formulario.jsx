
import "../CSS/Formulario.css"

import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';






function Formulario() {


    const [nombre, setNombre] = useState('');
    const [helado, setHelado] = useState('');


    
    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleHeladoChange = (event) => {
        setHelado(event.target.value);
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();

        // Guardar los valores en LocalStorage
        localStorage.setItem('nombreUsuario', nombre);
        localStorage.setItem('saborHelado', helado);

        Swal.fire(
        "Formulario enviado"
    )

    }



    return (
        <>

            <h3>Sugerencias-Dudas-Reclamos</h3>
            <form action="/datos" method="post" id="formulario"className="padre" onSubmit={handleSubmit}>
                <div className="contenedor-2">
                    <label htmlFor="nombre">Nombre </label>
                    <input type="text" name="nombre" id="nombre" placeholder="Pedro" required  onChange={handleNombreChange} />
                </div>

                <div className="contenedor-2">
                    <label htmlFor="apellido">Apellido </label>
                    <input type="text" name="apellido" minLength="4" maxLength="10"placeholder="Sanchez" required />
                </div>

                <div className="contenedor-2">
                    <label htmlFor="email">Email </label>
                    <input type="email" name="email" id="email" placeholder="Pepe@gmail.com"  pattern="[^\s@]+@[^\s@]+\.[^\s@]+" required />
                </div>

                <div className="contenedor-2">
                    <label htmlFor="fecha">Fecha de nacimiento </label>
                    <input type="date" name="fecha" id="fecha" min="1990-01-01" max="2000-01-01" required />
                </div>

                <div className="contenedor-2">
                    <label htmlFor="provincia">Provincia </label>
                    <select name="provincia" id="provincia" required>
                        <optgroup>
                            <option value="CABA">CABA</option>
                            <option value="Buenos Aires">Buenos Aires</option>
                            <option value="Resto de provincias">Resto de provincias</option>
                        </optgroup>
                    </select>
                </div>

                <div className="contenedor-2">
                    <label htmlFor="helado">Sabor de helado favorito</label>
                    <select name="helado" id="helado" required  onChange={handleHeladoChange}>
                        <optgroup>
                            <option value="vainilla">Vainilla</option>              
                            <option value="chocolate">Chocolate</option>  
                            <option value="fresa">Fresa</option>  
                            <option value="menta">Menta</option>  
                            <option value="caramelo">Caramelo</option>  
                            <option value="cafe">Café</option>  
                            <option value="mango">Mango</option>  
                            <option value="coco">Coco</option>  
                            <option value="limón">Limón</option>  
                            <option value="Nuez">Nuez</option>  
                            <option value="Americana">Americana</option>  
                            <option value="Tiramisu">Tiramisu</option>   
                            <option value="pistacho">Pistacho</option>  
                            <option value="Avellana">Avellana</option>  
                            <option value="Piña">Piña</option>  
                            <option value="Banana">Banana</option>  
                            <option value="Maracuya">Maracuya</option>  
                            <option value="Arandano">Arandano</option>  
                            <option value="Melocoton">Melocoton</option>  
                            <option value="Frutilla">Frutilla</option>  
                        
                        </optgroup>
                    </select>
                </div>
                            

                <div className="contenedor-2">
                    <label htmlFor="comentario">Comentario</label>
                    <textarea name="comentario" id="comentario" cols="30" rows="10" placeholder="Escriba aquí su comentario..." />
                </div>
                            
                        
                <Button variant="secondary" type="submit" className='text-warning mt-3'>
                Enviar
                </Button>




                
            
            
            
            
            
            
            
            
            
            </form>


            {/* <h2>FORMULARIOS</h2>
            <form action="/datos" method="post" id="formulario">
            <div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" placeholder="NOMBRE POR FAVOR" required />
                </div>

                

                <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" minLength="4" maxLength="10" />
                </div>




                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" autoFocus pattern="[^\s@]+@[^\s@]+\.[^\s@]+" required />
                </div>

                

                <div className="form-group">
                    <label htmlFor="edad">EDAD</label>
                    <input type="number" name="edad" id="edad" min="18" max="70" />
                </div>
                

                <div className="form-group">
                    <label htmlFor="fecha">Fecha</label>
                    <input type="date" name="fecha" id="fecha" min="1990-01-01" max="2000-01-01" />
                </div>
                

                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" pattern="(?=.*[A-Z])(?=.*\d).+" required />
                </div>
                

                <div className="form-group">
                    <label htmlFor="password">Repita contraseña</label>
                    <input type="password" name="repitaPassword" id="repitaPassword" pattern="(?=.*[A-Z])(?=.*\d).+" required />
                </div>
            

                <div className="form-group">
                    <label htmlFor="provincia">Provincia</label>
                    <select name="provincia" id="provincia">
                        <optgroup>
                            <option value="CABA">CABA</option>
                            <option value="Buenos Aires">Buenos Aires</option>
                            <option value="Resto de provincias">Resto de provincias</option>
                        </optgroup>
                    </select>
                </div>
                

                <div className="form-group">
                    <label htmlFor="genero">Género</label>
                    <div>
                        <input type="radio" name="genero" id="femenino" value="femenino" />FEMENINO
                        <input type="radio" name="genero" id="masculino" value="masculino" />MASCULINO
                        <input type="radio" name="genero" id="otro" value="otro" />OTRO
                    </div>
                </div>

            

                <div className="form-group">
                    <label htmlFor="acepto">Acepto los términos y condiciones del envío</label>
                    <input type="checkbox" name="acepto" id="acepto" value="acepto" />
                </div>
                <br />
                <textarea name="comentario" id="comentario" cols="30" rows="10" />
                <div>
                    <input type="reset" value="Borrar datos" />
                </div>
                <div>
                    <input type="submit" value="Enviar Datos" />
                </div>
            </div>
            </form>
            
        */}
            {/* <div>
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <input type="submit" value="Submit">
  </form>
</div>  
             */}




        </>
    );
}

export default Formulario;
