const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end("Hola mundo! con express");
});

app.listen(3040);

