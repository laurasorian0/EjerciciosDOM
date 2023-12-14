// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const myUl = document.createElement("ul")

for (const country of countries) {
  const newLi = document.createElement("li")
  newLi.innerHTML = country;
  myUl.appendChild(newLi);
}
document.body.appendChild(myUl)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const proxEliminado = document.querySelectorAll(".fn-remove-me")
proxEliminado.forEach(nodo => {
  nodo.remove();
});
// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divAtributo = document.querySelector('[data-function="printHere"]');
const myUl2 = document.createElement("ul");

for (const car of cars) {
  const newLi2 = document.createElement("li");
  newLi2.innerHTML = car;
  myUl2.appendChild(newLi2);
}
divAtributo.appendChild(myUl2);


// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (const country2 of countries2) {
  const newDiv = document.createElement("div");
  const newH4 = document.createElement("h4");
  const newImg = document.createElement("img");
  newH4.innerHTML = country2["title"]
  newImg.src = country2["imgUrl"]
  newDiv.appendChild(newH4)
  newDiv.appendChild(newImg)
  document.body.appendChild(newDiv)
  newDiv.classList.add("divsButton");

  //1.6:
  const myNewButton = document.createElement("button")
  myNewButton.innerHTML = "Eliminar esta foto"
  newDiv.appendChild(myNewButton)

  myNewButton.addEventListener("click", function () {
    const divs = document.querySelectorAll(".divsButton");
    const lastDiv = divs[divs.length - 1];
    lastDiv.parentNode.removeChild(lastDiv);
  }
  )

}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.
const mybutton = document.createElement("button")
mybutton.innerHTML = "Borrar último"
document.body.appendChild(mybutton)

mybutton.addEventListener("click", function () {
  const divs = document.querySelectorAll("div");
  const lastDiv = divs[divs.length - 1];
  lastDiv.parentNode.removeChild(lastDiv);
}
)


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.


