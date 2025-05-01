function pedirPoema() {
	fetch('/recitar')
		.then(respuesta => respuesta.json())
		.then(data => {
			document.getElementById('resultado').innerHTML = data.text;
		})
		.catch(error => {
			console.error("Error al pedir el poema:", error);
			document.getElementById('resultado').textContent = "No se pudo cargar el poema.";
		});
}
