/*Ejercicio 8
Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página*/

//8

/* En lugar de guardar solo el nombre en el select, vamos a guardarlo a la vista del usuario y la url de la imagen escondida en el value de cada option, de esta manera cuando cambiemos de desplegable ya tendremos la foto sin volver a buscar nada */

const elementoSeleccionado = document.querySelector('#character-list');/* con esto buscamos en nuestro hmtl el primer elemento con el id character-list y lo guardamos en una variable, usamos const porque seria un objeto y aunque modifiquemos el interior const nos vale en este casopp*/

const elementoImagen = document.querySelector('.character-image');/* con esto buscamos en nuestro hmtl el primer elemento con la clase character-image y lo guardamos en una variable*/

/*Cuando ejecutemos estas lineas ya tendremos nuestro desplegable(elementoSeleccionado) y nuestra imagen(elementoImagen )metidos en variable listos para ser modificados cuando lleguen los datos de internet*/

//Creamos la función asíncrona con 'async' avisamos de que dentro habrá tareas que van a tardar un rato(await)

const dameLosPersonajesDeJuegoDeTronos = async() => { /* aqui creamos una función flecha normal, pero le hemos puesto async (asincrona)justo antes del parentesis, son esto avisamos de que vam,os a pedir cosas que van a tardar un rato, se queda esperando por esas cosas y mientras deja la pagina funcionando, además sin este async no podremos usar await mas adelante*/

    try{/* con esto le decimos a nuestro código que intente hacer todo lo que pongamos entre los corchetes y que si hay algun fallo no nos explote la pagina sino que salta el catch y se ve el aviso de error*/

        //await, espera a que el servidor responda        
        const respuesta = await fetch('https://thronesapi.com/api/v2/Characters');/* el fetch actua como nuestro mensajero, va a la direccion que le hemos dado de la api que le hemos dado y pide los datos, con await le decimos a la función que espere( que pause ejecución de esta linea), hasta que le fecht vuelva con la información(respuesta del servidor) y finalmente metemos esta información en la variable respuesta */

        //await, espera a que los datos se traduzcan a json
        const personajes = await respuesta.json(); /* con .json traducimos lo que nos ha mandado el servidor y sacamos los datos traduciendolos a un array lleno de objetos con los que si podemos trabajar, con await le decimos que espere hasta que este proceso termine*/

       //ahora vamos a por el html
        personajes.forEach(personaje => { /*recorremos el array de personajes */
        
        //por cada personaje creamos una etiqueta option vacia
        const opcion = document.createElement('option');/*estamos dentro del bucle así que esto pasará para cada personaje, entraremos a document y le pediremos que fabrique un elemento de html nuevo de tipo option(este queda en memoria,aun no existe en pantalla)*/
        
        //le pondremos el texto que leera en usuario(nombre)
        opcion.textContent = personaje.fullName;/* es el texto visible, le metemos el nombre completo del personaje, es lo que se leerá en el desplegable*/

        // escondemos la url de su imagen en el value del opcion
        opcion.value = personaje.imageUrl; /* este .value es el valor interno de la etiqueta aqui le metemos el enlace de la foto el ususario no lo podra ver escrito pero javascript lo podrá usar en el option*/

        //enganchamos el option dentro del select
        
        elementoSeleccionado.appendChild(opcion);/* cogemos la variable que definimos al principio y con .appendChild le añadimos un hijo, este coge nuestro  <option>( que ya tiene texto y url)y lo engancha dentro del <select> del html real*/
        
     });

        // estado inicial 
         elementoImagen.src = personajes[0].imageUrl;/* para que no salga vacia al cargar le ponemos al principio la imagen del primer elemento de la lista*/
       } catch(error){// el bloque try/catch sirve por si hay algun problema no reviente toda la web y nos salte este mensaje de aviso

           console.log("Drogo se ha comido al personaje", error); /*este mensaje solo saldrá en la consola del navegador, es para nosotros*/

       }

};
   
//ejecutamos la función para que cargue la página

dameLosPersonajesDeJuegoDeTronos();

//ponemos la orejilla (escuchador de eventos) en el select, además el evento cambio saltará cada vez que el escojemos una opcion distinta

elementoSeleccionado.addEventListener('change', (event) => {/* esto solo se activa si se abre el desplegable y se hace click en un personaje diferente al seleecionado, change tiene que ir en inglés ya que los nombres de eventos nativos si no no los entiende, ojo*/

     elementoImagen.src = event.target.value; /* como habiamos guardado la url en el value al entrar en  event.target.value tenemos la url directa, solo le asignamos al src de la imagen */


});









