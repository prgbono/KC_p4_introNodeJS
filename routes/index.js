var express = require('express');
// const { route } = require('./users');
var router = express.Router();
// TODO: Toda validación con express-validator

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodePop' });
});

// GET /parametroenruta... Ver el código de Javier oara cer cómo se envía el parámetro en ruta
// Esta forma de enviar parámetros siempre va a llegar como un string al servidor.
// También se puede restringir el tipo de dato enviado. Ver parametrofiltrado (expresiones regulares), también en router/index.js
// Ver también parametroopcional y parametros. Éste último es el ejemplo de enviar más de 1 parámetro.
// También podemos recibir parámetros en la query-string, y se queda la url limpita. /querystring
//  Envío de datos en el body. /enelbody

router.post('/enelbody', (req, res, next) => {
  console.log('He recibido el dato, req.body: ',req.body);
  console.log('Cabecera; ',req.get('Content-type'));
  res.send('He recibido el body: '+ req.body.numero); // SI PONES AQUÍ , en lugar de + te da error!!!!
})

module.exports = router;
