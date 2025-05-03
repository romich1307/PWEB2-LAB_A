google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(loadData);

function loadData() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => drawChart(data));
}

function drawChart(data) {
  const regionesExcluidas = ['Lima', 'Callao'];

  const regionEjemplo = data.find(r => !regionesExcluidas.includes(r.region));
  const fechas = regionEjemplo.confirmed.map(punto => punto.date);

  const header = ["Fecha"];
  const regionesIncluidas = data
    .filter(r => !regionesExcluidas.includes(r.region));
  
  regionesIncluidas.forEach(r => header.push(r.region));

  const rows = fechas.map((fecha, i) => {
    const fila = [fecha];
    regionesIncluidas.forEach(region => {
      const valor = parseInt(region.confirmed[i]?.value || "0");
      fila.push(valor);
    });
    return fila;
  });

  const chartData = google.visualization.arrayToDataTable([header, ...rows]);

  const options = {
    title: 'Crecimiento de Confirmados por Region (sin Lima ni Callao)',
    curveType: 'function',
    legend: { position: 'right' }
  };

  const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(chartData, options);
}
