function calcularDiasParaArequipa() {
    const hoy = new Date();
    const anioActual = hoy.getFullYear();
    const diaArequipa = new Date(anioActual, 7, 15);

    if (hoy > diaArequipa) {
        diaArequipa.setFullYear(anioActual + 1);
    }

    const diferenciaTiempo = diaArequipa - hoy;
    const diasFaltantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));

    const mensaje = `Faltan ${diasFaltantes} día(s) para el Día de Arequipa`;
    document.getElementById('resultado').textContent = mensaje;
}

calcularDiasParaArequipa();
