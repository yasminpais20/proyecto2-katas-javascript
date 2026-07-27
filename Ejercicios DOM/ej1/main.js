/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/

// document.querySelector(".someclass");  Devuelve el primer elemento que cumpla la selección (notación como css)
//document.querySelectorAll("div.note");
//document.querySelectorAll("div.note,div.alert"); Devuelve una lista de elementos que cumplan con la selección

//1.1

const btnShowMe= document.querySelector(".showme"); /* Con esto le estamos diciendo que busque el primer elemento que tenga la clase showme, como en css para buscar una clase le ponemos un punto "." si no pusiesemos el punto se volvería loco buscando una etiqueta que no existe en nuestro documento llamada <showme>  */
/* También creamos una constante (btnShowme) para poder guardar el resultado de esta búsqueda, la búsqueda en si podemos hacerla sin crear esta constante, si lo unico que queremos hacer es la busqueda lo meteriamos directamente dentro del console.log y listo, pero de esta manera el navegador nos buscaría el botón lo imprimiria por consola y se olvidaría de él, si luego quisieramos manipular algo del botón tendriamos que buscarlo de nuevo; así guardandolo en una constante el navegador nos lo buscaría una sola vez y ya lo tendríamos metido en esa variable para gestionarlo como quisieramos ( cambiarle colores, hacerlo más grande...)*/

console.log(btnShowMe); // Esta línea es simplemente para que nos lo muestre por consola

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

const h1Pillado = document.querySelector("#pillado") /*Con esto nos busca el elemento exacto que tenga el id pillado, se busca igual que en css con la #almohadilla para los ids, como los id se supone que son únicos con el querySelector normaal nos tendría que valer */

console.log(h1Pillado);// Esta línea es simplemente para que nos lo muestre por consola

/*1.3 Usa querySelector para mostrar por consola todos los p*/

const todoslosParrafos = document.querySelectorAll("p"); /*Con esto le pedimos que nos muestre todas las etiquetas <p> que tengamos en la página, ojo si usasemos querySelector a secas solo nos muestra la primera p, tenemos que usar queryselectorAll, como buscamos una etiqueta de html sin mas(un tag) lo escribimos tal cual sin puntos ni almohadillas*/

/*esta nos devuelve un nodelist con los p, un nodelist es una lista de nodos, en el DOM(memoria del navegador), cada etiqueta del html se llama nodo, cuando  usamos en el buscador document.querySelectorAll("p"), el navegador va al html recoje todos los parrafos que encuentra y nos lo mete en una caja, esta caja específica del navegador se llama Nodelist, es una coleccion de elementos de html agrupados.

Ojo que un nodelist y un array no son lo mismo, si que ambos tiene orden y posiciones, ambos guardan cosas en lista y empiezan a contar desde cero; tiene longitud, em ambos podemos usar la propiedad .length para saber los elementos que tenemos dentro; ambos se pueden recorrer por bucles y el metodo forEach; pero un array es una estructura de datos nativa de javascrip y un nodelist es solo una herramienta basica que te presta el navegador, su principal diferencia a nivel operativo es que a un array le podemos aplicar métodos  (push, filter...), mientras que un nodelist es de solo lectura, con lo cual no podríamos usar en él estos métodos directamente(solo el For each)*/

console.log(todoslosParrafos);// Esta línea es simplemente para que nos lo muestre por consola

/* nos devuelve NodeList(4) [p, p, p, p] */

/*1.4 Usa querySelector para mostrar por consola todos los elementos con  la clase.pokemon */

const todosLosPokemons = document.querySelectorAll(".pokemon"); /*aqui le pedimos que nos metan en una lista todos los elementos que tengan la clase pokemon, nos devolverá un nodelist y usamos otra vez el . porque es una clase*/

console.log(todosLosPokemons);

/* nos devuelve NodeList(4) [h4.pokemon, h4.pokemon, h4.pokemon, h4.pokemon]*/

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".*/

const todosLosTestMe = document.querySelectorAll('[data-function="testMe"]'); /* así nos busca todos las etiquetas qye tengan el atributo que se ha creado en el html (data-function), como estamos buscando por atributo, tenemos que rodear el atributo entre corchetes [] para buscarlo, además hemos tenido que usar comillas simples para en volverlo('') ya que el valor de dentro usa las comillas dobles("") ya que si usamos dobles para todo el codigo peta */

console.log(todosLosTestMe);

/* nos devolverá  NodeList(4) [span, span, span, span], seria el equivalente de decir que el navegador nos ha encontrado 4 etiquetas span y las ha guardado en esa lista, esa lista está plegada ojo si desplegamos en el navegador podemos ver los detalles */

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".*/

const tercerTestme = document.querySelectorAll('[data-function="testMe"]')[2] ; /* aquí en primer lugar nos crea un nodelist con los 4 personajes, batman, robin, rick y morty, luego le decimos con la orden entre corchetes que se quede con la posicion [2] (los nodelist como los array empiezan por la posición 0, así que si queremos la tercera tendremos que restarle uno)*/

console.log(tercerTestme); // nos imprime a rick