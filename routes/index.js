var express = require('express');
var router = express.Router();
// TODO: Toda validación con express-validator

const Ad = require('./../models/Ad');
const asyncHandler = require('express-async-handler');

/* GET / -> homePage */
router.get('/', asyncHandler(async function(req, res, next) {
  res.locals.ads = await Ad.find();
  res.render('index', { title: 'NodePop' });
}));

module.exports = router;

//TODO: remove this comment
// GET /parametroenruta... Ver el código de Javier oara cer cómo se envía el parámetro en ruta
// Esta forma de enviar parámetros siempre va a llegar como un string al servidor.
// También se puede restringir el tipo de dato enviado. Ver parametrofiltrado (expresiones regulares), también en router/index.js
// Ver también parametroopcional y parametros. Éste último es el ejemplo de enviar más de 1 parámetro.
// También podemos recibir parámetros en la query-string, y se queda la url limpita. /querystring
//  Envío de datos en el body. /enelbody
