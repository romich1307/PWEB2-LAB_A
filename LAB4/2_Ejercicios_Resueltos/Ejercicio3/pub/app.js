function recitar(markupText) {
  const url = 'http://localhost:3000/';
  const data = {
    text: markupText
  };

  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch(url, request)
    .then(response => response.json())
    .then(data => {
      document.querySelector("#htmlCode").innerHTML = data.text;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#markupForm');
  const textarea = document.querySelector('#markupText');
  const resultDiv = document.querySelector('#htmlCode');

  form.onsubmit = (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página

    const markdownText = textarea.value;

    fetch('/2_Ejercicios_Resueltos/Ejercicio3/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: markdownText }), // Envía el texto en formato JSON
    })
      .then((response) => response.json())
      .then((data) => {
        resultDiv.innerHTML = data.text; // Muestra el HTML convertido
      })
      .catch((error) => {
        console.error('Error al convertir Markdown:', error);
      });
  };
});
