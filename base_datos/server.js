const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

let db = new sqlite3.Database('proyecto-backend');

//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

app.post('/pendientes', (req, res) => {
    db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
    res.send("Tarea agregada");
});

app.listen(3050);

process.on('SIGINT', () => {
    console.log("Cerrando la base de datos");
    db.close();
    process.exit();
});
