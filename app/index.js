const path = require('path');
const express = require('express');

const notes = require('./notes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname));

app.locals.basedir = __dirname;

app.on('mount', server => {
  app.client = server.client;
});

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/notes');
});

app.use('/notes', notes);

module.exports = app;
