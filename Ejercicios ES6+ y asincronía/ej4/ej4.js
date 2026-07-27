/*Ejercicio 4

4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

//4.1

const adultos = ages.filter(age => age > 18 );

console.log(`Los mayores de 18 son: ${adultos}`); /* este devuelve :Los mayores de 18 son: 22,24,55,65,21,90 esta ok , pero queda mejor de la otra manera*/

console.log('Los mayores de 18 son:', adultos);/*esta manera mejor, nos da Los mayores de 18 son: [ 22, 24, 55, 65, 21, 90 ]*/


/*4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.*/
const edades = [22, 14, 24, 55, 65, 21, 12, 13, 90];

//4.2

const pares = edades.filter(edad => edad % 2===0); /* % nos da el resto de la división, si dividimos entre dos y es par logicamente nos dará, lo metemos de condición el el fiter y nos devolverá los pares */

console.log('Los números  pares son:', pares);/* nos devolverá Los números  pares son: [ 22, 14, 24, 12, 90 ] todo ok */

/*4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const streamers = [
 {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

//4.3

const streamersDelLol = streamers.filter(streamer => streamer.gameMorePlayed ==='League of Legends');

console.log('Los streamers que juegan más al lol:', streamersDelLol); /* nos devuelve Los streamers que juegan más al lol: [
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' } todo ok */

  /* si queremos que solo nos devuelva los nombres lo concatenamos con map, ya que filter solo nos devuelve los objetos enteros originales */

  const lolNombres = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends') /* primero ejecutamos el filter, esto genera un array invisible en la memoria con dos dos objetos enteros de ibai y reven*/
    .map(streamer => streamer.name); /* este array invisible con dos dos objetos se lo pasamos al map qeu saca la propiedad de name de ibai y reven y genera el array final solo con sus nombres */

    console.log('Los streamers que juegan más al lol:',lolNombres);/* asi nos devolvería solo :Los streamers que juegan más al lol: [ 'Ibai', 'Reven' ] también ok */



/*4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.*/
const streamers2 = [
 {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

//4.4

/* el método includes() se lo podemos aplicar a cualquier texto(string) o array, nos da true si encuentra lo que estamos buscando y false en caso contrario*/

const streamersConU = streamers2.filter(streamer => streamer.name.includes('u'));

console.log('Los streamers que tiene la letra u en su nombre:', streamersConU);/* nos da :Los streamers que tiene la letra u en su nombre: [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
] todo ok */

const streamersConUNombres = streamers2
 .filter(streamer2 => streamer2.name.includes('u'))
 .map(streamer2 => streamer2.name); 

console.log('Los streamers que tiene la letra u en su nombre:', streamersConUNombres);/* nos da Los streamers que tiene la letra u en su nombre: [ 'Rubius', 'AuronPlay' ] todo ok */

/*4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.*/

//4.5 

const streamersDelLolAñejosMayus = streamers2.filter(streamer => {
      //Juega al League of Legends (incluye 'Legends)?
      if (streamer.gameMorePlayed.includes('Legends')) {
        
        //y además es mayor de 35
        if (streamer.age > 35){

            //ponemos el juego en  mayúsculas
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        }
          // devolvemos el array
          return true;

        
      }else{
        //si no incluye 'Legends' no entra
        return false
      }



});


console.log('Legendas loleras(con los mayores de 35 con el juego en mayúsculas):', streamersDelLolAñejosMayus); 

/* nos da:Legendas loleras(con los mayores de 35 con el juego en mayúsculas): [
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'LEAGUE OF LEGENDS' }
]todo ok */