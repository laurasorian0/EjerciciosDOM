// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const myDiv = document.createElement("div")
document.body.appendChild(myDiv)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const myDiv2 = document.createElement("div")
const myP = document.createElement("p")
document.body.appendChild(myDiv2)
myDiv2.appendChild(myP)
// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.
const myDiv3 = document.createElement("div")
document.body.appendChild(myDiv3)
for (let index = 0; index < 6; index++) {
  const myNewP = document.createElement("p");
  myDiv3.appendChild(myNewP)
}

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
const myPtext = document.createElement("p")
document.body.appendChild(myPtext)
myPtext.innerHTML = "Soy dinámico!"

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
buscoH2 = document.querySelector(".fn-insert-here")
buscoH2.innerHTML = "Wubba Lubba dub dub"

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const myUl = document.createElement("ul")
document.body.appendChild(myUl)

for (let index = 0; index < apps.length; index++) {
  const element = apps[index];
  newLi = document.createElement("li")
  myUl.appendChild(newLi)
  newLi.innerHTML = element
}

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
proxEliminados = document.querySelectorAll(".fn-remove-me")
proxEliminados.forEach(nodo => {
  nodo.remove();
});

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const myPEnMedio = document.createElement("p");
myPEnMedio.innerHTML = "Voy en medio!";

seleccionDivs = document.querySelectorAll("div")
segundoDiv = seleccionDivs[1]

document.body.insertBefore(myPEnMedio, segundoDiv)


// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

const dondeInsertar = document.querySelectorAll("div.fn-insert-here")

for (let index = 0; index < dondeInsertar.length; index++) {
  const element = dondeInsertar[index];
  const myPDentro = document.createElement("p");
  myPDentro.innerHTML = "Voy dentro!"
  element.appendChild(myPDentro)
}

