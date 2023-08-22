##E-commerce
Este sitio es un proyecto que intenta replicar la pagina de una heladeria.

##Tecnologias utilizadas
-JS
-React
-React-Botstrap
-Sweet Alerts


###Funcionamiento
Consta de 4 secciones en donde la barra de navegacion y el footer se mantienen:
-Home: en esta seccion en la parte final hay un formulario para registrarse para recibir ofertas. En el momento que se da cargar se activa un alert que usa e nombre que el usuario registro para dar la bienvenida.
-Productos: cree en un archivo llamado Data.js lo que simulan ser unas bases de datos con diferentes productos divididos en helados,chocolates y tortas. Cree arrays con imagen, nombre y precio de producto.Luego los importe y con "map"recorri los arrays para usar la imagen junto con sus datos. Luego use "useState" para controlar la visibilidad de los productos en la página. Cuando se hace clic en los botones 'mostrar', las funciones correspondientes (handleMostrarHelados, handleMostrarChocolates, handleMostrarTortas) actualizan las variables de estado(mostrarHelados, mostrarChocolates, mostrarTortas), lo que a su vez provoca que React vuelva a renderizar los componentes y muestre u oculte los productos según la categoría seleccionada.
-Formulario: en esta parte cree un formulario y nuevamente volvi a usar "useState" para crear dos varibles que almacenen nombre y helado favorito. Luego creee las funciones  "handleNombreChange" y "handleHeladoChange", para actualizar estas variables de estado cuando el usuario ingrese información en los campos correspondientes . Luego hice otra funcion que se llama "handleSubmit"que  se activa cuando el usuario envía el formulario. Dentro de esta función, los valores de nombre y helado se guardan en el Local Storage usando el método localStorage.setItem.