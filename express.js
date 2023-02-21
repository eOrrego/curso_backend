const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.end("Hola mundo! con express");
});

app.post('/saludos', (req, res) => {
    res.send(`Hola ${req.body.name}!`);
});

app.listen(3040);

