var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Add Mongo BBDD cx module file
require('./lib/connectMongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Rutas del Api
 */
app.use('/api/ads', require('./routes/api/ads'))

 /**
 * Rutas del Website
 */
// Ejemplo de middleware añadido
app.use('/prueba', function(req, res, next){
  // hay dos opciones
  // res.send('ok'); //responder
  // console.log('Recibo una petición a ', req.originalUrl);
  next(); // pasar al siguiente
  
  // Ejemplo de que puedo pasar errores a next, lo que me saltará directamente todos los middlewares hasta el error handler
  // next (new Error('La he liado'))
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
