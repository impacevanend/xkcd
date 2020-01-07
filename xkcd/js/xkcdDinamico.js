// identificando elemento, para insertar contenido.

let contenido = document.getElementById("contenido");
let nota = document.querySelector("#ratingVal");
let star = document.querySelector(".ratings").children;

let aleatorio = Math.floor(Math.random() * 2000);




// Genera los comics aleatoriamiente;
function traer() {
  
  console.log(aleatorio);
  
  // Enviando solicitud de api xkcd

  fetch(`https://xkcd.now.sh/?comic=${aleatorio}`)
    //transformar el archivo a json
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // insertando contenido de api xkcd
      contenido.innerHTML = `
              <h1>${data.safe_title}</<h1>
              </br>
              <img src="${data.img}" alt="${data.alt}" width="600px">
              `;
    });
}

// Selector para calificar contenido xkcd

function calificar(){

  valorUsuario = ratingValue.value;
  
  console.log(`La calificación del usuario del comic, ${aleatorio} fue de ${valorUsuario} estrellas`);

}