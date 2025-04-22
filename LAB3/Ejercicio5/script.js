document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);
    const tablaContainer = document.getElementById("tabla-container");

    // Limpia antes de crear nueva tabla
    tablaContainer.innerHTML = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("sumarBtn").style.display = "block";

    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.style.margin = "20px auto";

    for (let i = 0; i < filas; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            const cell = document.createElement("td");
            const numero = Math.floor(Math.random() * 100); // número entre 0-99
            cell.textContent = numero;
            cell.classList.add("valor");
            row.appendChild(cell);
        }
        tabla.appendChild(row);
    }

    tablaContainer.appendChild(tabla);
});

document.getElementById("sumarBtn").addEventListener("click", function () {
    const celdas = document.querySelectorAll(".valor");
    let suma = 0;
    celdas.forEach(celda => {
        suma += parseInt(celda.textContent);
    });

    document.getElementById("resultado").textContent = `La suma total es: ${suma}`;
});
