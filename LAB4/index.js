const path = require('path');
const express = require('express');
const app = express();
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

const PORT = 3000;

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir el índice general
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Servir las carpetas de ejercicios
app.use('/1_Actividades', express.static(path.resolve(__dirname, '1_Actividades')));
app.use('/2_Ejercicios_Resueltos', express.static(path.resolve(__dirname, '2_Ejercicios_Resueltos')));
app.use('/3_Tarea_AJAX_w3Schools', express.static(path.resolve(__dirname, '3_Tarea_AJAX_w3Schools')));
app.use('/4_AJAX_GoogleCharts', express.static(path.resolve(__dirname, '4_AJAX_GoogleCharts')));

// Rutas específicas para 1_Actividades
app.get('/1_Actividades/ejercicio1', (req, res) => {
  res.sendFile(path.resolve(__dirname, '1_Actividades', 'ejercicio1', 'ejercicio1_actividades.html'));
});

app.get('/1_Actividades/ejercicio2', (req, res) => {
  res.sendFile(path.resolve(__dirname, '1_Actividades', 'ejercicio2', 'ejercicio2_actividades.html'));
});

// Rutas específicas para 2_Ejercicios_Resueltos
app.get('/2_Ejercicios_Resueltos/Ejercicio1', (req, res) => {
  res.sendFile(path.resolve(__dirname, '2_Ejercicios_Resueltos', 'Ejercicio1', 'index.html'));
});

app.use('/2_Ejercicios_Resueltos/Ejercicio1/pub', express.static(path.resolve(__dirname, '2_Ejercicios_Resueltos', 'Ejercicio1', 'pub')));

app.get('/2_Ejercicios_Resueltos/Ejercicio2', (req, res) => {
  res.sendFile(path.resolve(__dirname, '2_Ejercicios_Resueltos', 'Ejercicio2', 'index.html'));
});

app.get('/2_Ejercicios_Resueltos/Ejercicio2/recitar', (req, res) => {
  const poemaPath = path.resolve(__dirname, '2_Ejercicios_Resueltos', 'Ejercicio2', 'priv', 'poema.txt');
  res.sendFile(poemaPath);
});

app.get('/2_Ejercicios_Resueltos/Ejercicio3', (req, res) => {
  res.sendFile(path.resolve(__dirname, '2_Ejercicios_Resueltos', 'Ejercicio3', 'pub', 'index.html'));
});

app.post('/2_Ejercicios_Resueltos/Ejercicio3/convert', (req, res) => {
  const markdownText = req.body.text; // Obtiene el texto en Markdown del cuerpo de la solicitud
  const htmlText = md.render(markdownText); // Convierte Markdown a HTML
  res.json({ text: htmlText }); // Devuelve el HTML convertido como respuesta JSON
});

// Servir los archivos estáticos del Ejercicio 3
app.use('/2_Ejercicios_Resueltos/Ejercicio3/pub', express.static(path.resolve(__dirname, '2_Ejercicios_Resueltos', 'Ejercicio3', 'pub')));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en: http://localhost:${PORT}`);
});