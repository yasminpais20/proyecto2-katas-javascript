/*Ejercicio 3

3.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map().*/
const users = [
 {id: 1, name: 'Abel'},
 {id:2, name: 'Julia'},
 {id:3, name: 'Pedro'},
 {id:4, name: 'Amanda'}
];
//3.1 
/*ojo map te devuelve siempre un array nuevo con exactamente la misma cantidad de elementos que el original,
map(): crea un nuevo array con los resultados de llamar a un función dada en cada elemento del array

let nuevoArray= array.map((elemento))=> elemento*2 */

const listaDeNombres = users.map(user => user.name) /* hacemos la llamada a users.map y dentro de los parentesis de esta creamos una función flecha, le decimos que por cada user que pase nos devuelva solamente el user.name*/

console.log(listaDeNombres); /* nos devuelve [ 'Abel', 'Julia', 'Pedro', 'Amanda' ] todo ok */

/*3.2 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
empiece por 'A'.*/
const usuarios = [
 {id: 1, name: 'Abel'},
 {id:2, name: 'Julia'},
 {id:3, name: 'Pedro'},
 {id:4, name: 'Amanda'}
];

//3.2

const listaAnacletica = usuarios.map(usuario => { /* le metemos llaves el map para poder introducir el condicional de que si empieza por A pase a ser Anacleto*/
    if (usuario.name.startsWith('A')) { /* usamos el metodo startsWith('A') para comprobar si el string empieza por esa letra, también lo podriamos mirar con user.name[0] ==='A'*/
        return 'Anacleto';
    
    } else {
        return usuario.name;/* si no empieza por a no transforma nada simplemente nos devuelve el nombre de usuario*/
    }

});

/* ojo porque si en el condicional ponemos un usuarios.name nos devolverá un undefinded,ya que en la funcion flecha con usuario estamos creano un bucle, asi le estariamos preguntando a usuarios su nombre me de manera literal, por lo cual nos daría undefinded, ojo con eso, usuarios es el array completo (nunca le puedes pedir la propiedad directa con el punto) y usuario es el objeto individual {} que le estamos pasando en ese momento*/

console.log(listaAnacletica);/* Nos devuelve [ 'Anacleto', 'Julia', 'Pedro', 'Anacleto' ] todo ok, cambió los nombres que empezaban por A por Anacleto*/




/*3.3 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y añade al valor de .name el string ' (Visitado)'
cuando el valor de la propiedad isVisited = true.*/
const cities = [
 {isVisited:true, name: 'Tokyo'},
 {isVisited:false, name: 'Madagascar'},
 {isVisited:true, name: 'Amsterdam'},
 {isVisited:false, name: 'Seul'}
];

//3.3 

const visitedCitiesList = cities.map(city =>{
    if (city.isVisited === true){
        return city.name + ' (Visitado)';/* la logica es el mismo que el anterior pero concatenamos visitado con comillas */
         
    }else{
        return city.name;
    }

});

console.log(visitedCitiesList);/* nos da [ 'Tokyo (Visitado)', 'Madagascar', 'Amsterdam (Visitado)', 'Seul' ] todo ok*/