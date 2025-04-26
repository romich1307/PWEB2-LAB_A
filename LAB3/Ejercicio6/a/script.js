let tamañoActual = 20;
let colorActual = "black";

function cambiarTamano() {
    tamañoActual += 5;
    if (tamañoActual > 200) tamañoActual = 16;
    document.getElementById("texto").style.fontSize = tamañoActual + "px";
}

function cambiarColor() {
    const colores = ["black", "blue", "red", "green", "purple"];
    const indice = colores.indexOf(colorActual);
    colorActual = colores[(indice + 1) % colores.length];
    document.getElementById("texto").style.color = colorActual;
}

function actualizarTexto() {
    const nuevoTexto = document.getElementById("inputTexto").value;
    document.getElementById("texto").textContent = nuevoTexto;
}
