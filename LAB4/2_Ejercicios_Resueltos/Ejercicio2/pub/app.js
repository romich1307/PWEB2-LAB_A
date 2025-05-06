function recitar() {
  const url = '/2_Ejercicios_Resueltos/Ejercicio2/recitar'; 
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.querySelector("#poema").innerHTML = data; 
    })
    .catch(error => {
      console.error('Error al cargar el poema:', error); 
    });
}
