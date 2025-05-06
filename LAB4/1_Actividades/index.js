const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

// Servir el índice general de 1_Actividades
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Ruta para ejercicio 1
app.get('/ejercicio1', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'ejercicio1', 'ejercicio1_actividades.html'));
});

// Ruta para ejercicio 2
app.get('/ejercicio2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'ejercicio2', 'ejercicio2_actividades.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en: http://localhost:${PORT}`);
});