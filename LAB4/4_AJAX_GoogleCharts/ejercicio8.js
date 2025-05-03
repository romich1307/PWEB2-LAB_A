google.charts.load('current', { packages: ['corechart'] });

let jsonData = [];

function loadData() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      jsonData = data;
      drawChart();
    });
}

function drawChart() {
  const filteredRegions = jsonData.filter(region => region.region !== 'Lima' && region.region !== 'Callao');

  const dates = filteredRegions[0].confirmed.map(entry => entry.date);

  const dataTable = new google.visualization.DataTable();
  dataTable.addColumn('string', 'Fecha');

  filteredRegions.forEach(region => {
    dataTable.addColumn('number', region.region);
  });

  dates.forEach((date, index) => {
    const row = [date];
    filteredRegions.forEach(region => {
      const value = parseInt(region.confirmed[index].value);
      row.push(isNaN(value) ? 0 : value);
    });
    dataTable.addRow(row);
  });

  const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(dataTable, {
    title: 'Crecimiento del COVID-19 por día (Excepto Lima y Callao)',
    curveType: 'function',
    legend: { position: 'bottom' }
  });
}
