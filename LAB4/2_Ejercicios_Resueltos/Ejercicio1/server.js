const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('pub'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pub', '1.html'));
});

app.get('/data.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});

app.listen(3000, () => {
  console.log("Servidor en: http://localhost:3000");
});
