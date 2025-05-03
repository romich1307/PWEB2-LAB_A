google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const regiones = ["Arequipa", "Cusco", "Puno"];

      const fechas = data[0].confirmed.map(entry => entry.date);

      const regionData = {};
      regiones.forEach(region => {
        const regionObj = data.find(r => r.region === region);
        regionData[region] = regionObj
          ? regionObj.confirmed.map(d => parseInt(d.value))
          : fechas.map(() => 0);
      });

      const chartData = [["Fecha", ...regiones]];
      fechas.forEach((fecha, index) => {
        const fila = [fecha];
        regiones.forEach(region => {
          fila.push(regionData[region][index]);
        });
        chartData.push(fila);
      });

      const dataTable = google.visualization.arrayToDataTable(chartData);

      const options = {
        title: 'Comparación de Casos Confirmados entre Regiones',
        curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: { title: 'Fecha', slantedText: true, slantedTextAngle: 45 },
        vAxis: { title: 'Confirmados' }
      };

      const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(dataTable, options);
    })
    .catch(error => console.error('Error cargando data.json:', error));
}
