//Ejercicio 1


/*1.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado,no hace falta hacer destructuring del array, solo del objeto.*/

const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

//1.1

const {title, gender, year} = game; /* para desestructurar un objeto, usamos llaves{} a la izquieda del igual, dentro de las llaves ponemos los nombres de las propiedades que queremos sacar y la derecha del igual ponemos el nombre del objeto original ( en este caso game, así nos busca dentro de game una variable que se llame title y crea una variable suelta con su valor, luego hace lo mismo con las demás*/ 

console.log(title); /* nos imprime The Last of Us 2 */
console.log(year);/* nos imprime 2020 */


/*1.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.*/

const fruits = ['Banana', 'Strawberry', 'Orange'];

//1.2

const [fruit1, fruit2, fruit3] = fruits; /* para desestructurar un array usamos corchetes a la izquiera del igual = , a diferencia de los objetos no importa el nombre exacto de la clave, solo nos importa el orden, tal como lo hemos puesto asignará a la primera variable (fruit1) a la posicion 0 'Banana'; asignará a la segunda variable (fruit2) a la posicion 1 'Strawberry'; asignará a la tercera variable (fruit3) a la posicion 2 'Orange' además le podemos poner el nombre de las variables que queramos */

console.log(fruit1);/* nos imprime Banana*/
console.log(fruit2);/* nos imprime  Strawberry*/
console.log(fruit3);/* nos imprime Orange*/

/*1.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};

//1.3

/* Nos dan una función que cuando la llamamos nos devuelve un objeto nostros queremos desestructurar ese objeto directamente*/

const {name, race} = animalFunction();/* Como ya sabemos lo quie nos devuelve (objeto) podemos poner directamente las llaves a la izquiera y ya tendriamos las dos variables que nos pide el enunciado*/

console.log(name);/* nos imprime Bengal Tiger*/
console.log(race);/* nos imprime Tiger*/


/*1.4 En base al siguiente javascript, usa destructuring para crear las
variables name y itv con sus respectivos valores. Posteriormente crea
3 variables usando igualmente el destructuring para cada uno de los años
y comprueba que todo esta bien imprimiendolo.*/

const car = {name2: 'Mazda 6', itv: [2015, 2011, 2020] } /* le puse name2 porque si no choca con el del ejercicio previo*/

const {name2, itv} = car; /* aqui sacamos las propiedades del objeto*/

const [year1, year2, year3] = itv; /* sacamos valores del array*/

console.log(name2);/* nos da Mazda 6*/
console.log(year1);/* nos da 2015*/
console.log(year2);/* nos da 2011*/
console.log(year3);/* nos da 2020*/



