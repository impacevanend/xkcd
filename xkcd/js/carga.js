//Muestra en pantalla el último comic, compartido por xkcd

window.addEventListener("load", inicio);
function inicio() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then(res => res.json())
    .then(data => {
      contenido.innerHTML = `
    <h1>${data.safe_title}</<h1>
    </br>
    <img src="${data.img}" alt="${data.alt}" width="600px">
    `;
    });
}
