const express = require('express');
const { MongoClient } = require('mongodb');

const app = require('./app');

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
client.connect()
  .then(() => console.log('Подключение к базе данных установлено'))

const server = express();

server.client = client;

server.use(express.static('public'));
server.use('/lib', express.static('node_modules'));

server.use(app);

server.listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'));


