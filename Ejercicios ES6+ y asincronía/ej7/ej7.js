/*Ejercicio 7

7.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
.filter() y usa .reduce() para conseguir la media de sus .score.
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
array .gender.*/

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]

//7.1

/*Para hacer la media no podemos concatenar sin más ya que para hacer la media necesitamos dividir la suma total entre los juegos rpg no entre todos los juegos, así guardaremos los juegos filtrados en una variable y luego usaremos el acumulador con esa variable*/

//Usando .find

const juegosRPG = videogames.filter(game => game.genders.find(gender=> gender ==='RPG')); /*aqui usamos .find() para buscar dentro del array genders, si encuentra RPG devuelve la palabra RPG si no devuelve undefinded*/

const mediaRPG = juegosRPG.reduce((acc, game) =>acc + game.score,0) /juegosRPG.length;/* ahora cogemos la nueva lista juegosRPG, sumamos las notas y lo dividimos todo entre la longitud de la nueva lista (juegosRPG.length)*/

console.log("La media de los juegos de RPG es:", mediaRPG);/*nos da La media de los juegos de RPG es: 7.875*/

//usando includes

const juegosRPG2 = videogames.filter(game => game.genders.includes('RPG'));/* aqui iriamos a la lista general de videogames, filtramos cada game entramis en los generos de cada uno (game.genders) y si la lista de generos incluye la palabra RPG lo guardamos en la nueva lista juegosRPG2*/

const mediaRPG2 = juegosRPG2.reduce((acc, game) => acc + game.score, 0) / juegosRPG2.length; /* El resto es igual*/

console.log("La media de los juegos de RPG es:", mediaRPG2);/*nos da La media de los juegos de RPG es: 7.875*/