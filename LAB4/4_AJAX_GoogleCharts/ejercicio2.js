fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const totalesPorRegion = {};

    data.forEach(item => {
      const region = item.region;
      const confirmados = item.confirmed.reduce(
        (total, entry) => total + parseInt(entry.value),
        0
      );

      totalesPorRegion[region] = confirmados;
    });

    const tabla = document
      .getElementById('confirmados-table')
      .getElementsByTagName('tbody')[0];

    for (const region in totalesPorRegion) {
      const fila = document.createElement('tr');
      const celdaRegion = document.createElement('td');
      const celdaConfirmados = document.createElement('td');

      celdaRegion.textContent = region;
      celdaConfirmados.textContent = totalesPorRegion[region];

      fila.appendChild(celdaRegion);
      fila.appendChild(celdaConfirmados);
      tabla.appendChild(fila);
    }
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });
