fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const totalesPorRegion = {};

    data.forEach(item => {
      const region = item.region;
      const confirmados = item.confirmed.reduce((total, entry) => total + parseInt(entry.value), 0);

      totalesPorRegion[region] = confirmados;
    });

    const regionesOrdenadas = Object.entries(totalesPorRegion)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    const tabla = document.getElementById('regiones-top10').getElementsByTagName('tbody')[0];

    regionesOrdenadas.forEach(([region, confirmados]) => {
      const fila = document.createElement('tr');
      const celdaRegion = document.createElement('td');
      const celdaConfirmados = document.createElement('td');

      celdaRegion.textContent = region;
      celdaConfirmados.textContent = confirmados;

      fila.appendChild(celdaRegion);
      fila.appendChild(celdaConfirmados);
      tabla.appendChild(fila);
    });
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });
