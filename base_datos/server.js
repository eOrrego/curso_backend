const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
// const pug = require('pug');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

// const tasks = require('./controllers/tasks');

const tasksRoutes = require('./routes/tasks_routes');
const registrationsRoutes = require('./routes/registrations_routes');
const sessionsRoutes = require('./routes/sessions_routes');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'pug');

app.use(session({
    secret: ['dwqewaea13123', 'asdasdasd'],
    resave: false,
    saveUninitialized: false
    }));

// app.get('/tasks', tasks.home);

// const sequelize = new Sequelize('proyecto-backend',null,null,{
//     dialect: 'sqlite',
//     storage: './proyecto-backend'
// });

//let db = new sqlite3.Database('proyecto-backend');

//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

// app.post('/pendientes', (req, res) => {
//     //db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
//     res.send("Tarea agregada");
// });

app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsRoutes);

app.listen(3050);

//process.on('SIGINT', () => {
//    console.log("Cerrando la base de datos");
//    db.close();
//    process.exit();
//});
