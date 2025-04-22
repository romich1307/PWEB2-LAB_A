function obtenerDiaTexto(dia) {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return dias[dia];
}

const hoy = new Date();
const numeroDia = hoy.getDay();
const textoDia = obtenerDiaTexto(numeroDia);

console.log("Hoy es:", textoDia);