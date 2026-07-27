const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// seleccionamos  el contenedor principal
const container = document.getElementById("album-container");

// creamos el elemento ul
const ul = document.createElement("ul");
ul.classList.add("album-list");

// recorremos el array para crear los li
for (const album of albums) {
    const li = document.createElement("li");
    
    li.classList.add("album-item");
    li.textContent = album; 
    
    ul.appendChild(li);
}

// metemos la lista completa en el DOM
container.appendChild(ul);