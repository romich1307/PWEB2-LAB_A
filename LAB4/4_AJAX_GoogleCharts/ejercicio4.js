// Cargar Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Buscar la región Arequipa
      const arequipaData = data.find(item => item.region === "Arequipa");

      if (!arequipaData) {
        console.error("No se encontró la región Arequipa.");
        return;
      }

      // Crear los datos para el gráfico
      const chartData = [["Fecha", "Confirmados"]]; // Encabezado

      arequipaData.confirmed.forEach(entry => {
        chartData.push([entry.date, parseInt(entry.value)]);
      });

      const dataTable = google.visualization.arrayToDataTable(chartData);

      const options = {
        title: 'Casos Confirmados en Arequipa',
        curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: { title: 'Fecha' },
        vAxis: { title: 'Confirmados' }
      };

      const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(dataTable, options);
    })
    .catch(error => {
      console.error('Error al cargar los datos:', error);
    });
}
