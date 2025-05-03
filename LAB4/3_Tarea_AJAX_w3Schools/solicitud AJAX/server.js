const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.post('/datos4', (req, res) => {
    const now = new Date().toLocaleString();
    res.send(`This content was requested using the POST method.<br><br>Requested at: ${now}`);
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
