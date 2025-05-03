google.charts.load('current', { packages: ['corechart'] });

let jsonData = [];

function loadRegions() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      jsonData = data;
      const container = document.getElementById('checkboxes');
      data.forEach(region => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = region.region;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(region.region));
        container.appendChild(label);
        container.appendChild(document.createElement('br'));
      });
    });
}

function drawSelectedChart() {
  const selected = Array.from(document.querySelectorAll('#checkboxes input:checked'))
    .map(cb => cb.value);

  if (selected.length === 0) {
    alert('Selecciona al menos una región');
    return;
  }

  const filteredRegions = jsonData.filter(region => selected.includes(region.region));
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
    title: 'Confirmados por región (seleccionadas)',
    curveType: 'function',
    legend: { position: 'bottom' }
  });
}
