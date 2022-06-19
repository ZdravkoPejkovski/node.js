var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// set up template engine
amm.set('view engine, 'ejs);

// static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
