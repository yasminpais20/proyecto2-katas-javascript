/*Ejercicio 2

2.1 Dado el siguiente array, crea una copia usando spread operators.*/
const pointsList = [32, 54, 21, 64, 75, 43];
//2.1
/* Si hiciesemos un cosnt copia = pointList no estaríamos haciendo una copia real, seria una especie de acceso directo(copiariamos el lugar en el que esta en memoria), si modificasemos uno se modificaria el otro*/

const pointsListCopia = [...pointsList]; /* Aqui creamos una nueva variable, colocamos los corchetes ya que es un array lo que queremos copiar y dentro de los corchetes colocaremos 3 puntos seguidos del nombre del array original que queremos copiar , con esto cogerá los tres números, los sacará del array original y los pondrá en el nuevo (los copia)*/

console.log(pointsListCopia); /* nos da [ 32, 54, 21, 64, 75, 43 ] todo ok */


/*2.2 Dado el siguiente objeto, crea una copia usando spread operators.*/
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

//2.2

const toyCopia = {...toy}/* hacemos igual que en el array pero con llaves{}, porquue es un objeto*/

console.log(toyCopia);/* nos da { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' } todo ok */

/*2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
spread operatos.*/
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54,87,99,65,32];

//2.3

const ListasFusionadas =[...pointsList2, ...pointsList3];/* igual que en en anterior, pero como son dos volcamos el primero,ponemos coma espacio y volcamos el segundo*/

console.log(ListasFusionadas); /* nos da [
  32, 54, 21, 64, 75,
  43, 54, 87, 99, 65,
  32
] todo ok */

/*2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
con spread operators.*/
const toy2= {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

//2.4

const juguetesFusionados = {...toy2, ...toyUpdate};/* el mismo que el anterior pero con corchetes{} porque soon objetos*/

console.log(juguetesFusionados);/* nos dará {
  name: 'Bus laiyiar',
  date: '20-30-1995',
  color: 'multicolor',
  lights: 'rgb',
  power: [ 'Volar like a dragon', 'MoonWalk' ]
} todo ok */

/*2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos.*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsSinAmarillo = [...colors.slice(0,2), ...colors.slice(3)]; /* creamos una nueva constante y usamos slice para cortar el array sin romper el original, cogemis del inicio a la pos 2 (sin incluir) y luego la pos3 al final*/

console.log(colorsSinAmarillo);/*nos da [ 'rojo', 'azul', 'verde', 'naranja' ] todo ok */

console.log(colors);/* y con esto miramos si no hemos tocado el array original [ 'rojo', 'azul', 'amarillo', 'verde', 'naranja' ] nos da, todo ok */