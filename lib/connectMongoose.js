'use strict';

const mongoose = require('mongoose');

mongoose.connection.on('error', err => {
  console.log('Error de Conexión a la BBDD Mongo: ', err);
  process.exit(1);
});

mongoose.connection.once('open', () => {
  console.log('Conectado a MongoDB en', mongoose.connection.name);
});

//TODO: Llevar la cadena de cx a un archivo de configuración fuera de git
mongoose.connect('mongodb://localhost/nodepop', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;