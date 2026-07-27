/*2.1 Inserta dinamicamente en un html un div vacio con javascript.*/

//2.1

const divVacio = document.createElement("div"); /* con esto creamos una etiqueta div y la guardamos en memoria, aqui el div existe en un limbo, si consultamos en la web todavía no está ahi*/

document.body.appendChild(divVacio); /* para sacarlo de este limbo y no salga en pantalla usamos el appendChild(), al poner document.body.appendChild estamos cogiendo ese div que hemos creado en el paso anterior y lanzandolo al final de la etiqueta body del html, seria litealmente append: añadir al final child: hijo, con esto le añadiriamos un hijo al final */

/* podemos ver el div vacio inspeccionando el codigo*/

/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/

//2.2

const divConP = document.createElement("div");

const dentroP = document.createElement("p"); /* primero creamos los dos elementos por separado (div y p) y los metemos en  las constantes divConP dentroP */

divConP.appendChild(dentroP); /* con esto las ensamblamos en memoria (limbo) cogemos la etiqueta p (dentroP) y la metemos dentro del div (divConP) */

document.body.appendChild(divConP); /* Una vez hacemos el paso anterior con esto mandamos todo al html con el appendchild */

/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un  loop con javascript. */
//2.3

const divCon6P = document.createElement("div"); /* primero creamos el div y lo metemos en una constante, todo esto fuera del bucle*/

for (let i = 0; i < 6; i++) { /* dentro del bucle damos 6 vueltas*/
    const p = document.createElement("p"); /* en cada vuelta crearemos una p la meteremos en la constante que hemos creado divCon6P*/
    divCon6P.appendChild(p); /* metemos cada p al final del div con el appendchild*/
}

document.body.appendChild(divCon6P); /* finalmente le pasamos al navegador ya ensamblado la contante div (divCon6P) con sus seis p ya incluidas dentro de él */

/*2.4 Inserta dinamicamente con javascript en un html una p con el  texto 'Soy dinámico!'*/

//2.4

const pDinamico = document.createElement("p"); /* creamos un parrafo y lo metemos en la constante pDinamico, ahora mismo estaría en el limbo (memoria da javascrip), no lo podriamos ver todavía en el html(pantalla)*/ 

pDinamico.innerHTML = "Soy dinámico!"; /*dentro del parrafo con esto escribimos dentro del mismo soy dinamico, sigue en la memoria y todavía no se ve en el html, la propiedad .innerHTML nos permite inyectar texto o incluso mas html dentro de la etiqueta que acabamos de crear en memoria*/

document.body.append(pDinamico); /* con esto ya mandammos nuestra const pdinamico que es un p que contiene el texto "Soy dinámico!" a  nuestro html y con el .body nos la manda al final del body, solo después de esto lo podemos ver en pantalla */

/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/

//2.5

const h2InsertHere = document.querySelector("h2.fn-insert-here");/* aqui no usamos createElement porque el h2 ya existe en el html original, con lo cual primero lo buscamos con el querySelector( le metemos el punto. porque estamos buscando una clase) y una vez lo hemos localizado, le metemos el texto que queremos con el .innerHTML.*/

h2InsertHere.innerHTML = 'Wubba Lubba dub dub';

/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.*/
//2.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];// enunciado

const ul = document.createElement("ul"); /*creamos una lista desordenada ul, y la metemos en una constante)*/

for (const app of apps) { /*recorremos el array apps con un for of porque es mas facil y en este caso el indice nos da igual, solo queremos recorrerlo entero*/
    const li = document.createElement("li"); /* por cada palabra del array(cada vuelta) creamos un li*/
    li.innerHTML = app; /* con esto a cada li qeu creamos en cada vuelta le metemos la equivalencia a la app que estamos recorriendo en esa vuelta, por ejemplo, en la primera vuelta tendriamos li = 'Facebook' y conforme avanzamos las vueltas irian las siguientes*, pero de momento solo tenemos el <li>Facebook<li> en memoria, no se ve*/

    ul.appendChild(li); /* ahora cogemos el ul que es el contenedor de la lista que creamos fuera y con el apendChild le metemos todos los li que hemos ido creando en el bucle que metimos en la constante li que es la que metemos */
}
 document.body.appendChild(ul);/* Con esto lo pasamos al html*/


 /*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/

//2.7

const eliminarUnosNodos = document.querySelectorAll(".fn-remove-me"); /* primero buscamos todos los nodos de la clase indicada con el querySelectorAll, como nos va a devolver un Nodelist te tendremos que usar un bucle para recorrerlo*/

for (const nodo of eliminarUnosNodos){ /* usamos el for of ya que solo queremos recorrer la const eliminarUnosNodos*/
    nodo.remove(); /* y con el remove ( sirve para eliminar una clase del elemento) iremos destruyendo los elementos de eliminarUnosNodos conforme los vaya recorriendo nuestro bucle*/

}

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.*/

//2.8
/* ojo en este no podemos usar .appendChild ya que así el elemento se nos iría justo al final del todo, pero el enunciado nos pide ponerlo en medio*/

const divEnMedioDeLaMeseta = document.querySelector("div") /* Con esto localizamos el primer div y los guardamos en una variable, ojo solo guardamos el primero, del segundo pasa olimpicamente( no llega cuando ve el primero lo guarda en una variable y para )*/

divEnMedioDeLaMeseta.insertAdjacentHTML("afterend","<p>Voy en medio!</p>");
/*.insertAdjacentHTML nos permite inyectar codigo html en un lugar exacto sin modificar nada del alrededor, entre los parentesis debemos poner dos cosas, en primer lugar donde queremos ponerlo exactamente, en este caso pondremos afterend que nos lo pone despues de acabar, como justo los dos div estan seguidos en el html y hemos metido el primero en una constante así nos lo pondra justo al terminar el primero, quedando en medio de los dos div; en segundo lugar tendremos que ponerle el texto de html con lo que queremos poner tal y como seria en el html rodeado de comillas*/

/* con el afterend lo ponemos justo después del cierre de la etiqueta, se convierte en su hermano pequeño*/

/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
 .fn-insert-here */

 //2.9

 const insertarDivAqui = document.querySelectorAll("div.fn-insert-here");/* con esto buscaremos todos los div con la clase fn-insert-here y los metemos en una variable, como nos devolverá un nodelist necesitaremos un bucle para recorrerlo*/

 for (const div of insertarDivAqui){
    div.innerHTML = "<p>Voy dentro</p>"; /* con esto en cada vuelta irá insertando el párrafo con el contenido que queremos en todos los div con el bucle*/
 }