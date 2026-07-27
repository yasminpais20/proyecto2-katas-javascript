/*Ejercicio 9
Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.
Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.

Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.
Documentación: https://pokeapi.co/
URL: https://pokeapi.co/api/v2/pokemon/1
Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites */

const elementoImagenAleatoria = document.querySelector('.random-image');/* creamos un variable donde meter las imagenes de los pokemons(será la hoja en blanco)*/

//creamos una función auxiliar para que nos de un número entre 1 y 151 

const conseguirIdAleatorio = () => {
   
   return Math.floor(Math.random() * 151) + 1; /*math.random saca un número con decimales entre 0 y 0.99
    lo multiplicamos por 151 y math.floor() le corta los decimales le sumamos + 1 para que el 0 sea un 1, y el 150 sea 151*/
};

//ahora la función asincrona

const invocarPokemonAleatorio = async () => {
    try {
       
        const idAleatorio = conseguirIdAleatorio();/* lo metemos en una variable por si se rompe por aqui para acotar mejor, pero se podría enchufar directamente pero no sabriamos que numero al azar nos generó el fallo*/

        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`);/* usamos las comillas francesas para poder inyectar la varaible que nos de nuestro generador de numeros aleatorios*/
        const pokemon = await respuesta.json();
    
        const fotoElegida = pokemon.sprites.other['official-artwork'].front_default;/* he pillado la de mayor calidad entre las qque habia 'official-artwork', ojo con meterlo entre corchetes o entiende que estas restando, estan tan bien hechas que ya salen todas con buena calidad y del mismo tamaño por lo cual no hace falta modificar los formatos porque ya salen bien */

        // la asignamos a nuestra imagen en el HTML
       elementoImagenAleatoria.src = fotoElegida;

    } catch (error) {
        console.log("¡El Team Rocket ha robado nuestro envío!", error);
    }
};

//apretamos el botón de inicio al cargar la página
invocarPokemonAleatorio();