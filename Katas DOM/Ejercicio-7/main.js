// Utiliza el array para crear dinamicamente una lista 
// ul > li de elementos en el div de html con el 
// atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];


const printHereDiv = document.querySelector('[data-function="printHere"]');

const myUl = document.createElement("ul");


printHereDiv.appendChild(myUl);


for (const place of places) {
  const myLi = document.createElement("li");
  myLi.innerHTML = place;
  myUl.appendChild(myLi);
}