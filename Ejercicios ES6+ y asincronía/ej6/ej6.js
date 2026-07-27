/*Ejercicio 6

6.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
los alumnos usando la función .reduce().*/

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

/* .reduce(): Aplica  una función a un acumulador y a cada elemento(de izquierda a derecha ) para reducirlo a un solo valor.

let suma = array.reduce((acumulador,elemento)=> acumulador+  elemento,0)

acumulador(acc): es como la hucha, aqui se va guardando el total
elemento: el objeto que esta pasando en ese momento
no nos devuelve un array nuevo, si no que coge los elementos de tu array va sumandolos o juntandolosny devuelve un unico valor final*/

//6.1

const sumaTotal = exams.reduce((acc,exam) => acc +exam.score, 0) /* aqui le estamos diciendo suma lo que ya tenias en el acumulador(acc) con la nota del examen actual(exam.score), además antes de cerrar el paréntesis ponemos un 0 para decirle que ese es el valor que debe tomar el acumulador al principio, si no ponemos esto nuestro codigo puede petar al intentarsumar un número con un objeto*/ 

console.log("La suma total de las notas es:", sumaTotal); /* nos imprime La suma total de las notas es: 52 ok*/ 

/*6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
alumnos que esten aprobados usando la función .reduce().*/

//6.2

const sumaAprobados = exams.reduce((acc,exam) => {/*como vamos a meter un condicional le metemos llaves al reduce*/
   if (exam.score >= 5) {
    return acc + exam.score;/* si la nota es mayor de 5 le devolvemos el valor del acumulador más la nota del examen que estamos recorriendo( que estará aprobado, así vamos sumando los aprobados)*/
   }else{
      return acc;/*si no está aprobado devolvemos el acumulador tal como está con las notas de los aprobados que tenemos acumulados hasta ese momento pero sin la del examen actual, ya que no está aprobado, ojo con este return ya que si no lo ponemosnel acumulador pasa a ser undefinded y nos rompe toda la suma*/
   }

},0);

console.log("La suma total de las notas de solo los aprobados es:", sumaAprobados); /* nos imprime La suma total de las notas de solo los aprobados es: 42 ok*/ 

/*6.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().*/

const mediaNotas = exams.reduce((acc,exam) => acc + exam.score,0) /exams.length; /*usamos el reduce para sumar todas las notas y dividimos lo que nos da entre la longitud del array, suma total/suma de numero de elementos,aplicando la definición de media*/      

console.log("La media  total de las notas de todos los alumnos  es:", mediaNotas);/* nos da:La media  total de las notas de todos los alumnos  es: 5.2 todo ok */