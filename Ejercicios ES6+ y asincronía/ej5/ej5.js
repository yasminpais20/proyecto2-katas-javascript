/*Ejercicio 5

Dado el siguiente javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
const streamers = [
 {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

//5 

const inputElement = document.querySelector('[data-function="toFilterStreamers"]'); /* buscamos el atributo especifico data-function( como es uno inventado lo tenemos que meter entre corchetes y una vez lo localice lo metemos en una variable)*/
 
//le ponemos la orejilla
inputElement.addEventListener('input', (event) => { /* el input se dispara cada vez que se teclea o se borra una letra*/

    const textoEscrito = event.target.value.toLowerCase(); /* guardamos lo que se ha escrito y lo pasamos a minusculas para evitar lios */

    const streamersFiltrados =streamers.filter(streamer => {/* filtramos el array de streamers*/
        return streamer.name.toLocaleLowerCase().includes(textoEscrito);/* aqui cogemos el nombre del streamer, lo pasamos a minusculas y miramos si incluye el texto que se ha escrito*/


    });

    console.log(streamersFiltrados);

});