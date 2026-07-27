/*4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click */

//4.1

const btn = document.getElementById("btnToClick");/* con esto buscamos todos los elementos con el id "btnToClick" y guardaremos este boton en una variable llamada btn( ahora mismo la tenemos en memoria)*/

btn.addEventListener("click", function(event){
    
    console.log("información del evento del click:", event);

});

/*metemos un evento click que al pulsar el botón nos ejecute un console.log con la información del evento, ojo aqui no imprimimos aun nada en la pantalla, imprimirá los mensajes en la consola*/


/*4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/
//4.2

const inputFocus = document.querySelector(".focus"); /* buscamos todos los elementos de la clase focus y lo metemos en una variable*/

inputFocus.addEventListener("focus", function(event) { /* metemos en la variable que creamos un evento para escuchar y el focus(enfocar) que se disparara en el momento que pichemos en la caja de texto y parpadeará el cursor para que escribamos*/

  console.log("Has hecho focus. El valor es :", event.target.value); /* aqui hacemos que del evento que acaba de ocurrir busque que elemento ha sido el destinatario y nos diga que texto tiene escrito en ese momento, even.target es el elemento que disparó el evento y el .value es el contenido actual del input */

  /* el focus se dispara una sola vez, cuando hacemos click */

});

/*4.3 Añade un evento 'input' que ejecute un console.log con el valor del input*/
//4.3

const inputValue = document.querySelector(".value");

inputValue.addEventListener("input", function(event) { /* el evento input se dispara cada vez que el contenido cambia*/
    
    console.log("has escrito:", event.target.value);/* aqui nos dice el contenido al momento*/
});