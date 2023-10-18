//alert("Hola este es mi JS");
let nuevoacercademi1 = 'sobre mi';

let textoacambiar = document.querySelector('.acerca-de-texto');

function cambiaTexto (nuevoacercademi){
    let contenido = `Hola te presento información ${nuevoacercademi}`;
    return contenido;
}

textoacambiar.innerText = cambiaTexto("sobre mi");

let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };