
/*3.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.*/

const paises = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

//3.1

const ulPaises = document.createElement("ul"); /*primero creamos la lista ul y la metemos en una variable ( esta vacia en este momento)*/

for (const pais of paises){
    const li = document.createElement("li"); /*conforme recorremos el array vamos creando un li por cada pais y despues rellenadolo con el pais que estamos recorriendo en ese momento en el bucle*/ 
    li.innerHTML = pais;
    ulPaises.appendChild(li) /* metemos con esto ese listado de li con cada pais en el ul, pero en este momento sigue en memoria y aún no lo podriamos ver por pantalla*/
}

document.body.appendChild(ulPaises); /* con esto metemos el ul con todos los li al final del body*/

/*3.2 Elimina el elemento que tenga la clase .fn-remove-me.*/

const elementoParaCargarnos = document.querySelector(".fn-remove-me");/* como solo hay un elemento usamos el querySelector a secas, con esto cogemos al elemento de esa clase*/

elementoParaCargarnos.remove(); /* y con el remove nos lo cargamos*/

/*3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".*/
const coches = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

//3.3

const imprimeAquiUnDiv = document.querySelector('[data-function="printHere"]');/* como buscamos un atributo personalizado va entre corchetes*/
const ulCoches = document.createElement("ul")/* mismo procedimiento al 1.1*/

for (const coche of coches){ 
    const li = document.createElement("li");
    li.innerHTML = coche 
    ulCoches.appendChild(li);
}

imprimeAquiUnDiv.appendChild(ulCoches);/* en este caso en lugar de mandarlo al body lo ponemos en el div que cogimos con el querySelector del principio */

/*3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.*/
const countries = [
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; // aqui le dejo el countries que si no se me pisa el nombre con el del 1 y se monta un patatal*/

//3.4

for (const country of countries){ /* con un bucle recorremos el array*/
    const divc = document.createElement("div");/* creamos un div por pais*/
    divc.className = "countrydiv" /*Le ponemos de paso una clase a todos para agruparlos mas facil en el 1.5*/

    const h4 = document.createElement("h4");/* creamos también un h4 por pais */
    h4.innerHTML = country.title /* y le metemos el titulo del del objeto del array*/

    const img = document.createElement("img"); /* aqui creamos una etiqueta de html de imagen por cada pais, es como un marco vacio, ya que no tiene aun imagen puesta como tal */

    img.src = country.imgUrl /* en los casos anteriores para meter cosas en las etiquetas usabamos inneHTML pero las etiquetas de imagen no tienen etiqueta de cierre, como no se pueden abrir no podemos meter texto dentro.

    En html para que se vea una imagen le tenemos que meter el atributo src(source, origen), eso hacemos aqui cogemos el elemento img y le modificamos la propiedad src asi nos queda "img.src" y para meterle la imagen entramos en el array y luego dentro del objeto en imgUrl, por eso escribimos country.imgUrl
    */
    divc.appendChild(h4);/*aqui cogemos el h4 y lo metemos dentro del divc que creamos previamente y como usamos el appendChild el h4 se coloca en la primera posicion que tenemos disponible dentro dek divc, (que sigue en memoria, aun nos se ve en la web*/
    
    divc.appendChild(img); /* en este cogemos la imagen img y la metemos dentro del divc también, como appendChild siempre nos añade las cosas al final irá detras del h4 con lo cual se nos coloca la imagen debajo del título(sigue en memoria, aun no se ve)*/


    document.body.appendChild(divc); /* ahora cogemos el divc que ya tiene dentro el h4 y la img y lo colocamos al final del body de la página web, ahora si lo podriamos ver , así repite este proceso hasta que no queda ningun pais de la lista*/
    
} 

/*3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.*/

//3.5

const btQuitaElUltimo = document.createElement("button"); /* creamos un botón(creamos una etiqueta de html de tipo botón ) y lo guardamos en una variable, ahora mismo lo tenemos en memoria, no se puede ver*/

btQuitaElUltimo.innerHTML = "Eliminar el último elemento"; /* le ponemos el texto al boton, pero sigue en memoria*/

document.body.appendChild(btQuitaElUltimo); /* con esto colocamos en botón el la página con su mensaje(le indicamos que nos lo ponga al final del body), pero solo es eso un botón sin función, tiene el texto, lo podemos pulsar pero no hace nada*/

//Ahora le metemos la función al boton

btQuitaElUltimo.addEventListener("click", function() {
   const todosLosDivs = document.querySelectorAll(".countrydiv"); /* apartado anterior le metimos esta clase a todos los divs que ibamos creando para localizarlos, nos devolverá un nodelist con todos, con esta linea buscamos todos los div y los metemos en una variable  */
   if (todosLosDivs.length > 0) { /* ponemos este condicional para que no nos salte error si ya nno hay divs, si te pones a pulsar de manera repetitiva el boton al final te qeudas sin div y el codigo si no petaría*/
    todosLosDivs[todosLosDivs.length - 1].remove(); /* como nos devuelve un nodelit con esto vamos a la ultima posición de este y lo borramos*/
   }

});

/*3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html*/

/* los div ya los cree en el apartado 4 y les metí una clase para que se encontrasen más facilmente, ahora aprovechamos eso*/

const divsParaElBoton = document.querySelectorAll(".countrydiv") /* con la clase que previamente le habiamos colocado con querySelectorAll buscamos todos los divs y los metemos en una variable */

/* esto nos devolverá una nodelist y para recorrerla tendremos que recurrir a un bucle*/

for (const divBoton of divsParaElBoton){ /* con este bucle recorremos todos los div que hay en el navegador*/
   
    const BtParaBorrar = document.createElement("button");/* creamos un boton para cada div concreto*/

    BtParaBorrar.innerHTML = "Borrar este div"; /* le metemos el texto a cada botón*/

    BtParaBorrar.addEventListener("click",function() {/* con esto le metemos una escucha a cada boton que creamos para que al pulsarlo destruya ese div al que está vinculado*/

        divBoton.remove();/* aqui le metemos las instrucciones que se ejecutan si pulsamos el boton*/

    });

    divBoton.appendChild(BtParaBorrar);/* con esto coge el boton y nos lo mete en el div y lo manda al navegador*/
}