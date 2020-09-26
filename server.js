'use strict';
var cors = require('cors')
const express = require('express');
var path = require('path');

// Constants
const PORT = 4200;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', cors(), (req, res) => {
  res.render('index');
});

app.get('/about', cors(), (req, res) => {
  res.send('Desafio Eugenio Natuar - Hello world\n');
});

app.get('/status', function (req, res) {
  res.send('OK');
});

app.get('/version', function (req, res) {
  res.send('1.0');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

