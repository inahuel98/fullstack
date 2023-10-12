/*const miTitulo = document.querySelector("h1");
miTitulo.textContent = "Hola Mundo!";

document.querySelector("html").onclick = function () {
    alert("Ouch deja de clickearme");
};*/

let miImage = document.querySelector("img");
miImage.onclick = function () {
    let miSrc =miImage.getAttribute("src");
    if (miSrc === "images/iphone14_pro.jpg") {
        miImage.setAttribute("src", "images/iphone14_pro_back.jpg");
    } else {
        miImage.setAttribute("src", "images/iphone14_pro.jpg")
    }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("ingrese su nombre");
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem("nombre", miNombre);
        miTitulo.textContent = "iPhone para usted, " + miNombre;
    }
}

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "iPhone para usted, " + nombreAlmacenado;
}

miBoton.onclick = function () {
    estableceNombreUsuario();
};