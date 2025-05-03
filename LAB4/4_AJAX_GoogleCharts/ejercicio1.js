fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const regionesSet = new Set();

    data.forEach(item => {
      regionesSet.add(item.region);
    });

    const lista = document.getElementById('lista-regiones');
    regionesSet.forEach(region => {
      const li = document.createElement('li');
      li.textContent = region;
      lista.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });
